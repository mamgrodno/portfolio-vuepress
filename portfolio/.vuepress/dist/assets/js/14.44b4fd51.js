(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{298:function(a,e,t){},312:function(a,e,t){"use strict";var n=t(298);t.n(n).a},332:function(a,e,t){"use strict";t.r(e);t(89),t(93),t(163),t(164),t(23),t(90);var n={computed:{isSingleProject:function(){var a=this.$route.path;if(a.includes("works")&&a.length>="/works/".length+1)return!0},isSingleJournal:function(){var a=this.$route.path;if(a.includes("journal")&&a.length>="/journal/".length+1)return!0},isSingleProj:function(){var a=this.$route.path;if(a.includes("projects")&&a.length>="/projects/".length+1)return!0},isSingleProj2:function(){var a=this.$route.path;if(a.includes("projects2")&&a.length>="/projects2/".length+1)return!0},isSingleProj3:function(){var a=this.$route.path;if(a.includes("projects3")&&a.length>="/projects3/".length+1)return!0},isSingleProj4:function(){var a=this.$route.path;if(a.includes("projects4")&&a.length>="/projects4/".length+1)return!0}},updated:function(){document.querySelectorAll("p img").forEach((function(a){var e=a.parentNode,t=e.children,n=document.createDocumentFragment();Array.from(t).forEach((function(a){n.appendChild(a)})),e.parentNode.replaceChild(n,e)}))}},i=(t(312),t(40)),r=Object(i.a)(n,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"wrapper"},[t("Navbar",{attrs:{logo:a.$site.themeConfig.logo,sticky:"/"===a.$route.path}}),a._v(" "),t("div",{staticClass:"container"},["/"===a.$route.path?t("div",{style:{marginTop:"1vw"}},[t("Content")],1):a._e(),a._v(" "),a.isSingleProject?t("div",[t("transition",{attrs:{name:"router-anim","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeIn"}},[t("SingleProjectHeader",{attrs:{title:a.$page.frontmatter.title,year:a.$page.frontmatter.year.toString(),categories:a.$page.frontmatter.categories}})],1),a._v(" "),t("transition",{attrs:{name:"router-anim","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeIn"}},[t("Content")],1)],1):a._e(),a._v(" "),a.isSingleProj?t("div",[t("transition",{attrs:{name:"router-anim","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeIn"}},[t("SingleProjectHeader",{attrs:{title:a.$page.frontmatter.title,year:a.$page.frontmatter.year.toString(),categories:a.$page.frontmatter.categories}})],1),a._v(" "),t("transition",{attrs:{name:"router-anim","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeIn"}},[t("Content")],1)],1):a._e(),a._v(" "),a.isSingleProj2?t("div",[t("transition",{attrs:{name:"router-anim","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeIn"}},[t("SingleProjectHeader",{attrs:{title:a.$page.frontmatter.title,year:a.$page.frontmatter.year.toString(),categories:a.$page.frontmatter.categories}})],1),a._v(" "),t("transition",{attrs:{name:"router-anim","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeIn"}},[t("Content")],1)],1):a._e(),a._v(" "),a.isSingleProj3?t("div",[t("transition",{attrs:{name:"router-anim","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeIn"}},[t("SingleProjectHeader",{attrs:{title:a.$page.frontmatter.title,year:a.$page.frontmatter.year.toString(),categories:a.$page.frontmatter.categories}})],1),a._v(" "),t("transition",{attrs:{name:"router-anim","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeIn"}},[t("Content")],1)],1):a._e(),a._v(" "),a.isSingleProj4?t("div",[t("transition",{attrs:{name:"router-anim","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeIn"}},[t("SingleProjectHeader",{attrs:{title:a.$page.frontmatter.title,year:a.$page.frontmatter.year.toString(),categories:a.$page.frontmatter.categories}})],1),a._v(" "),t("transition",{attrs:{name:"router-anim","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeIn"}},[t("Content")],1)],1):a._e(),a._v(" "),"/journal/"===a.$route.path?t("div",{staticClass:"journal-list"},[t("transition",{attrs:{name:"router-anim","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeIn"}},[t("Content")],1)],1):a._e(),a._v(" "),a.isSingleJournal?t("div",{staticClass:"single-journal"},[t("transition",{attrs:{name:"router-anim","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeIn"}},[t("Content")],1)],1):a._e(),a._v(" "),"/panorama/"===a.$route.path?t("div",[t("Content")],1):a._e()]),a._v(" "),t("Footer")],1)}),[],!1,null,null,null);e.default=r.exports}}]);