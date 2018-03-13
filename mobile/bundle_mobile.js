/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1]
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fullfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fullfilled = false;
/******/ 			}
/******/ 			if(fullfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./react/entry.tsx","vendors~app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./react/components_m/Blog.tsx":
/*!*************************************!*\
  !*** ./react/components_m/Blog.tsx ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"react\");\r\nvar Header_1 = __webpack_require__(/*! ./header/Header */ \"./react/components_m/header/Header.tsx\");\r\nvar Article_1 = __webpack_require__(/*! ./article/Article */ \"./react/components_m/article/Article.tsx\");\r\nvar Side_1 = __webpack_require__(/*! ./side/Side */ \"./react/components_m/side/Side.tsx\");\r\nvar ToggleButton_1 = __webpack_require__(/*! ./button/ToggleButton */ \"./react/components_m/button/ToggleButton.tsx\");\r\nvar Blog = /** @class */ (function (_super) {\r\n    __extends(Blog, _super);\r\n    function Blog() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    Blog.prototype.render = function () {\r\n        return (React.createElement(React.Fragment, null,\r\n            React.createElement(Header_1.default, null),\r\n            React.createElement(Article_1.default, null),\r\n            React.createElement(Side_1.default, null),\r\n            React.createElement(ToggleButton_1.default, null)));\r\n    };\r\n    return Blog;\r\n}(React.Component));\r\nexports.default = Blog;\r\n\n\n//# sourceURL=webpack:///./react/components_m/Blog.tsx?");

/***/ }),

/***/ "./react/components_m/article/Article.tsx":
/*!************************************************!*\
  !*** ./react/components_m/article/Article.tsx ***!
  \************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"react\");\r\nvar styled_components_1 = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.es.js\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar ArticleTitle_1 = __webpack_require__(/*! ./ArticleTitle */ \"./react/components_m/article/ArticleTitle.tsx\");\r\nvar ArticleContent_1 = __webpack_require__(/*! ./ArticleContent */ \"./react/components_m/article/ArticleContent.tsx\");\r\nvar actions_1 = __webpack_require__(/*! ../../store_m/actions */ \"./react/store_m/actions.ts\");\r\nvar data_1 = __webpack_require__(/*! ../../store_m/data */ \"./react/store_m/data.ts\");\r\nvar StyArticle = styled_components_1.default.article(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n    padding: 60px 20px 0;\\n\"], [\"\\n    padding: 60px 20px 0;\\n\"])));\r\nfunction mapStateToProps(state) {\r\n    var articleTitle = state.articleTitle, articleContent = state.articleContent;\r\n    return { title: articleTitle, html: articleContent };\r\n}\r\nfunction mapDispatchToProps(dispatch) {\r\n    return {\r\n        getArticleFromServer: function (title) {\r\n            dispatch(actions_1.changeArticle(title));\r\n            dispatch(actions_1.fetchArticle(title));\r\n        }\r\n    };\r\n}\r\nvar Article = /** @class */ (function (_super) {\r\n    __extends(Article, _super);\r\n    function Article() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    Article.prototype.componentDidMount = function () {\r\n        this.props.getArticleFromServer(data_1.getArticleTitle());\r\n    };\r\n    Article.prototype.render = function () {\r\n        var _a = this.props, title = _a.title, html = _a.html;\r\n        return (React.createElement(StyArticle, null,\r\n            React.createElement(ArticleTitle_1.default, { articleTitle: title }),\r\n            React.createElement(ArticleContent_1.default, { content: html })));\r\n    };\r\n    Article = __decorate([\r\n        react_redux_1.connect(mapStateToProps, mapDispatchToProps)\r\n    ], Article);\r\n    return Article;\r\n}(React.Component));\r\nexports.default = Article;\r\nvar templateObject_1;\r\n\n\n//# sourceURL=webpack:///./react/components_m/article/Article.tsx?");

