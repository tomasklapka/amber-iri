# Amber IRI

<a href="http://www.ietf.org/rfc/rfc3986.txt">RFC 3986</a> and <a href="http://www.ietf.org/rfc/rfc3987.txt">RFC 3987</a> (URI/IRI) converting and parsing for [Amber Smalltalk](https://github.com/amber-smalltalk/amber)

Port of [Acubed](https://github.com/Acubed/)'s' (node-iri)[https://github.com/Acubed/node-iri/] JS library. Thanks!

## Possible Issues

I could not find a way how to make Amber understand `\xE9` as `é` (and `\uD800\uDF00\uD800\uDF01\uD800\uDF02` as `𐌀𐌁𐌂`) in `IRITest >> #testIRIToURIConversion`, so they are saved in Unicode for now.

## Announcement

  * I'm new in Smalltalk. If you see something _Smalltalk_ stupid, you are completely free to let me know kindly ;)
  * There are two inline JS functions yet: `encodeString` and `removeDotSegments`. They are class methods for converting strings. Plan is to port them to ST and maybe move them into the instance.