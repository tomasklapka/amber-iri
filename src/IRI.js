define("amber-iri/IRI", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('IRI');
$core.packages["IRI"].transport = {"type":"amd","amdNamespace":"amber-iri"};

$core.addClass('IRI', $globals.Object, ['value'], 'IRI');
$core.addMethod(
$core.method({
selector: "authority",
protocol: 'accessing',
fn: function (){
var self=this;
var authority,heirpart,index;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$3,$4;
var $early={};
try {
heirpart=self._heirpart();
$2=$recv(heirpart)._copyFrom_to_((1),(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["copyFrom:to:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__tild_eq("//");
if($core.assert($1)){
return nil;
};
authority=$recv(heirpart)._copyFrom_to_((3),$recv(heirpart)._size());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["copyFrom:to:"]=2;
//>>excludeEnd("ctx");
index=$recv(authority)._indexOf_ifAbsent_("/",(function(){
$3=authority;
throw $early=[$3];

}));
$4=$recv(authority)._copyFrom_to_((1),$recv(index).__minus((1)));
return $4;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"authority",{authority:authority,heirpart:heirpart,index:index},$globals.IRI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "authority\x0a\x09| authority heirpart index |\x0a\x09heirpart := self heirpart.\x0a\x09((heirpart copyFrom: 1 to: 2) ~= '//') ifTrue: [ ^ nil ].\x0a\x09authority := heirpart copyFrom: 3 to: heirpart size.\x0a\x09index := authority indexOf: '/' ifAbsent: [ ^ authority ].\x0a\x09^ authority copyFrom: 1 to: index - 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["heirpart", "ifTrue:", "~=", "copyFrom:to:", "size", "indexOf:ifAbsent:", "-"]
}),
$globals.IRI);

$core.addMethod(
$core.method({
selector: "defrag",
protocol: 'accessing',
fn: function (){
var self=this;
var index;
function $IRI(){return $globals.IRI||(typeof IRI=="undefined"?nil:IRI)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
index=$recv(self["@value"])._indexOf_ifAbsent_("#",(function(){
throw $early=[self];

}));
$1=$recv($recv($IRI())._new())._value_($recv(self["@value"])._copyFrom_to_((1),$recv(index).__minus((1))));
return $1;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defrag",{index:index},$globals.IRI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defrag\x0a\x09| index |\x0a\x09index := value indexOf: '#' ifAbsent: [ ^ self ].\x0a\x09^ (IRI new) value: (value copyFrom: 1 to: index - 1)",
referencedClasses: ["IRI"],
//>>excludeEnd("ide");
messageSends: ["indexOf:ifAbsent:", "value:", "new", "copyFrom:to:", "-"]
}),
$globals.IRI);

$core.addMethod(
$core.method({
selector: "fragment",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
$1=$recv(self["@value"])._copyFrom_to_($recv(self["@value"])._indexOf_ifAbsent_("#",(function(){
throw $early=[nil];

})),$recv(self["@value"])._size());
return $1;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fragment",{},$globals.IRI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fragment\x0a\x09^ value copyFrom: (value indexOf: '#' ifAbsent: [ ^ nil ]) to: value size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["copyFrom:to:", "indexOf:ifAbsent:", "size"]
}),
$globals.IRI);

$core.addMethod(
$core.method({
selector: "heirpart",
protocol: 'accessing',
fn: function (){
var self=this;
var heirpart,index,scheme;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$8,$7,$9,$receiver;
heirpart=self["@value"];
index=$recv(heirpart)._indexOf_ifAbsent_("?",(function(){
return (0);

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["indexOf:ifAbsent:"]=1;
//>>excludeEnd("ctx");
$1=$recv(index).__gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
$2=heirpart;
$3=$recv(index).__minus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
heirpart=$recv($2)._copyFrom_to_((1),$3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["copyFrom:to:"]=1;
//>>excludeEnd("ctx");
heirpart;
} else {
index=$recv(heirpart)._indexOf_ifAbsent_("#",(function(){
return (0);

}));
index;
$4=$recv(index).__gt((0));
if($core.assert($4)){
heirpart=$recv(heirpart)._copyFrom_to_((1),$recv(index).__minus((1)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["copyFrom:to:"]=2;
//>>excludeEnd("ctx");
heirpart;
};
};
scheme=self._scheme();
$5=scheme;
if(($receiver = $5) == null || $receiver.isNil){
$5;
} else {
$6=heirpart;
$8=$recv(scheme)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$7=(2).__plus($8);
heirpart=$recv($6)._copyFrom_to_($7,$recv(heirpart)._size());
heirpart;
};
$9=heirpart;
return $9;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"heirpart",{heirpart:heirpart,index:index,scheme:scheme},$globals.IRI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "heirpart\x0a\x09| heirpart index scheme |\x0a\x09heirpart := value.\x0a\x09index := heirpart indexOf: '?' ifAbsent: [ 0 ].\x0a\x09(index > 0)\x0a\x09\x09ifTrue: [ heirpart := heirpart copyFrom: 1 to: index-1 ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09index := heirpart indexOf: '#' ifAbsent: [ 0 ].\x0a\x09\x09\x09(index > 0)\x09ifTrue: [ heirpart := heirpart copyFrom: 1 to: index-1 ]\x0a\x09\x09].\x0a\x09scheme := self scheme.\x0a\x09scheme ifNotNil: [ heirpart := heirpart copyFrom: (2 + scheme size) to: heirpart size ].\x0a\x09^ heirpart",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["indexOf:ifAbsent:", "ifTrue:ifFalse:", ">", "copyFrom:to:", "-", "ifTrue:", "scheme", "ifNotNil:", "+", "size"]
}),
$globals.IRI);

$core.addMethod(
$core.method({
selector: "host",
protocol: 'accessing',
fn: function (){
var self=this;
var host,index;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$7,$6,$8,$9,$10,$11,$receiver;
var $early={};
try {
host=self._authority();
$1=host;
if(($receiver = $1) == null || $receiver.isNil){
return nil;
} else {
$1;
};
index=$recv(host)._indexOf_ifAbsent_("@",(function(){
return (-1);

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["indexOf:ifAbsent:"]=1;
//>>excludeEnd("ctx");
$2=$recv(index).__gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=1;
//>>excludeEnd("ctx");
if($core.assert($2)){
$3=host;
$4=$recv(index).__plus((1));
$5=$recv(host)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
host=$recv($3)._copyFrom_to_($4,$5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["copyFrom:to:"]=1;
//>>excludeEnd("ctx");
host;
};
$7=$recv(host)._indexOf_ifAbsent_("[",(function(){
return (0);

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["indexOf:ifAbsent:"]=2;
//>>excludeEnd("ctx");
$6=$recv($7).__eq((1));
if($core.assert($6)){
index=$recv(host)._indexOf_ifAbsent_("]",(function(){
return (0);

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["indexOf:ifAbsent:"]=3;
//>>excludeEnd("ctx");
index;
$8=$recv(index).__gt((0));
if($core.assert($8)){
$9=$recv(host)._copyFrom_to_((1),index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["copyFrom:to:"]=2;
//>>excludeEnd("ctx");
return $9;
};
};
index=$recv($recv(host)._size()).__minus($recv($recv(host)._reversed())._indexOf_ifAbsent_(":",(function(){
$10=host;
throw $early=[$10];

})));
$11=$recv(host)._copyFrom_to_((1),index);
return $11;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"host",{host:host,index:index},$globals.IRI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "host\x0a\x09| host index |\x0a\x09host := self authority.\x0a\x09host ifNil: [ ^ nil ].\x0a\x09index := host indexOf: '@' ifAbsent: [ -1 ].\x0a\x09(index > 0) ifTrue: [ host := host copyFrom: index+1 to: host size ].\x0a\x09((host indexOf: '[' ifAbsent: [ 0 ]) = 1) ifTrue: [\x0a\x09\x09index := host indexOf: ']' ifAbsent: [0].\x0a\x09\x09(index > 0) ifTrue: [ ^ host copyFrom: 1 to: index ]\x0a\x09].\x0a\x09index := (host size) - ((host reversed) indexOf: ':' ifAbsent: [ ^ host ]).\x0a\x09^ host copyFrom: 1 to: index",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["authority", "ifNil:", "indexOf:ifAbsent:", "ifTrue:", ">", "copyFrom:to:", "+", "size", "=", "-", "reversed"]
}),
$globals.IRI);

$core.addMethod(
$core.method({
selector: "isAbsolute",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$receiver;
$1=self._scheme();
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$2=self._heirpart();
if(($receiver = $2) == null || $receiver.isNil){
$2;
} else {
$3=self._fragment();
if(($receiver = $3) == null || $receiver.isNil){
return true;
} else {
$3;
};
};
};
return false;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isAbsolute",{},$globals.IRI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isAbsolute\x0a\x09(self scheme) ifNotNil: [\x0a\x09\x09(self heirpart) ifNotNil: [\x0a\x09\x09\x09(self fragment) ifNil: [ ^ true ] ] ] .\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "scheme", "heirpart", "ifNil:", "fragment"]
}),
$globals.IRI);

$core.addMethod(
$core.method({
selector: "n3",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._toNT();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"n3",{},$globals.IRI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "n3\x0a\x09^ self toNT",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["toNT"]
}),
$globals.IRI);

$core.addMethod(
$core.method({
selector: "path",
protocol: 'accessing',
fn: function (){
var self=this;
var authority,heirpart;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$6,$5,$3,$receiver;
authority=self._authority();
heirpart=self._heirpart();
$1=authority;
if(($receiver = $1) == null || $receiver.isNil){
$2=heirpart;
return $2;
} else {
$1;
};
$4=heirpart;
$6=$recv(authority)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$5=$recv($6).__plus((3));
$3=$recv($4)._copyFrom_to_($5,$recv(heirpart)._size());
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"path",{authority:authority,heirpart:heirpart},$globals.IRI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "path\x0a\x09| authority heirpart |\x0a\x09authority := self authority.\x0a\x09heirpart := self heirpart.\x0a\x09authority ifNil: [ ^ heirpart ].\x0a\x09^ heirpart copyFrom: ((authority size)+3) to: heirpart size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["authority", "heirpart", "ifNil:", "copyFrom:to:", "+", "size"]
}),
$globals.IRI);

$core.addMethod(
$core.method({
selector: "port",
protocol: 'accessing',
fn: function (){
var self=this;
var host,index;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$7,$6,$8,$9,$11,$10,$12,$13,$14,$15,$16,$receiver;
var $early={};
try {
host=self._authority();
$1=host;
if(($receiver = $1) == null || $receiver.isNil){
return nil;
} else {
$1;
};
index=$recv(host)._indexOf_ifAbsent_("@",(function(){
return (0);

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["indexOf:ifAbsent:"]=1;
//>>excludeEnd("ctx");
$2=$recv(index).__gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=1;
//>>excludeEnd("ctx");
if($core.assert($2)){
index=$recv(index).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
index;
$3=host;
$4=index;
$5=$recv(host)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
host=$recv($3)._copyFrom_to_($4,$5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["copyFrom:to:"]=1;
//>>excludeEnd("ctx");
host;
};
$7=$recv(host)._indexOf_ifAbsent_("[",(function(){
return (0);

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["indexOf:ifAbsent:"]=2;
//>>excludeEnd("ctx");
$6=$recv($7).__eq_eq((1));
if($core.assert($6)){
index=$recv(host)._indexOf_("]");
index;
$8=$recv(index).__gt((0));
if($core.assert($8)){
$9=$recv(host)._copyFrom_to_((1),index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["copyFrom:to:"]=2;
//>>excludeEnd("ctx");
return $9;
};
};
index=$recv($recv(host)._reversed())._indexOf_ifAbsent_(":",(function(){
throw $early=[nil];

}));
$11=$recv(host)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=2;
//>>excludeEnd("ctx");
$10=$recv($11).__minus(index);
index=$recv($10).__plus((2));
$12=host;
$13=index;
$14=$recv(host)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=3;
//>>excludeEnd("ctx");
host=$recv($12)._copyFrom_to_($13,$14);
$15=$recv($recv(host)._size()).__eq((0));
if($core.assert($15)){
return nil;
};
$16=host;
return $16;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"port",{host:host,index:index},$globals.IRI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "port\x0a\x09| host index |\x0a\x09host := self authority.\x0a\x09host ifNil: [ ^ nil ].\x0a\x09index := host indexOf: '@' ifAbsent: [ 0 ].\x0a\x09(index > 0) ifTrue: [\x0a\x09\x09index := index+1.\x0a\x09\x09host := host copyFrom: index to: host size ].\x0a\x09((host indexOf: '[' ifAbsent: [ 0 ]) == 1) ifTrue: [\x0a\x09\x09index := host indexOf: ']'.\x0a\x09\x09(index > 0) ifTrue: [ ^ host copyFrom: 1 to: index ] ].\x0a\x09index := (host reversed) indexOf: ':' ifAbsent: [ ^ nil ].\x0a\x09index := (host size)-index+2.\x0a\x09host := host copyFrom: index to: host size.\x0a\x09(host size = 0) ifTrue: [ ^ nil ].\x0a\x09^ host",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["authority", "ifNil:", "indexOf:ifAbsent:", "ifTrue:", ">", "+", "copyFrom:to:", "size", "==", "indexOf:", "reversed", "-", "="]
}),
$globals.IRI);

$core.addMethod(
$core.method({
selector: "query",
protocol: 'accessing',
fn: function (){
var self=this;
var index;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
var $early={};
try {
index=$recv(self["@value"])._indexOf_ifAbsent_("?",(function(){
throw $early=[nil];

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["indexOf:ifAbsent:"]=1;
//>>excludeEnd("ctx");
$1=$recv(self["@value"])._copyFrom_to_(index,$recv($recv(self["@value"])._indexOf_ifAbsent_("#",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(self["@value"])._copyFrom_to_(index,$recv(self["@value"])._size());
throw $early=[$2];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}))).__minus((1)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["copyFrom:to:"]=1;
//>>excludeEnd("ctx");
return $1;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"query",{index:index},$globals.IRI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "query\x0a\x09| index |\x0a\x09index := value indexOf: '?' ifAbsent: [ ^ nil ].\x0a\x09^ value\x0a\x09\x09copyFrom: index\x0a\x09\x09to: (value indexOf: '#' ifAbsent: [ ^ value copyFrom: index to: value size ]) - 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["indexOf:ifAbsent:", "copyFrom:to:", "-", "size"]
}),
$globals.IRI);

$core.addMethod(
$core.method({
selector: "resolveReference:",
protocol: 'accessing',
fn: function (aReference){
var self=this;
var ref,reference,Tscheme,Tauthority,Tpath,Tquery,Tfragment,q,path;
function $IRI(){return $globals.IRI||(typeof IRI=="undefined"?nil:IRI)}
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$5,$3,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$19,$18,$20,$21,$22,$23,$25,$24,$26,$27,$28,$29,$31,$35,$34,$33,$32,$30,$receiver;
Tscheme="";
Tauthority="";
Tpath="";
Tquery="";
Tfragment="";
ref=aReference;
$1=$recv(ref)._isString();
if($core.assert($1)){
$2=$recv($IRI())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
reference=$recv($2)._value_(ref);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
reference;
} else {
$4=$recv(ref)._respondsTo_("type");
$5=$recv($recv(ref)._type()).__eq("IRI");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._and_($5);
if($core.assert($3)){
reference=ref;
reference;
} else {
$recv($Error())._signal_("Expected IRI or String");
};
};
q="";
$6=$recv(reference)._scheme();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scheme"]=1;
//>>excludeEnd("ctx");
if(($receiver = $6) == null || $receiver.isNil){
q=$recv(reference)._authority();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["authority"]=2;
//>>excludeEnd("ctx");
q;
$13=q;
if(($receiver = $13) == null || $receiver.isNil){
q=$recv(reference)._path();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["path"]=3;
//>>excludeEnd("ctx");
q;
$19=$recv(q).__eq("");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
$18=$recv($19)._or_($recv(q)._isNil());
if($core.assert($18)){
Tpath=self._path();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["path"]=4;
//>>excludeEnd("ctx");
Tpath;
q=$recv(reference)._query();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["query"]=5;
//>>excludeEnd("ctx");
q;
$20=q;
if(($receiver = $20) == null || $receiver.isNil){
q=self._query();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["query"]=6;
//>>excludeEnd("ctx");
q;
$21=q;
if(($receiver = $21) == null || $receiver.isNil){
$21;
} else {
Tquery=$recv(Tquery).__comma(q);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=7;
//>>excludeEnd("ctx");
Tquery;
};
} else {
Tquery=$recv(Tquery).__comma(q);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=6;
//>>excludeEnd("ctx");
Tquery;
};
} else {
$22=$recv($recv(q)._at_((1))).__eq("/");
if($core.assert($22)){
Tpath=$recv($IRI())._removeDotSegments_(q);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["removeDotSegments:"]=3;
//>>excludeEnd("ctx");
Tpath;
} else {
path=self._path();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["path"]=5;
//>>excludeEnd("ctx");
path;
$23=path;
if(($receiver = $23) == null || $receiver.isNil){
Tpath="/".__comma(q);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=8;
//>>excludeEnd("ctx");
Tpath;
} else {
$25=$recv(path)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$24=$recv($25).__minus($recv($recv(path)._reversed())._indexOf_ifAbsent_("/",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(path)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,21)});
//>>excludeEnd("ctx");
})));
q=$recv($24).__plus((1));
q;
$26=$recv(q).__gt((0));
if($core.assert($26)){
Tpath=$recv(path)._copyFrom_to_((1),q);
Tpath;
};
Tpath=$recv(Tpath).__comma($recv(reference)._path());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=9;
//>>excludeEnd("ctx");
Tpath;
};
Tpath=$recv($IRI())._removeDotSegments_(Tpath);
Tpath;
};
$27=$recv(reference)._query();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["query"]=7;
//>>excludeEnd("ctx");
if(($receiver = $27) == null || $receiver.isNil){
$27;
} else {
Tquery=$recv(Tquery).__comma($recv(reference)._query());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=10;
//>>excludeEnd("ctx");
Tquery;
};
};
q=self._authority();
q;
$28=q;
if(($receiver = $28) == null || $receiver.isNil){
$28;
} else {
Tauthority="//".__comma(q);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=11;
//>>excludeEnd("ctx");
Tauthority;
};
} else {
Tauthority="//".__comma(q);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
Tauthority;
$14=$recv(reference)._path();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["path"]=2;
//>>excludeEnd("ctx");
Tpath=$recv($IRI())._removeDotSegments_($14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["removeDotSegments:"]=2;
//>>excludeEnd("ctx");
Tpath;
$15=$recv(reference)._query();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["query"]=3;
//>>excludeEnd("ctx");
if(($receiver = $15) == null || $receiver.isNil){
$15;
} else {
$16=Tquery;
$17=$recv(reference)._query();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["query"]=4;
//>>excludeEnd("ctx");
Tquery=$recv($16).__comma($17);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=5;
//>>excludeEnd("ctx");
Tquery;
};
};
Tscheme=self._scheme();
Tscheme;
} else {
Tscheme=$recv(reference)._scheme();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scheme"]=2;
//>>excludeEnd("ctx");
Tscheme;
q=$recv(reference)._authority();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["authority"]=1;
//>>excludeEnd("ctx");
q;
$7=q;
if(($receiver = $7) == null || $receiver.isNil){
$7;
} else {
$8=$recv(Tauthority).__comma("//");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
Tauthority=$recv($8).__comma(q);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
Tauthority;
};
$9=$recv(reference)._path();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["path"]=1;
//>>excludeEnd("ctx");
Tpath=$recv($IRI())._removeDotSegments_($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["removeDotSegments:"]=1;
//>>excludeEnd("ctx");
Tpath;
$10=$recv(reference)._query();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["query"]=1;
//>>excludeEnd("ctx");
if(($receiver = $10) == null || $receiver.isNil){
$10;
} else {
$11=Tquery;
$12=$recv(reference)._query();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["query"]=2;
//>>excludeEnd("ctx");
Tquery=$recv($11).__comma($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
Tquery;
};
};
$29=$recv(reference)._fragment();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fragment"]=1;
//>>excludeEnd("ctx");
if(($receiver = $29) == null || $receiver.isNil){
$29;
} else {
Tfragment=$recv(reference)._fragment();
Tfragment;
};
$31=$recv($IRI())._new();
$35=$recv($recv(Tscheme).__comma(":")).__comma(Tauthority);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=15;
//>>excludeEnd("ctx");
$34=$recv($35).__comma(Tpath);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=14;
//>>excludeEnd("ctx");
$33=$recv($34).__comma(Tquery);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=13;
//>>excludeEnd("ctx");
$32=$recv($33).__comma(Tfragment);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=12;
//>>excludeEnd("ctx");
$30=$recv($31)._value_($32);
return $30;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resolveReference:",{aReference:aReference,ref:ref,reference:reference,Tscheme:Tscheme,Tauthority:Tauthority,Tpath:Tpath,Tquery:Tquery,Tfragment:Tfragment,q:q,path:path},$globals.IRI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aReference"],
source: "resolveReference: aReference\x0a\x09| ref reference Tscheme Tauthority Tpath Tquery Tfragment q path |\x0a\x09Tscheme := ''.\x0a\x09Tauthority := ''.\x0a\x09Tpath := ''.\x0a\x09Tquery := ''.\x0a\x09Tfragment := ''.\x0a\x09ref := aReference.\x0a\x09(ref isString)\x0a\x09\x09ifTrue: [ reference := (IRI new) value: ref ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09((ref respondsTo: #type)  and: ((ref type) = 'IRI'))\x0a\x09\x09\x09\x09ifTrue: [ reference := ref ]\x0a\x09\x09\x09\x09ifFalse: [ Error signal: 'Expected IRI or String' ]\x0a\x09\x09].\x0a\x09q := ''.\x0a\x0a\x09(reference scheme)\x0a\x09\x09ifNotNil: [\x0a\x09\x09\x09Tscheme := reference scheme.\x0a\x09\x09\x09q := reference authority.\x0a\x09\x09\x09q ifNotNil: [ Tauthority := Tauthority, '//', q ].\x0a\x09\x09\x09Tpath := IRI removeDotSegments: reference path.\x0a\x09\x09\x09(reference query) ifNotNil: [ Tquery := Tquery, reference query ].\x0a\x09\x09]\x0a\x09\x09ifNil: [\x0a\x09\x09\x09q := reference authority.\x0a\x09\x09\x09q\x0a\x09\x09\x09\x09ifNotNil: [\x0a\x09\x09\x09\x09\x09Tauthority := '//', q.\x0a\x09\x09\x09\x09\x09Tpath := IRI removeDotSegments: reference path.\x0a\x09\x09\x09\x09\x09(reference query) ifNotNil: [ Tquery := Tquery, reference query ]\x0a\x09\x09\x09\x09]\x0a\x09\x09\x09\x09ifNil: [\x0a\x09\x09\x09\x09\x09q := reference path.\x0a\x09\x09\x09\x09\x09((q = '') or: (q isNil))\x0a\x09\x09\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09\x09\x09Tpath := self path.\x0a\x09\x09\x09\x09\x09\x09\x09q := reference query.\x0a\x09\x09\x09\x09\x09\x09\x09q\x0a\x09\x09\x09\x09\x09\x09\x09\x09ifNotNil: [ Tquery := Tquery, q ]\x0a\x09\x09\x09\x09\x09\x09\x09\x09ifNil: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09q := self query.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09q ifNotNil: [ Tquery := Tquery, q ]\x0a\x09\x09\x09\x09\x09\x09\x09\x09]\x0a\x09\x09\x09\x09\x09\x09]\x0a\x09\x09\x09\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09\x09\x09\x09((q at: 1) = '/')\x0a\x09\x09\x09\x09\x09\x09\x09\x09ifTrue: [ Tpath := IRI removeDotSegments: q ]\x0a\x09\x09\x09\x09\x09\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09path := self path.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09path\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09ifNil: [ Tpath := '/', q ]\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09ifNotNil: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09q := (path size) - ((path reversed) indexOf: '/' ifAbsent: [ path size ]) + 1.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09(q > 0) ifTrue: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09Tpath := path copyFrom: 1 to: q\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09].\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09Tpath := Tpath, reference path.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09].\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09Tpath := IRI removeDotSegments: Tpath\x0a\x09\x09\x09\x09\x09\x09\x09\x09].\x0a\x09\x09\x09\x09\x09\x09\x09(reference query) ifNotNil: [ Tquery := Tquery, reference query ]\x0a\x09\x09\x09\x09\x09\x09].\x0a\x09\x09\x09\x09\x09q := self authority.\x0a\x09\x09\x09\x09\x09q ifNotNil: [ Tauthority := '//', q ]\x0a\x09\x09\x09\x09].\x0a\x09\x09\x09Tscheme := self scheme\x0a\x09\x09].\x0a\x09\x09(reference fragment) ifNotNil: [ Tfragment := reference fragment ].\x0a\x09\x09^ (IRI new) value: Tscheme, ':', Tauthority, Tpath, Tquery, Tfragment",
referencedClasses: ["IRI", "Error"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isString", "value:", "new", "and:", "respondsTo:", "=", "type", "signal:", "ifNotNil:ifNil:", "scheme", "authority", "ifNotNil:", ",", "removeDotSegments:", "path", "query", "or:", "isNil", "at:", "ifNil:ifNotNil:", "+", "-", "size", "indexOf:ifAbsent:", "reversed", "ifTrue:", ">", "copyFrom:to:", "fragment"]
}),
$globals.IRI);

$core.addMethod(
$core.method({
selector: "scheme",
protocol: 'accessing',
fn: function (){
var self=this;
var regexp,matches;
function $RegularExpression(){return $globals.RegularExpression||(typeof RegularExpression=="undefined"?nil:RegularExpression)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$receiver;
regexp=$recv($RegularExpression())._fromString_("^([a-zA-Z0-9-\x5c.\x5c+]+):");
matches=$recv(self["@value"])._matchesOf_(regexp);
$1=matches;
if(($receiver = $1) == null || $receiver.isNil){
return nil;
} else {
$1;
};
$2=$recv(matches)._at_((2));
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scheme",{regexp:regexp,matches:matches},$globals.IRI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "scheme\x0a\x09| regexp matches |\x0a\x09regexp := RegularExpression fromString: '^([a-zA-Z0-9-\x5c.\x5c+]+):'.\x0a\x09matches := value matchesOf: regexp.\x0a\x09matches ifNil: [ ^ nil ].\x0a\x09^ matches at: 2",
referencedClasses: ["RegularExpression"],
//>>excludeEnd("ide");
messageSends: ["fromString:", "matchesOf:", "ifNil:", "at:"]
}),
$globals.IRI);

$core.addMethod(
$core.method({
selector: "toAbsolute",
protocol: 'converting',
fn: function (){
var self=this;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$3,$4;
$2=$recv(self._scheme())._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isNil"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._or_($recv(self._heirpart())._isNil());
if($core.assert($1)){
$3=$recv($Error())._signal_("IRI must have a scheme and a heirpart!!");
return $3;
};
$4=$recv(self._resolveReference_(self["@value"]))._defrag();
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toAbsolute",{},$globals.IRI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "toAbsolute\x0a\x09((self scheme isNil) or: (self heirpart isNil))\x0a\x09\x09ifTrue: [ ^ Error signal: 'IRI must have a scheme and a heirpart!!' ].\x0a\x09^ (self resolveReference: value) defrag",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "or:", "isNil", "scheme", "heirpart", "signal:", "defrag", "resolveReference:"]
}),
$globals.IRI);

$core.addMethod(
$core.method({
selector: "toIRI",
protocol: 'converting',
fn: function (){
var self=this;
function $IRI(){return $globals.IRI||(typeof IRI=="undefined"?nil:IRI)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($IRI())._new())._value_(self._toIRIString());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toIRI",{},$globals.IRI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "toIRI\x0a\x09^ (IRI new) value: self toIRIString",
referencedClasses: ["IRI"],
//>>excludeEnd("ide");
messageSends: ["value:", "new", "toIRIString"]
}),
$globals.IRI);

$core.addMethod(
$core.method({
selector: "toIRIString",
protocol: 'converting',
fn: function (){
var self=this;
var iri,reserved,index;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
reserved=["3A", "2F", "3F", "23", "5B", "5D", "40", "20", "21", "24", "26", "27", "28", "29", "2A", "2B", "2C", "3B", "3D"];
iri=$recv(self._toString())._replace_with_("%([2-7][0-9A-F])|%[CD][0-9A-F](%[89AB][0-9A-F])|%[E][0-9A-F](%[89AB][0-9A-F]){2}|%[F][0-7](%[89AB][0-9A-F]){3}|%[F][89AB](%[89AB][0-9A-F]){4}|%[F][CD](%[89AB][0-9A-F]){5}",(function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
index=$recv(reserved)._indexOf_ifAbsent_(b,(function(){
return (0);

}));
index;
$1=$recv(index).__gt((0));
if($core.assert($1)){
return a;
} else {
return $recv(a)._uriComponentDecoded();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=iri;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toIRIString",{iri:iri,reserved:reserved,index:index},$globals.IRI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "toIRIString\x0a\x09| iri reserved index |\x0a\x09reserved := #( '3A' '2F' '3F' '23' '5B' '5D' '40' '20' '21' '24' '26' '27' '28' '29' '2A' '2B' '2C' '3B' '3D' ).\x0a\x09iri := (self toString)\x0a\x09\x09replace: '%([2-7][0-9A-F])|%[CD][0-9A-F](%[89AB][0-9A-F])|%[E][0-9A-F](%[89AB][0-9A-F]){2}|%[F][0-7](%[89AB][0-9A-F]){3}|%[F][89AB](%[89AB][0-9A-F]){4}|%[F][CD](%[89AB][0-9A-F]){5}'\x0a\x09\x09with: [ :a :b |\x0a\x09\x09\x09index := reserved indexOf: b ifAbsent: [ 0 ].\x0a\x09\x09\x09(index > 0)\x0a\x09\x09\x09\x09ifTrue: [ a ]\x0a\x09\x09\x09\x09ifFalse: [ a uriComponentDecoded ]\x0a\x09\x09].\x0a\x09^ iri",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["replace:with:", "toString", "indexOf:ifAbsent:", "ifTrue:ifFalse:", ">", "uriComponentDecoded"]
}),
$globals.IRI);

$core.addMethod(
$core.method({
selector: "toNT",
protocol: 'converting',
fn: function (){
var self=this;
function $IRI(){return $globals.IRI||(typeof IRI=="undefined"?nil:IRI)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv("<".__comma($recv($IRI())._encodeString_(self._value()))).__comma(">");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toNT",{},$globals.IRI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "toNT\x0a\x09^ '<', (IRI encodeString: (self value)), '>'",
referencedClasses: ["IRI"],
//>>excludeEnd("ide");
messageSends: [",", "encodeString:", "value"]
}),
$globals.IRI);

$core.addMethod(
$core.method({
selector: "toString",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._value();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toString",{},$globals.IRI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "toString\x0a\x09^ self value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value"]
}),
$globals.IRI);

$core.addMethod(
$core.method({
selector: "toURIString",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@value"])._replace_with_("([\x5cuA0-\x5cuD7FF\x5cuE000-\x5cuFDCF\x5cuFDF0-\x5cuFFEF]|[\x5cuD800-\x5cuDBFF][\x5cuDC00-\x5cuDFFF])",(function(match){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(match)._uriEncoded();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({match:match},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toURIString",{},$globals.IRI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "toURIString\x0a\x09^ value replace: '([\x5cuA0-\x5cuD7FF\x5cuE000-\x5cuFDCF\x5cuFDF0-\x5cuFFEF]|[\x5cuD800-\x5cuDBFF][\x5cuDC00-\x5cuDFFF])' with: [ :match | match uriEncoded ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["replace:with:", "uriEncoded"]
}),
$globals.IRI);

$core.addMethod(
$core.method({
selector: "type",
protocol: 'accessing',
fn: function (){
var self=this;
return "IRI";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "type\x0a\x09^ 'IRI'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRI);

$core.addMethod(
$core.method({
selector: "userinfo",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$2,$receiver;
var $early={};
try {
$1=self._authority();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["authority"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
return nil;
} else {
$1;
};
$3=self._authority();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["authority"]=2;
//>>excludeEnd("ctx");
$2=$recv($3)._copyFrom_to_((1),$recv($recv(self._authority())._indexOf_ifAbsent_("@",(function(){
throw $early=[nil];

}))).__minus((1)));
return $2;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"userinfo",{},$globals.IRI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "userinfo\x0a\x09self authority ifNil: [ ^ nil ].\x0a\x09^ self authority copyFrom: 1 to: (self authority indexOf: '@' ifAbsent: [ ^ nil ]) - 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "authority", "copyFrom:to:", "-", "indexOf:ifAbsent:"]
}),
$globals.IRI);

$core.addMethod(
$core.method({
selector: "value",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@value"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "value\x0a\x09^ value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRI);

$core.addMethod(
$core.method({
selector: "value:",
protocol: 'accessing',
fn: function (anIRI){
var self=this;
self["@value"]=anIRI;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRI"],
source: "value: anIRI\x0a\x09value := anIRI.\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRI);


$core.addMethod(
$core.method({
selector: "encodeString:",
protocol: 'converting',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

		var s = aString;
		var out = "";
		var skip = false;
		var _g1 = 0, _g = s.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!skip) {
				var code = s.charCodeAt(i);
				if(55296 <= code && code <= 56319) {
					var low = s.charCodeAt(i + 1);
					code = (code - 55296) * 1024 + (low - 56320) + 65536;
					skip = true;
				}
				if(code > 11114111) { throw new Error("Char out of range"); }
				var hex = "00000000".concat((new Number(code)).toString(16).toUpperCase());
				if(code >= 65536) {
					out += "\\U" + hex.slice(-8);
				} else {
					if(code >= 127 || code <= 31) {
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
				skip = !skip;
			}
		}
		return out;
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"encodeString:",{aString:aString},$globals.IRI.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "encodeString: aString\x0a\x09<\x0a\x09\x09var s = aString;\x0a\x09\x09var out = \x22\x22;\x0a\x09\x09var skip = false;\x0a\x09\x09var _g1 = 0, _g = s.length;\x0a\x09\x09while(_g1 < _g) {\x0a\x09\x09\x09var i = _g1++;\x0a\x09\x09\x09if(!skip) {\x0a\x09\x09\x09\x09var code = s.charCodeAt(i);\x0a\x09\x09\x09\x09if(55296 <= code && code <= 56319) {\x0a\x09\x09\x09\x09\x09var low = s.charCodeAt(i + 1);\x0a\x09\x09\x09\x09\x09code = (code - 55296) * 1024 + (low - 56320) + 65536;\x0a\x09\x09\x09\x09\x09skip = true;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09if(code >> 11114111) { throw new Error(\x22Char out of range\x22); }\x0a\x09\x09\x09\x09var hex = \x2200000000\x22.concat((new Number(code)).toString(16).toUpperCase());\x0a\x09\x09\x09\x09if(code >>= 65536) {\x0a\x09\x09\x09\x09\x09out += \x22\x5c\x5cU\x22 + hex.slice(-8);\x0a\x09\x09\x09\x09} else {\x0a\x09\x09\x09\x09\x09if(code >>= 127 || code <= 31) {\x0a\x09\x09\x09\x09\x09\x09switch(code) {\x0a\x09\x09\x09\x09\x09\x09\x09case 9:\x09out += \x22\x5c\x5ct\x22; break;\x0a\x09\x09\x09\x09\x09\x09\x09case 10: out += \x22\x5c\x5cn\x22; break;\x0a\x09\x09\x09\x09\x09\x09\x09case 13: out += \x22\x5c\x5cr\x22; break;\x0a\x09\x09\x09\x09\x09\x09\x09default: out += \x22\x5c\x5cu\x22 + hex.slice(-4); break;\x0a\x09\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09} else {\x0a\x09\x09\x09\x09\x09\x09switch(code) {\x0a\x09\x09\x09\x09\x09\x09\x09case 34: out += '\x5c\x5c\x22'; break;\x0a\x09\x09\x09\x09\x09\x09\x09case 92: out += \x22\x5c\x5c\x5c\x5c\x22; break;\x0a\x09\x09\x09\x09\x09\x09\x09default: out += s.charAt(i); break;\x0a\x09\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09} else {\x0a\x09\x09\x09\x09skip = !skip;\x0a\x09\x09\x09}\x0a\x09\x09}\x0a\x09\x09return out;\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRI.klass);

$core.addMethod(
$core.method({
selector: "fromURI:",
protocol: 'instance creation',
fn: function (anURI){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._new())._value_(anURI))._toIRI();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromURI:",{anURI:anURI},$globals.IRI.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anURI"],
source: "fromURI: anURI\x0a\x09^ (self new value: anURI) toIRI",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["toIRI", "value:", "new"]
}),
$globals.IRI.klass);

$core.addMethod(
$core.method({
selector: "new:",
protocol: 'instance creation',
fn: function (anIRI){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._new())._value_(anIRI))._toIRI();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new:",{anIRI:anIRI},$globals.IRI.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRI"],
source: "new: anIRI\x0a\x09^ (self new value: anIRI) toIRI",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["toIRI", "value:", "new"]
}),
$globals.IRI.klass);

$core.addMethod(
$core.method({
selector: "removeDotSegments:",
protocol: 'converting',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

		var input = aString;
		var output = "";
		var q = 0;
		while(input.length > 0) {
			if(input.substr(0, 3) == "../" || input.substr(0, 2) == "./") {
				input = input.slice(input.indexOf("/"));
			}else if(input == "/.") {
				input = "/";
			}else if(input.substr(0, 3) == "/./") {
				input = input.slice(2);
			}else if(input.substr(0, 4) == "/../" || input == "/..") {
				input = (input == "/..") ? "/" : input.slice(3);
				q = output.lastIndexOf("/");
				output = (q >= 0) ? output.substring(0, q) : "";
			}else if(input.substr(0, 2) == ".." || input.substr(0, 1) == ".") {
				input = input.slice(input.indexOf("."));
				q = input.indexOf(".");
				if(q >= 0) input = input.slice(q);
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
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeDotSegments:",{aString:aString},$globals.IRI.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "removeDotSegments: aString\x0a\x09<\x0a\x09\x09var input = aString;\x0a\x09\x09var output = \x22\x22;\x0a\x09\x09var q = 0;\x0a\x09\x09while(input.length >> 0) {\x0a\x09\x09\x09if(input.substr(0, 3) == \x22../\x22 || input.substr(0, 2) == \x22./\x22) {\x0a\x09\x09\x09\x09input = input.slice(input.indexOf(\x22/\x22));\x0a\x09\x09\x09}else if(input == \x22/.\x22) {\x0a\x09\x09\x09\x09input = \x22/\x22;\x0a\x09\x09\x09}else if(input.substr(0, 3) == \x22/./\x22) {\x0a\x09\x09\x09\x09input = input.slice(2);\x0a\x09\x09\x09}else if(input.substr(0, 4) == \x22/../\x22 || input == \x22/..\x22) {\x0a\x09\x09\x09\x09input = (input == \x22/..\x22) ? \x22/\x22 : input.slice(3);\x0a\x09\x09\x09\x09q = output.lastIndexOf(\x22/\x22);\x0a\x09\x09\x09\x09output = (q >>= 0) ? output.substring(0, q) : \x22\x22;\x0a\x09\x09\x09}else if(input.substr(0, 2) == \x22..\x22 || input.substr(0, 1) == \x22.\x22) {\x0a\x09\x09\x09\x09input = input.slice(input.indexOf(\x22.\x22));\x0a\x09\x09\x09\x09q = input.indexOf(\x22.\x22);\x0a\x09\x09\x09\x09if(q >>= 0) input = input.slice(q);\x0a\x09\x09\x09}else {\x0a\x09\x09\x09\x09if(input.substr(0, 1) == \x22/\x22) {\x0a\x09\x09\x09\x09\x09output += \x22/\x22;\x0a\x09\x09\x09\x09\x09input = input.slice(1);\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09q = input.indexOf(\x22/\x22);\x0a\x09\x09\x09\x09if(q < 0) {\x0a\x09\x09\x09\x09\x09output += input;\x0a\x09\x09\x09\x09\x09input = \x22\x22;\x0a\x09\x09\x09\x09}else {\x0a\x09\x09\x09\x09\x09output += input.substring(0, q);\x0a\x09\x09\x09\x09\x09input = input.slice(q);\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09}\x0a\x09\x09}\x0a\x09\x09return output;\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRI.klass);

$core.addMethod(
$core.method({
selector: "toIRIString:",
protocol: 'instance creation',
fn: function (anIRI){
var self=this;
function $IRI(){return $globals.IRI||(typeof IRI=="undefined"?nil:IRI)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv($IRI())._new())._value_(anIRI))._toIRIString();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toIRIString:",{anIRI:anIRI},$globals.IRI.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRI"],
source: "toIRIString: anIRI\x0a\x09^ ((IRI new) value: anIRI) toIRIString",
referencedClasses: ["IRI"],
//>>excludeEnd("ide");
messageSends: ["toIRIString", "value:", "new"]
}),
$globals.IRI.klass);

});
