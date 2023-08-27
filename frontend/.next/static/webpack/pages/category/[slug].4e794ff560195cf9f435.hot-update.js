self["webpackHotUpdate_N_E"]("pages/category/[slug]",{

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
___CSS_LOADER_EXPORT___.push([module.id, "/* Nav.module.css */\r\n\r\n.Nav_navbar__318Nz {\r\n    background-color: #ff9900; /* Color de fondo del menú */\r\n    padding: 10px 0;\r\n  }\r\n  \r\n  .Nav_navbarLeft__2nuKV {\r\n    -webkit-animation: Nav_slideInLeft__3BPTp 1s ease-in-out;\r\n            animation: Nav_slideInLeft__3BPTp 1s ease-in-out; /* Animación de entrada desde la izquierda */\r\n  }\r\n  \r\n  .Nav_navbarRight__9OGZf {\r\n    -webkit-animation: Nav_slideInRight__UXw7K 1s ease-in-out;\r\n            animation: Nav_slideInRight__UXw7K 1s ease-in-out; /* Animación de entrada desde la derecha */\r\n  }\r\n  \r\n  .Nav_navbarNav__o0QS7 {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  \r\n  .Nav_navLink__3P0f- {\r\n    font-size: 1.5rem;\r\n    color: #ffffff; /* Color del texto */\r\n    margin: 0 15px;\r\n    text-decoration: none;\r\n    -webkit-transition: color 0.3s ease-in-out;\r\n    transition: color 0.3s ease-in-out;\r\n  }\r\n  \r\n  .Nav_navLink__3P0f-:hover {\r\n    color: #ff5500; /* Color del texto al pasar el cursor */\r\n  }\r\n  \r\n  @-webkit-keyframes Nav_slideInLeft__3BPTp {\r\n    from {\r\n      -webkit-transform: translateX(-100px);\r\n              transform: translateX(-100px);\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      -webkit-transform: translateX(0);\r\n              transform: translateX(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n  \r\n  @keyframes Nav_slideInLeft__3BPTp {\r\n    from {\r\n      -webkit-transform: translateX(-100px);\r\n              transform: translateX(-100px);\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      -webkit-transform: translateX(0);\r\n              transform: translateX(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n  \r\n  @-webkit-keyframes Nav_slideInRight__UXw7K {\r\n    from {\r\n      -webkit-transform: translateX(100px);\r\n              transform: translateX(100px);\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      -webkit-transform: translateX(0);\r\n              transform: translateX(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n  \r\n  @keyframes Nav_slideInRight__UXw7K {\r\n    from {\r\n      -webkit-transform: translateX(100px);\r\n              transform: translateX(100px);\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      -webkit-transform: translateX(0);\r\n              transform: translateX(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n  \r\n  .Nav_animated__3tO41.Nav_bounce__1eM8A {\r\n    -webkit-animation: Nav_bounce__1eM8A 1s infinite;\r\n            animation: Nav_bounce__1eM8A 1s infinite; /* Animación de rebote infinito */\r\n  }\r\n  \r\n  @-webkit-keyframes Nav_bounce__1eM8A {\r\n    0%, 20%, 50%, 80%, 100% {\r\n      -webkit-transform: translateY(0);\r\n              transform: translateY(0);\r\n    }\r\n    40% {\r\n      -webkit-transform: translateY(-30px);\r\n              transform: translateY(-30px);\r\n    }\r\n    60% {\r\n      -webkit-transform: translateY(-15px);\r\n              transform: translateY(-15px);\r\n    }\r\n  }\r\n  \r\n  @keyframes Nav_bounce__1eM8A {\r\n    0%, 20%, 50%, 80%, 100% {\r\n      -webkit-transform: translateY(0);\r\n              transform: translateY(0);\r\n    }\r\n    40% {\r\n      -webkit-transform: translateY(-30px);\r\n              transform: translateY(-30px);\r\n    }\r\n    60% {\r\n      -webkit-transform: translateY(-15px);\r\n              transform: translateY(-15px);\r\n    }\r\n  }\r\n  ", "",{"version":3,"sources":["webpack://components/Nav.module.css"],"names":[],"mappings":"AAAA,mBAAmB;;AAEnB;IACI,yBAAyB,EAAE,4BAA4B;IACvD,eAAe;EACjB;;EAEA;IACE,wDAAqC;YAArC,gDAAqC,EAAE,4CAA4C;EACrF;;EAEA;IACE,yDAAsC;YAAtC,iDAAsC,EAAE,0CAA0C;EACpF;;EAEA;IACE,aAAa;IACb,mBAAmB;EACrB;;EAEA;IACE,iBAAiB;IACjB,cAAc,EAAE,oBAAoB;IACpC,cAAc;IACd,qBAAqB;IACrB,0CAAkC;IAAlC,kCAAkC;EACpC;;EAEA;IACE,cAAc,EAAE,uCAAuC;EACzD;;EAEA;IACE;MACE,qCAA6B;cAA7B,6BAA6B;MAC7B,UAAU;IACZ;IACA;MACE,gCAAwB;cAAxB,wBAAwB;MACxB,UAAU;IACZ;EACF;;EATA;IACE;MACE,qCAA6B;cAA7B,6BAA6B;MAC7B,UAAU;IACZ;IACA;MACE,gCAAwB;cAAxB,wBAAwB;MACxB,UAAU;IACZ;EACF;;EAEA;IACE;MACE,oCAA4B;cAA5B,4BAA4B;MAC5B,UAAU;IACZ;IACA;MACE,gCAAwB;cAAxB,wBAAwB;MACxB,UAAU;IACZ;EACF;;EATA;IACE;MACE,oCAA4B;cAA5B,4BAA4B;MAC5B,UAAU;IACZ;IACA;MACE,gCAAwB;cAAxB,wBAAwB;MACxB,UAAU;IACZ;EACF;;EAEA;IACE,gDAA6B;YAA7B,wCAA6B,EAAE,iCAAiC;EAClE;;EAEA;IACE;MACE,gCAAwB;cAAxB,wBAAwB;IAC1B;IACA;MACE,oCAA4B;cAA5B,4BAA4B;IAC9B;IACA;MACE,oCAA4B;cAA5B,4BAA4B;IAC9B;EACF;;EAVA;IACE;MACE,gCAAwB;cAAxB,wBAAwB;IAC1B;IACA;MACE,oCAA4B;cAA5B,4BAA4B;IAC9B;IACA;MACE,oCAA4B;cAA5B,4BAA4B;IAC9B;EACF","sourcesContent":["/* Nav.module.css */\r\n\r\n.navbar {\r\n    background-color: #ff9900; /* Color de fondo del menú */\r\n    padding: 10px 0;\r\n  }\r\n  \r\n  .navbarLeft {\r\n    animation: slideInLeft 1s ease-in-out; /* Animación de entrada desde la izquierda */\r\n  }\r\n  \r\n  .navbarRight {\r\n    animation: slideInRight 1s ease-in-out; /* Animación de entrada desde la derecha */\r\n  }\r\n  \r\n  .navbarNav {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  \r\n  .navLink {\r\n    font-size: 1.5rem;\r\n    color: #ffffff; /* Color del texto */\r\n    margin: 0 15px;\r\n    text-decoration: none;\r\n    transition: color 0.3s ease-in-out;\r\n  }\r\n  \r\n  .navLink:hover {\r\n    color: #ff5500; /* Color del texto al pasar el cursor */\r\n  }\r\n  \r\n  @keyframes slideInLeft {\r\n    from {\r\n      transform: translateX(-100px);\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      transform: translateX(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n  \r\n  @keyframes slideInRight {\r\n    from {\r\n      transform: translateX(100px);\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      transform: translateX(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n  \r\n  .animated.bounce {\r\n    animation: bounce 1s infinite; /* Animación de rebote infinito */\r\n  }\r\n  \r\n  @keyframes bounce {\r\n    0%, 20%, 50%, 80%, 100% {\r\n      transform: translateY(0);\r\n    }\r\n    40% {\r\n      transform: translateY(-30px);\r\n    }\r\n    60% {\r\n      transform: translateY(-15px);\r\n    }\r\n  }\r\n  "],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2Lm1vZHVsZS5jc3M/NmE0ZSIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYubW9kdWxlLmNzcyJdLCJuYW1lcyI6WyJOYXYiLCJjYXRlZ29yaWVzIiwic3R5bGVzIiwiYW5pbWF0aW9uRGVsYXkiLCJtYXAiLCJjYXRlZ29yeSIsImF0dHJpYnV0ZXMiLCJzbHVnIiwibmFtZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBQ3VDOztBQUV2QyxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFvQjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFDOUIsc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLGVBQVMsWUFBS0MsK0RBQUwseUJBQWQ7QUFBd0QsNEJBQXhEO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxZQUFLQSxtRUFBTCxvQkFBZDtBQUFBLCtCQUNFO0FBQUksbUJBQVMsWUFBS0Esa0VBQUwsbUJBQWI7QUFBQSxpQ0FDRTtBQUFBLG1DQUNFLDhEQUFDLGtEQUFEO0FBQU0sa0JBQUksRUFBQyxHQUFYO0FBQUEscUNBQ0U7QUFBRyx5QkFBUyxZQUFLQSxnRUFBTCxtQ0FBWjtBQUFpRSxxQkFBSyxFQUFFO0FBQUVDLGdDQUFjLEVBQUU7QUFBbEIsaUJBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBVUU7QUFBSyxpQkFBUyxZQUFLRCxvRUFBTCxxQkFBZDtBQUFBLCtCQUNFO0FBQUksbUJBQVMsWUFBS0Esa0VBQUwsbUJBQWI7QUFBQSxvQkFDR0QsVUFBVSxDQUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXRlZ29yeS9bc2x1Z10uNGU3OTRmZjU2MDE5NWNmOWY0MzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTmF2Lm1vZHVsZS5jc3NcIjsgLy8gSW1wb3J0IGN1c3RvbSBDU1MgZm9yIHN0eWxpbmdcblxuY29uc3QgTmF2ID0gKHsgY2F0ZWdvcmllcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMubmF2YmFyfSB1ay1uYXZiYXItY29udGFpbmVyYH0gZGF0YS11ay1uYXZiYXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMubmF2YmFyTGVmdH0gdWstbmF2YmFyLWxlZnRgfT5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtgJHtzdHlsZXMubmF2YmFyTmF2fSB1ay1uYXZiYXItbmF2YH0+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgJHtzdHlsZXMubmF2TGlua30gdWstbGluay1yZXNldCBhbmltYXRlZCBib3VuY2VgfSBzdHlsZT17eyBhbmltYXRpb25EZWxheTogXCIwLjVzXCIgfX0+SU5JQ0lPPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLm5hdmJhclJpZ2h0fSB1ay1uYXZiYXItcmlnaHRgfT5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtgJHtzdHlsZXMubmF2YmFyTmF2fSB1ay1uYXZiYXItbmF2YH0+XG4gICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17Y2F0ZWdvcnkuaWR9PlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9jYXRlZ29yeS8ke2NhdGVnb3J5LmF0dHJpYnV0ZXMuc2x1Z31gfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgJHtzdHlsZXMubmF2TGlua30gdWstbGluay1yZXNldGB9PntjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXY7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzJdIS4vTmF2Lm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzJdIS4vTmF2Lm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsyXSEuL05hdi5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIE5hdi5tb2R1bGUuY3NzICovXFxyXFxuXFxyXFxuLk5hdl9uYXZiYXJfXzMxOE56IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTkwMDsgLyogQ29sb3IgZGUgZm9uZG8gZGVsIG1lbsO6ICovXFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLk5hdl9uYXZiYXJMZWZ0X18ybnVLViB7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBOYXZfc2xpZGVJbkxlZnRfXzNCUFRwIDFzIGVhc2UtaW4tb3V0O1xcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbjogTmF2X3NsaWRlSW5MZWZ0X18zQlBUcCAxcyBlYXNlLWluLW91dDsgLyogQW5pbWFjacOzbiBkZSBlbnRyYWRhIGRlc2RlIGxhIGl6cXVpZXJkYSAqL1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuTmF2X25hdmJhclJpZ2h0X185T0daZiB7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBOYXZfc2xpZGVJblJpZ2h0X19VWHc3SyAxcyBlYXNlLWluLW91dDtcXHJcXG4gICAgICAgICAgICBhbmltYXRpb246IE5hdl9zbGlkZUluUmlnaHRfX1VYdzdLIDFzIGVhc2UtaW4tb3V0OyAvKiBBbmltYWNpw7NuIGRlIGVudHJhZGEgZGVzZGUgbGEgZGVyZWNoYSAqL1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuTmF2X25hdmJhck5hdl9fbzBRUzcge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuTmF2X25hdkxpbmtfXzNQMGYtIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmOyAvKiBDb2xvciBkZWwgdGV4dG8gKi9cXHJcXG4gICAgbWFyZ2luOiAwIDE1cHg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuTmF2X25hdkxpbmtfXzNQMGYtOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICNmZjU1MDA7IC8qIENvbG9yIGRlbCB0ZXh0byBhbCBwYXNhciBlbCBjdXJzb3IgKi9cXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgQC13ZWJraXQta2V5ZnJhbWVzIE5hdl9zbGlkZUluTGVmdF9fM0JQVHAge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpO1xcclxcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAa2V5ZnJhbWVzIE5hdl9zbGlkZUluTGVmdF9fM0JQVHAge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpO1xcclxcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgXFxyXFxuICBALXdlYmtpdC1rZXlmcmFtZXMgTmF2X3NsaWRlSW5SaWdodF9fVVh3N0sge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweCk7XFxyXFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwcHgpO1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgQGtleWZyYW1lcyBOYXZfc2xpZGVJblJpZ2h0X19VWHc3SyB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHB4KTtcXHJcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweCk7XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuTmF2X2FuaW1hdGVkX18zdE80MS5OYXZfYm91bmNlX18xZU04QSB7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBOYXZfYm91bmNlX18xZU04QSAxcyBpbmZpbml0ZTtcXHJcXG4gICAgICAgICAgICBhbmltYXRpb246IE5hdl9ib3VuY2VfXzFlTThBIDFzIGluZmluaXRlOyAvKiBBbmltYWNpw7NuIGRlIHJlYm90ZSBpbmZpbml0byAqL1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBALXdlYmtpdC1rZXlmcmFtZXMgTmF2X2JvdW5jZV9fMWVNOEEge1xcclxcbiAgICAwJSwgMjAlLCA1MCUsIDgwJSwgMTAwJSB7XFxyXFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICAgIH1cXHJcXG4gICAgNDAlIHtcXHJcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XFxyXFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xcclxcbiAgICB9XFxyXFxuICAgIDYwJSB7XFxyXFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xcclxcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAa2V5ZnJhbWVzIE5hdl9ib3VuY2VfXzFlTThBIHtcXHJcXG4gICAgMCUsIDIwJSwgNTAlLCA4MCUsIDEwMCUge1xcclxcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgICB9XFxyXFxuICAgIDQwJSB7XFxyXFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xcclxcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcXHJcXG4gICAgfVxcclxcbiAgICA2MCUge1xcclxcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcXHJcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTVweCk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIFwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL05hdi5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG1CQUFtQjs7QUFFbkI7SUFDSSx5QkFBeUIsRUFBRSw0QkFBNEI7SUFDdkQsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHdEQUFxQztZQUFyQyxnREFBcUMsRUFBRSw0Q0FBNEM7RUFDckY7O0VBRUE7SUFDRSx5REFBc0M7WUFBdEMsaURBQXNDLEVBQUUsMENBQTBDO0VBQ3BGOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjLEVBQUUsb0JBQW9CO0lBQ3BDLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsMENBQWtDO0lBQWxDLGtDQUFrQztFQUNwQzs7RUFFQTtJQUNFLGNBQWMsRUFBRSx1Q0FBdUM7RUFDekQ7O0VBRUE7SUFDRTtNQUNFLHFDQUE2QjtjQUE3Qiw2QkFBNkI7TUFDN0IsVUFBVTtJQUNaO0lBQ0E7TUFDRSxnQ0FBd0I7Y0FBeEIsd0JBQXdCO01BQ3hCLFVBQVU7SUFDWjtFQUNGOztFQVRBO0lBQ0U7TUFDRSxxQ0FBNkI7Y0FBN0IsNkJBQTZCO01BQzdCLFVBQVU7SUFDWjtJQUNBO01BQ0UsZ0NBQXdCO2NBQXhCLHdCQUF3QjtNQUN4QixVQUFVO0lBQ1o7RUFDRjs7RUFFQTtJQUNFO01BQ0Usb0NBQTRCO2NBQTVCLDRCQUE0QjtNQUM1QixVQUFVO0lBQ1o7SUFDQTtNQUNFLGdDQUF3QjtjQUF4Qix3QkFBd0I7TUFDeEIsVUFBVTtJQUNaO0VBQ0Y7O0VBVEE7SUFDRTtNQUNFLG9DQUE0QjtjQUE1Qiw0QkFBNEI7TUFDNUIsVUFBVTtJQUNaO0lBQ0E7TUFDRSxnQ0FBd0I7Y0FBeEIsd0JBQXdCO01BQ3hCLFVBQVU7SUFDWjtFQUNGOztFQUVBO0lBQ0UsZ0RBQTZCO1lBQTdCLHdDQUE2QixFQUFFLGlDQUFpQztFQUNsRTs7RUFFQTtJQUNFO01BQ0UsZ0NBQXdCO2NBQXhCLHdCQUF3QjtJQUMxQjtJQUNBO01BQ0Usb0NBQTRCO2NBQTVCLDRCQUE0QjtJQUM5QjtJQUNBO01BQ0Usb0NBQTRCO2NBQTVCLDRCQUE0QjtJQUM5QjtFQUNGOztFQVZBO0lBQ0U7TUFDRSxnQ0FBd0I7Y0FBeEIsd0JBQXdCO0lBQzFCO0lBQ0E7TUFDRSxvQ0FBNEI7Y0FBNUIsNEJBQTRCO0lBQzlCO0lBQ0E7TUFDRSxvQ0FBNEI7Y0FBNUIsNEJBQTRCO0lBQzlCO0VBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogTmF2Lm1vZHVsZS5jc3MgKi9cXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTkwMDsgLyogQ29sb3IgZGUgZm9uZG8gZGVsIG1lbsO6ICovXFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm5hdmJhckxlZnQge1xcclxcbiAgICBhbmltYXRpb246IHNsaWRlSW5MZWZ0IDFzIGVhc2UtaW4tb3V0OyAvKiBBbmltYWNpw7NuIGRlIGVudHJhZGEgZGVzZGUgbGEgaXpxdWllcmRhICovXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5uYXZiYXJSaWdodCB7XFxyXFxuICAgIGFuaW1hdGlvbjogc2xpZGVJblJpZ2h0IDFzIGVhc2UtaW4tb3V0OyAvKiBBbmltYWNpw7NuIGRlIGVudHJhZGEgZGVzZGUgbGEgZGVyZWNoYSAqL1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubmF2YmFyTmF2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm5hdkxpbmsge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgY29sb3I6ICNmZmZmZmY7IC8qIENvbG9yIGRlbCB0ZXh0byAqL1xcclxcbiAgICBtYXJnaW46IDAgMTVweDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubmF2TGluazpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAjZmY1NTAwOyAvKiBDb2xvciBkZWwgdGV4dG8gYWwgcGFzYXIgZWwgY3Vyc29yICovXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIEBrZXlmcmFtZXMgc2xpZGVJbkxlZnQge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTtcXHJcXG4gICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAa2V5ZnJhbWVzIHNsaWRlSW5SaWdodCB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweCk7XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmFuaW1hdGVkLmJvdW5jZSB7XFxyXFxuICAgIGFuaW1hdGlvbjogYm91bmNlIDFzIGluZmluaXRlOyAvKiBBbmltYWNpw7NuIGRlIHJlYm90ZSBpbmZpbml0byAqL1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAa2V5ZnJhbWVzIGJvdW5jZSB7XFxyXFxuICAgIDAlLCAyMCUsIDUwJSwgODAlLCAxMDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICAgIH1cXHJcXG4gICAgNDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xcclxcbiAgICB9XFxyXFxuICAgIDYwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibmF2YmFyXCI6IFwiTmF2X25hdmJhcl9fMzE4TnpcIixcblx0XCJuYXZiYXJMZWZ0XCI6IFwiTmF2X25hdmJhckxlZnRfXzJudUtWXCIsXG5cdFwic2xpZGVJbkxlZnRcIjogXCJOYXZfc2xpZGVJbkxlZnRfXzNCUFRwXCIsXG5cdFwibmF2YmFyUmlnaHRcIjogXCJOYXZfbmF2YmFyUmlnaHRfXzlPR1pmXCIsXG5cdFwic2xpZGVJblJpZ2h0XCI6IFwiTmF2X3NsaWRlSW5SaWdodF9fVVh3N0tcIixcblx0XCJuYXZiYXJOYXZcIjogXCJOYXZfbmF2YmFyTmF2X19vMFFTN1wiLFxuXHRcIm5hdkxpbmtcIjogXCJOYXZfbmF2TGlua19fM1AwZi1cIixcblx0XCJhbmltYXRlZFwiOiBcIk5hdl9hbmltYXRlZF9fM3RPNDFcIixcblx0XCJib3VuY2VcIjogXCJOYXZfYm91bmNlX18xZU04QVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=