self["webpackHotUpdate_N_E"]("pages/visitas",{

/***/ "./pages/visitas/index.js":
/*!********************************!*\
  !*** ./pages/visitas/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\jacar\\Desktop\\strapi\\frontend\\pages\\visitas\\index.js",
    _s = $RefreshSig$();



function MyForm(_ref) {
  _s();

  var _this = this;

  var barrios = _ref.barrios;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      selectedBarrio = _useState[0],
      setSelectedBarrio = _useState[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault(); // Aquí puedes realizar la lógica necesaria con el barrio seleccionado

    console.log(selectedBarrio);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
      children: ["Selecciona un barrio:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
        value: selectedBarrio,
        onChange: function onChange(e) {
          return setSelectedBarrio(e.target.value);
        },
        children: barrios.map(function (barrio) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: barrio.attributes.VcrBarVer,
            children: barrio.attributes.VcrBarVer
          }, barrio.id, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      type: "submit",
      children: "Enviar"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

_s(MyForm, "iV2SKk5aB12QnDq4I0ErNIOoURk=");

_c = MyForm;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (MyForm);

var _c;

$RefreshReg$(_c, "MyForm");

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlzaXRhcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJNeUZvcm0iLCJiYXJyaW9zIiwidXNlU3RhdGUiLCJzZWxlY3RlZEJhcnJpbyIsInNldFNlbGVjdGVkQmFycmlvIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwibWFwIiwiYmFycmlvIiwiYXR0cmlidXRlcyIsIlZjckJhclZlciIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUdBLFNBQVNBLE1BQVQsT0FBNkI7QUFBQTs7QUFBQTs7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7O0FBQUEsa0JBQ2lCQywrQ0FBUSxDQUFDLEVBQUQsQ0FEekI7QUFBQSxNQUNwQkMsY0FEb0I7QUFBQSxNQUNKQyxpQkFESTs7QUFHM0IsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzFCQSxLQUFDLENBQUNDLGNBQUYsR0FEMEIsQ0FFMUI7O0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTixjQUFaO0FBQ0QsR0FKRDs7QUFNQSxzQkFDRTtBQUFNLFlBQVEsRUFBRUUsWUFBaEI7QUFBQSw0QkFDRTtBQUFBLHVEQUVFO0FBQVEsYUFBSyxFQUFFRixjQUFmO0FBQStCLGdCQUFRLEVBQUUsa0JBQUNHLENBQUQ7QUFBQSxpQkFBT0YsaUJBQWlCLENBQUNFLENBQUMsQ0FBQ0ksTUFBRixDQUFTQyxLQUFWLENBQXhCO0FBQUEsU0FBekM7QUFBQSxrQkFDR1YsT0FBTyxDQUFDVyxHQUFSLENBQVksVUFBQ0MsTUFBRDtBQUFBLDhCQUNYO0FBQXdCLGlCQUFLLEVBQUVBLE1BQU0sQ0FBQ0MsVUFBUCxDQUFrQkMsU0FBakQ7QUFBQSxzQkFDR0YsTUFBTSxDQUFDQyxVQUFQLENBQWtCQztBQURyQixhQUFhRixNQUFNLENBQUNHLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFc7QUFBQSxTQUFaO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBV0U7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7O0dBeEJRaEIsTTs7S0FBQUEsTTs7QUFzQ1QsK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmlzaXRhcy4wNTE1YWU3NTc2MmI1Mjc1MzI3Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tIFwiLi4vLi4vbGliL2FwaVwiXG5cbmZ1bmN0aW9uIE15Rm9ybSh7IGJhcnJpb3MgfSkge1xuICBjb25zdCBbc2VsZWN0ZWRCYXJyaW8sIHNldFNlbGVjdGVkQmFycmlvXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBBcXXDrSBwdWVkZXMgcmVhbGl6YXIgbGEgbMOzZ2ljYSBuZWNlc2FyaWEgY29uIGVsIGJhcnJpbyBzZWxlY2Npb25hZG9cbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZEJhcnJpbyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgU2VsZWNjaW9uYSB1biBiYXJyaW86XG4gICAgICAgIDxzZWxlY3QgdmFsdWU9e3NlbGVjdGVkQmFycmlvfSBvbkNoYW5nZT17KGUpID0+IHNldFNlbGVjdGVkQmFycmlvKGUudGFyZ2V0LnZhbHVlKX0+XG4gICAgICAgICAge2JhcnJpb3MubWFwKChiYXJyaW8pID0+IChcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtiYXJyaW8uaWR9IHZhbHVlPXtiYXJyaW8uYXR0cmlidXRlcy5WY3JCYXJWZXJ9PlxuICAgICAgICAgICAgICB7YmFycmlvLmF0dHJpYnV0ZXMuVmNyQmFyVmVyfVxuICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkVudmlhcjwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAvLyBSdW4gQVBJIGNhbGxzIGluIHBhcmFsbGVsXG4gIGNvbnN0IFtiYXJyaW9zUmVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFsgZmV0Y2hBUEkoXCIvYmFycmlvc1wiLCB7IHBvcHVsYXRlOiBcIipcIiB9KSBdKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGJhcnJpb3M6IGJhcnJpb3NSZXMuZGF0YSxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlGb3JtXG4iXSwic291cmNlUm9vdCI6IiJ9