/***/ }),

/***/ "./react/components_m/article/ArticleContent.tsx":
/*!*******************************************************!*\
  !*** ./react/components_m/article/ArticleContent.tsx ***!
  \*******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"react\");\r\nfunction ArticleContent(props) {\r\n    return React.createElement(\"section\", { dangerouslySetInnerHTML: { __html: props.content } });\r\n}\r\nexports.default = ArticleContent;\r\n\n\n//# sourceURL=webpack:///./react/components_m/article/ArticleContent.tsx?");

/***/ }),

/***/ "./react/components_m/article/ArticleTitle.tsx":
/*!*****************************************************!*\
  !*** ./react/components_m/article/ArticleTitle.tsx ***!
  \*****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"react\");\r\nvar styled_components_1 = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.es.js\");\r\nvar StyH = styled_components_1.default.h1(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n    font-size: 25px;\\n    color: #282c34;\\n    margin: 0;\\n    margin-bottom: 20px;\\n\"], [\"\\n    font-size: 25px;\\n    color: #282c34;\\n    margin: 0;\\n    margin-bottom: 20px;\\n\"])));\r\nfunction ArticleTitle(props) {\r\n    return React.createElement(StyH, null, props.articleTitle);\r\n}\r\nexports.default = ArticleTitle;\r\nvar templateObject_1;\r\n\n\n//# sourceURL=webpack:///./react/components_m/article/ArticleTitle.tsx?");

/***/ }),

/***/ "./react/components_m/button/ToggleButton.tsx":
/*!****************************************************!*\
  !*** ./react/components_m/button/ToggleButton.tsx ***!
  \****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"react\");\r\nvar styled_components_1 = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.es.js\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar actions_1 = __webpack_require__(/*! ../../store_m/actions */ \"./react/store_m/actions.ts\");\r\nvar StyDiv = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n    width: 62px;\\n    height: 62px;\\n    background: #20232a;\\n    border-radius: 50%;\\n    position: fixed;\\n    right: 20px;\\n    bottom: 40px;\\n    color: #FFF;\\n    box-shadow: 0 0 20px rgba(0,0,0,0.3);\\n\"], [\"\\n    width: 62px;\\n    height: 62px;\\n    background: #20232a;\\n    border-radius: 50%;\\n    position: fixed;\\n    right: 20px;\\n    bottom: 40px;\\n    color: #FFF;\\n    box-shadow: 0 0 20px rgba(0,0,0,0.3);\\n\"])));\r\nvar Up = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject([\"\\n    width: 15px;\\n    height: 8px;\\n    background: url(arrowUp.png);\\n    position: absolute;\\n    left: 23px;\\n    top: \", \";\\n    transition: top 0.5s ease;\\n\"], [\"\\n    width: 15px;\\n    height: 8px;\\n    background: url(arrowUp.png);\\n    position: absolute;\\n    left: 23px;\\n    top: \", \";\\n    transition: top 0.5s ease;\\n\"])), function (props) { return (props.showed ? '31px' : '19px'); });\r\nvar Down = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject([\"\\n    width: 15px;\\n    height: 8px;\\n    background: url(arrowDown.png);\\n    position: absolute;\\n    left: 23px;\\n    bottom: \", \";\\n    transition: bottom 0.5s ease;\\n\"], [\"\\n    width: 15px;\\n    height: 8px;\\n    background: url(arrowDown.png);\\n    position: absolute;\\n    left: 23px;\\n    bottom: \", \";\\n    transition: bottom 0.5s ease;\\n\"])), function (props) { return (props.showed ? '31px' : '19px'); });\r\nfunction mapStateToProps(state) {\r\n    return { showed: state.showed };\r\n}\r\nfunction mapDispatchToProps(dispatch) {\r\n    return {\r\n        changeOpacity: function (showed) {\r\n            dispatch(actions_1.changeShowed(showed));\r\n        }\r\n    };\r\n}\r\nvar ToggleButton = /** @class */ (function (_super) {\r\n    __extends(ToggleButton, _super);\r\n    function ToggleButton() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    ToggleButton.prototype.render = function () {\r\n        var _a = this.props, showed = _a.showed, changeOpacity = _a.changeOpacity;\r\n        var handleClick = function () {\r\n            changeOpacity(!showed);\r\n        };\r\n        return React.createElement(StyDiv, { onClick: handleClick },\r\n            React.createElement(Up, { showed: showed }),\r\n            React.createElement(Down, { showed: showed }));\r\n    };\r\n    ToggleButton = __decorate([\r\n        react_redux_1.connect(mapStateToProps, mapDispatchToProps)\r\n    ], ToggleButton);\r\n    return ToggleButton;\r\n}(React.Component));\r\nexports.default = ToggleButton;\r\nvar templateObject_1, templateObject_2, templateObject_3;\r\n\n\n//# sourceURL=webpack:///./react/components_m/button/ToggleButton.tsx?");

