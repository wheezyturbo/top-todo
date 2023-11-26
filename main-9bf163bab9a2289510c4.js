"use strict";
(self["webpackChunktop_todo"] = self["webpackChunktop_todo"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* General Styling */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #121212;
    color: #fff;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows:1fr 10fr;
    height:100vh;
  }
  
  .container {
    display: grid;
    grid-template-columns: 250px auto 250px;
    grid-template-rows: auto 1fr auto;
    gap: 10px;
    height: 100vh;
  }
  
  .header {
    grid-column: 1 / -1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #212121;
    padding: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .header button {
    background-color: transparent;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    padding: 8px 16px;
    transition: background-color 0.3s ease;
  }
  
  .header button:hover {
    background-color: #444;
  }
  
  .sidebar {
    grid-row: 2 / span 2;
    background-color: #333;
    padding: 10px;
    box-shadow: 4px 0 6px rgba(0, 0, 0, 0.1);
  }
  
  .project-card {
    padding: 8px;
    margin-bottom: 8px;
    cursor: pointer;
    color: #fff;
    background-color: #444;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  
  .project-card:hover {
    background-color: #555;
  }
  
  .add-project-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    margin-bottom: 16px;
    border-radius: 5px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  
  .add-project-button:hover {
    background-color: #0056b3;
  }
  
  .main {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    background-color: #121212;
    padding: 20px;
    overflow-y: auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .todo-card {
    background-color: #444;
    padding: 20px;
    border-radius: 8px;
    color: #fff;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2),
                -4px -4px 8px rgba(255, 255, 255, 0.05);
  }
  
  .todo-card h3 {
    margin-top: 0;
    font-weight: bold;
  }
  
  .todo-card p {
    margin-bottom: 8px;
  }
  
  .todo-card button {
    background-color: #007bff;
    border: none;
    color: #fff;
    cursor: pointer;
    padding: 5px 10px;
    margin-right: 5px;
    border-radius: 5px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  
  .todo-card button:hover {
    background-color: #0056b3;
  }
  
  .add-todo-btn {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 24px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2),
                -4px -4px 8px rgba(255, 255, 255, 0.05);
    animation-name:twirl;
    animation-duration:.5s;
    
  }
  @keyframes twirl {
    from {transform: translateX(20px) rotate(180deg);}
    to{transform: translateX(0px) rotate(0deg);}
  }


  .add-todo-btn:hover {
    background-color: #0056b3;
  }
  
  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.8);
  }
  
  .modal-content {
    display: grid;
    background-color: #333;
    margin: 20% auto;
    padding: 20px;
    width: 60%;
    border-radius: 8px;
    position: relative;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2),
                -4px -4px 8px rgba(255, 255, 255, 0.05);
  }
  
  .close {
    position: absolute;
    top: 5px;
    right: 10px;
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
  }
  
  .close:hover {
    color: #ff4444;
  }
  input {
	background: transparent;
	color: white;
	caret-color: white;
	padding: 20px 50px;
	border-radius: 20px;
	outline: none;
	border: 1px solid gray;
	margin: 10px 0;
	font-size: 1rem;
}         

button{
    background: gray;
    color:white;
    justify-self:center;
    padding:10px 20px;
    border-radius: 8px;
    border:none;
    font-weight:bold;
    font-size:1rem;
}



.edit-todo-form {
    background-color: #333;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2),
                -4px -4px 8px rgba(255, 255, 255, 0.05);
  }
  
  .edit-todo-form label {
    display: block;
    margin-bottom: 5px;
    color: #fff;
  }
  
  .edit-todo-form input[type="text"],
  .edit-todo-form textarea,
  .edit-todo-form input[type="date"],
  .edit-todo-form input[type="number"] {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #444;
    color: #fff;
  }
  
  .edit-todo-form input[type="text"]:focus,
  .edit-todo-form textarea:focus,
  .edit-todo-form input[type="date"]:focus,
  .edit-todo-form input[type="number"]:focus {
    outline: none;
    border-color: #007bff;
  }
  
  .edit-todo-form button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 5px;
    margin-right: 10px;
  }
  
  .edit-todo-form button:hover {
    background-color: #0056b3;
  }


  .low{
    border-bottom:10px solid green;
  }
  .medium{
    border-bottom:10px solid yellow;
  }
  .high{
    border-bottom:10px solid red;
  }


  .todo-cards {
	gap: 22px;
	display: flex;
	flex-direction: column;
}

.project-card{
    font-weight:bold;
    font-family: "poppins";
}

@keyframes lightning {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  20% {
    opacity: 1;
    background: linear-gradient(90deg, transparent, rgba(129, 211, 7, 0.2));
  }
  40% {
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
    /* background: transparent; */
  }
}
.active-project{
  border-bottom:5px solid cadetblue;
  animation: lightning 0.5s ease-out forwards;}

.completed {
	filter: brightness(0.5) grayscale();
}



.project-card {
	display: grid;
	justify-content: space-between;
	grid-template-columns: 1fr 5fr 1fr;
}

.project-card span:nth-child(2){
  justify-self: center;
}

.project-card span:nth-child(2):hover{
  color:red;
}



