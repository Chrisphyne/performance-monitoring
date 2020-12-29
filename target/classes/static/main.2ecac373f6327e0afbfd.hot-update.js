webpackHotUpdate("main",{

/***/ "./src/main/webapp/app/config/store.ts":
/*!*********************************************!*\
  !*** ./src/main/webapp/app/config/store.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_promise_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-promise-middleware */ "./node_modules/redux-promise-middleware/dist/es/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var app_shared_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/reducers */ "./src/main/webapp/app/shared/reducers/index.ts");
/* harmony import */ var _devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./devtools */ "./src/main/webapp/app/config/devtools.tsx");
/* harmony import */ var _error_middleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error-middleware */ "./src/main/webapp/app/config/error-middleware.ts");
/* harmony import */ var _notification_middleware__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification-middleware */ "./src/main/webapp/app/config/notification-middleware.ts");
/* harmony import */ var _logger_middleware__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logger-middleware */ "./src/main/webapp/app/config/logger-middleware.ts");
/* harmony import */ var react_redux_loading_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux-loading-bar */ "./node_modules/react-redux-loading-bar/build/index.js");
/* harmony import */ var react_redux_loading_bar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux_loading_bar__WEBPACK_IMPORTED_MODULE_8__);









const defaultMiddlewares = [
    redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"],
    _error_middleware__WEBPACK_IMPORTED_MODULE_5__["default"],
    _notification_middleware__WEBPACK_IMPORTED_MODULE_6__["default"],
    redux_promise_middleware__WEBPACK_IMPORTED_MODULE_1__["default"],
    Object(react_redux_loading_bar__WEBPACK_IMPORTED_MODULE_8__["loadingBarMiddleware"])(),
    _logger_middleware__WEBPACK_IMPORTED_MODULE_7__["default"],
];
const composedMiddlewares = middlewares =>  true
    ? Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...defaultMiddlewares, ...middlewares), _devtools__WEBPACK_IMPORTED_MODULE_4__["default"].instrument())
    : undefined;
const initialize = (initialState, middlewares = []) => Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(app_shared_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], initialState, composedMiddlewares(middlewares));
/* harmony default export */ __webpack_exports__["default"] = (initialize);

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "C:\\Users\\dell\\Documents\\javascript\\vdm\\src\\main\\webapp\\app\\config\\store.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "C:\\Users\\dell\\Documents\\javascript\\vdm\\src\\main\\webapp\\app\\config\\store.ts"); } }(); 

/***/ })

})
//# sourceMappingURL=main.2ecac373f6327e0afbfd.hot-update.js.map