/***/ }),

/***/ "./react/components_m/header/Header.tsx":
/*!**********************************************!*\
  !*** ./react/components_m/header/Header.tsx ***!
  \**********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"react\");\r\nvar styled_components_1 = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.es.js\");\r\nvar Nav_1 = __webpack_require__(/*! ./Nav */ \"./react/components_m/header/Nav.tsx\");\r\nvar StyHeader = styled_components_1.default.header(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n    text-align: center;\\n    width: 100%;\\n    height: 40px;\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    background: rgb(32,35,42);\\n\"], [\"\\n    text-align: center;\\n    width: 100%;\\n    height: 40px;\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    background: rgb(32,35,42);\\n\"])));\r\nfunction Header(props) {\r\n    return React.createElement(StyHeader, null,\r\n        React.createElement(Nav_1.default, null));\r\n}\r\nexports.default = Header;\r\nvar templateObject_1;\r\n\n\n//# sourceURL=webpack:///./react/components_m/header/Header.tsx?");

/***/ }),

/***/ "./react/components_m/header/Nav.tsx":
/*!*******************************************!*\
  !*** ./react/components_m/header/Nav.tsx ***!
  \*******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"react\");\r\nvar styled_components_1 = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.es.js\");\r\nvar StyChosenA = styled_components_1.default.a(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n    flex-grow: 1;\\n    height: 40px;\\n    line-height: 40px;\\n    color: rgb(97,218,251);\\n\"], [\"\\n    flex-grow: 1;\\n    height: 40px;\\n    line-height: 40px;\\n    color: rgb(97,218,251);\\n\"])));\r\nvar StyA = styled_components_1.default.a(templateObject_2 || (templateObject_2 = __makeTemplateObject([\"\\n    flex-grow: 1;\\n    height: 40px;\\n    line-height: 40px;\\n    color: #FFF;\\n\"], [\"\\n    flex-grow: 1;\\n    height: 40px;\\n    line-height: 40px;\\n    color: #FFF;\\n\"])));\r\nvar StyNav = styled_components_1.default.nav(templateObject_3 || (templateObject_3 = __makeTemplateObject([\"\\n    display: flex;\\n    height: 40px;\\n    padding: 0 20px;\\n\"], [\"\\n    display: flex;\\n    height: 40px;\\n    padding: 0 20px;\\n\"])));\r\nvar navLists = ['Blog', 'Poem', 'Game', 'About'];\r\nfunction Nav(props) {\r\n    var items = navLists.map(function (item, index) {\r\n        if (!index)\r\n            return React.createElement(StyChosenA, { key: item }, item);\r\n        return React.createElement(StyA, { key: item }, item);\r\n    });\r\n    return React.createElement(StyNav, null, items);\r\n}\r\nexports.default = Nav;\r\nvar templateObject_1, templateObject_2, templateObject_3;\r\n\n\n//# sourceURL=webpack:///./react/components_m/header/Nav.tsx?");

/***/ }),

