(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{121:function(r,e,t){var n=t(24),o=t(23),i=t(22),c=Object.defineProperty,u={},a=function(r){throw r};r.exports=function(r,e){if(i(u,r))return u[r];e||(e={});var t=[][r],f=!!i(e,"ACCESSORS")&&e.ACCESSORS,l=i(e,0)?e[0]:a,s=i(e,1)?e[1]:void 0;return u[r]=!!t&&!o((function(){if(f&&!n)return!0;var r={length:-1};f?c(r,1,{enumerable:!0,get:a}):r[1]=1,t.call(r,l,s)}))}},122:function(r,e,t){"use strict";var n=t(85).forEach,o=t(123),i=t(121),c=o("forEach"),u=i("forEach");r.exports=c&&u?[].forEach:function(r){return n(this,r,arguments.length>1?arguments[1]:void 0)}},123:function(r,e,t){"use strict";var n=t(23);r.exports=function(r,e){var t=[][r];return!!t&&n((function(){t.call(null,e||function(){throw 1},1)}))}},124:function(r,e,t){"use strict";var n=t(26),o=t(122);n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},125:function(r,e,t){"use strict";var n=t(26),o=t(126).left,i=t(123),c=t(121),u=i("reduce"),a=c("reduce",{1:0});n({target:"Array",proto:!0,forced:!u||!a},{reduce:function(r){return o(this,r,arguments.length,arguments.length>1?arguments[1]:void 0)}})},126:function(r,e,t){var n=t(31),o=t(37),i=t(59),c=t(43),u=function(r){return function(e,t,u,a){n(t);var f=o(e),l=i(f),s=c(f.length),p=r?s-1:0,d=r?-1:1;if(u<2)for(;;){if(p in l){a=l[p],p+=d;break}if(p+=d,r?p<0:s<=p)throw TypeError("Reduce of empty array with no initial value")}for(;r?p>=0:s>p;p+=d)p in l&&(a=t(a,l[p],p,f));return a}};r.exports={left:u(!1),right:u(!0)}},127:function(r,e,t){"use strict";var n=t(26),o=t(58),i=[].reverse,c=[1,2];n({target:"Array",proto:!0,forced:String(c)===String(c.reverse())},{reverse:function(){return o(this)&&(this.length=this.length),i.call(this)}})},128:function(r,e,t){"use strict";var n=t(26),o=t(21),i=t(58),c=t(84),u=t(43),a=t(30),f=t(129),l=t(19),s=t(130),p=t(121),d=s("slice"),h=p("slice",{ACCESSORS:!0,0:0,1:2}),y=l("species"),v=[].slice,m=Math.max;n({target:"Array",proto:!0,forced:!d||!h},{slice:function(r,e){var t,n,l,s=a(this),p=u(s.length),d=c(r,p),h=c(void 0===e?p:e,p);if(i(s)&&("function"!=typeof(t=s.constructor)||t!==Array&&!i(t.prototype)?o(t)&&null===(t=t[y])&&(t=void 0):t=void 0,t===Array||void 0===t))return v.call(s,d,h);for(n=new(void 0===t?Array:t)(m(h-d,0)),l=0;d<h;d++,l++)d in s&&f(n,l,s[d]);return n.length=l,n}})},129:function(r,e,t){"use strict";var n=t(44),o=t(25),i=t(39);r.exports=function(r,e,t){var c=n(e);c in r?o.f(r,c,i(0,t)):r[c]=t}},130:function(r,e,t){var n=t(23),o=t(19),i=t(87),c=o("species");r.exports=function(r){return i>=51||!n((function(){var e=[];return(e.constructor={})[c]=function(){return{foo:1}},1!==e[r](Boolean).foo}))}},131:function(r,e,t){var n=t(26),o=t(23),i=t(30),c=t(38).f,u=t(24),a=o((function(){c(1)}));n({target:"Object",stat:!0,forced:!u||a,sham:!u},{getOwnPropertyDescriptor:function(r,e){return c(i(r),e)}})},132:function(r,e,t){var n=t(26),o=t(37),i=t(60);n({target:"Object",stat:!0,forced:t(23)((function(){i(1)}))},{keys:function(r){return i(o(r))}})},133:function(r,e,t){var n=t(18),o=t(86),i=t(122),c=t(27);for(var u in o){var a=n[u],f=a&&a.prototype;if(f&&f.forEach!==i)try{c(f,"forEach",i)}catch(r){f.forEach=i}}},141:function(r,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return v}));t(2),t(3),t(4),t(124),t(1),t(125),t(127),t(128),t(5),t(6),t(7),t(131),t(8),t(132),t(9),t(10),t(11),t(12),t(13),t(133),t(14);var n,o,i,c=t(0),u=t.n(c),a=t(15);function f(r){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function l(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function s(r,e){return(s=Object.setPrototypeOf||function(r,e){return r.__proto__=e,r})(r,e)}function p(r){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(r){return!1}}();return function(){var t,n=h(r);if(e){var o=h(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return d(this,t)}}function d(r,e){return!e||"object"!==f(e)&&"function"!=typeof e?function(r){if(void 0===r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}(r):e}function h(r){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)})(r)}function y(r,e,t,n,o){var i={};return Object.keys(n).forEach((function(r){i[r]=n[r]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=t.slice().reverse().reduce((function(t,n){return n(r,e,t)||t}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(r,e,i),i=null),i}var v=(i=o=function(r){!function(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&s(r,e)}(i,r);var e,t,n,o=p(i);function i(r){var e;return function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(e=o.call(this,r)).state={},e}return e=i,(t=[{key:"componentDidMount",value:function(){}},{key:"renderChord",value:function(r){return u.a.createElement("b",null,r)}},{key:"recordLyric",value:function(r){return u.a.createElement("div",null,r)}},{key:"render",value:function(){return u.a.createElement("div",{className:"Song"},u.a.createElement("div",{className:"_title"},"Doamne, Numele-Ti inalt"),u.a.createElement("div",{className:"_content"},u.a.createElement("br",null),this.renderChord("G         C          D     C"),this.recordLyric("  Doamne, Numele-Ti înalt,"),this.renderChord("G         C             D    C"),this.recordLyric("  Doamne, lauda-Ti cânt Tie!"),this.renderChord("G     C              D   C"),this.recordLyric("  Fericit sunt ca Te am,"),this.renderChord("G     C               D    C D"),this.recordLyric("  Fericit de-a Ta iertare!"),u.a.createElement("br",null),u.a.createElement("br",null),this.renderChord("G         C        D       C     G"),this.recordLyric("  Tu ai venit pe Pamânt sa ne salvezi,"),this.renderChord("       C               D        C      G"),this.recordLyric("Sus pe cruce Te-ai jertfit, iertati sa fim."),this.renderChord("      C           D            Bm          Em"),this.recordLyric("De pe cruce în mormânt, din mormânt sus la cer"),this.renderChord("       D         G"),this.recordLyric("Sa fii înaltat mereu!"),u.a.createElement("br",null)))}}])&&l(e.prototype,t),n&&l(e,n),i}(u.a.PureComponent),o.propTypes={},y((n=i).prototype,"renderChord",[a.a],Object.getOwnPropertyDescriptor(n.prototype,"renderChord"),n.prototype),y(n.prototype,"recordLyric",[a.a],Object.getOwnPropertyDescriptor(n.prototype,"recordLyric"),n.prototype),n)}}]);