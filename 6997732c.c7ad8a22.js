(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{110:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return O}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},o=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),o=s(r),d=a,O=o["".concat(c,".").concat(d)]||o[d]||u[d]||i;return r?n.a.createElement(O,b(b({ref:t},p),{},{components:r})):n.a.createElement(O,b({ref:t},p))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=d;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:a,c[1]=b;for(var p=2;p<i;p++)c[p]=r[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},84:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return b})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var a=r(2),n=r(6),i=(r(0),r(110)),c={id:"feature",title:"Class: Feature",sidebar_label:"Feature",hide_title:!0},b={unversionedId:"api/classes/feature",id:"api/classes/feature",isDocsHomePage:!1,title:"Class: Feature",description:"Class: Feature&60;O, S>",source:"@site/docs/api/classes/feature.md",slug:"/api/classes/feature",permalink:"/webshell/docs/api/classes/feature",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/classes/feature.md",version:"current",sidebar_label:"Feature",sidebar:"someSidebar",previous:{title:"@formidable-webview/webshell",permalink:"/webshell/docs/api/index"},next:{title:"Class: FeatureBuilder",permalink:"/webshell/docs/api/classes/featurebuilder"}},l=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"defaultOptions",id:"defaultoptions",children:[]},{value:"featureIdentifier",id:"featureidentifier",children:[]},{value:"options",id:"options",children:[]},{value:"propSpecs",id:"propspecs",children:[]},{value:"script",id:"script",children:[]}]}],p={rightToc:l};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"class-featureo-s"},"Class: Feature","<",Object(i.b)("strong",{parentName:"h1"},"O, S"),">"),Object(i.b)("p",null,"A feature encapsulates injectable behaviors in a WebView."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"remarks")),"\nYou should never instantiate that class directly. Use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/webshell/docs/api/classes/featurebuilder"}),"FeatureBuilder")," instead."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"param"))," An object to specify attributes of the feature."),Object(i.b)("h2",{id:"type-parameters"},"Type parameters"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"O"),Object(i.b)("li",{parentName:"ul"},"S")),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Feature"))),Object(i.b)("h2",{id:"implements"},"Implements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"{ defaultOptions: O ; featureIdentifier: string ; script: string  }")),Object(i.b)("h2",{id:"constructors"},"Constructors"),Object(i.b)("h3",{id:"constructor"},"constructor"),Object(i.b)("p",null,"+"," ",Object(i.b)("strong",{parentName:"p"},"new Feature"),"(",Object(i.b)("inlineCode",{parentName:"p"},"params"),": ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/webshell/docs/api/index#featurebase"}),"FeatureBase"),"<","O> & { propSpecs: S  }, ",Object(i.b)("inlineCode",{parentName:"p"},"options"),": O): ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/webshell/docs/api/classes/feature"}),"Feature")),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"params")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"/webshell/docs/api/index#featurebase"}),"FeatureBase"),"<","O> & { propSpecs: S  }")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"options")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"O")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/webshell/docs/api/classes/feature"}),"Feature")),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"defaultoptions"},"defaultOptions"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"defaultOptions"),": O"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"featureidentifier"},"featureIdentifier"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"featureIdentifier"),": string"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"options"},"options"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"options"),": O"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"propspecs"},"propSpecs"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"propSpecs"),": S"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"script"},"script"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"script"),": string"),Object(i.b)("p",null,"{@inheritdoc FeatureDefinition.script}"))}s.isMDXComponent=!0}}]);