#priorities {
	background: transparent;
	color: white;
	caret-color: white;
	padding: 20px 50px;
	border-radius: 20px;
	outline: none;
	border: 1px solid gray;
	margin: 10px 0;
	font-size: 1rem;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* General Styling */\nbody {\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    margin: 0;\n    padding: 0;\n    background-color: #121212;\n    color: #fff;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows:1fr 10fr;\n    height:100vh;\n  }\n  \n  .container {\n    display: grid;\n    grid-template-columns: 250px auto 250px;\n    grid-template-rows: auto 1fr auto;\n    gap: 10px;\n    height: 100vh;\n  }\n  \n  .header {\n    grid-column: 1 / -1;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #212121;\n    padding: 10px;\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  }\n  \n  .header button {\n    background-color: transparent;\n    border: none;\n    color: #fff;\n    cursor: pointer;\n    font-size: 16px;\n    padding: 8px 16px;\n    transition: background-color 0.3s ease;\n  }\n  \n  .header button:hover {\n    background-color: #444;\n  }\n  \n  .sidebar {\n    grid-row: 2 / span 2;\n    background-color: #333;\n    padding: 10px;\n    box-shadow: 4px 0 6px rgba(0, 0, 0, 0.1);\n  }\n  \n  .project-card {\n    padding: 8px;\n    margin-bottom: 8px;\n    cursor: pointer;\n    color: #fff;\n    background-color: #444;\n    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n  }\n  \n  .project-card:hover {\n    background-color: #555;\n  }\n  \n  .add-project-button {\n    background-color: #007bff;\n    color: #fff;\n    border: none;\n    padding: 8px 16px;\n    cursor: pointer;\n    margin-bottom: 16px;\n    border-radius: 5px;\n    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n  }\n  \n  .add-project-button:hover {\n    background-color: #0056b3;\n  }\n  \n  .main {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n    background-color: #121212;\n    padding: 20px;\n    overflow-y: auto;\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  }\n  \n  .todo-card {\n    background-color: #444;\n    padding: 20px;\n    border-radius: 8px;\n    color: #fff;\n    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2),\n                -4px -4px 8px rgba(255, 255, 255, 0.05);\n  }\n  \n  .todo-card h3 {\n    margin-top: 0;\n    font-weight: bold;\n  }\n  \n  .todo-card p {\n    margin-bottom: 8px;\n  }\n  \n  .todo-card button {\n    background-color: #007bff;\n    border: none;\n    color: #fff;\n    cursor: pointer;\n    padding: 5px 10px;\n    margin-right: 5px;\n    border-radius: 5px;\n    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n  }\n  \n  .todo-card button:hover {\n    background-color: #0056b3;\n  }\n  \n  .add-todo-btn {\n    background-color: #007bff;\n    color: #fff;\n    border: none;\n    border-radius: 50%;\n    width: 50px;\n    height: 50px;\n    font-size: 24px;\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    cursor: pointer;\n    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2),\n                -4px -4px 8px rgba(255, 255, 255, 0.05);\n    animation-name:twirl;\n    animation-duration:.5s;\n    \n  }\n  @keyframes twirl {\n    from {transform: translateX(20px) rotate(180deg);}\n    to{transform: translateX(0px) rotate(0deg);}\n  }\n\n\n  .add-todo-btn:hover {\n    background-color: #0056b3;\n  }\n  \n  .modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.8);\n  }\n  \n  .modal-content {\n    display: grid;\n    background-color: #333;\n    margin: 20% auto;\n    padding: 20px;\n    width: 60%;\n    border-radius: 8px;\n    position: relative;\n    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2),\n                -4px -4px 8px rgba(255, 255, 255, 0.05);\n  }\n  \n  .close {\n    position: absolute;\n    top: 5px;\n    right: 10px;\n    background-color: transparent;\n    border: none;\n    color: #fff;\n    font-size: 20px;\n    cursor: pointer;\n  }\n  \n  .close:hover {\n    color: #ff4444;\n  }\n  input {\n\tbackground: transparent;\n\tcolor: white;\n\tcaret-color: white;\n\tpadding: 20px 50px;\n\tborder-radius: 20px;\n\toutline: none;\n\tborder: 1px solid gray;\n\tmargin: 10px 0;\n\tfont-size: 1rem;\n}         \n\nbutton{\n    background: gray;\n    color:white;\n    justify-self:center;\n    padding:10px 20px;\n    border-radius: 8px;\n    border:none;\n    font-weight:bold;\n    font-size:1rem;\n}\n\n\n\n.edit-todo-form {\n    background-color: #333;\n    padding: 20px;\n    border-radius: 8px;\n    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2),\n                -4px -4px 8px rgba(255, 255, 255, 0.05);\n  }\n  \n  .edit-todo-form label {\n    display: block;\n    margin-bottom: 5px;\n    color: #fff;\n  }\n  \n  .edit-todo-form input[type=\"text\"],\n  .edit-todo-form textarea,\n  .edit-todo-form input[type=\"date\"],\n  .edit-todo-form input[type=\"number\"] {\n    width: 100%;\n    padding: 8px;\n    margin-bottom: 10px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    background-color: #444;\n    color: #fff;\n  }\n  \n  .edit-todo-form input[type=\"text\"]:focus,\n  .edit-todo-form textarea:focus,\n  .edit-todo-form input[type=\"date\"]:focus,\n  .edit-todo-form input[type=\"number\"]:focus {\n    outline: none;\n    border-color: #007bff;\n  }\n  \n  .edit-todo-form button {\n    background-color: #007bff;\n    color: #fff;\n    border: none;\n    padding: 8px 16px;\n    cursor: pointer;\n    border-radius: 5px;\n    margin-right: 10px;\n  }\n  \n  .edit-todo-form button:hover {\n    background-color: #0056b3;\n  }\n\n\n  .low{\n    border-bottom:10px solid green;\n  }\n  .medium{\n    border-bottom:10px solid yellow;\n  }\n  .high{\n    border-bottom:10px solid red;\n  }\n\n\n  .todo-cards {\n\tgap: 22px;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.project-card{\n    font-weight:bold;\n    font-family: \"poppins\";\n}\n\n@keyframes lightning {\n  0% {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  20% {\n    opacity: 1;\n    background: linear-gradient(90deg, transparent, rgba(129, 211, 7, 0.2));\n  }\n  40% {\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n    /* background: transparent; */\n  }\n}\n.active-project{\n  border-bottom:5px solid cadetblue;\n  animation: lightning 0.5s ease-out forwards;}\n\n.completed {\n\tfilter: brightness(0.5) grayscale();\n}\n\n\n\n.project-card {\n\tdisplay: grid;\n\tjustify-content: space-between;\n\tgrid-template-columns: 1fr 5fr 1fr;\n}\n\n.project-card span:nth-child(2){\n  justify-self: center;\n}\n\n.project-card span:nth-child(2):hover{\n  color:red;\n}\n\n\n\n#priorities {\n\tbackground: transparent;\n\tcolor: white;\n\tcaret-color: white;\n\tpadding: 20px 50px;\n\tborder-radius: 20px;\n\toutline: none;\n\tborder: 1px solid gray;\n\tmargin: 10px 0;\n\tfont-size: 1rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/AddTodoButton/AddTodoButton.js":
/*!*******************************************************!*\
  !*** ./src/components/AddTodoButton/AddTodoButton.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddTodoButton)
/* harmony export */ });
/* harmony import */ var _core_Todo_Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Todo/Todo */ "./src/core/Todo/Todo.js");
/* harmony import */ var _core_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/app */ "./src/core/app.js");
/* harmony import */ var _core_render_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/render/render */ "./src/core/render/render.js");




// Function to create and append elements
function createAndAppend(parent, elementType, className, textContent,type=null) {
  const element = document.createElement(elementType);
  if (className) {
    element.classList.add(className);
  }
  if (textContent) {
    element.textContent = textContent;
  }
  if(type){
    element.type = type;
  }
  parent.appendChild(element);
  return element;
}

// Function to show the modal
function showModal() {
  console.log(_core_app__WEBPACK_IMPORTED_MODULE_1__["default"].currentPage);
  if (_core_app__WEBPACK_IMPORTED_MODULE_1__["default"].currentPage == "home") {
    alert("Click on a project to add a new todo!");
    return;
  }
  if(document.getElementById('todoModal')){
    const modal = document.getElementById('todoModal');
    modal.style.display=="none"?modal.style.display="block":modal.style.display="none";
    return;
  }
  const modal = createAndAppend(document.body, "div", "modal", "");
  modal.id = "todoModal";

  const modalContent = createAndAppend(modal, "div", "modal-content", "");

  createAndAppend(modalContent, "button", "close", "X").addEventListener(
    "click",
    () => {
      modal.style.display = "none";
    }
  );
  const titleLabel = document.createElement('label');
  titleLabel.textContent="Title: ";
  modalContent.appendChild(titleLabel);
  createAndAppend(modalContent, "input", "", "").id = "titleInput";
  const descriptionLabel = document.createElement('label');
  descriptionLabel.textContent="Description: ";
  modalContent.appendChild(descriptionLabel);
  createAndAppend(modalContent, "input", "", "").id = "descriptionInput";
  const dueDateLabel = document.createElement('label');
  dueDateLabel.textContent="Due Date:";
  modalContent.appendChild(dueDateLabel);
  createAndAppend(modalContent, "input", "", "","date").id = "dateInput";
  // createAndAppend(modalContent, "input", "", "").id = "priorityInput";

  const priorityLabel = document.createElement('label');
  priorityLabel.textContent="Priority:";
  modalContent.appendChild(priorityLabel);

  const priorityDropDown = document.createElement('select');
  priorityDropDown.name = "priorities";
  priorityDropDown.id = "priorities";
  const priorities = ["low","medium","high"];
  priorities.forEach(p=>{
    const option = document.createElement('option');
    option.textContent = p;
    option.value = p;
    priorityDropDown.appendChild(option);
  })

  modalContent.appendChild(priorityDropDown);


  const addTodoBtn = createAndAppend(modalContent, "button", "", "Add Todo");
  addTodoBtn.id = "addTodoBtn";
  addTodoBtn.addEventListener("click", () => {

    const title = document.getElementById("titleInput").value;
    const description = document.getElementById("descriptionInput").value;
    const date = document.getElementById("dateInput").value;
    // const priority = document.getElementById("priorityInput").value;
    const priority = document.getElementById("priorities").value;

    // Adding the todo to the current project
    _core_app__WEBPACK_IMPORTED_MODULE_1__["default"].projects.forEach((project) => {
      if (project.title === _core_app__WEBPACK_IMPORTED_MODULE_1__["default"].currentPage) {
        project.addTodo(new _core_Todo_Todo__WEBPACK_IMPORTED_MODULE_0__["default"](title, description, date, priority));
        (0,_core_render_render__WEBPACK_IMPORTED_MODULE_2__["default"])();
      }
    });

    modal.style.display = "none";
  });

  modal.style.display = "block";
}

function AddTodoButton() {
  const button = createAndAppend(document.body, "button", "add-todo-btn", "+");
  button.addEventListener("click", showModal);
  return button;
}


/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var _core_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/app */ "./src/core/app.js");
/* harmony import */ var _core_render_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/render/render */ "./src/core/render/render.js");



function header() {
  const headerContainer = document.createElement("div");
  headerContainer.classList.add("header");

  const todayTab = document.createElement("button");
  todayTab.textContent = "Today";
  todayTab.addEventListener("click", () => {
    // Handle logic for "Today" tab click
  });

  const thisWeekTab = document.createElement("button");
  thisWeekTab.textContent = "This Week";
  thisWeekTab.addEventListener("click", () => {
    // Handle logic for "This Week" tab click
  });

  const allTodosTab = document.createElement("button");
  allTodosTab.textContent = "All Todos";
  allTodosTab.addEventListener("click", () => {
    // Handle logic for "All Todos" tab click
    _core_app__WEBPACK_IMPORTED_MODULE_0__["default"].currentPage="home";
    allTodosTab.classList.add('active');
    (0,_core_render_render__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });

  headerContainer.appendChild(todayTab);
  headerContainer.appendChild(thisWeekTab);
  headerContainer.appendChild(allTodosTab);

  // Append the header to a container in your HTML (assuming 'app' is a container)
  return headerContainer;
}


/***/ }),

