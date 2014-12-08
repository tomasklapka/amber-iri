Smalltalk createPackage: 'IRI-Tests'!
TestCase subclass: #IRITest
	instanceVariableNames: ''
	package: 'IRI-Tests'!

!IRITest methodsFor: 'initialization'!

iri1
	^ IRI new value: 'http://example.com/'
!

iri2
	^ IRI new value: 'https://user:pass@a.example.com:8080/b/c/d/?123&aa=1&aa=2#455'
!

iri3
	^ IRI new value:  'http://a/b/c/d;p?q'
!

iri4
	^ IRI new value: '/relative/path'
!

iri5
	^ IRI new value: '/path?q=1&r=2#35'
!

iri6
	^ IRI new value: '/'
! !

!IRITest methodsFor: 'tests'!

testDefrag
	"defrag"
	self assert: (self iri1 defrag value) equals: 'http://example.com/'.
	self assert: (self iri2 defrag value) equals: 'https://user:pass@a.example.com:8080/b/c/d/?123&aa=1&aa=2'.
	self assert: (self iri3 defrag value) equals: 'http://a/b/c/d;p?q'.
	self assert: (self iri4 defrag value) equals: '/relative/path'.
	self assert: (self iri5 defrag value) equals: '/path?q=1&r=2'.
	self assert: (self iri6 defrag value) equals: '/'
!

testFragment
	"fragment"
	self assert: (self iri1 fragment) equals: nil.
	self assert: (self iri2 fragment) equals: '#455'.
	self assert: (self iri3 fragment) equals: nil.
	self assert: (self iri4 fragment) equals: nil.
	self assert: (self iri5 fragment) equals: '#35'.
	self assert: (self iri6 fragment) equals: nil
!

testHeirpart
	"heirpart"
	self assert: (self iri1 heirpart) equals: '//example.com/'.
	self assert: (self iri2 heirpart) equals: '//user:pass@a.example.com:8080/b/c/d/'.
	self assert: (self iri3 heirpart) equals: '//a/b/c/d;p'.
	self assert: (self iri4 heirpart) equals: '/relative/path'.
	self assert: (self iri5 heirpart) equals: '/path'.
	self assert: (self iri6 heirpart) equals: '/'
!

testHost
	"host"
	self assert: (self iri1 host) equals: 'example.com'.
	self assert: (self iri2 host) equals: 'a.example.com'.
	self assert: (self iri3 host) equals: 'a'.
	self assert: (self iri4 host) equals: nil.
	self assert: (self iri5 host) equals: nil.
	self assert: (self iri6 host) equals: nil
!

testIRIToURIConversion
	"IRI to URI conversion"
	self
		assert: ((IRI new value: 'http://www.example.org/red%09rosé#red') toURIString)
		equals: 'http://www.example.org/red%09ros%C3%A9#red'.
	"IRI to URI conversion with surrogate pairs"
	self
		assert: ((IRI new value: 'http://example.com/𐌀𐌁𐌂') toURIString)
		equals: 'http://example.com/%F0%90%8C%80%F0%90%8C%81%F0%90%8C%82'.
	"IRI<->URI conversion"
	#{
		'http://www.example.org/red%09rosé#red' -> 'http://www.example.org/red%09ros%C3%A9#red'.
		'http://example.com/𐌀𐌁𐌂' -> 'http://example.com/%F0%90%8C%80%F0%90%8C%81%F0%90%8C%82'.
		'http://www.example.org/résumé.html' -> 'http://www.example.org/r%C3%A9sum%C3%A9.html'.
		'http://www.example.org/%2F' -> 'http://www.example.org/%2F'
	} keysAndValuesDo: [ :iri :uri |
		"IRI->URI"
			self assert: ((IRI new value: iri) toURIString) equals: uri.
		"URI->IRI"
		self assert: ((IRI new value: uri) toIRIString) equals: iri.
	]
!

testIsAbsolute
	"isAbsolute"
	self assert: (self iri1 isAbsolute) equals: true.
	self assert: (self iri2 isAbsolute) equals: false.
	self assert: (self iri3 isAbsolute) equals: true.
	self assert: (self iri4 isAbsolute) equals: false.
	self assert: (self iri5 isAbsolute) equals: false.
	self assert: (self iri6 isAbsolute) equals: false
