(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),c=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,d=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return n?a.a.createElement(d,l(l({ref:t},u),{},{components:n})):a.a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},127:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0);const a=()=>r.createElement("span",{className:"webshell"},"webshell")},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(110)),o=n(127),l={title:"The Future of Webshell (v3+)",author:"Jules Sam. Randolph",author_title:"Freelance React developer",author_url:"https://github.com/jsamr",author_image_url:"https://avatars1.githubusercontent.com/u/3646758?s=460&u=f699d25514156aa9b975837a52daf135449e43d8&v=4",tags:["webshell","react native","future"]},s={permalink:"/webshell/blog/2020/09/17/the-future-of-webshell",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2020-09-17-the-future-of-webshell.mdx",source:"@site/blog/2020-09-17-the-future-of-webshell.mdx",description:"This post will be regularly updated to track the main features scheduled for .",date:"2020-09-17T00:00:00.000Z",tags:[{label:"webshell",permalink:"/webshell/blog/tags/webshell"},{label:"react native",permalink:"/webshell/blog/tags/react-native"},{label:"future",permalink:"/webshell/blog/tags/future"}],title:"The Future of Webshell (v3+)",readingTime:1.66,truncated:!1},u=[{value:"Native to DOM Communication",id:"native-to-dom-communication",children:[]},{value:"Feature Cardinality",id:"feature-cardinality",children:[]},{value:"Inter-feature Script Communication",id:"inter-feature-script-communication",children:[]},{value:"Feature Composition",id:"feature-composition",children:[]},{value:"Passing Props to Feature Scripts",id:"passing-props-to-feature-scripts",children:[{value:"Native Consumption",id:"native-consumption",children:[]},{value:"Native Implementation",id:"native-implementation",children:[]},{value:"DOM Implementation",id:"dom-implementation",children:[]}]}],c={rightToc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This post will be regularly updated to track the main features scheduled for ",Object(i.b)(o.a,{mdxType:"Webshell"}),"."),Object(i.b)("h2",{id:"native-to-dom-communication"},"Native to DOM Communication"),Object(i.b)("p",null,"Currently, features can inject scripts which will create events, and offer props to handle those events.\nWhat we'd like to provide is a way to communicate imperatively ",Object(i.b)("em",{parentName:"p"},"from")," the shell ",Object(i.b)("em",{parentName:"p"},"to")," the DOM. Something like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="MyComponent.jsx"',title:'"MyComponent.jsx"'}),"import * as React from 'react';\nimport { Feature1 } from './Feature1';\n\nconst feature1 = new Feature1();\nconst Webshell = makeWebshell(WebView, feature1);\n\nexport const MyComponent = (props) => {\n  const bridge = React.useRef();\n  React.useEffect(() => {\n    // props.user must be JSON-serializable\n    bridge.postDOMMessage(feature1.instanceId, props.user);\n  }, [props.user]);\n  return <Webshell bridge={bridge} />;\n};\n")),Object(i.b)("p",null,"And on the Web side:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:'title="feature1.webjs"',title:'"feature1.webjs"'}),"function feature1(context) {\n  context.onShellMessage(function (user) {\n    console.info(user); // Prints user!\n  });\n}\n")),Object(i.b)("h2",{id:"feature-cardinality"},"Feature Cardinality"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"specify the cardinality of a feature (how many instances can co-exist). We\nare planning to get inspiration from ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://v2.docusaurus.io/docs/using-plugins#multi-instance-plugins-and-plugin-ids"}),"multi-instance plugins in\ndocusaurus"),".")),Object(i.b)("h2",{id:"inter-feature-script-communication"},"Inter-feature Script Communication"),Object(i.b)("p",null,"Feature scripts could add listeners to events emitted by other features."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:'title="listening-feature.webjs"',title:'"listening-feature.webjs"'}),"function listeningFeature(context) {\n  function onLinkPress(instanceId, target) {\n    console.info(target.uri + ' pressed!');\n  }\n  context.addDOMEventListener('org.myorg/webshell.link-press', onLinkPress);\n}\n")),Object(i.b)("h2",{id:"feature-composition"},"Feature Composition"),Object(i.b)("h2",{id:"passing-props-to-feature-scripts"},"Passing Props to Feature Scripts"),Object(i.b)("p",null,"Features are already customizable with options, which are once-and-for-all\ndelivered as an argument of the feature function. What we could provide is a way to\ndeclare JSON-serializable props that could be read in Feature Scripts."),Object(i.b)("h3",{id:"native-consumption"},"Native Consumption"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="MyAugmentedWebView"',title:'"MyAugmentedWebView"'}),"import React, { ComponentProps } from 'react';\nimport makeWebshell, { useAutoheight } from '@formidable-webview/webshell';\nimport WebView from 'react-native-webview';\nimport { FeatureWithProp } from './FeatureWithProp';\n\nconst Webshell = makeWebshell(WebView, new FeatureWithProp());\n\nexport default function MyAugmentedWebView(webshellProps: WebshellProps) {\n  return <Webshell userId={123654} {...webshellProps} />;\n}\n")),Object(i.b)("h3",{id:"native-implementation"},"Native Implementation"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:'title="FeatureWithProp.js"',title:'"FeatureWithProp.js"'}),"import featureWithPropScript from './feature-with-prop.webjs';\nimport { FeatureBuilder } from '@formidable-webview/webshell';\n\nexport const FeatureWithProp = new FeatureBuilder({\n  defaultOptions: {},\n  script: featureWithPropScript,\n  featureIdentifier: 'org.myorg/project.feature-with-prop',\n  className: 'FeatureWithProp'\n})\n  .withProp('userId')\n  .build();\n")),Object(i.b)("h3",{id:"dom-implementation"},"DOM Implementation"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:'title="feature-with-prop.webjs"',title:'"feature-with-prop.webjs"'}),"function featureWithProp(context) {\n  console.info(context.props.userId);\n  // 123654\n}\n")))}p.isMDXComponent=!0}}]);