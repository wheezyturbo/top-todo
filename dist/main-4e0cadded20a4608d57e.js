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


.completed {
	filter: brightness(0.5) grayscale();
}

.active-project{
  border-bottom:5px solid cadetblue;
}

.project-card {
	display: grid;
	justify-content: space-between;
	grid-template-columns: 5fr 1fr;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* General Styling */\nbody {\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    margin: 0;\n    padding: 0;\n    background-color: #121212;\n    color: #fff;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows:1fr 10fr;\n    height:100vh;\n  }\n  \n  .container {\n    display: grid;\n    grid-template-columns: 250px auto 250px;\n    grid-template-rows: auto 1fr auto;\n    gap: 10px;\n    height: 100vh;\n  }\n  \n  .header {\n    grid-column: 1 / -1;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #212121;\n    padding: 10px;\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  }\n  \n  .header button {\n    background-color: transparent;\n    border: none;\n    color: #fff;\n    cursor: pointer;\n    font-size: 16px;\n    padding: 8px 16px;\n    transition: background-color 0.3s ease;\n  }\n  \n  .header button:hover {\n    background-color: #444;\n  }\n  \n  .sidebar {\n    grid-row: 2 / span 2;\n    background-color: #333;\n    padding: 10px;\n    box-shadow: 4px 0 6px rgba(0, 0, 0, 0.1);\n  }\n  \n  .project-card {\n    padding: 8px;\n    margin-bottom: 8px;\n    cursor: pointer;\n    color: #fff;\n    background-color: #444;\n    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n  }\n  \n  .project-card:hover {\n    background-color: #555;\n  }\n  \n  .add-project-button {\n    background-color: #007bff;\n    color: #fff;\n    border: none;\n    padding: 8px 16px;\n    cursor: pointer;\n    margin-bottom: 16px;\n    border-radius: 5px;\n    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n  }\n  \n  .add-project-button:hover {\n    background-color: #0056b3;\n  }\n  \n  .main {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n    background-color: #121212;\n    padding: 20px;\n    overflow-y: auto;\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  }\n  \n  .todo-card {\n    background-color: #444;\n    padding: 20px;\n    border-radius: 8px;\n    color: #fff;\n    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2),\n                -4px -4px 8px rgba(255, 255, 255, 0.05);\n  }\n  \n  .todo-card h3 {\n    margin-top: 0;\n    font-weight: bold;\n  }\n  \n  .todo-card p {\n    margin-bottom: 8px;\n  }\n  \n  .todo-card button {\n    background-color: #007bff;\n    border: none;\n    color: #fff;\n    cursor: pointer;\n    padding: 5px 10px;\n    margin-right: 5px;\n    border-radius: 5px;\n    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n  }\n  \n  .todo-card button:hover {\n    background-color: #0056b3;\n  }\n  \n  .add-todo-btn {\n    background-color: #007bff;\n    color: #fff;\n    border: none;\n    border-radius: 50%;\n    width: 50px;\n    height: 50px;\n    font-size: 24px;\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    cursor: pointer;\n    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2),\n                -4px -4px 8px rgba(255, 255, 255, 0.05);\n  }\n  \n  .add-todo-btn:hover {\n    background-color: #0056b3;\n  }\n  \n  .modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.8);\n  }\n  \n  .modal-content {\n    display: grid;\n    background-color: #333;\n    margin: 20% auto;\n    padding: 20px;\n    width: 60%;\n    border-radius: 8px;\n    position: relative;\n    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2),\n                -4px -4px 8px rgba(255, 255, 255, 0.05);\n  }\n  \n  .close {\n    position: absolute;\n    top: 5px;\n    right: 10px;\n    background-color: transparent;\n    border: none;\n    color: #fff;\n    font-size: 20px;\n    cursor: pointer;\n  }\n  \n  .close:hover {\n    color: #ff4444;\n  }\n  input {\n\tbackground: transparent;\n\tcolor: white;\n\tcaret-color: white;\n\tpadding: 20px 50px;\n\tborder-radius: 20px;\n\toutline: none;\n\tborder: 1px solid gray;\n\tmargin: 10px 0;\n\tfont-size: 1rem;\n}         \n\nbutton{\n    background: gray;\n    color:white;\n    justify-self:center;\n    padding:10px 20px;\n    border-radius: 8px;\n    border:none;\n    font-weight:bold;\n    font-size:1rem;\n}\n\n\n\n.edit-todo-form {\n    background-color: #333;\n    padding: 20px;\n    border-radius: 8px;\n    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2),\n                -4px -4px 8px rgba(255, 255, 255, 0.05);\n  }\n  \n  .edit-todo-form label {\n    display: block;\n    margin-bottom: 5px;\n    color: #fff;\n  }\n  \n  .edit-todo-form input[type=\"text\"],\n  .edit-todo-form textarea,\n  .edit-todo-form input[type=\"date\"],\n  .edit-todo-form input[type=\"number\"] {\n    width: 100%;\n    padding: 8px;\n    margin-bottom: 10px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    background-color: #444;\n    color: #fff;\n  }\n  \n  .edit-todo-form input[type=\"text\"]:focus,\n  .edit-todo-form textarea:focus,\n  .edit-todo-form input[type=\"date\"]:focus,\n  .edit-todo-form input[type=\"number\"]:focus {\n    outline: none;\n    border-color: #007bff;\n  }\n  \n  .edit-todo-form button {\n    background-color: #007bff;\n    color: #fff;\n    border: none;\n    padding: 8px 16px;\n    cursor: pointer;\n    border-radius: 5px;\n    margin-right: 10px;\n  }\n  \n  .edit-todo-form button:hover {\n    background-color: #0056b3;\n  }\n\n\n  .low{\n    border-bottom:10px solid green;\n  }\n  .medium{\n    border-bottom:10px solid yellow;\n  }\n  .high{\n    border-bottom:10px solid red;\n  }\n\n\n  .todo-cards {\n\tgap: 22px;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.project-card{\n    font-weight:bold;\n    font-family: \"poppins\";\n}\n\n\n.completed {\n\tfilter: brightness(0.5) grayscale();\n}\n\n.active-project{\n  border-bottom:5px solid cadetblue;\n}\n\n.project-card {\n\tdisplay: grid;\n\tjustify-content: space-between;\n\tgrid-template-columns: 5fr 1fr;\n}\n\n.project-card span:nth-child(2){\n  justify-self: center;\n}\n\n.project-card span:nth-child(2):hover{\n  color:red;\n}\n\n\n\n#priorities {\n\tbackground: transparent;\n\tcolor: white;\n\tcaret-color: white;\n\tpadding: 20px 50px;\n\tborder-radius: 20px;\n\toutline: none;\n\tborder: 1px solid gray;\n\tmargin: 10px 0;\n\tfont-size: 1rem;\n}"],"sourceRoot":""}]);
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





function render(){
    const body = document.body;
    body.innerHTML = "";
    body.appendChild((0,_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"])());
    body.appendChild((0,_components_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_3__["default"])());
    body.appendChild((0,_components_Main_Main__WEBPACK_IMPORTED_MODULE_2__["default"])());
    body.appendChild((0,_components_AddTodoButton_AddTodoButton__WEBPACK_IMPORTED_MODULE_0__["default"])());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi00ZTBjYWRkZWQyMGE0NjA4ZDU3ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sdUZBQXVGLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssT0FBTyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxPQUFPLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsU0FBUyxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxRQUFRLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxRQUFRLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVks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dXJjZXMiOlsid2VicGFjazovL3RvcC10b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvcC10b2RvLy4vc3JjL2NvbXBvbmVudHMvQWRkVG9kb0J1dHRvbi9BZGRUb2RvQnV0dG9uLmpzIiwid2VicGFjazovL3RvcC10b2RvLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL3NyYy9jb21wb25lbnRzL01haW4vTWFpbi5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL3NyYy9jb21wb25lbnRzL1NpZGVCYXIvU2lkZUJhci5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL3NyYy9jb3JlL1Byb2plY3QvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL3NyYy9jb3JlL1RvZG8vVG9kby5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL3NyYy9jb3JlL2FwcC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL3NyYy9jb3JlL3JlbmRlci9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEdlbmVyYWwgU3R5bGluZyAqL1xuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjFmciAxMGZyO1xuICAgIGhlaWdodDoxMDB2aDtcbiAgfVxuICBcbiAgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IGF1dG8gMjUwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xuICAgIGdhcDogMTBweDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG4gIFxuICAuaGVhZGVyIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cbiAgXG4gIC5oZWFkZXIgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbiAgfVxuICBcbiAgLmhlYWRlciBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XG4gIH1cbiAgXG4gIC5zaWRlYmFyIHtcbiAgICBncmlkLXJvdzogMiAvIHNwYW4gMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogNHB4IDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgfVxuICBcbiAgLnByb2plY3QtY2FyZCB7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIH1cbiAgXG4gIC5wcm9qZWN0LWNhcmQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gIH1cbiAgXG4gIC5hZGQtcHJvamVjdC1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIH1cbiAgXG4gIC5hZGQtcHJvamVjdC1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XG4gIH1cbiAgXG4gIC5tYWluIHtcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cbiAgXG4gIC50b2RvLWNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAgIC00cHggLTRweCA4cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbiAgfVxuICBcbiAgLnRvZG8tY2FyZCBoMyB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbiAgLnRvZG8tY2FyZCBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIH1cbiAgXG4gIC50b2RvLWNhcmQgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgfVxuICBcbiAgLnRvZG8tY2FyZCBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XG4gIH1cbiAgXG4gIC5hZGQtdG9kby1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDIwcHg7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgICAgICAtNHB4IC00cHggOHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gIH1cbiAgXG4gIC5hZGQtdG9kby1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XG4gIH1cbiAgXG4gIC5tb2RhbCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICB9XG4gIFxuICAubW9kYWwtY29udGVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgIG1hcmdpbjogMjAlIGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB3aWR0aDogNjAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAgIC00cHggLTRweCA4cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbiAgfVxuICBcbiAgLmNsb3NlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1cHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC5jbG9zZTpob3ZlciB7XG4gICAgY29sb3I6ICNmZjQ0NDQ7XG4gIH1cbiAgaW5wdXQge1xuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0Y29sb3I6IHdoaXRlO1xuXHRjYXJldC1jb2xvcjogd2hpdGU7XG5cdHBhZGRpbmc6IDIwcHggNTBweDtcblx0Ym9yZGVyLXJhZGl1czogMjBweDtcblx0b3V0bGluZTogbm9uZTtcblx0Ym9yZGVyOiAxcHggc29saWQgZ3JheTtcblx0bWFyZ2luOiAxMHB4IDA7XG5cdGZvbnQtc2l6ZTogMXJlbTtcbn0gICAgICAgICBcblxuYnV0dG9ue1xuICAgIGJhY2tncm91bmQ6IGdyYXk7XG4gICAgY29sb3I6d2hpdGU7XG4gICAganVzdGlmeS1zZWxmOmNlbnRlcjtcbiAgICBwYWRkaW5nOjEwcHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICBmb250LXNpemU6MXJlbTtcbn1cblxuXG5cbi5lZGl0LXRvZG8tZm9ybSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgICAgLTRweCAtNHB4IDhweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICB9XG4gIFxuICAuZWRpdC10b2RvLWZvcm0gbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLmVkaXQtdG9kby1mb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuICAuZWRpdC10b2RvLWZvcm0gdGV4dGFyZWEsXG4gIC5lZGl0LXRvZG8tZm9ybSBpbnB1dFt0eXBlPVwiZGF0ZVwiXSxcbiAgLmVkaXQtdG9kby1mb3JtIGlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIC5lZGl0LXRvZG8tZm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyxcbiAgLmVkaXQtdG9kby1mb3JtIHRleHRhcmVhOmZvY3VzLFxuICAuZWRpdC10b2RvLWZvcm0gaW5wdXRbdHlwZT1cImRhdGVcIl06Zm9jdXMsXG4gIC5lZGl0LXRvZG8tZm9ybSBpbnB1dFt0eXBlPVwibnVtYmVyXCJdOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcbiAgfVxuICBcbiAgLmVkaXQtdG9kby1mb3JtIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgXG4gIC5lZGl0LXRvZG8tZm9ybSBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XG4gIH1cblxuXG4gIC5sb3d7XG4gICAgYm9yZGVyLWJvdHRvbToxMHB4IHNvbGlkIGdyZWVuO1xuICB9XG4gIC5tZWRpdW17XG4gICAgYm9yZGVyLWJvdHRvbToxMHB4IHNvbGlkIHllbGxvdztcbiAgfVxuICAuaGlnaHtcbiAgICBib3JkZXItYm90dG9tOjEwcHggc29saWQgcmVkO1xuICB9XG5cblxuICAudG9kby1jYXJkcyB7XG5cdGdhcDogMjJweDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnByb2plY3QtY2FyZHtcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgIGZvbnQtZmFtaWx5OiBcInBvcHBpbnNcIjtcbn1cblxuXG4uY29tcGxldGVkIHtcblx0ZmlsdGVyOiBicmlnaHRuZXNzKDAuNSkgZ3JheXNjYWxlKCk7XG59XG5cbi5hY3RpdmUtcHJvamVjdHtcbiAgYm9yZGVyLWJvdHRvbTo1cHggc29saWQgY2FkZXRibHVlO1xufVxuXG4ucHJvamVjdC1jYXJkIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnI7XG59XG5cbi5wcm9qZWN0LWNhcmQgc3BhbjpudGgtY2hpbGQoMil7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4ucHJvamVjdC1jYXJkIHNwYW46bnRoLWNoaWxkKDIpOmhvdmVye1xuICBjb2xvcjpyZWQ7XG59XG5cblxuXG4jcHJpb3JpdGllcyB7XG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHRjb2xvcjogd2hpdGU7XG5cdGNhcmV0LWNvbG9yOiB3aGl0ZTtcblx0cGFkZGluZzogMjBweCA1MHB4O1xuXHRib3JkZXItcmFkaXVzOiAyMHB4O1xuXHRvdXRsaW5lOiBub25lO1xuXHRib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuXHRtYXJnaW46IDEwcHggMDtcblx0Zm9udC1zaXplOiAxcmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxvQkFBb0I7QUFDcEI7SUFDSSw0REFBNEQ7SUFDNUQsU0FBUztJQUNULFVBQVU7SUFDVix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsaUNBQWlDO0lBQ2pDLFNBQVM7SUFDVCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qixt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QWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOzs7RUFHQTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7OztFQUdBO0NBQ0QsU0FBUztDQUNULGFBQWE7Q0FDYixzQkFBc0I7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCOzs7QUFHQTtDQUNDLG1DQUFtQztBQUNwQzs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsOEJBQThCO0FBQy9COztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsU0FBUztBQUNYOzs7O0FBSUE7Q0FDQyx1QkFBdUI7Q0FDdkIsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsY0FBYztDQUNkLGVBQWU7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogR2VuZXJhbCBTdHlsaW5nICovXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6MWZyIDEwZnI7XFxuICAgIGhlaWdodDoxMDB2aDtcXG4gIH1cXG4gIFxcbiAgLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggYXV0byAyNTBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICB9XFxuICBcXG4gIC5oZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICB9XFxuICBcXG4gIC5oZWFkZXIgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxuICB9XFxuICBcXG4gIC5oZWFkZXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcXG4gIH1cXG4gIFxcbiAgLnNpZGViYXIge1xcbiAgICBncmlkLXJvdzogMiAvIHNwYW4gMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm94LXNoYWRvdzogNHB4IDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIH1cXG4gIFxcbiAgLnByb2plY3QtY2FyZCB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICB9XFxuICBcXG4gIC5wcm9qZWN0LWNhcmQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbiAgfVxcbiAgXFxuICAuYWRkLXByb2plY3QtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICB9XFxuICBcXG4gIC5hZGQtcHJvamVjdC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xcbiAgfVxcbiAgXFxuICAubWFpbiB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgfVxcbiAgXFxuICAudG9kby1jYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpLFxcbiAgICAgICAgICAgICAgICAtNHB4IC00cHggOHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XFxuICB9XFxuICBcXG4gIC50b2RvLWNhcmQgaDMge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG4gIFxcbiAgLnRvZG8tY2FyZCBwIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgfVxcbiAgXFxuICAudG9kby1jYXJkIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIH1cXG4gIFxcbiAgLnRvZG8tY2FyZCBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xcbiAgfVxcbiAgXFxuICAuYWRkLXRvZG8tYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAyMHB4O1xcbiAgICByaWdodDogMjBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMiksXFxuICAgICAgICAgICAgICAgIC00cHggLTRweCA4cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcXG4gIH1cXG4gIFxcbiAgLmFkZC10b2RvLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XFxuICB9XFxuICBcXG4gIC5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgfVxcbiAgXFxuICAubW9kYWwtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgIG1hcmdpbjogMjAlIGF1dG87XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMiksXFxuICAgICAgICAgICAgICAgIC00cHggLTRweCA4cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcXG4gIH1cXG4gIFxcbiAgLmNsb3NlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDVweDtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gIFxcbiAgLmNsb3NlOmhvdmVyIHtcXG4gICAgY29sb3I6ICNmZjQ0NDQ7XFxuICB9XFxuICBpbnB1dCB7XFxuXFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGNhcmV0LWNvbG9yOiB3aGl0ZTtcXG5cXHRwYWRkaW5nOiAyMHB4IDUwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxuXFx0bWFyZ2luOiAxMHB4IDA7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcbn0gICAgICAgICBcXG5cXG5idXR0b257XFxuICAgIGJhY2tncm91bmQ6IGdyYXk7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBqdXN0aWZ5LXNlbGY6Y2VudGVyO1xcbiAgICBwYWRkaW5nOjEwcHggMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcXG4gICAgZm9udC1zaXplOjFyZW07XFxufVxcblxcblxcblxcbi5lZGl0LXRvZG8tZm9ybSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpLFxcbiAgICAgICAgICAgICAgICAtNHB4IC00cHggOHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XFxuICB9XFxuICBcXG4gIC5lZGl0LXRvZG8tZm9ybSBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgfVxcbiAgXFxuICAuZWRpdC10b2RvLWZvcm0gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbiAgLmVkaXQtdG9kby1mb3JtIHRleHRhcmVhLFxcbiAgLmVkaXQtdG9kby1mb3JtIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSxcXG4gIC5lZGl0LXRvZG8tZm9ybSBpbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICB9XFxuICBcXG4gIC5lZGl0LXRvZG8tZm9ybSBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMsXFxuICAuZWRpdC10b2RvLWZvcm0gdGV4dGFyZWE6Zm9jdXMsXFxuICAuZWRpdC10b2RvLWZvcm0gaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdOmZvY3VzLFxcbiAgLmVkaXQtdG9kby1mb3JtIGlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xcbiAgfVxcbiAgXFxuICAuZWRpdC10b2RvLWZvcm0gYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICB9XFxuICBcXG4gIC5lZGl0LXRvZG8tZm9ybSBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xcbiAgfVxcblxcblxcbiAgLmxvd3tcXG4gICAgYm9yZGVyLWJvdHRvbToxMHB4IHNvbGlkIGdyZWVuO1xcbiAgfVxcbiAgLm1lZGl1bXtcXG4gICAgYm9yZGVyLWJvdHRvbToxMHB4IHNvbGlkIHllbGxvdztcXG4gIH1cXG4gIC5oaWdoe1xcbiAgICBib3JkZXItYm90dG9tOjEwcHggc29saWQgcmVkO1xcbiAgfVxcblxcblxcbiAgLnRvZG8tY2FyZHMge1xcblxcdGdhcDogMjJweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wcm9qZWN0LWNhcmR7XFxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwicG9wcGluc1xcXCI7XFxufVxcblxcblxcbi5jb21wbGV0ZWQge1xcblxcdGZpbHRlcjogYnJpZ2h0bmVzcygwLjUpIGdyYXlzY2FsZSgpO1xcbn1cXG5cXG4uYWN0aXZlLXByb2plY3R7XFxuICBib3JkZXItYm90dG9tOjVweCBzb2xpZCBjYWRldGJsdWU7XFxufVxcblxcbi5wcm9qZWN0LWNhcmQge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDFmcjtcXG59XFxuXFxuLnByb2plY3QtY2FyZCBzcGFuOm50aC1jaGlsZCgyKXtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkIHNwYW46bnRoLWNoaWxkKDIpOmhvdmVye1xcbiAgY29sb3I6cmVkO1xcbn1cXG5cXG5cXG5cXG4jcHJpb3JpdGllcyB7XFxuXFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGNhcmV0LWNvbG9yOiB3aGl0ZTtcXG5cXHRwYWRkaW5nOiAyMHB4IDUwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxuXFx0bWFyZ2luOiAxMHB4IDA7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFRvZG8gZnJvbSBcIi4uLy4uL2NvcmUvVG9kby9Ub2RvXCI7XG5pbXBvcnQgYXBwIGZyb20gXCIuLi8uLi9jb3JlL2FwcFwiO1xuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi4vLi4vY29yZS9yZW5kZXIvcmVuZGVyXCI7XG5cbi8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSBhbmQgYXBwZW5kIGVsZW1lbnRzXG5mdW5jdGlvbiBjcmVhdGVBbmRBcHBlbmQocGFyZW50LCBlbGVtZW50VHlwZSwgY2xhc3NOYW1lLCB0ZXh0Q29udGVudCx0eXBlPW51bGwpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xuICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH1cbiAgaWYgKHRleHRDb250ZW50KSB7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICB9XG4gIGlmKHR5cGUpe1xuICAgIGVsZW1lbnQudHlwZSA9IHR5cGU7XG4gIH1cbiAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxuLy8gRnVuY3Rpb24gdG8gc2hvdyB0aGUgbW9kYWxcbmZ1bmN0aW9uIHNob3dNb2RhbCgpIHtcbiAgY29uc29sZS5sb2coYXBwLmN1cnJlbnRQYWdlKTtcbiAgaWYgKGFwcC5jdXJyZW50UGFnZSA9PSBcImhvbWVcIikge1xuICAgIGFsZXJ0KFwiQ2xpY2sgb24gYSBwcm9qZWN0IHRvIGFkZCBhIG5ldyB0b2RvIVwiKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Nb2RhbCcpKXtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvTW9kYWwnKTtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5PT1cIm5vbmVcIj9tb2RhbC5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjptb2RhbC5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBtb2RhbCA9IGNyZWF0ZUFuZEFwcGVuZChkb2N1bWVudC5ib2R5LCBcImRpdlwiLCBcIm1vZGFsXCIsIFwiXCIpO1xuICBtb2RhbC5pZCA9IFwidG9kb01vZGFsXCI7XG5cbiAgY29uc3QgbW9kYWxDb250ZW50ID0gY3JlYXRlQW5kQXBwZW5kKG1vZGFsLCBcImRpdlwiLCBcIm1vZGFsLWNvbnRlbnRcIiwgXCJcIik7XG5cbiAgY3JlYXRlQW5kQXBwZW5kKG1vZGFsQ29udGVudCwgXCJidXR0b25cIiwgXCJjbG9zZVwiLCBcIlhcIikuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcImNsaWNrXCIsXG4gICAgKCkgPT4ge1xuICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgKTtcbiAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIHRpdGxlTGFiZWwudGV4dENvbnRlbnQ9XCJUaXRsZTogXCI7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgY3JlYXRlQW5kQXBwZW5kKG1vZGFsQ29udGVudCwgXCJpbnB1dFwiLCBcIlwiLCBcIlwiKS5pZCA9IFwidGl0bGVJbnB1dFwiO1xuICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudD1cIkRlc2NyaXB0aW9uOiBcIjtcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuICBjcmVhdGVBbmRBcHBlbmQobW9kYWxDb250ZW50LCBcImlucHV0XCIsIFwiXCIsIFwiXCIpLmlkID0gXCJkZXNjcmlwdGlvbklucHV0XCI7XG4gIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudD1cIkR1ZSBEYXRlOlwiO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKTtcbiAgY3JlYXRlQW5kQXBwZW5kKG1vZGFsQ29udGVudCwgXCJpbnB1dFwiLCBcIlwiLCBcIlwiLFwiZGF0ZVwiKS5pZCA9IFwiZGF0ZUlucHV0XCI7XG4gIC8vIGNyZWF0ZUFuZEFwcGVuZChtb2RhbENvbnRlbnQsIFwiaW5wdXRcIiwgXCJcIiwgXCJcIikuaWQgPSBcInByaW9yaXR5SW5wdXRcIjtcblxuICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudD1cIlByaW9yaXR5OlwiO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG5cbiAgY29uc3QgcHJpb3JpdHlEcm9wRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBwcmlvcml0eURyb3BEb3duLm5hbWUgPSBcInByaW9yaXRpZXNcIjtcbiAgcHJpb3JpdHlEcm9wRG93bi5pZCA9IFwicHJpb3JpdGllc1wiO1xuICBjb25zdCBwcmlvcml0aWVzID0gW1wibG93XCIsXCJtZWRpdW1cIixcImhpZ2hcIl07XG4gIHByaW9yaXRpZXMuZm9yRWFjaChwPT57XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gcDtcbiAgICBvcHRpb24udmFsdWUgPSBwO1xuICAgIHByaW9yaXR5RHJvcERvd24uYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfSlcblxuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlEcm9wRG93bik7XG5cblxuICBjb25zdCBhZGRUb2RvQnRuID0gY3JlYXRlQW5kQXBwZW5kKG1vZGFsQ29udGVudCwgXCJidXR0b25cIiwgXCJcIiwgXCJBZGQgVG9kb1wiKTtcbiAgYWRkVG9kb0J0bi5pZCA9IFwiYWRkVG9kb0J0blwiO1xuICBhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVJbnB1dFwiKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25JbnB1dFwiKS52YWx1ZTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlSW5wdXRcIikudmFsdWU7XG4gICAgLy8gY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5SW5wdXRcIikudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXRpZXNcIikudmFsdWU7XG5cbiAgICAvLyBBZGRpbmcgdGhlIHRvZG8gdG8gdGhlIGN1cnJlbnQgcHJvamVjdFxuICAgIGFwcC5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBpZiAocHJvamVjdC50aXRsZSA9PT0gYXBwLmN1cnJlbnRQYWdlKSB7XG4gICAgICAgIHByb2plY3QuYWRkVG9kbyhuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KSk7XG4gICAgICAgIHJlbmRlcigpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9KTtcblxuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRUb2RvQnV0dG9uKCkge1xuICBjb25zdCBidXR0b24gPSBjcmVhdGVBbmRBcHBlbmQoZG9jdW1lbnQuYm9keSwgXCJidXR0b25cIiwgXCJhZGQtdG9kby1idG5cIiwgXCIrXCIpO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dNb2RhbCk7XG4gIHJldHVybiBidXR0b247XG59XG4iLCJpbXBvcnQgYXBwIGZyb20gXCIuLi8uLi9jb3JlL2FwcFwiO1xuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi4vLi4vY29yZS9yZW5kZXIvcmVuZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgY29uc3QgdG9kYXlUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB0b2RheVRhYi50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgdG9kYXlUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvLyBIYW5kbGUgbG9naWMgZm9yIFwiVG9kYXlcIiB0YWIgY2xpY2tcbiAgfSk7XG5cbiAgY29uc3QgdGhpc1dlZWtUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB0aGlzV2Vla1RhYi50ZXh0Q29udGVudCA9IFwiVGhpcyBXZWVrXCI7XG4gIHRoaXNXZWVrVGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gSGFuZGxlIGxvZ2ljIGZvciBcIlRoaXMgV2Vla1wiIHRhYiBjbGlja1xuICB9KTtcblxuICBjb25zdCBhbGxUb2Rvc1RhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFsbFRvZG9zVGFiLnRleHRDb250ZW50ID0gXCJBbGwgVG9kb3NcIjtcbiAgYWxsVG9kb3NUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvLyBIYW5kbGUgbG9naWMgZm9yIFwiQWxsIFRvZG9zXCIgdGFiIGNsaWNrXG4gICAgYXBwLmN1cnJlbnRQYWdlPVwiaG9tZVwiO1xuICAgIGFsbFRvZG9zVGFiLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIHJlbmRlcigpO1xuICB9KTtcblxuICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kYXlUYWIpO1xuICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpc1dlZWtUYWIpO1xuICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoYWxsVG9kb3NUYWIpO1xuXG4gIC8vIEFwcGVuZCB0aGUgaGVhZGVyIHRvIGEgY29udGFpbmVyIGluIHlvdXIgSFRNTCAoYXNzdW1pbmcgJ2FwcCcgaXMgYSBjb250YWluZXIpXG4gIHJldHVybiBoZWFkZXJDb250YWluZXI7XG59XG4iLCJpbXBvcnQgYXBwIGZyb20gXCIuLi8uLi9jb3JlL2FwcFwiO1xuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi4vLi4vY29yZS9yZW5kZXIvcmVuZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkcy5jbGFzc0xpc3QuYWRkKFwidG9kby1jYXJkc1wiKTtcbiAgaWYoYXBwLmN1cnJlbnRQYWdlPT1udWxsKXtcbiAgICBhcHAuY3VycmVudFBhZ2U9XCJob21lXCI7XG4gIH1cbiAgYXBwLnByb2plY3RzLmZvckVhY2goKHByb2plY3QsIHByb2plY3RJbmRleCkgPT4ge1xuICAgIGlmIChhcHAuY3VycmVudFBhZ2UgPT0gXCJob21lXCIpIHtcbiAgICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgaDIudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgY2FyZHMuYXBwZW5kKGgyKTtcbiAgICAgIHByb2plY3QudG9kb3MuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgY2FyZCA9IGNyZWF0ZVRvZG9DYXJkKHRvZG8sIGluZGV4LCBwcm9qZWN0SW5kZXgpO1xuICAgICAgICBjYXJkcy5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoYXBwLmN1cnJlbnRQYWdlID09IHByb2plY3QudGl0bGUpIHtcbiAgICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgaDIudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgY2FyZHMuYXBwZW5kKGgyKTtcbiAgICAgIHByb2plY3QudG9kb3MuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgY2FyZCA9IGNyZWF0ZVRvZG9DYXJkKHRvZG8sIGluZGV4LCBwcm9qZWN0SW5kZXgpO1xuICAgICAgICBjYXJkcy5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBtYWluLmFwcGVuZENoaWxkKGNhcmRzKTtcbiAgfSk7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChjYXJkcyk7XG4gIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2RvQ2FyZCh0b2RvLCBpbmRleCwgcHJvamVjdEluZGV4KSB7XG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNhcmRcIik7XG4gIGNhcmQuY2xhc3NMaXN0LmFkZChgJHt0b2RvLnByaW9yaXR5fWApO1xuXG4gIGlmKHRvZG8uaXNDb21wbGV0ZWQpe1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XG4gIH1cbiAgZWxzZXtcbiAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlZCcpO1xuICB9XG4gIC8vIGNhcmQuaW5uZXJIVE1MID0gYFxuICAvLyAgICAgICA8aDM+JHtpbmRleH08L2gzPlxuICAvLyAgICAgICA8aW5wdXQgdHlwZSA9IFwiY2hlY2tib3hcIj5cbiAgLy8gICAgICAgPGgzPiR7dG9kby5uYW1lfTwvaDM+XG4gIC8vICAgICAgIDxwPiR7dG9kby5kYXRlfTwvcD5cbiAgLy8gICAgICAgPGJ1dHRvbj5FZGl0PC9idXR0b24+XG4gIC8vICAgICAgIDxidXR0b24+RGVsZXRlPC9idXR0b24+XG4gIC8vICAgYDtcblxuICBjYXJkLnNldEF0dHJpYnV0ZShcImRhdGEtdG9kby1pbmRleFwiLCBpbmRleCk7XG4gIGNhcmQuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWluZGV4XCIsIHByb2plY3RJbmRleCk7XG5cbiAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGgzLnRleHRDb250ZW50ID0gaW5kZXg7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xuICBpZiAodG9kby5pc0NvbXBsZXRlZCA9PSB0cnVlKSB7XG4gICAgY29uc29sZS5sb2coaW5wdXQuY2hlY2tlZCk7XG4gICAgaW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gIH1cblxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAvLyBjb25zdCB0b2RvID0gYXBwLnByb2plY3RzW3Byb2plY3RJbmRleF0udG9kb3NbaW5kZXhdO1xuICAgIC8vIHRvZG8uaXNDb21wbGV0ZWQgPSB0b2RvLmlzQ29tcGxldGVkID09IHRydWUgPyBmYWxzZSA6IHRydWU7XG4gICAgaWYgKHRvZG8uaXNDb21wbGV0ZWQpIHtcbiAgICAgIHRvZG8uc2V0Q29tcGxldGVkKGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9kby5zZXRDb21wbGV0ZWQodHJ1ZSk7XG4gICAgfVxuICAgIC8vIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlZFwiKTtcbiAgICByZW5kZXIoKTtcbiAgfSk7XG5cbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgbmFtZS50ZXh0Q29udGVudCA9IHRvZG8ubmFtZTtcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkYXRlLnRleHRDb250ZW50ID0gdG9kby5kdWVEYXRlO1xuICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuXG4gIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRvZG8taW5kZXhcIikpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG9kb0RldGFpbHNWaWV3KHRvZG8sIGluZGV4LCBwcm9qZWN0SW5kZXgpKTtcbiAgfSk7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG5cbiAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWluZGV4XCIpO1xuICAgIGNvbnN0IHRvZG9JbmRleCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS10b2RvLWluZGV4XCIpO1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnBhcmVudE5vZGUpO1xuICAgIGFwcC5wcm9qZWN0c1twcm9qZWN0SW5kZXhdLnJlbW92ZVRvZG8odG9kb0luZGV4KTtcbiAgICByZW5kZXIoKTtcbiAgfSk7XG5cbiAgY2FyZC5hcHBlbmRDaGlsZChoMyk7XG4gIGNhcmQuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICBjYXJkLmFwcGVuZENoaWxkKG5hbWUpO1xuICBjYXJkLmFwcGVuZENoaWxkKGRhdGUpO1xuICBjYXJkLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICBjYXJkLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgcmV0dXJuIGNhcmQ7XG59XG5cbmZ1bmN0aW9uIHRvZG9EZXRhaWxzVmlldyh0b2RvLCBpbmRleCwgcHJvamVjdEluZGV4KSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwidG9kby1kZXRhaWxzLXZpZXdcIik7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZWRpdC10b2RvLWZvcm1cIik7XG4gIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZTogXCI7XG4gIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbmFtZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgbmFtZUlucHV0LnZhbHVlID0gdG9kby5uYW1lO1xuICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjogXCI7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRGF0ZTogXCI7XG5cbiAgY29uc3QgZGF0ZVZhbHVlID0gbmV3IERhdGUodG9kby5kdWVEYXRlKTtcbiAgY29uc3QgZGF5ID0gKFwiMFwiICsgZGF0ZVZhbHVlLmdldERhdGUoKSkuc2xpY2UoLTIpO1xuICBjb25zdCBtb250aCA9IChcIjBcIiArIChkYXRlVmFsdWUuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMik7XG4gIGNvbnN0IHZhbHVlID0gZGF0ZVZhbHVlLmdldEZ1bGxZZWFyKCkgKyBcIi1cIiArIG1vbnRoICsgXCItXCIgKyBkYXk7XG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgZGF0ZUlucHV0LnZhbHVlID0gdmFsdWU7XG5cbiAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiO1xuXG4gIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgcHJpb3JpdHlJbnB1dC5uYW1lID0gXCJwcmlvcml0aWVzXCI7XG4gIHByaW9yaXR5SW5wdXQuaWQgPSBcInByaW9yaXRpZXNcIjtcbiAgY29uc3QgcHJpb3JpdGllcyA9IFtcImxvd1wiLFwibWVkaXVtXCIsXCJoaWdoXCJdO1xuICBwcmlvcml0aWVzLmZvckVhY2gocD0+e1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHA7XG4gICAgb3B0aW9uLnZhbHVlID0gcDtcbiAgICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH0pXG4gIHByaW9yaXR5SW5wdXQudmFsdWUgPSB0b2RvLnByaW9yaXR5O1xuXG5cblxuICBjb25zdCBjaGFuZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjaGFuZ2UudGV4dENvbnRlbnQgPSBcIkNoYW5nZVwiO1xuXG4gIGNoYW5nZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGFwcC5wcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRvZG9zW2luZGV4XS5zZXRUaXRsZShuYW1lSW5wdXQudmFsdWUpO1xuICAgIGFwcC5wcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRvZG9zW2luZGV4XS5zZXREZXNjcmlwdGlvbihcbiAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWVcbiAgICApO1xuICAgIGFwcC5wcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRvZG9zW2luZGV4XS5zZXREdWVEYXRlKGRhdGVJbnB1dC52YWx1ZSk7XG4gICAgYXBwLnByb2plY3RzW3Byb2plY3RJbmRleF0udG9kb3NbaW5kZXhdLnNldFByaW9yaXR5KHByaW9yaXR5SW5wdXQudmFsdWUpO1xuICAgIHJlbmRlcigpO1xuICB9KTtcblxuICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1kZXRhaWxzLXZpZXdcIikpO1xuICB9KTtcbiAgY2xvc2UudGV4dENvbnRlbnQgPSBcIkNsb3NlXCI7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuICBmb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuICBmb3JtLmFwcGVuZENoaWxkKGNoYW5nZSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoY2xvc2UpO1xuXG4gIGRpdi5hcHBlbmRDaGlsZChmb3JtKTtcblxuICByZXR1cm4gZGl2O1xufVxuIiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4uLy4uL2NvcmUvUHJvamVjdC9Qcm9qZWN0XCI7XG5pbXBvcnQgYXBwIGZyb20gXCIuLi8uLi9jb3JlL2FwcFwiO1xuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi4vLi4vY29yZS9yZW5kZXIvcmVuZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpZGViYXIoKSB7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXNpZGVcIik7XG4gIHNpZGViYXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXJcIik7XG4gIGNvbnN0IGFkZFByb2plY3RCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3QgK1wiO1xuICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJhZGQtcHJvamVjdC1idXR0b25cIik7XG4gIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiRW50ZXIgYSBuZXcgUHJvamVjdCBOYW1lXCI7XG4gICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNsb3NlLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgYXBwLmFkZFByb2plY3QobmV3IFByb2plY3QoaW5wdXQudmFsdWUpKTtcbiAgICAgIGFkZFByb2plY3RCdG5Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGFkZFByb2plY3RCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ0bik7XG4gICAgICBhcHAuY3VycmVudFBhZ2UgPSBpbnB1dC52YWx1ZTtcbiAgICAgIHJlbmRlcigpO1xuICAgIH0pO1xuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBhZGRQcm9qZWN0QnRuQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBhZGRQcm9qZWN0QnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pO1xuICAgIH0pO1xuICAgIGFkZFByb2plY3RCdG5Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBhZGRQcm9qZWN0QnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBhZGRQcm9qZWN0QnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgYWRkUHJvamVjdEJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZSk7XG4gIH0pO1xuICBhZGRQcm9qZWN0QnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG5Db250YWluZXIpO1xuXG4gIGNvbnN0IHByb2plY3RDYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RDYXJkcy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jYXJkcy1kaXZcIik7XG4gIGFwcC5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LGluZGV4KSA9PiB7XG4gICAgcHJvamVjdENhcmRzLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RDYXJkKHByb2plY3QsaW5kZXgpKTtcbiAgfSk7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdENhcmRzKTtcbiAgcmV0dXJuIHNpZGViYXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RDYXJkKHByb2plY3QsaW5kZXgpIHtcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY2FyZFwiKTtcbiAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdC1pbmRleCcsaW5kZXgpO1xuICBpZiAoYXBwLmN1cnJlbnRQYWdlID09IHByb2plY3QudGl0bGUpIHtcbiAgICAvLyBjYXJkLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXByb2plY3RcIik7XG4gIH1cbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICBzcGFuLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEluZGV4ID0gZS50YXJnZXQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdC1pbmRleCcpO1xuICAgIGFwcC5wcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LDEpO1xuICAgIGFwcC5jdXJyZW50UGFnZT1cImhvbWVcIjtcbiAgICByZW5kZXIoKTtcbiAgfSk7XG4gIHNwYW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhcHAuY3VycmVudFBhZ2UgPSBwcm9qZWN0LnRpdGxlO1xuICAgIHJlbmRlcigpO1xuICB9KTtcbiAgY2FyZC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgY2FyZC5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICByZXR1cm4gY2FyZDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICB0aGlzLnRvZG9zID0gW107XG4gICAgfVxuICBcbiAgICBhZGRUb2RvKHRvZG8pIHtcbiAgICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcbiAgICB9XG4gICAgc2V0VG9kb0NvbXBsZXRlZChpbmRleCkge1xuICAgICAgICB0aGlzLnRvZG9zW2luZGV4XS5zZXRUb2RvQ29tcGxldGVkKHRydWUpO1xuICAgIH1cbiAgICByZW1vdmVUb2RvKGluZGV4KSB7XG4gICAgICAgIHRoaXMudG9kb3Muc3BsaWNlKGluZGV4LDEpO1xuICAgIH1cbiAgICBUb2RvcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb3M7XG4gICAgfVxuICB9XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KSB7XG4gICAgLy8gdGhpcy5uYW1lID0gbmFtZTtcbiAgICAvLyB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgLy8gdGhpcy5kYXRlID0gZGF0ZTtcbiAgICAvLyB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgLy8gdGhpcy5pc0NvbXBsZXRlZCA9IGZhbHNlO1xuICAgIHRoaXMuc2V0VGl0bGUobmFtZSk7XG4gICAgdGhpcy5zZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbik7XG4gICAgdGhpcy5zZXREdWVEYXRlKGRhdGUpO1xuICAgIHRoaXMuc2V0UHJpb3JpdHkocHJpb3JpdHk/cHJpb3JpdHk6XCJsb3dcIik7XG4gICAgdGhpcy5zZXRDb21wbGV0ZWQoZmFsc2UpO1xuXG4gIH1cbiAgc2V0VGl0bGUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cbiAgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cbiAgc2V0RHVlRGF0ZShkdWVEYXRlKSB7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgfVxuICBzZXRQcmlvcml0eShwcmlvcml0eSkge1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxuICBzZXRDb21wbGV0ZWQodmFsdWUpIHtcbiAgICB0aGlzLmlzQ29tcGxldGVkID0gdmFsdWU7XG4gIH1cbn1cbiIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3QvUHJvamVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBhcHAge1xuICBzdGF0aWMgY3VycmVudFBhZ2UgPSBcImhvbWVcIjtcbiAgc3RhdGljIHByb2plY3RzID0gWyhuZXcgUHJvamVjdChcIkRlZmF1bHQgUHJvamVjdFwiKSldO1xuICBzdGF0aWMgYWRkUHJvamVjdChwcm9qZWN0KXtcbiAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIH1cbiAgc3RhdGljIHNldEN1cnJlbnRQYWdlKHBhZ2Upe1xuICAgIHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlO1xuICB9XG59XG5cbiIsImltcG9ydCBBZGRUb2RvQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0FkZFRvZG9CdXR0b24vQWRkVG9kb0J1dHRvblwiO1xuaW1wb3J0IGhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyXCI7XG5pbXBvcnQgTWFpbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NYWluL01haW5cIjtcbmltcG9ydCBzaWRlYmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NpZGVCYXIvU2lkZUJhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKXtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICBib2R5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIoKSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChzaWRlYmFyKCkpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoTWFpbigpKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKEFkZFRvZG9CdXR0b24oKSk7XG59IiwiaW1wb3J0IHJlbmRlciBmcm9tIFwiLi9jb3JlL3JlbmRlci9yZW5kZXJcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnXG5cbnJlbmRlcigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==