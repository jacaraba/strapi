self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Nav_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Nav.module.css */ "./components/Nav.module.css");
/* harmony import */ var _Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Nav_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\jacar\\Desktop\\strapi\\frontend\\components\\nav.js",
    _this = undefined;



 // Import custom CSS for styling

var Nav = function Nav(_ref) {
  var categories = _ref.categories;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: "".concat((_Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbar), " uk-navbar-container"),
      "data-uk-navbar": true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "".concat((_Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbarLeft), " uk-navbar-left"),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "".concat((_Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbarNav), " uk-navbar-nav"),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "".concat((_Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().navLink), " uk-link-reset animated bounce"),
                style: {
                  animationDelay: "0.5s"
                },
                children: "INICIO"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 13,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "".concat((_Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbarRight), " uk-navbar-right"),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "".concat((_Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbarNav), " uk-navbar-nav"),
          children: categories.map(function (category) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/category/".concat(category.attributes.slug),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "".concat((_Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().navLink), " uk-link-reset"),
                  children: category.attributes.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 24,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 19
              }, _this)
            }, category.id, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, _this);
};

_c = Nav;
/* harmony default export */ __webpack_exports__["default"] = (Nav);

var _c;

$RefreshReg$(_c, "Nav");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/Nav.module.css":
/*!***********************************!*\
  !*** ./components/Nav.module.css ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./Nav.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./components/Nav.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./Nav.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./components/Nav.module.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./Nav.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./components/Nav.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./components/Nav.module.css":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./components/Nav.module.css ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Nav.module.css */\r\n\r\n.Nav_navbar__318Nz {\r\n    background-color: #87CEEB; /* Color de fondo azul claro */\r\n    padding: 10px 0;\r\n  }\r\n  \r\n  .Nav_navbarLeft__2nuKV {\r\n    -webkit-animation: Nav_slideInLeft__3BPTp 1s ease-in-out;\r\n            animation: Nav_slideInLeft__3BPTp 1s ease-in-out; /* Animación de entrada desde la izquierda */\r\n  }\r\n  \r\n  .Nav_navbarRight__9OGZf {\r\n    -webkit-animation: Nav_slideInRight__UXw7K 1s ease-in-out;\r\n            animation: Nav_slideInRight__UXw7K 1s ease-in-out; /* Animación de entrada desde la derecha */\r\n  }\r\n  \r\n  .Nav_navbarNav__o0QS7 {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  \r\n  .Nav_navLink__3P0f- {\r\n    font-size: 4.5rem;\r\n    color: #ffffff; /* Color del texto */\r\n    margin: 0 15px;\r\n    text-decoration: none;\r\n    -webkit-transition: color 0.3s ease-in-out;\r\n    transition: color 0.3s ease-in-out;\r\n  }\r\n  \r\n  .Nav_navLink__3P0f-:hover {\r\n    color: #ff5500; /* Color del texto al pasar el cursor */\r\n  }\r\n  \r\n  @-webkit-keyframes Nav_slideInLeft__3BPTp {\r\n    from {\r\n      -webkit-transform: translateX(-100px);\r\n              transform: translateX(-100px);\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      -webkit-transform: translateX(0);\r\n              transform: translateX(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n  \r\n  @keyframes Nav_slideInLeft__3BPTp {\r\n    from {\r\n      -webkit-transform: translateX(-100px);\r\n              transform: translateX(-100px);\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      -webkit-transform: translateX(0);\r\n              transform: translateX(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n  \r\n  @-webkit-keyframes Nav_slideInRight__UXw7K {\r\n    from {\r\n      -webkit-transform: translateX(100px);\r\n              transform: translateX(100px);\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      -webkit-transform: translateX(0);\r\n              transform: translateX(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n  \r\n  @keyframes Nav_slideInRight__UXw7K {\r\n    from {\r\n      -webkit-transform: translateX(100px);\r\n              transform: translateX(100px);\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      -webkit-transform: translateX(0);\r\n              transform: translateX(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n  \r\n  .Nav_animated__3tO41.Nav_bounce__1eM8A {\r\n    -webkit-animation: Nav_bounce__1eM8A 1s infinite;\r\n            animation: Nav_bounce__1eM8A 1s infinite; /* Animación de rebote infinito */\r\n  }\r\n  \r\n  @-webkit-keyframes Nav_bounce__1eM8A {\r\n    0%, 20%, 50%, 80%, 100% {\r\n      -webkit-transform: translateY(0);\r\n              transform: translateY(0);\r\n    }\r\n    40% {\r\n      -webkit-transform: translateY(-30px);\r\n              transform: translateY(-30px);\r\n    }\r\n    60% {\r\n      -webkit-transform: translateY(-15px);\r\n              transform: translateY(-15px);\r\n    }\r\n  }\r\n  \r\n  @keyframes Nav_bounce__1eM8A {\r\n    0%, 20%, 50%, 80%, 100% {\r\n      -webkit-transform: translateY(0);\r\n              transform: translateY(0);\r\n    }\r\n    40% {\r\n      -webkit-transform: translateY(-30px);\r\n              transform: translateY(-30px);\r\n    }\r\n    60% {\r\n      -webkit-transform: translateY(-15px);\r\n              transform: translateY(-15px);\r\n    }\r\n  }\r\n  ", "",{"version":3,"sources":["webpack://components/Nav.module.css"],"names":[],"mappings":"AAAA,mBAAmB;;AAEnB;IACI,yBAAyB,EAAE,8BAA8B;IACzD,eAAe;EACjB;;EAEA;IACE,wDAAqC;YAArC,gDAAqC,EAAE,4CAA4C;EACrF;;EAEA;IACE,yDAAsC;YAAtC,iDAAsC,EAAE,0CAA0C;EACpF;;EAEA;IACE,aAAa;IACb,mBAAmB;EACrB;;EAEA;IACE,iBAAiB;IACjB,cAAc,EAAE,oBAAoB;IACpC,cAAc;IACd,qBAAqB;IACrB,0CAAkC;IAAlC,kCAAkC;EACpC;;EAEA;IACE,cAAc,EAAE,uCAAuC;EACzD;;EAEA;IACE;MACE,qCAA6B;cAA7B,6BAA6B;MAC7B,UAAU;IACZ;IACA;MACE,gCAAwB;cAAxB,wBAAwB;MACxB,UAAU;IACZ;EACF;;EATA;IACE;MACE,qCAA6B;cAA7B,6BAA6B;MAC7B,UAAU;IACZ;IACA;MACE,gCAAwB;cAAxB,wBAAwB;MACxB,UAAU;IACZ;EACF;;EAEA;IACE;MACE,oCAA4B;cAA5B,4BAA4B;MAC5B,UAAU;IACZ;IACA;MACE,gCAAwB;cAAxB,wBAAwB;MACxB,UAAU;IACZ;EACF;;EATA;IACE;MACE,oCAA4B;cAA5B,4BAA4B;MAC5B,UAAU;IACZ;IACA;MACE,gCAAwB;cAAxB,wBAAwB;MACxB,UAAU;IACZ;EACF;;EAEA;IACE,gDAA6B;YAA7B,wCAA6B,EAAE,iCAAiC;EAClE;;EAEA;IACE;MACE,gCAAwB;cAAxB,wBAAwB;IAC1B;IACA;MACE,oCAA4B;cAA5B,4BAA4B;IAC9B;IACA;MACE,oCAA4B;cAA5B,4BAA4B;IAC9B;EACF;;EAVA;IACE;MACE,gCAAwB;cAAxB,wBAAwB;IAC1B;IACA;MACE,oCAA4B;cAA5B,4BAA4B;IAC9B;IACA;MACE,oCAA4B;cAA5B,4BAA4B;IAC9B;EACF","sourcesContent":["/* Nav.module.css */\r\n\r\n.navbar {\r\n    background-color: #87CEEB; /* Color de fondo azul claro */\r\n    padding: 10px 0;\r\n  }\r\n  \r\n  .navbarLeft {\r\n    animation: slideInLeft 1s ease-in-out; /* Animación de entrada desde la izquierda */\r\n  }\r\n  \r\n  .navbarRight {\r\n    animation: slideInRight 1s ease-in-out; /* Animación de entrada desde la derecha */\r\n  }\r\n  \r\n  .navbarNav {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  \r\n  .navLink {\r\n    font-size: 4.5rem;\r\n    color: #ffffff; /* Color del texto */\r\n    margin: 0 15px;\r\n    text-decoration: none;\r\n    transition: color 0.3s ease-in-out;\r\n  }\r\n  \r\n  .navLink:hover {\r\n    color: #ff5500; /* Color del texto al pasar el cursor */\r\n  }\r\n  \r\n  @keyframes slideInLeft {\r\n    from {\r\n      transform: translateX(-100px);\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      transform: translateX(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n  \r\n  @keyframes slideInRight {\r\n    from {\r\n      transform: translateX(100px);\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      transform: translateX(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n  \r\n  .animated.bounce {\r\n    animation: bounce 1s infinite; /* Animación de rebote infinito */\r\n  }\r\n  \r\n  @keyframes bounce {\r\n    0%, 20%, 50%, 80%, 100% {\r\n      transform: translateY(0);\r\n    }\r\n    40% {\r\n      transform: translateY(-30px);\r\n    }\r\n    60% {\r\n      transform: translateY(-15px);\r\n    }\r\n  }\r\n  "],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"navbar": "Nav_navbar__318Nz",
	"navbarLeft": "Nav_navbarLeft__2nuKV",
	"slideInLeft": "Nav_slideInLeft__3BPTp",
	"navbarRight": "Nav_navbarRight__9OGZf",
	"slideInRight": "Nav_slideInRight__UXw7K",
	"navbarNav": "Nav_navbarNav__o0QS7",
	"navLink": "Nav_navLink__3P0f-",
	"animated": "Nav_animated__3tO41",
	"bounce": "Nav_bounce__1eM8A"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2Lm1vZHVsZS5jc3M/NmE0ZSIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYubW9kdWxlLmNzcyJdLCJuYW1lcyI6WyJOYXYiLCJjYXRlZ29yaWVzIiwic3R5bGVzIiwiYW5pbWF0aW9uRGVsYXkiLCJtYXAiLCJjYXRlZ29yeSIsImF0dHJpYnV0ZXMiLCJzbHVnIiwibmFtZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBQ3VDOztBQUV2QyxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFvQjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFDOUIsc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLGVBQVMsWUFBS0MsK0RBQUwseUJBQWQ7QUFBd0QsNEJBQXhEO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxZQUFLQSxtRUFBTCxvQkFBZDtBQUFBLCtCQUNFO0FBQUksbUJBQVMsWUFBS0Esa0VBQUwsbUJBQWI7QUFBQSxpQ0FDRTtBQUFBLG1DQUNFLDhEQUFDLGtEQUFEO0FBQU0sa0JBQUksRUFBQyxHQUFYO0FBQUEscUNBQ0U7QUFBRyx5QkFBUyxZQUFLQSxnRUFBTCxtQ0FBWjtBQUFpRSxxQkFBSyxFQUFFO0FBQUVDLGdDQUFjLEVBQUU7QUFBbEIsaUJBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBVUU7QUFBSyxpQkFBUyxZQUFLRCxvRUFBTCxxQkFBZDtBQUFBLCtCQUNFO0FBQUksbUJBQVMsWUFBS0Esa0VBQUwsbUJBQWI7QUFBQSxvQkFDR0QsVUFBVSxDQUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42NmU4YmMwZGE4NGU1ZDExYjcwMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9OYXYubW9kdWxlLmNzc1wiOyAvLyBJbXBvcnQgY3VzdG9tIENTUyBmb3Igc3R5bGluZ1xuXG5jb25zdCBOYXYgPSAoeyBjYXRlZ29yaWVzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPG5hdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5uYXZiYXJ9IHVrLW5hdmJhci1jb250YWluZXJgfSBkYXRhLXVrLW5hdmJhcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5uYXZiYXJMZWZ0fSB1ay1uYXZiYXItbGVmdGB9PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2Ake3N0eWxlcy5uYXZiYXJOYXZ9IHVrLW5hdmJhci1uYXZgfT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ake3N0eWxlcy5uYXZMaW5rfSB1ay1saW5rLXJlc2V0IGFuaW1hdGVkIGJvdW5jZWB9IHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiBcIjAuNXNcIiB9fT5JTklDSU88L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMubmF2YmFyUmlnaHR9IHVrLW5hdmJhci1yaWdodGB9PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2Ake3N0eWxlcy5uYXZiYXJOYXZ9IHVrLW5hdmJhci1uYXZgfT5cbiAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeS5pZH0+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2NhdGVnb3J5LyR7Y2F0ZWdvcnkuYXR0cmlidXRlcy5zbHVnfWB9PlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ake3N0eWxlcy5uYXZMaW5rfSB1ay1saW5rLXJlc2V0YH0+e2NhdGVnb3J5LmF0dHJpYnV0ZXMubmFtZX08L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMl0hLi9OYXYubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMl0hLi9OYXYubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzJdIS4vTmF2Lm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogTmF2Lm1vZHVsZS5jc3MgKi9cXHJcXG5cXHJcXG4uTmF2X25hdmJhcl9fMzE4Tnoge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODdDRUVCOyAvKiBDb2xvciBkZSBmb25kbyBhenVsIGNsYXJvICovXFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLk5hdl9uYXZiYXJMZWZ0X18ybnVLViB7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBOYXZfc2xpZGVJbkxlZnRfXzNCUFRwIDFzIGVhc2UtaW4tb3V0O1xcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbjogTmF2X3NsaWRlSW5MZWZ0X18zQlBUcCAxcyBlYXNlLWluLW91dDsgLyogQW5pbWFjacOzbiBkZSBlbnRyYWRhIGRlc2RlIGxhIGl6cXVpZXJkYSAqL1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuTmF2X25hdmJhclJpZ2h0X185T0daZiB7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBOYXZfc2xpZGVJblJpZ2h0X19VWHc3SyAxcyBlYXNlLWluLW91dDtcXHJcXG4gICAgICAgICAgICBhbmltYXRpb246IE5hdl9zbGlkZUluUmlnaHRfX1VYdzdLIDFzIGVhc2UtaW4tb3V0OyAvKiBBbmltYWNpw7NuIGRlIGVudHJhZGEgZGVzZGUgbGEgZGVyZWNoYSAqL1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuTmF2X25hdmJhck5hdl9fbzBRUzcge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuTmF2X25hdkxpbmtfXzNQMGYtIHtcXHJcXG4gICAgZm9udC1zaXplOiA0LjVyZW07XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmOyAvKiBDb2xvciBkZWwgdGV4dG8gKi9cXHJcXG4gICAgbWFyZ2luOiAwIDE1cHg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuTmF2X25hdkxpbmtfXzNQMGYtOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICNmZjU1MDA7IC8qIENvbG9yIGRlbCB0ZXh0byBhbCBwYXNhciBlbCBjdXJzb3IgKi9cXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgQC13ZWJraXQta2V5ZnJhbWVzIE5hdl9zbGlkZUluTGVmdF9fM0JQVHAge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpO1xcclxcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAa2V5ZnJhbWVzIE5hdl9zbGlkZUluTGVmdF9fM0JQVHAge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpO1xcclxcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgXFxyXFxuICBALXdlYmtpdC1rZXlmcmFtZXMgTmF2X3NsaWRlSW5SaWdodF9fVVh3N0sge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweCk7XFxyXFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwcHgpO1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgQGtleWZyYW1lcyBOYXZfc2xpZGVJblJpZ2h0X19VWHc3SyB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHB4KTtcXHJcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweCk7XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuTmF2X2FuaW1hdGVkX18zdE80MS5OYXZfYm91bmNlX18xZU04QSB7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBOYXZfYm91bmNlX18xZU04QSAxcyBpbmZpbml0ZTtcXHJcXG4gICAgICAgICAgICBhbmltYXRpb246IE5hdl9ib3VuY2VfXzFlTThBIDFzIGluZmluaXRlOyAvKiBBbmltYWNpw7NuIGRlIHJlYm90ZSBpbmZpbml0byAqL1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBALXdlYmtpdC1rZXlmcmFtZXMgTmF2X2JvdW5jZV9fMWVNOEEge1xcclxcbiAgICAwJSwgMjAlLCA1MCUsIDgwJSwgMTAwJSB7XFxyXFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICAgIH1cXHJcXG4gICAgNDAlIHtcXHJcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XFxyXFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xcclxcbiAgICB9XFxyXFxuICAgIDYwJSB7XFxyXFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xcclxcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAa2V5ZnJhbWVzIE5hdl9ib3VuY2VfXzFlTThBIHtcXHJcXG4gICAgMCUsIDIwJSwgNTAlLCA4MCUsIDEwMCUge1xcclxcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgICB9XFxyXFxuICAgIDQwJSB7XFxyXFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xcclxcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcXHJcXG4gICAgfVxcclxcbiAgICA2MCUge1xcclxcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcXHJcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTVweCk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIFwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL05hdi5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG1CQUFtQjs7QUFFbkI7SUFDSSx5QkFBeUIsRUFBRSw4QkFBOEI7SUFDekQsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHdEQUFxQztZQUFyQyxnREFBcUMsRUFBRSw0Q0FBNEM7RUFDckY7O0VBRUE7SUFDRSx5REFBc0M7WUFBdEMsaURBQXNDLEVBQUUsMENBQTBDO0VBQ3BGOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjLEVBQUUsb0JBQW9CO0lBQ3BDLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsMENBQWtDO0lBQWxDLGtDQUFrQztFQUNwQzs7RUFFQTtJQUNFLGNBQWMsRUFBRSx1Q0FBdUM7RUFDekQ7O0VBRUE7SUFDRTtNQUNFLHFDQUE2QjtjQUE3Qiw2QkFBNkI7TUFDN0IsVUFBVTtJQUNaO0lBQ0E7TUFDRSxnQ0FBd0I7Y0FBeEIsd0JBQXdCO01BQ3hCLFVBQVU7SUFDWjtFQUNGOztFQVRBO0lBQ0U7TUFDRSxxQ0FBNkI7Y0FBN0IsNkJBQTZCO01BQzdCLFVBQVU7SUFDWjtJQUNBO01BQ0UsZ0NBQXdCO2NBQXhCLHdCQUF3QjtNQUN4QixVQUFVO0lBQ1o7RUFDRjs7RUFFQTtJQUNFO01BQ0Usb0NBQTRCO2NBQTVCLDRCQUE0QjtNQUM1QixVQUFVO0lBQ1o7SUFDQTtNQUNFLGdDQUF3QjtjQUF4Qix3QkFBd0I7TUFDeEIsVUFBVTtJQUNaO0VBQ0Y7O0VBVEE7SUFDRTtNQUNFLG9DQUE0QjtjQUE1Qiw0QkFBNEI7TUFDNUIsVUFBVTtJQUNaO0lBQ0E7TUFDRSxnQ0FBd0I7Y0FBeEIsd0JBQXdCO01BQ3hCLFVBQVU7SUFDWjtFQUNGOztFQUVBO0lBQ0UsZ0RBQTZCO1lBQTdCLHdDQUE2QixFQUFFLGlDQUFpQztFQUNsRTs7RUFFQTtJQUNFO01BQ0UsZ0NBQXdCO2NBQXhCLHdCQUF3QjtJQUMxQjtJQUNBO01BQ0Usb0NBQTRCO2NBQTVCLDRCQUE0QjtJQUM5QjtJQUNBO01BQ0Usb0NBQTRCO2NBQTVCLDRCQUE0QjtJQUM5QjtFQUNGOztFQVZBO0lBQ0U7TUFDRSxnQ0FBd0I7Y0FBeEIsd0JBQXdCO0lBQzFCO0lBQ0E7TUFDRSxvQ0FBNEI7Y0FBNUIsNEJBQTRCO0lBQzlCO0lBQ0E7TUFDRSxvQ0FBNEI7Y0FBNUIsNEJBQTRCO0lBQzlCO0VBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogTmF2Lm1vZHVsZS5jc3MgKi9cXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg3Q0VFQjsgLyogQ29sb3IgZGUgZm9uZG8gYXp1bCBjbGFybyAqL1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5uYXZiYXJMZWZ0IHtcXHJcXG4gICAgYW5pbWF0aW9uOiBzbGlkZUluTGVmdCAxcyBlYXNlLWluLW91dDsgLyogQW5pbWFjacOzbiBkZSBlbnRyYWRhIGRlc2RlIGxhIGl6cXVpZXJkYSAqL1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubmF2YmFyUmlnaHQge1xcclxcbiAgICBhbmltYXRpb246IHNsaWRlSW5SaWdodCAxcyBlYXNlLWluLW91dDsgLyogQW5pbWFjacOzbiBkZSBlbnRyYWRhIGRlc2RlIGxhIGRlcmVjaGEgKi9cXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm5hdmJhck5hdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5uYXZMaW5rIHtcXHJcXG4gICAgZm9udC1zaXplOiA0LjVyZW07XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmOyAvKiBDb2xvciBkZWwgdGV4dG8gKi9cXHJcXG4gICAgbWFyZ2luOiAwIDE1cHg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm5hdkxpbms6aG92ZXIge1xcclxcbiAgICBjb2xvcjogI2ZmNTUwMDsgLyogQ29sb3IgZGVsIHRleHRvIGFsIHBhc2FyIGVsIGN1cnNvciAqL1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAa2V5ZnJhbWVzIHNsaWRlSW5MZWZ0IHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgQGtleWZyYW1lcyBzbGlkZUluUmlnaHQge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwcHgpO1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5hbmltYXRlZC5ib3VuY2Uge1xcclxcbiAgICBhbmltYXRpb246IGJvdW5jZSAxcyBpbmZpbml0ZTsgLyogQW5pbWFjacOzbiBkZSByZWJvdGUgaW5maW5pdG8gKi9cXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgQGtleWZyYW1lcyBib3VuY2Uge1xcclxcbiAgICAwJSwgMjAlLCA1MCUsIDgwJSwgMTAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgICB9XFxyXFxuICAgIDQwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcXHJcXG4gICAgfVxcclxcbiAgICA2MCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTVweCk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIm5hdmJhclwiOiBcIk5hdl9uYXZiYXJfXzMxOE56XCIsXG5cdFwibmF2YmFyTGVmdFwiOiBcIk5hdl9uYXZiYXJMZWZ0X18ybnVLVlwiLFxuXHRcInNsaWRlSW5MZWZ0XCI6IFwiTmF2X3NsaWRlSW5MZWZ0X18zQlBUcFwiLFxuXHRcIm5hdmJhclJpZ2h0XCI6IFwiTmF2X25hdmJhclJpZ2h0X185T0daZlwiLFxuXHRcInNsaWRlSW5SaWdodFwiOiBcIk5hdl9zbGlkZUluUmlnaHRfX1VYdzdLXCIsXG5cdFwibmF2YmFyTmF2XCI6IFwiTmF2X25hdmJhck5hdl9fbzBRUzdcIixcblx0XCJuYXZMaW5rXCI6IFwiTmF2X25hdkxpbmtfXzNQMGYtXCIsXG5cdFwiYW5pbWF0ZWRcIjogXCJOYXZfYW5pbWF0ZWRfXzN0TzQxXCIsXG5cdFwiYm91bmNlXCI6IFwiTmF2X2JvdW5jZV9fMWVNOEFcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9