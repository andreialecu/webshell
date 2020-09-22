(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{110:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return O}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),b=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=b(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(t),u=r,O=s["".concat(o,".").concat(u)]||s[u]||d[u]||i;return t?a.a.createElement(O,l(l({ref:n},p),{},{components:t})):a.a.createElement(O,l({ref:n},p))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},78:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return b}));var r=t(2),a=t(6),i=(t(0),t(110)),o={id:"minimalwebviewprops",title:"Interface: MinimalWebViewProps",sidebar_label:"MinimalWebViewProps",hide_title:!0},l={unversionedId:"api/interfaces/minimalwebviewprops",id:"api/interfaces/minimalwebviewprops",isDocsHomePage:!1,title:"Interface: MinimalWebViewProps",description:"Interface: MinimalWebViewProps",source:"@site/docs/api/interfaces/minimalwebviewprops.md",slug:"/api/interfaces/minimalwebviewprops",permalink:"/webshell/docs/api/interfaces/minimalwebviewprops",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/interfaces/minimalwebviewprops.md",version:"current",sidebar_label:"MinimalWebViewProps",sidebar:"someSidebar",previous:{title:"Interface: LinkPressTarget",permalink:"/webshell/docs/api/interfaces/linkpresstarget"},next:{title:"Interface: RectSize",permalink:"/webshell/docs/api/interfaces/rectsize"}},c=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"disableScrollViewPanResponder",id:"disablescrollviewpanresponder",children:[]},{value:"injectedJavaScript",id:"injectedjavascript",children:[]},{value:"javaScriptEnabled",id:"javascriptenabled",children:[]},{value:"onError",id:"onerror",children:[]},{value:"onMessage",id:"onmessage",children:[]},{value:"onNavigationStateChange",id:"onnavigationstatechange",children:[]},{value:"scalesPageToFit",id:"scalespagetofit",children:[]},{value:"showsVerticalScrollIndicator",id:"showsverticalscrollindicator",children:[]},{value:"source",id:"source",children:[]},{value:"style",id:"style",children:[]}]}],p={rightToc:c};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-minimalwebviewprops"},"Interface: MinimalWebViewProps"),Object(i.b)("p",null,"A high-compatibility type expressing minimal requirements for the\nWebView Component's props."),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"MinimalWebViewProps"))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"disablescrollviewpanresponder"},"disableScrollViewPanResponder"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"disableScrollViewPanResponder"),": unknown"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"injectedjavascript"},"injectedJavaScript"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"injectedJavaScript"),": unknown"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"javascriptenabled"},"javaScriptEnabled"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"javaScriptEnabled"),": unknown"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"onerror"},"onError"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"onError"),": unknown"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"onmessage"},"onMessage"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"onMessage"),": unknown"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"onnavigationstatechange"},"onNavigationStateChange"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"onNavigationStateChange"),": unknown"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"scalespagetofit"},"scalesPageToFit"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"scalesPageToFit"),": unknown"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"showsverticalscrollindicator"},"showsVerticalScrollIndicator"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"showsVerticalScrollIndicator"),": unknown"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"source"},"source"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"source"),": Record","<","string, any>"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"style"},"style"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"style"),": unknown"))}b.isMDXComponent=!0}}]);