!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},r=t.parcelRequiref70e;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequiref70e=r);var i=r("hiFhO");var s=r("bpxeT"),o=r("2TvXO"),l=r("1VFfL"),c=r("iU1Pc"),u=(i=r("hiFhO"),r("kiFmR")),d=r("jaaYu"),f=r("4cXS4"),p=r("5xtVg"),g=r("jcFG7"),m=r("5HOzi"),h=r("dkUq4"),v=(i=r("hiFhO"),r("9PJ7S"));r("4zVoc");var y=r("8UxLt"),b=r("9DSPe");function L(e){if(!e.length)return i.refs.tuiContainer.classList.add("visually-hidden"),i.refs.galleryLibrary.innerHTML='<div class="message-wrap" >\n      <p class="sorry">Sorry...</p>\n      <p class="message">\n        You haven\'t added any movies yet. Hope you fix this soon :)\n      </p>\n      <a href="./index.html" class="library__button accent">Filmoteka</a>\n    </div>';var t=e.map((function(e){var t=e.original_title,a=e.title,n=e.poster_path,r=e.id,i=e.genres,s=e.release_date,o=i.map((function(e){return e.id})),l=(0,v.posterСheck)(n);return'\n          <li class="film__item" data-id="'.concat(r,'">\n          <img src="').concat(l,'" class="film__img" alt="').concat(t,'" />\n          <p class="film__title">').concat(a,'</p>\n          <p class="film__genre">').concat((0,y.makeGenres)(o)," | ").concat((0,b.makeDate)(s),"</p>\n        </li>")})).join("");return i.refs.galleryLibrary.innerHTML=t}var S=r("3TKAW"),_=r("7g3sh");function k(){i.refs.btnWathed.dataset.watch="active",i.refs.btnQueue.dataset.queue="";try{var t=JSON.parse(localStorage.getItem("watch"));if(!t||0===t.length)return i.refs.galleryLibrary.innerHTML='<div class="message-wrap" >\n      <p class="sorry">Sorry...</p>\n      <p class="message">\n        You haven\'t added any movies yet. Hope you fix this soon :)\n      </p>\n      <a href="./index.html" class="library__button accent">Filmoteka</a>\n    </div>',void i.refs.tuiContainer.classList.add("visually-hidden");g.options.totalItems=t.length;var a=0,n=20;i.refs.tuiContainer.classList.remove("visually-hidden"),L(t.slice(a,n)),new(e(l))(i.refs.tuiContainer,g.options).on("beforeMove",(function(e){!function(e){a=e*g.options.itemsPerPage-20,n=e*g.options.itemsPerPage}(e.page),L(t.slice(a,n))}))}catch(e){console.log(e.message)}}function w(){return(w=e(s)(e(o).mark((function t(a){var n,r,s,l,g,v,y,b,k,w;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("film__item"===a.target.parentElement.className){t.next=2;break}return t.abrupt("return");case 2:return(0,p.onOpenModal)(),n=a.target.parentElement.dataset.id,t.next=6,d.serverApi.getDetailsMovie(n);case 6:return r=t.sent,t.next=9,(0,u.movieDescriptionMurkup)(r);case 9:s=t.sent,i.refs.movieDescription.insertAdjacentHTML("beforeend",s),(0,m.makeWatchTextContent)(r),(0,m.makeQueueTextContent)(r),l=document.querySelector("[data-add-watched]"),g=document.querySelector("[data-add-queue]"),v=document.querySelector("[data-modal-close]"),y=document.querySelector(".btn-ytb"),b=document.querySelector(".icon-youtube"),k=document.querySelector("[data-cast]"),w=document.querySelector("[data-rewiews]"),l.addEventListener("click",(function(){(0,f.onAddWatchClick)(r);var e=JSON.parse(localStorage.getItem("watch"));"active"===i.refs.btnWathed.dataset.watch&&L(e)})),g.addEventListener("click",(function(){(0,f.onAddQueueClick)(r);var e=JSON.parse(localStorage.getItem("queue"));"active"===i.refs.btnQueue.dataset.queue&&L(e)})),d.serverApi.getTrailer(n).then((function(t){0!==t.results.length?(b.classList.add("icon-youtube__enable"),b.classList.remove("icon-youtube__disabled")):(b.classList.remove("icon-youtube__enable"),b.classList.add("icon-youtube__disabled"),y.setAttribute("disabled",!0),e(c).Notify.failure("Oh! Unfortunately there is no trailer",{position:"center-top",fontFamily:"inherit",borderRadius:"25px",clickToClose:!0}))})),d.serverApi.getCasts(n).then((function(e){0===e.length&&k.setAttribute("disabled",!0)})),d.serverApi.getRewiews(n).then((function(e){0===e.length&&w.setAttribute("disabled",!0)})),y.addEventListener("click",h.handleClick),k.addEventListener("click",(function(){return(0,S.markupCast)(n)})),w.addEventListener("click",(function(){return(0,_.markupRewiew)(n)})),v.addEventListener("click",p.closeModal);case 29:case"end":return t.stop()}}),t)})))).apply(this,arguments)}i.refs.btnWathed.addEventListener("click",k),i.refs.galleryLibrary.addEventListener("click",(function(e){return w.apply(this,arguments)}));l=r("1VFfL"),i=r("hiFhO"),g=r("jcFG7");function x(){i.refs.btnWathed.dataset.watch="",i.refs.btnQueue.dataset.queue="active";try{var t=JSON.parse(localStorage.getItem("queue"));if(!t||0===t.length)return i.refs.galleryLibrary.innerHTML='<div class="message-wrap" >\n      <p class="sorry">Sorry...</p>\n      <p class="message">\n        You haven\'t added any movies yet. Hope you fix this soon :)\n      </p>\n      <a href="./index.html" class="library__button accent">Filmoteka</a>\n    </div>',void i.refs.tuiContainer.classList.add("visually-hidden");g.options.totalItems=t.length;var a=0,n=20;i.refs.tuiContainer.classList.remove("visually-hidden"),L(t.slice(a,n)),new(e(l))(i.refs.tuiContainer,g.options).on("beforeMove",(function(e){!function(e){a=e*g.options.itemsPerPage-20,n=e*g.options.itemsPerPage}(e.page),L(t.slice(a,n))}))}catch(e){console.log(e.message)}}i.refs.btnQueue.addEventListener("click",x);d=r("jaaYu");!function(){d.serverApi.setlang(JSON.parse(localStorage.getItem("language"))),localStorage.getItem("watch")||localStorage.setItem("watch",JSON.stringify([]));localStorage.getItem("queue")||localStorage.setItem("queue",JSON.stringify([]));try{var e=JSON.parse(localStorage.getItem("watch")),t=JSON.parse(localStorage.getItem("queue"));e&&0!==e.length?k():t&&0!==t.length&&!e||0===e.length?x():i.refs.galleryLibrary.insertAdjacentHTML("beforeend",'<div class="message-wrap" >\n      <p class="sorry">Sorry...</p>\n      <p class="message">\n        You haven\'t added any movies yet. Hope you fix this soon :)\n      </p>\n      <a href="./index.html" class="library__button accent">Filmoteka</a>\n    </div>')}catch(e){console.log(e.message)}}(),r("5xtVg"),r("aZhHc"),r("jcFG7"),r("3ngM5"),r("dUjMA"),r("fDiVl"),r("iNWLi")}();
//# sourceMappingURL=mylibrary.13dbd720.js.map
