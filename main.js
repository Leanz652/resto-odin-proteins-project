/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_icons_netflix_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/icons/netflix.png */ "./src/assets/icons/netflix.png");
/* harmony import */ var _assets_icons_instagram_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/icons/instagram.png */ "./src/assets/icons/instagram.png");
/* harmony import */ var _assets_icons_youtube_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/icons/youtube.png */ "./src/assets/icons/youtube.png");






function createContact () {
  const contact = document.querySelector("main");
  contact.innerHTML = "";
  const footer = document.querySelector("footer");
  footer.remove();
  contact.classList.add("main_contact");

  const main_conteiner_contact = document.createElement("div");
  main_conteiner_contact.classList.add("contact_conteiner");


  const main_conteiner_info = document.createElement("div");
  main_conteiner_info.classList.add("info_contact");


  const contact_social1 = document.createElement("div");
  contact_social1.classList.add("box-social");

  const contact_social2 = document.createElement("div");
  contact_social2.classList.add("box-social");

  const contact_social3 = document.createElement("div");
  contact_social3.classList.add("box-social");


  const netflixIc = new Image
  netflixIc.src = _assets_icons_netflix_png__WEBPACK_IMPORTED_MODULE_1__;
  const instaIc = new Image
  instaIc.src = _assets_icons_instagram_png__WEBPACK_IMPORTED_MODULE_2__;
  const youtubeIc = new Image
  youtubeIc.src = _assets_icons_youtube_png__WEBPACK_IMPORTED_MODULE_3__;
 
  const netflixLink = document.createElement("a");
  netflixLink.href = "https://www.netflix.com/es/title/70301870"
  netflixLink.appendChild(netflixIc);
  const p_netflix = document.createElement("p");
  p_netflix.innerText = "Netflix - TV SHOW";

  contact_social1.appendChild(netflixLink);
  contact_social1.appendChild(p_netflix);

  const instaLink = document.createElement("a");
  instaLink.href = "https://www.instagram.com/historyvikings/"
  instaLink.appendChild(instaIc);
  const p_insta = document.createElement("p");
  p_insta.innerText = "@Historyvikings";

  contact_social2.appendChild(instaLink);
  contact_social2.appendChild(p_insta);

  p_insta.innerText = "@Historyvikings";
  const youtubeLink = document.createElement("a");
  youtubeLink.href = "https://www.youtube.com/watch?v=MLJyFzdQfK8"
  youtubeLink.appendChild(youtubeIc);
  const p_youtube = document.createElement("p");
  p_youtube.innerText = "Viking Channel";

  contact_social3.appendChild(youtubeLink);
  contact_social3.appendChild(p_youtube);
  main_conteiner_info.appendChild(contact_social1);
  main_conteiner_info.appendChild(contact_social2);
  main_conteiner_info.appendChild(contact_social3);

  main_conteiner_contact.appendChild(main_conteiner_info);


  const bttn_contact = document.getElementById("contact");
  console.log(bttn_contact);
  bttn_contact.classList.add("active_bttn");


  const map_contact = document.createElement("div");
  map_contact.classList.add("map_contact");
  
  const p_contact = document.createElement("p");
  p_contact.innerText = "Dalevegen 6270, 6270 Brattvåg, Noruega";

  const iframe_contact = document.createElement("iframe");
  iframe_contact.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14692.024565834863!2d6.435155!3d62.59369900000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdb24d40557a00562!2sBrattv%C3%A5ghallen!5e0!3m2!1ses!2sar!4v1646069090138!5m2!1ses!2sar"
  iframe_contact.style.border = "0";
  iframe_contact.style.height = "60%";
  iframe_contact.style.width = "100%";
  iframe_contact.style.borderRadius  = "10px";

  map_contact.appendChild(p_contact);
  map_contact.appendChild(iframe_contact);

  main_conteiner_contact.appendChild(map_contact);
  contact.appendChild(main_conteiner_contact);
  
  return contact
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_img_thorGordo_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/img/thorGordo.jpg */ "./src/assets/img/thorGordo.jpg");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/index.js");







