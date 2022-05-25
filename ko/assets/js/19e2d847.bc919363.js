"use strict";(self.webpackChunkxrcloud_3rd_app_user_api_doc=self.webpackChunkxrcloud_3rd_app_user_api_doc||[]).push([[324],{9613:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return v}});var n=t(9496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=u(t),v=a,m=d["".concat(s,".").concat(v)]||d[v]||l[v]||o;return t?n.createElement(m,i(i({ref:r},c),{},{components:t})):n.createElement(m,i({ref:r},c))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2965:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return l}});var n=t(2848),a=t(9213),o=(t(9496),t(9613)),i=["components"],p={sidebar_position:3},s="Avatars",u={unversionedId:"api/avatars",id:"api/avatars",title:"Avatars",description:"API Address",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api/avatars.md",sourceDirName:"api",slug:"/api/avatars",permalink:"/xrcloud-3rd-app-user-api-doc/ko/docs/api/avatars",draft:!1,editUrl:"https://github.com/belivvr/xrcloud-3rd-app-user-api-doc/tree/main/docs/docs/api/avatars.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Scenes",permalink:"/xrcloud-3rd-app-user-api-doc/ko/docs/api/scenes"},next:{title:"Response204",permalink:"/xrcloud-3rd-app-user-api-doc/ko/docs/api/common/Response204"}},c={},l=[{value:"API Address",id:"api-address",level:3},{value:"Description",id:"description",level:3},{value:"Headers",id:"headers",level:3},{value:"Response",id:"response",level:3},{value:"API Address",id:"api-address-1",level:3},{value:"Description",id:"description-1",level:3},{value:"Headers",id:"headers-1",level:3},{value:"Response",id:"response-1",level:3}],d={toc:l};function v(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"avatars"},"Avatars"),(0,o.kt)("h3",{id:"api-address"},"API Address"),(0,o.kt)("p",null,"[GET]"," ",(0,o.kt)("inlineCode",{parentName:"p"},"https://3rd-api.xrcloud.belivvr.com/v1/apps/{appId}/resources/avatars")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"App\uc5d0 \ub4f1\ub85d\ud55c \ubaa8\ub4e0 \uc544\ubc14\ud0c0\ub4e4\uc744 \uc870\ud68c\ud569\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"headers"},"Headers"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Authorization: Bearer refresh_token\n")),(0,o.kt)("h3",{id:"response"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'Http Status: 200 OK\nContent-Type: application/json\n\n[\n  {\n    "resourceId": "avatar1 id",\n    "resourceType": "AVATAR",\n    "active": true,\n    "name": "avatar1",\n    "publishType": "PUBLIC",\n    "thumbnailUrl": "https://avatar-thumbnail-url",\n    "insertedAt": "2022-04-30T07:28:06.574Z",\n    "updatedAt": "2022-04-30T07:28:06.574Z"\n  },\n  {\n    "resourceId": "avatar2 id",\n    "resourceType": "AVATAR",\n    "active": true,\n    "name": "avatar2",\n    "publishType": "PUBLIC",\n    "thumbnailUrl": "https://avatar-thumbnail-url",\n    "insertedAt": "2022-04-30T07:28:06.574Z",\n    "updatedAt": "2022-04-30T07:28:06.574Z"\n  }\n]\n')),(0,o.kt)("h3",{id:"api-address-1"},"API Address"),(0,o.kt)("p",null,"[GET]"," ",(0,o.kt)("inlineCode",{parentName:"p"},"https://3rd-api.xrcloud.belivvr.com/v1/apps/{appId}/resources/avatars/{avatarId}")),(0,o.kt)("h3",{id:"description-1"},"Description"),(0,o.kt)("p",null,"\uc544\ubc14\ud0c0\uc758 \uc815\ubcf4\ub97c \uc870\ud68c\ud569\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"headers-1"},"Headers"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Authorization: Bearer refresh_token\n")),(0,o.kt)("h3",{id:"response-1"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'Http Status: 200 OK\nContent-Type: application/json\n\n{\n  "resourceId": "avatar1 id",\n  "resourceType": "AVATAR",\n  "active": true,\n  "name": "avatar1",\n  "publishType": "PUBLIC",\n  "thumbnailUrl": "https://avatar-thumbnail-url",\n  "insertedAt": "2022-04-30T07:28:06.574Z",\n  "updatedAt": "2022-04-30T07:28:06.574Z"\n}\n')))}v.isMDXComponent=!0}}]);