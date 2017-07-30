/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.store = undefined;
exports.mapStateToProps = mapStateToProps;
exports.mapDispatchToProps = mapDispatchToProps;

var _redux = __webpack_require__(9);

const thunk = ({ dispatch, getState }) => next => action => typeof action === 'function' ? action(dispatch, getState) : next(action);

const actions = {
    getPoet: (poets, poemType) => ({ type: 'GETPOET', poets, poemType }),
    getPoem: poems => ({ type: 'GETPOEM', poems })
};

function reducer(state = { poets: [], poems: [], poemType: '' }, action) {
    const { poets, poems, poemType } = state;
    switch (action.type) {
        case 'GETPOET':
            return { poets: action.poets, poems, poemType: action.poemType };
        case 'GETPOEM':
            return { poets, poems: action.poems, poemType };
        default:
            return state;
    }
}

const store = exports.store = (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(thunk));

function mapStateToProps(state) {
    const { poets, poems } = state;
    return { poets, poems };
}

function mapDispatchToProps(dispatch) {
    const { getPoet, getPoem } = actions;
    return {
        getPoet: ev => {
            const poemType = ev.target.innerHTML;
            // const fetchUrl = `http://127.0.0.1:3000/poetry/${poemType}`;
            const fetchUrl = `https://www.vigoss.top/poetry/${poemType}`;
            fetch(fetchUrl).then(response => response.json(), err => console.log(err)).then(json => {
                dispatch(getPoet(json, poemType));
            });
        },
        getPoem: ev => {
            const { poemType } = store.getState();
            // const fetchUrl = `http://127.0.0.1:3000/poetry/${poemType}/author/${ev.target.innerHTML}`;
            const fetchUrl = `https://www.vigoss.top/poetry/${poemType}/author/${ev.target.innerHTML}`;
            fetch(fetchUrl).then(response => response.json(), err => console.log(err)).then(json => {
                dispatch(getPoem(json));
            });
        }
    };
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = ReactRedux;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactRouterDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _dec, _class;

var _react = __webpack_require__(8);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(2);

var _Poets = __webpack_require__(6);

var _Poets2 = _interopRequireDefault(_Poets);

var _vgStore = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let PoemNav = (_dec = (0, _reactRedux.connect)(_vgStore.mapStateToProps, _vgStore.mapDispatchToProps), _dec(_class = class PoemNav extends _react.Component {
    render() {
        const { poets, poems, getPoet, getPoem } = this.props;
        return React.createElement(
            _reactRouterDom.BrowserRouter,
            null,
            React.createElement(
                'div',
                null,
                React.createElement(
                    'ul',
                    { style: { display: 'flex', listStyle: 'none', alignContent: 'space-around' } },
                    React.createElement(
                        'li',
                        { style: { margin: '10px' } },
                        React.createElement(
                            _reactRouterDom.Link,
                            { to: '/' },
                            'Home'
                        )
                    ),
                    React.createElement(
                        'li',
                        { style: { margin: '10px' }, onClick: getPoet },
                        React.createElement(
                            _reactRouterDom.Link,
                            { to: '/songPoetry' },
                            'songPoetry'
                        )
                    ),
                    React.createElement(
                        'li',
                        { style: { margin: '10px' }, onClick: getPoet },
                        React.createElement(
                            _reactRouterDom.Link,
                            { to: '/northernSongPoem' },
                            'northernSongPoem'
                        )
                    ),
                    React.createElement(
                        'li',
                        { style: { margin: '10px' }, onClick: getPoet },
                        React.createElement(
                            _reactRouterDom.Link,
                            { to: '/southernSongPoem' },
                            'southernSongPoem'
                        )
                    )
                ),
                React.createElement('hr', null),
                React.createElement(_reactRouterDom.Route, { exact: true, path: '/', render: () => React.createElement(
                        'h2',
                        null,
                        'Home'
                    ) }),
                React.createElement(_reactRouterDom.Route, { path: '/songPoetry', render: ({ match }) => React.createElement(_Poets2.default, { url: match.url, poets: poets, getPoem: getPoem, poems: poems }) }),
                React.createElement(_reactRouterDom.Route, { path: '/northernSongPoem', render: ({ match }) => React.createElement(_Poets2.default, { url: match.url, poets: poets, getPoem: getPoem, poems: poems }) }),
                React.createElement(_reactRouterDom.Route, { path: '/southernSongPoem', render: ({ match }) => React.createElement(_Poets2.default, { url: match.url, poets: poets, getPoem: getPoem, poems: poems }) })
            )
        );
    }
}) || _class);
exports.default = PoemNav;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function Poem(props) {
    const poem = props.poem;
    const poemBody = poem.content.map((item, index) => React.createElement(
        "p",
        { key: index },
        item
    ));
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h2",
            null,
            poem.title
        ),
        React.createElement(
            "h4",
            null,
            poem.author
        ),
        React.createElement(
            "div",
            null,
            poemBody
        )
    );
}

exports.default = Poem;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRouterDom = __webpack_require__(2);

var _Poem = __webpack_require__(5);

var _Poem2 = _interopRequireDefault(_Poem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Poets(props) {
    const { poets, poems, url, getPoem } = props;
    const poemType = url.slice(1);
    const pts = poets.map((poet, index) => React.createElement(
        'li',
        { style: { width: '80px', margin: '2px' }, key: index, onClick: getPoem },
        React.createElement(
            _reactRouterDom.Link,
            { to: `${url}/${poet}` },
            poet
        )
    ));
    return React.createElement(
        'div',
        null,
        React.createElement(
            'ul',
            { style: { display: 'flex', flexWrap: 'wrap', listStyle: 'none', alignContent: 'space-around' } },
            pts
        ),
        React.createElement('hr', null),
        React.createElement(_reactRouterDom.Route, { exact: true, path: url, render: () => React.createElement(
                'h3',
                null,
                'poets'
            ) }),
        React.createElement(_reactRouterDom.Route, { path: `${url}/:poet`, render: ({ match }) => React.createElement(Poetry, { poet: match.params.poet, poemType: poemType, poems: poems }) })
    );
}

let Poetry = class Poetry extends React.Component {
    render() {
        const poems = this.props.poems.map(poem => React.createElement(_Poem2.default, { key: poem._id, poem: poem }));
        return React.createElement(
            'div',
            { style: { textAlign: 'center' } },
            poems
        );
    }
};
exports.default = Poets;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactDom = __webpack_require__(4);

var _reactRedux = __webpack_require__(1);

var _PoemNav = __webpack_require__(3);

var _PoemNav2 = _interopRequireDefault(_PoemNav);

var _vgStore = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(React.createElement(
    _reactRedux.Provider,
    { store: _vgStore.store },
    React.createElement(_PoemNav2.default, null)
), document.getElementById('root'));

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = Redux;

/***/ })
/******/ ]);