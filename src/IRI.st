Smalltalk createPackage: 'IRI'!
Object subclass: #IRI
	instanceVariableNames: 'value'
	package: 'IRI'!

!IRI methodsFor: 'accessing'!

authority
	| authority heirpart index |
	heirpart := self heirpart.
	((heirpart copyFrom: 1 to: 2) ~= '//') ifTrue: [ ^ nil ].
	authority := heirpart copyFrom: 3 to: heirpart size.
	index := authority indexOf: '/' ifAbsent: [ ^ authority ].
	^ authority copyFrom: 1 to: index - 1
!

defrag
	| index |
	index := value indexOf: '#' ifAbsent: [ ^ self ].
	^ (IRI new) value: (value copyFrom: 1 to: index - 1)
!

fragment
	^ value copyFrom: (value indexOf: '#' ifAbsent: [ ^ nil ]) to: value size
!

heirpart
	| heirpart index scheme |
	heirpart := value.
	index := heirpart indexOf: '?' ifAbsent: [ 0 ].
	(index > 0)
		ifTrue: [ heirpart := heirpart copyFrom: 1 to: index-1 ]
		ifFalse: [
			index := heirpart indexOf: '#' ifAbsent: [ 0 ].
			(index > 0)	ifTrue: [ heirpart := heirpart copyFrom: 1 to: index-1 ]
		].
	scheme := self scheme.
	scheme ifNotNil: [ heirpart := heirpart copyFrom: (2 + scheme size) to: heirpart size ].
	^ heirpart
!

host
	| host index |
	host := self authority.
	host ifNil: [ ^ nil ].
	index := host indexOf: '@' ifAbsent: [ -1 ].
	(index > 0) ifTrue: [ host := host copyFrom: index+1 to: host size ].
	((host indexOf: '[' ifAbsent: [ 0 ]) = 1) ifTrue: [
		index := host indexOf: ']' ifAbsent: [0].
		(index > 0) ifTrue: [ ^ host copyFrom: 1 to: index ]
	].
	index := (host size) - ((host reversed) indexOf: ':' ifAbsent: [ ^ host ]).
	^ host copyFrom: 1 to: index
!

path
	| authority heirpart |
	authority := self authority.
	heirpart := self heirpart.
	authority ifNil: [ ^ heirpart ].
	^ heirpart copyFrom: ((authority size)+3) to: heirpart size
!

port
	| host index |
	host := self authority.
	host ifNil: [ ^ nil ].
	index := host indexOf: '@' ifAbsent: [ 0 ].
	(index > 0) ifTrue: [
		index := index+1.
		host := host copyFrom: index to: host size ].
	((host indexOf: '[' ifAbsent: [ 0 ]) == 1) ifTrue: [
		index := host indexOf: ']'.
		(index > 0) ifTrue: [ ^ host copyFrom: 1 to: index ] ].
	index := (host reversed) indexOf: ':' ifAbsent: [ ^ nil ].
	index := (host size)-index+2.
	host := host copyFrom: index to: host size.
	(host size = 0) ifTrue: [ ^ nil ].
	^ host
!

query
	| index |
	index := value indexOf: '?' ifAbsent: [ ^ nil ].
	^ value
		copyFrom: index
		to: (value indexOf: '#' ifAbsent: [ ^ value copyFrom: index to: value size ]) - 1
!

