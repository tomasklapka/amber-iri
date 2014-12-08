define("amber-iri/IRI-Tests", ["amber/boot", "amber_core/SUnit"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('IRI-Tests');
$core.packages["IRI-Tests"].transport = {"type":"amd","amdNamespace":"amber-iri"};

$core.addClass('IRITest', $globals.TestCase, [], 'IRI-Tests');
$core.addMethod(
$core.method({
selector: "iri1",
protocol: 'initialization',
fn: function (){
var self=this;
function $IRI(){return $globals.IRI||(typeof IRI=="undefined"?nil:IRI)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($IRI())._new())._value_("http://example.com/");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"iri1",{},$globals.IRITest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "iri1\x0a\x09^ IRI new value: 'http://example.com/'",
referencedClasses: ["IRI"],
//>>excludeEnd("ide");
messageSends: ["value:", "new"]
}),
$globals.IRITest);

$core.addMethod(
$core.method({
selector: "iri2",
protocol: 'initialization',
fn: function (){
var self=this;
function $IRI(){return $globals.IRI||(typeof IRI=="undefined"?nil:IRI)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($IRI())._new())._value_("https://user:pass@a.example.com:8080/b/c/d/?123&aa=1&aa=2#455");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"iri2",{},$globals.IRITest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "iri2\x0a\x09^ IRI new value: 'https://user:pass@a.example.com:8080/b/c/d/?123&aa=1&aa=2#455'",
referencedClasses: ["IRI"],
//>>excludeEnd("ide");
messageSends: ["value:", "new"]
}),
$globals.IRITest);

$core.addMethod(
$core.method({
selector: "iri3",
protocol: 'initialization',
fn: function (){
var self=this;
function $IRI(){return $globals.IRI||(typeof IRI=="undefined"?nil:IRI)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($IRI())._new())._value_("http://a/b/c/d;p?q");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"iri3",{},$globals.IRITest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "iri3\x0a\x09^ IRI new value:  'http://a/b/c/d;p?q'",
referencedClasses: ["IRI"],
//>>excludeEnd("ide");
messageSends: ["value:", "new"]
}),
$globals.IRITest);

$core.addMethod(
$core.method({
selector: "iri4",
protocol: 'initialization',
fn: function (){
var self=this;
function $IRI(){return $globals.IRI||(typeof IRI=="undefined"?nil:IRI)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($IRI())._new())._value_("/relative/path");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"iri4",{},$globals.IRITest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "iri4\x0a\x09^ IRI new value: '/relative/path'",
referencedClasses: ["IRI"],
//>>excludeEnd("ide");
messageSends: ["value:", "new"]
}),
$globals.IRITest);

$core.addMethod(
$core.method({
selector: "iri5",
protocol: 'initialization',
fn: function (){
var self=this;
function $IRI(){return $globals.IRI||(typeof IRI=="undefined"?nil:IRI)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($IRI())._new())._value_("/path?q=1&r=2#35");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"iri5",{},$globals.IRITest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "iri5\x0a\x09^ IRI new value: '/path?q=1&r=2#35'",
referencedClasses: ["IRI"],
//>>excludeEnd("ide");
messageSends: ["value:", "new"]
}),
$globals.IRITest);

$core.addMethod(
$core.method({
selector: "iri6",
protocol: 'initialization',
fn: function (){
var self=this;
function $IRI(){return $globals.IRI||(typeof IRI=="undefined"?nil:IRI)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($IRI())._new())._value_("/");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"iri6",{},$globals.IRITest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "iri6\x0a\x09^ IRI new value: '/'",
referencedClasses: ["IRI"],
//>>excludeEnd("ide");
messageSends: ["value:", "new"]
}),
$globals.IRITest);

$core.addMethod(
$core.method({
selector: "testDefrag",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$6,$5,$8,$7,$10,$9;
$2=$recv(self._iri1())._defrag();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["defrag"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,"http://example.com/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$4=$recv(self._iri2())._defrag();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["defrag"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($3,"https://user:pass@a.example.com:8080/b/c/d/?123&aa=1&aa=2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$6=$recv(self._iri3())._defrag();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["defrag"]=3;
//>>excludeEnd("ctx");
$5=$recv($6)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($5,"http://a/b/c/d;p?q");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$8=$recv(self._iri4())._defrag();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["defrag"]=4;
//>>excludeEnd("ctx");
$7=$recv($8)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=4;
//>>excludeEnd("ctx");
self._assert_equals_($7,"/relative/path");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$10=$recv(self._iri5())._defrag();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["defrag"]=5;
//>>excludeEnd("ctx");
$9=$recv($10)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($9,"/path?q=1&r=2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($recv($recv(self._iri6())._defrag())._value(),"/");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDefrag",{},$globals.IRITest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDefrag\x0a\x09\x22defrag\x22\x0a\x09self assert: (self iri1 defrag value) equals: 'http://example.com/'.\x0a\x09self assert: (self iri2 defrag value) equals: 'https://user:pass@a.example.com:8080/b/c/d/?123&aa=1&aa=2'.\x0a\x09self assert: (self iri3 defrag value) equals: 'http://a/b/c/d;p?q'.\x0a\x09self assert: (self iri4 defrag value) equals: '/relative/path'.\x0a\x09self assert: (self iri5 defrag value) equals: '/path?q=1&r=2'.\x0a\x09self assert: (self iri6 defrag value) equals: '/'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "value", "defrag", "iri1", "iri2", "iri3", "iri4", "iri5", "iri6"]
}),
$globals.IRITest);

$core.addMethod(
$core.method({
selector: "testFragment",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
$1=$recv(self._iri1())._fragment();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fragment"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=$recv(self._iri2())._fragment();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fragment"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($2,"#455");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$3=$recv(self._iri3())._fragment();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fragment"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($3,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$4=$recv(self._iri4())._fragment();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fragment"]=4;
//>>excludeEnd("ctx");
self._assert_equals_($4,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$5=$recv(self._iri5())._fragment();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fragment"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($5,"#35");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($recv(self._iri6())._fragment(),nil);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testFragment",{},$globals.IRITest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testFragment\x0a\x09\x22fragment\x22\x0a\x09self assert: (self iri1 fragment) equals: nil.\x0a\x09self assert: (self iri2 fragment) equals: '#455'.\x0a\x09self assert: (self iri3 fragment) equals: nil.\x0a\x09self assert: (self iri4 fragment) equals: nil.\x0a\x09self assert: (self iri5 fragment) equals: '#35'.\x0a\x09self assert: (self iri6 fragment) equals: nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "fragment", "iri1", "iri2", "iri3", "iri4", "iri5", "iri6"]
}),
$globals.IRITest);

$core.addMethod(
$core.method({
selector: "testHeirpart",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
$1=$recv(self._iri1())._heirpart();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["heirpart"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,"//example.com/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=$recv(self._iri2())._heirpart();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["heirpart"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($2,"//user:pass@a.example.com:8080/b/c/d/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$3=$recv(self._iri3())._heirpart();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["heirpart"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($3,"//a/b/c/d;p");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$4=$recv(self._iri4())._heirpart();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["heirpart"]=4;
//>>excludeEnd("ctx");
self._assert_equals_($4,"/relative/path");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$5=$recv(self._iri5())._heirpart();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["heirpart"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($5,"/path");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($recv(self._iri6())._heirpart(),"/");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testHeirpart",{},$globals.IRITest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testHeirpart\x0a\x09\x22heirpart\x22\x0a\x09self assert: (self iri1 heirpart) equals: '//example.com/'.\x0a\x09self assert: (self iri2 heirpart) equals: '//user:pass@a.example.com:8080/b/c/d/'.\x0a\x09self assert: (self iri3 heirpart) equals: '//a/b/c/d;p'.\x0a\x09self assert: (self iri4 heirpart) equals: '/relative/path'.\x0a\x09self assert: (self iri5 heirpart) equals: '/path'.\x0a\x09self assert: (self iri6 heirpart) equals: '/'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "heirpart", "iri1", "iri2", "iri3", "iri4", "iri5", "iri6"]
}),
$globals.IRITest);

$core.addMethod(
$core.method({
selector: "testHost",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
$1=$recv(self._iri1())._host();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["host"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,"example.com");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=$recv(self._iri2())._host();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["host"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($2,"a.example.com");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$3=$recv(self._iri3())._host();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["host"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($3,"a");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$4=$recv(self._iri4())._host();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["host"]=4;
//>>excludeEnd("ctx");
self._assert_equals_($4,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$5=$recv(self._iri5())._host();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["host"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($5,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($recv(self._iri6())._host(),nil);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testHost",{},$globals.IRITest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testHost\x0a\x09\x22host\x22\x0a\x09self assert: (self iri1 host) equals: 'example.com'.\x0a\x09self assert: (self iri2 host) equals: 'a.example.com'.\x0a\x09self assert: (self iri3 host) equals: 'a'.\x0a\x09self assert: (self iri4 host) equals: nil.\x0a\x09self assert: (self iri5 host) equals: nil.\x0a\x09self assert: (self iri6 host) equals: nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "host", "iri1", "iri2", "iri3", "iri4", "iri5", "iri6"]
}),
$globals.IRITest);

$core.addMethod(
$core.method({
selector: "testIRIToURIConversion",
protocol: 'tests',
fn: function (){
var self=this;
function $IRI(){return $globals.IRI||(typeof IRI=="undefined"?nil:IRI)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1,$6,$5,$4,$9,$8,$7;
$3=$recv($IRI())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._value_("http://www.example.org/red%09rosé#red");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._toURIString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["toURIString"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,"http://www.example.org/red%09ros%C3%A9#red");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$6=$recv($IRI())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$5=$recv($6)._value_("http://example.com/𐌀𐌁𐌂");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value:"]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._toURIString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["toURIString"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($4,"http://example.com/%F0%90%8C%80%F0%90%8C%81%F0%90%8C%82");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$recv($globals.HashedCollection._newFromPairs_(["http://www.example.org/red%09rosé#red","http://www.example.org/red%09ros%C3%A9#red","http://example.com/𐌀𐌁𐌂","http://example.com/%F0%90%8C%80%F0%90%8C%81%F0%90%8C%82","http://www.example.org/résumé.html","http://www.example.org/r%C3%A9sum%C3%A9.html","http://www.example.org/%2F","http://www.example.org/%2F"]))._keysAndValuesDo_((function(iri,uri){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$9=$recv($IRI())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["new"]=3;
//>>excludeEnd("ctx");
$8=$recv($9)._value_(iri);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value:"]=3;
//>>excludeEnd("ctx");
$7=$recv($8)._toURIString();
self._assert_equals_($7,uri);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
return self._assert_equals_($recv($recv($recv($IRI())._new())._value_(uri))._toIRIString(),iri);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({iri:iri,uri:uri},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIRIToURIConversion",{},$globals.IRITest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIRIToURIConversion\x0a\x09\x22IRI to URI conversion\x22\x0a\x09self\x0a\x09\x09assert: ((IRI new value: 'http://www.example.org/red%09rosé#red') toURIString)\x0a\x09\x09equals: 'http://www.example.org/red%09ros%C3%A9#red'.\x0a\x09\x22IRI to URI conversion with surrogate pairs\x22\x0a\x09self\x0a\x09\x09assert: ((IRI new value: 'http://example.com/𐌀𐌁𐌂') toURIString)\x0a\x09\x09equals: 'http://example.com/%F0%90%8C%80%F0%90%8C%81%F0%90%8C%82'.\x0a\x09\x22IRI<->URI conversion\x22\x0a\x09#{\x0a\x09\x09'http://www.example.org/red%09rosé#red' -> 'http://www.example.org/red%09ros%C3%A9#red'.\x0a\x09\x09'http://example.com/𐌀𐌁𐌂' -> 'http://example.com/%F0%90%8C%80%F0%90%8C%81%F0%90%8C%82'.\x0a\x09\x09'http://www.example.org/résumé.html' -> 'http://www.example.org/r%C3%A9sum%C3%A9.html'.\x0a\x09\x09'http://www.example.org/%2F' -> 'http://www.example.org/%2F'\x0a\x09} keysAndValuesDo: [ :iri :uri |\x0a\x09\x09\x22IRI->URI\x22\x0a\x09\x09\x09self assert: ((IRI new value: iri) toURIString) equals: uri.\x0a\x09\x09\x22URI->IRI\x22\x0a\x09\x09self assert: ((IRI new value: uri) toIRIString) equals: iri.\x0a\x09]",
referencedClasses: ["IRI"],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "toURIString", "value:", "new", "keysAndValuesDo:", "toIRIString"]
}),
$globals.IRITest);

$core.addMethod(
$core.method({
selector: "testIsAbsolute",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
$1=$recv(self._iri1())._isAbsolute();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isAbsolute"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=$recv(self._iri2())._isAbsolute();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isAbsolute"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($2,false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$3=$recv(self._iri3())._isAbsolute();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isAbsolute"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($3,true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$4=$recv(self._iri4())._isAbsolute();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isAbsolute"]=4;
//>>excludeEnd("ctx");
self._assert_equals_($4,false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$5=$recv(self._iri5())._isAbsolute();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isAbsolute"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($5,false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($recv(self._iri6())._isAbsolute(),false);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIsAbsolute",{},$globals.IRITest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIsAbsolute\x0a\x09\x22isAbsolute\x22\x0a\x09self assert: (self iri1 isAbsolute) equals: true.\x0a\x09self assert: (self iri2 isAbsolute) equals: false.\x0a\x09self assert: (self iri3 isAbsolute) equals: true.\x0a\x09self assert: (self iri4 isAbsolute) equals: false.\x0a\x09self assert: (self iri5 isAbsolute) equals: false.\x0a\x09self assert: (self iri6 isAbsolute) equals: false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "isAbsolute", "iri1", "iri2", "iri3", "iri4", "iri5", "iri6"]
}),
$globals.IRITest);

$core.addMethod(
$core.method({
selector: "testN3",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
$1=$recv(self._iri1())._n3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["n3"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,"<http://example.com/>");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=$recv(self._iri2())._n3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["n3"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($2,"<https://user:pass@a.example.com:8080/b/c/d/?123&aa=1&aa=2#455>");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$3=$recv(self._iri3())._n3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["n3"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($3,"<http://a/b/c/d;p?q>");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$4=$recv(self._iri4())._n3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["n3"]=4;
//>>excludeEnd("ctx");
self._assert_equals_($4,"</relative/path>");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$5=$recv(self._iri5())._n3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["n3"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($5,"</path?q=1&r=2#35>");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($recv(self._iri6())._n3(),"</>");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testN3",{},$globals.IRITest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testN3\x0a\x09\x22n3\x22\x0a\x09self assert: (self iri1 n3) equals: '<http://example.com/>'.\x0a\x09self assert: (self iri2 n3) equals: '<https://user:pass@a.example.com:8080/b/c/d/?123&aa=1&aa=2#455>'.\x0a\x09self assert: (self iri3 n3) equals: '<http://a/b/c/d;p?q>'.\x0a\x09self assert: (self iri4 n3) equals: '</relative/path>'.\x0a\x09self assert: (self iri5 n3) equals: '</path?q=1&r=2#35>'.\x0a\x09self assert: (self iri6 n3) equals: '</>'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "n3", "iri1", "iri2", "iri3", "iri4", "iri5", "iri6"]
}),
$globals.IRITest);

$core.addMethod(
$core.method({
selector: "testPath",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
$1=$recv(self._iri1())._path();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["path"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,"/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=$recv(self._iri2())._path();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["path"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($2,"/b/c/d/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$3=$recv(self._iri3())._path();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["path"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($3,"/b/c/d;p");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$4=$recv(self._iri4())._path();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["path"]=4;
//>>excludeEnd("ctx");
self._assert_equals_($4,"/relative/path");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$5=$recv(self._iri5())._path();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["path"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($5,"/path");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($recv(self._iri6())._path(),"/");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPath",{},$globals.IRITest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPath\x0a\x09\x22path\x22\x0a\x09self assert: (self iri1 path) equals: '/'.\x0a\x09self assert: (self iri2 path) equals: '/b/c/d/'.\x0a\x09self assert: (self iri3 path) equals: '/b/c/d;p'.\x0a\x09self assert: (self iri4 path) equals: '/relative/path'.\x0a\x09self assert: (self iri5 path) equals: '/path'.\x0a\x09self assert: (self iri6 path) equals: '/'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "path", "iri1", "iri2", "iri3", "iri4", "iri5", "iri6"]
}),
$globals.IRITest);

$core.addMethod(
$core.method({
selector: "testPort",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
$1=$recv(self._iri1())._port();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["port"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=$recv(self._iri2())._port();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["port"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($2,"8080");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$3=$recv(self._iri3())._port();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["port"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($3,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$4=$recv(self._iri4())._port();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["port"]=4;
//>>excludeEnd("ctx");
self._assert_equals_($4,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$5=$recv(self._iri5())._port();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["port"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($5,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($recv(self._iri6())._port(),nil);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPort",{},$globals.IRITest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPort\x0a\x09\x22port\x22\x0a\x09self assert: (self iri1 port) equals: nil.\x0a\x09self assert: (self iri2 port) equals: '8080'.\x0a\x09self assert: (self iri3 port) equals: nil.\x0a\x09self assert: (self iri4 port) equals: nil.\x0a\x09self assert: (self iri5 port) equals: nil.\x0a\x09self assert: (self iri6 port) equals: nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "port", "iri1", "iri2", "iri3", "iri4", "iri5", "iri6"]
}),
$globals.IRITest);

$core.addMethod(
$core.method({
selector: "testQuery",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
$1=$recv(self._iri1())._query();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["query"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=$recv(self._iri2())._query();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["query"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($2,"?123&aa=1&aa=2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$3=$recv(self._iri3())._query();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["query"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($3,"?q");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$4=$recv(self._iri4())._query();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["query"]=4;
//>>excludeEnd("ctx");
self._assert_equals_($4,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$5=$recv(self._iri5())._query();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["query"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($5,"?q=1&r=2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($recv(self._iri6())._query(),nil);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testQuery",{},$globals.IRITest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testQuery\x0a\x09\x22query\x22\x0a\x09self assert: (self iri1 query) equals: nil.\x0a\x09self assert: (self iri2 query) equals: '?123&aa=1&aa=2'.\x0a\x09self assert: (self iri3 query) equals: '?q'.\x0a\x09self assert: (self iri4 query) equals: nil.\x0a\x09self assert: (self iri5 query) equals: '?q=1&r=2'.\x0a\x09self assert: (self iri6 query) equals: nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "query", "iri1", "iri2", "iri3", "iri4", "iri5", "iri6"]
}),
$globals.IRITest);

$core.addMethod(
$core.method({
selector: "testResolveReference",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1,$6,$5,$4,$9,$8,$7,$12,$11,$10,$15,$14,$13,$18,$17,$16,$21,$20,$19,$24,$23,$22,$27,$26,$25,$30,$29,$28,$32,$31;
$3=self._iri1();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri1"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._resolveReference_("http://xyz.example.org/123");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,"http://xyz.example.org/123");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$6=self._iri2();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri2"]=1;
//>>excludeEnd("ctx");
$5=$recv($6)._resolveReference_("http://xyz.example.org/123");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($4,"http://xyz.example.org/123");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$9=self._iri1();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri1"]=2;
//>>excludeEnd("ctx");
$8=$recv($9)._resolveReference_("/a/b/c");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=3;
//>>excludeEnd("ctx");
$7=$recv($8)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($7,"http://example.com/a/b/c");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$12=self._iri2();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri2"]=2;
//>>excludeEnd("ctx");
$11=$recv($12)._resolveReference_("/a/b/c");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=4;
//>>excludeEnd("ctx");
$10=$recv($11)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=4;
//>>excludeEnd("ctx");
self._assert_equals_($10,"https://user:pass@a.example.com:8080/a/b/c");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$15=self._iri1();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri1"]=3;
//>>excludeEnd("ctx");
$14=$recv($15)._resolveReference_("//example.org/1?x");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=5;
//>>excludeEnd("ctx");
$13=$recv($14)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($13,"http://example.org/1?x");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
$18=self._iri2();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri2"]=3;
//>>excludeEnd("ctx");
$17=$recv($18)._resolveReference_("//example.org/1?x");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=6;
//>>excludeEnd("ctx");
$16=$recv($17)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=6;
//>>excludeEnd("ctx");
self._assert_equals_($16,"https://example.org/1?x");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=6;
//>>excludeEnd("ctx");
$21=self._iri1();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri1"]=4;
//>>excludeEnd("ctx");
$20=$recv($21)._resolveReference_("b/c.js");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=7;
//>>excludeEnd("ctx");
$19=$recv($20)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=7;
//>>excludeEnd("ctx");
self._assert_equals_($19,"http://example.com/b/c.js");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=7;
//>>excludeEnd("ctx");
$24=self._iri2();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri2"]=4;
//>>excludeEnd("ctx");
$23=$recv($24)._resolveReference_("b/c.js");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=8;
//>>excludeEnd("ctx");
$22=$recv($23)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=8;
//>>excludeEnd("ctx");
self._assert_equals_($22,"https://user:pass@a.example.com:8080/b/c/d/b/c.js");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=8;
//>>excludeEnd("ctx");
$27=self._iri1();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri1"]=5;
//>>excludeEnd("ctx");
$26=$recv($27)._resolveReference_("../..");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=9;
//>>excludeEnd("ctx");
$25=$recv($26)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=9;
//>>excludeEnd("ctx");
self._assert_equals_($25,"http://example.com/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=9;
//>>excludeEnd("ctx");
$30=self._iri2();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri2"]=5;
//>>excludeEnd("ctx");
$29=$recv($30)._resolveReference_("../..");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=10;
//>>excludeEnd("ctx");
$28=$recv($29)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=10;
//>>excludeEnd("ctx");
self._assert_equals_($28,"https://user:pass@a.example.com:8080/b/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=10;
//>>excludeEnd("ctx");
$32=$recv(self._iri1())._resolveReference_("?query");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=11;
//>>excludeEnd("ctx");
$31=$recv($32)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=11;
//>>excludeEnd("ctx");
self._assert_equals_($31,"http://example.com/?query");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=11;
//>>excludeEnd("ctx");
self._assert_equals_($recv($recv(self._iri2())._resolveReference_("?query"))._value(),"https://user:pass@a.example.com:8080/b/c/d/?query");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testResolveReference",{},$globals.IRITest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testResolveReference\x0a\x09\x22resolveReference: absoluteURI\x22\x0a\x09self assert: ((self iri1 resolveReference: 'http://xyz.example.org/123') value) equals: 'http://xyz.example.org/123'.\x0a\x09self assert: ((self iri2 resolveReference: 'http://xyz.example.org/123') value) equals: 'http://xyz.example.org/123'.\x0a\x09\x22resolveReference: path\x22\x0a\x09self assert: ((self iri1 resolveReference: '/a/b/c') value) equals: 'http://example.com/a/b/c'.\x0a\x09self assert: ((self iri2 resolveReference: '/a/b/c') value) equals: 'https://user:pass@a.example.com:8080/a/b/c'.\x0a\x09\x22resolveReference: authority\x22\x0a\x09self assert: ((self iri1 resolveReference: '//example.org/1?x') value) equals: 'http://example.org/1?x'.\x0a\x09self assert: ((self iri2 resolveReference: '//example.org/1?x') value) equals: 'https://example.org/1?x'.\x0a\x09\x22resolveReference: relative\x22\x0a\x09self assert: ((self iri1 resolveReference: 'b/c.js') value) equals: 'http://example.com/b/c.js'.\x0a\x09self assert: ((self iri2 resolveReference: 'b/c.js') value) equals: 'https://user:pass@a.example.com:8080/b/c/d/b/c.js'.\x0a\x09\x22resolveReference: decend\x22\x0a\x09self assert: ((self iri1 resolveReference: '../..') value) equals: 'http://example.com/'.\x0a\x09self assert: ((self iri2 resolveReference: '../..') value) equals: 'https://user:pass@a.example.com:8080/b/'.\x0a\x09\x22resolveReference: query\x22\x0a\x09self assert: ((self iri1 resolveReference: '?query') value) equals: 'http://example.com/?query'.\x0a\x09self assert: ((self iri2 resolveReference: '?query') value) equals: 'https://user:pass@a.example.com:8080/b/c/d/?query'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "value", "resolveReference:", "iri1", "iri2"]
}),
$globals.IRITest);

$core.addMethod(
$core.method({
selector: "testResolveReferenceRFC3986",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1,$6,$5,$4,$9,$8,$7,$12,$11,$10,$15,$14,$13,$18,$17,$16,$21,$20,$19,$24,$23,$22,$27,$26,$25,$30,$29,$28,$33,$32,$31,$36,$35,$34,$39,$38,$37,$42,$41,$40,$45,$44,$43,$48,$47,$46,$51,$50,$49,$54,$53,$52,$57,$56,$55,$60,$59,$58,$63,$62,$61,$66,$65,$64,$69,$68,$67,$72,$71,$70,$75,$74,$73,$78,$77,$76,$81,$80,$79,$84,$83,$82,$87,$86,$85,$90,$89,$88,$93,$92,$91,$96,$95,$94,$99,$98,$97,$102,$101,$100,$105,$104,$103,$108,$107,$106,$111,$110,$109,$114,$113,$112,$117,$116,$115,$120,$119,$118;
$3=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._resolveReference_("g:h");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,"g:h");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$6=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=2;
//>>excludeEnd("ctx");
$5=$recv($6)._resolveReference_("g");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($4,"http://a/b/c/g");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$9=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=3;
//>>excludeEnd("ctx");
$8=$recv($9)._resolveReference_("./g");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=3;
//>>excludeEnd("ctx");
$7=$recv($8)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($7,"http://a/b/c/g");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$12=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=4;
//>>excludeEnd("ctx");
$11=$recv($12)._resolveReference_("g/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=4;
//>>excludeEnd("ctx");
$10=$recv($11)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=4;
//>>excludeEnd("ctx");
self._assert_equals_($10,"http://a/b/c/g/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$15=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=5;
//>>excludeEnd("ctx");
$14=$recv($15)._resolveReference_("/g");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=5;
//>>excludeEnd("ctx");
$13=$recv($14)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($13,"http://a/g");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
$18=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=6;
//>>excludeEnd("ctx");
$17=$recv($18)._resolveReference_("//g");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=6;
//>>excludeEnd("ctx");
$16=$recv($17)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=6;
//>>excludeEnd("ctx");
self._assert_equals_($16,"http://g");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=6;
//>>excludeEnd("ctx");
$21=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=7;
//>>excludeEnd("ctx");
$20=$recv($21)._resolveReference_("?y");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=7;
//>>excludeEnd("ctx");
$19=$recv($20)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=7;
//>>excludeEnd("ctx");
self._assert_equals_($19,"http://a/b/c/d;p?y");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=7;
//>>excludeEnd("ctx");
$24=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=8;
//>>excludeEnd("ctx");
$23=$recv($24)._resolveReference_("g?y");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=8;
//>>excludeEnd("ctx");
$22=$recv($23)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=8;
//>>excludeEnd("ctx");
self._assert_equals_($22,"http://a/b/c/g?y");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=8;
//>>excludeEnd("ctx");
$27=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=9;
//>>excludeEnd("ctx");
$26=$recv($27)._resolveReference_("#s");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=9;
//>>excludeEnd("ctx");
$25=$recv($26)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=9;
//>>excludeEnd("ctx");
self._assert_equals_($25,"http://a/b/c/d;p?q#s");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=9;
//>>excludeEnd("ctx");
$30=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=10;
//>>excludeEnd("ctx");
$29=$recv($30)._resolveReference_("g#s");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=10;
//>>excludeEnd("ctx");
$28=$recv($29)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=10;
//>>excludeEnd("ctx");
self._assert_equals_($28,"http://a/b/c/g#s");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=10;
//>>excludeEnd("ctx");
$33=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=11;
//>>excludeEnd("ctx");
$32=$recv($33)._resolveReference_("g?y#s");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=11;
//>>excludeEnd("ctx");
$31=$recv($32)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=11;
//>>excludeEnd("ctx");
self._assert_equals_($31,"http://a/b/c/g?y#s");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=11;
//>>excludeEnd("ctx");
$36=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=12;
//>>excludeEnd("ctx");
$35=$recv($36)._resolveReference_(";x");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=12;
//>>excludeEnd("ctx");
$34=$recv($35)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=12;
//>>excludeEnd("ctx");
self._assert_equals_($34,"http://a/b/c/;x");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=12;
//>>excludeEnd("ctx");
$39=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=13;
//>>excludeEnd("ctx");
$38=$recv($39)._resolveReference_("g;x");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=13;
//>>excludeEnd("ctx");
$37=$recv($38)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=13;
//>>excludeEnd("ctx");
self._assert_equals_($37,"http://a/b/c/g;x");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=13;
//>>excludeEnd("ctx");
$42=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=14;
//>>excludeEnd("ctx");
$41=$recv($42)._resolveReference_("g;x?y#s");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=14;
//>>excludeEnd("ctx");
$40=$recv($41)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=14;
//>>excludeEnd("ctx");
self._assert_equals_($40,"http://a/b/c/g;x?y#s");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=14;
//>>excludeEnd("ctx");
$45=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=15;
//>>excludeEnd("ctx");
$44=$recv($45)._resolveReference_("");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=15;
//>>excludeEnd("ctx");
$43=$recv($44)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=15;
//>>excludeEnd("ctx");
self._assert_equals_($43,"http://a/b/c/d;p?q");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=15;
//>>excludeEnd("ctx");
$48=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=16;
//>>excludeEnd("ctx");
$47=$recv($48)._resolveReference_(".");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=16;
//>>excludeEnd("ctx");
$46=$recv($47)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=16;
//>>excludeEnd("ctx");
self._assert_equals_($46,"http://a/b/c/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=16;
//>>excludeEnd("ctx");
$51=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=17;
//>>excludeEnd("ctx");
$50=$recv($51)._resolveReference_("./");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=17;
//>>excludeEnd("ctx");
$49=$recv($50)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=17;
//>>excludeEnd("ctx");
self._assert_equals_($49,"http://a/b/c/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=17;
//>>excludeEnd("ctx");
$54=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=18;
//>>excludeEnd("ctx");
$53=$recv($54)._resolveReference_("..");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=18;
//>>excludeEnd("ctx");
$52=$recv($53)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=18;
//>>excludeEnd("ctx");
self._assert_equals_($52,"http://a/b/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=18;
//>>excludeEnd("ctx");
$57=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=19;
//>>excludeEnd("ctx");
$56=$recv($57)._resolveReference_("../");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=19;
//>>excludeEnd("ctx");
$55=$recv($56)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=19;
//>>excludeEnd("ctx");
self._assert_equals_($55,"http://a/b/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=19;
//>>excludeEnd("ctx");
$60=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=20;
//>>excludeEnd("ctx");
$59=$recv($60)._resolveReference_("../g");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=20;
//>>excludeEnd("ctx");
$58=$recv($59)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=20;
//>>excludeEnd("ctx");
self._assert_equals_($58,"http://a/b/g");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=20;
//>>excludeEnd("ctx");
$63=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=21;
//>>excludeEnd("ctx");
$62=$recv($63)._resolveReference_("../..");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=21;
//>>excludeEnd("ctx");
$61=$recv($62)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=21;
//>>excludeEnd("ctx");
self._assert_equals_($61,"http://a/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=21;
//>>excludeEnd("ctx");
$66=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=22;
//>>excludeEnd("ctx");
$65=$recv($66)._resolveReference_("../../");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=22;
//>>excludeEnd("ctx");
$64=$recv($65)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=22;
//>>excludeEnd("ctx");
self._assert_equals_($64,"http://a/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=22;
//>>excludeEnd("ctx");
$69=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=23;
//>>excludeEnd("ctx");
$68=$recv($69)._resolveReference_("../../g");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=23;
//>>excludeEnd("ctx");
$67=$recv($68)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=23;
//>>excludeEnd("ctx");
self._assert_equals_($67,"http://a/g");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=23;
//>>excludeEnd("ctx");
$72=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=24;
//>>excludeEnd("ctx");
$71=$recv($72)._resolveReference_("../../../g");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=24;
//>>excludeEnd("ctx");
$70=$recv($71)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=24;
//>>excludeEnd("ctx");
self._assert_equals_($70,"http://a/g");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=24;
//>>excludeEnd("ctx");
$75=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=25;
//>>excludeEnd("ctx");
$74=$recv($75)._resolveReference_("../../../../g");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=25;
//>>excludeEnd("ctx");
$73=$recv($74)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=25;
//>>excludeEnd("ctx");
self._assert_equals_($73,"http://a/g");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=25;
//>>excludeEnd("ctx");
$78=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=26;
//>>excludeEnd("ctx");
$77=$recv($78)._resolveReference_("/./g");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=26;
//>>excludeEnd("ctx");
$76=$recv($77)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=26;
//>>excludeEnd("ctx");
self._assert_equals_($76,"http://a/g");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=26;
//>>excludeEnd("ctx");
$81=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=27;
//>>excludeEnd("ctx");
$80=$recv($81)._resolveReference_("/../g");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=27;
//>>excludeEnd("ctx");
$79=$recv($80)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=27;
//>>excludeEnd("ctx");
self._assert_equals_($79,"http://a/g");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=27;
//>>excludeEnd("ctx");
$84=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=28;
//>>excludeEnd("ctx");
$83=$recv($84)._resolveReference_("g.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=28;
//>>excludeEnd("ctx");
$82=$recv($83)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=28;
//>>excludeEnd("ctx");
self._assert_equals_($82,"http://a/b/c/g.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=28;
//>>excludeEnd("ctx");
$87=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=29;
//>>excludeEnd("ctx");
$86=$recv($87)._resolveReference_(".g");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=29;
//>>excludeEnd("ctx");
$85=$recv($86)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=29;
//>>excludeEnd("ctx");
self._assert_equals_($85,"http://a/b/c/.g");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=29;
//>>excludeEnd("ctx");
$90=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=30;
//>>excludeEnd("ctx");
$89=$recv($90)._resolveReference_("g..");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=30;
//>>excludeEnd("ctx");
$88=$recv($89)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=30;
//>>excludeEnd("ctx");
self._assert_equals_($88,"http://a/b/c/g..");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=30;
//>>excludeEnd("ctx");
$93=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=31;
//>>excludeEnd("ctx");
$92=$recv($93)._resolveReference_("..g");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=31;
//>>excludeEnd("ctx");
$91=$recv($92)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=31;
//>>excludeEnd("ctx");
self._assert_equals_($91,"http://a/b/c/..g");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=31;
//>>excludeEnd("ctx");
$96=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=32;
//>>excludeEnd("ctx");
$95=$recv($96)._resolveReference_("./../g");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=32;
//>>excludeEnd("ctx");
$94=$recv($95)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=32;
//>>excludeEnd("ctx");
self._assert_equals_($94,"http://a/b/g");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=32;
//>>excludeEnd("ctx");
$99=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=33;
//>>excludeEnd("ctx");
$98=$recv($99)._resolveReference_("./g/.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=33;
//>>excludeEnd("ctx");
$97=$recv($98)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=33;
//>>excludeEnd("ctx");
self._assert_equals_($97,"http://a/b/c/g/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=33;
//>>excludeEnd("ctx");
$102=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=34;
//>>excludeEnd("ctx");
$101=$recv($102)._resolveReference_("g/./h");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=34;
//>>excludeEnd("ctx");
$100=$recv($101)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=34;
//>>excludeEnd("ctx");
self._assert_equals_($100,"http://a/b/c/g/h");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=34;
//>>excludeEnd("ctx");
$105=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=35;
//>>excludeEnd("ctx");
$104=$recv($105)._resolveReference_("g/../h");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=35;
//>>excludeEnd("ctx");
$103=$recv($104)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=35;
//>>excludeEnd("ctx");
self._assert_equals_($103,"http://a/b/c/h");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=35;
//>>excludeEnd("ctx");
$108=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=36;
//>>excludeEnd("ctx");
$107=$recv($108)._resolveReference_("g;x=1/./y");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=36;
//>>excludeEnd("ctx");
$106=$recv($107)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=36;
//>>excludeEnd("ctx");
self._assert_equals_($106,"http://a/b/c/g;x=1/y");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=36;
//>>excludeEnd("ctx");
$111=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=37;
//>>excludeEnd("ctx");
$110=$recv($111)._resolveReference_("g;x=1/../y");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=37;
//>>excludeEnd("ctx");
$109=$recv($110)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=37;
//>>excludeEnd("ctx");
self._assert_equals_($109,"http://a/b/c/y");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=37;
//>>excludeEnd("ctx");
$114=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=38;
//>>excludeEnd("ctx");
$113=$recv($114)._resolveReference_("g?y/./x");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=38;
//>>excludeEnd("ctx");
$112=$recv($113)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=38;
//>>excludeEnd("ctx");
self._assert_equals_($112,"http://a/b/c/g?y/./x");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=38;
//>>excludeEnd("ctx");
$117=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=39;
//>>excludeEnd("ctx");
$116=$recv($117)._resolveReference_("g?y/../x");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=39;
//>>excludeEnd("ctx");
$115=$recv($116)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=39;
//>>excludeEnd("ctx");
self._assert_equals_($115,"http://a/b/c/g?y/../x");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=39;
//>>excludeEnd("ctx");
$120=self._iri3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iri3"]=40;
//>>excludeEnd("ctx");
$119=$recv($120)._resolveReference_("g#s/./x");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resolveReference:"]=40;
//>>excludeEnd("ctx");
$118=$recv($119)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=40;
//>>excludeEnd("ctx");
self._assert_equals_($118,"http://a/b/c/g#s/./x");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=40;
//>>excludeEnd("ctx");
self._assert_equals_($recv($recv(self._iri3())._resolveReference_("g#s/../x"))._value(),"http://a/b/c/g#s/../x");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testResolveReferenceRFC3986",{},$globals.IRITest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testResolveReferenceRFC3986\x0a\x09\x22resolveReference: <g:h>\x22\x0a\x09self assert: ((self iri3 resolveReference: 'g:h') value) equals: 'g:h'.\x0a\x09\x22resolveReference: <g>\x22\x0a\x09self assert: ((self iri3 resolveReference: 'g') value) equals: 'http://a/b/c/g'.\x0a\x09\x22resolveReference: <./g>\x22\x0a\x09self assert: ((self iri3 resolveReference: './g') value) equals: 'http://a/b/c/g'.\x0a\x09\x22resolveReference: <g/>\x22\x0a\x09self assert: ((self iri3 resolveReference: 'g/') value) equals: 'http://a/b/c/g/'.\x0a\x09\x22resolveReference: </g>\x22\x0a\x09self assert: ((self iri3 resolveReference: '/g') value) equals: 'http://a/g'.\x0a\x09\x22resolveReference: <//g>\x22\x0a\x09self assert: ((self iri3 resolveReference: '//g') value) equals: 'http://g'.\x0a\x09\x22resolveReference: <?y>\x22\x0a\x09self assert: ((self iri3 resolveReference: '?y') value) equals: 'http://a/b/c/d;p?y'.\x0a\x09\x22resolveReference: <g?y>\x22\x0a\x09self assert: ((self iri3 resolveReference: 'g?y') value) equals: 'http://a/b/c/g?y'.\x0a\x09\x22resolveReference: <#s>\x22\x0a\x09self assert: ((self iri3 resolveReference: '#s') value) equals: 'http://a/b/c/d;p?q#s'.\x0a\x09\x22resolveReference: <g#s>\x22\x0a\x09self assert: ((self iri3 resolveReference: 'g#s') value) equals: 'http://a/b/c/g#s'.\x0a\x09\x22resolveReference: <g?y#s>\x22\x0a\x09self assert: ((self iri3 resolveReference: 'g?y#s') value) equals: 'http://a/b/c/g?y#s'.\x0a\x09\x22resolveReference: <;x>\x22\x0a\x09self assert: ((self iri3 resolveReference: ';x') value) equals: 'http://a/b/c/;x'.\x0a\x09\x22resolveReference: <g;x>\x22\x0a\x09self assert: ((self iri3 resolveReference: 'g;x') value) equals: 'http://a/b/c/g;x'.\x0a\x09\x22resolveReference: <g;x?y#s>\x22\x0a\x09self assert: ((self iri3 resolveReference: 'g;x?y#s') value) equals: 'http://a/b/c/g;x?y#s'.\x0a\x09\x22resolveReference: <>\x22\x0a\x09self assert: ((self iri3 resolveReference: '') value) equals: 'http://a/b/c/d;p?q'.\x0a\x09\x22resolveReference: <.>\x22\x0a\x09self assert: ((self iri3 resolveReference: '.') value) equals: 'http://a/b/c/'.\x0a\x09\x22resolveReference: <./>\x22\x0a\x09self assert: ((self iri3 resolveReference: './') value) equals: 'http://a/b/c/'.\x0a\x09\x22resolveReference: <..>\x22\x0a\x09self assert: ((self iri3 resolveReference: '..') value) equals: 'http://a/b/'.\x0a\x09\x22resolveReference: <../>\x22\x0a\x09self assert: ((self iri3 resolveReference: '../') value) equals: 'http://a/b/'.\x0a\x09\x22resolveReference: <../g>\x22\x0a\x09self assert: ((self iri3 resolveReference: '../g') value) equals: 'http://a/b/g'.\x0a\x09\x22resolveReference: <../..>\x22\x0a\x09self assert: ((self iri3 resolveReference: '../..') value) equals: 'http://a/'.\x0a\x09\x22resolveReference: <../../>\x22\x0a\x09self assert: ((self iri3 resolveReference: '../../') value) equals: 'http://a/'.\x0a\x09\x22resolveReference: <../../g>\x22\x0a\x09self assert: ((self iri3 resolveReference: '../../g') value) equals: 'http://a/g'.\x0a\x09\x22resolveReference: <../../../g>\x22\x0a\x09self assert: ((self iri3 resolveReference: '../../../g') value) equals: 'http://a/g'.\x0a\x09\x22resolveReference: <../../../../g>\x22\x0a\x09self assert: ((self iri3 resolveReference: '../../../../g') value) equals: 'http://a/g'.\x0a\x09\x22resolveReference: </./g>\x22\x0a\x09self assert: ((self iri3 resolveReference: '/./g') value) equals: 'http://a/g'.\x0a\x09\x22resolveReference: </../g>\x22\x0a\x09self assert: ((self iri3 resolveReference: '/../g') value) equals: 'http://a/g'.\x0a\x09\x22resolveReference: <g.>\x22\x0a\x09self assert: ((self iri3 resolveReference: 'g.') value) equals: 'http://a/b/c/g.'.\x0a\x09\x22resolveReference: <.g>\x22\x0a\x09self assert: ((self iri3 resolveReference: '.g') value) equals: 'http://a/b/c/.g'.\x0a\x09\x22resolveReference: <g..>\x22\x0a\x09self assert: ((self iri3 resolveReference: 'g..') value) equals: 'http://a/b/c/g..'.\x0a\x09\x22resolveReference: <..g>\x22\x0a\x09self assert: ((self iri3 resolveReference: '..g') value) equals: 'http://a/b/c/..g'.\x0a\x09\x22resolveReference: <./../g>\x22\x0a\x09self assert: ((self iri3 resolveReference: './../g') value) equals: 'http://a/b/g'.\x0a\x09\x22resolveReference: <./g/.>\x22\x0a\x09self assert: ((self iri3 resolveReference: './g/.') value) equals: 'http://a/b/c/g/'.\x0a\x09\x22resolveReference: <g/./h>\x22\x0a\x09self assert: ((self iri3 resolveReference: 'g/./h') value) equals: 'http://a/b/c/g/h'.\x0a\x09\x22resolveReference: <g/../h>\x22\x0a\x09self assert: ((self iri3 resolveReference: 'g/../h') value) equals: 'http://a/b/c/h'.\x0a\x09\x22resolveReference: <g;x=1/./y>\x22\x0a\x09self assert: ((self iri3 resolveReference: 'g;x=1/./y') value) equals: 'http://a/b/c/g;x=1/y'.\x0a\x09\x22resolveReference: <g;x=1/../y>\x22\x0a\x09self assert: ((self iri3 resolveReference: 'g;x=1/../y') value) equals: 'http://a/b/c/y'.\x0a\x09\x22resolveReference: <g?y/./x>\x22\x0a\x09self assert: ((self iri3 resolveReference: 'g?y/./x') value) equals: 'http://a/b/c/g?y/./x'.\x0a\x09\x22resolveReference: <g?y/../x>\x22\x0a\x09self assert: ((self iri3 resolveReference: 'g?y/../x') value) equals: 'http://a/b/c/g?y/../x'.\x0a\x09\x22resolveReference: <g#s/./x>\x22\x0a\x09self assert: ((self iri3 resolveReference: 'g#s/./x') value) equals: 'http://a/b/c/g#s/./x'.\x0a\x09\x22resolveReference: <g#s/../x>\x22\x0a\x09self assert: ((self iri3 resolveReference: 'g#s/../x') value) equals: 'http://a/b/c/g#s/../x'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "value", "resolveReference:", "iri3"]
}),
$globals.IRITest);

$core.addMethod(
$core.method({
selector: "testScheme",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
$1=$recv(self._iri1())._scheme();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scheme"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,"http");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=$recv(self._iri2())._scheme();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scheme"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($2,"https");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$3=$recv(self._iri3())._scheme();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scheme"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($3,"http");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$4=$recv(self._iri4())._scheme();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scheme"]=4;
//>>excludeEnd("ctx");
self._assert_equals_($4,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$5=$recv(self._iri5())._scheme();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scheme"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($5,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($recv(self._iri6())._scheme(),nil);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testScheme",{},$globals.IRITest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testScheme\x0a\x09\x22scheme\x22\x0a\x09self assert: (self iri1 scheme) equals: 'http'.\x0a\x09self assert: (self iri2 scheme) equals: 'https'.\x0a\x09self assert: (self iri3 scheme) equals: 'http'.\x0a\x09self assert: (self iri4 scheme) equals: nil.\x0a\x09self assert: (self iri5 scheme) equals: nil.\x0a\x09self assert: (self iri6 scheme) equals: nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "scheme", "iri1", "iri2", "iri3", "iri4", "iri5", "iri6"]
}),
$globals.IRITest);

$core.addMethod(
$core.method({
selector: "testToAbsolute",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$6,$5;
$2=$recv(self._iri1())._toAbsolute();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["toAbsolute"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,"http://example.com/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$4=$recv(self._iri2())._toAbsolute();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["toAbsolute"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($3,"https://user:pass@a.example.com:8080/b/c/d/?123&aa=1&aa=2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$6=$recv(self._iri3())._toAbsolute();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["toAbsolute"]=3;
//>>excludeEnd("ctx");
$5=$recv($6)._value();
self._assert_equals_($5,"http://a/b/c/d;p?q");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._iri4())._toAbsolute();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["toAbsolute"]=4;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$Error());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=1;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._iri5())._toAbsolute();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["toAbsolute"]=5;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}),$Error());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=2;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._iri6())._toAbsolute();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}),$Error());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testToAbsolute",{},$globals.IRITest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testToAbsolute\x0a\x09\x22toAbsolute\x22\x0a\x09self assert: ((self iri1 toAbsolute) value) equals: 'http://example.com/'.\x0a\x09self assert: ((self iri2 toAbsolute) value) equals: 'https://user:pass@a.example.com:8080/b/c/d/?123&aa=1&aa=2'.\x0a\x09self assert: ((self iri3 toAbsolute) value) equals: 'http://a/b/c/d;p?q'.\x0a\x09self should: [ self iri4 toAbsolute ] raise: Error.\x0a\x09self should: [ self iri5 toAbsolute ] raise: Error.\x0a\x09self should: [ self iri6 toAbsolute ] raise: Error",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "value", "toAbsolute", "iri1", "iri2", "iri3", "should:raise:", "iri4", "iri5", "iri6"]
}),
$globals.IRITest);

$core.addMethod(
$core.method({
selector: "testToNT",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
$1=$recv(self._iri1())._toNT();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["toNT"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,"<http://example.com/>");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=$recv(self._iri2())._toNT();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["toNT"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($2,"<https://user:pass@a.example.com:8080/b/c/d/?123&aa=1&aa=2#455>");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$3=$recv(self._iri3())._toNT();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["toNT"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($3,"<http://a/b/c/d;p?q>");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$4=$recv(self._iri4())._toNT();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["toNT"]=4;
//>>excludeEnd("ctx");
self._assert_equals_($4,"</relative/path>");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$5=$recv(self._iri5())._toNT();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["toNT"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($5,"</path?q=1&r=2#35>");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($recv(self._iri6())._toNT(),"</>");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testToNT",{},$globals.IRITest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testToNT\x0a\x09\x22toNT\x22\x0a\x09self assert: (self iri1 toNT) equals: '<http://example.com/>'.\x0a\x09self assert: (self iri2 toNT) equals: '<https://user:pass@a.example.com:8080/b/c/d/?123&aa=1&aa=2#455>'.\x0a\x09self assert: (self iri3 toNT) equals: '<http://a/b/c/d;p?q>'.\x0a\x09self assert: (self iri4 toNT) equals: '</relative/path>'.\x0a\x09self assert: (self iri5 toNT) equals: '</path?q=1&r=2#35>'.\x0a\x09self assert: (self iri6 toNT) equals: '</>'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "toNT", "iri1", "iri2", "iri3", "iri4", "iri5", "iri6"]
}),
$globals.IRITest);

$core.addMethod(
$core.method({
selector: "testType",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
$1=$recv(self._iri1())._type();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["type"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,"IRI");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=$recv(self._iri2())._type();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["type"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($2,"IRI");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$3=$recv(self._iri3())._type();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["type"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($3,"IRI");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$4=$recv(self._iri4())._type();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["type"]=4;
//>>excludeEnd("ctx");
self._assert_equals_($4,"IRI");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$5=$recv(self._iri5())._type();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["type"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($5,"IRI");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($recv(self._iri6())._type(),"IRI");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testType",{},$globals.IRITest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testType\x0a\x09\x22type\x22\x0a\x09self assert: (self iri1 type) equals: 'IRI'.\x0a\x09self assert: (self iri2 type) equals: 'IRI'.\x0a\x09self assert: (self iri3 type) equals: 'IRI'.\x0a\x09self assert: (self iri4 type) equals: 'IRI'.\x0a\x09self assert: (self iri5 type) equals: 'IRI'.\x0a\x09self assert: (self iri6 type) equals: 'IRI'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "type", "iri1", "iri2", "iri3", "iri4", "iri5", "iri6"]
}),
$globals.IRITest);

$core.addMethod(
$core.method({
selector: "testUserinfo",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
$1=$recv(self._iri1())._userinfo();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["userinfo"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=$recv(self._iri2())._userinfo();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["userinfo"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($2,"user:pass");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$3=$recv(self._iri3())._userinfo();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["userinfo"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($3,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$4=$recv(self._iri4())._userinfo();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["userinfo"]=4;
//>>excludeEnd("ctx");
self._assert_equals_($4,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$5=$recv(self._iri5())._userinfo();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["userinfo"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($5,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($recv(self._iri6())._userinfo(),nil);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testUserinfo",{},$globals.IRITest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testUserinfo\x0a\x09\x22userinfo\x22\x0a\x09self assert: (self iri1 userinfo) equals: nil.\x0a\x09self assert: (self iri2 userinfo) equals: 'user:pass'.\x0a\x09self assert: (self iri3 userinfo) equals: nil.\x0a\x09self assert: (self iri4 userinfo) equals: nil.\x0a\x09self assert: (self iri5 userinfo) equals: nil.\x0a\x09self assert: (self iri6 userinfo) equals: nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "userinfo", "iri1", "iri2", "iri3", "iri4", "iri5", "iri6"]
}),
$globals.IRITest);

$core.addMethod(
$core.method({
selector: "testValue",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
$1=$recv(self._iri1())._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,"http://example.com/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=$recv(self._iri2())._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($2,"https://user:pass@a.example.com:8080/b/c/d/?123&aa=1&aa=2#455");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$3=$recv(self._iri3())._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($3,"http://a/b/c/d;p?q");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$4=$recv(self._iri4())._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=4;
//>>excludeEnd("ctx");
self._assert_equals_($4,"/relative/path");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$5=$recv(self._iri5())._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($5,"/path?q=1&r=2#35");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($recv(self._iri6())._value(),"/");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testValue",{},$globals.IRITest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testValue\x0a\x09\x22value\x22\x0a\x09self assert: (self iri1 value) equals: 'http://example.com/'.\x0a\x09self assert: (self iri2 value) equals: 'https://user:pass@a.example.com:8080/b/c/d/?123&aa=1&aa=2#455'.\x0a\x09self assert: (self iri3 value) equals: 'http://a/b/c/d;p?q'.\x0a\x09self assert: (self iri4 value) equals: '/relative/path'.\x0a\x09self assert: (self iri5 value) equals: '/path?q=1&r=2#35'.\x0a\x09self assert: (self iri6 value) equals: '/'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "value", "iri1", "iri2", "iri3", "iri4", "iri5", "iri6"]
}),
$globals.IRITest);


});