/***/ "./react/components_m/side/Categories.tsx":
/*!************************************************!*\
  !*** ./react/components_m/side/Categories.tsx ***!
  \************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"react\");\r\nvar styled_components_1 = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.es.js\");\r\nvar Category_1 = __webpack_require__(/*! ./Category */ \"./react/components_m/side/Category.tsx\");\r\nvar data_1 = __webpack_require__(/*! ../../store/data */ \"./react/store/data.ts\");\r\nvar StyDiv = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n    padding-bottom: 40px;\\n\"], [\"\\n    padding-bottom: 40px;\\n\"])));\r\nfunction Categories(props) {\r\n    var categories = props.categories, articleTitle = props.articleTitle;\r\n    var items = categories.map(function (category) { return React.createElement(Category_1.default, { key: category, lists: data_1.CATEGORIESLISTS[category], listsTitle: category, articleTitle: articleTitle }); });\r\n    return React.createElement(StyDiv, null, items);\r\n}\r\nexports.default = Categories;\r\nvar templateObject_1;\r\n\n\n//# sourceURL=webpack:///./react/components_m/side/Categories.tsx?");

/***/ }),

/***/ "./react/components_m/side/Category.tsx":
/*!**********************************************!*\
  !*** ./react/components_m/side/Category.tsx ***!
  \**********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"react\");\r\nvar ListsTitle_1 = __webpack_require__(/*! ./ListsTitle */ \"./react/components_m/side/ListsTitle.tsx\");\r\nvar Lists_1 = __webpack_require__(/*! ./Lists */ \"./react/components_m/side/Lists.tsx\");\r\nfunction Category(props) {\r\n    var lists = props.lists, listsTitle = props.listsTitle, articleTitle = props.articleTitle;\r\n    return (React.createElement(\"div\", null,\r\n        React.createElement(ListsTitle_1.default, { listsTitle: listsTitle }),\r\n        React.createElement(Lists_1.default, { lists: lists, articleTitle: articleTitle })));\r\n}\r\nexports.default = Category;\r\n\n\n//# sourceURL=webpack:///./react/components_m/side/Category.tsx?");

/***/ }),

/***/ "./react/components_m/side/List.tsx":
/*!******************************************!*\
  !*** ./react/components_m/side/List.tsx ***!
  \******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"react\");\r\nvar styled_components_1 = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.es.js\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar actions_1 = __webpack_require__(/*! ../../store_m/actions */ \"./react/store_m/actions.ts\");\r\nvar StyLi = styled_components_1.default.li(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n    font: 18px/25px \\\"sans-serif\\\";\\n    font-weight: \", \";\\n    height: 25px;\\n    padding-left: 25px;\\n    margin-top: 5px;\\n    position: relative;\\n    cursor: pointer;\\n    &:hover { color: rgb(109,109,109); }\\n\"], [\"\\n    font: 18px/25px \\\"sans-serif\\\";\\n    font-weight: \", \";\\n    height: 25px;\\n    padding-left: 25px;\\n    margin-top: 5px;\\n    position: relative;\\n    cursor: pointer;\\n    &:hover { color: rgb(109,109,109); }\\n\"])), function (props) { return (props.chosen ? 'bold' : 'normal'); });\r\nvar StySpan = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject([\"\\n    position: absolute;\\n    left: 0;\\n    top: 0;\\n    width: 4px;\\n    height: 25px;\\n    background: rgb(97,218,251);\\n\"], [\"\\n    position: absolute;\\n    left: 0;\\n    top: 0;\\n    width: 4px;\\n    height: 25px;\\n    background: rgb(97,218,251);\\n\"])));\r\nfunction mapStateToProps(state) {\r\n    return { showed: state.showed };\r\n}\r\nfunction mapDispatchToProps(dispatch) {\r\n    return {\r\n        changeAndGetArticle: function (title) {\r\n            dispatch(actions_1.changeArticle(title));\r\n            dispatch(actions_1.changeShowed(false));\r\n            dispatch(actions_1.fetchArticle(title));\r\n        }\r\n    };\r\n}\r\nvar emptyFn = function () { };\r\nvar List = /** @class */ (function (_super) {\r\n    __extends(List, _super);\r\n    function List() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    List.prototype.render = function () {\r\n        var _a = this.props, chosen = _a.chosen, articleTitle = _a.articleTitle, showed = _a.showed, changeAndGetArticle = _a.changeAndGetArticle, children = _a.children;\r\n        var handleClick = function () {\r\n            changeAndGetArticle(articleTitle);\r\n        };\r\n        return (React.createElement(StyLi, { onClick: showed ? handleClick : emptyFn, chosen: chosen },\r\n            React.createElement(\"a\", null, children),\r\n            chosen ? React.createElement(StySpan, null) : null));\r\n    };\r\n    List = __decorate([\r\n        react_redux_1.connect(mapStateToProps, mapDispatchToProps)\r\n    ], List);\r\n    return List;\r\n}(React.Component));\r\nexports.default = List;\r\nvar templateObject_1, templateObject_2;\r\n\n\n//# sourceURL=webpack:///./react/components_m/side/List.tsx?");

