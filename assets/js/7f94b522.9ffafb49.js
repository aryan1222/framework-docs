"use strict";(self.webpackChunkatriframework=self.webpackChunkatriframework||[]).push([[4916],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||n;return r?i.createElement(f,o(o({ref:t},u),{},{components:r})):i.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<n;s++)o[s]=r[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1163:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var i=r(7462),a=(r(7294),r(3905));const n={title:"Parse Uploaded File",description:"A function of the uploaded_files in atri-utils"},o=void 0,l={unversionedId:"utilities/image-utils/parse-uploaded-file",id:"utilities/image-utils/parse-uploaded-file",title:"Parse Uploaded File",description:"A function of the uploaded_files in atri-utils",source:"@site/docs/utilities/image-utils/parse-uploaded-file.md",sourceDirName:"utilities/image-utils",slug:"/utilities/image-utils/parse-uploaded-file",permalink:"/utilities/image-utils/parse-uploaded-file",draft:!1,editUrl:"https://github.com/Atri-Labs/framework-docs/tree/main/docs/utilities/image-utils/parse-uploaded-file.md",tags:[],version:"current",frontMatter:{title:"Parse Uploaded File",description:"A function of the uploaded_files in atri-utils"},sidebar:"docs",previous:{title:"Create Media Response",permalink:"/utilities/image-utils/create-media-response"},next:{title:"Change Background",permalink:"/utilities/image-utils/change-background"}},p={},s=[{value:"1. Make sure atri-utils is imported on the top as:",id:"1-make-sure-atri-utils-is-imported-on-the-top-as",level:3},{value:"2. Use the following code in the main.py to get the numpy array from the uploaded image.",id:"2-use-the-following-code-in-the-mainpy-to-get-the-numpy-array-from-the-uploaded-image",level:3}],u={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"parse_uploaded_file")," function can be used to convert ",(0,a.kt)("inlineCode",{parentName:"p"},"file")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"image-data")," into a numpy array format which is the format required by most ML models for the input image"),(0,a.kt)("p",null,"For example, you want to use a user uploaded image as input for the ML model or some task that specifically required numpy array format"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Cross-check the type of data you are passing through the function as it currently only accepts ",(0,a.kt)("inlineCode",{parentName:"p"},"bytes"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"BinaryIO"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"BufferedReader"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"str: filename"))),(0,a.kt)("h3",{id:"1-make-sure-atri-utils-is-imported-on-the-top-as"},"1. Make sure atri-utils is imported on the top as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from atri_utils import *\n")),(0,a.kt)("h3",{id:"2-use-the-following-code-in-the-mainpy-to-get-the-numpy-array-from-the-uploaded-image"},"2. Use the following code in the main.py to get the numpy array from the uploaded image."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def handle_event(at: Atri, req: Request, res: Response):\n    if at.Upload1.onChange:\n        if at.Upload1.io.files != None:\n            file = at.Upload.io.files[0]\n            nparray_img = parse_uploaded_file(file.file.read())\n")))}d.isMDXComponent=!0}}]);