/***/ "./src/components/Main/Main.js":
/*!*************************************!*\
  !*** ./src/components/Main/Main.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var _core_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/app */ "./src/core/app.js");
/* harmony import */ var _core_render_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/render/render */ "./src/core/render/render.js");



function Main() {
  const main = document.createElement("main");
  main.classList.add("main");
  const cards = document.createElement("div");
  cards.classList.add("todo-cards");
  if(_core_app__WEBPACK_IMPORTED_MODULE_0__["default"].currentPage==null){
    _core_app__WEBPACK_IMPORTED_MODULE_0__["default"].currentPage="home";
  }
  _core_app__WEBPACK_IMPORTED_MODULE_0__["default"].projects.forEach((project, projectIndex) => {
    if (_core_app__WEBPACK_IMPORTED_MODULE_0__["default"].currentPage == "home") {
      const h2 = document.createElement("h2");
      h2.textContent = project.title;
      cards.append(h2);
      project.todos.forEach((todo, index) => {
        const card = createTodoCard(todo, index, projectIndex);
        cards.appendChild(card);
      });
    } else if (_core_app__WEBPACK_IMPORTED_MODULE_0__["default"].currentPage == project.title) {
      const h2 = document.createElement("h2");
      h2.textContent = project.title;
      cards.append(h2);
      project.todos.forEach((todo, index) => {
        const card = createTodoCard(todo, index, projectIndex);
        cards.appendChild(card);
      });
    }
    main.appendChild(cards);
  });

  main.appendChild(cards);
  return main;
}

function createTodoCard(todo, index, projectIndex) {
  const card = document.createElement("div");
  card.classList.add("todo-card");
  card.classList.add(`${todo.priority}`);

  if(todo.isCompleted){
    card.classList.add('completed');
  }
  else{
    card.classList.remove('completed');
  }
  // card.innerHTML = `
  //       <h3>${index}</h3>
  //       <input type = "checkbox">
  //       <h3>${todo.name}</h3>
  //       <p>${todo.date}</p>
  //       <button>Edit</button>
  //       <button>Delete</button>
  //   `;

  card.setAttribute("data-todo-index", index);
  card.setAttribute("data-project-index", projectIndex);

  const h3 = document.createElement("h3");
  h3.textContent = index;
  const input = document.createElement("input");
  input.type = "checkbox";
  if (todo.isCompleted == true) {
    console.log(input.checked);
    input.checked = true;
  }

  input.addEventListener("click", (e) => {
    // const todo = app.projects[projectIndex].todos[index];
    // todo.isCompleted = todo.isCompleted == true ? false : true;
    if (todo.isCompleted) {
      todo.setCompleted(false);
    } else {
      todo.setCompleted(true);
    }
    // e.target.parentNode.classList.toggle("completed");
    (0,_core_render_render__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });

  const name = document.createElement("h3");
  name.textContent = todo.name;
  const date = document.createElement("p");
  date.textContent = todo.dueDate;
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";

  editBtn.addEventListener("click", (e) => {
    console.log(e.target.parentNode.getAttribute("data-todo-index"));
    document.body.appendChild(todoDetailsView(todo, index, projectIndex));
  });
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", (e) => {
    const projectIndex = e.target.parentNode.getAttribute("data-project-index");
    const todoIndex = e.target.parentNode.getAttribute("data-todo-index");
    console.log(e.target.parentNode);
    _core_app__WEBPACK_IMPORTED_MODULE_0__["default"].projects[projectIndex].removeTodo(todoIndex);
    (0,_core_render_render__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });

  card.appendChild(h3);
  card.appendChild(input);
  card.appendChild(name);
  card.appendChild(date);
  card.appendChild(editBtn);
  card.appendChild(deleteBtn);

  return card;
}

function todoDetailsView(todo, index, projectIndex) {
  const div = document.createElement("div");
  div.classList.add("todo-details-view");
  const form = document.createElement("form");
  form.classList.add("edit-todo-form");
  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Title: ";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.value = todo.name;
  const descriptionLabel = document.createElement("label");
  descriptionLabel.textContent = "Description: ";
  const descriptionInput = document.createElement("textarea");
  descriptionInput.value = todo.description;
  const dateLabel = document.createElement("label");
  dateLabel.textContent = "Date: ";

  const dateValue = new Date(todo.dueDate);
  const day = ("0" + dateValue.getDate()).slice(-2);
  const month = ("0" + (dateValue.getMonth() + 1)).slice(-2);
  const value = dateValue.getFullYear() + "-" + month + "-" + day;
  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.value = value;

  const priorityLabel = document.createElement("label");
  priorityLabel.textContent = "Priority: ";

  const priorityInput = document.createElement('select');
  priorityInput.name = "priorities";
  priorityInput.id = "priorities";
  const priorities = ["low","medium","high"];
  priorities.forEach(p=>{
    const option = document.createElement('option');
    option.textContent = p;
    option.value = p;
    priorityInput.appendChild(option);
  })
  priorityInput.value = todo.priority;



  const change = document.createElement("button");
  change.textContent = "Change";

  change.addEventListener("click", () => {
    _core_app__WEBPACK_IMPORTED_MODULE_0__["default"].projects[projectIndex].todos[index].setTitle(nameInput.value);
    _core_app__WEBPACK_IMPORTED_MODULE_0__["default"].projects[projectIndex].todos[index].setDescription(
      descriptionInput.value
    );
    _core_app__WEBPACK_IMPORTED_MODULE_0__["default"].projects[projectIndex].todos[index].setDueDate(dateInput.value);
    _core_app__WEBPACK_IMPORTED_MODULE_0__["default"].projects[projectIndex].todos[index].setPriority(priorityInput.value);
    (0,_core_render_render__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });

  const close = document.createElement("button");
  close.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.removeChild(document.querySelector(".todo-details-view"));
  });
  close.textContent = "Close";

  form.appendChild(nameLabel);
  form.appendChild(nameInput);
  form.appendChild(descriptionLabel);
  form.appendChild(descriptionInput);
  form.appendChild(dateLabel);
  form.appendChild(dateInput);
  form.appendChild(priorityLabel);
  form.appendChild(priorityInput);
  form.appendChild(change);
  form.appendChild(close);

  div.appendChild(form);

  return div;
}


/***/ }),

/***/ "./src/components/SideBar/SideBar.js":
/*!*******************************************!*\
  !*** ./src/components/SideBar/SideBar.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sidebar)
/* harmony export */ });
/* harmony import */ var _core_Project_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Project/Project */ "./src/core/Project/Project.js");
/* harmony import */ var _core_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/app */ "./src/core/app.js");
/* harmony import */ var _core_render_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/render/render */ "./src/core/render/render.js");




function sidebar() {
  const sidebar = document.createElement("aside");
  sidebar.classList.add("sidebar");
  const addProjectBtnContainer = document.createElement("div");
  const addProjectBtn = document.createElement("button");
  addProjectBtn.textContent = "Add Project +";
  addProjectBtn.classList.add("add-project-button");
  addProjectBtn.addEventListener("click", () => {
    const input = document.createElement("input");
    input.placeholder = "Enter a new Project Name";
    const close = document.createElement("button");
    close.textContent = "X";
    const button = document.createElement("button");
    button.textContent = "Add";
    button.addEventListener("click", () => {
      _core_app__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(new _core_Project_Project__WEBPACK_IMPORTED_MODULE_0__["default"](input.value));
      addProjectBtnContainer.innerHTML = "";
      addProjectBtnContainer.appendChild(addProjectBtn);
      _core_app__WEBPACK_IMPORTED_MODULE_1__["default"].currentPage = input.value;
      (0,_core_render_render__WEBPACK_IMPORTED_MODULE_2__["default"])();
    });
    close.addEventListener("click", () => {
      addProjectBtnContainer.innerHTML = "";
      addProjectBtnContainer.appendChild(addProjectBtn);
    });
    addProjectBtnContainer.innerHTML = "";
    addProjectBtnContainer.appendChild(input);
    addProjectBtnContainer.appendChild(button);
    addProjectBtnContainer.appendChild(close);
  });
  addProjectBtnContainer.appendChild(addProjectBtn);
  sidebar.appendChild(addProjectBtnContainer);

  const projectCards = document.createElement("div");
  projectCards.classList.add("project-cards-div");
  _core_app__WEBPACK_IMPORTED_MODULE_1__["default"].projects.forEach((project,index) => {
    projectCards.appendChild(createProjectCard(project,index));
  });
  sidebar.appendChild(projectCards);
  return sidebar;
}