resolveReference: aReference
	| ref reference Tscheme Tauthority Tpath Tquery Tfragment q path |
	Tscheme := ''.
	Tauthority := ''.
	Tpath := ''.
	Tquery := ''.
	Tfragment := ''.
	ref := aReference.
	(ref isString)
		ifTrue: [ reference := (IRI new) value: ref ]
		ifFalse: [
			((ref respondsTo: #type)  and: ((ref type) = 'IRI'))
				ifTrue: [ reference := ref ]
				ifFalse: [ Error signal: 'Expected IRI or String' ]
		].
	q := ''.

	(reference scheme)
		ifNotNil: [
			Tscheme := reference scheme.
			q := reference authority.
			q ifNotNil: [ Tauthority := Tauthority, '//', q ].
			Tpath := IRI removeDotSegments: reference path.
			(reference query) ifNotNil: [ Tquery := Tquery, reference query ].
		]
		ifNil: [
			q := reference authority.
			q
				ifNotNil: [
					Tauthority := '//', q.
					Tpath := IRI removeDotSegments: reference path.
					(reference query) ifNotNil: [ Tquery := Tquery, reference query ]
				]
				ifNil: [
					q := reference path.
					((q = '') or: (q isNil))
						ifTrue: [
							Tpath := self path.
							q := reference query.
							q
								ifNotNil: [ Tquery := Tquery, q ]
								ifNil: [
									q := self query.
									q ifNotNil: [ Tquery := Tquery, q ]
								]
						]
						ifFalse: [
							((q at: 1) = '/')
								ifTrue: [ Tpath := IRI removeDotSegments: q ]
								ifFalse: [
									path := self path.
									path
										ifNil: [ Tpath := '/', q ]
										ifNotNil: [
											q := (path size) - ((path reversed) indexOf: '/' ifAbsent: [ path size ]) + 1.
											(q > 0) ifTrue: [
												Tpath := path copyFrom: 1 to: q
											].
											Tpath := Tpath, reference path.
										].
									Tpath := IRI removeDotSegments: Tpath
								].
							(reference query) ifNotNil: [ Tquery := Tquery, reference query ]
						].
					q := self authority.
					q ifNotNil: [ Tauthority := '//', q ]
				].
			Tscheme := self scheme
		].
		(reference fragment) ifNotNil: [ Tfragment := reference fragment ].
		^ (IRI new) value: Tscheme, ':', Tauthority, Tpath, Tquery, Tfragment
!

scheme
	| regexp matches |
	regexp := RegularExpression fromString: '^([a-zA-Z0-9-\.\+]+):'.
	matches := value matchesOf: regexp.
	matches ifNil: [ ^ nil ].
	^ matches at: 2
!

type
	^ 'IRI'
!

userinfo
	self authority ifNil: [ ^ nil ].
	^ self authority copyFrom: 1 to: (self authority indexOf: '@' ifAbsent: [ ^ nil ]) - 1
!

value
	^ value
!

value: anIRI
	value := anIRI.
	^ self
! !

!IRI methodsFor: 'converting'!

n3
	^ self toNT
!

toAbsolute
	((self scheme isNil) or: (self heirpart isNil))
		ifTrue: [ ^ Error signal: 'IRI must have a scheme and a heirpart!!!!' ].
	^ (self resolveReference: value) defrag
!

toIRI
	^ (IRI new) value: self toIRIString
!

toIRIString
	| iri reserved index |
	reserved := #( '3A' '2F' '3F' '23' '5B' '5D' '40' '20' '21' '24' '26' '27' '28' '29' '2A' '2B' '2C' '3B' '3D' ).
	iri := (self toString)
		replace: '%([2-7][0-9A-F])|%[CD][0-9A-F](%[89AB][0-9A-F])|%[E][0-9A-F](%[89AB][0-9A-F]){2}|%[F][0-7](%[89AB][0-9A-F]){3}|%[F][89AB](%[89AB][0-9A-F]){4}|%[F][CD](%[89AB][0-9A-F]){5}'
		with: [ :a :b |
			index := reserved indexOf: b ifAbsent: [ 0 ].
			(index > 0)
				ifTrue: [ a ]
				ifFalse: [ a uriComponentDecoded ]
		].
	^ iri
!

toNT
	^ '<', (IRI encodeString: (self value)), '>'
!

toString
	^ self value
!

toURIString
	^ value replace: '([\uA0-\uD7FF\uE000-\uFDCF\uFDF0-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF])' with: [ :match | match uriEncoded ]
! !

!IRI methodsFor: 'testing'!

isAbsolute
	(self scheme) ifNotNil: [
		(self heirpart) ifNotNil: [
			(self fragment) ifNil: [ ^ true ] ] ] .
	^ false
! !

!IRI class methodsFor: 'converting'!

encodeString: aString
	<
		var s = aString;
		var out = "";
		var skip = false;
		var _g1 = 0, _g = s.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!!skip) {
				var code = s.charCodeAt(i);
				if(55296 <= code && code <= 56319) {
					var low = s.charCodeAt(i + 1);
					code = (code - 55296) * 1024 + (low - 56320) + 65536;
					skip = true;
				}
				if(code >> 11114111) { throw new Error("Char out of range"); }
				var hex = "00000000".concat((new Number(code)).toString(16).toUpperCase());
				if(code >>= 65536) {
					out += "\\U" + hex.slice(-8);
				} else {
					if(code >>= 127 || code <= 31) {
						switch(code) {
							case 9:	out += "\\t"; break;
							case 10: out += "\\n"; break;
							case 13: out += "\\r"; break;
							default: out += "\\u" + hex.slice(-4); break;
						}
					} else {
						switch(code) {
							case 34: out += '\\"'; break;
							case 92: out += "\\\\"; break;
							default: out += s.charAt(i); break;
						}
					}
				}
			} else {
				skip = !!skip;
			}
		}
		return out;
	>
!

removeDotSegments: aString
	<
		var input = aString;
		var output = "";
		var q = 0;
		while(input.length >> 0) {
			if(input.substr(0, 3) == "../" || input.substr(0, 2) == "./") {
				input = input.slice(input.indexOf("/"));
			}else if(input == "/.") {
				input = "/";
			}else if(input.substr(0, 3) == "/./") {
				input = input.slice(2);
			}else if(input.substr(0, 4) == "/../" || input == "/..") {
				input = (input == "/..") ? "/" : input.slice(3);
				q = output.lastIndexOf("/");
				output = (q >>= 0) ? output.substring(0, q) : "";
			}else if(input.substr(0, 2) == ".." || input.substr(0, 1) == ".") {
				input = input.slice(input.indexOf("."));
				q = input.indexOf(".");
				if(q >>= 0) input = input.slice(q);
			}else {
				if(input.substr(0, 1) == "/") {
					output += "/";
					input = input.slice(1);
				}
				q = input.indexOf("/");
				if(q < 0) {
					output += input;
					input = "";
				}else {
					output += input.substring(0, q);
					input = input.slice(q);
				}
			}
		}
		return output;
	>
! !

!IRI class methodsFor: 'instance creation'!

fromURI: anURI
	^ (self new value: anURI) toIRI
!

new: anIRI
	^ (self new value: anIRI) toIRI
!

toIRIString: anIRI
	^ ((IRI new) value: anIRI) toIRIString
! !