/***/ }),

/***/ "./react/components_m/side/Lists.tsx":
/*!*******************************************!*\
  !*** ./react/components_m/side/Lists.tsx ***!
  \*******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"react\");\r\nvar styled_components_1 = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.es.js\");\r\nvar List_1 = __webpack_require__(/*! ./List */ \"./react/components_m/side/List.tsx\");\r\nvar StyListsUl = styled_components_1.default.ul(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n    padding: 0;\\n\"], [\"\\n    padding: 0;\\n\"])));\r\nfunction Lists(props) {\r\n    var lists = props.lists, articleTitle = props.articleTitle;\r\n    var items = lists.map(function (article) {\r\n        var articleChosen = false;\r\n        if (article === articleTitle)\r\n            articleChosen = true;\r\n        return React.createElement(List_1.default, { key: article, chosen: articleChosen, articleTitle: article }, article);\r\n    });\r\n    return React.createElement(StyListsUl, null, items);\r\n}\r\nexports.default = Lists;\r\nvar templateObject_1;\r\n\n\n//# sourceURL=webpack:///./react/components_m/side/Lists.tsx?");

/***/ }),

/***/ "./react/components_m/side/ListsTitle.tsx":
/*!************************************************!*\
  !*** ./react/components_m/side/ListsTitle.tsx ***!
  \************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"react\");\r\nvar styled_components_1 = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.es.js\");\r\nvar StyDiv = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n    height: 40px;\\n    line-height: 40px;\\n    color: rgb(109,109,109);\\n    padding-left: 25px;\\n\"], [\"\\n    height: 40px;\\n    line-height: 40px;\\n    color: rgb(109,109,109);\\n    padding-left: 25px;\\n\"])));\r\nfunction ListsTitle(props) {\r\n    return React.createElement(StyDiv, null, props.listsTitle);\r\n}\r\nexports.default = ListsTitle;\r\nvar templateObject_1;\r\n\n\n//# sourceURL=webpack:///./react/components_m/side/ListsTitle.tsx?");

/***/ }),

