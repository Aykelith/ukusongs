(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{121:function(r,e,t){var n=t(24),o=t(23),i=t(22),c=Object.defineProperty,a={},u=function(r){throw r};r.exports=function(r,e){if(i(a,r))return a[r];e||(e={});var t=[][r],s=!!i(e,"ACCESSORS")&&e.ACCESSORS,f=i(e,0)?e[0]:u,l=i(e,1)?e[1]:void 0;return a[r]=!!t&&!o((function(){if(s&&!n)return!0;var r={length:-1};s?c(r,1,{enumerable:!0,get:u}):r[1]=1,t.call(r,f,l)}))}},122:function(r,e,t){"use strict";var n=t(85).forEach,o=t(123),i=t(121),c=o("forEach"),a=i("forEach");r.exports=c&&a?[].forEach:function(r){return n(this,r,arguments.length>1?arguments[1]:void 0)}},123:function(r,e,t){"use strict";var n=t(23);r.exports=function(r,e){var t=[][r];return!!t&&n((function(){t.call(null,e||function(){throw 1},1)}))}},124:function(r,e,t){"use strict";var n=t(26),o=t(122);n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},125:function(r,e,t){"use strict";var n=t(26),o=t(126).left,i=t(123),c=t(121),a=i("reduce"),u=c("reduce",{1:0});n({target:"Array",proto:!0,forced:!a||!u},{reduce:function(r){return o(this,r,arguments.length,arguments.length>1?arguments[1]:void 0)}})},126:function(r,e,t){var n=t(31),o=t(37),i=t(59),c=t(43),a=function(r){return function(e,t,a,u){n(t);var s=o(e),f=i(s),l=c(s.length),h=r?l-1:0,d=r?-1:1;if(a<2)for(;;){if(h in f){u=f[h],h+=d;break}if(h+=d,r?h<0:l<=h)throw TypeError("Reduce of empty array with no initial value")}for(;r?h>=0:l>h;h+=d)h in f&&(u=t(u,f[h],h,s));return u}};r.exports={left:a(!1),right:a(!0)}},127:function(r,e,t){"use strict";var n=t(26),o=t(58),i=[].reverse,c=[1,2];n({target:"Array",proto:!0,forced:String(c)===String(c.reverse())},{reverse:function(){return o(this)&&(this.length=this.length),i.call(this)}})},128:function(r,e,t){"use strict";var n=t(26),o=t(21),i=t(58),c=t(84),a=t(43),u=t(30),s=t(129),f=t(19),l=t(130),h=t(121),d=l("slice"),p=h("slice",{ACCESSORS:!0,0:0,1:2}),y=f("species"),v=[].slice,m=Math.max;n({target:"Array",proto:!0,forced:!d||!p},{slice:function(r,e){var t,n,f,l=u(this),h=a(l.length),d=c(r,h),p=c(void 0===e?h:e,h);if(i(l)&&("function"!=typeof(t=l.constructor)||t!==Array&&!i(t.prototype)?o(t)&&null===(t=t[y])&&(t=void 0):t=void 0,t===Array||void 0===t))return v.call(l,d,p);for(n=new(void 0===t?Array:t)(m(p-d,0)),f=0;d<p;d++,f++)d in l&&s(n,f,l[d]);return n.length=f,n}})},129:function(r,e,t){"use strict";var n=t(44),o=t(25),i=t(39);r.exports=function(r,e,t){var c=n(e);c in r?o.f(r,c,i(0,t)):r[c]=t}},130:function(r,e,t){var n=t(23),o=t(19),i=t(87),c=o("species");r.exports=function(r){return i>=51||!n((function(){var e=[];return(e.constructor={})[c]=function(){return{foo:1}},1!==e[r](Boolean).foo}))}},131:function(r,e,t){var n=t(26),o=t(23),i=t(30),c=t(38).f,a=t(24),u=o((function(){c(1)}));n({target:"Object",stat:!0,forced:!a||u,sham:!a},{getOwnPropertyDescriptor:function(r,e){return c(i(r),e)}})},132:function(r,e,t){var n=t(26),o=t(37),i=t(60);n({target:"Object",stat:!0,forced:t(23)((function(){i(1)}))},{keys:function(r){return i(o(r))}})},133:function(r,e,t){var n=t(18),o=t(86),i=t(122),c=t(27);for(var a in o){var u=n[a],s=u&&u.prototype;if(s&&s.forEach!==i)try{c(s,"forEach",i)}catch(r){s.forEach=i}}},135:function(r,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return v}));t(2),t(3),t(4),t(124),t(1),t(125),t(127),t(128),t(5),t(6),t(7),t(131),t(8),t(132),t(9),t(10),t(11),t(12),t(13),t(133),t(14);var n,o,i,c=t(0),a=t.n(c),u=t(15);function s(r){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function f(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function l(r,e){return(l=Object.setPrototypeOf||function(r,e){return r.__proto__=e,r})(r,e)}function h(r){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(r){return!1}}();return function(){var t,n=p(r);if(e){var o=p(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return d(this,t)}}function d(r,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(r){if(void 0===r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}(r):e}function p(r){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)})(r)}function y(r,e,t,n,o){var i={};return Object.keys(n).forEach((function(r){i[r]=n[r]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=t.slice().reverse().reduce((function(t,n){return n(r,e,t)||t}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(r,e,i),i=null),i}var v=(i=o=function(r){!function(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&l(r,e)}(i,r);var e,t,n,o=h(i);function i(r){var e;return function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(e=o.call(this,r)).state={},e}return e=i,(t=[{key:"componentDidMount",value:function(){}},{key:"renderChord",value:function(r){return a.a.createElement("b",null,r)}},{key:"recordLyric",value:function(r){return a.a.createElement("div",null,r)}},{key:"render",value:function(){return a.a.createElement("div",{className:"Song"},a.a.createElement("div",{className:"_title"},"Ai dechis cerul Tau"),a.a.createElement("div",{className:"_content"},this.renderChord("      A"),this.recordLyric("Ai deschis cerul Tau,"),this.renderChord("     C#m                  F#m"),this.recordLyric("Ai lasat slava Ta si-ai venit"),this.renderChord("       D        Bm       E"),this.recordLyric("Pentru mine, un biet pacatos."),this.renderChord("       A                    C#m       F#m"),this.recordLyric("M-ai iubit asa mult, c-ai murit la Calvar"),this.renderChord("      D                      Bm"),this.recordLyric("Sa deschizi ochii mei sa-nteleg"),this.renderChord("            E"),this.recordLyric("Si sa Te slavesc."),a.a.createElement("br",null),this.renderChord("       A"),this.recordLyric("Pentru cântec, speranta si raza de soare,"),this.renderChord(" F#m"),this.recordLyric("Lumina si pace pe-a mea carare,"),this.renderChord("       D             Bm        E"),this.recordLyric("Pentru tot ce Tu îmi dai, multumesc!"),this.renderChord("       A"),this.recordLyric("Pentru zambetul Tau inscris printre stele,"),this.renderChord("     F#m"),this.recordLyric("Mangaierea Ta în clipele grele,"),this.renderChord("       D                 Bm"),this.recordLyric("Pentru dragostea Ta revarsata în mine,"),this.renderChord("     E"),this.recordLyric("Ma închin, recunosc ca esti Domn"),this.renderChord("                  A"),this.recordLyric("Si rostesc: „Multumesc!”"),a.a.createElement("br",null)))}}])&&f(e.prototype,t),n&&f(e,n),i}(a.a.PureComponent),o.propTypes={},y((n=i).prototype,"renderChord",[u.a],Object.getOwnPropertyDescriptor(n.prototype,"renderChord"),n.prototype),y(n.prototype,"recordLyric",[u.a],Object.getOwnPropertyDescriptor(n.prototype,"recordLyric"),n.prototype),n)}}]);