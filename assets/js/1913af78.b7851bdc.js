"use strict";(self.webpackChunkxrcloud_3rd_app_user_api_doc=self.webpackChunkxrcloud_3rd_app_user_api_doc||[]).push([[391],{9613:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return k}});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(t),k=a,m=c["".concat(s,".").concat(k)]||c[k]||u[k]||o;return t?r.createElement(m,i(i({ref:n},d),{},{components:t})):r.createElement(m,i({ref:n},d))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=c;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8550:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var r=t(2848),a=t(9213),o=(t(9496),t(9613)),i=["components"],p={sidebar_position:1},s="Authorization",l={unversionedId:"api/authorization",id:"api/authorization",title:"Authorization",description:"API Address",source:"@site/docs/api/authorization.md",sourceDirName:"api",slug:"/api/authorization",permalink:"/xrcloud-3rd-app-user-api-doc/docs/api/authorization",editUrl:"https://github.com/belivvr/xrcloud-3rd-app-user-api-doc/tree/main/docs/docs/api/authorization.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduce XRCloud!",permalink:"/xrcloud-3rd-app-user-api-doc/docs/introduce"},next:{title:"Scenes",permalink:"/xrcloud-3rd-app-user-api-doc/docs/api/scenes"}},d={},u=[{value:"API Address",id:"api-address",level:3},{value:"Description",id:"description",level:3},{value:"Description of token",id:"description-of-token",level:4},{value:"Headers",id:"headers",level:3},{value:"Body",id:"body",level:3},{value:"Response",id:"response",level:3},{value:"API Address",id:"api-address-1",level:3},{value:"Description",id:"description-1",level:3},{value:"Headers",id:"headers-1",level:3},{value:"Body",id:"body-1",level:3},{value:"Response",id:"response-1",level:3}],c={toc:u};function k(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"authorization"},"Authorization"),(0,o.kt)("h3",{id:"api-address"},"API Address"),(0,o.kt)("p",null,"[POST]"," ",(0,o.kt)("inlineCode",{parentName:"p"},"https://3rd-api.xrcloud.belivvr.com/v1/auth/login")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"You can get access ",(0,o.kt)("inlineCode",{parentName:"p"},"token")," what needs ",(0,o.kt)("inlineCode",{parentName:"p"},"appId")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"appKey"),".",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"appId")," may be exposed, but please don't expose ",(0,o.kt)("inlineCode",{parentName:"p"},"appKey"),".\n(If it's exposed, you must reissue it.)  "),(0,o.kt)("p",null,"You should save ",(0,o.kt)("inlineCode",{parentName:"p"},"access_token")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"refresh_token"),".",(0,o.kt)("br",{parentName:"p"}),"\n","XRCloud API server save only one of ",(0,o.kt)("inlineCode",{parentName:"p"},"access_token")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"refresh_token"),",",(0,o.kt)("br",{parentName:"p"}),"\n","Only can access latest ",(0,o.kt)("inlineCode",{parentName:"p"},"token"),", can't access before ",(0,o.kt)("inlineCode",{parentName:"p"},"token"),"."),(0,o.kt)("h4",{id:"description-of-token"},"Description of token"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You: Issued ",(0,o.kt)("inlineCode",{parentName:"li"},"token")," by authorization API"),(0,o.kt)("li",{parentName:"ol"},"Hacker: After you get ",(0,o.kt)("inlineCode",{parentName:"li"},"token"),", new issued ",(0,o.kt)("inlineCode",{parentName:"li"},"token"),"."),(0,o.kt)("li",{parentName:"ol"},"You: Can't access by your ",(0,o.kt)("inlineCode",{parentName:"li"},"token"))),(0,o.kt)("p",null,"In the event of hacking as shown above, only the last token issued is recognized to make the user aware that the ",(0,o.kt)("inlineCode",{parentName:"p"},"appKey")," has been exposed",(0,o.kt)("br",{parentName:"p"}),"\n","If the ",(0,o.kt)("inlineCode",{parentName:"p"},"token")," issued just now becomes unavailable, ",(0,o.kt)("inlineCode",{parentName:"p"},"appKey")," is exposed, so you have to reissue ",(0,o.kt)("inlineCode",{parentName:"p"},"appKey"),"."),(0,o.kt)("h3",{id:"headers"},"Headers"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Content-Type: application/json\n")),(0,o.kt)("h3",{id:"body"},"Body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "appId": "your app id",\n  "appKey": "your app key"\n}\n')),(0,o.kt)("h3",{id:"response"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'Http Status: 201 Created\nContent-Type: application/json\n\n{\n  "access_token": "given access token", // expires 1 hour\n  "refresh_token": "given refresh token" // expires 2 days\n}\n')),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"api-address-1"},"API Address"),(0,o.kt)("p",null,"[POST]"," ",(0,o.kt)("inlineCode",{parentName:"p"},"https://3rd-api.xrcloud.belivvr.com/v1/auth/refresh")),(0,o.kt)("h3",{id:"description-1"},"Description"),(0,o.kt)("p",null,"Refresh ",(0,o.kt)("inlineCode",{parentName:"p"},"token")," when ",(0,o.kt)("inlineCode",{parentName:"p"},"access_token")," is expired."),(0,o.kt)("h3",{id:"headers-1"},"Headers"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Content-Type: application/json\nAuthorization: Bearer refresh_token\n")),(0,o.kt)("h3",{id:"body-1"},"Body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "appId": "your app id",\n  "appKey": "your app key"\n}\n')),(0,o.kt)("h3",{id:"response-1"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'Http Status: 201 Created\nContent-Type: application/json\n\n{\n  "access_token": "given access token", // expires 1 hour\n  "refresh_token": "given refresh token" // expires 2 days\n}\n')))}k.isMDXComponent=!0}}]);