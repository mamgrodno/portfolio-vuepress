(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{294:function(t,r,n){"use strict";var e=n(0),a=n(19),o=n(10),i=n(1),s=n(39),c=[],u=c.sort,l=i((function(){c.sort(void 0)})),f=i((function(){c.sort(null)})),p=s("sort");e({target:"Array",proto:!0,forced:l||!f||!p},{sort:function(t){return void 0===t?u.call(o(this)):u.call(o(this),a(t))}})},306:function(t,r,n){},320:function(t,r,n){"use strict";var e=n(306);n.n(e).a},335:function(t,r,n){"use strict";n.r(r);n(27),n(294),n(85),n(159);var e={computed:{projects:function(){return this.$site.pages.filter((function(t){return t.path.startsWith("/projects4/")&&!t.frontmatter.project_index})).sort((function(t,r){return new Date(r.frontmatter.date)-new Date(t.frontmatter.date)}))}}},a=(n(320),n(38)),o=Object(a.a)(e,(function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",[n("div",{staticClass:"project-list"},t._l(t.projects,(function(r){return n("div",{key:r.title,staticClass:"project1",style:{backgroundImage:"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 35%), url("+r.frontmatter.thumbnail+")"}},[n("router-link",{staticClass:"link",attrs:{to:r.path}},[n("div",{staticClass:"projectinfo"},[n("h2",[t._v(t._s(r.frontmatter.heading))]),t._v(" "),r.frontmatter.description?n("span",[t._v(t._s(r.frontmatter.description))]):t._e()])])],1)})),0)])}),[],!1,null,"aa103b10",null);r.default=o.exports}}]);