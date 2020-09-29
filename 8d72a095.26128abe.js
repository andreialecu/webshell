(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{116:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return l}));var a=n(0),i=n(113),r=function(e){var t=e.reference,n=e.member,i=e.type;return a.createElement("span",{className:"api-symbol "+i},t,n?"."+n:"")},l=function(e){var t=e.reference,n=e.type,r=e.overrideUrl,l=e.member,c=l?"#"+l.toLowerCase():"",s="interface"===n?"/docs/api/interfaces/"+t.toLowerCase()+c:"class"===n?"/docs/api/classes/"+t.toLowerCase()+c:"enum"===n?"/docs/api/enums/"+t.toLowerCase()+c:"/docs/api#"+t.toLowerCase();return a.createElement("a",{className:"api-ref api-symbol "+n,href:Object(i.a)(r||s)},t,l?"."+l:"")}},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0);const i={hoc:"Higher Order Component",dom:"Document Object Model"},r={hoc:"https://reactjs.org/docs/higher-order-components.html",viewport:"https://developer.mozilla.org/en-US/docs/Glossary/Viewport",hooks:"https://reactjs.org/docs/hooks-overview.html",dom:"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction","messaging system":"https://github.com/react-native-community/react-native-webview/blob/master/docs/Guide.md#communicating-between-js-and-native"},l=({id:e,title:t})=>{const n=r[e&&e.toLowerCase()],l=i[e&&e.toLowerCase()],c=void 0===n?`MISSING REFERENCE '${e}'`:t||e,s=e=>l?a.createElement("abbr",e):a.createElement("span",e);return a.createElement("strong",null,a.createElement(s,{title:l||void 0},a.createElement("a",{className:"term",title:l||null,href:n},c)))}},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n(118),r=n(113),l=n(129),c=n(130);function s(e){const[t,n]=a.useState({content:"",error:!1});return a.useEffect(()=>{let t=!1;return async function(){try{const a=await fetch(e);if(a.ok){const e=await a.text();!t&&n({error:!1,content:e})}else!t&&n({error:!0,content:""})}catch(a){console.info(a),!t&&n({error:!0,content:""})}}(),()=>{t=!0}},[e]),t}const o=({children:e})=>a.createElement("div",{className:"mdxCodeBlock__-node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-"},e),b=({lang:e,lines:t,title:n,content:r})=>a.createElement(i.a,{className:"language-"+e,metastring:`${t?`{${t}}`:""} ${n?`title="${n}"`:""}`,title:n},r),d=({source:e,lang:t,lines:n,title:i})=>{const l=Object(r.a)("/snippets/"+e),c=s(l),d=i||e;return c.error?a.createElement("div",{className:"admonition admonition-warning alert alert--danger"},l," snippet could not be loaded"):a.createElement(o,null,a.createElement(b,{lang:t,content:c.content,lines:n,title:d}))},p=({packages:e,dev:t=!1})=>a.createElement(l.a,{defaultValue:"yarn",values:[{label:"yarn",value:"yarn"},{label:"npm",value:"npm"}]},a.createElement(c.a,{value:"yarn"},a.createElement(b,{lang:"sh",content:`yarn add ${t?"--dev ":""}${e.split(/\s+/).join(" \\\n         ")}`})),a.createElement(c.a,{value:"npm"},a.createElement(b,{lang:"sh",content:`npm install --save ${t?"--only=dev ":""}${e.split(/\s+/).join(" \\\n    ")}`}))),m=({sourceBase:e,titleBase:t,jsx:n=!1,lines:i=null})=>{const d=Object(r.a)(`/snippets/${e}.${n?"tsx":"ts"}`),p=Object(r.a)(`/snippets/${e}.${n?"jsx":"js"}`),m=s(d),u=s(p),h=t||e;return m.error?a.createElement("div",{className:"admonition admonition-warning alert alert--danger"},d," snippet could not be loaded"):u.error?a.createElement("div",{className:"admonition admonition-warning alert alert--danger"},p," snippet could not be loaded"):a.createElement(o,null,a.createElement(l.a,{defaultValue:"ts",values:[{label:"Typescript",value:"ts"},{label:"JavaScript",value:"js"}]},a.createElement(c.a,{value:"ts"},a.createElement(b,{lang:n?"tsx":"ts",content:m.content,lines:i,title:`${h}.${n?"tsx":"ts"}`})),a.createElement(c.a,{value:"js"},a.createElement(b,{lang:n?"jsx":"js",content:u.content,lines:i,title:`${h}.${n?"jsx":"js"}`}))))}},127:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0);const i=()=>a.createElement("span",{className:"webshell"},"webshell")},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return c}));var a=n(0),i=n.n(a);const r={webview:"https://github.com/react-native-community/react-native-webview",scrollview:"https://reactnative.dev/docs/scrollview",linking:"https://reactnative.dev/docs/linking",__dev__:"https://reactnative.dev/docs/javascript-environment.html"},l=({name:e,type:t})=>{const n=r[e&&e.toLowerCase()],a=n?e:"MISSING REFERENCE FOR "+e;return i.a.createElement("a",{className:"api-ref api-symbol "+t,href:n},a)},c=()=>i.a.createElement(l,{name:"WebView",type:"class"})},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),i=n(116);const r=e=>a.createElement("div",{className:"card api-box shadow--lt",style:{textAlign:"center"}},a.createElement("div",{className:"card__header api-box__title"},"~ API Reference ~"),a.createElement(i.a,e))},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(2),i=n(6),r=(n(0),n(111)),l=(n(127),n(122),n(116)),c=n(128),s=n(131),o=n(123),b={id:"implementing-features",title:"Implementing Features"},d={unversionedId:"implementing-features",id:"implementing-features",isDocsHomePage:!1,title:"Implementing Features",description:"import {",source:"@site/docs/implementing-features.mdx",slug:"/implementing-features",permalink:"/webshell/docs/implementing-features",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/implementing-features.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Autoheight WebView",permalink:"/webshell/docs/autoheight"},next:{title:"Tooling",permalink:"/webshell/docs/tooling"}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"Web Script",id:"web-script",children:[]},{value:"Building a Feature Class",id:"building-a-feature-class",children:[]},{value:"Testing with Jest",id:"testing-with-jest",children:[{value:"Install Ersatz and Testing Library",id:"install-ersatz-and-testing-library",children:[]},{value:"Implementing Tests",id:"implementing-tests",children:[]}]},{value:"Web-Engines Compatibility",id:"web-engines-compatibility",children:[]}],m={rightToc:p};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"To have a good sense on how to make new features, we will take a look at\na simplified implementation of ",Object(r.b)(l.a,{reference:"HandleLinkPressFeature",type:"variable",mdxType:"APIReference"}),". It is best to follow typescript snippet, which conveys the\nshape of objects required to specify a feature."),Object(r.b)("p",null,"A feature has two facets:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#web-script"}),"Web Script"),", which embodies behavior in the ",Object(r.b)(c.b,{mdxType:"WebView"}),";"),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#building-a-feature-class"}),"Native Feature Class"),", which embodies integration with the shell.")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"disclaimer")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This implementation is naive and doesn't handle inner click events. If you need such a feature, use our official ",Object(r.b)(l.a,{reference:"HandleLinkPressFeature",type:"variable",mdxType:"APIReference"}),"."))),Object(r.b)("h2",{id:"web-script"},"Web Script"),Object(r.b)("p",null,"Let's start with the Web script, the code which will run in the ",Object(r.b)(c.a,{name:"WebView",type:"class",mdxType:"ReactReference"}),"."),Object(r.b)(o.d,{source:"HandleLinkPressFeature.webjs",lang:"js",mdxType:"SingleCodeSource"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Every Web script top declaration must be a function")," taking one argument."),Object(r.b)("p",null,"The shape of this argument is depicted in ",Object(r.b)(l.a,{reference:"WebjsContext",type:"interface",mdxType:"APIReference"})," definition.\nThis context object is the central API to interact with the shell."),Object(r.b)(s.a,{reference:"WebjsContext",type:"interface",mdxType:"APIBox"}),Object(r.b)("p",null,"Below is the same snippet with highlighted lines each matching a different context usage:"),Object(r.b)(o.d,{lines:"5,6,11,16",source:"HandleLinkPressFeature.webjs",lang:"js",mdxType:"SingleCodeSource"}),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"context.options")," is the result of shallow-merging ",Object(r.b)("inlineCode",{parentName:"li"},"defaultOptions")," with user-provided options during feature instantiation."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"context.postShellMessage")," will send an event which will be intercepted by the shell. If an event handler has been registered for this feature and passed as a prop to the shell, it will be invoked with the message content."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"context.warn")," and ",Object(r.b)("inlineCode",{parentName:"li"},"context.info")," will send a log event to the shell when ",Object(r.b)("inlineCode",{parentName:"li"},"webshellDebug")," prop is set to ",Object(r.b)("inlineCode",{parentName:"li"},"true"),". The shell will log the message for quick feedback during development."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"context.makeCallbackSafe")," guarantees that any error raised in the body of the callback will be intercepted by the context API and routed to the shell for quick feedback during development.")),Object(r.b)("h2",{id:"building-a-feature-class"},"Building a Feature Class"),Object(r.b)(s.a,{reference:"FeatureBuilder",type:"class",mdxType:"APIBox"}),Object(r.b)("p",null,"Now let's dive into the native-side. As you can see, the definition is relatively terse:"),Object(r.b)(o.b,{sourceBase:"HandleLinkPressFeature",mdxType:"DualCodeSource"}),Object(r.b)("p",null,"Below is a recap of all the symbols present in this snippet:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Symbol"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"linkPressScript")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Behavior in the Web environment.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"defaultOptions")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Default options for this feature.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},'"onDOMLinkPress"')),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The name of the handler prop which will be available in the shell.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},'"org.myorg/webshell.link-press"')),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"A unique identifier for this feature.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},'"HandleLinkPressFeature"')),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The name of the class returned by ",Object(r.b)(l.a,{reference:"FeatureBuilder",type:"class",member:"build",mdxType:"APIReference"})," method.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"LinkPressOptions")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"[",Object(r.b)("strong",{parentName:"td"},"Typescript"),"]"," The shape of options the feature class can be instantiated with.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"LinkPressTarget")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"[",Object(r.b)("strong",{parentName:"td"},"Typescript"),"]"," The type of payload the handler prop will receive.")))),Object(r.b)("p",null,"It is also worth noting that:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"linkPressScript")," is imported as a string thanks to babel-plugin-inline-import, see the ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"./tooling"}),"tooling guide"),";"),Object(r.b)("li",{parentName:"ul"},"invoking ",Object(r.b)("inlineCode",{parentName:"li"},"withEventHandlerProp")," is not an option:",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"It register the handler to the shell, otherwise events fired by the below Web script will not be routed to their handler props."),Object(r.b)("li",{parentName:"ol"},"When implemented in typescript, type generation will add the handler name and payload type to the the feature, which will be grabbed by the resulting shell type.")))),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Don't forget to invoke ",Object(r.b)("inlineCode",{parentName:"p"},"build")," method, otherwise you'll end up with a ",Object(r.b)(l.a,{reference:"FeatureBuilder",type:"class",mdxType:"APIReference"})," instance."))),Object(r.b)("h2",{id:"testing-with-jest"},"Testing with Jest"),Object(r.b)("h3",{id:"install-ersatz-and-testing-library"},"Install Ersatz and Testing Library"),Object(r.b)("p",null,"To test injected scripts, the best way is to use\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/formidable-webview/ersatz"}),Object(r.b)("inlineCode",{parentName:"a"},"@formidable-webview/ersatz")),".\nIt will mock the WebView and run a Web environment in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/jsdom/jsdom"}),"jsdom"),"."),Object(r.b)(o.c,{dev:!0,packages:"@testing-library/react-native @formidable-webview/ersatz @formidable-webview/ersatz-testing",mdxType:"InstallPackageSnippet"}),Object(r.b)("h3",{id:"implementing-tests"},"Implementing Tests"),Object(r.b)(o.b,{jsx:!0,sourceBase:"HandleLinkPressFeature.test",mdxType:"DualCodeSource"}),Object(r.b)("h2",{id:"web-engines-compatibility"},"Web-Engines Compatibility"),Object(r.b)("p",null,"For wide compatibility purposes ",Object(r.b)("strong",{parentName:"p"},"of the Web script"),", it is recommended to:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"enforce ECMAScript 5 syntax with ESlint;"),Object(r.b)("li",{parentName:"ul"},"lint the script with the\n",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/package/eslint-plugin-compat"}),"eslint-plugin-compat")," to\nenforce backward compatibility with old engines;")),Object(r.b)("p",null,"See the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"./tooling"}),"tooling guide")," for more details on how to achieve this."))}u.isMDXComponent=!0}}]);