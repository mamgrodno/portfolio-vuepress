(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{301:function(t,e,n){"use strict";var i=n(0),r=n(18),s=n(10),o=n(1),a=n(41),u=[],l=u.sort,c=o((function(){u.sort(void 0)})),h=o((function(){u.sort(null)})),f=a("sort");i({target:"Array",proto:!0,forced:c||!h||!f},{sort:function(t){return void 0===t?l.call(s(this)):l.call(s(this),r(t))}})},302:function(t,e,n){"use strict";var i=n(0),r=n(307).trim;i({target:"String",proto:!0,forced:n(308)("trim")},{trim:function(){return r(this)}})},303:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},304:function(t,e,n){},305:function(t,e,n){"use strict";n(27),n(170),n(165),n(99),n(62),n(171),n(306),n(302),n(174),n(63),n(309),n(310),n(100),n(312),n(98),n(313);var i=n(175),r=n.n(i),s=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=r()(e,"title","");return r()(e,"frontmatter.tags")&&(i+=" ".concat(e.frontmatter.tags.join(" "))),n&&(i+=" ".concat(n)),o(t,i)},o=function(t,e){var n=function(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},i=new RegExp("[^\0-]"),r=t.split(/\s+/g).map((function(t){return t.trim()})).filter((function(t){return!!t}));if(i.test(t))return r.some((function(t){return e.toLowerCase().indexOf(t)>-1}));var s=t.endsWith(" ");return new RegExp(r.map((function(t,e){return r.length!==e+1||s?"(?=.*\\b".concat(n(t),"\\b)"):"(?=.*\\b".concat(n(t),")")})).join("")+".+","gi").test(e)},a={name:"SearchBox",data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||10,i=this.$localePath,r=[],o=0;o<e.length&&!(r.length>=n);o++){var a=e[o];if(this.getPageLocalePath(a)===i&&this.isSearchable(a))if(s(t,a))r.push(a);else if(a.headers)for(var u=0;u<a.headers.length&&!(r.length>=n);u++){var l=a.headers[u];l.title&&s(t,a,l.title)&&r.push(Object.assign({},a,{path:a.path+"#"+l.slug,header:l}))}}return r}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter((function(e){return t.path.match(e)})).length>0},onHotkey:function(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}},u=(n(314),n(40)),l=Object(u.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,i){return n("li",{key:i,staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null);e.a=l.exports},306:function(t,e,n){"use strict";var i=n(167),r=n(5),s=n(13),o=n(22),a=n(168),u=n(169);i("match",1,(function(t,e,n){return[function(e){var n=o(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,n):new RegExp(e)[t](String(n))},function(t){var i=n(e,t,this);if(i.done)return i.value;var o=r(t),l=String(this);if(!o.global)return u(o,l);var c=o.unicode;o.lastIndex=0;for(var h,f=[],d=0;null!==(h=u(o,l));){var g=String(h[0]);f[d]=g,""===g&&(o.lastIndex=a(l,s(o.lastIndex),c)),d++}return 0===d?null:f}]}))},307:function(t,e,n){var i=n(22),r="["+n(303)+"]",s=RegExp("^"+r+r+"*"),o=RegExp(r+r+"*$"),a=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(s,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:a(1),end:a(2),trim:a(3)}},308:function(t,e,n){var i=n(1),r=n(303);t.exports=function(t){return i((function(){return!!r[t]()||"​᠎"!="​᠎"[t]()||r[t].name!==t}))}},309:function(t,e,n){"use strict";var i=n(0),r=n(42).some,s=n(41),o=n(19),a=s("some"),u=o("some");i({target:"Array",proto:!0,forced:!a||!u},{some:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},310:function(t,e,n){var i=n(6),r=n(3),s=n(90),o=n(311),a=n(8).f,u=n(64).f,l=n(166),c=n(97),h=n(173),f=n(11),d=n(1),g=n(28).set,p=n(172),v=n(2)("match"),y=r.RegExp,_=y.prototype,b=/a/g,m=/a/g,S=new y(b)!==b,w=h.UNSUPPORTED_Y;if(i&&s("RegExp",!S||w||d((function(){return m[v]=!1,y(b)!=b||y(m)==m||"/a/i"!=y(b,"i")})))){for(var x=function(t,e){var n,i=this instanceof x,r=l(t),s=void 0===e;if(!i&&r&&t.constructor===x&&s)return t;S?r&&!s&&(t=t.source):t instanceof x&&(s&&(e=c.call(t)),t=t.source),w&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var a=o(S?new y(t,e):y(t,e),i?this:_,x);return w&&n&&g(a,{sticky:n}),a},j=function(t){t in x||a(x,t,{configurable:!0,get:function(){return y[t]},set:function(e){y[t]=e}})},A=u(y),k=0;A.length>k;)j(A[k++]);_.constructor=x,x.prototype=_,f(r,"RegExp",x)}p("RegExp")},311:function(t,e,n){var i=n(4),r=n(91);t.exports=function(t,e,n){var s,o;return r&&"function"==typeof(s=e.constructor)&&s!==n&&i(o=s.prototype)&&o!==n.prototype&&r(t,o),t}},312:function(t,e,n){"use strict";var i,r=n(0),s=n(23).f,o=n(13),a=n(94),u=n(22),l=n(95),c=n(20),h="".endsWith,f=Math.min,d=l("endsWith");r({target:"String",proto:!0,forced:!!(c||d||(i=s(String.prototype,"endsWith"),!i||i.writable))&&!d},{endsWith:function(t){var e=String(u(this));a(t);var n=arguments.length>1?arguments[1]:void 0,i=o(e.length),r=void 0===n?i:f(o(n),i),s=String(t);return h?h.call(e,s,r):e.slice(r-s.length,r)===s}})},313:function(t,e,n){"use strict";var i=n(167),r=n(166),s=n(5),o=n(22),a=n(92),u=n(168),l=n(13),c=n(169),h=n(65),f=n(1),d=[].push,g=Math.min,p=!f((function(){return!RegExp(4294967295,"y")}));i("split",2,(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(o(this)),s=void 0===n?4294967295:n>>>0;if(0===s)return[];if(void 0===t)return[i];if(!r(t))return e.call(i,t,s);for(var a,u,l,c=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,p=new RegExp(t.source,f+"g");(a=h.call(p,i))&&!((u=p.lastIndex)>g&&(c.push(i.slice(g,a.index)),a.length>1&&a.index<i.length&&d.apply(c,a.slice(1)),l=a[0].length,g=u,c.length>=s));)p.lastIndex===a.index&&p.lastIndex++;return g===i.length?!l&&p.test("")||c.push(""):c.push(i.slice(g)),c.length>s?c.slice(0,s):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=o(this),s=null==e?void 0:e[t];return void 0!==s?s.call(e,r,n):i.call(String(r),e,n)},function(t,r){var o=n(i,t,this,r,i!==e);if(o.done)return o.value;var h=s(t),f=String(this),d=a(h,RegExp),v=h.unicode,y=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(p?"y":"g"),_=new d(p?h:"^(?:"+h.source+")",y),b=void 0===r?4294967295:r>>>0;if(0===b)return[];if(0===f.length)return null===c(_,f)?[f]:[];for(var m=0,S=0,w=[];S<f.length;){_.lastIndex=p?S:0;var x,j=c(_,p?f:f.slice(S));if(null===j||(x=g(l(_.lastIndex+(p?0:S)),f.length))===m)S=u(f,S,v);else{if(w.push(f.slice(m,S)),w.length===b)return w;for(var A=1;A<=j.length-1;A++)if(w.push(j[A]),w.length===b)return w;S=m=x}}return w.push(f.slice(m)),w}]}),!p)},314:function(t,e,n){"use strict";n(304)},323:function(t,e,n){
/**
 * v-lazy-image v1.4.0
 * (c) 2020 Alex Jover Morales <alexjovermorales@gmail.com>
 * @license MIT
 */
!function(t){"use strict";var e={props:{src:{type:String,required:!0},srcPlaceholder:{type:String,default:"//:0"},srcset:{type:String},intersectionOptions:{type:Object,default:function(){return{}}},usePicture:{type:Boolean,default:!1}},inheritAttrs:!1,data:function(){return{observer:null,intersected:!1,loaded:!1}},computed:{srcImage:function(){return this.intersected&&this.src?this.src:this.srcPlaceholder},srcsetImage:function(){return!(!this.intersected||!this.srcset)&&this.srcset}},methods:{load:function(){this.$el.getAttribute("src")!==this.srcPlaceholder&&(this.loaded=!0,this.$emit("load"))}},render:function(t){var e=t("img",{attrs:{src:this.srcImage,srcset:this.srcsetImage},domProps:this.$attrs,class:{"v-lazy-image":!0,"v-lazy-image-loaded":this.loaded},on:{load:this.load}});return this.usePicture?t("picture",{on:{load:this.load}},this.intersected?[this.$slots.default,e]:[e]):e},mounted:function(){var t=this;"IntersectionObserver"in window&&(this.observer=new IntersectionObserver((function(e){e[0].isIntersecting&&(t.intersected=!0,t.observer.disconnect(),t.$emit("intersect"))}),this.intersectionOptions),this.observer.observe(this.$el))},destroyed:function(){"IntersectionObserver"in window&&this.observer.disconnect()}},n={install:function(t,n){t.component("VLazyImage",e)}};t.default=e,t.VLazyImagePlugin=n,Object.defineProperty(t,"__esModule",{value:!0})}(e)},324:function(t,e,n){},328:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));n(176),n(337),n(93),n(63),n(338),n(96),n(339);var i=n(38);var r={methods:{handleMouseDown(t){this.isMouseDown=!0,-1!==t.type.indexOf("touch")&&(this.dragStartX=t.touches[0].clientX,this.dragStartY=t.touches[0].clientY),-1!==t.type.indexOf("mouse")&&(this.dragStartX=t.clientX,this.dragStartY=t.clientY)},handleMouseMove(t){let e,n;-1!==t.type.indexOf("touch")&&(e=t.touches[0].clientX,n=t.touches[0].clientY),-1!==t.type.indexOf("mouse")&&(e=t.clientX,n=t.clientY),Math.abs(e-this.dragStartX)>3*Math.abs(n-this.dragStartY)&&(this.disableScroll(),this.dragDistance=e-this.dragStartX)},handleMouseUp(){this.isMouseDown=!1,this.enableScroll()},handleMouseOver(t){this.settings.autoplay&&("dot"===t&&this.settings.pauseOnDotsHover||"track"===t&&this.settings.pauseOnHover)&&(this.isAutoplayPaused=!0)},handleMouseOut(t){this.settings.autoplay&&("dot"===t&&this.settings.pauseOnDotsHover||"track"===t&&this.settings.pauseOnHover)&&(this.isAutoplayPaused=!1)}}};var s={methods:{getWidth(){if(this.isSSR)return!1;this.widthWindow=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,this.widthContainer=this.$refs.list.clientWidth},htmlCollectionToArray:t=>Array.prototype.slice.call(t,0)}};var o={methods:{clearAutoPlayPause(){clearTimeout(this.autoplayTimeout),this.autoplayRemaining=null},disableAutoPlay(){clearInterval(this.autoplayInterval),this.autoplayInterval=null},disableScroll(){document.ontouchmove=t=>t.preventDefault()},enableScroll(){document.ontouchmove=()=>!0},restartAutoPlay(){this.disableAutoPlay(),this.toggleAutoPlay()},toggleAutoPlay(){let t=!this.settings.unagile&&this.settings.autoplay;!this.autoplayInterval&&t?this.autoplayInterval=setInterval(()=>{document.hidden||(this.canGoToNext?this.goToNext():this.disableAutoPlay())},this.settings.autoplaySpeed):this.disableAutoPlay()},toggleFade(){let t=!this.settings.unagile&&this.settings.fade;for(let e=0;e<this.countSlides;e++)this.slides[e].style.transition=t?"opacity "+this.settings.timing+" "+this.settings.speed+"ms":"none",this.slides[e].style.transform=t?`translate(-${e*this.widthSlide}px)`:"none"}}};var a={methods:{prepareSlides(){this.slides=this.htmlCollectionToArray(this.$refs.slides.children),this.slidesCloned&&(this.slidesClonedBefore=this.htmlCollectionToArray(this.$refs.slidesClonedBefore.children),this.slidesClonedAfter=this.htmlCollectionToArray(this.$refs.slidesClonedAfter.children));for(let t of this.slidesAll)t.classList.add("agile__slide")},prepareSlidesClasses(){if(null===this.currentSlide)return!1;for(let t=0;t<this.countSlides;t++)this.slides[t].classList.remove("agile__slide--active"),this.slides[t].classList.remove("agile__slide--current");setTimeout(()=>this.slides[this.currentSlide].classList.add("agile__slide--active"),this.changeDelay);let t=this.slidesCloned?this.countSlides+this.currentSlide:this.currentSlide;this.centerMode&&(t-=Math.floor(this.settings.slidesToShow/2)-+(this.settings.slidesToShow%2==0));for(let e=Math.max(t,0);e<Math.min(t+this.settings.slidesToShow,this.countSlides);e++)this.slidesAll[e].classList.add("agile__slide--current")},prepareCarousel(){this.settings.unagile?this.translateX=0:(null===this.currentSlide&&this.countSlides&&(this.currentSlide=this.settings.initialSlide),this.currentSlide>this.countSlides&&(this.currentSlide=this.countSlides-1),this.goTo(this.currentSlide,!1,!1))}}},u=n(340),l=n.n(u);var c={props:{asNavFor:{type:Array,default:function(){return[]}},autoplay:{type:Boolean,default:!1},autoplaySpeed:{type:Number,default:3e3},centerMode:{type:Boolean,default:!1},centerPadding:{type:String,default:"15%"},changeDelay:{type:Number,default:0},dots:{type:Boolean,default:!0},fade:{type:Boolean,default:!1},infinite:{type:Boolean,default:!0},initialSlide:{type:Number,default:0},mobileFirst:{type:Boolean,default:!0},navButtons:{type:Boolean,default:!0},options:{type:Object,default:()=>null},pauseOnDotsHover:{type:Boolean,default:!1},pauseOnHover:{type:Boolean,default:!0},responsive:{type:Array,default:()=>null},rtl:{type:Boolean,default:!1},slidesToScroll:{type:Number,default:1},slidesToShow:{type:Number,default:1},speed:{type:Number,default:300},swipeDistance:{type:Number,default:50},throttleDelay:{type:Number,default:500},timing:{type:String,default:"ease",validator:t=>-1!==["ease","linear","ease-in","ease-out","ease-in-out"].indexOf(t)},unagile:{type:Boolean,default:!1}},computed:{initialSettings:function(){let{options:t,...e}=this.$props;return t&&(e={...e,...t}),e.responsive&&(e.responsive=l()(e.responsive,"breakpoint")),e},settings:function(){const{responsive:t,...e}=this.initialSettings;return t&&t.forEach(t=>{if(e.mobileFirst?t.breakpoint<this.widthWindow:t.breakpoint>this.widthWindow)for(let n in t.settings)e[n]=t.settings[n]}),e}}},h=n(341),f=n.n(h);var d={name:"Agile",mixins:[r,s,o,a,c,{created(){this.goTo=f()(this.goTo,this.throttleDelay),this.getWidth=f()(this.getWidth,500)}},{watch:{currentBreakpoint(){this.$emit("breakpoint",{breakpoint:this.currentBreakpoint})},currentSlide(){this.prepareSlidesClasses(),this.autoplayStartTimestamp=this.settings.autoplay?+new Date:null,this.$emit("after-change",{currentSlide:this.currentSlide})},dragDistance(){if(this.isMouseDown){const{rtl:t}=this.settings,e=this.dragDistance*(t?-1:1);e>this.swipeDistance&&this.canGoToPrev&&(this.goToPrev(),this.handleMouseUp()),e<-1*this.swipeDistance&&this.canGoToNext&&(this.goToNext(),this.handleMouseUp())}},isAutoplayPaused(t){t?(this.remaining=this.settings.autoplaySpeed-(+new Date-this.autoplayStartTimestamp),this.disableAutoPlay(),this.clearAutoPlayPause()):this.autoplayTimeout=setTimeout(()=>{this.clearAutoPlayPause(),this.goToNext(),this.toggleAutoPlay()},this.remaining)},"settings.autoplay"(){this.toggleAutoPlay()},"settings.fade"(){this.toggleFade()},"settings.unagile"(){},widthSlide(){for(let t=0;t<this.countSlidesAll;t++)this.slidesAll[t].style.width=`${this.widthSlide}${"auto"!==this.widthSlide?"px":""}`},widthWindow(t,e){e&&(this.prepareCarousel(),this.toggleFade())}}}],data:function(){return{autoplayInterval:null,autoplayRemaining:null,autoplayStartTimestamp:null,autoplayTimeout:null,currentSlide:null,dragDistance:0,dragStartX:0,dragStartY:0,isAutoplayPaused:!1,isMouseDown:!1,slides:[],slidesClonedAfter:[],slidesClonedBefore:[],isSSR:"undefined"==typeof window,transitionDelay:0,translateX:0,widthWindow:0,widthContainer:0}},computed:{breakpoints:function(){return this.initialSettings.responsive?this.initialSettings.responsive.map((function(t){return t.breakpoint})):[]},canGoToPrev:function(){return this.settings.infinite||this.currentSlide>0},canGoToNext:function(){return this.settings.infinite||this.currentSlide<this.countSlides-1},countSlides:function(){return this.isSSR?this.htmlCollectionToArray(this.$slots.default).length:this.slides.length},countSlidesAll:function(){return this.slidesAll.length},currentBreakpoint:function(){var t=this,e=this.breakpoints.map((function(t){return t})).reverse();return this.initialSettings.mobileFirst?e.find((function(e){return e<t.widthWindow}))||0:e.find((function(e){return e>t.widthWindow}))||null},marginX:function(){if(this.settings.unagile)return 0;var t=this.slidesCloned?this.countSlides*this.widthSlide:0;return this.settings.centerMode&&(t-=(Math.floor(this.settings.slidesToShow/2)-+(this.settings.slidesToShow%2==0))*this.widthSlide),this.settings.rtl?t:-1*t},slidesCloned:function(){return!this.settings.unagile&&!this.settings.fade&&this.settings.infinite},slidesAll:function(){return this.slidesCloned?[].concat(Object(i.a)(this.slidesClonedBefore),Object(i.a)(this.slides),Object(i.a)(this.slidesClonedAfter)):this.slides},widthSlide:function(){return this.settings.unagile?"auto":this.widthContainer/this.settings.slidesToShow}},mounted:function(){window.addEventListener("resize",this.getWidth),this.$refs.track.addEventListener("touchstart",this.handleMouseDown),this.$refs.track.addEventListener("touchend",this.handleMouseUp),this.$refs.track.addEventListener("touchmove",this.handleMouseMove),this.$refs.track.addEventListener("mousedown",this.handleMouseDown),this.$refs.track.addEventListener("mouseup",this.handleMouseUp),this.$refs.track.addEventListener("mousemove",this.handleMouseMove),this.isSSR=!1,this.reload()},beforeDestroy:function(){window.removeEventListener("resize",this.getWidth),this.$refs.track.removeEventListener("touchstart",this.handleMouseDown),this.$refs.track.removeEventListener("touchend",this.handleMouseUp),this.$refs.track.removeEventListener("touchmove",this.handleMouseMove),this.$refs.track.removeEventListener("mousedown",this.handleMouseDown),this.$refs.track.removeEventListener("mouseup",this.handleMouseUp),this.$refs.track.removeEventListener("mousemove",this.handleMouseMove),this.disableAutoPlay()},methods:{getCurrentBreakpoint:function(){return this.currentBreakpoint},getCurrentSettings:function(){return this.settings},getCurrentSlide:function(){return this.currentSlide},getInitialSettings:function(){return this.initialSettings},goTo:function(t){var e=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this.settings.unagile)return!1;i||this.settings.asNavFor.forEach((function(e){e&&e.goTo(t,n,!0)}));var r=t;n&&(this.settings.infinite&&t<0?r=this.countSlides-1:t>=this.countSlides&&(r=0),this.$emit("before-change",{currentSlide:this.currentSlide,nextSlide:r}),this.currentSlide=r,t!==r&&setTimeout((function(){e.goTo(r,!1)}),this.settings.speed));var s=this.settings.fade?0:t*this.widthSlide*this.settings.slidesToScroll;this.transitionDelay=n?this.speed:0,(this.infinite||this.currentSlide+this.slidesToShow<=this.countSlides)&&(this.translateX=this.settings.rtl?s:-1*s)},goToNext:function(){this.canGoToNext&&this.goTo(this.currentSlide+1)},goToPrev:function(){this.canGoToPrev&&this.goTo(this.currentSlide-1)},reload:function(){this.getWidth(),this.prepareSlides(),this.prepareCarousel(),this.toggleFade(),this.toggleAutoPlay()}}},g=(n(342),n(40)),p=Object(g.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"agile",class:{"agile--ssr":t.isSSR,"agile--auto-play":t.settings.autoplay,"agile--disabled":t.settings.unagile,"agile--fade":t.settings.fade&&!t.settings.unagile,"agile--rtl":t.settings.rtl,"agile--no-nav-buttons":!t.settings.navButtons},on:{touchstart:function(){}}},[n("div",{ref:"list",staticClass:"agile__list"},[n("div",{ref:"track",staticClass:"agile__track",style:{transform:"translate("+(t.translateX+t.marginX)+"px)",transition:"transform "+t.settings.timing+" "+t.transitionDelay+"ms"},on:{mouseover:function(e){return t.handleMouseOver("track")},mouseout:function(e){return t.handleMouseOut("track")}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.slidesCloned,expression:"slidesCloned"}],ref:"slidesClonedBefore",staticClass:"agile__slides agile__slides--cloned"},[t._t("default")],2),t._v(" "),n("div",{ref:"slides",staticClass:"agile__slides agile__slides--regular"},[t._t("default")],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.slidesCloned,expression:"slidesCloned"}],ref:"slidesClonedAfter",staticClass:"agile__slides agile__slides--cloned"},[t._t("default")],2)])]),t._v(" "),t.$slots.caption?n("div",{staticClass:"agile__caption"},[t._t("caption")],2):t._e(),t._v(" "),t.settings.unagile||!t.settings.navButtons&&!t.settings.dots?t._e():n("div",{staticClass:"agile__actions"},[t.settings.navButtons&&!t.settings.unagile?n("button",{ref:"prevButton",staticClass:"agile__nav-button agile__nav-button--prev",attrs:{disabled:!t.canGoToPrev,type:"button"},on:{click:function(e){t.goToPrev(),t.restartAutoPlay()}}},[t._t("prevButton",[t._v("\n\t\t\t\t←\n\t\t\t")])],2):t._e(),t._v(" "),t.settings.dots&&!t.settings.unagile?n("ul",{ref:"dots",staticClass:"agile__dots"},t._l(t.countSlides,(function(e){return n("li",{key:e,staticClass:"agile__dot",class:{"agile__dot--current":e-1===t.currentSlide},on:{mouseover:function(e){return t.handleMouseOver("dot")},mouseout:function(e){return t.handleMouseOut("dot")}}},[n("button",{attrs:{type:"button"},on:{click:function(n){t.goTo(e-1),t.restartAutoPlay()}}},[t._v("\n\t\t\t\t\t"+t._s(e)+"\n\t\t\t\t")])])})),0):t._e(),t._v(" "),t.settings.navButtons&&!t.settings.unagile?n("button",{ref:"nextButton",staticClass:"agile__nav-button agile__nav-button--next",attrs:{disabled:!t.canGoToNext,type:"button"},on:{click:function(e){t.goToNext(),t.restartAutoPlay()}}},[t._t("nextButton",[t._v("\n\t\t\t\t→\n\t\t\t")])],2):t._e()])])}),[],!1,null,null,null).exports},337:function(t,e,n){"use strict";var i=n(0),r=n(42).find,s=n(101),o=n(19),a=!0,u=o("find");"find"in[]&&Array(1).find((function(){a=!1})),i({target:"Array",proto:!0,forced:a||!u},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),s("find")},338:function(t,e,n){"use strict";var i=n(0),r=n(29),s=[].reverse,o=[1,2];i({target:"Array",proto:!0,forced:String(o)===String(o.reverse())},{reverse:function(){return r(this)&&(this.length=this.length),s.call(this)}})},339:function(t,e,n){var i=n(0),r=n(3),s=n(102),o=[].slice,a=function(t){return function(e,n){var i=arguments.length>2,r=i?o.call(arguments,2):void 0;return t(i?function(){("function"==typeof e?e:Function(e)).apply(this,r)}:e,n)}};i({global:!0,bind:!0,forced:/MSIE .\./.test(s)},{setTimeout:a(r.setTimeout),setInterval:a(r.setInterval)})},340:function(t,e,n){(function(t){var n="[object Arguments]",i="[object Map]",r="[object Object]",s="[object Set]",o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/,u=/^\./,l=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,c=/\\(\\)?/g,h=/^\[object .+?Constructor\]$/,f=/^(?:0|[1-9]\d*)$/,d={};d["[object Float32Array]"]=d["[object Float64Array]"]=d["[object Int8Array]"]=d["[object Int16Array]"]=d["[object Int32Array]"]=d["[object Uint8Array]"]=d["[object Uint8ClampedArray]"]=d["[object Uint16Array]"]=d["[object Uint32Array]"]=!0,d[n]=d["[object Array]"]=d["[object ArrayBuffer]"]=d["[object Boolean]"]=d["[object DataView]"]=d["[object Date]"]=d["[object Error]"]=d["[object Function]"]=d[i]=d["[object Number]"]=d[r]=d["[object RegExp]"]=d[s]=d["[object String]"]=d["[object WeakMap]"]=!1;var g="object"==typeof global&&global&&global.Object===Object&&global,p="object"==typeof self&&self&&self.Object===Object&&self,v=g||p||Function("return this")(),y=e&&!e.nodeType&&e,_=y&&"object"==typeof t&&t&&!t.nodeType&&t,b=_&&_.exports===y&&g.process,m=function(){try{return b&&b.binding("util")}catch(t){}}(),S=m&&m.isTypedArray;function w(t,e){for(var n=-1,i=t?t.length:0,r=Array(i);++n<i;)r[n]=e(t[n],n,t);return r}function x(t,e){for(var n=-1,i=t?t.length:0;++n<i;)if(e(t[n],n,t))return!0;return!1}function j(t){return function(e){return t(e)}}function A(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function k(t){var e=-1,n=Array(t.size);return t.forEach((function(t,i){n[++e]=[i,t]})),n}function O(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var C,T,$,P=Array.prototype,M=Function.prototype,E=Object.prototype,I=v["__core-js_shared__"],D=(C=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||""))?"Symbol(src)_1."+C:"",B=M.toString,L=E.hasOwnProperty,N=E.toString,W=RegExp("^"+B.call(L).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),R=v.Symbol,F=v.Uint8Array,U=E.propertyIsEnumerable,X=P.splice,z=(T=Object.keys,$=Object,function(t){return T($(t))}),G=Ot(v,"DataView"),H=Ot(v,"Map"),Y=Ot(v,"Promise"),V=Ot(v,"Set"),q=Ot(v,"WeakMap"),J=Ot(Object,"create"),K=Dt(G),Q=Dt(H),Z=Dt(Y),tt=Dt(V),et=Dt(q),nt=R?R.prototype:void 0,it=nt?nt.valueOf:void 0,rt=nt?nt.toString:void 0;function st(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}function ot(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}function at(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}function ut(t){var e=-1,n=t?t.length:0;for(this.__data__=new at;++e<n;)this.add(t[e])}function lt(t){this.__data__=new ot(t)}function ct(t,e){var n=Wt(t)||Nt(t)?function(t,e){for(var n=-1,i=Array(t);++n<t;)i[n]=e(n);return i}(t.length,String):[],i=n.length,r=!!i;for(var s in t)!e&&!L.call(t,s)||r&&("length"==s||Tt(s,i))||n.push(s);return n}function ht(t,e){for(var n=t.length;n--;)if(Lt(t[n][0],e))return n;return-1}st.prototype.clear=function(){this.__data__=J?J(null):{}},st.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},st.prototype.get=function(t){var e=this.__data__;if(J){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return L.call(e,t)?e[t]:void 0},st.prototype.has=function(t){var e=this.__data__;return J?void 0!==e[t]:L.call(e,t)},st.prototype.set=function(t,e){return this.__data__[t]=J&&void 0===e?"__lodash_hash_undefined__":e,this},ot.prototype.clear=function(){this.__data__=[]},ot.prototype.delete=function(t){var e=this.__data__,n=ht(e,t);return!(n<0)&&(n==e.length-1?e.pop():X.call(e,n,1),!0)},ot.prototype.get=function(t){var e=this.__data__,n=ht(e,t);return n<0?void 0:e[n][1]},ot.prototype.has=function(t){return ht(this.__data__,t)>-1},ot.prototype.set=function(t,e){var n=this.__data__,i=ht(n,t);return i<0?n.push([t,e]):n[i][1]=e,this},at.prototype.clear=function(){this.__data__={hash:new st,map:new(H||ot),string:new st}},at.prototype.delete=function(t){return kt(this,t).delete(t)},at.prototype.get=function(t){return kt(this,t).get(t)},at.prototype.has=function(t){return kt(this,t).has(t)},at.prototype.set=function(t,e){return kt(this,t).set(t,e),this},ut.prototype.add=ut.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},ut.prototype.has=function(t){return this.__data__.has(t)},lt.prototype.clear=function(){this.__data__=new ot},lt.prototype.delete=function(t){return this.__data__.delete(t)},lt.prototype.get=function(t){return this.__data__.get(t)},lt.prototype.has=function(t){return this.__data__.has(t)},lt.prototype.set=function(t,e){var n=this.__data__;if(n instanceof ot){var i=n.__data__;if(!H||i.length<199)return i.push([t,e]),this;n=this.__data__=new at(i)}return n.set(t,e),this};var ft,dt,gt=(ft=function(t,e){return t&&pt(t,e,Yt)},function(t,e){if(null==t)return t;if(!Rt(t))return ft(t,e);for(var n=t.length,i=dt?n:-1,r=Object(t);(dt?i--:++i<n)&&!1!==e(r[i],i,r););return t}),pt=function(t){return function(e,n,i){for(var r=-1,s=Object(e),o=i(e),a=o.length;a--;){var u=o[t?a:++r];if(!1===n(s[u],u,s))break}return e}}();function vt(t,e){for(var n=0,i=(e=$t(e,t)?[e]:xt(e)).length;null!=t&&n<i;)t=t[It(e[n++])];return n&&n==i?t:void 0}function yt(t,e){return null!=t&&e in Object(t)}function _t(t,e,o,a,u){return t===e||(null==t||null==e||!Xt(t)&&!zt(e)?t!=t&&e!=e:function(t,e,o,a,u,l){var c=Wt(t),h=Wt(e),f="[object Array]",d="[object Array]";c||(f=(f=Ct(t))==n?r:f);h||(d=(d=Ct(e))==n?r:d);var g=f==r&&!A(t),p=d==r&&!A(e),v=f==d;if(v&&!g)return l||(l=new lt),c||Ht(t)?At(t,e,o,a,u,l):function(t,e,n,r,o,a,u){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!r(new F(t),new F(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Lt(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case i:var l=k;case s:var c=2&a;if(l||(l=O),t.size!=e.size&&!c)return!1;var h=u.get(t);if(h)return h==e;a|=1,u.set(t,e);var f=At(l(t),l(e),r,o,a,u);return u.delete(t),f;case"[object Symbol]":if(it)return it.call(t)==it.call(e)}return!1}(t,e,f,o,a,u,l);if(!(2&u)){var y=g&&L.call(t,"__wrapped__"),_=p&&L.call(e,"__wrapped__");if(y||_){var b=y?t.value():t,m=_?e.value():e;return l||(l=new lt),o(b,m,a,u,l)}}if(!v)return!1;return l||(l=new lt),function(t,e,n,i,r,s){var o=2&r,a=Yt(t),u=a.length,l=Yt(e).length;if(u!=l&&!o)return!1;var c=u;for(;c--;){var h=a[c];if(!(o?h in e:L.call(e,h)))return!1}var f=s.get(t);if(f&&s.get(e))return f==e;var d=!0;s.set(t,e),s.set(e,t);var g=o;for(;++c<u;){h=a[c];var p=t[h],v=e[h];if(i)var y=o?i(v,p,h,e,t,s):i(p,v,h,t,e,s);if(!(void 0===y?p===v||n(p,v,i,r,s):y)){d=!1;break}g||(g="constructor"==h)}if(d&&!g){var _=t.constructor,b=e.constructor;_==b||!("constructor"in t)||!("constructor"in e)||"function"==typeof _&&_ instanceof _&&"function"==typeof b&&b instanceof b||(d=!1)}return s.delete(t),s.delete(e),d}(t,e,o,a,u,l)}(t,e,_t,o,a,u))}function bt(t){return!(!Xt(t)||function(t){return!!D&&D in t}(t))&&(Ft(t)||A(t)?W:h).test(Dt(t))}function mt(t){return"function"==typeof t?t:null==t?Vt:"object"==typeof t?Wt(t)?function(t,e){if($t(t)&&Pt(e))return Mt(It(t),e);return function(n){var i=function(t,e,n){var i=null==t?void 0:vt(t,e);return void 0===i?n:i}(n,t);return void 0===i&&i===e?function(t,e){return null!=t&&function(t,e,n){e=$t(e,t)?[e]:xt(e);var i,r=-1,s=e.length;for(;++r<s;){var o=It(e[r]);if(!(i=null!=t&&n(t,o)))break;t=t[o]}if(i)return i;return!!(s=t?t.length:0)&&Ut(s)&&Tt(o,s)&&(Wt(t)||Nt(t))}(t,e,yt)}(n,t):_t(e,i,void 0,3)}}(t[0],t[1]):function(t){var e=function(t){var e=Yt(t),n=e.length;for(;n--;){var i=e[n],r=t[i];e[n]=[i,r,Pt(r)]}return e}(t);if(1==e.length&&e[0][2])return Mt(e[0][0],e[0][1]);return function(n){return n===t||function(t,e,n,i){var r=n.length,s=r,o=!i;if(null==t)return!s;for(t=Object(t);r--;){var a=n[r];if(o&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++r<s;){var u=(a=n[r])[0],l=t[u],c=a[1];if(o&&a[2]){if(void 0===l&&!(u in t))return!1}else{var h=new lt;if(i)var f=i(l,c,u,t,e,h);if(!(void 0===f?_t(c,l,i,3,h):f))return!1}}return!0}(n,t,e)}}(t):$t(e=t)?(n=It(e),function(t){return null==t?void 0:t[n]}):function(t){return function(e){return vt(e,t)}}(e);var e,n}function St(t){if(n=(e=t)&&e.constructor,i="function"==typeof n&&n.prototype||E,e!==i)return z(t);var e,n,i,r=[];for(var s in Object(t))L.call(t,s)&&"constructor"!=s&&r.push(s);return r}function wt(t,e,n){var i=-1;return e=w(e.length?e:[Vt],j(mt)),function(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].value;return t}(function(t,e){var n=-1,i=Rt(t)?Array(t.length):[];return gt(t,(function(t,r,s){i[++n]=e(t,r,s)})),i}(t,(function(t,n,r){return{criteria:w(e,(function(e){return e(t)})),index:++i,value:t}})),(function(t,e){return function(t,e,n){var i=-1,r=t.criteria,s=e.criteria,o=r.length,a=n.length;for(;++i<o;){var u=jt(r[i],s[i]);if(u){if(i>=a)return u;var l=n[i];return u*("desc"==l?-1:1)}}return t.index-e.index}(t,e,n)}))}function xt(t){return Wt(t)?t:Et(t)}function jt(t,e){if(t!==e){var n=void 0!==t,i=null===t,r=t==t,s=Gt(t),o=void 0!==e,a=null===e,u=e==e,l=Gt(e);if(!a&&!l&&!s&&t>e||s&&o&&u&&!a&&!l||i&&o&&u||!n&&u||!r)return 1;if(!i&&!s&&!l&&t<e||l&&n&&r&&!i&&!s||a&&n&&r||!o&&r||!u)return-1}return 0}function At(t,e,n,i,r,s){var o=2&r,a=t.length,u=e.length;if(a!=u&&!(o&&u>a))return!1;var l=s.get(t);if(l&&s.get(e))return l==e;var c=-1,h=!0,f=1&r?new ut:void 0;for(s.set(t,e),s.set(e,t);++c<a;){var d=t[c],g=e[c];if(i)var p=o?i(g,d,c,e,t,s):i(d,g,c,t,e,s);if(void 0!==p){if(p)continue;h=!1;break}if(f){if(!x(e,(function(t,e){if(!f.has(e)&&(d===t||n(d,t,i,r,s)))return f.add(e)}))){h=!1;break}}else if(d!==g&&!n(d,g,i,r,s)){h=!1;break}}return s.delete(t),s.delete(e),h}function kt(t,e){var n,i,r=t.__data__;return("string"==(i=typeof(n=e))||"number"==i||"symbol"==i||"boolean"==i?"__proto__"!==n:null===n)?r["string"==typeof e?"string":"hash"]:r.map}function Ot(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return bt(n)?n:void 0}var Ct=function(t){return N.call(t)};function Tt(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||f.test(t))&&t>-1&&t%1==0&&t<e}function $t(t,e){if(Wt(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Gt(t))||(a.test(t)||!o.test(t)||null!=e&&t in Object(e))}function Pt(t){return t==t&&!Xt(t)}function Mt(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}}(G&&"[object DataView]"!=Ct(new G(new ArrayBuffer(1)))||H&&Ct(new H)!=i||Y&&"[object Promise]"!=Ct(Y.resolve())||V&&Ct(new V)!=s||q&&"[object WeakMap]"!=Ct(new q))&&(Ct=function(t){var e=N.call(t),n=e==r?t.constructor:void 0,o=n?Dt(n):void 0;if(o)switch(o){case K:return"[object DataView]";case Q:return i;case Z:return"[object Promise]";case tt:return s;case et:return"[object WeakMap]"}return e});var Et=Bt((function(t){var e;t=null==(e=t)?"":function(t){if("string"==typeof t)return t;if(Gt(t))return rt?rt.call(t):"";var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}(e);var n=[];return u.test(t)&&n.push(""),t.replace(l,(function(t,e,i,r){n.push(i?r.replace(c,"$1"):e||t)})),n}));function It(t){if("string"==typeof t||Gt(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}function Dt(t){if(null!=t){try{return B.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Bt(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var i=arguments,r=e?e.apply(this,i):i[0],s=n.cache;if(s.has(r))return s.get(r);var o=t.apply(this,i);return n.cache=s.set(r,o),o};return n.cache=new(Bt.Cache||at),n}function Lt(t,e){return t===e||t!=t&&e!=e}function Nt(t){return function(t){return zt(t)&&Rt(t)}(t)&&L.call(t,"callee")&&(!U.call(t,"callee")||N.call(t)==n)}Bt.Cache=at;var Wt=Array.isArray;function Rt(t){return null!=t&&Ut(t.length)&&!Ft(t)}function Ft(t){var e=Xt(t)?N.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}function Ut(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}function Xt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function zt(t){return!!t&&"object"==typeof t}function Gt(t){return"symbol"==typeof t||zt(t)&&"[object Symbol]"==N.call(t)}var Ht=S?j(S):function(t){return zt(t)&&Ut(t.length)&&!!d[N.call(t)]};function Yt(t){return Rt(t)?ct(t):St(t)}function Vt(t){return t}t.exports=function(t,e,n,i){return null==t?[]:(Wt(e)||(e=null==e?[]:[e]),Wt(n=i?void 0:n)||(n=null==n?[]:[n]),wt(t,e,n))}}).call(this,n(104)(t))},341:function(t,e){var n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,s=/^0o[0-7]+$/i,o=parseInt,a="object"==typeof global&&global&&global.Object===Object&&global,u="object"==typeof self&&self&&self.Object===Object&&self,l=a||u||Function("return this")(),c=Object.prototype.toString,h=Math.max,f=Math.min,d=function(){return l.Date.now()};function g(t,e,n){var i,r,s,o,a,u,l=0,c=!1,g=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function _(e){var n=i,s=r;return i=r=void 0,l=e,o=t.apply(s,n)}function b(t){return l=t,a=setTimeout(S,e),c?_(t):o}function m(t){var n=t-u;return void 0===u||n>=e||n<0||g&&t-l>=s}function S(){var t=d();if(m(t))return w(t);a=setTimeout(S,function(t){var n=e-(t-u);return g?f(n,s-(t-l)):n}(t))}function w(t){return a=void 0,y&&i?_(t):(i=r=void 0,o)}function x(){var t=d(),n=m(t);if(i=arguments,r=this,u=t,n){if(void 0===a)return b(u);if(g)return a=setTimeout(S,e),_(u)}return void 0===a&&(a=setTimeout(S,e)),o}return e=v(e)||0,p(n)&&(c=!!n.leading,s=(g="maxWait"in n)?h(v(n.maxWait)||0,e):s,y="trailing"in n?!!n.trailing:y),x.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=u=r=a=void 0},x.flush=function(){return void 0===a?o:w(d())},x}function p(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function v(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==c.call(t)}(t))return NaN;if(p(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=p(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var a=r.test(t);return a||s.test(t)?o(t.slice(2),a?2:8):i.test(t)?NaN:+t}t.exports=function(t,e,n){var i=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),g(t,e,{leading:i,maxWait:e,trailing:r})}},342:function(t,e,n){"use strict";n(324)}}]);