(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{297:function(t,r,e){"use strict";var n=e(0),o=e(19),i=e(10),s=e(1),a=e(41),c=[],u=c.sort,l=s((function(){c.sort(void 0)})),f=s((function(){c.sort(null)})),p=a("sort");n({target:"Array",proto:!0,forced:l||!f||!p},{sort:function(t){return void 0===t?u.call(i(this)):u.call(i(this),o(t))}})},307:function(t,r,e){},321:function(t,r,e){"use strict";var n=e(307);e.n(n).a},342:function(t,r,e){"use strict";e.r(r);e(27),e(297),e(88),e(162);var n={computed:{projects:function(){return this.$site.pages.filter((function(t){return t.path.startsWith("/projects/")&&!t.frontmatter.project_index})).sort((function(t,r){return new Date(r.frontmatter.date)-new Date(t.frontmatter.date)}))}}},o=(e(321),e(40)),i=Object(o.a)(n,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("div",{staticClass:"project-list"},t._l(t.projects,(function(r){return e("div",{key:r.title,staticClass:"project3",style:{backgroundImage:"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 35%), url("+r.frontmatter.thumbnail+")"}},[e("router-link",{staticClass:"link",attrs:{to:r.path}},[e("div",{staticClass:"projectinfo"},[e("h2",[t._v(t._s(r.frontmatter.title))]),t._v(" "),r.frontmatter.description?e("span",[t._v(t._s(r.frontmatter.description))]):t._e()])])],1)})),0)])}),[],!1,null,"186e7860",null);r.default=i.exports}}]);