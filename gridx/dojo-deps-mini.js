//>>built
require({cache:{"dojo/store/Memory":function(){define(["../_base/declare","./util/QueryResults","./util/SimpleQueryEngine"],function(i,g,e){return i("dojo.store.Memory",null,{constructor:function(b){for(var a in b)this[a]=b[a];this.setData(this.data||[])},data:null,idProperty:"id",index:null,queryEngine:e,get:function(b){return this.data[this.index[b]]},getIdentity:function(b){return b[this.idProperty]},put:function(b,a){var d=this.data,m=this.index,f=this.idProperty,f=a&&"id"in a?a.id:f in b?b[f]:
Math.random();if(f in m){if(a&&a.overwrite===!1)throw Error("Object already exists");d[m[f]]=b}else m[f]=d.push(b)-1;return f},add:function(b,a){(a=a||{}).overwrite=!1;return this.put(b,a)},remove:function(b){var a=this.index,d=this.data;if(b in a)return d.splice(a[b],1),this.setData(d),!0},query:function(b,a){return g(this.queryEngine(b,a)(this.data))},setData:function(b){var c;b.items?(this.idProperty=b.identifier,c=this.data=b.items,b=c):this.data=b;this.index={};for(var a=0,d=b.length;a<d;a++)this.index[b[a][this.idProperty]]=
a}})})},"dojo/i18n":function(){define(["./_base/kernel","require","./has","./_base/array","./_base/config","./_base/lang","./_base/xhr"],function(i,g,e,b,a,d,m){var f=i.i18n={},j=/(^.*(^|\/)nls)(\/|$)([^\/]*)\/?([^\/]*)/,o=function(c,l,r,a){for(var h=[r+a],l=l.split("-"),d="",b=0;b<l.length;b++)d+=(d?"-":"")+l[b],(!c||c[d])&&h.push(r+d+"/"+a);return h},p={},s=i.getL10nName=function(c,l,r){r=r?r.toLowerCase():i.locale;c="dojo/i18n!"+c.replace(/\./g,"/");l=l.replace(/\./g,"/");return/root/i.test(r)?
c+"/nls/"+l:c+"/nls/"+r+"/"+l},k=function(c,l,r,a,h,b){c([l],function(k){var j=p[l+"/"]=d.clone(k.root),f=o(!k._v1x&&k,h,r,a);c(f,function(){for(var c=1;c<f.length;c++)p[f[c]]=j=d.mixin(d.clone(j),arguments[c]);p[l+"/"+h]=j;b&&b(d.delegate(j))})})},h=function(){},v=function(c,l,r){var c=j.exec(c),o=c[1]+"/",f=c[5]||c[4],m=o+f,e=(c=c[5]&&c[4])||i.locale,n=m+"/"+e;if(c)h(n),p[n]?r(p[n]):k(l,m,o,f,e,r);else{c=a.extraLocale||[];c=d.isArray(c)?c:[c];c.push(e);var q=c.length,v;b.forEach(c,function(c){k(l,
m,o,f,c,function(l){c==e&&(v=l);--q||r(v)})})}};if(e("dojo-unit-tests"))var u=f.unitTests=[];var q={},n=new Function("bundle, __evalError","var __amdResult, define = function(x){__amdResult= x;};return [(function(){try{eval(arguments[0]);}catch(e){}if(__amdResult)return 0;try{return eval('('+arguments[0]+')');}catch(e){__evalError.e = e; return __evalError;}})(arguments[0]) , __amdResult];"),w=function(c,l,a){if(l===q)return console.error("failed to evaluate i18n bundle; url="+c,q.e),{};return l?
/nls\/[^\/]+\/[^\/]+$/.test(c)?l:{root:l,_v1x:1}:a},t=function(c,l){var a=[];b.forEach(c,function(c){var l=g.toUrl(c+".js");if(p[l])a.push(p[l]);else{try{var h=g(c);if(h){a.push(h);return}}catch(d){}m.get({url:l,sync:!0,load:function(c){c=n(c,q);a.push(p[l]=w(l,c[0],c[1]))},error:function(){a.push(p[l]={})}})}});l&&l.apply(null,a)},x=f.normalizeLocale=function(c){c=c?c.toLowerCase():i.locale;c=="root"&&(c="ROOT");return c},y=function(c,l){for(var a=c.split("-");a.length;){if(l(a.join("-")))return!0;
a.pop()}return l("ROOT")},h=function(c){for(var l=c.split("/"),a=i.global[l[0]],h=1;a&&h<l.length;a=a[l[h++]]);a&&(p[c]=a)};f.getLocalization=function(c,l,a){var h,c=s(c,l,a).substring(10);v(c,!g.isXdUrl(g.toUrl(c+".js"))?t:g,function(c){h=c});return h};f._preloadLocalizations=function(c,l){function a(h){h=x(h);y(h,function(a){for(var h=0;h<l.length;h++)if(l[h]==a)return t([c.replace(/\./g,"/")+"_"+a]),!0;return!1})}a();for(var h=i.config.extraLocale||[],d=0;d<h.length;d++)a(h[d])};e("dojo-unit-tests")&&
u.push(function(c){c.register("tests.i18n.unit",function(c){var a;a=n("{prop:1}",q);c.is({prop:1},a[0]);c.is(void 0,a[1]);a=n("({prop:1})",q);c.is({prop:1},a[0]);c.is(void 0,a[1]);a=n("{'prop-x':1}",q);c.is({"prop-x":1},a[0]);c.is(void 0,a[1]);a=n("({'prop-x':1})",q);c.is({"prop-x":1},a[0]);c.is(void 0,a[1]);a=n("define({'prop-x':1})",q);c.is(0,a[0]);c.is({"prop-x":1},a[1]);a=n("define({'prop-x':1});",q);c.is(0,a[0]);c.is({"prop-x":1},a[1]);a=n("this is total nonsense and should throw an error",q);
c.is(q,a[0]);c.is(void 0,a[1]);c.is({},w("some/url",a[0],a[1]))})});return d.mixin(f,{dynamic:!0,normalize:function(c,a){var h=j.exec(c)[1];return/^\./.test(h)?a(h)+"/"+c.substring(h.length):c},load:v,cache:function(c,a){p[c]=a}})})},"dojo/string":function(){define(["./_base/kernel","./_base/lang"],function(i,g){g.getObject("string",!0,i);i.string.rep=function(e,b){if(b<=0||!e)return"";for(var a=[];;){b&1&&a.push(e);if(!(b>>=1))break;e+=e}return a.join("")};i.string.pad=function(e,b,a,d){a||(a="0");
e=String(e);b=i.string.rep(a,Math.ceil((b-e.length)/a.length));return d?e+b:b+e};i.string.substitute=function(e,b,a,d){d=d||i.global;a=a?g.hitch(d,a):function(a){return a};return e.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g,function(m,f,j){m=g.getObject(f,!1,b);j&&(m=g.getObject(j,!1,d).call(d,m,f));return a(m,f).toString()})};i.string.trim=String.prototype.trim?g.trim:function(e){for(var e=e.replace(/^\s+/,""),b=e.length-1;b>=0;b--)if(/\S/.test(e.charAt(b))){e=e.substring(0,b+1);break}return e};
return i.string})},"dojo/store/util/SimpleQueryEngine":function(){define(["../../_base/array"],function(i){return function(g,e){function b(a){a=i.filter(a,g);e&&e.sort&&a.sort(function(a,d){for(var b,m=0;b=e.sort[m];m++){var i=a[b.attribute],k=d[b.attribute];if(i!=k)return!!b.descending==i>k?-1:1}return 0});if(e&&(e.start||e.count)){var b=a.length,a=a.slice(e.start||0,(e.start||0)+(e.count||Infinity));a.total=b}return a}switch(typeof g){default:throw Error("Can not query with a "+typeof g);case "object":case "undefined":var a=
g,g=function(d){for(var b in a){var f=a[b];if(f&&f.test){if(!f.test(d[b]))return!1}else if(f!=d[b])return!1}return!0};break;case "string":if(!this[g])throw Error("No filter function "+g+" was found in store");g=this[g];case "function":}b.matches=g;return b}})},"dijit/_WidgetBase":function(){define(["require","dojo/_base/array","dojo/aspect","dojo/_base/config","dojo/_base/connect","dojo/_base/declare","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style",
"dojo/_base/kernel","dojo/_base/lang","dojo/on","dojo/ready","dojo/Stateful","dojo/topic","dojo/_base/window","./registry"],function(i,g,e,b,a,d,m,f,j,o,p,s,k,h,v,u,q,n,w,t){function x(c){return function(a){f[a?"set":"remove"](this.domNode,c,a);this._set(c,a)}}k.isAsync||u(0,function(){i(["dijit/_base/manager"])});var y={};return d("dijit._WidgetBase",q,{id:"",_setIdAttr:"domNode",lang:"",_setLangAttr:x("lang"),dir:"",_setDirAttr:x("dir"),textDir:"","class":"",_setClassAttr:{node:"domNode",type:"class"},
style:"",title:"",tooltip:"",baseClass:"",srcNodeRef:null,domNode:null,containerNode:null,attributeMap:{},_blankGif:b.blankGif||i.toUrl("dojo/resources/blank.gif"),postscript:function(c,a){this.create(c,a)},create:function(c,a){this.srcNodeRef=m.byId(a);this._connects=[];this._supportingWidgets=[];if(this.srcNodeRef&&typeof this.srcNodeRef.id=="string")this.id=this.srcNodeRef.id;if(c)this.params=c,h.mixin(this,c);this.postMixInProperties();if(!this.id)this.id=t.getUniqueId(this.declaredClass.replace(/\./g,
"_"));t.add(this);this.buildRendering();if(this.domNode){this._applyAttributes();var b=this.srcNodeRef;b&&b.parentNode&&this.domNode!==b&&b.parentNode.replaceChild(this.domNode,b)}this.domNode&&this.domNode.setAttribute("widgetId",this.id);this.postCreate();this.srcNodeRef&&!this.srcNodeRef.parentNode&&delete this.srcNodeRef;this._created=!0},_applyAttributes:function(){var c=this.constructor,a=c._setterAttrs;if(!a){var a=c._setterAttrs=[],h;for(h in this.attributeMap)a.push(h);var c=c.prototype,
b;for(b in c)b in this.attributeMap||"_set"+b.replace(/^[a-z]|-[a-zA-Z]/g,function(c){return c.charAt(c.length-1).toUpperCase()})+"Attr"in c&&a.push(b)}g.forEach(a,function(c){this.params&&c in this.params||this[c]&&this.set(c,this[c])},this);for(var d in this.params)this.set(d,this[d])},postMixInProperties:function(){},buildRendering:function(){if(!this.domNode)this.domNode=this.srcNodeRef||o.create("div");if(this.baseClass){var c=this.baseClass.split(" ");this.isLeftToRight()||(c=c.concat(g.map(c,
function(c){return c+"Rtl"})));j.add(this.domNode,c)}},postCreate:function(){},startup:function(){if(!this._started)this._started=!0,g.forEach(this.getChildren(),function(c){if(!c._started&&!c._destroyed&&h.isFunction(c.startup))c.startup(),c._started=!0})},destroyRecursive:function(c){this._beingDestroyed=!0;this.destroyDescendants(c);this.destroy(c)},destroy:function(c){this._beingDestroyed=!0;this.uninitialize();for(var a;a=this._connects.pop();)a.remove();for(;a=this._supportingWidgets.pop();)a.destroyRecursive?
a.destroyRecursive():a.destroy&&a.destroy();this.destroyRendering(c);t.remove(this.id);this._destroyed=!0},destroyRendering:function(c){this.bgIframe&&(this.bgIframe.destroy(c),delete this.bgIframe);this.domNode&&(c?f.remove(this.domNode,"widgetId"):o.destroy(this.domNode),delete this.domNode);this.srcNodeRef&&(c||o.destroy(this.srcNodeRef),delete this.srcNodeRef)},destroyDescendants:function(c){g.forEach(this.getChildren(),function(a){a.destroyRecursive&&a.destroyRecursive(c)})},uninitialize:function(){return!1},
_setStyleAttr:function(c){var a=this.domNode;h.isObject(c)?s.set(a,c):a.style.cssText?a.style.cssText+="; "+c:a.style.cssText=c;this._set("style",c)},_attrToDom:function(a,b,d){d=arguments.length>=3?d:this.attributeMap[a];g.forEach(h.isArray(d)?d:[d],function(d){var k=this[d.node||d||"domNode"];switch(d.type||"attribute"){case "attribute":h.isFunction(b)&&(b=h.hitch(this,b));d=d.attribute?d.attribute:/^on[A-Z][a-zA-Z]*$/.test(a)?a.toLowerCase():a;f.set(k,d,b);break;case "innerText":k.innerHTML="";
k.appendChild(w.doc.createTextNode(b));break;case "innerHTML":k.innerHTML=b;break;case "class":j.replace(k,b,this[a])}},this)},get:function(a){var h=this._getAttrNames(a);return this[h.g]?this[h.g]():this[a]},set:function(a,b){if(typeof a==="object"){for(var d in a)this.set(d,a[d]);return this}d=this._getAttrNames(a);var k=this[d.s];if(h.isFunction(k))var f=k.apply(this,Array.prototype.slice.call(arguments,1));else{var k=this.focusNode&&!h.isFunction(this.focusNode)?"focusNode":"domNode",o=this[k].tagName,
j;if(!(j=y[o])){j=this[k];var e={},n;for(n in j)e[n.toLowerCase()]=!0;j=y[o]=e}n=a in this.attributeMap?this.attributeMap[a]:d.s in this?this[d.s]:d.l in j&&typeof b!="function"||/^aria-|^data-|^role$/.test(a)?k:null;n!=null&&this._attrToDom(a,b,n);this._set(a,b)}return f||this},_attrPairNames:{},_getAttrNames:function(a){var h=this._attrPairNames;if(h[a])return h[a];var b=a.replace(/^[a-z]|-[a-zA-Z]/g,function(a){return a.charAt(a.length-1).toUpperCase()});return h[a]={n:a+"Node",s:"_set"+b+"Attr",
g:"_get"+b+"Attr",l:b.toLowerCase()}},_set:function(a,h){var b=this[a];this[a]=h;this._watchCallbacks&&this._created&&h!==b&&this._watchCallbacks(a,b,h)},on:function(a,h){return e.after(this,this._onMap(a),h,!0)},_onMap:function(a){var h=this.constructor,b=h._onMap;if(!b){var b=h._onMap={},d;for(d in h.prototype)/^on/.test(d)&&(b[d.replace(/^on/,"").toLowerCase()]=d)}return b[a.toLowerCase()]},toString:function(){return"[Widget "+this.declaredClass+", "+(this.id||"NO ID")+"]"},getChildren:function(){return this.containerNode?
t.findWidgets(this.containerNode):[]},getParent:function(){return t.getEnclosingWidget(this.domNode.parentNode)},connect:function(c,h,b){c=a.connect(c,h,this,b);this._connects.push(c);return c},disconnect:function(a){var h=g.indexOf(this._connects,a);h!=-1&&(a.remove(),this._connects.splice(h,1))},subscribe:function(a,b){var d=n.subscribe(a,h.hitch(this,b));this._connects.push(d);return d},unsubscribe:function(a){this.disconnect(a)},isLeftToRight:function(){return this.dir?this.dir=="ltr":p.isBodyLtr()},
isFocusable:function(){return this.focus&&s.get(this.domNode,"display")!="none"},placeAt:function(a,h){a.declaredClass&&a.addChild?a.addChild(this,h):o.place(this.domNode,a,h);return this},getTextDir:function(a,h){return h},applyTextDir:function(){}})})},"dojo/touch":function(){define(["./_base/kernel","./on","./has","./mouse"],function(i,g,e,b){function a(a){return function(b,f){return g(b,a,f)}}e=e("touch");i.touch={press:a(e?"touchstart":"mousedown"),move:a(e?"touchmove":"mousemove"),release:a(e?
"touchend":"mouseup"),cancel:e?a("touchcancel"):b.leave};return i.touch})},"dojo/Stateful":function(){define(["./_base/kernel","./_base/declare","./_base/lang","./_base/array"],function(i,g,e,b){return i.declare("dojo.Stateful",null,{postscript:function(a){a&&e.mixin(this,a)},get:function(a){return this[a]},set:function(a,b){if(typeof a==="object"){for(var e in a)this.set(e,a[e]);return this}e=this[a];this[a]=b;this._watchCallbacks&&this._watchCallbacks(a,e,b);return this},watch:function(a,d){var e=
this._watchCallbacks;if(!e)var f=this,e=this._watchCallbacks=function(a,b,d,k){var h=function(h){if(h)for(var h=h.slice(),k=0,e=h.length;k<e;k++)try{h[k].call(f,a,b,d)}catch(j){console.error(j)}};h(e["_"+a]);k||h(e["*"])};!d&&typeof a==="function"?(d=a,a="*"):a="_"+a;var j=e[a];typeof j!=="object"&&(j=e[a]=[]);j.push(d);return{unwatch:function(){j.splice(b.indexOf(j,d),1)}}}})})},"dojo/text":function(){define(["./_base/kernel","require","./has","./_base/xhr"],function(i,g,e,b){var a;a=function(a,
d,e){b("GET",{url:a,sync:!!d,load:e})};var d={},m=function(a){if(a){var a=a.replace(/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,""),b=a.match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);b&&(a=b[1])}else a="";return a},f={},j={};i.cache=function(b,e,j){var k;typeof b=="string"?/\//.test(b)?(k=b,j=e):k=g.toUrl(b.replace(/\./g,"/")+(e?"/"+e:"")):(k=b+"",j=e);b=j!=void 0&&typeof j!="string"?j.value:j;j=j&&j.sanitize;return typeof b=="string"?(d[k]=b,j?m(b):b):b===null?(delete d[k],null):(k in
d||a(k,!0,function(a){d[k]=a}),j?m(d[k]):d[k])};return{dynamic:!0,normalize:function(a,b){var d=a.split("!"),k=d[0];return(/^\./.test(k)?b(k):k)+(d[1]?"!"+d[1]:"")},load:function(b,e,i){var b=b.split("!"),k=b.length>1,h=b[0],g=e.toUrl(b[0]),b=f,u=function(a){i(k?m(a):a)};h in d?b=d[h]:g in e.cache?b=e.cache[g]:g in d&&(b=d[g]);if(b===f)if(j[g])j[g].push(u);else{var q=j[g]=[u];a(g,!e.async,function(a){d[h]=d[g]=a;for(var b=0;b<q.length;)q[b++](a);delete j[g]})}else u(b)}}})},"dijit/registry":function(){define(["dojo/_base/array",
"dojo/_base/sniff","dojo/_base/unload","dojo/_base/window","."],function(i,g,e,b,a){var d={},m={},f={length:0,add:function(a){if(m[a.id])throw Error("Tried to register widget with id=="+a.id+" but that id is already registered");m[a.id]=a;this.length++},remove:function(a){m[a]&&(delete m[a],this.length--)},byId:function(a){return typeof a=="string"?m[a]:a},byNode:function(a){return m[a.getAttribute("widgetId")]},toArray:function(){var a=[],b;for(b in m)a.push(m[b]);return a},getUniqueId:function(b){var e;
do e=b+"_"+(b in d?++d[b]:d[b]=0);while(m[e]);return a._scopeName=="dijit"?e:a._scopeName+"_"+e},findWidgets:function(a){function b(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType==1){var e=a.getAttribute("widgetId");e?(e=m[e])&&d.push(e):b(a)}}var d=[];b(a);return d},_destroyAll:function(){a._curFocus=null;a._prevFocus=null;a._activeStack=[];i.forEach(f.findWidgets(b.body()),function(a){a._destroyed||(a.destroyRecursive?a.destroyRecursive():a.destroy&&a.destroy())})},getEnclosingWidget:function(a){for(;a;){var b=
a.getAttribute&&a.getAttribute("widgetId");if(b)return m[b];a=a.parentNode}return null},_hash:m};g("ie")&&e.addOnWindowUnload(function(){f._destroyAll()});return a.registry=f})},"dojo/DeferredList":function(){define(["./_base/kernel","./_base/Deferred","./_base/array"],function(i,g,e){i.DeferredList=function(b,a,d,i){var f=[];g.call(this);var j=this;b.length===0&&!a&&this.resolve([0,[]]);var o=0;e.forEach(b,function(e,g){function k(a,d){f[g]=[a,d];o++;o===b.length&&j.resolve(f)}e.then(function(b){a?
j.resolve([g,b]):k(!0,b)},function(a){d?j.reject(a):k(!1,a);if(i)return null;throw a;})})};i.DeferredList.prototype=new g;i.DeferredList.prototype.gatherResults=function(b){b=new i.DeferredList(b,!1,!0,!1);b.addCallback(function(a){var b=[];e.forEach(a,function(a){b.push(a[1])});return b});return b};return i.DeferredList})},"dijit/_TemplatedMixin":function(){define(["dojo/_base/lang","dojo/touch","./_WidgetBase","dojo/string","dojo/cache","dojo/_base/array","dojo/_base/declare","dojo/dom-construct",
"dojo/_base/sniff","dojo/_base/unload","dojo/_base/window"],function(i,g,e,b,a,d,m,f,j,o,p){var s=m("dijit._TemplatedMixin",null,{templateString:null,templatePath:null,_skipNodeCache:!1,_earlyTemplatedStartup:!1,constructor:function(){this._attachPoints=[];this._attachEvents=[]},_stringRepl:function(a){var h=this.declaredClass,d=this;return b.substitute(a,this,function(a,b){b.charAt(0)=="!"&&(a=i.getObject(b.substr(1),!1,d));if(typeof a=="undefined")throw Error(h+" template:"+b);if(a==null)return"";
return b.charAt(0)=="!"?a:a.toString().replace(/"/g,"&quot;")},this)},buildRendering:function(){if(!this.templateString)this.templateString=a(this.templatePath,{sanitize:!0});var b=s.getCachedTemplate(this.templateString,this._skipNodeCache),h;if(i.isString(b)){if(h=f.toDom(this._stringRepl(b)),h.nodeType!=1)throw Error("Invalid template: "+b);}else h=b.cloneNode(!0);this.domNode=h;this.inherited(arguments);this._attachTemplateNodes(h,function(a,b){return a.getAttribute(b)});this._beforeFillContent();
this._fillContent(this.srcNodeRef)},_beforeFillContent:function(){},_fillContent:function(a){var b=this.containerNode;if(a&&b)for(;a.hasChildNodes();)b.appendChild(a.firstChild)},_attachTemplateNodes:function(a,b){for(var d=i.isArray(a)?a:a.all||a.getElementsByTagName("*"),e=i.isArray(a)?0:-1;e<d.length;e++){var f=e==-1?a:d[e];if(!this.widgetsInTemplate||!b(f,"dojoType")&&!b(f,"data-dojo-type")){var n=b(f,"dojoAttachPoint")||b(f,"data-dojo-attach-point");if(n)for(var j=n.split(/\s*,\s*/);n=j.shift();)i.isArray(this[n])?
this[n].push(f):this[n]=f,this._attachPoints.push(n);if(n=b(f,"dojoAttachEvent")||b(f,"data-dojo-attach-event"))for(var j=n.split(/\s*,\s*/),m=i.trim;n=j.shift();)if(n){var o=null;n.indexOf(":")!=-1?(o=n.split(":"),n=m(o[0]),o=m(o[1])):n=m(n);o||(o=n);this._attachEvents.push(this.connect(f,g[n]||n,o))}}}},destroyRendering:function(){d.forEach(this._attachPoints,function(a){delete this[a]},this);this._attachPoints=[];d.forEach(this._attachEvents,this.disconnect,this);this._attachEvents=[];this.inherited(arguments)}});
s._templateCache={};s.getCachedTemplate=function(a,d){var e=s._templateCache,i=a,g=e[i];if(g){try{if(!g.ownerDocument||g.ownerDocument==p.doc)return g}catch(n){}f.destroy(g)}a=b.trim(a);if(d||a.match(/\$\{([^\}]+)\}/g))return e[i]=a;else{g=f.toDom(a);if(g.nodeType!=1)throw Error("Invalid template: "+a);return e[i]=g}};j("ie")&&o.addOnWindowUnload(function(){var a=s._templateCache,b;for(b in a){var d=a[b];typeof d=="object"&&f.destroy(d);delete a[b]}});i.extend(e,{dojoAttachEvent:"",dojoAttachPoint:""});
return s})},"dojox/html/metrics":function(){define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/sniff","dojo/ready","dojo/_base/unload","dojo/_base/window","dojo/dom-geometry"],function(i,g,e,b,a,d,m){var f=g.getObject("dojox.html.metrics",!0),j=g.getObject("dojox");f.getFontMeasurements=function(){var a={"1em":0,"1ex":0,"100%":0,"12pt":0,"16px":0,"xx-small":0,"x-small":0,small:0,medium:0,large:0,"x-large":0,"xx-large":0};if(e("ie"))d.doc.documentElement.style.fontSize="100%";var b=d.doc.createElement("div"),
f=b.style;f.position="absolute";f.left="-100px";f.top="0";f.width="30px";f.height="1000em";f.borderWidth="0";f.margin="0";f.padding="0";f.outline="0";f.lineHeight="1";f.overflow="hidden";d.body().appendChild(b);for(var g in a)f.fontSize=g,a[g]=Math.round(b.offsetHeight*12/16)*16/12/1E3;d.body().removeChild(b);return a};var o=null;f.getCachedFontMeasurements=function(a){if(a||!o)o=f.getFontMeasurements();return o};var p=null,s={};f.getTextBox=function(a,b,e){var f,g;if(p)f=p;else{f=p=d.doc.createElement("div");
var i=d.doc.createElement("div");i.appendChild(f);g=i.style;g.overflow="scroll";g.position="absolute";g.left="0px";g.top="-10000px";g.width="1px";g.height="1px";g.visibility="hidden";g.borderWidth="0";g.margin="0";g.padding="0";g.outline="0";d.body().appendChild(i)}f.className="";g=f.style;g.borderWidth="0";g.margin="0";g.padding="0";g.outline="0";if(arguments.length>1&&b)for(var j in b)j in s||(g[j]=b[j]);if(arguments.length>2&&e)f.className=e;f.innerHTML=a;g=m.position(f);g.w=f.parentNode.scrollWidth;
return g};var k={w:16,h:16};f.getScrollbar=function(){return{w:k.w,h:k.h}};f._fontResizeNode=null;f.initOnFontResize=function(){var a=f._fontResizeNode=d.doc.createElement("iframe"),b=a.style;b.position="absolute";b.width="5em";b.height="10em";b.top="-10000px";e("ie")?a.onreadystatechange=function(){if(a.contentWindow.document.readyState=="complete")a.onresize=a.contentWindow.parent[j._scopeName].html.metrics._fontresize}:a.onload=function(){a.contentWindow.onresize=a.contentWindow.parent[j._scopeName].html.metrics._fontresize};
a.setAttribute("src","javascript:'<html><head><script>if(\"loadFirebugConsole\" in window){window.loadFirebugConsole();}<\/script></head><body></body></html>'");d.body().appendChild(a);f.initOnFontResize=function(){}};f.onFontResize=function(){};f._fontresize=function(){f.onFontResize()};a.addOnUnload(function(){var a=f._fontResizeNode;if(a){if(e("ie")&&a.onresize)a.onresize=null;else if(a.contentWindow&&a.contentWindow.onresize)a.contentWindow.onresize=null;f._fontResizeNode=null}});b(function(){try{var a=
d.doc.createElement("div");a.style.cssText="top:0;left:0;width:100px;height:100px;overflow:scroll;position:absolute;visibility:hidden;";d.body().appendChild(a);k.w=a.offsetWidth-a.clientWidth;k.h=a.offsetHeight-a.clientHeight;d.body().removeChild(a);delete a}catch(b){}"fontSizeWatch"in i.config&&i.config.fontSizeWatch&&f.initOnFontResize()});return f})},"dojo/store/util/QueryResults":function(){define(["../../_base/array","../../_base/lang","../../_base/Deferred"],function(i,g,e){var b=g.getObject("dojo.store.util",
!0);b.QueryResults=function(a){function d(d){a[d]||(a[d]=function(){var f=arguments;return e.when(a,function(a){Array.prototype.unshift.call(f,a);return b.QueryResults(i[d].apply(i,f))})})}if(!a)return a;a.then&&(a=g.delegate(a));d("forEach");d("filter");d("map");if(!a.total)a.total=e.when(a,function(a){return a.length});return a};return b.QueryResults})},"dijit/main":function(){define(["dojo/_base/kernel"],function(i){return i.dijit})},"dojo/cache":function(){define(["./_base/kernel","./text"],function(i){return i.cache})},
"dojo/_base/query":function(){define(["./kernel","../query","./NodeList"],function(i){return i.query})}}});define("gridx/dojo-deps-mini",[],1);