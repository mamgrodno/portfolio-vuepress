(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{301:function(t,e,i){"use strict";var n=i(0),a=i(18),o=i(10),s=i(1),r=i(41),l=[],c=l.sort,v=s((function(){l.sort(void 0)})),u=s((function(){l.sort(null)})),_=r("sort");n({target:"Array",proto:!0,forced:v||!u||!_},{sort:function(t){return void 0===t?c.call(o(this)):c.call(o(this),a(t))}})},324:function(t,e,i){},339:function(t,e,i){"use strict";i(324)},358:function(t,e,i){"use strict";i.r(e);i(27),i(301),i(89),i(164);var n=i(305),a=i(330),o=i(323),s={components:{SearchBox:n.a},props:{logo:{type:String,required:!1},sticky:{type:Boolean,required:!1}},data:function(){return{mobileNavActive:!1,tags:!1,clicked_tag:""}},computed:{navLinks:function(){return this.$site.themeConfig.nav},filters:function(){return this.$site.themeConfig.filters},projects:function(){var t=this;return this.$site.pages.filter((function(e){return e.path.startsWith("/projects/")&&!e.frontmatter.project_index&&e.frontmatter.navigation==t.clicked_tag})).sort((function(t,e){return new Date(e.frontmatter.date)-new Date(t.frontmatter.date)}))}},methods:{toggleMobileNav:function(){this.mobileNavActive=!this.mobileNavActive},click_on_nav:function(t){this.tags=!0,this.clicked_tag=t.currentTarget.innerHTML,1==this.tags?document.getElementById("main-container").style.display="none":document.getElementById("main-container").style.display="block",console.log(this.clicked_tag)},click_on_link:function(t){this.tags=!1,document.getElementById("main-container").style.display="block"}},mounted:function(){a.a.registerPlugin(o.a),a.a.set(".projectbox",{opacity:0,y:100}),o.a.batch(".projectbox",{interval:.2,onEnter:function(t){return a.a.to(t,{autoAlpha:1,stagger:.1,opacity:1,y:0,ease:"power3"})}})}},r=(i(339),i(40)),l=Object(r.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("header",{staticClass:"header",style:{top:"0",left:"0",width:"100%"}},[i("div",{staticClass:"brand"},[i("a",{attrs:{href:"/"}},[t.logo?i("div",{staticClass:"logo",style:{backgroundImage:"url("+t.logo+")"},attrs:{title:t.$site.title}}):i("span",[t._v(t._s(t.$site.title))])])]),t._v(" "),i("nav",{staticClass:"navigation right desktop-nav"},[i("ul",[t._l(t.filters,(function(e){return i("li",{key:e.text},[i("span",{on:{click:t.click_on_nav}},[t._v(t._s(e.text))])])})),t._v(" "),t._l(t.navLinks,(function(e){return i("a",{key:e.text,attrs:{tag:"li",href:e.link,"active-class":"active",exact:""},domProps:{textContent:t._s(e.text)}})})),t._v(" "),t._l(t.navLinks,(function(e){return"right"===e.position&&e.external?i("li",[i("a",{attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.text))])]):t._e()})),t._v(" "),i("SearchBox")],2)]),t._v(" "),i("div",{staticClass:"mobile-nav-toggle",on:{click:t.toggleMobileNav}}),t._v(" "),i("div",{staticClass:"mobile-nav",class:{"mobile-nav--active":t.mobileNavActive}},[i("nav",[i("ul",{on:{click:t.toggleMobileNav}},[t._l(t.filters,(function(e){return i("li",{key:e.text},[i("span",{on:{click:t.click_on_nav}},[t._v(t._s(e.text))])])})),t._v(" "),i("li",t._l(t.navLinks,(function(e){return e.external?t._e():i("a",{key:e.text,attrs:{tag:"li",href:e.link,"active-class":"active",exact:""},domProps:{textContent:t._s(e.text)}})})),0),t._v(" "),t._l(t.navLinks,(function(e){return e.external?i("li",{on:{click:t.toggleMobileNav}},[i("a",{attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.text))])]):t._e()}))],2),t._v(" "),i("div",{staticClass:"mobile-nav-close",on:{click:t.toggleMobileNav}})])])]),t._v(" "),this.tags?i("div",["Коллекции"==t.clicked_tag?i("div",{staticClass:"collection"},[t._v("Коллекции\n      "),i("div",{staticClass:"collection-text"},[t._v("\n         Дополняем реальность. Коллекции – это виртуальные залы MAM, Музея современного искусства Гродно. Персональные выставки и тематические сборные вернисажи, информация о работах, авторе(ах), фотографии, видеосюжет и панорама.  Мы хотим показать, что свободное искусство не спрятать в фондах и архивах, оно не ушло в самоизоляцию. Когда-нибудь «Коллекции» «приземлятся» в реальный mamgrodno\n      ")])]):t._e(),t._v(" "),i("div",{staticClass:"project-list"},t._l(t.projects,(function(e){return i("div",{key:e.title,staticClass:"projectbox",on:{click:t.click_on_link}},[i("router-link",{staticClass:"link",attrs:{to:e.path}},[i("div",{staticClass:"image"},[i("img",{attrs:{src:e.frontmatter.thumbnail+"?nf_resize=fit&w=700",alt:""}})]),t._v(" "),i("div",{},[i("div",{staticClass:"projectinfo"},[i("h2",[t._v(t._s(e.frontmatter.heading))]),t._v(" "),e.frontmatter.description?i("h3",[t._v(t._s(e.frontmatter.description))]):t._e()])])])],1)})),0)]):t._e()])}),[],!1,null,"8f5a1568",null);e.default=l.exports}}]);