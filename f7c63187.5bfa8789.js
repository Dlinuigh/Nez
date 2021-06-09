(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),o=(n(0),n(113)),r={id:"Tweening",title:"Tweening"},c={unversionedId:"features/Utils/Tweening",id:"features/Utils/Tweening",isDocsHomePage:!1,title:"Tweening",description:"The word Inbetweening, or tweening for short, stands for the process of animating an by updating values for position, size, color, opacity, etc. inbetween frames",source:"@site/docs\\features\\Utils\\Tweening.md",slug:"/features/Utils/Tweening",permalink:"/Nez/docs/features/Utils/Tweening",editUrl:"https://github.com/prime31/Nez/edit/master/Nez.github.io/docs/features/Utils/Tweening.md",version:"current",sidebar:"someSidebar",previous:{title:"Tiled",permalink:"/Nez/docs/features/Tiled"},next:{title:"Collections",permalink:"/Nez/docs/features/Utils/Collections"}},s=[{value:"Usage",id:"usage",children:[{value:"Basics",id:"basics",children:[]},{value:"Easing types",id:"easing-types",children:[]},{value:"Repeating loops",id:"repeating-loops",children:[]},{value:"Callback",id:"callback",children:[]},{value:"Relative target",id:"relative-target",children:[]},{value:"Pausing and Resuming",id:"pausing-and-resuming",children:[]},{value:"Delay and Duration",id:"delay-and-duration",children:[]}]}],l={toc:s};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The word Inbetweening, or tweening for short, stands for the process of animating an by updating values for position, size, color, opacity, etc. inbetween frames"),Object(o.b)("p",null,"In games, tweens are used to smoothly transition Vectors, floats and Colors etc."),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The sample code can be found in the Tweening scene in ",Object(o.b)("a",{parentName:"p",href:"https://github.com/prime31/Nez-Samples"},"Nez-Samples")))),Object(o.b)("h3",{id:"basics"},"Basics"),Object(o.b)("p",null,"We start by including the Tweening namespace."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"using Nez.Tweens;\n")),Object(o.b)("p",null,"Tweens can be easily created via extension methods in ",Object(o.b)("inlineCode",{parentName:"p"},"TweenExt")," and ",Object(o.b)("inlineCode",{parentName:"p"},"ObjectExt"),"."),Object(o.b)("p",null,"Whenever a tween is created it will then be updated every frame by the ",Object(o.b)("inlineCode",{parentName:"p"},"TweenManager"),"(A component that is registered by default in ",Object(o.b)("inlineCode",{parentName:"p"},"Nez.Core"),")"),Object(o.b)("p",null,"The following types can be tweened"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"int"),Object(o.b)("li",{parentName:"ul"},"float"),Object(o.b)("li",{parentName:"ul"},"Color"),Object(o.b)("li",{parentName:"ul"},"Vector2"),Object(o.b)("li",{parentName:"ul"},"Vector3")),Object(o.b)("p",null,"For this example, I am using a simple square Entity."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},'Entity tweenTargetEntity = CreateEntity("tweenTarget");\ntweenTargetEntity.Position = new Vector2(100, 100);\ntweenTargetEntity.AddComponent(\n    new PrototypeSpriteRenderer(10,10) {Color = Color.Yellow\n    });\n')),Object(o.b)("p",null,"I then create a Tween that smoothly transforms the position of this entity over a timespan of 5 seconds, using the ",Object(o.b)("inlineCode",{parentName:"p"},"TweenPositionTo")," extension method."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"tweenTargetEntity\n    .TweenPositionTo(new Vector2(250, 250), 5f)\n    .Start(); \n")),Object(o.b)("h3",{id:"easing-types"},"Easing types"),Object(o.b)("p",null,"You may have noticed that the tweeing transition is not linear.\nThat's because we didn't specify the easing type.\nIf we don't specify the easing type (The way the value transitions), the ",Object(o.b)("inlineCode",{parentName:"p"},"DefaultEaseType")," from the ",Object(o.b)("inlineCode",{parentName:"p"},"TweenManager")," will be used. This is set to ",Object(o.b)("inlineCode",{parentName:"p"},"EaseType.QuartIn")," by default."),Object(o.b)("p",null,"We can change the default easing type as follows."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"TweenManager.DefaultEaseType = EaseType.Linear;\n")),Object(o.b)("p",null,"We can also specify the easing type using the ",Object(o.b)("inlineCode",{parentName:"p"},"ITween<T>.SetEaseType")," Extension method"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"tweenTargetEntity\n    .TweenPositionTo(new Vector2(250, 250), 5f)\n    .SetEaseType(EaseType.Linear)\n    .Start(); \n")),Object(o.b)("p",null,"Here you can see the effect of each ",Object(o.b)("inlineCode",{parentName:"p"},"EaseType")),Object(o.b)("p",null,Object(o.b)("img",{alt:"Tweening",src:n(174).default})),Object(o.b)("h3",{id:"repeating-loops"},"Repeating loops"),Object(o.b)("p",null,"You can also create repeating tweens by using the ",Object(o.b)("inlineCode",{parentName:"p"},"SetLoops")," extension method like this."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"SetLoops(LoopType.RestartFromBeginning, -1)\n")),Object(o.b)("p",null,"I set the loop count to ",Object(o.b)("inlineCode",{parentName:"p"},"-1"),". This makes the loop repeat infinitely."),Object(o.b)("h3",{id:"callback"},"Callback"),Object(o.b)("p",null,"With the ",Object(o.b)("inlineCode",{parentName:"p"},"SetCompletionHandler")," extension method, you can register a callback that will be called when the tween finishes."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},'tweenTargetEntity\n    .TweenPositionTo(new Vector2(250, 100), 1f).SetEaseType(EaseType.Linear)\n    .SetCompletionHandler((x) =>\n    {\n        System.Console.WriteLine("Tween completed");\n    })\n    .Start();\n')),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"For performance optimizations, you can also use the ",Object(o.b)("inlineCode",{parentName:"p"},"SetContext")," extension method. to avoid ",Object(o.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/local-functions#heap-allocations"},"closure allocations")," or to retrieve tweens with a specific context in the ",Object(o.b)("inlineCode",{parentName:"p"},"TweenManager"),". "),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",{parentName:"pre",className:"language-cs"},"tweenTargetEntity\n    .TweenPositionTo(new Vector2(250, 100), 1f).SetEaseType(EaseType.Linear)\n    .SetContext(tweenTargetEntity)\n    .SetCompletionHandler((x) => { System.Console.WriteLine(x.Context); })\n    .Start();\n")))),Object(o.b)("h3",{id:"relative-target"},"Relative target"),Object(o.b)("p",null,"With the ",Object(o.b)("inlineCode",{parentName:"p"},"SetIsRelative")," extension method you can set the ",Object(o.b)("inlineCode",{parentName:"p"},"taget")," relative to the ",Object(o.b)("inlineCode",{parentName:"p"},"from")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Note if you use ",Object(o.b)("inlineCode",{parentName:"p"},"TweenPositionTo(new Vector2(250, 100), 1f)")," the ",Object(o.b)("inlineCode",{parentName:"p"},"from")," is ",Object(o.b)("inlineCode",{parentName:"p"},"Vector2.Zero"),".\nYou can set it with the ",Object(o.b)("inlineCode",{parentName:"p"},"SetFrom")," extension method"))),Object(o.b)("h3",{id:"pausing-and-resuming"},"Pausing and Resuming"),Object(o.b)("p",null,"You can pause and Resume Tweens with the ",Object(o.b)("inlineCode",{parentName:"p"},"Resume")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Pause")," extension methods"),Object(o.b)("h3",{id:"delay-and-duration"},"Delay and Duration"),Object(o.b)("p",null,"You can set the delay and duration of a tween using the ",Object(o.b)("inlineCode",{parentName:"p"},"SetDelay")," and ",Object(o.b)("inlineCode",{parentName:"p"},"SetDuration")," extension methods."))}p.isMDXComponent=!0},113:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,u=b["".concat(r,".").concat(m)]||b[m]||d[m]||o;return n?i.a.createElement(u,c(c({ref:t},l),{},{components:n})):i.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},174:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/tweening-5b6332316c10a956dbf158d631a591f1.gif"}}]);