function createHome () {
  
 
  const main = document.querySelector("main");
  main.innerText = "";
  main.innerHTML = "";
  const body = document.querySelector("body");
  main.classList.add("main_home");

  const main_conteiner = document.createElement("div");
  main_conteiner.classList.add("main_conteiner");

  const main_cont_p = document.createElement("p");
  const main_cont_span = document.createElement("span");
  const lineBreak = document.createElement("br");
  main_cont_span.classList.add("table");
  main_cont_span.innerHTML = lineBreak.outerHTML + "Book a table." 
  main_cont_p.innerHTML = "Come here to survive the winter! Share with the best of us"  + 
  main_cont_span.outerHTML + "<br>";
  const thorGordoJpg = new Image;
  thorGordoJpg.src = _assets_img_thorGordo_jpg__WEBPACK_IMPORTED_MODULE_1__;

  main_conteiner.appendChild(main_cont_p);
  main_conteiner.appendChild(thorGordoJpg);
  main.appendChild(main_conteiner)

  const bttn_home = document.getElementById("home");
  console.log(bttn_home);
  bttn_home.classList.add("active_bttn");
  
  body.appendChild(main);
  body.appendChild((0,_index__WEBPACK_IMPORTED_MODULE_2__["default"])());
  
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_icons_horn_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/icons/horn (1).png */ "./src/assets/icons/horn (1).png");
/* harmony import */ var _assets_icons_house_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/icons/house.png */ "./src/assets/icons/house.png");
/* harmony import */ var _assets_icons_netflix_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/icons/netflix.png */ "./src/assets/icons/netflix.png");
/* harmony import */ var _assets_icons_instagram_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/icons/instagram.png */ "./src/assets/icons/instagram.png");
/* harmony import */ var _assets_icons_youtube_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/icons/youtube.png */ "./src/assets/icons/youtube.png");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");










function createHeader() {
    console.log("hola");
    const header = document.createElement('header');
    const header_div = document.createElement('div');
    header_div.classList.add("header-div");
    const header_div_icons = document.createElement('div');
    header_div_icons.classList.add("header-icons");
    
    const hornIc = new Image();
    hornIc.src = _assets_icons_horn_1_png__WEBPACK_IMPORTED_MODULE_1__;

    const tavernIc = new Image();
    tavernIc.src = _assets_icons_house_png__WEBPACK_IMPORTED_MODULE_2__;

    header_div_icons.appendChild(hornIc);
    header_div_icons.appendChild(tavernIc);
    header_div.appendChild(header_div_icons);
    header.appendChild(header_div);

    const header_div2 = document.createElement("div");
    header_div2.classList.add("header-div");
    header_div2.classList.add("header-nav");

    const bttn_home = document.createElement("button");
    bttn_home.innerText = "Home";
    bttn_home.classList.add("nav-btn-option");
    bttn_home.setAttribute("id", "home")
    bttn_home.addEventListener("click", (e) => {
      if (e.target.classList.contains("active_bttn")) return;
      bttn_home.classList.add("active_bttn");
      bttn_contact.classList.remove("active_bttn");
      (0,_home__WEBPACK_IMPORTED_MODULE_6__["default"])();
    })
    const bttn_menu = document.createElement("button");
    bttn_menu.innerText ="Menu";
    bttn_menu.classList.add("nav-btn-option")
    bttn_menu.setAttribute("id", "menu")
    const bttn_contact = document.createElement("button");
    bttn_contact.innerText = "Contact";
    bttn_contact.classList.add("nav-btn-option");
    bttn_contact.setAttribute("id", "contact");
    bttn_contact.addEventListener("click", (e) => {
      if (e.target.classList.contains("active_bttn")) return;
      bttn_contact.classList.add("active_bttn");
      bttn_home.classList.remove("active_bttn");
      (0,_contact_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
    })
    header_div2.appendChild(bttn_home);
    header_div2.appendChild(bttn_menu);
    header_div2.appendChild(bttn_contact);
    header.appendChild(header_div2);


    const header_div3 = document.createElement("div");
    header_div3.classList.add("header-div");
    header_div3.classList.add("resto-name");
    const spanGold = document.createElement("span");
    spanGold.classList.add("golden");
    spanGold.innerText = "'s";
    header_div3.innerHTML = "Odin" + spanGold.outerHTML + "&nbsp;INN"
    header.appendChild(header_div3);
    return header;
}

function createFooter() {
  const footer = document.createElement("footer");

  const div_network = document.createElement("div");
  div_network.classList.add("footer-div", "footer-network");
  const follow_us = document.createElement("p");
  follow_us.innerHTML = "Follow us."

  div_network.appendChild(follow_us);

  const div_network_icon = document.createElement("div");
  div_network_icon.classList.add("footer-icons");
  
  /* Iconos redes sociales */
  const netflixIc = new Image
  netflixIc.src = _assets_icons_netflix_png__WEBPACK_IMPORTED_MODULE_3__;
  const instaIc = new Image
  instaIc.src = _assets_icons_instagram_png__WEBPACK_IMPORTED_MODULE_4__;
  const youtubeIc = new Image
  youtubeIc.src = _assets_icons_youtube_png__WEBPACK_IMPORTED_MODULE_5__;

   /* Links redes sociales */
  const netflixLink = document.createElement("a");
  netflixLink.href = "https://www.netflix.com/es/title/70301870"
  netflixLink.appendChild(netflixIc);
  const instaLink = document.createElement("a");
  instaLink.href = "https://www.instagram.com/historyvikings/"
  instaLink.appendChild(instaIc);
  const youtubeLink = document.createElement("a");
  youtubeLink.href = "https://www.youtube.com/watch?v=MLJyFzdQfK8"
  youtubeLink.appendChild(youtubeIc);

  div_network_icon.appendChild(netflixLink);
  div_network_icon.appendChild(instaLink);
  div_network_icon.appendChild(youtubeLink);

  div_network.appendChild(div_network_icon);
  footer.appendChild(div_network);


  /* Main footer */

  const div_footer_main = document.createElement("div");
  div_footer_main.classList.add("footer-div", "footer-main");

  footer.appendChild(div_footer_main);


  /* Ubicación footer */

  const div_ubicacion_main = document.createElement("div");
  div_ubicacion_main.classList.add("footer-div","footer-ubicacion");

  const div_ubicacion_mapDiv = document.createElement("div");
  div_ubicacion_mapDiv.classList.add("mapDiv");

  const p_adress_footer = document.createElement("p");
  p_adress_footer.innerText = "Norway - Brattvåghallen";

  const iframe_footer = document.createElement("iframe");
  iframe_footer.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1836.434499000145!2d6.435674546126612!3d62.59480821191866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4616cc11ac28981b%3A0xdb24d40557a00562!2sBrattv%C3%A5ghallen!5e0!3m2!1ses!2sar!4v1645987104391!5m2!1ses!2sar"
  iframe_footer.style.border = "0";
  iframe_footer.style.height = "15vh";
  iframe_footer.style.width = "13vw";
  iframe_footer.style.borderRadius  = "4px";

  div_ubicacion_mapDiv.appendChild(p_adress_footer);
  div_ubicacion_mapDiv.appendChild(iframe_footer);
  div_ubicacion_main.appendChild(div_ubicacion_mapDiv);
  footer.appendChild(div_ubicacion_main);
  return footer;
}

function createMain() {
  const main = document.createElement("main");
  document.body.appendChild(main);
}
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFooter);

  document.body.appendChild(createHeader());
  createMain();
  (0,_home__WEBPACK_IMPORTED_MODULE_6__["default"])();


