"use strict";(self.webpackChunkatriframework=self.webpackChunkatriframework||[]).push([[2108],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={title:"API structure",description:"Components API explained",slug:"concepts-api/api-structure"},a=void 0,c={unversionedId:"api-structure",id:"api-structure",title:"API structure",description:"Components API explained",source:"@site/docs/api-structure.md",sourceDirName:".",slug:"/concepts-api/api-structure",permalink:"/concepts-api/api-structure",draft:!1,editUrl:"https://github.com/Atri-Labs/framework-docs/tree/main/docs/api-structure.md",tags:[],version:"current",frontMatter:{title:"API structure",description:"Components API explained",slug:"concepts-api/api-structure"},sidebar:"docs",previous:{title:"Concepts of Python backend",permalink:"/category/concepts-of-python-backend"},next:{title:"Intellisense in Python backend",permalink:"/concepts-backend/intellisense"}},p={},l=[{value:"Folder structure",id:"folder-structure",level:3},{value:"Writing backend",id:"writing-backend",level:3}],s={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"folder-structure"},"Folder structure"),(0,i.kt)("p",null,"All the pages we create in the visual editor are available at ",(0,i.kt)("inlineCode",{parentName:"p"},"controllers/routes"),". We can write the backend code for each page in its ",(0,i.kt)("inlineCode",{parentName:"p"},"main.py")," file."),(0,i.kt)("h3",{id:"writing-backend"},"Writing backend"),(0,i.kt)("p",null,"There are two functions in the ",(0,i.kt)("inlineCode",{parentName:"p"},"main.py")," file - ",(0,i.kt)("inlineCode",{parentName:"p"},"init_state")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"handle_event"),". "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"init_state()")," function is called when a user visits the page for the first time. Hence, to change the initial state of the app, we make modifications here. For example, when we add a ",(0,i.kt)("inlineCode",{parentName:"p"},"Button")," component in our app, the default value of its custom property is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"Submit"),". However, if we wish to change it to ",(0,i.kt)("inlineCode",{parentName:"p"},"Click me"),", we can either do so from the custom panel in the visual editor or from this function here by writing the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'def init_state(at):\n    at.Button3.custom.text = "Click here"\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"handle_event")," function is called when an event occurs. For example, a button has been clicked thus generating a ",(0,i.kt)("inlineCode",{parentName:"p"},"click")," event. We can now make modifications to the Textbox in our app by writing the following code in this function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'def handle_event(at):\n    # Display Success in textbox if button is clicked\n    if at.Button1.onClick:\n        at.TextBox1.custom.text = "Success"\n')))}u.isMDXComponent=!0}}]);