!

testN3
	"n3"
	self assert: (self iri1 n3) equals: '<http://example.com/>'.
	self assert: (self iri2 n3) equals: '<https://user:pass@a.example.com:8080/b/c/d/?123&aa=1&aa=2#455>'.
	self assert: (self iri3 n3) equals: '<http://a/b/c/d;p?q>'.
	self assert: (self iri4 n3) equals: '</relative/path>'.
	self assert: (self iri5 n3) equals: '</path?q=1&r=2#35>'.
	self assert: (self iri6 n3) equals: '</>'
!

testPath
	"path"
	self assert: (self iri1 path) equals: '/'.
	self assert: (self iri2 path) equals: '/b/c/d/'.
	self assert: (self iri3 path) equals: '/b/c/d;p'.
	self assert: (self iri4 path) equals: '/relative/path'.
	self assert: (self iri5 path) equals: '/path'.
	self assert: (self iri6 path) equals: '/'
!

testPort
	"port"
	self assert: (self iri1 port) equals: nil.
	self assert: (self iri2 port) equals: '8080'.
	self assert: (self iri3 port) equals: nil.
	self assert: (self iri4 port) equals: nil.
	self assert: (self iri5 port) equals: nil.
	self assert: (self iri6 port) equals: nil
!

testQuery
	"query"
	self assert: (self iri1 query) equals: nil.
	self assert: (self iri2 query) equals: '?123&aa=1&aa=2'.
	self assert: (self iri3 query) equals: '?q'.
	self assert: (self iri4 query) equals: nil.
	self assert: (self iri5 query) equals: '?q=1&r=2'.
	self assert: (self iri6 query) equals: nil
!

testResolveReference
	"resolveReference: absoluteURI"
	self assert: ((self iri1 resolveReference: 'http://xyz.example.org/123') value) equals: 'http://xyz.example.org/123'.
	self assert: ((self iri2 resolveReference: 'http://xyz.example.org/123') value) equals: 'http://xyz.example.org/123'.
	"resolveReference: path"
	self assert: ((self iri1 resolveReference: '/a/b/c') value) equals: 'http://example.com/a/b/c'.
	self assert: ((self iri2 resolveReference: '/a/b/c') value) equals: 'https://user:pass@a.example.com:8080/a/b/c'.
	"resolveReference: authority"
	self assert: ((self iri1 resolveReference: '//example.org/1?x') value) equals: 'http://example.org/1?x'.
	self assert: ((self iri2 resolveReference: '//example.org/1?x') value) equals: 'https://example.org/1?x'.
	"resolveReference: relative"
	self assert: ((self iri1 resolveReference: 'b/c.js') value) equals: 'http://example.com/b/c.js'.
	self assert: ((self iri2 resolveReference: 'b/c.js') value) equals: 'https://user:pass@a.example.com:8080/b/c/d/b/c.js'.
	"resolveReference: decend"
	self assert: ((self iri1 resolveReference: '../..') value) equals: 'http://example.com/'.
	self assert: ((self iri2 resolveReference: '../..') value) equals: 'https://user:pass@a.example.com:8080/b/'.
	"resolveReference: query"
	self assert: ((self iri1 resolveReference: '?query') value) equals: 'http://example.com/?query'.
	self assert: ((self iri2 resolveReference: '?query') value) equals: 'https://user:pass@a.example.com:8080/b/c/d/?query'
!