/***/ "./react/components_m/side/Side.tsx":
/*!******************************************!*\
  !*** ./react/components_m/side/Side.tsx ***!
  \******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"react\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar styled_components_1 = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.es.js\");\r\nvar Categories_1 = __webpack_require__(/*! ./Categories */ \"./react/components_m/side/Categories.tsx\");\r\nvar data_1 = __webpack_require__(/*! ../../store_m/data */ \"./react/store_m/data.ts\");\r\nvar StySide = styled_components_1.default.aside(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n    width: 100%;\\n    height: calc(100vh - 40px);\\n    position: fixed;\\n    left: 0;\\n    top: 40px;\\n    padding: 20px 0 0 20px;\\n    transition: opacity 0.5s ease;\\n    opacity: \", \";\\n    background: #FFF;\\n    overflow: scroll;\\n\"], [\"\\n    width: 100%;\\n    height: calc(100vh - 40px);\\n    position: fixed;\\n    left: 0;\\n    top: 40px;\\n    padding: 20px 0 0 20px;\\n    transition: opacity 0.5s ease;\\n    opacity: \", \";\\n    background: #FFF;\\n    overflow: scroll;\\n\"])), function (props) { return props.showed ? '1' : '0'; });\r\nfunction mapStateToProps(state) {\r\n    var articleTitle = state.articleTitle, showed = state.showed;\r\n    return { articleTitle: articleTitle, showed: showed };\r\n}\r\nvar Side = /** @class */ (function (_super) {\r\n    __extends(Side, _super);\r\n    function Side() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    Side.prototype.render = function () {\r\n        var _a = this.props, articleTitle = _a.articleTitle, showed = _a.showed;\r\n        return (React.createElement(StySide, { showed: showed },\r\n            React.createElement(Categories_1.default, { categories: data_1.CATEGORIES, articleTitle: articleTitle })));\r\n    };\r\n    Side = __decorate([\r\n        react_redux_1.connect(mapStateToProps)\r\n    ], Side);\r\n    return Side;\r\n}(React.Component));\r\nexports.default = Side;\r\nvar templateObject_1;\r\n\n\n//# sourceURL=webpack:///./react/components_m/side/Side.tsx?");

/***/ }),

/***/ "./react/entry.tsx":
/*!*************************!*\
  !*** ./react/entry.tsx ***!
  \*************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"react\");\r\nvar ReactDOM = __webpack_require__(/*! react-dom */ \"react-dom\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar Blog_1 = __webpack_require__(/*! ./components_m/Blog */ \"./react/components_m/Blog.tsx\");\r\nvar store_1 = __webpack_require__(/*! ./store_m/store */ \"./react/store_m/store.ts\");\r\nReactDOM.render(React.createElement(react_redux_1.Provider, { store: store_1.store },\r\n    React.createElement(Blog_1.default, null)), document.getElementById('root'));\r\n\n\n//# sourceURL=webpack:///./react/entry.tsx?");

/***/ }),

/***/ "./react/store/data.ts":
/*!*****************************!*\
  !*** ./react/store/data.ts ***!
  \*****************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CATEGORIES = ['SimplifiedSource', 'ImplementedByMyself', 'Algorithm'];\r\nexports.CATEGORIESLISTS = {\r\n    SimplifiedSource: ['simpleReact', 'simpleAdvancedReact', 'simpleRedux', 'simpleAdvancedRedux', 'simpleReactRedux'],\r\n    ImplementedByMyself: ['MyPromise', 'MyRxJS', 'iQuery'],\r\n    Algorithm: ['quickSort', 'heapSort']\r\n};\r\nvar firstArticleTitle = exports.CATEGORIESLISTS[exports.CATEGORIES[0]][0];\r\nvar initialShowedLists = {};\r\nexports.initialShowedLists = initialShowedLists;\r\nexports.initialArticleTitle = getArticleTitle();\r\nvar initialCategory = getCategory(exports.initialArticleTitle);\r\nfor (var i = 0; i < exports.CATEGORIES.length; i++)\r\n    initialShowedLists[exports.CATEGORIES[i]] = false;\r\ninitialShowedLists[initialCategory] = true;\r\nfunction getArticleTitle() {\r\n    if (!localStorage.getItem('articleTitle'))\r\n        localStorage.setItem('articleTitle', firstArticleTitle);\r\n    return localStorage.getItem('articleTitle');\r\n}\r\nexports.getArticleTitle = getArticleTitle;\r\nfunction getCategory(articleTitle) {\r\n    for (var _i = 0, CATEGORIES_1 = exports.CATEGORIES; _i < CATEGORIES_1.length; _i++) {\r\n        var category = CATEGORIES_1[_i];\r\n        for (var _a = 0, _b = exports.CATEGORIESLISTS[category]; _a < _b.length; _a++) {\r\n            var article = _b[_a];\r\n            if (article === articleTitle)\r\n                return category;\r\n        }\r\n    }\r\n    return '';\r\n}\r\nexports.getCategory = getCategory;\r\n\n\n//# sourceURL=webpack:///./react/store/data.ts?");

/***/ }),