function createProjectCard(project,index) {
  const card = document.createElement("div");
  card.classList.add("project-card");
  card.setAttribute('data-project-index',index);
  if (_core_app__WEBPACK_IMPORTED_MODULE_1__["default"].currentPage == project.title) {
    // card.classList.add("active");
    card.classList.add("active-project");
  }
  const span = document.createElement('span');
  span.id = "span";

  span.textContent = project.title;
  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", (e) => {
    const projectIndex = e.target.parentNode.getAttribute('data-project-index');
    _core_app__WEBPACK_IMPORTED_MODULE_1__["default"].projects.splice(projectIndex,1);
    _core_app__WEBPACK_IMPORTED_MODULE_1__["default"].currentPage="home";
    (0,_core_render_render__WEBPACK_IMPORTED_MODULE_2__["default"])();
  });
  span.addEventListener("click", () => {
    _core_app__WEBPACK_IMPORTED_MODULE_1__["default"].currentPage = project.title;
    (0,_core_render_render__WEBPACK_IMPORTED_MODULE_2__["default"])();
  });


  const edit = document.createElement('span');
  edit.textContent = "🖍️";

  edit.addEventListener('click',(e)=>{
    document.getElementById('span').contentEditable = true;
    edit.innerHTML = "";
    edit.innerHTML = "<button>/</button>";
  })

  card.appendChild(edit);
  card.appendChild(span);
  card.appendChild(deleteBtn);
  return card;
}


/***/ }),

/***/ "./src/core/Project/Project.js":
/*!*************************************!*\
  !*** ./src/core/Project/Project.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
    constructor(title) {
      this.title = title;
      this.todos = [];
    }
  
    addTodo(todo) {
      this.todos.push(todo);
    }
    setTodoCompleted(index) {
        this.todos[index].setTodoCompleted(true);
    }
    removeTodo(index) {
        this.todos.splice(index,1);
    }
    Todos() {
        return this.todos;
    }
  }


/***/ }),

/***/ "./src/core/Todo/Todo.js":
/*!*******************************!*\
  !*** ./src/core/Todo/Todo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
  constructor(name, description, date, priority) {
    // this.name = name;
    // this.description = description;
    // this.date = date;
    // this.priority = priority;
    // this.isCompleted = false;
    this.setTitle(name);
    this.setDescription(description);
    this.setDueDate(date);
    this.setPriority(priority?priority:"low");
    this.setCompleted(false);

  }
  setTitle(name) {
    this.name = name;
  }
  setDescription(description) {
    this.description = description;
  }
  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }
  setPriority(priority) {
    this.priority = priority;
  }
  setCompleted(value) {
    this.isCompleted = value;
  }
}


/***/ }),

/***/ "./src/core/app.js":
/*!*************************!*\
  !*** ./src/core/app.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _Project_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project/Project */ "./src/core/Project/Project.js");


class app {
  static currentPage = "home";
  static projects = [(new _Project_Project__WEBPACK_IMPORTED_MODULE_0__["default"]("Default Project"))];
  static addProject(project){
    this.projects.push(project);
  }
  static setCurrentPage(page){
    this.currentPage = page;
  }
}



/***/ }),

/***/ "./src/core/render/render.js":
/*!***********************************!*\
  !*** ./src/core/render/render.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _components_AddTodoButton_AddTodoButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/AddTodoButton/AddTodoButton */ "./src/components/AddTodoButton/AddTodoButton.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Header/Header */ "./src/components/Header/Header.js");
/* harmony import */ var _components_Main_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Main/Main */ "./src/components/Main/Main.js");
/* harmony import */ var _components_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/SideBar/SideBar */ "./src/components/SideBar/SideBar.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app */ "./src/core/app.js");






