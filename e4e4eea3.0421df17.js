(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{127:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return b}));var r=t(2),a=t(6),o=(t(0),t(142)),i={id:"handleelementcssboxfeature",title:"Variable: HandleElementCSSBoxFeature",sidebar_label:"HandleElementCSSBoxFeature",hide_title:!0},s={unversionedId:"api/variables/handleelementcssboxfeature",id:"api/variables/handleelementcssboxfeature",isDocsHomePage:!1,title:"Variable: HandleElementCSSBoxFeature",description:"Variable: HandleElementCSSBoxFeature",source:"@site/docs/api/variables/handleelementcssboxfeature.md",slug:"/api/variables/handleelementcssboxfeature",permalink:"/webshell/docs/api/variables/handleelementcssboxfeature",editUrl:"https://github.com/formidable-webview/webshell/tree/master/apps/website/docs/docs/api/variables/handleelementcssboxfeature.md",version:"current",sidebar_label:"HandleElementCSSBoxFeature",sidebar:"someSidebar",previous:{title:"Variable: ForceResponsiveViewportFeature",permalink:"/webshell/docs/api/variables/forceresponsiveviewportfeature"},next:{title:"Variable: HandleHTMLDimensionsFeature",permalink:"/webshell/docs/api/variables/handlehtmldimensionsfeature"}},l=[],c={rightToc:l};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"variable-handleelementcssboxfeature"},"Variable: HandleElementCSSBoxFeature"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Const")," ",Object(o.b)("strong",{parentName:"p"},"HandleElementCSSBoxFeature"),": ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/webshell/docs/api/interfaces/featureclass"}),"FeatureClass"),"<",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/webshell/docs/api/interfaces/handleelementcssboxdimensionsoptions"}),"HandleElementCSSBoxDimensionsOptions"),", { onDOMElementCSSBoxDimensions: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/webshell/docs/api/types/propdefinition"}),"PropDefinition"),"<",'"',"onDOMElementCSSBoxDimensions",'"',", (e: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/webshell/docs/api/interfaces/elementcssboxdimensions"}),"ElementCSSBoxDimensions"),") => void>  }>"),Object(o.b)("p",null,"This feature provides ",Object(o.b)("inlineCode",{parentName:"p"},"onDOMElementCSSBoxDimensions")," prop with payloads of type ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/webshell/docs/api/interfaces/elementcssboxdimensions"}),"ElementCSSBoxDimensions"),".\nThe payload contains information about the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model"}),"CSS Box dimensions")," of an element in the\n",Object(o.b)("inlineCode",{parentName:"p"},"WebView")," pixels unit (see ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/webshell/docs/api/interfaces/handleelementcssboxdimensionsoptions"}),"HandleElementCSSBoxDimensionsOptions")," to instruct which element should be targeted)."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"example"))," "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'const Webshell = makeWebshell(\n  WebView,\n  new HandleElementCSSBoxDimensionsOptions({\n    target: { id: "sidebar" }\n  })\n);\n\nexport function MyComponent(props) {\n  const onSidebarDimensions = ({ borderBox }) => console.info(borderBox.width)\n  return <Webshell {...props} onDOMElementCSSBoxDimensions={onSidebarDimensions} />\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"remarks")),"\nA new event will be triggered on every resize.\nIf you are looking for the document content size, use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/webshell/docs/api/variables/handlehtmldimensionsfeature"}),"HandleHTMLDimensionsFeature")," instead."))}b.isMDXComponent=!0},142:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return u}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),b=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=b(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(t),d=r,u=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return t?a.a.createElement(u,s(s({ref:n},c),{},{components:t})):a.a.createElement(u,s({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);