testResolveReferenceRFC3986
	"resolveReference: <g:h>"
	self assert: ((self iri3 resolveReference: 'g:h') value) equals: 'g:h'.
	"resolveReference: <g>"
	self assert: ((self iri3 resolveReference: 'g') value) equals: 'http://a/b/c/g'.
	"resolveReference: <./g>"
	self assert: ((self iri3 resolveReference: './g') value) equals: 'http://a/b/c/g'.
	"resolveReference: <g/>"
	self assert: ((self iri3 resolveReference: 'g/') value) equals: 'http://a/b/c/g/'.
	"resolveReference: </g>"
	self assert: ((self iri3 resolveReference: '/g') value) equals: 'http://a/g'.
	"resolveReference: <//g>"
	self assert: ((self iri3 resolveReference: '//g') value) equals: 'http://g'.
	"resolveReference: <?y>"
	self assert: ((self iri3 resolveReference: '?y') value) equals: 'http://a/b/c/d;p?y'.
	"resolveReference: <g?y>"
	self assert: ((self iri3 resolveReference: 'g?y') value) equals: 'http://a/b/c/g?y'.
	"resolveReference: <#s>"
	self assert: ((self iri3 resolveReference: '#s') value) equals: 'http://a/b/c/d;p?q#s'.
	"resolveReference: <g#s>"
	self assert: ((self iri3 resolveReference: 'g#s') value) equals: 'http://a/b/c/g#s'.
	"resolveReference: <g?y#s>"
	self assert: ((self iri3 resolveReference: 'g?y#s') value) equals: 'http://a/b/c/g?y#s'.
	"resolveReference: <;x>"
	self assert: ((self iri3 resolveReference: ';x') value) equals: 'http://a/b/c/;x'.
	"resolveReference: <g;x>"
	self assert: ((self iri3 resolveReference: 'g;x') value) equals: 'http://a/b/c/g;x'.
	"resolveReference: <g;x?y#s>"
	self assert: ((self iri3 resolveReference: 'g;x?y#s') value) equals: 'http://a/b/c/g;x?y#s'.
	"resolveReference: <>"
	self assert: ((self iri3 resolveReference: '') value) equals: 'http://a/b/c/d;p?q'.
	"resolveReference: <.>"
	self assert: ((self iri3 resolveReference: '.') value) equals: 'http://a/b/c/'.
	"resolveReference: <./>"
	self assert: ((self iri3 resolveReference: './') value) equals: 'http://a/b/c/'.
	"resolveReference: <..>"
	self assert: ((self iri3 resolveReference: '..') value) equals: 'http://a/b/'.
	"resolveReference: <../>"
	self assert: ((self iri3 resolveReference: '../') value) equals: 'http://a/b/'.
	"resolveReference: <../g>"
	self assert: ((self iri3 resolveReference: '../g') value) equals: 'http://a/b/g'.
	"resolveReference: <../..>"
	self assert: ((self iri3 resolveReference: '../..') value) equals: 'http://a/'.
	"resolveReference: <../../>"
	self assert: ((self iri3 resolveReference: '../../') value) equals: 'http://a/'.
	"resolveReference: <../../g>"
	self assert: ((self iri3 resolveReference: '../../g') value) equals: 'http://a/g'.
	"resolveReference: <../../../g>"
	self assert: ((self iri3 resolveReference: '../../../g') value) equals: 'http://a/g'.
	"resolveReference: <../../../../g>"
	self assert: ((self iri3 resolveReference: '../../../../g') value) equals: 'http://a/g'.
	"resolveReference: </./g>"
	self assert: ((self iri3 resolveReference: '/./g') value) equals: 'http://a/g'.
	"resolveReference: </../g>"
	self assert: ((self iri3 resolveReference: '/../g') value) equals: 'http://a/g'.
	"resolveReference: <g.>"
	self assert: ((self iri3 resolveReference: 'g.') value) equals: 'http://a/b/c/g.'.
	"resolveReference: <.g>"
	self assert: ((self iri3 resolveReference: '.g') value) equals: 'http://a/b/c/.g'.
	"resolveReference: <g..>"
	self assert: ((self iri3 resolveReference: 'g..') value) equals: 'http://a/b/c/g..'.
	"resolveReference: <..g>"
	self assert: ((self iri3 resolveReference: '..g') value) equals: 'http://a/b/c/..g'.
	"resolveReference: <./../g>"
	self assert: ((self iri3 resolveReference: './../g') value) equals: 'http://a/b/g'.
	"resolveReference: <./g/.>"
	self assert: ((self iri3 resolveReference: './g/.') value) equals: 'http://a/b/c/g/'.
	"resolveReference: <g/./h>"
	self assert: ((self iri3 resolveReference: 'g/./h') value) equals: 'http://a/b/c/g/h'.
	"resolveReference: <g/../h>"
	self assert: ((self iri3 resolveReference: 'g/../h') value) equals: 'http://a/b/c/h'.
	"resolveReference: <g;x=1/./y>"
	self assert: ((self iri3 resolveReference: 'g;x=1/./y') value) equals: 'http://a/b/c/g;x=1/y'.
	"resolveReference: <g;x=1/../y>"
	self assert: ((self iri3 resolveReference: 'g;x=1/../y') value) equals: 'http://a/b/c/y'.
	"resolveReference: <g?y/./x>"
	self assert: ((self iri3 resolveReference: 'g?y/./x') value) equals: 'http://a/b/c/g?y/./x'.
	"resolveReference: <g?y/../x>"
	self assert: ((self iri3 resolveReference: 'g?y/../x') value) equals: 'http://a/b/c/g?y/../x'.
	"resolveReference: <g#s/./x>"
	self assert: ((self iri3 resolveReference: 'g#s/./x') value) equals: 'http://a/b/c/g#s/./x'.
	"resolveReference: <g#s/../x>"
	self assert: ((self iri3 resolveReference: 'g#s/../x') value) equals: 'http://a/b/c/g#s/../x'
