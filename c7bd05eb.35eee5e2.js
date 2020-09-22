(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var i=n(2),l=n(6),a=(n(0),n(110)),s=n(128),r=n(123),c={id:"tooling",title:"Tooling"},o={unversionedId:"tooling",id:"tooling",isDocsHomePage:!1,title:"Tooling",description:"The objectives of the setup are:",source:"@site/docs/tooling.mdx",slug:"/tooling",permalink:"/webshell/docs/tooling",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tooling.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Implementing Features",permalink:"/webshell/docs/implementing-features"},next:{title:"Features Reference",permalink:"/webshell/docs/features"}},b=[{value:"Babel",id:"babel",children:[{value:"Install Plugin",id:"install-plugin",children:[]},{value:"Configure Plugin",id:"configure-plugin",children:[]}]},{value:"ESLint",id:"eslint",children:[{value:"Install Plugin",id:"install-plugin-1",children:[]},{value:"Configure Plugin",id:"configure-plugin-1",children:[]}]},{value:"Jest",id:"jest",children:[]},{value:"Syntax Highlight",id:"syntax-highlight",children:[{value:"VSCode",id:"vscode",children:[]},{value:"Github",id:"github",children:[]},{value:"Gitlab",id:"gitlab",children:[]}]},{value:"Debugging WebViews",id:"debugging-webviews",children:[]}],u={rightToc:b};function p(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The objectives of the setup are:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Import ",Object(a.b)(s.a,{id:"DOM",mdxType:"Term"})," scripts (",Object(a.b)("inlineCode",{parentName:"li"},".webjs"),") as strings without the need of an additional bundle;"),Object(a.b)("li",{parentName:"ul"},"Statically check ",Object(a.b)(s.a,{id:"DOM",mdxType:"Term"})," scripts for syntax errors;"),Object(a.b)("li",{parentName:"ul"},"Statically check ",Object(a.b)(s.a,{id:"DOM",mdxType:"Term"})," scripts compatibility given targeted WebViews versions;"),Object(a.b)("li",{parentName:"ul"},"Test the ",Object(a.b)(s.a,{id:"DOM",mdxType:"Term"})," scripts behaviors.")),Object(a.b)("h2",{id:"babel"},"Babel"),Object(a.b)("p",null,"To import ",Object(a.b)("inlineCode",{parentName:"p"},".webjs")," files as strings, we will use\n",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.npmjs.com/package/babel-plugin-inline-import"}),"babel-plugin-inline-import"),"\nwith ",Object(a.b)("inlineCode",{parentName:"p"},"webjs")," or whichever extension you are using for your ",Object(a.b)("inlineCode",{parentName:"p"},"WebView")," scripts.\nThis plugin will allow you to import scripts as strings instead of transpiling the module."),Object(a.b)("h3",{id:"install-plugin"},"Install Plugin"),Object(a.b)(r.c,{dev:!0,packages:"babel-plugin-inline-import",mdxType:"InstallPackageSnippet"}),Object(a.b)("h3",{id:"configure-plugin"},"Configure Plugin"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json",metastring:'title="babel.config.js"',title:'"babel.config.js"'}),'{\n  // ...\n  "plugins": [\n    [\n      "babel-plugin-inline-import",\n      {\n        "extensions": ["webjs"]\n      }\n    ],\n    // ...\n  ]\n}\n')),Object(a.b)("h2",{id:"eslint"},"ESLint"),Object(a.b)("p",null,"You can use\n",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/formidable-webview/eslint-config-webjs"}),"@formidable-webview/eslint-config-webjs"),"\nto target ",Object(a.b)("inlineCode",{parentName:"p"},".webjs")," files with specific config:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Enforce ECMAScript 5 to make sure it runs on reasonably old ",Object(a.b)("inlineCode",{parentName:"li"},"WebView"),"\nbackends."),Object(a.b)("li",{parentName:"ul"},"Enforce a list of supported web engines with the outstanding\n",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.npmjs.com/package/eslint-plugin-compat"}),"eslint-plugin-compat"),".\nWe make sure we don't use recent web APIs without a fallback or polyfill.")),Object(a.b)("h3",{id:"install-plugin-1"},"Install Plugin"),Object(a.b)(r.c,{dev:!0,packages:"estlint-plugin-compat @formidable-webview/eslint-config-webjs",mdxType:"InstallPackageSnippet"}),Object(a.b)("h3",{id:"configure-plugin-1"},"Configure Plugin"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js",metastring:'title="eslint.js"',title:'"eslint.js"'}),'module.exports = {\n  root: true,\n  overrides: [\n    {\n      files: ["*.webjs"],\n      extends: "@formidable-webview/eslint-config-webjs",\n    },\n  ],\n};\n')),Object(a.b)("h2",{id:"jest"},"Jest"),Object(a.b)("p",null,"See ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"./implementing-features#testing-with-jest"}),"this guide"),"."),Object(a.b)("h2",{id:"syntax-highlight"},"Syntax Highlight"),Object(a.b)("p",null,"The last thing you need to do is associate JavaScript syntax with ",Object(a.b)("inlineCode",{parentName:"p"},"webjs")," or whichever\nextension you have chosen in your text editor."),Object(a.b)("h3",{id:"vscode"},"VSCode"),Object(a.b)("p",null,"Add this file association in your ",Object(a.b)("inlineCode",{parentName:"p"},"settings.json"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json",metastring:'title="settings.json"',title:'"settings.json"'}),'{\n  "files.associations": {\n    "*.webjs": "javascript"\n  }\n}\n')),Object(a.b)("h3",{id:"github"},"Github"),Object(a.b)("p",null,"Add this line to your ",Object(a.b)("inlineCode",{parentName:"p"},".gitattributes")," file:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-gitattributes",metastring:'title=".gitattributes"',title:'".gitattributes"'}),"*.webjs linguist-language=Javascript\n")),Object(a.b)("h3",{id:"gitlab"},"Gitlab"),Object(a.b)("p",null,"Add this line to your ",Object(a.b)("inlineCode",{parentName:"p"},".gitattributes")," file:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-gitattributes",metastring:'title=".gitattributes"',title:'".gitattributes"'}),"*.webjs gitlab-language=Javascript\n")),Object(a.b)("h2",{id:"debugging-webviews"},"Debugging WebViews"),Object(a.b)("p",null,"See ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://blog.vuplex.com/debugging-webviews/"}),"this guide"),"."))}p.isMDXComponent=!0},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return d}));var i=n(0),l=n(124),a=n(113),s=n(121),r=n(122);function c(e){const[t,n]=i.useState({content:"",error:!1});return i.useEffect(()=>{let t=!1;return async function(){try{const i=await fetch(e);if(i.ok){const e=await i.text();!t&&n({error:!1,content:e})}else!t&&n({error:!0,content:""})}catch(i){console.info(i),!t&&n({error:!0,content:""})}}(),()=>{t=!0}},[e]),t}const o=({children:e})=>i.createElement("div",{className:"mdxCodeBlock__-node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-"},e),b=({lang:e,lines:t,title:n,content:a})=>i.createElement(l.a,{className:"language-"+e,metastring:`${t?`{${t}}`:""} ${n?`title="${n}"`:""}`,title:n},a),u=({source:e,lang:t,lines:n,title:l})=>{const s=c(Object(a.a)("snippets/"+e)),r=l||e;return i.createElement(o,null,i.createElement(b,{lang:t,content:s.content,lines:n,title:r}))},p=({packages:e,dev:t=!1})=>i.createElement(s.a,{defaultValue:"yarn",values:[{label:"yarn",value:"yarn"},{label:"npm",value:"npm"}]},i.createElement(r.a,{value:"yarn"},i.createElement(b,{lang:"sh",content:`yarn add ${t?"--dev ":""}${e.split(/\s+/).join(" \\\n         ")}`})),i.createElement(r.a,{value:"npm"},i.createElement(b,{lang:"sh",content:`npm install --save ${t?"--only=dev ":""}${e.split(/\s+/).join(" \\\n    ")}`}))),d=({sourceBase:e,titleBase:t,jsx:n=!1,lines:l=null})=>{const u=Object(a.a)(`snippets/${e}.${n?"tsx":"ts"}`),p=Object(a.a)(`snippets/${e}.${n?"jsx":"js"}`),d=c(u),g=c(p),m=t||e;return d.error?i.createElement("div",{className:"alert alert--error"},e," snippet could not be loaded"):i.createElement(o,null,i.createElement(s.a,{defaultValue:"ts",values:[{label:"Typescript",value:"ts"},{label:"JavaScript",value:"js"}]},i.createElement(r.a,{value:"ts"},i.createElement(b,{lang:n?"tsx":"ts",content:d.content,lines:l,title:`${m}.${n?"tsx":"ts"}`})),i.createElement(r.a,{value:"js"},i.createElement(b,{lang:n?"jsx":"js",content:g.content,lines:l,title:`${m}.${n?"jsx":"js"}`}))))}},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n(0);const l={hoc:"Higher Order Component",dom:"Document Object Model"},a={hoc:"https://reactjs.org/docs/higher-order-components.html",viewport:"https://developer.mozilla.org/en-US/docs/Glossary/Viewport",hooks:"https://reactjs.org/docs/hooks-overview.html",dom:"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction","messaging system":"https://github.com/react-native-community/react-native-webview/blob/master/docs/Guide.md#communicating-between-js-and-native"},s=({id:e,title:t})=>{const n=a[e&&e.toLowerCase()],s=l[e&&e.toLowerCase()],r=void 0===n?`MISSING REFERENCE '${e}'`:t||e,c=e=>s?i.createElement("abbr",e):i.createElement("span",e);return i.createElement("strong",null,i.createElement(c,{title:s||void 0},i.createElement("a",{className:"term",title:s||null,href:n},r)))}}}]);