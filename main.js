/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   deleteCard: () => (/* binding */ deleteCard),\n/* harmony export */   toggleLike: () => (/* binding */ toggleLike)\n/* harmony export */ });\nfunction createCard(cardData, deleteCallback, likeCallback, openImagePopup) {\n  var cardTemplate = document.querySelector(\"#card-template\").content.querySelector(\".card\");\n  var cardElement = cardTemplate.cloneNode(true);\n  var cardImage = cardElement.querySelector(\".card__image\");\n  var cardTitle = cardElement.querySelector(\".card__title\");\n  var deleteButton = cardElement.querySelector(\".card__delete-button\");\n  var likeButton = cardElement.querySelector(\".card__like-button\");\n  cardImage.src = cardData.link;\n  cardImage.alt = cardData.name;\n  cardTitle.textContent = cardData.name;\n  deleteButton.addEventListener(\"click\", function () {\n    return deleteCallback(cardElement);\n  });\n  likeButton.addEventListener(\"click\", function () {\n    return likeCallback(likeButton);\n  });\n  cardImage.addEventListener(\"click\", function () {\n    return openImagePopup(cardData);\n  });\n  return cardElement;\n}\nfunction deleteCard(cardElement) {\n  cardElement.remove();\n}\nfunction toggleLike(likeButton) {\n  likeButton.classList.toggle(\"card__like-button_is-active\");\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/card.js?");

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\nfunction openModal(popup) {\n  popup.classList.add(\"popup_is-opened\");\n  function handleEscClose(event) {\n    if (event.key === \"Escape\") {\n      closeModal(popup);\n    }\n  }\n  popup.handleEscClose = handleEscClose;\n  document.addEventListener(\"keydown\", handleEscClose);\n}\nfunction closeModal(popup) {\n  popup.classList.remove(\"popup_is-opened\");\n  if (popup.handleEscClose) {\n    document.removeEventListener(\"keydown\", popup.handleEscClose);\n    delete popup.handleEscClose;\n  }\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/modal.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/card.js */ \"./src/components/card.js\");\n/* harmony import */ var _components_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/modal.js */ \"./src/components/modal.js\");\n/* harmony import */ var _scripts_cards_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/cards.js */ \"./src/scripts/cards.js\");\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/index.css */ \"./src/pages/index.css\");\n\n\n\nvar placesList = document.querySelector(\".places__list\");\nvar popupEdit = document.querySelector(\".popup_type_edit\");\nvar popupNewCard = document.querySelector(\".popup_type_new-card\");\nvar popupImage = document.querySelector(\".popup_type_image\");\nvar editButton = document.querySelector(\".profile__edit-button\");\nvar addButton = document.querySelector(\".profile__add-button\");\nvar nameInput = popupEdit.querySelector(\".popup__input_type_name\");\nvar jobInput = popupEdit.querySelector(\".popup__input_type_description\");\nvar profileTitle = document.querySelector(\".profile__title\");\nvar profileDescription = document.querySelector(\".profile__description\");\nvar formEditProfile = popupEdit.querySelector(\".popup__form\");\nvar formNewCard = popupNewCard.querySelector(\".popup__form\");\nvar cardNameInput = popupNewCard.querySelector(\".popup__input_type_card-name\");\nvar cardLinkInput = popupNewCard.querySelector(\".popup__input_type_url\");\nvar popupImgElement = popupImage.querySelector(\".popup__image\");\nvar popupCaption = popupImage.querySelector(\".popup__caption\");\nfunction openImagePopup(cardData) {\n  popupImgElement.src = cardData.link;\n  popupImgElement.alt = cardData.name;\n  popupCaption.textContent = cardData.name;\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_1__.openModal)(popupImage);\n}\nfunction handleProfileFormSubmit(evt) {\n  evt.preventDefault();\n  profileTitle.textContent = nameInput.value;\n  profileDescription.textContent = jobInput.value;\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_1__.closeModal)(popupEdit);\n}\nformEditProfile.addEventListener(\"submit\", handleProfileFormSubmit);\nfunction handleNewCardSubmit(evt) {\n  evt.preventDefault();\n  var newCardData = {\n    name: cardNameInput.value,\n    link: cardLinkInput.value\n  };\n  var newCard = (0,_components_card_js__WEBPACK_IMPORTED_MODULE_0__.createCard)(newCardData, _components_card_js__WEBPACK_IMPORTED_MODULE_0__.deleteCard, _components_card_js__WEBPACK_IMPORTED_MODULE_0__.toggleLike, openImagePopup);\n  placesList.prepend(newCard);\n  formNewCard.reset();\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_1__.closeModal)(popupNewCard);\n}\nformNewCard.addEventListener(\"submit\", handleNewCardSubmit);\neditButton.addEventListener(\"click\", function () {\n  nameInput.value = profileTitle.textContent;\n  jobInput.value = profileDescription.textContent;\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_1__.openModal)(popupEdit);\n});\naddButton.addEventListener(\"click\", function () {\n  return (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_1__.openModal)(popupNewCard);\n});\ndocument.querySelectorAll(\".popup__close\").forEach(function (closeButton) {\n  closeButton.addEventListener(\"click\", function (event) {\n    (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_1__.closeModal)(event.target.closest(\".popup\"));\n  });\n});\ndocument.querySelectorAll(\".popup\").forEach(function (popup) {\n  popup.addEventListener(\"click\", function (event) {\n    if (event.target === popup) {\n      (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_1__.closeModal)(popup);\n    }\n  });\n});\nfunction renderCards() {\n  _scripts_cards_js__WEBPACK_IMPORTED_MODULE_2__.initialCards.forEach(function (cardData) {\n    var cardElement = (0,_components_card_js__WEBPACK_IMPORTED_MODULE_0__.createCard)(cardData, _components_card_js__WEBPACK_IMPORTED_MODULE_0__.deleteCard, _components_card_js__WEBPACK_IMPORTED_MODULE_0__.toggleLike, openImagePopup);\n    placesList.appendChild(cardElement);\n  });\n}\ndocument.addEventListener(\"DOMContentLoaded\", renderCards);\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/index.js?");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/pages/index.css?");

/***/ }),

/***/ "./src/scripts/cards.js":
/*!******************************!*\
  !*** ./src/scripts/cards.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialCards: () => (/* binding */ initialCards)\n/* harmony export */ });\nvar initialCards = [{\n  name: \"Архыз\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg\"\n}, {\n  name: \"Челябинская область\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg\"\n}, {\n  name: \"Иваново\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg\"\n}, {\n  name: \"Камчатка\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg\"\n}, {\n  name: \"Холмогорский район\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg\"\n}, {\n  name: \"Байкал\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg\"\n}];\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/cards.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;