!

testScheme
	"scheme"
	self assert: (self iri1 scheme) equals: 'http'.
	self assert: (self iri2 scheme) equals: 'https'.
	self assert: (self iri3 scheme) equals: 'http'.
	self assert: (self iri4 scheme) equals: nil.
	self assert: (self iri5 scheme) equals: nil.
	self assert: (self iri6 scheme) equals: nil
!

testToAbsolute
	"toAbsolute"
	self assert: ((self iri1 toAbsolute) value) equals: 'http://example.com/'.
	self assert: ((self iri2 toAbsolute) value) equals: 'https://user:pass@a.example.com:8080/b/c/d/?123&aa=1&aa=2'.
	self assert: ((self iri3 toAbsolute) value) equals: 'http://a/b/c/d;p?q'.
	self should: [ self iri4 toAbsolute ] raise: Error.
	self should: [ self iri5 toAbsolute ] raise: Error.
	self should: [ self iri6 toAbsolute ] raise: Error
!

testToNT
	"toNT"
	self assert: (self iri1 toNT) equals: '<http://example.com/>'.
	self assert: (self iri2 toNT) equals: '<https://user:pass@a.example.com:8080/b/c/d/?123&aa=1&aa=2#455>'.
	self assert: (self iri3 toNT) equals: '<http://a/b/c/d;p?q>'.
	self assert: (self iri4 toNT) equals: '</relative/path>'.
	self assert: (self iri5 toNT) equals: '</path?q=1&r=2#35>'.
	self assert: (self iri6 toNT) equals: '</>'
!

testType
	"type"
	self assert: (self iri1 type) equals: 'IRI'.
	self assert: (self iri2 type) equals: 'IRI'.
	self assert: (self iri3 type) equals: 'IRI'.
	self assert: (self iri4 type) equals: 'IRI'.
	self assert: (self iri5 type) equals: 'IRI'.
	self assert: (self iri6 type) equals: 'IRI'
!

testUserinfo
	"userinfo"
	self assert: (self iri1 userinfo) equals: nil.
	self assert: (self iri2 userinfo) equals: 'user:pass'.
	self assert: (self iri3 userinfo) equals: nil.
	self assert: (self iri4 userinfo) equals: nil.
	self assert: (self iri5 userinfo) equals: nil.
	self assert: (self iri6 userinfo) equals: nil
!

testValue
	"value"
	self assert: (self iri1 value) equals: 'http://example.com/'.
	self assert: (self iri2 value) equals: 'https://user:pass@a.example.com:8080/b/c/d/?123&aa=1&aa=2#455'.
	self assert: (self iri3 value) equals: 'http://a/b/c/d;p?q'.
	self assert: (self iri4 value) equals: '/relative/path'.
	self assert: (self iri5 value) equals: '/path?q=1&r=2#35'.
	self assert: (self iri6 value) equals: '/'
! !