function render(){
    const body = document.body;
    body.innerHTML = "";
    body.appendChild((0,_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"])());
    body.appendChild((0,_components_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_3__["default"])());
    body.appendChild((0,_components_Main_Main__WEBPACK_IMPORTED_MODULE_2__["default"])());
    if(_app__WEBPACK_IMPORTED_MODULE_4__["default"].currentPage!="home")body.appendChild((0,_components_AddTodoButton_AddTodoButton__WEBPACK_IMPORTED_MODULE_0__["default"])());
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_render_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/render/render */ "./src/core/render/render.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



(0,_core_render_render__WEBPACK_IMPORTED_MODULE_0__["default"])();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi05YmYxNjNiYWI5YTIyODk1MTBjNC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsT0FBTztBQUNQOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sdUZBQXVGLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssT0FBTyxhQUFhLGNBQWMsTUFBTSxLQUFLLHNCQUFzQix1QkFBdUIsUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sT0FBTyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcs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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QndDOztBQUV6QjtBQUNmO0FBQ0EsMEJBQTBCLHdEQUFPO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYeUU7QUFDckI7QUFDTjtBQUNTO0FBQzlCOztBQUVWO0FBQ2Y7QUFDQTtBQUNBLHFCQUFxQixxRUFBTTtBQUMzQixxQkFBcUIsdUVBQU87QUFDNUIscUJBQXFCLGlFQUFJO0FBQ3pCLE9BQU8sNENBQUcsc0NBQXNDLG1GQUFhO0FBQzdEOzs7Ozs7Ozs7Ozs7O0FDYjBDO0FBQ3RCOztBQUVwQiwrREFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC10b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvcC10b2RvLy4vc3JjL2NvbXBvbmVudHMvQWRkVG9kb0J1dHRvbi9BZGRUb2RvQnV0dG9uLmpzIiwid2VicGFjazovL3RvcC10b2RvLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL3NyYy9jb21wb25lbnRzL01haW4vTWFpbi5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL3NyYy9jb21wb25lbnRzL1NpZGVCYXIvU2lkZUJhci5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL3NyYy9jb3JlL1Byb2plY3QvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL3NyYy9jb3JlL1RvZG8vVG9kby5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL3NyYy9jb3JlL2FwcC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL3NyYy9jb3JlL3JlbmRlci9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEdlbmVyYWwgU3R5bGluZyAqL1xuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjFmciAxMGZyO1xuICAgIGhlaWdodDoxMDB2aDtcbiAgfVxuICBcbiAgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IGF1dG8gMjUwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xuICAgIGdhcDogMTBweDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG4gIFxuICAuaGVhZGVyIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cbiAgXG4gIC5oZWFkZXIgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbiAgfVxuICBcbiAgLmhlYWRlciBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XG4gIH1cbiAgXG4gIC5zaWRlYmFyIHtcbiAgICBncmlkLXJvdzogMiAvIHNwYW4gMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogNHB4IDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgfVxuICBcbiAgLnByb2plY3QtY2FyZCB7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIH1cbiAgXG4gIC5wcm9qZWN0LWNhcmQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gIH1cbiAgXG4gIC5hZGQtcHJvamVjdC1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIH1cbiAgXG4gIC5hZGQtcHJvamVjdC1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XG4gIH1cbiAgXG4gIC5tYWluIHtcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cbiAgXG4gIC50b2RvLWNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAgIC00cHggLTRweCA4cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbiAgfVxuICBcbiAgLnRvZG8tY2FyZCBoMyB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbiAgLnRvZG8tY2FyZCBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIH1cbiAgXG4gIC50b2RvLWNhcmQgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgfVxuICBcbiAgLnRvZG8tY2FyZCBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XG4gIH1cbiAgXG4gIC5hZGQtdG9kby1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDIwcHg7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgICAgICAtNHB4IC00cHggOHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gICAgYW5pbWF0aW9uLW5hbWU6dHdpcmw7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOi41cztcbiAgICBcbiAgfVxuICBAa2V5ZnJhbWVzIHR3aXJsIHtcbiAgICBmcm9tIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCkgcm90YXRlKDE4MGRlZyk7fVxuICAgIHRve3RyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHJvdGF0ZSgwZGVnKTt9XG4gIH1cblxuXG4gIC5hZGQtdG9kby1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XG4gIH1cbiAgXG4gIC5tb2RhbCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICB9XG4gIFxuICAubW9kYWwtY29udGVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgIG1hcmdpbjogMjAlIGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB3aWR0aDogNjAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAgIC00cHggLTRweCA4cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbiAgfVxuICBcbiAgLmNsb3NlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1cHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC5jbG9zZTpob3ZlciB7XG4gICAgY29sb3I6ICNmZjQ0NDQ7XG4gIH1cbiAgaW5wdXQge1xuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0Y29sb3I6IHdoaXRlO1xuXHRjYXJldC1jb2xvcjogd2hpdGU7XG5cdHBhZGRpbmc6IDIwcHggNTBweDtcblx0Ym9yZGVyLXJhZGl1czogMjBweDtcblx0b3V0bGluZTogbm9uZTtcblx0Ym9yZGVyOiAxcHggc29saWQgZ3JheTtcblx0bWFyZ2luOiAxMHB4IDA7XG5cdGZvbnQtc2l6ZTogMXJlbTtcbn0gICAgICAgICBcblxuYnV0dG9ue1xuICAgIGJhY2tncm91bmQ6IGdyYXk7XG4gICAgY29sb3I6d2hpdGU7XG4gICAganVzdGlmeS1zZWxmOmNlbnRlcjtcbiAgICBwYWRkaW5nOjEwcHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICBmb250LXNpemU6MXJlbTtcbn1cblxuXG5cbi5lZGl0LXRvZG8tZm9ybSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgICAgLTRweCAtNHB4IDhweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICB9XG4gIFxuICAuZWRpdC10b2RvLWZvcm0gbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLmVkaXQtdG9kby1mb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuICAuZWRpdC10b2RvLWZvcm0gdGV4dGFyZWEsXG4gIC5lZGl0LXRvZG8tZm9ybSBpbnB1dFt0eXBlPVwiZGF0ZVwiXSxcbiAgLmVkaXQtdG9kby1mb3JtIGlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIC5lZGl0LXRvZG8tZm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyxcbiAgLmVkaXQtdG9kby1mb3JtIHRleHRhcmVhOmZvY3VzLFxuICAuZWRpdC10b2RvLWZvcm0gaW5wdXRbdHlwZT1cImRhdGVcIl06Zm9jdXMsXG4gIC5lZGl0LXRvZG8tZm9ybSBpbnB1dFt0eXBlPVwibnVtYmVyXCJdOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcbiAgfVxuICBcbiAgLmVkaXQtdG9kby1mb3JtIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgXG4gIC5lZGl0LXRvZG8tZm9ybSBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XG4gIH1cblxuXG4gIC5sb3d7XG4gICAgYm9yZGVyLWJvdHRvbToxMHB4IHNvbGlkIGdyZWVuO1xuICB9XG4gIC5tZWRpdW17XG4gICAgYm9yZGVyLWJvdHRvbToxMHB4IHNvbGlkIHllbGxvdztcbiAgfVxuICAuaGlnaHtcbiAgICBib3JkZXItYm90dG9tOjEwcHggc29saWQgcmVkO1xuICB9XG5cblxuICAudG9kby1jYXJkcyB7XG5cdGdhcDogMjJweDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnByb2plY3QtY2FyZHtcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgIGZvbnQtZmFtaWx5OiBcInBvcHBpbnNcIjtcbn1cblxuQGtleWZyYW1lcyBsaWdodG5pbmcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDIwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHRyYW5zcGFyZW50LCByZ2JhKDEyOSwgMjExLCA3LCAwLjIpKTtcbiAgfVxuICA0MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLyogYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7ICovXG4gIH1cbn1cbi5hY3RpdmUtcHJvamVjdHtcbiAgYm9yZGVyLWJvdHRvbTo1cHggc29saWQgY2FkZXRibHVlO1xuICBhbmltYXRpb246IGxpZ2h0bmluZyAwLjVzIGVhc2Utb3V0IGZvcndhcmRzO31cblxuLmNvbXBsZXRlZCB7XG5cdGZpbHRlcjogYnJpZ2h0bmVzcygwLjUpIGdyYXlzY2FsZSgpO1xufVxuXG5cblxuLnByb2plY3QtY2FyZCB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDFmcjtcbn1cblxuLnByb2plY3QtY2FyZCBzcGFuOm50aC1jaGlsZCgyKXtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0LWNhcmQgc3BhbjpudGgtY2hpbGQoMik6aG92ZXJ7XG4gIGNvbG9yOnJlZDtcbn1cblxuXG5cbiNwcmlvcml0aWVzIHtcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Y2FyZXQtY29sb3I6IHdoaXRlO1xuXHRwYWRkaW5nOiAyMHB4IDUwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cdG91dGxpbmU6IG5vbmU7XG5cdGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG5cdG1hcmdpbjogMTBweCAwO1xuXHRmb250LXNpemU6IDFyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG9CQUFvQjtBQUNwQjtJQUNJLDREQUE0RDtJQUM1RCxTQUFTO0lBQ1QsVUFBVTtJQUNWLHlCQUF5QjtJ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LFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBHZW5lcmFsIFN0eWxpbmcgKi9cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czoxZnIgMTBmcjtcXG4gICAgaGVpZ2h0OjEwMHZoO1xcbiAgfVxcbiAgXFxuICAuY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCBhdXRvIDI1MHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuICAgIGdhcDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gIH1cXG4gIFxcbiAgLmhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIH1cXG4gIFxcbiAgLmhlYWRlciBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXG4gIH1cXG4gIFxcbiAgLmhlYWRlciBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xcbiAgfVxcbiAgXFxuICAuc2lkZWJhciB7XFxuICAgIGdyaWQtcm93OiAyIC8gc3BhbiAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiA0cHggMCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgfVxcbiAgXFxuICAucHJvamVjdC1jYXJkIHtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIH1cXG4gIFxcbiAgLnByb2plY3QtY2FyZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxuICB9XFxuICBcXG4gIC5hZGQtcHJvamVjdC1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIH1cXG4gIFxcbiAgLmFkZC1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XFxuICB9XFxuICBcXG4gIC5tYWluIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICB9XFxuICBcXG4gIC50b2RvLWNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMiksXFxuICAgICAgICAgICAgICAgIC00cHggLTRweCA4cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcXG4gIH1cXG4gIFxcbiAgLnRvZG8tY2FyZCBoMyB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcbiAgXFxuICAudG9kby1jYXJkIHAge1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICB9XFxuICBcXG4gIC50b2RvLWNhcmQgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgfVxcbiAgXFxuICAudG9kby1jYXJkIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XFxuICB9XFxuICBcXG4gIC5hZGQtdG9kby1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDIwcHg7XFxuICAgIHJpZ2h0OiAyMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcXG4gICAgICAgICAgICAgICAgLTRweCAtNHB4IDhweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xcbiAgICBhbmltYXRpb24tbmFtZTp0d2lybDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOi41cztcXG4gICAgXFxuICB9XFxuICBAa2V5ZnJhbWVzIHR3aXJsIHtcXG4gICAgZnJvbSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpIHJvdGF0ZSgxODBkZWcpO31cXG4gICAgdG97dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgcm90YXRlKDBkZWcpO31cXG4gIH1cXG5cXG5cXG4gIC5hZGQtdG9kby1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xcbiAgfVxcbiAgXFxuICAubW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIH1cXG4gIFxcbiAgLm1vZGFsLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICBtYXJnaW46IDIwJSBhdXRvO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpLFxcbiAgICAgICAgICAgICAgICAtNHB4IC00cHggOHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XFxuICB9XFxuICBcXG4gIC5jbG9zZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1cHg7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuICBcXG4gIC5jbG9zZTpob3ZlciB7XFxuICAgIGNvbG9yOiAjZmY0NDQ0O1xcbiAgfVxcbiAgaW5wdXQge1xcblxcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRjYXJldC1jb2xvcjogd2hpdGU7XFxuXFx0cGFkZGluZzogMjBweCA1MHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcblxcdG1hcmdpbjogMTBweCAwO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG59ICAgICAgICAgXFxuXFxuYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kOiBncmF5O1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAganVzdGlmeS1zZWxmOmNlbnRlcjtcXG4gICAgcGFkZGluZzoxMHB4IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XFxuICAgIGZvbnQtc2l6ZToxcmVtO1xcbn1cXG5cXG5cXG5cXG4uZWRpdC10b2RvLWZvcm0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcXG4gICAgICAgICAgICAgICAgLTRweCAtNHB4IDhweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xcbiAgfVxcbiAgXFxuICAuZWRpdC10b2RvLWZvcm0gbGFiZWwge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gIH1cXG4gIFxcbiAgLmVkaXQtdG9kby1mb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG4gIC5lZGl0LXRvZG8tZm9ybSB0ZXh0YXJlYSxcXG4gIC5lZGl0LXRvZG8tZm9ybSBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0sXFxuICAuZWRpdC10b2RvLWZvcm0gaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgfVxcbiAgXFxuICAuZWRpdC10b2RvLWZvcm0gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzLFxcbiAgLmVkaXQtdG9kby1mb3JtIHRleHRhcmVhOmZvY3VzLFxcbiAgLmVkaXQtdG9kby1mb3JtIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXTpmb2N1cyxcXG4gIC5lZGl0LXRvZG8tZm9ybSBpbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcXG4gIH1cXG4gIFxcbiAgLmVkaXQtdG9kby1mb3JtIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgfVxcbiAgXFxuICAuZWRpdC10b2RvLWZvcm0gYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcXG4gIH1cXG5cXG5cXG4gIC5sb3d7XFxuICAgIGJvcmRlci1ib3R0b206MTBweCBzb2xpZCBncmVlbjtcXG4gIH1cXG4gIC5tZWRpdW17XFxuICAgIGJvcmRlci1ib3R0b206MTBweCBzb2xpZCB5ZWxsb3c7XFxuICB9XFxuICAuaGlnaHtcXG4gICAgYm9yZGVyLWJvdHRvbToxMHB4IHNvbGlkIHJlZDtcXG4gIH1cXG5cXG5cXG4gIC50b2RvLWNhcmRzIHtcXG5cXHRnYXA6IDIycHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdC1jYXJke1xcbiAgICBmb250LXdlaWdodDpib2xkO1xcbiAgICBmb250LWZhbWlseTogXFxcInBvcHBpbnNcXFwiO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGxpZ2h0bmluZyB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAyMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHRyYW5zcGFyZW50LCByZ2JhKDEyOSwgMjExLCA3LCAwLjIpKTtcXG4gIH1cXG4gIDQwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAvKiBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgKi9cXG4gIH1cXG59XFxuLmFjdGl2ZS1wcm9qZWN0e1xcbiAgYm9yZGVyLWJvdHRvbTo1cHggc29saWQgY2FkZXRibHVlO1xcbiAgYW5pbWF0aW9uOiBsaWdodG5pbmcgMC41cyBlYXNlLW91dCBmb3J3YXJkczt9XFxuXFxuLmNvbXBsZXRlZCB7XFxuXFx0ZmlsdGVyOiBicmlnaHRuZXNzKDAuNSkgZ3JheXNjYWxlKCk7XFxufVxcblxcblxcblxcbi5wcm9qZWN0LWNhcmQge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAxZnI7XFxufVxcblxcbi5wcm9qZWN0LWNhcmQgc3BhbjpudGgtY2hpbGQoMil7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtY2FyZCBzcGFuOm50aC1jaGlsZCgyKTpob3ZlcntcXG4gIGNvbG9yOnJlZDtcXG59XFxuXFxuXFxuXFxuI3ByaW9yaXRpZXMge1xcblxcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRjYXJldC1jb2xvcjogd2hpdGU7XFxuXFx0cGFkZGluZzogMjBweCA1MHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcblxcdG1hcmdpbjogMTBweCAwO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBUb2RvIGZyb20gXCIuLi8uLi9jb3JlL1RvZG8vVG9kb1wiO1xuaW1wb3J0IGFwcCBmcm9tIFwiLi4vLi4vY29yZS9hcHBcIjtcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4uLy4uL2NvcmUvcmVuZGVyL3JlbmRlclwiO1xuXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUgYW5kIGFwcGVuZCBlbGVtZW50c1xuZnVuY3Rpb24gY3JlYXRlQW5kQXBwZW5kKHBhcmVudCwgZWxlbWVudFR5cGUsIGNsYXNzTmFtZSwgdGV4dENvbnRlbnQsdHlwZT1udWxsKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKTtcbiAgaWYgKGNsYXNzTmFtZSkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICB9XG4gIGlmICh0ZXh0Q29udGVudCkge1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgfVxuICBpZih0eXBlKXtcbiAgICBlbGVtZW50LnR5cGUgPSB0eXBlO1xuICB9XG4gIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIHNob3cgdGhlIG1vZGFsXG5mdW5jdGlvbiBzaG93TW9kYWwoKSB7XG4gIGNvbnNvbGUubG9nKGFwcC5jdXJyZW50UGFnZSk7XG4gIGlmIChhcHAuY3VycmVudFBhZ2UgPT0gXCJob21lXCIpIHtcbiAgICBhbGVydChcIkNsaWNrIG9uIGEgcHJvamVjdCB0byBhZGQgYSBuZXcgdG9kbyFcIik7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvTW9kYWwnKSl7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb01vZGFsJyk7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheT09XCJub25lXCI/bW9kYWwuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI6bW9kYWwuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgbW9kYWwgPSBjcmVhdGVBbmRBcHBlbmQoZG9jdW1lbnQuYm9keSwgXCJkaXZcIiwgXCJtb2RhbFwiLCBcIlwiKTtcbiAgbW9kYWwuaWQgPSBcInRvZG9Nb2RhbFwiO1xuXG4gIGNvbnN0IG1vZGFsQ29udGVudCA9IGNyZWF0ZUFuZEFwcGVuZChtb2RhbCwgXCJkaXZcIiwgXCJtb2RhbC1jb250ZW50XCIsIFwiXCIpO1xuXG4gIGNyZWF0ZUFuZEFwcGVuZChtb2RhbENvbnRlbnQsIFwiYnV0dG9uXCIsIFwiY2xvc2VcIiwgXCJYXCIpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJjbGlja1wiLFxuICAgICgpID0+IHtcbiAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gICk7XG4gIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICB0aXRsZUxhYmVsLnRleHRDb250ZW50PVwiVGl0bGU6IFwiO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gIGNyZWF0ZUFuZEFwcGVuZChtb2RhbENvbnRlbnQsIFwiaW5wdXRcIiwgXCJcIiwgXCJcIikuaWQgPSBcInRpdGxlSW5wdXRcIjtcbiAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQ9XCJEZXNjcmlwdGlvbjogXCI7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgY3JlYXRlQW5kQXBwZW5kKG1vZGFsQ29udGVudCwgXCJpbnB1dFwiLCBcIlwiLCBcIlwiKS5pZCA9IFwiZGVzY3JpcHRpb25JbnB1dFwiO1xuICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQ9XCJEdWUgRGF0ZTpcIjtcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XG4gIGNyZWF0ZUFuZEFwcGVuZChtb2RhbENvbnRlbnQsIFwiaW5wdXRcIiwgXCJcIiwgXCJcIixcImRhdGVcIikuaWQgPSBcImRhdGVJbnB1dFwiO1xuICAvLyBjcmVhdGVBbmRBcHBlbmQobW9kYWxDb250ZW50LCBcImlucHV0XCIsIFwiXCIsIFwiXCIpLmlkID0gXCJwcmlvcml0eUlucHV0XCI7XG5cbiAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQ9XCJQcmlvcml0eTpcIjtcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuXG4gIGNvbnN0IHByaW9yaXR5RHJvcERvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgcHJpb3JpdHlEcm9wRG93bi5uYW1lID0gXCJwcmlvcml0aWVzXCI7XG4gIHByaW9yaXR5RHJvcERvd24uaWQgPSBcInByaW9yaXRpZXNcIjtcbiAgY29uc3QgcHJpb3JpdGllcyA9IFtcImxvd1wiLFwibWVkaXVtXCIsXCJoaWdoXCJdO1xuICBwcmlvcml0aWVzLmZvckVhY2gocD0+e1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHA7XG4gICAgb3B0aW9uLnZhbHVlID0gcDtcbiAgICBwcmlvcml0eURyb3BEb3duLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH0pXG5cbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHByaW9yaXR5RHJvcERvd24pO1xuXG5cbiAgY29uc3QgYWRkVG9kb0J0biA9IGNyZWF0ZUFuZEFwcGVuZChtb2RhbENvbnRlbnQsIFwiYnV0dG9uXCIsIFwiXCIsIFwiQWRkIFRvZG9cIik7XG4gIGFkZFRvZG9CdG4uaWQgPSBcImFkZFRvZG9CdG5cIjtcbiAgYWRkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlSW5wdXRcIikudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uSW5wdXRcIikudmFsdWU7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZUlucHV0XCIpLnZhbHVlO1xuICAgIC8vIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eUlucHV0XCIpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0aWVzXCIpLnZhbHVlO1xuXG4gICAgLy8gQWRkaW5nIHRoZSB0b2RvIHRvIHRoZSBjdXJyZW50IHByb2plY3RcbiAgICBhcHAucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgaWYgKHByb2plY3QudGl0bGUgPT09IGFwcC5jdXJyZW50UGFnZSkge1xuICAgICAgICBwcm9qZWN0LmFkZFRvZG8obmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSkpO1xuICAgICAgICByZW5kZXIoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSk7XG5cbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkVG9kb0J1dHRvbigpIHtcbiAgY29uc3QgYnV0dG9uID0gY3JlYXRlQW5kQXBwZW5kKGRvY3VtZW50LmJvZHksIFwiYnV0dG9uXCIsIFwiYWRkLXRvZG8tYnRuXCIsIFwiK1wiKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93TW9kYWwpO1xuICByZXR1cm4gYnV0dG9uO1xufVxuIiwiaW1wb3J0IGFwcCBmcm9tIFwiLi4vLi4vY29yZS9hcHBcIjtcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4uLy4uL2NvcmUvcmVuZGVyL3JlbmRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuXG4gIGNvbnN0IHRvZGF5VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdG9kYXlUYWIudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG4gIHRvZGF5VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gSGFuZGxlIGxvZ2ljIGZvciBcIlRvZGF5XCIgdGFiIGNsaWNrXG4gIH0pO1xuXG4gIGNvbnN0IHRoaXNXZWVrVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdGhpc1dlZWtUYWIudGV4dENvbnRlbnQgPSBcIlRoaXMgV2Vla1wiO1xuICB0aGlzV2Vla1RhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vIEhhbmRsZSBsb2dpYyBmb3IgXCJUaGlzIFdlZWtcIiB0YWIgY2xpY2tcbiAgfSk7XG5cbiAgY29uc3QgYWxsVG9kb3NUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhbGxUb2Rvc1RhYi50ZXh0Q29udGVudCA9IFwiQWxsIFRvZG9zXCI7XG4gIGFsbFRvZG9zVGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gSGFuZGxlIGxvZ2ljIGZvciBcIkFsbCBUb2Rvc1wiIHRhYiBjbGlja1xuICAgIGFwcC5jdXJyZW50UGFnZT1cImhvbWVcIjtcbiAgICBhbGxUb2Rvc1RhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICByZW5kZXIoKTtcbiAgfSk7XG5cbiAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZGF5VGFiKTtcbiAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXNXZWVrVGFiKTtcbiAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGFsbFRvZG9zVGFiKTtcblxuICAvLyBBcHBlbmQgdGhlIGhlYWRlciB0byBhIGNvbnRhaW5lciBpbiB5b3VyIEhUTUwgKGFzc3VtaW5nICdhcHAnIGlzIGEgY29udGFpbmVyKVxuICByZXR1cm4gaGVhZGVyQ29udGFpbmVyO1xufVxuIiwiaW1wb3J0IGFwcCBmcm9tIFwiLi4vLi4vY29yZS9hcHBcIjtcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4uLy4uL2NvcmUvcmVuZGVyL3JlbmRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FyZHMuY2xhc3NMaXN0LmFkZChcInRvZG8tY2FyZHNcIik7XG4gIGlmKGFwcC5jdXJyZW50UGFnZT09bnVsbCl7XG4gICAgYXBwLmN1cnJlbnRQYWdlPVwiaG9tZVwiO1xuICB9XG4gIGFwcC5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBwcm9qZWN0SW5kZXgpID0+IHtcbiAgICBpZiAoYXBwLmN1cnJlbnRQYWdlID09IFwiaG9tZVwiKSB7XG4gICAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgIGgyLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICAgIGNhcmRzLmFwcGVuZChoMik7XG4gICAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBjcmVhdGVUb2RvQ2FyZCh0b2RvLCBpbmRleCwgcHJvamVjdEluZGV4KTtcbiAgICAgICAgY2FyZHMuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGFwcC5jdXJyZW50UGFnZSA9PSBwcm9qZWN0LnRpdGxlKSB7XG4gICAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgIGgyLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICAgIGNhcmRzLmFwcGVuZChoMik7XG4gICAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBjcmVhdGVUb2RvQ2FyZCh0b2RvLCBpbmRleCwgcHJvamVjdEluZGV4KTtcbiAgICAgICAgY2FyZHMuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjYXJkcyk7XG4gIH0pO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoY2FyZHMpO1xuICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kb0NhcmQodG9kbywgaW5kZXgsIHByb2plY3RJbmRleCkge1xuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FyZC5jbGFzc0xpc3QuYWRkKFwidG9kby1jYXJkXCIpO1xuICBjYXJkLmNsYXNzTGlzdC5hZGQoYCR7dG9kby5wcmlvcml0eX1gKTtcblxuICBpZih0b2RvLmlzQ29tcGxldGVkKXtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xuICB9XG4gIGVsc2V7XG4gICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQnKTtcbiAgfVxuICAvLyBjYXJkLmlubmVySFRNTCA9IGBcbiAgLy8gICAgICAgPGgzPiR7aW5kZXh9PC9oMz5cbiAgLy8gICAgICAgPGlucHV0IHR5cGUgPSBcImNoZWNrYm94XCI+XG4gIC8vICAgICAgIDxoMz4ke3RvZG8ubmFtZX08L2gzPlxuICAvLyAgICAgICA8cD4ke3RvZG8uZGF0ZX08L3A+XG4gIC8vICAgICAgIDxidXR0b24+RWRpdDwvYnV0dG9uPlxuICAvLyAgICAgICA8YnV0dG9uPkRlbGV0ZTwvYnV0dG9uPlxuICAvLyAgIGA7XG5cbiAgY2FyZC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRvZG8taW5kZXhcIiwgaW5kZXgpO1xuICBjYXJkLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pbmRleFwiLCBwcm9qZWN0SW5kZXgpO1xuXG4gIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoMy50ZXh0Q29udGVudCA9IGluZGV4O1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgaWYgKHRvZG8uaXNDb21wbGV0ZWQgPT0gdHJ1ZSkge1xuICAgIGNvbnNvbGUubG9nKGlucHV0LmNoZWNrZWQpO1xuICAgIGlucHV0LmNoZWNrZWQgPSB0cnVlO1xuICB9XG5cbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgLy8gY29uc3QgdG9kbyA9IGFwcC5wcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRvZG9zW2luZGV4XTtcbiAgICAvLyB0b2RvLmlzQ29tcGxldGVkID0gdG9kby5pc0NvbXBsZXRlZCA9PSB0cnVlID8gZmFsc2UgOiB0cnVlO1xuICAgIGlmICh0b2RvLmlzQ29tcGxldGVkKSB7XG4gICAgICB0b2RvLnNldENvbXBsZXRlZChmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvZG8uc2V0Q29tcGxldGVkKHRydWUpO1xuICAgIH1cbiAgICAvLyBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZWRcIik7XG4gICAgcmVuZGVyKCk7XG4gIH0pO1xuXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIG5hbWUudGV4dENvbnRlbnQgPSB0b2RvLm5hbWU7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcbiAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcblxuICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS10b2RvLWluZGV4XCIpKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvZG9EZXRhaWxzVmlldyh0b2RvLCBpbmRleCwgcHJvamVjdEluZGV4KSk7XG4gIH0pO1xuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuXG4gIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBlLnRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pbmRleFwiKTtcbiAgICBjb25zdCB0b2RvSW5kZXggPSBlLnRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcImRhdGEtdG9kby1pbmRleFwiKTtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5wYXJlbnROb2RlKTtcbiAgICBhcHAucHJvamVjdHNbcHJvamVjdEluZGV4XS5yZW1vdmVUb2RvKHRvZG9JbmRleCk7XG4gICAgcmVuZGVyKCk7XG4gIH0pO1xuXG4gIGNhcmQuYXBwZW5kQ2hpbGQoaDMpO1xuICBjYXJkLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgY2FyZC5hcHBlbmRDaGlsZChuYW1lKTtcbiAgY2FyZC5hcHBlbmRDaGlsZChkYXRlKTtcbiAgY2FyZC5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgY2FyZC5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gIHJldHVybiBjYXJkO1xufVxuXG5mdW5jdGlvbiB0b2RvRGV0YWlsc1ZpZXcodG9kbywgaW5kZXgsIHByb2plY3RJbmRleCkge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChcInRvZG8tZGV0YWlscy12aWV3XCIpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZChcImVkaXQtdG9kby1mb3JtXCIpO1xuICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGU6IFwiO1xuICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIG5hbWVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gIG5hbWVJbnB1dC52YWx1ZSA9IHRvZG8ubmFtZTtcbiAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246IFwiO1xuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkRhdGU6IFwiO1xuXG4gIGNvbnN0IGRhdGVWYWx1ZSA9IG5ldyBEYXRlKHRvZG8uZHVlRGF0ZSk7XG4gIGNvbnN0IGRheSA9IChcIjBcIiArIGRhdGVWYWx1ZS5nZXREYXRlKCkpLnNsaWNlKC0yKTtcbiAgY29uc3QgbW9udGggPSAoXCIwXCIgKyAoZGF0ZVZhbHVlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpO1xuICBjb25zdCB2YWx1ZSA9IGRhdGVWYWx1ZS5nZXRGdWxsWWVhcigpICsgXCItXCIgKyBtb250aCArIFwiLVwiICsgZGF5O1xuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gIGRhdGVJbnB1dC52YWx1ZSA9IHZhbHVlO1xuXG4gIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIjtcblxuICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIHByaW9yaXR5SW5wdXQubmFtZSA9IFwicHJpb3JpdGllc1wiO1xuICBwcmlvcml0eUlucHV0LmlkID0gXCJwcmlvcml0aWVzXCI7XG4gIGNvbnN0IHByaW9yaXRpZXMgPSBbXCJsb3dcIixcIm1lZGl1bVwiLFwiaGlnaFwiXTtcbiAgcHJpb3JpdGllcy5mb3JFYWNoKHA9PntcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwO1xuICAgIG9wdGlvbi52YWx1ZSA9IHA7XG4gICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9KVxuICBwcmlvcml0eUlucHV0LnZhbHVlID0gdG9kby5wcmlvcml0eTtcblxuXG5cbiAgY29uc3QgY2hhbmdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2hhbmdlLnRleHRDb250ZW50ID0gXCJDaGFuZ2VcIjtcblxuICBjaGFuZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhcHAucHJvamVjdHNbcHJvamVjdEluZGV4XS50b2Rvc1tpbmRleF0uc2V0VGl0bGUobmFtZUlucHV0LnZhbHVlKTtcbiAgICBhcHAucHJvamVjdHNbcHJvamVjdEluZGV4XS50b2Rvc1tpbmRleF0uc2V0RGVzY3JpcHRpb24oXG4gICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlXG4gICAgKTtcbiAgICBhcHAucHJvamVjdHNbcHJvamVjdEluZGV4XS50b2Rvc1tpbmRleF0uc2V0RHVlRGF0ZShkYXRlSW5wdXQudmFsdWUpO1xuICAgIGFwcC5wcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRvZG9zW2luZGV4XS5zZXRQcmlvcml0eShwcmlvcml0eUlucHV0LnZhbHVlKTtcbiAgICByZW5kZXIoKTtcbiAgfSk7XG5cbiAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZGV0YWlscy12aWV3XCIpKTtcbiAgfSk7XG4gIGNsb3NlLnRleHRDb250ZW50ID0gXCJDbG9zZVwiO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChjaGFuZ2UpO1xuICBmb3JtLmFwcGVuZENoaWxkKGNsb3NlKTtcblxuICBkaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgcmV0dXJuIGRpdjtcbn1cbiIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuLi8uLi9jb3JlL1Byb2plY3QvUHJvamVjdFwiO1xuaW1wb3J0IGFwcCBmcm9tIFwiLi4vLi4vY29yZS9hcHBcIjtcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4uLy4uL2NvcmUvcmVuZGVyL3JlbmRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaWRlYmFyKCkge1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFzaWRlXCIpO1xuICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyXCIpO1xuICBjb25zdCBhZGRQcm9qZWN0QnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0ICtcIjtcbiAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3QtYnV0dG9uXCIpO1xuICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXQucGxhY2Vob2xkZXIgPSBcIkVudGVyIGEgbmV3IFByb2plY3QgTmFtZVwiO1xuICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjbG9zZS50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGRcIjtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGFwcC5hZGRQcm9qZWN0KG5ldyBQcm9qZWN0KGlucHV0LnZhbHVlKSk7XG4gICAgICBhZGRQcm9qZWN0QnRuQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBhZGRQcm9qZWN0QnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pO1xuICAgICAgYXBwLmN1cnJlbnRQYWdlID0gaW5wdXQudmFsdWU7XG4gICAgICByZW5kZXIoKTtcbiAgICB9KTtcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgYWRkUHJvamVjdEJ0bkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgYWRkUHJvamVjdEJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnRuKTtcbiAgICB9KTtcbiAgICBhZGRQcm9qZWN0QnRuQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgYWRkUHJvamVjdEJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgYWRkUHJvamVjdEJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGFkZFByb2plY3RCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuICB9KTtcbiAgYWRkUHJvamVjdEJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnRuKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnRuQ29udGFpbmVyKTtcblxuICBjb25zdCBwcm9qZWN0Q2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0Q2FyZHMuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY2FyZHMtZGl2XCIpO1xuICBhcHAucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCxpbmRleCkgPT4ge1xuICAgIHByb2plY3RDYXJkcy5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0Q2FyZChwcm9qZWN0LGluZGV4KSk7XG4gIH0pO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RDYXJkcyk7XG4gIHJldHVybiBzaWRlYmFyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0Q2FyZChwcm9qZWN0LGluZGV4KSB7XG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNhcmRcIik7XG4gIGNhcmQuc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QtaW5kZXgnLGluZGV4KTtcbiAgaWYgKGFwcC5jdXJyZW50UGFnZSA9PSBwcm9qZWN0LnRpdGxlKSB7XG4gICAgLy8gY2FyZC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1wcm9qZWN0XCIpO1xuICB9XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNwYW4uaWQgPSBcInNwYW5cIjtcblxuICBzcGFuLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEluZGV4ID0gZS50YXJnZXQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdC1pbmRleCcpO1xuICAgIGFwcC5wcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LDEpO1xuICAgIGFwcC5jdXJyZW50UGFnZT1cImhvbWVcIjtcbiAgICByZW5kZXIoKTtcbiAgfSk7XG4gIHNwYW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhcHAuY3VycmVudFBhZ2UgPSBwcm9qZWN0LnRpdGxlO1xuICAgIHJlbmRlcigpO1xuICB9KTtcblxuXG4gIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGVkaXQudGV4dENvbnRlbnQgPSBcIvCflo3vuI9cIjtcblxuICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BhbicpLmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gICAgZWRpdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGVkaXQuaW5uZXJIVE1MID0gXCI8YnV0dG9uPi88L2J1dHRvbj5cIjtcbiAgfSlcblxuICBjYXJkLmFwcGVuZENoaWxkKGVkaXQpO1xuICBjYXJkLmFwcGVuZENoaWxkKHNwYW4pO1xuICBjYXJkLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gIHJldHVybiBjYXJkO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgIHRoaXMudG9kb3MgPSBbXTtcbiAgICB9XG4gIFxuICAgIGFkZFRvZG8odG9kbykge1xuICAgICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pO1xuICAgIH1cbiAgICBzZXRUb2RvQ29tcGxldGVkKGluZGV4KSB7XG4gICAgICAgIHRoaXMudG9kb3NbaW5kZXhdLnNldFRvZG9Db21wbGV0ZWQodHJ1ZSk7XG4gICAgfVxuICAgIHJlbW92ZVRvZG8oaW5kZXgpIHtcbiAgICAgICAgdGhpcy50b2Rvcy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgfVxuICAgIFRvZG9zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2RvcztcbiAgICB9XG4gIH1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAvLyB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIC8vIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAvLyB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIC8vIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAvLyB0aGlzLmlzQ29tcGxldGVkID0gZmFsc2U7XG4gICAgdGhpcy5zZXRUaXRsZShuYW1lKTtcbiAgICB0aGlzLnNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKTtcbiAgICB0aGlzLnNldER1ZURhdGUoZGF0ZSk7XG4gICAgdGhpcy5zZXRQcmlvcml0eShwcmlvcml0eT9wcmlvcml0eTpcImxvd1wiKTtcbiAgICB0aGlzLnNldENvbXBsZXRlZChmYWxzZSk7XG5cbiAgfVxuICBzZXRUaXRsZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuICBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxuICBzZXREdWVEYXRlKGR1ZURhdGUpIHtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICB9XG4gIHNldFByaW9yaXR5KHByaW9yaXR5KSB7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG4gIHNldENvbXBsZXRlZCh2YWx1ZSkge1xuICAgIHRoaXMuaXNDb21wbGV0ZWQgPSB2YWx1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdC9Qcm9qZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGFwcCB7XG4gIHN0YXRpYyBjdXJyZW50UGFnZSA9IFwiaG9tZVwiO1xuICBzdGF0aWMgcHJvamVjdHMgPSBbKG5ldyBQcm9qZWN0KFwiRGVmYXVsdCBQcm9qZWN0XCIpKV07XG4gIHN0YXRpYyBhZGRQcm9qZWN0KHByb2plY3Qpe1xuICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgfVxuICBzdGF0aWMgc2V0Q3VycmVudFBhZ2UocGFnZSl7XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IHBhZ2U7XG4gIH1cbn1cblxuIiwiaW1wb3J0IEFkZFRvZG9CdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQWRkVG9kb0J1dHRvbi9BZGRUb2RvQnV0dG9uXCI7XG5pbXBvcnQgaGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXJcIjtcbmltcG9ydCBNYWluIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01haW4vTWFpblwiO1xuaW1wb3J0IHNpZGViYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2lkZUJhci9TaWRlQmFyXCI7XG5pbXBvcnQgYXBwIGZyb20gXCIuLi9hcHBcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCl7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgYm9keS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKCkpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoc2lkZWJhcigpKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKE1haW4oKSk7XG4gICAgaWYoYXBwLmN1cnJlbnRQYWdlIT1cImhvbWVcIilib2R5LmFwcGVuZENoaWxkKEFkZFRvZG9CdXR0b24oKSk7XG59IiwiaW1wb3J0IHJlbmRlciBmcm9tIFwiLi9jb3JlL3JlbmRlci9yZW5kZXJcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnXG5cbnJlbmRlcigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==