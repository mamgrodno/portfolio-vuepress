(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{297:function(t,r,n){"use strict";var e=n(0),o=n(19),i=n(10),s=n(1),a=n(41),c=[],u=c.sort,l=s((function(){c.sort(void 0)})),f=s((function(){c.sort(null)})),p=a("sort");e({target:"Array",proto:!0,forced:l||!f||!p},{sort:function(t){return void 0===t?u.call(i(this)):u.call(i(this),o(t))}})},306:function(t,r,n){},320:function(t,r,n){"use strict";var e=n(306);n.n(e).a},341:function(t,r,n){"use strict";n.r(r);n(27),n(297),n(88),n(162);var e={computed:{projects:function(){return this.$site.pages.filter((function(t){return t.path.startsWith("/projects/")&&!t.frontmatter.project_index})).sort((function(t,r){return new Date(r.frontmatter.date)-new Date(t.frontmatter.date)}))}}},o=(n(320),n(40)),i=Object(o.a)(e,(function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",[n("div",{staticClass:"project-list"},t._l(t.projects,(function(r){return n("div",{key:r.title,staticClass:"project2",style:{backgroundImage:"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 35%), url("+r.frontmatter.thumbnail+")"}},[n("router-link",{staticClass:"link",attrs:{to:r.path}},[n("div",{staticClass:"projectinfo"},[n("h2",[t._v(t._s(r.frontmatter.title))]),t._v(" "),r.frontmatter.description?n("span",[t._v(t._s(r.frontmatter.description))]):t._e()])])],1)})),0)])}),[],!1,null,"44015f00",null);r.default=i.exports}}]);