/***/ "./react/store_m/actions.ts":
/*!**********************************!*\
  !*** ./react/store_m/actions.ts ***!
  \**********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar axios_1 = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\r\n// const URL= 'http://127.0.0.1:3000';\r\nvar URL = 'https://www.vigoss.top';\r\nfunction changeArticle(articleTitle) {\r\n    return {\r\n        type: 'CHANGE_ARTICLE',\r\n        articleTitle: articleTitle\r\n    };\r\n}\r\nexports.changeArticle = changeArticle;\r\nfunction changeShowed(showed) {\r\n    return {\r\n        type: 'CHANGE_SHOWED',\r\n        showed: showed\r\n    };\r\n}\r\nexports.changeShowed = changeShowed;\r\nfunction requestArticle() {\r\n    return {\r\n        type: 'REQUEST_ARTICLE',\r\n        articleContent: 'fetching...'\r\n    };\r\n}\r\nexports.requestArticle = requestArticle;\r\nfunction receiveArticle(articleContent) {\r\n    return {\r\n        type: 'RECEIVE_ARTICLE',\r\n        articleContent: articleContent\r\n    };\r\n}\r\nexports.receiveArticle = receiveArticle;\r\nfunction fetchArticle(title) {\r\n    return function (dispatch, getState) {\r\n        dispatch(requestArticle());\r\n        localStorage.setItem('articleTitle', title);\r\n        var cachedHTML = sessionStorage.getItem(title);\r\n        if (cachedHTML)\r\n            return dispatch(receiveArticle(cachedHTML));\r\n        return axios_1.default.get(URL + \"/md/\" + title).then(function (res) {\r\n            var json = res.data;\r\n            dispatch(receiveArticle(json.html));\r\n            sessionStorage.setItem(json.title, json.html);\r\n        }, function (err) { return console.log(err); });\r\n    };\r\n}\r\nexports.fetchArticle = fetchArticle;\r\n\n\n//# sourceURL=webpack:///./react/store_m/actions.ts?");

/***/ }),

/***/ "./react/store_m/data.ts":
/*!*******************************!*\
  !*** ./react/store_m/data.ts ***!
  \*******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CATEGORIES = ['SimplifiedSource', 'ImplementedByMyself', 'Algorithm'];\r\nexports.CATEGORIESLISTS = {\r\n    SimplifiedSource: ['simpleReact', 'simpleAdvancedReact', 'simpleRedux', 'simpleAdvancedRedux', 'simpleReactRedux'],\r\n    ImplementedByMyself: ['MyPromise', 'MyRxJS', 'iQuery'],\r\n    Algorithm: ['quickSort', 'heapSort']\r\n};\r\nvar firstArticleTitle = exports.CATEGORIESLISTS[exports.CATEGORIES[0]][0];\r\nvar initialShowedLists = {};\r\nexports.initialShowedLists = initialShowedLists;\r\nexports.initialArticleTitle = getArticleTitle();\r\nvar initialCategory = getCategory(exports.initialArticleTitle);\r\nfor (var i = 0; i < exports.CATEGORIES.length; i++)\r\n    initialShowedLists[exports.CATEGORIES[i]] = false;\r\ninitialShowedLists[initialCategory] = true;\r\nfunction getArticleTitle() {\r\n    if (!localStorage.getItem('articleTitle'))\r\n        localStorage.setItem('articleTitle', firstArticleTitle);\r\n    return localStorage.getItem('articleTitle');\r\n}\r\nexports.getArticleTitle = getArticleTitle;\r\nfunction getCategory(articleTitle) {\r\n    for (var _i = 0, CATEGORIES_1 = exports.CATEGORIES; _i < CATEGORIES_1.length; _i++) {\r\n        var category = CATEGORIES_1[_i];\r\n        for (var _a = 0, _b = exports.CATEGORIESLISTS[category]; _a < _b.length; _a++) {\r\n            var article = _b[_a];\r\n            if (article === articleTitle)\r\n                return category;\r\n        }\r\n    }\r\n    return '';\r\n}\r\nexports.getCategory = getCategory;\r\n\n\n//# sourceURL=webpack:///./react/store_m/data.ts?");

/***/ }),