/***/ }),

/***/ "./src/assets/icons/horn (1).png":
/*!***************************************!*\
  !*** ./src/assets/icons/horn (1).png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/icons/horn (1).png";

/***/ }),

/***/ "./src/assets/icons/house.png":
/*!************************************!*\
  !*** ./src/assets/icons/house.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/icons/house.png";

/***/ }),

/***/ "./src/assets/icons/instagram.png":
/*!****************************************!*\
  !*** ./src/assets/icons/instagram.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/icons/instagram.png";

/***/ }),

/***/ "./src/assets/icons/netflix.png":
/*!**************************************!*\
  !*** ./src/assets/icons/netflix.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/icons/netflix.png";

/***/ }),

/***/ "./src/assets/icons/youtube.png":
/*!**************************************!*\
  !*** ./src/assets/icons/youtube.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/icons/youtube.png";

/***/ }),

/***/ "./src/assets/img/thorGordo.jpg":
/*!**************************************!*\
  !*** ./src/assets/img/thorGordo.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/img/thorGordo.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2dDO0FBQ0k7QUFDSjs7O0FBR3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQSxrQkFBa0Isc0RBQVc7QUFDN0I7QUFDQSxnQkFBZ0Isd0RBQWE7QUFDN0I7QUFDQSxrQkFBa0Isc0RBQVc7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25HUDtBQUM4QjtBQUNoQjs7Ozs7QUFLbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0RBQVM7O0FBRTlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtEQUFZO0FBQy9CO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDSjtBQUM4QjtBQUNEO0FBQ0c7QUFDSTtBQUNKO0FBQ3JCO0FBQ1E7OztBQUd4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIscURBQVE7O0FBRXpCO0FBQ0EsbUJBQW1CLG9EQUFVOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0saURBQVU7QUFDaEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sdURBQWE7QUFDbkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUU7QUFDakU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixzREFBVztBQUM3QjtBQUNBLGdCQUFnQix3REFBYTtBQUM3QjtBQUNBLGtCQUFrQixzREFBVzs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGlFQUFlLFlBQVksRUFBQzs7QUFFOUI7QUFDQTtBQUNBLEVBQUUsaURBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzSlo7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFZkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0by1vZGluLXByb3RlaW5zLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzP2UzMjAiLCJ3ZWJwYWNrOi8vcmVzdG8tb2Rpbi1wcm90ZWlucy1wcm9qZWN0Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdG8tb2Rpbi1wcm90ZWlucy1wcm9qZWN0Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdG8tb2Rpbi1wcm90ZWlucy1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RvLW9kaW4tcHJvdGVpbnMtcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0by1vZGluLXByb3RlaW5zLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RvLW9kaW4tcHJvdGVpbnMtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RvLW9kaW4tcHJvdGVpbnMtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RvLW9kaW4tcHJvdGVpbnMtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RvLW9kaW4tcHJvdGVpbnMtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0by1vZGluLXByb3RlaW5zLXByb2plY3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0by1vZGluLXByb3RlaW5zLXByb2plY3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3RvLW9kaW4tcHJvdGVpbnMtcHJvamVjdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgbmV0ZmxpeEljb24gZnJvbSAnLi9hc3NldHMvaWNvbnMvbmV0ZmxpeC5wbmcnO1xuaW1wb3J0IGluc3RhZ3JhbUljb24gZnJvbSAnLi9hc3NldHMvaWNvbnMvaW5zdGFncmFtLnBuZyc7XG5pbXBvcnQgeW91dHViZUljb24gZnJvbSAnLi9hc3NldHMvaWNvbnMveW91dHViZS5wbmcnO1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QgKCkge1xuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gIGNvbnRhY3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvb3RlclwiKTtcbiAgZm9vdGVyLnJlbW92ZSgpO1xuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJtYWluX2NvbnRhY3RcIik7XG5cbiAgY29uc3QgbWFpbl9jb250ZWluZXJfY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5fY29udGVpbmVyX2NvbnRhY3QuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RfY29udGVpbmVyXCIpO1xuXG5cbiAgY29uc3QgbWFpbl9jb250ZWluZXJfaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5fY29udGVpbmVyX2luZm8uY2xhc3NMaXN0LmFkZChcImluZm9fY29udGFjdFwiKTtcblxuXG4gIGNvbnN0IGNvbnRhY3Rfc29jaWFsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhY3Rfc29jaWFsMS5jbGFzc0xpc3QuYWRkKFwiYm94LXNvY2lhbFwiKTtcblxuICBjb25zdCBjb250YWN0X3NvY2lhbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWN0X3NvY2lhbDIuY2xhc3NMaXN0LmFkZChcImJveC1zb2NpYWxcIik7XG5cbiAgY29uc3QgY29udGFjdF9zb2NpYWwzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFjdF9zb2NpYWwzLmNsYXNzTGlzdC5hZGQoXCJib3gtc29jaWFsXCIpO1xuXG5cbiAgY29uc3QgbmV0ZmxpeEljID0gbmV3IEltYWdlXG4gIG5ldGZsaXhJYy5zcmMgPSBuZXRmbGl4SWNvbjtcbiAgY29uc3QgaW5zdGFJYyA9IG5ldyBJbWFnZVxuICBpbnN0YUljLnNyYyA9IGluc3RhZ3JhbUljb247XG4gIGNvbnN0IHlvdXR1YmVJYyA9IG5ldyBJbWFnZVxuICB5b3V0dWJlSWMuc3JjID0geW91dHViZUljb247XG4gXG4gIGNvbnN0IG5ldGZsaXhMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIG5ldGZsaXhMaW5rLmhyZWYgPSBcImh0dHBzOi8vd3d3Lm5ldGZsaXguY29tL2VzL3RpdGxlLzcwMzAxODcwXCJcbiAgbmV0ZmxpeExpbmsuYXBwZW5kQ2hpbGQobmV0ZmxpeEljKTtcbiAgY29uc3QgcF9uZXRmbGl4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBfbmV0ZmxpeC5pbm5lclRleHQgPSBcIk5ldGZsaXggLSBUViBTSE9XXCI7XG5cbiAgY29udGFjdF9zb2NpYWwxLmFwcGVuZENoaWxkKG5ldGZsaXhMaW5rKTtcbiAgY29udGFjdF9zb2NpYWwxLmFwcGVuZENoaWxkKHBfbmV0ZmxpeCk7XG5cbiAgY29uc3QgaW5zdGFMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGluc3RhTGluay5ocmVmID0gXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2hpc3Rvcnl2aWtpbmdzL1wiXG4gIGluc3RhTGluay5hcHBlbmRDaGlsZChpbnN0YUljKTtcbiAgY29uc3QgcF9pbnN0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwX2luc3RhLmlubmVyVGV4dCA9IFwiQEhpc3Rvcnl2aWtpbmdzXCI7XG5cbiAgY29udGFjdF9zb2NpYWwyLmFwcGVuZENoaWxkKGluc3RhTGluayk7XG4gIGNvbnRhY3Rfc29jaWFsMi5hcHBlbmRDaGlsZChwX2luc3RhKTtcblxuICBwX2luc3RhLmlubmVyVGV4dCA9IFwiQEhpc3Rvcnl2aWtpbmdzXCI7XG4gIGNvbnN0IHlvdXR1YmVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIHlvdXR1YmVMaW5rLmhyZWYgPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9TUxKeUZ6ZFFmSzhcIlxuICB5b3V0dWJlTGluay5hcHBlbmRDaGlsZCh5b3V0dWJlSWMpO1xuICBjb25zdCBwX3lvdXR1YmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcF95b3V0dWJlLmlubmVyVGV4dCA9IFwiVmlraW5nIENoYW5uZWxcIjtcblxuICBjb250YWN0X3NvY2lhbDMuYXBwZW5kQ2hpbGQoeW91dHViZUxpbmspO1xuICBjb250YWN0X3NvY2lhbDMuYXBwZW5kQ2hpbGQocF95b3V0dWJlKTtcbiAgbWFpbl9jb250ZWluZXJfaW5mby5hcHBlbmRDaGlsZChjb250YWN0X3NvY2lhbDEpO1xuICBtYWluX2NvbnRlaW5lcl9pbmZvLmFwcGVuZENoaWxkKGNvbnRhY3Rfc29jaWFsMik7XG4gIG1haW5fY29udGVpbmVyX2luZm8uYXBwZW5kQ2hpbGQoY29udGFjdF9zb2NpYWwzKTtcblxuICBtYWluX2NvbnRlaW5lcl9jb250YWN0LmFwcGVuZENoaWxkKG1haW5fY29udGVpbmVyX2luZm8pO1xuXG5cbiAgY29uc3QgYnR0bl9jb250YWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0XCIpO1xuICBjb25zb2xlLmxvZyhidHRuX2NvbnRhY3QpO1xuICBidHRuX2NvbnRhY3QuY2xhc3NMaXN0LmFkZChcImFjdGl2ZV9idHRuXCIpO1xuXG5cbiAgY29uc3QgbWFwX2NvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYXBfY29udGFjdC5jbGFzc0xpc3QuYWRkKFwibWFwX2NvbnRhY3RcIik7XG4gIFxuICBjb25zdCBwX2NvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcF9jb250YWN0LmlubmVyVGV4dCA9IFwiRGFsZXZlZ2VuIDYyNzAsIDYyNzAgQnJhdHR2w6VnLCBOb3J1ZWdhXCI7XG5cbiAgY29uc3QgaWZyYW1lX2NvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICBpZnJhbWVfY29udGFjdC5zcmMgPSBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xNCExbTghMW0zITFkMTQ2OTIuMDI0NTY1ODM0ODYzITJkNi40MzUxNTUhM2Q2Mi41OTM2OTkwMDAwMDAwMSEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHgwJTNBMHhkYjI0ZDQwNTU3YTAwNTYyITJzQnJhdHR2JUMzJUE1Z2hhbGxlbiE1ZTAhM20yITFzZXMhMnNhciE0djE2NDYwNjkwOTAxMzghNW0yITFzZXMhMnNhclwiXG4gIGlmcmFtZV9jb250YWN0LnN0eWxlLmJvcmRlciA9IFwiMFwiO1xuICBpZnJhbWVfY29udGFjdC5zdHlsZS5oZWlnaHQgPSBcIjYwJVwiO1xuICBpZnJhbWVfY29udGFjdC5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICBpZnJhbWVfY29udGFjdC5zdHlsZS5ib3JkZXJSYWRpdXMgID0gXCIxMHB4XCI7XG5cbiAgbWFwX2NvbnRhY3QuYXBwZW5kQ2hpbGQocF9jb250YWN0KTtcbiAgbWFwX2NvbnRhY3QuYXBwZW5kQ2hpbGQoaWZyYW1lX2NvbnRhY3QpO1xuXG4gIG1haW5fY29udGVpbmVyX2NvbnRhY3QuYXBwZW5kQ2hpbGQobWFwX2NvbnRhY3QpO1xuICBjb250YWN0LmFwcGVuZENoaWxkKG1haW5fY29udGVpbmVyX2NvbnRhY3QpO1xuICBcbiAgcmV0dXJuIGNvbnRhY3Rcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB0aG9yR29yZG8gZnJvbSAnLi9hc3NldHMvaW1nL3Rob3JHb3Jkby5qcGcnO1xuaW1wb3J0IGNyZWF0ZUZvb3RlciBmcm9tICcuL2luZGV4JztcblxuXG5cblxuZnVuY3Rpb24gY3JlYXRlSG9tZSAoKSB7XG4gIFxuIFxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gIG1haW4uaW5uZXJUZXh0ID0gXCJcIjtcbiAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5faG9tZVwiKTtcblxuICBjb25zdCBtYWluX2NvbnRlaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5fY29udGVpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluX2NvbnRlaW5lclwiKTtcblxuICBjb25zdCBtYWluX2NvbnRfcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBtYWluX2NvbnRfc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCBsaW5lQnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XG4gIG1haW5fY29udF9zcGFuLmNsYXNzTGlzdC5hZGQoXCJ0YWJsZVwiKTtcbiAgbWFpbl9jb250X3NwYW4uaW5uZXJIVE1MID0gbGluZUJyZWFrLm91dGVySFRNTCArIFwiQm9vayBhIHRhYmxlLlwiIFxuICBtYWluX2NvbnRfcC5pbm5lckhUTUwgPSBcIkNvbWUgaGVyZSB0byBzdXJ2aXZlIHRoZSB3aW50ZXIhIFNoYXJlIHdpdGggdGhlIGJlc3Qgb2YgdXNcIiAgKyBcbiAgbWFpbl9jb250X3NwYW4ub3V0ZXJIVE1MICsgXCI8YnI+XCI7XG4gIGNvbnN0IHRob3JHb3Jkb0pwZyA9IG5ldyBJbWFnZTtcbiAgdGhvckdvcmRvSnBnLnNyYyA9IHRob3JHb3JkbztcblxuICBtYWluX2NvbnRlaW5lci5hcHBlbmRDaGlsZChtYWluX2NvbnRfcCk7XG4gIG1haW5fY29udGVpbmVyLmFwcGVuZENoaWxkKHRob3JHb3Jkb0pwZyk7XG4gIG1haW4uYXBwZW5kQ2hpbGQobWFpbl9jb250ZWluZXIpXG5cbiAgY29uc3QgYnR0bl9ob21lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpO1xuICBjb25zb2xlLmxvZyhidHRuX2hvbWUpO1xuICBidHRuX2hvbWUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZV9idHRuXCIpO1xuICBcbiAgYm9keS5hcHBlbmRDaGlsZChtYWluKTtcbiAgYm9keS5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGhvcm5JY29uIGZyb20gJy4vYXNzZXRzL2ljb25zL2hvcm4gKDEpLnBuZyc7XG5pbXBvcnQgdGF2ZXJuSWNvbiBmcm9tICcuL2Fzc2V0cy9pY29ucy9ob3VzZS5wbmcnO1xuaW1wb3J0IG5ldGZsaXhJY29uIGZyb20gJy4vYXNzZXRzL2ljb25zL25ldGZsaXgucG5nJztcbmltcG9ydCBpbnN0YWdyYW1JY29uIGZyb20gJy4vYXNzZXRzL2ljb25zL2luc3RhZ3JhbS5wbmcnO1xuaW1wb3J0IHlvdXR1YmVJY29uIGZyb20gJy4vYXNzZXRzL2ljb25zL3lvdXR1YmUucG5nJztcbmltcG9ydCBjcmVhdGVIb21lIGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgY3JlYXRlQ29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnXG5cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKFwiaG9sYVwiKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBjb25zdCBoZWFkZXJfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyX2Rpdi5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLWRpdlwiKTtcbiAgICBjb25zdCBoZWFkZXJfZGl2X2ljb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyX2Rpdl9pY29ucy5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLWljb25zXCIpO1xuICAgIFxuICAgIGNvbnN0IGhvcm5JYyA9IG5ldyBJbWFnZSgpO1xuICAgIGhvcm5JYy5zcmMgPSBob3JuSWNvbjtcblxuICAgIGNvbnN0IHRhdmVybkljID0gbmV3IEltYWdlKCk7XG4gICAgdGF2ZXJuSWMuc3JjID0gdGF2ZXJuSWNvbjtcblxuICAgIGhlYWRlcl9kaXZfaWNvbnMuYXBwZW5kQ2hpbGQoaG9ybkljKTtcbiAgICBoZWFkZXJfZGl2X2ljb25zLmFwcGVuZENoaWxkKHRhdmVybkljKTtcbiAgICBoZWFkZXJfZGl2LmFwcGVuZENoaWxkKGhlYWRlcl9kaXZfaWNvbnMpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJfZGl2KTtcblxuICAgIGNvbnN0IGhlYWRlcl9kaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJfZGl2Mi5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLWRpdlwiKTtcbiAgICBoZWFkZXJfZGl2Mi5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLW5hdlwiKTtcblxuICAgIGNvbnN0IGJ0dG5faG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnR0bl9ob21lLmlubmVyVGV4dCA9IFwiSG9tZVwiO1xuICAgIGJ0dG5faG9tZS5jbGFzc0xpc3QuYWRkKFwibmF2LWJ0bi1vcHRpb25cIik7XG4gICAgYnR0bl9ob21lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZVwiKVxuICAgIGJ0dG5faG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVfYnR0blwiKSkgcmV0dXJuO1xuICAgICAgYnR0bl9ob21lLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVfYnR0blwiKTtcbiAgICAgIGJ0dG5fY29udGFjdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlX2J0dG5cIik7XG4gICAgICBjcmVhdGVIb21lKCk7XG4gICAgfSlcbiAgICBjb25zdCBidHRuX21lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0dG5fbWVudS5pbm5lclRleHQgPVwiTWVudVwiO1xuICAgIGJ0dG5fbWVudS5jbGFzc0xpc3QuYWRkKFwibmF2LWJ0bi1vcHRpb25cIilcbiAgICBidHRuX21lbnUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51XCIpXG4gICAgY29uc3QgYnR0bl9jb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidHRuX2NvbnRhY3QuaW5uZXJUZXh0ID0gXCJDb250YWN0XCI7XG4gICAgYnR0bl9jb250YWN0LmNsYXNzTGlzdC5hZGQoXCJuYXYtYnRuLW9wdGlvblwiKTtcbiAgICBidHRuX2NvbnRhY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0XCIpO1xuICAgIGJ0dG5fY29udGFjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVfYnR0blwiKSkgcmV0dXJuO1xuICAgICAgYnR0bl9jb250YWN0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVfYnR0blwiKTtcbiAgICAgIGJ0dG5faG9tZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlX2J0dG5cIik7XG4gICAgICBjcmVhdGVDb250YWN0KCk7XG4gICAgfSlcbiAgICBoZWFkZXJfZGl2Mi5hcHBlbmRDaGlsZChidHRuX2hvbWUpO1xuICAgIGhlYWRlcl9kaXYyLmFwcGVuZENoaWxkKGJ0dG5fbWVudSk7XG4gICAgaGVhZGVyX2RpdjIuYXBwZW5kQ2hpbGQoYnR0bl9jb250YWN0KTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyX2RpdjIpO1xuXG5cbiAgICBjb25zdCBoZWFkZXJfZGl2MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyX2RpdjMuY2xhc3NMaXN0LmFkZChcImhlYWRlci1kaXZcIik7XG4gICAgaGVhZGVyX2RpdjMuY2xhc3NMaXN0LmFkZChcInJlc3RvLW5hbWVcIik7XG4gICAgY29uc3Qgc3BhbkdvbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzcGFuR29sZC5jbGFzc0xpc3QuYWRkKFwiZ29sZGVuXCIpO1xuICAgIHNwYW5Hb2xkLmlubmVyVGV4dCA9IFwiJ3NcIjtcbiAgICBoZWFkZXJfZGl2My5pbm5lckhUTUwgPSBcIk9kaW5cIiArIHNwYW5Hb2xkLm91dGVySFRNTCArIFwiJm5ic3A7SU5OXCJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyX2RpdjMpO1xuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcblxuICBjb25zdCBkaXZfbmV0d29yayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdl9uZXR3b3JrLmNsYXNzTGlzdC5hZGQoXCJmb290ZXItZGl2XCIsIFwiZm9vdGVyLW5ldHdvcmtcIik7XG4gIGNvbnN0IGZvbGxvd191cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBmb2xsb3dfdXMuaW5uZXJIVE1MID0gXCJGb2xsb3cgdXMuXCJcblxuICBkaXZfbmV0d29yay5hcHBlbmRDaGlsZChmb2xsb3dfdXMpO1xuXG4gIGNvbnN0IGRpdl9uZXR3b3JrX2ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXZfbmV0d29ya19pY29uLmNsYXNzTGlzdC5hZGQoXCJmb290ZXItaWNvbnNcIik7XG4gIFxuICAvKiBJY29ub3MgcmVkZXMgc29jaWFsZXMgKi9cbiAgY29uc3QgbmV0ZmxpeEljID0gbmV3IEltYWdlXG4gIG5ldGZsaXhJYy5zcmMgPSBuZXRmbGl4SWNvbjtcbiAgY29uc3QgaW5zdGFJYyA9IG5ldyBJbWFnZVxuICBpbnN0YUljLnNyYyA9IGluc3RhZ3JhbUljb247XG4gIGNvbnN0IHlvdXR1YmVJYyA9IG5ldyBJbWFnZVxuICB5b3V0dWJlSWMuc3JjID0geW91dHViZUljb247XG5cbiAgIC8qIExpbmtzIHJlZGVzIHNvY2lhbGVzICovXG4gIGNvbnN0IG5ldGZsaXhMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIG5ldGZsaXhMaW5rLmhyZWYgPSBcImh0dHBzOi8vd3d3Lm5ldGZsaXguY29tL2VzL3RpdGxlLzcwMzAxODcwXCJcbiAgbmV0ZmxpeExpbmsuYXBwZW5kQ2hpbGQobmV0ZmxpeEljKTtcbiAgY29uc3QgaW5zdGFMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGluc3RhTGluay5ocmVmID0gXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2hpc3Rvcnl2aWtpbmdzL1wiXG4gIGluc3RhTGluay5hcHBlbmRDaGlsZChpbnN0YUljKTtcbiAgY29uc3QgeW91dHViZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgeW91dHViZUxpbmsuaHJlZiA9IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1NTEp5RnpkUWZLOFwiXG4gIHlvdXR1YmVMaW5rLmFwcGVuZENoaWxkKHlvdXR1YmVJYyk7XG5cbiAgZGl2X25ldHdvcmtfaWNvbi5hcHBlbmRDaGlsZChuZXRmbGl4TGluayk7XG4gIGRpdl9uZXR3b3JrX2ljb24uYXBwZW5kQ2hpbGQoaW5zdGFMaW5rKTtcbiAgZGl2X25ldHdvcmtfaWNvbi5hcHBlbmRDaGlsZCh5b3V0dWJlTGluayk7XG5cbiAgZGl2X25ldHdvcmsuYXBwZW5kQ2hpbGQoZGl2X25ldHdvcmtfaWNvbik7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChkaXZfbmV0d29yayk7XG5cblxuICAvKiBNYWluIGZvb3RlciAqL1xuXG4gIGNvbnN0IGRpdl9mb290ZXJfbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdl9mb290ZXJfbWFpbi5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyLWRpdlwiLCBcImZvb3Rlci1tYWluXCIpO1xuXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChkaXZfZm9vdGVyX21haW4pO1xuXG5cbiAgLyogVWJpY2FjacOzbiBmb290ZXIgKi9cblxuICBjb25zdCBkaXZfdWJpY2FjaW9uX21haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXZfdWJpY2FjaW9uX21haW4uY2xhc3NMaXN0LmFkZChcImZvb3Rlci1kaXZcIixcImZvb3Rlci11YmljYWNpb25cIik7XG5cbiAgY29uc3QgZGl2X3ViaWNhY2lvbl9tYXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXZfdWJpY2FjaW9uX21hcERpdi5jbGFzc0xpc3QuYWRkKFwibWFwRGl2XCIpO1xuXG4gIGNvbnN0IHBfYWRyZXNzX2Zvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwX2FkcmVzc19mb290ZXIuaW5uZXJUZXh0ID0gXCJOb3J3YXkgLSBCcmF0dHbDpWdoYWxsZW5cIjtcblxuICBjb25zdCBpZnJhbWVfZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgaWZyYW1lX2Zvb3Rlci5zcmMgPSBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDE4MzYuNDM0NDk5MDAwMTQ1ITJkNi40MzU2NzQ1NDYxMjY2MTIhM2Q2Mi41OTQ4MDgyMTE5MTg2NiEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4NDYxNmNjMTFhYzI4OTgxYiUzQTB4ZGIyNGQ0MDU1N2EwMDU2MiEyc0JyYXR0diVDMyVBNWdoYWxsZW4hNWUwITNtMiExc2VzITJzYXIhNHYxNjQ1OTg3MTA0MzkxITVtMiExc2VzITJzYXJcIlxuICBpZnJhbWVfZm9vdGVyLnN0eWxlLmJvcmRlciA9IFwiMFwiO1xuICBpZnJhbWVfZm9vdGVyLnN0eWxlLmhlaWdodCA9IFwiMTV2aFwiO1xuICBpZnJhbWVfZm9vdGVyLnN0eWxlLndpZHRoID0gXCIxM3Z3XCI7XG4gIGlmcmFtZV9mb290ZXIuc3R5bGUuYm9yZGVyUmFkaXVzICA9IFwiNHB4XCI7XG5cbiAgZGl2X3ViaWNhY2lvbl9tYXBEaXYuYXBwZW5kQ2hpbGQocF9hZHJlc3NfZm9vdGVyKTtcbiAgZGl2X3ViaWNhY2lvbl9tYXBEaXYuYXBwZW5kQ2hpbGQoaWZyYW1lX2Zvb3Rlcik7XG4gIGRpdl91YmljYWNpb25fbWFpbi5hcHBlbmRDaGlsZChkaXZfdWJpY2FjaW9uX21hcERpdik7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChkaXZfdWJpY2FjaW9uX21haW4pO1xuICByZXR1cm4gZm9vdGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG59XG4gIGV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvb3RlcjtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgY3JlYXRlTWFpbigpO1xuICBjcmVhdGVIb21lKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==