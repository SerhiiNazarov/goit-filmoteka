function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},s=t.parcelRequiref70e;null==s&&((s=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var s={id:e,exports:{}};return a[e]=s,t.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequiref70e=s);var r=s("3fz09");var i=s("fb9GJ"),o=s("eWCmQ"),l=(r=s("3fz09"),s("it60l")),c=s("185lj"),d=s("9Co7P"),u=s("bTcpz"),f=s("2nhTy"),p=s("lFT8c"),g=s("c8VpK"),m=(r=s("3fz09"),s("1fedI"));s("bRnc2");var y=s("9zntY"),h=s("3gXpH");function v(e){if(!e.length)return r.refs.tuiContainer.classList.add("visually-hidden"),r.refs.galleryLibrary.innerHTML='<div class="message-wrap" >\n      <p class="sorry">Sorry...</p>\n      <p class="message">\n        You haven\'t added any movies yet. Hope you fix this soon :)\n      </p>\n      <a href="./index.html" class="library__button accent">Filmoteka</a>\n    </div>';const t=e.map((({original_title:e,title:t,poster_path:a,id:n,genres:s,release_date:r})=>{const i=s.map((e=>e.id));return`\n          <li class="film__item" data-id="${n}">\n          <img src="${(0,m.posterСheck)(a)}" class="film__img" alt="${e}" />\n          <p class="film__title">${t}</p>\n          <p class="film__genre">${(0,y.makeGenres)(i)} | ${(0,h.makeDate)(r)}</p>\n        </li>`})).join("");return r.refs.galleryLibrary.innerHTML=t}var b=s("6yrCC"),_=s("hswrV");function L(){r.refs.btnWathed.dataset.watch="active",r.refs.btnQueue.dataset.queue="";try{const t=JSON.parse(localStorage.getItem("watch"));if(!t||0===t.length)return r.refs.galleryLibrary.innerHTML='<div class="message-wrap" >\n      <p class="sorry">Sorry...</p>\n      <p class="message">\n        You haven\'t added any movies yet. Hope you fix this soon :)\n      </p>\n      <a href="./index.html" class="library__button accent">Filmoteka</a>\n    </div>',void r.refs.tuiContainer.classList.add("visually-hidden");{f.options.totalItems=t.length;let a=0,n=20;const s=e=>{a=e*f.options.itemsPerPage-20,n=e*f.options.itemsPerPage};r.refs.tuiContainer.classList.remove("visually-hidden"),v(t.slice(a,n));new(e(i))(r.refs.tuiContainer,f.options).on("beforeMove",(e=>{const r=e.page;s(r),v(t.slice(a,n))}))}}catch(e){console.log(e.message)}}r.refs.btnWathed.addEventListener("click",L),r.refs.galleryLibrary.addEventListener("click",(async function(t){if("film__item"!==t.target.parentElement.className)return;(0,u.onOpenModal)();const a=t.target.parentElement.dataset.id,n=await c.serverApi.getDetailsMovie(a),s=await(0,l.movieDescriptionMurkup)(n);r.refs.movieDescription.insertAdjacentHTML("beforeend",s),(0,p.makeWatchTextContent)(n),(0,p.makeQueueTextContent)(n);const i=document.querySelector("[data-add-watched]"),f=document.querySelector("[data-add-queue]"),m=document.querySelector("[data-modal-close]"),y=document.querySelector(".btn-ytb"),h=document.querySelector(".icon-youtube"),L=document.querySelector("[data-cast]"),S=document.querySelector("[data-rewiews]");i.addEventListener("click",(()=>{(0,d.onAddWatchClick)(n);const e=JSON.parse(localStorage.getItem("watch"));"active"===r.refs.btnWathed.dataset.watch&&v(e)})),f.addEventListener("click",(()=>{(0,d.onAddQueueClick)(n);const e=JSON.parse(localStorage.getItem("queue"));"active"===r.refs.btnQueue.dataset.queue&&v(e)})),c.serverApi.getTrailer(a).then((({results:t})=>{0!==t.length?(h.classList.add("icon-youtube__enable"),h.classList.remove("icon-youtube__disabled")):(h.classList.remove("icon-youtube__enable"),h.classList.add("icon-youtube__disabled"),y.setAttribute("disabled",!0),e(o).Notify.failure("Oh! Unfortunately there is no trailer",{position:"center-top",fontFamily:"inherit",borderRadius:"25px",clickToClose:!0}))})),c.serverApi.getCasts(a).then((e=>{0===e.length&&L.setAttribute("disabled",!0)})),c.serverApi.getRewiews(a).then((e=>{0===e.length&&S.setAttribute("disabled",!0)})),y.addEventListener("click",g.handleClick),L.addEventListener("click",(()=>(0,b.markupCast)(a))),S.addEventListener("click",(()=>(0,_.markupRewiew)(a))),m.addEventListener("click",u.closeModal)}));i=s("fb9GJ"),r=s("3fz09"),f=s("2nhTy");function S(){r.refs.btnWathed.dataset.watch="",r.refs.btnQueue.dataset.queue="active";try{const t=JSON.parse(localStorage.getItem("queue"));if(!t||0===t.length)return r.refs.galleryLibrary.innerHTML='<div class="message-wrap" >\n      <p class="sorry">Sorry...</p>\n      <p class="message">\n        You haven\'t added any movies yet. Hope you fix this soon :)\n      </p>\n      <a href="./index.html" class="library__button accent">Filmoteka</a>\n    </div>',void r.refs.tuiContainer.classList.add("visually-hidden");{f.options.totalItems=t.length;let a=0,n=20;const s=e=>{a=e*f.options.itemsPerPage-20,n=e*f.options.itemsPerPage};r.refs.tuiContainer.classList.remove("visually-hidden"),v(t.slice(a,n));new(e(i))(r.refs.tuiContainer,f.options).on("beforeMove",(e=>{const r=e.page;s(r),v(t.slice(a,n))}))}}catch(e){console.log(e.message)}}r.refs.btnQueue.addEventListener("click",S);c=s("185lj");!function(){c.serverApi.setlang(JSON.parse(localStorage.getItem("language"))),localStorage.getItem("watch")||localStorage.setItem("watch",JSON.stringify([]));localStorage.getItem("queue")||localStorage.setItem("queue",JSON.stringify([]));try{const e=JSON.parse(localStorage.getItem("watch")),t=JSON.parse(localStorage.getItem("queue"));e&&0!==e.length?L():t&&0!==t.length&&!e||0===e.length?S():r.refs.galleryLibrary.insertAdjacentHTML("beforeend",'<div class="message-wrap" >\n      <p class="sorry">Sorry...</p>\n      <p class="message">\n        You haven\'t added any movies yet. Hope you fix this soon :)\n      </p>\n      <a href="./index.html" class="library__button accent">Filmoteka</a>\n    </div>')}catch(e){console.log(e.message)}}(),s("bTcpz"),s("7bYU0"),s("2nhTy"),s("eobyt"),s("3TU0j"),s("3hXKf"),s("2ix2C");
//# sourceMappingURL=mylibrary.fd942606.js.map