/***/ "./react/store_m/reducer.ts":
/*!**********************************!*\
  !*** ./react/store_m/reducer.ts ***!
  \**********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || Object.assign || function(t) {\r\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n        s = arguments[i];\r\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n            t[p] = s[p];\r\n    }\r\n    return t;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nfunction reducer(state, action) {\r\n    switch (action.type) {\r\n        case 'CHANGE_ARTICLE':\r\n            return __assign({}, state, { articleTitle: action.articleTitle });\r\n        case 'CHANGE_SHOWED':\r\n            return __assign({}, state, { showed: action.showed });\r\n        case 'REQUEST_ARTICLE':\r\n            return __assign({}, state, { articleContent: action.articleContent });\r\n        case 'RECEIVE_ARTICLE':\r\n            return __assign({}, state, { articleContent: action.articleContent });\r\n        default:\r\n            return state;\r\n    }\r\n}\r\nexports.reducer = reducer;\r\n\n\n//# sourceURL=webpack:///./react/store_m/reducer.ts?");

/***/ }),

/***/ "./react/store_m/store.ts":
/*!********************************!*\
  !*** ./react/store_m/store.ts ***!
  \********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nvar redux_thunk_1 = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/lib/index.js\");\r\nvar reducer_1 = __webpack_require__(/*! ./reducer */ \"./react/store_m/reducer.ts\");\r\nvar data_1 = __webpack_require__(/*! ./data */ \"./react/store_m/data.ts\");\r\nvar preloadedState = {\r\n    articleTitle: data_1.initialArticleTitle,\r\n    articleContent: '',\r\n    showed: false\r\n};\r\nexports.store = redux_1.createStore(reducer_1.reducer, preloadedState, redux_1.applyMiddleware(redux_thunk_1.default));\r\n// const unsubscribe = store.subscribe(() => { console.log(store.getState()); });\r\n\n\n//# sourceURL=webpack:///./react/store_m/store.ts?");

/***/ }),

/***/ "prop-types":
/*!****************************!*\
  !*** external "PropTypes" ***!
  \****************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

eval("module.exports = PropTypes;\n\n//# sourceURL=webpack:///external_%22PropTypes%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

eval("module.exports = React;\n\n//# sourceURL=webpack:///external_%22React%22?");

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

eval("module.exports = ReactDOM;\n\n//# sourceURL=webpack:///external_%22ReactDOM%22?");

/***/ }),

/***/ "react-redux":
/*!*****************************!*\
  !*** external "ReactRedux" ***!
  \*****************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

eval("module.exports = ReactRedux;\n\n//# sourceURL=webpack:///external_%22ReactRedux%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "Redux" ***!
  \************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

eval("module.exports = Redux;\n\n//# sourceURL=webpack:///external_%22Redux%22?");

/***/ })

/******/ });