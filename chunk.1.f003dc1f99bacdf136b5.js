webpackJsonp([1],{130:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e(0),u=e(275),a=e(276),s=e(1),i=e(22),r=e(196);e.d(n,"NglDemoIntroModuleNgFactory",function(){return o});var o=t.b(u.a,[],function(l){return t.c([t.d(512,t.e,t.f,[[8,[a.a]],[3,t.e],t.g]),t.d(4608,s.a,s.b,[t.h]),t.d(512,s.d,s.d,[]),t.d(512,i.x,i.x,[[2,i.m],[2,i.c]]),t.d(512,u.a,u.a,[]),t.d(1024,i.t,function(){return[[{path:"",component:r.a}]]},[])])})},196:function(l,n,e){"use strict";var t=e(0);e.d(n,"a",function(){return s});var u=this&&this.__decorate||function(l,n,e,t){var u,a=arguments.length,s=a<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,e):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(l,n,e,t);else for(var i=l.length-1;i>=0;i--)(u=l[i])&&(s=(a<3?u(s):a>3?u(n,e,s):u(n,e))||s);return a>3&&s&&Object.defineProperty(n,e,s),s},a=e(223),s=function(){function l(){this.install=a.highlight(e(381),a.languages.clike),this.bundle=a.highlight(e(378).replace("x.x.x","2.0.1"),a.languages.javascript),this.usageApp=a.highlight(e(383),a.languages.javascript),this.config=a.highlight(e(380),a.languages.javascript),this.configRun=a.highlight(e(379),a.languages.javascript)}return l=u([e.i(t.H)({template:e(382),changeDetection:t.I.OnPush})],l)}()},221:function(l,n,e){"use strict";var t=e(0);e.d(n,"a",function(){return s});var u=this&&this.__decorate||function(l,n,e,t){var u,a=arguments.length,s=a<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,e):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(l,n,e,t);else for(var i=l.length-1;i>=0;i--)(u=l[i])&&(s=(a<3?u(s):a>3?u(n,e,s):u(n,e))||s);return a>3&&s&&Object.defineProperty(n,e,s),s},a=this&&this.__metadata||function(l,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(l,n)},s=function(){function l(){}return u([e.i(t._13)(),a("design:type",String)],l.prototype,"html",void 0),l=u([e.i(t.H)({selector:"prism",template:'<pre class="language-bash"><code ngNonBindable [innerHtml]="html" class="language-bash"></code></pre>',changeDetection:t.I.OnPush})],l)}()},223:function(l,n,e){(function(n){var e="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},t=function(){var l=/\blang(?:uage)?-(\w+)\b/i,n=0,t=e.Prism={util:{encode:function(l){return l instanceof u?new u(l.type,t.util.encode(l.content),l.alias):"Array"===t.util.type(l)?l.map(t.util.encode):l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(l){return Object.prototype.toString.call(l).match(/\[object (\w+)\]/)[1]},objId:function(l){return l.__id||Object.defineProperty(l,"__id",{value:++n}),l.__id},clone:function(l){switch(t.util.type(l)){case"Object":var n={};for(var e in l)l.hasOwnProperty(e)&&(n[e]=t.util.clone(l[e]));return n;case"Array":return l.map&&l.map(function(l){return t.util.clone(l)})}return l}},languages:{extend:function(l,n){var e=t.util.clone(t.languages[l]);for(var u in n)e[u]=n[u];return e},insertBefore:function(l,n,e,u){u=u||t.languages;var a=u[l];if(2==arguments.length){e=arguments[1];for(var s in e)e.hasOwnProperty(s)&&(a[s]=e[s]);return a}var i={};for(var r in a)if(a.hasOwnProperty(r)){if(r==n)for(var s in e)e.hasOwnProperty(s)&&(i[s]=e[s]);i[r]=a[r]}return t.languages.DFS(t.languages,function(n,e){e===u[l]&&n!=l&&(this[n]=i)}),u[l]=i},DFS:function(l,n,e,u){u=u||{};for(var a in l)l.hasOwnProperty(a)&&(n.call(l,a,l[a],e||a),"Object"!==t.util.type(l[a])||u[t.util.objId(l[a])]?"Array"!==t.util.type(l[a])||u[t.util.objId(l[a])]||(u[t.util.objId(l[a])]=!0,t.languages.DFS(l[a],n,a,u)):(u[t.util.objId(l[a])]=!0,t.languages.DFS(l[a],n,null,u)))}},plugins:{},highlightAll:function(l,n){var e={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};t.hooks.run("before-highlightall",e);for(var u,a=e.elements||document.querySelectorAll(e.selector),s=0;u=a[s++];)t.highlightElement(u,l===!0,e.callback)},highlightElement:function(n,u,a){for(var s,i,r=n;r&&!l.test(r.className);)r=r.parentNode;r&&(s=(r.className.match(l)||[,""])[1].toLowerCase(),i=t.languages[s]),n.className=n.className.replace(l,"").replace(/\s+/g," ")+" language-"+s,r=n.parentNode,/pre/i.test(r.nodeName)&&(r.className=r.className.replace(l,"").replace(/\s+/g," ")+" language-"+s);var o=n.textContent,c={element:n,language:s,grammar:i,code:o};if(t.hooks.run("before-sanity-check",c),!c.code||!c.grammar)return c.code&&(c.element.textContent=c.code),void t.hooks.run("complete",c);if(t.hooks.run("before-highlight",c),u&&e.Worker){var d=new Worker(t.filename);d.onmessage=function(l){c.highlightedCode=l.data,t.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,a&&a.call(c.element),t.hooks.run("after-highlight",c),t.hooks.run("complete",c)},d.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else c.highlightedCode=t.highlight(c.code,c.grammar,c.language),t.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,a&&a.call(n),t.hooks.run("after-highlight",c),t.hooks.run("complete",c)},highlight:function(l,n,e){var a=t.tokenize(l,n);return u.stringify(t.util.encode(a),e)},tokenize:function(l,n,e){var u=t.Token,a=[l],s=n.rest;if(s){for(var i in s)n[i]=s[i];delete n.rest}l:for(var i in n)if(n.hasOwnProperty(i)&&n[i]){var r=n[i];r="Array"===t.util.type(r)?r:[r];for(var o=0;o<r.length;++o){var c=r[o],d=c.inside,g=!!c.lookbehind,p=!!c.greedy,m=0,h=c.alias;if(p&&!c.pattern.global){var f=c.pattern.toString().match(/[imuy]*$/)[0];c.pattern=RegExp(c.pattern.source,f+"g")}c=c.pattern||c;for(var v=0,y=0;v<a.length;y+=a[v].length,++v){var b=a[v];if(a.length>l.length)break l;if(!(b instanceof u)){c.lastIndex=0;var M=c.exec(b),x=1;if(!M&&p&&v!=a.length-1){if(c.lastIndex=y,M=c.exec(l),!M)break;for(var w=M.index+(g?M[1].length:0),k=M.index+M[0].length,L=v,N=y,A=a.length;L<A&&N<k;++L)N+=a[L].length,w>=N&&(++v,y=N);if(a[v]instanceof u||a[L-1].greedy)continue;x=L-v,b=l.slice(y,N),M.index-=y}if(M){g&&(m=M[1].length);var w=M.index+m,M=M[0].slice(m),k=w+M.length,j=b.slice(0,w),C=b.slice(k),S=[v,x];j&&S.push(j);var O=new u(i,d?t.tokenize(M,d):M,h,M,p);S.push(O),C&&S.push(C),Array.prototype.splice.apply(a,S)}}}}}return a},hooks:{all:{},add:function(l,n){var e=t.hooks.all;e[l]=e[l]||[],e[l].push(n)},run:function(l,n){var e=t.hooks.all[l];if(e&&e.length)for(var u,a=0;u=e[a++];)u(n)}}},u=t.Token=function(l,n,e,t,u){this.type=l,this.content=n,this.alias=e,this.length=0|(t||"").length,this.greedy=!!u};if(u.stringify=function(l,n,e){if("string"==typeof l)return l;if("Array"===t.util.type(l))return l.map(function(e){return u.stringify(e,n,l)}).join("");var a={type:l.type,content:u.stringify(l.content,n,e),tag:"span",classes:["token",l.type],attributes:{},language:n,parent:e};if("comment"==a.type&&(a.attributes.spellcheck="true"),l.alias){var s="Array"===t.util.type(l.alias)?l.alias:[l.alias];Array.prototype.push.apply(a.classes,s)}t.hooks.run("wrap",a);var i=Object.keys(a.attributes).map(function(l){return l+'="'+(a.attributes[l]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+(i?" "+i:"")+">"+a.content+"</"+a.tag+">"},!e.document)return e.addEventListener?(e.addEventListener("message",function(l){var n=JSON.parse(l.data),u=n.language,a=n.code,s=n.immediateClose;e.postMessage(t.highlight(a,t.languages[u],u)),s&&e.close()},!1),e.Prism):e.Prism;var a=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return a&&(t.filename=a.src,document.addEventListener&&!a.hasAttribute("data-manual")&&("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(t.highlightAll):window.setTimeout(t.highlightAll,16):document.addEventListener("DOMContentLoaded",t.highlightAll))),e.Prism}();void 0!==l&&l.exports&&(l.exports=t),void 0!==n&&(n.Prism=t),t.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/i,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},t.hooks.add("wrap",function(l){"entity"===l.type&&(l.attributes.title=l.content.replace(/&amp;/,"&"))}),t.languages.xml=t.languages.markup,t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:{pattern:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},t.languages.css.atrule.inside.rest=t.util.clone(t.languages.css),t.languages.markup&&(t.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:t.languages.css,alias:"language-css"}}),t.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:t.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:t.languages.css}},alias:"language-css"}},t.languages.markup.tag)),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,function:/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/}),t.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),t.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}}}),t.languages.markup&&t.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:t.languages.javascript,alias:"language-javascript"}}),t.languages.js=t.languages.javascript,function(){"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var l={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.forEach&&Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(n){for(var e,u=n.getAttribute("data-src"),a=n,s=/\blang(?:uage)?-(?!\*)(\w+)\b/i;a&&!s.test(a.className);)a=a.parentNode;if(a&&(e=(n.className.match(s)||[,""])[1]),!e){var i=(u.match(/\.(\w+)$/)||[,""])[1];e=l[i]||i}var r=document.createElement("code");r.className="language-"+e,n.textContent="",r.textContent="Loading…",n.appendChild(r);var o=new XMLHttpRequest;o.open("GET",u,!0),o.onreadystatechange=function(){4==o.readyState&&(o.status<400&&o.responseText?(r.textContent=o.responseText,t.highlightElement(r)):o.status>=400?r.textContent="✖ Error "+o.status+" while fetching file: "+o.statusText:r.textContent="✖ Error: File does not exist or is empty")},o.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}()}).call(n,e(27))},275:function(l,n,e){"use strict";var t=e(0),u=e(1),a=e(22),s=e(277),i=e(196),r=e(221);e.d(n,"a",function(){return c});var o=this&&this.__decorate||function(l,n,e,t){var u,a=arguments.length,s=a<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,e):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(l,n,e,t);else for(var i=l.length-1;i>=0;i--)(u=l[i])&&(s=(a<3?u(s):a>3?u(n,e,s):u(n,e))||s);return a>3&&s&&Object.defineProperty(n,e,s),s},c=function(){function l(){}return l=o([e.i(t.P)({imports:[u.d,a.x.forChild(s.a)],declarations:[i.a,r.a]})],l)}()},276:function(l,n,e){"use strict";function t(l){return a.K(2,[(l()(),a.L(0,null,null,17,"div",[["id","banner"],["style","background: #111111; color: #ccc; tex-align: center;"]],null,null,null,null,null)),(l()(),a.M(null,["\n  "])),(l()(),a.L(0,null,null,14,"div",[["class","slds-container--large slds-container--center"]],null,null,null,null,null)),(l()(),a.M(null,["\n    "])),(l()(),a.L(0,null,null,11,"div",[["class","slds-grid slds-grid--align-center slds-p-around--large"]],null,null,null,null,null)),(l()(),a.M(null,["\n      "])),(l()(),a.L(0,null,null,8,"div",[["class","slds-col slds-text-align--center"]],null,null,null,null,null)),(l()(),a.L(0,null,null,0,"img",[["src","img/shield.svg"],["style","height: 170px;"]],null,null,null,null,null)),(l()(),a.M(null,["\n        "])),(l()(),a.L(0,null,null,1,"div",[["class","slds-text-heading--large"],["style","color:#FFF;"]],null,null,null,null,null)),(l()(),a.M(null,["NG-LIGHTNING"])),(l()(),a.M(null,["\n        "])),(l()(),a.L(0,null,null,1,"div",[["class","slds-m-top--small"]],null,null,null,null,null)),(l()(),a.M(null,["Native Angular components & directives for Lightning Design System"])),(l()(),a.M(null,["\n      "])),(l()(),a.M(null,["\n    "])),(l()(),a.M(null,["\n  "])),(l()(),a.M(null,["\n"])),(l()(),a.M(null,["\n"])),(l()(),a.L(0,null,null,133,"div",[["class","slds-container--large slds-container--center slds-m-top--small slds-p-around--x-large"]],null,null,null,null,null)),(l()(),a.M(null,["\n  "])),(l()(),a.L(0,null,null,36,"div",[["class","slds-grid slds-wrap"]],null,null,null,null,null)),(l()(),a.M(null,["\n    "])),(l()(),a.L(0,null,null,15,"div",[["class","slds-col--padded slds-text-align--center slds-size--1-of-1 slds-large-size--1-of-3 slds-m-top--medium"]],null,null,null,null,null)),(l()(),a.M(null,["\n      "])),(l()(),a.L(0,null,null,1,"div",[["class","slds-text-heading--medium"]],null,null,null,null,null)),(l()(),a.M(null,["BUILDING FOR THE FUTURE"])),(l()(),a.M(null,["\n      "])),(l()(),a.L(0,null,null,9,"div",[["class","slds-m-top--small"]],null,null,null,null,null)),(l()(),a.M(null,["Built upon next generation frameworks like "])),(l()(),a.L(0,null,null,2,"b",[],null,null,null,null,null)),(l()(),a.L(0,null,null,1,"a",[["href","https://angular.io/"]],null,null,null,null,null)),(l()(),a.M(null,["Angular"])),(l()(),a.M(null,[" and "])),(l()(),a.L(0,null,null,2,"b",[],null,null,null,null,null)),(l()(),a.L(0,null,null,1,"a",[["href","https://www.lightningdesignsystem.com/"]],null,null,null,null,null)),(l()(),a.M(null,["Salesforce's Lightning Design System"])),(l()(),a.M(null,[", rest ​assured that you building an application to stand the test of time."])),(l()(),a.M(null,["\n    "])),(l()(),a.M(null,["\n    "])),(l()(),a.L(0,null,null,7,"div",[["class","slds-col--padded slds-text-align--center slds-size--1-of-1 slds-large-size--1-of-3 slds-m-top--medium"]],null,null,null,null,null)),(l()(),a.M(null,["\n      "])),(l()(),a.L(0,null,null,1,"div",[["class","slds-text-heading--medium"]],null,null,null,null,null)),(l()(),a.M(null,["BEST PRACTICES"])),(l()(),a.M(null,["\n      "])),(l()(),a.L(0,null,null,1,"div",[["class","slds-m-top--small"]],null,null,null,null,null)),(l()(),a.M(null,["We focus on building stateless functional components that depend only on their input properties, guaranteeing better performance, more development flexibility and seamless integration with your application's requirements."])),(l()(),a.M(null,["\n    "])),(l()(),a.M(null,["\n    "])),(l()(),a.L(0,null,null,7,"div",[["class","slds-col--padded slds-text-align--center slds-size--1-of-1 slds-large-size--1-of-3 slds-m-top--medium"]],null,null,null,null,null)),(l()(),a.M(null,["\n      "])),(l()(),a.L(0,null,null,1,"div",[["class","slds-text-heading--medium"]],null,null,null,null,null)),(l()(),a.M(null,[" ACCESSIBILITY"])),(l()(),a.M(null,["\n      "])),(l()(),a.L(0,null,null,1,"div",[["class","slds-m-top--small"]],null,null,null,null,null)),(l()(),a.M(null,["\n        We put a lot of effort to follow Lightning Design System's accessibility guidelines, to assure that your product is operable by people with a wide range of abilities\n        and meets all legal requirements.\n      "])),(l()(),a.M(null,["\n    "])),(l()(),a.M(null,["\n  "])),(l()(),a.M(null,["\n  "])),(l()(),a.L(0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),a.M(null,["\n  "])),(l()(),a.L(0,null,null,28,"div",[["class","slds-p-vertical--large"]],null,null,null,null,null)),(l()(),a.M(null,["\n    "])),(l()(),a.L(0,null,null,1,"div",[["class","slds-text-heading--large slds-m-bottom--large"]],null,null,null,null,null)),(l()(),a.M(null,["Getting started"])),(l()(),a.M(null,["\n    "])),(l()(),a.L(0,null,null,4,"p",[["class","slds-m-bottom--small"]],null,null,null,null,null)),(l()(),a.M(null,["Install through "])),(l()(),a.L(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),a.M(null,["npm"])),(l()(),a.M(null,[":"])),(l()(),a.M(null,["\n    "])),(l()(),a.L(0,null,null,1,"prism",[],null,null,null,s.a,s.b)),a.N(49152,null,0,i.a,[],{html:[0,"html"]},null),(l()(),a.M(null,["\n    "])),(l()(),a.L(0,null,null,7,"p",[["class","slds-m-top--large slds-m-bottom--small"]],null,null,null,null,null)),(l()(),a.M(null,["If you use "])),(l()(),a.L(0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),a.M(null,["SystemJS"])),(l()(),a.M(null,[" to load your files, you should adjust your configuration to point our UMD bundle through "])),(l()(),a.L(0,null,null,1,"a",[["href","https://unpkg.com/"]],null,null,null,null,null)),(l()(),a.M(null,["unpkg"])),(l()(),a.M(null,[" or your node_modules, similar to this:"])),(l()(),a.M(null,["\n    "])),(l()(),a.L(0,null,null,1,"prism",[],null,null,null,s.a,s.b)),a.N(49152,null,0,i.a,[],{html:[0,"html"]},null),(l()(),a.M(null,["\n    "])),(l()(),a.L(0,null,null,1,"p",[["class","slds-m-top--small"]],null,null,null,null,null)),(l()(),a.M(null,["You can also check on of our plunker examples for a working setup."])),(l()(),a.M(null,["\n  "])),(l()(),a.M(null,["\n  "])),(l()(),a.L(0,null,null,12,"div",[["class","slds-p-vertical--x-small"]],null,null,null,null,null)),(l()(),a.M(null,["\n    "])),(l()(),a.L(0,null,null,1,"div",[["class","slds-text-heading--large slds-m-bottom--large"]],null,null,null,null,null)),(l()(),a.M(null,["Reading the documentation"])),(l()(),a.M(null,["\n    "])),(l()(),a.L(0,null,null,6,"p",[],null,null,null,null,null)),(l()(),a.M(null,["Each component has API documentation, examples, and a working demo. They can be found "])),(l()(),a.L(0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var t=!0;if("click"===n){t=a._23(l,99).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)!==!1&&t}return t},null,null)),a.N(671744,null,0,r.y,[r.c,r.a,o.e],{routerLink:[0,"routerLink"]},null),a._32(1),(l()(),a.M(null,["here"])),(l()(),a.M(null,["."])),(l()(),a.M(null,["\n  "])),(l()(),a.M(null,["\n  "])),(l()(),a.L(0,null,null,13,"div",[["class","slds-p-vertical--large"]],null,null,null,null,null)),(l()(),a.M(null,["\n    "])),(l()(),a.L(0,null,null,1,"div",[["class","slds-text-heading--large slds-m-bottom--large"]],null,null,null,null,null)),(l()(),a.M(null,["Usage"])),(l()(),a.M(null,["\n    "])),(l()(),a.L(0,null,null,4,"p",[],null,null,null,null,null)),(l()(),a.M(null,["Once installed you need to import our main module into your application module by calling "])),(l()(),a.L(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),a.M(null,["NglModule.forRoot()"])),(l()(),a.M(null,[". You should end up with code similar to this:"])),(l()(),a.M(null,["\n    "])),(l()(),a.L(0,null,null,1,"prism",[],null,null,null,s.a,s.b)),a.N(49152,null,0,i.a,[],{html:[0,"html"]},null),(l()(),a.M(null,["\n  "])),(l()(),a.M(null,["\n  "])),(l()(),a.L(0,null,null,31,"div",[["class","slds-p-vertical--large"]],null,null,null,null,null)),(l()(),a.M(null,["\n    "])),(l()(),a.L(0,null,null,1,"div",[["class","slds-text-heading--large slds-m-bottom--large"]],null,null,null,null,null)),(l()(),a.M(null,["Configuration"])),(l()(),a.M(null,["\n    "])),(l()(),a.L(0,null,null,7,"p",[],null,null,null,null,null)),(l()(),a.M(null,["Optionally, you can pass an object to the "])),(l()(),a.L(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),a.M(null,["forRoot"])),(l()(),a.M(null,[" method, to configure "])),(l()(),a.L(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),a.M(null,["ng-lightning"])),(l()(),a.M(null,[" during the initialization of the application, in order to provide your own default values.\n      For example:\n    "])),(l()(),a.M(null,["\n    "])),(l()(),a.L(0,null,null,1,"prism",[],null,null,null,s.a,s.b)),a.N(49152,null,0,i.a,[],{html:[0,"html"]},null),(l()(),a.M(null,["\n    "])),(l()(),a.L(0,null,null,4,"p",[["class","slds-m-top--small"]],null,null,null,null,null)),(l()(),a.M(null,["Currently available options can be found "])),(l()(),a.L(0,null,null,1,"a",[["href","https://github.com/ng-lightning/ng-lightning/blob/master/src/config/config.interface.ts"]],null,null,null,null,null)),(l()(),a.M(null,["here"])),(l()(),a.M(null,["."])),(l()(),a.M(null,["\n    "])),(l()(),a.L(0,null,null,4,"p",[["class","slds-m-top--large"]],null,null,null,null,null)),(l()(),a.M(null,["If you want to change some config properties during runtime, you can easily achieve it by utilizing the "])),(l()(),a.L(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),a.M(null,["update"])),(l()(),a.M(null,[" method like this:"])),(l()(),a.M(null,["\n    "])),(l()(),a.L(0,null,null,1,"prism",[],null,null,null,s.a,s.b)),a.N(49152,null,0,i.a,[],{html:[0,"html"]},null),(l()(),a.M(null,["\n  "])),(l()(),a.M(null,["\n"])),(l()(),a.M(null,["\n"]))],function(l,n){var e=n.component;l(n,73,0,e.install),l(n,85,0,e.bundle),l(n,99,0,l(n,100,0,"/components")),l(n,117,0,e.usageApp),l(n,135,0,e.config),l(n,150,0,e.configRun)},function(l,n){l(n,98,0,a._23(n,99).target,a._23(n,99).href)})}function u(l){return a.K(0,[(l()(),a.L(0,null,null,1,"ng-component",[],null,null,null,t,g)),a.N(49152,null,0,c.a,[],null,null)],null,null)}var a=e(0),s=e(278),i=e(221),r=e(22),o=e(1),c=e(196);e.d(n,"a",function(){return p});var d=[],g=a.J({encapsulation:2,styles:d,data:{}}),p=a.O("ng-component",c.a,u,{},{},[])},277:function(l,n,e){"use strict";var t=e(196);e.d(n,"a",function(){return u});var u=[{path:"",component:t.a}]},278:function(l,n,e){"use strict";function t(l){return a.K(2,[(l()(),a.L(0,null,null,1,"pre",[["class","language-bash"]],null,null,null,null,null)),(l()(),a.L(0,null,null,0,"code",[["class","language-bash"],["ngNonBindable",""]],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){l(n,1,0,n.component.html)})}function u(l){return a.K(0,[(l()(),a.L(0,null,null,1,"prism",[],null,null,null,t,r)),a.N(49152,null,0,s.a,[],null,null)],null,null)}var a=e(0),s=e(221);e.d(n,"b",function(){return r}),n.a=t;var i=[],r=a.J({encapsulation:2,styles:i,data:{}});a.O("prism",s.a,u,{html:"html"},{},[])},378:function(l,n){l.exports="map: {\r\n  ...\r\n  'ng-lightning/ng-lightning': 'https://unpkg.com/ng-lightning@x.x.x/bundles/ng-lightning.umd.js'\r\n}\r\n"},379:function(l,n){l.exports="import {NglConfig} from 'ng-lightning/ng-lightning';\r\n\r\nexport class AppComponent {\r\n\r\n  constructor(private config: NglConfig) {}\r\n\r\n  changeConfig() {\r\n    this.config.update({\r\n      svgPath: 'new/path',\r\n      ...,\r\n    });\r\n  }\r\n}\r\n"},380:function(l,n){l.exports="@NgModule({\r\n  imports: [\r\n    ...,\r\n    NglModule.forRoot({\r\n      svgPath: '/my/path', // Override this specific property\r\n      ...\r\n    })\r\n  ],\r\n})\r\nexport class AppModule {}\r\n"},381:function(l,n){l.exports="npm install --save ng-lightning\r\n"},382:function(l,n){l.exports='<div id="banner" style="background: #111111; color: #ccc; tex-align: center;">\r\n  <div class="slds-container--large slds-container--center">\r\n    <div class="slds-grid slds-grid--align-center slds-p-around--large">\r\n      <div class="slds-col slds-text-align--center"><img src="img/shield.svg" style="height: 170px;"/>\r\n        <div style="color:#FFF;" class="slds-text-heading--large">NG-LIGHTNING</div>\r\n        <div class="slds-m-top--small">Native Angular components & directives for Lightning Design System</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class="slds-container--large slds-container--center slds-m-top--small slds-p-around--x-large">\r\n  <div class="slds-grid slds-wrap">\r\n    <div class="slds-col--padded slds-text-align--center slds-size--1-of-1 slds-large-size--1-of-3 slds-m-top--medium">\r\n      <div class="slds-text-heading--medium">BUILDING FOR THE FUTURE</div>\r\n      <div class="slds-m-top--small">Built upon next generation frameworks like <b><a href="https://angular.io/">Angular</a></b> and <b><a href="https://www.lightningdesignsystem.com/">Salesforce\'s Lightning Design System</a></b>, rest ​assured that you building an application to stand the test of time.</div>\r\n    </div>\r\n    <div class="slds-col--padded slds-text-align--center slds-size--1-of-1 slds-large-size--1-of-3 slds-m-top--medium">\r\n      <div class="slds-text-heading--medium">BEST PRACTICES</div>\r\n      <div class="slds-m-top--small">We focus on building stateless functional components that depend only on their input properties, guaranteeing better performance, more development flexibility and seamless integration with your application\'s requirements.</div>\r\n    </div>\r\n    <div class="slds-col--padded slds-text-align--center slds-size--1-of-1 slds-large-size--1-of-3 slds-m-top--medium">\r\n      <div class="slds-text-heading--medium"> ACCESSIBILITY</div>\r\n      <div class="slds-m-top--small">\r\n        We put a lot of effort to follow Lightning Design System\'s accessibility guidelines, to assure that your product is operable by people with a wide range of abilities\r\n        and meets all legal requirements.\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr/>\r\n  <div class="slds-p-vertical--large">\r\n    <div class="slds-text-heading--large slds-m-bottom--large">Getting started</div>\r\n    <p class="slds-m-bottom--small">Install through <code>npm</code>:</p>\r\n    <prism [html]="install"></prism>\r\n    <p class="slds-m-top--large slds-m-bottom--small">If you use <strong>SystemJS</strong> to load your files, you should adjust your configuration to point our UMD bundle through <a href="https://unpkg.com/">unpkg</a> or your node_modules, similar to this:</p>\r\n    <prism [html]="bundle"></prism>\r\n    <p class="slds-m-top--small">You can also check on of our plunker examples for a working setup.</p>\r\n  </div>\r\n  <div class="slds-p-vertical--x-small">\r\n    <div class="slds-text-heading--large slds-m-bottom--large">Reading the documentation</div>\r\n    <p>Each component has API documentation, examples, and a working demo. They can be found <a [routerLink]="[\'/components\']">here</a>.</p>\r\n  </div>\r\n  <div class="slds-p-vertical--large">\r\n    <div class="slds-text-heading--large slds-m-bottom--large">Usage</div>\r\n    <p>Once installed you need to import our main module into your application module by calling <code>NglModule.forRoot()</code>. You should end up with code similar to this:</p>\r\n    <prism [html]="usageApp"></prism>\r\n  </div>\r\n  <div class="slds-p-vertical--large">\r\n    <div class="slds-text-heading--large slds-m-bottom--large">Configuration</div>\r\n    <p>Optionally, you can pass an object to the <code>forRoot</code> method, to configure <code>ng-lightning</code> during the initialization of the application, in order to provide your own default values.\r\n      For example:\r\n    </p>\r\n    <prism [html]="config"></prism>\r\n    <p class="slds-m-top--small">Currently available options can be found <a href="https://github.com/ng-lightning/ng-lightning/blob/master/src/config/config.interface.ts">here</a>.</p>\r\n    <p class="slds-m-top--large">If you want to change some config properties during runtime, you can easily achieve it by utilizing the <code>update</code> method like this:</p>\r\n    <prism [html]="configRun"></prism>\r\n  </div>\r\n</div>\r\n'},383:function(l,n){l.exports="import {AppComponent} from '...';\r\nimport {NglModule} from 'ng-lightning/ng-lightning';\r\n\r\n@NgModule({\r\n  imports: [..., NglModule.forRoot()],\r\n  declarations: [AppComponent, ...],\r\n  bootstrap: [AppComponent],\r\n})\r\nexport class AppModule {}\r\n"}});