(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{110:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return r?o.a.createElement(f,i(i({ref:t},l),{},{components:r})):o.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},114:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return a}));var n=r(0),o=function(e){var t=e.reference,r=e.member,o=e.type;return n.createElement("span",{className:"api-symbol "+o},t,r?"."+r:"")},a=function(e){var t=e.reference,r=e.type,o=e.overrideUrl,a=e.member,c=a?"#"+a.toLowerCase():"",i="interface"===r?"/docs/api/interfaces/"+t.toLowerCase()+c:"class"===r?"/docs/api/classes/"+t.toLowerCase()+c:"enum"===r?"/docs/api/enums/"+t.toLowerCase()+c:"/docs/api/index#"+t.toLowerCase();return n.createElement("a",{className:"api-ref api-symbol "+r,href:o||i},t,a?"."+a:"")}},127:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(0);const o=()=>n.createElement("span",{className:"webshell"},"webshell")},128:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(0);const o={hoc:"Higher Order Component",dom:"Document Object Model"},a={hoc:"https://reactjs.org/docs/higher-order-components.html",viewport:"https://developer.mozilla.org/en-US/docs/Glossary/Viewport",hooks:"https://reactjs.org/docs/hooks-overview.html",dom:"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction","messaging system":"https://github.com/react-native-community/react-native-webview/blob/master/docs/Guide.md#communicating-between-js-and-native"},c=({id:e,title:t})=>{const r=a[e&&e.toLowerCase()],c=o[e&&e.toLowerCase()],i=void 0===r?`MISSING REFERENCE '${e}'`:t||e,s=e=>c?n.createElement("abbr",e):n.createElement("span",e);return n.createElement("strong",null,n.createElement(s,{title:c||void 0},n.createElement("a",{className:"term",title:c||null,href:r},i)))}},130:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(0),o=r(114);const a=e=>n.createElement("div",{className:"card api-box shadow--lt",style:{textAlign:"center"}},n.createElement("div",{className:"card__header api-box__title"},"~ API Reference ~"),n.createElement(o.a,e))},86:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),a=(r(0),r(110)),c=(r(127),r(128),r(114),r(130)),i={id:"features",title:"Features Reference"},s={unversionedId:"features",id:"features",isDocsHomePage:!1,title:"Features Reference",description:"ForceElementSizeFeature",source:"@site/docs/features.mdx",slug:"/features",permalink:"/webshell/docs/features",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/features.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Tooling",permalink:"/webshell/docs/tooling"},next:{title:"@formidable-webview/webshell",permalink:"/webshell/docs/api/index"}},l=[{value:"ForceElementSizeFeature",id:"forceelementsizefeature",children:[]},{value:"ForceResponsiveViewportFeature",id:"forceresponsiveviewportfeature",children:[]}],u={rightToc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"forceelementsizefeature"},"ForceElementSizeFeature"),Object(a.b)(c.a,{reference:"ForceElementSizeFeature",type:"variable",mdxType:"APIBox"}),Object(a.b)("h2",{id:"forceresponsiveviewportfeature"},"ForceResponsiveViewportFeature"),Object(a.b)(c.a,{reference:"ForceResponsiveViewportFeature",type:"variable",mdxType:"APIBox"}))}p.isMDXComponent=!0}}]);