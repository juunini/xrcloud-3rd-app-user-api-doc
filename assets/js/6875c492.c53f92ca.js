"use strict";(self.webpackChunkxrcloud_3rd_app_user_api_doc=self.webpackChunkxrcloud_3rd_app_user_api_doc||[]).push([[610],{4540:function(e,t,a){a.d(t,{Z:function(){return Z}});var r=a(9213),l=a(9496),n=a(1626),i=a(6688),s=a(6436),o=a(9668),m="sidebar_MGlL",c="sidebarItemTitle_eX_i",u="sidebarItemList_ZuTw",g="sidebarItem_EaeA",d="sidebarItemLink_SYic",p="sidebarItemLinkActive_XeOb";function h(e){var t=e.sidebar;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.Z)(m,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(c,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(u,"clean-list")},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:g},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:p},e.title))})))))}var b=a(6243);function v(e){var t=e.sidebar;return l.createElement("ul",{className:"menu__list"},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function f(e){return l.createElement(b.Zo,{component:v,props:e})}var E=a(7509);function _(e){var t=e.sidebar,a=(0,E.i)();return null!=t&&t.items.length?"mobile"===a?l.createElement(f,{sidebar:t}):l.createElement(h,{sidebar:t}):null}var N=["sidebar","toc","children"];function Z(e){var t=e.sidebar,a=e.toc,s=e.children,o=(0,r.Z)(e,N),m=t&&t.items.length>0;return l.createElement(i.Z,o,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(_,{sidebar:t}),l.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},8338:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(9496),l=a(9668),n=a(9969);function i(e){var t=e.metadata,a=t.previousPage,i=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&r.createElement(n.Z,{permalink:a,title:r.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),i&&r.createElement(n.Z,{permalink:i,title:r.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},391:function(e,t,a){a.d(t,{Z:function(){return Z}});var r=a(9496),l=a(1626),n=a(9668),i=a(6436),s=a(5618),o=a(6665),m=a(2032),c=a(3580),u=a(6914),g="blogPostTitle_T_Hp",d="blogPostData_Tvka",p="blogPostDetailsFull_JsBY",h=a(2655);function b(e){return e.href?r.createElement(i.Z,e):r.createElement(r.Fragment,null,e.children)}function v(e){var t=e.author,a=t.name,l=t.title,n=t.url,i=t.imageURL,s=t.email,o=n||s&&"mailto:"+s||void 0;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(b,{href:o,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:i,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(b,{href:o,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),l&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}var f="authorCol_BDV8",E="imageOnlyAuthorRow_uv1c",_="imageOnlyAuthorCol_kWYJ";function N(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var n=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",n?E:"row")},t.map((function(e,t){var i;return r.createElement("div",{className:(0,l.Z)(!n&&"col col--6",n?_:f),key:t},r.createElement(v,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}function Z(e){var t,a,b=(a=(0,o.c)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,n.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),v=(0,s.C)().withBaseUrl,f=e.children,E=e.frontMatter,_=e.assets,Z=e.metadata,k=e.truncated,P=e.isBlogPostPage,T=void 0!==P&&P,w=Z.date,I=Z.formattedDate,y=Z.permalink,x=Z.tags,L=Z.readingTime,M=Z.title,A=Z.editUrl,F=Z.authors,R=null!=(t=_.image)?t:E.image,B=!T&&k,C=x.length>0,O=T?"h1":"h2";return r.createElement("article",{className:T?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(O,{className:g,itemProp:"headline"},T?M:r.createElement(i.Z,{itemProp:"url",to:y},M)),r.createElement("div",{className:(0,l.Z)(d,"margin-vert--md")},r.createElement("time",{dateTime:w,itemProp:"datePublished"},I),void 0!==L&&r.createElement(r.Fragment,null," \xb7 ",b(L))),r.createElement(N,{authors:F,assets:_})),R&&r.createElement("meta",{itemProp:"image",content:v(R,{absolute:!0})}),r.createElement("div",{id:T?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(c.Z,null,f)),(C||k)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",T&&p)},C&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":B})},r.createElement(h.Z,{tags:x})),T&&A&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:A})),B&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":C})},r.createElement(i.Z,{to:Z.permalink,"aria-label":(0,n.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:M})},r.createElement("b",null,r.createElement(n.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},3026:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var r=a(9496),l=a(6436),n=a(4540),i=a(391),s=a(9668),o=a(6665),m=a(4260),c=a(7874),u=a(8338),g=a(3327),d=a(1626);function p(e){var t,a=e.tag,p=e.items,h=e.sidebar,b=e.listMetadata,v=(t=(0,o.c)().selectMessage,function(e){return t(e,(0,s.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),f=(0,s.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:v(a.count),tagName:a.label});return r.createElement(m.FG,{className:(0,d.Z)(c.k.wrapper.blogPages,c.k.page.blogTagPostListPage)},r.createElement(m.d,{title:f}),r.createElement(g.Z,{tag:"blog_tags_posts"}),r.createElement(n.Z,{sidebar:h},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,f),r.createElement(l.Z,{href:a.allTagsPath},r.createElement(s.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),p.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},r.createElement(t,null))})),r.createElement(u.Z,{metadata:b})))}},6665:function(e,t,a){a.d(t,{c:function(){return m}});var r=a(9496),l=a(1794),n=["zero","one","two","few","many","other"];function i(e){return n.filter((function(t){return e.includes(t)}))}var s={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function o(){var e=(0,l.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:i(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),s}var t,a}),[e])}function m(){var e=o();return{selectMessage:function(t,a){return function(e,t,a){var r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms+"), but the message contains "+r.length+": "+e);var l=a.select(t),n=a.pluralForms.indexOf(l);return r[Math.min(n,r.length-1)]}(a,t,e)}}}}}]);