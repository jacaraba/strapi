self["webpackHotUpdate_N_E"]("pages/visita/[slug]",{

/***/ "./pages/visita/[slug].js":
/*!********************************!*\
  !*** ./pages/visita/[slug].js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var C_Users_jacar_Desktop_strapi_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_jacar_Desktop_strapi_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_jacar_Desktop_strapi_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_jacar_Desktop_strapi_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_jacar_Desktop_strapi_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! yup */ "./node_modules/yup/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\jacar\\Desktop\\strapi\\frontend\\pages\\visita\\[slug].js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_jacar_Desktop_strapi_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var handleFormSubmit = /*#__PURE__*/function () {
  var _ref = (0,C_Users_jacar_Desktop_strapi_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_jacar_Desktop_strapi_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(values) {
    var visitas;
    return C_Users_jacar_Desktop_strapi_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            values.barrio = [values.barrio];
            _context.prev = 1;
            _context.next = 4;
            return fetch(getStrapiURL("/api/visitas/".concat(values.id)), {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                data: values
              })
            });

          case 4:
            visitas = _context.sent;

            if (visitas.ok) {
              console.log('¡Solicitud PUT enviada con éxito!'); // Realiza alguna acción adicional después de enviar la solicitud PUT
            } else {
              console.log('Error al enviar la solicitud PUT');
            }

            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);

          case 11:
            alert(JSON.stringify(values, null, 2));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function handleFormSubmit(_x) {
    return _ref.apply(this, arguments);
  };
}();

var SignupForm = function SignupForm(_ref2) {
  var visitas = _ref2.visitas,
      barrios = _ref2.barrios;
  var barrionuevo = JSON.parse(JSON.stringify(visitas));
  delete barrionuevo.attributes.barrio;
  barrionuevo.attributes.id = visitas.id;
  barrionuevo.attributes.barrio = visitas.attributes.barrio.data.id;
  /* 
   console.log(JSON.stringify(barrionuevo, null, 2));   
   console.log(JSON.stringify(visitas.attributes.barrio.data, null, 2));  
   console.log(visitas.attributes.barrio.data.id); */

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Formik, {
    initialValues: barrionuevo.attributes,
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_7__.object({
      vcrradsol: yup__WEBPACK_IMPORTED_MODULE_7__.string().max(15, 'Debe tener 15 caracteres o menos').required('Requerido'),
      vcrnomati: yup__WEBPACK_IMPORTED_MODULE_7__.string().max(50, 'Debe tener 20 caracteres o menos').required('Requerido')
    }),
    onSubmit: function onSubmit(values) {
      return handleFormSubmit(values);
    },
    children: function children(formik) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
        onSubmit: formik.handleSubmit,
        style: {
          backgroundColor: 'lightblue',
          padding: '20px'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
          htmlFor: "vcrradsol",
          children: "Radicado: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread({
          id: "vcrradsol",
          type: "text"
        }, formik.getFieldProps('vcrradsol')), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this), formik.touched.vcrradsol && formik.errors.vcrradsol ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          children: formik.errors.vcrradsol
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 20
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
          htmlFor: "vcrnomati",
          children: "Nombre: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread({
          id: "vcrnomati",
          type: "text"
        }, formik.getFieldProps('vcrnomati')), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this), formik.touched.vcrnomati && formik.errors.vcrnomati ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          children: formik.errors.vcrnomati
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 13
        }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 20
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
          htmlFor: "barrio",
          children: "Barrio: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
          name: "barrio",
          as: "select",
          className: "my-select",
          children: barrios.map(function (barrio) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
              value: barrio.id,
              children: barrio.attributes.VcrBarVer
            }, barrio.id, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
          type: "submit",
          disabled: formik.isSubmitting,
          children: " Modificar "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
          href: "/visitas",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            children: "  Cancelar  "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 33
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, _this);
};

_c = SignupForm;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (SignupForm);

var _c;

$RefreshReg$(_c, "SignupForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlzaXRhL1tzbHVnXS5qcyJdLCJuYW1lcyI6WyJoYW5kbGVGb3JtU3VibWl0IiwidmFsdWVzIiwiYmFycmlvIiwiZmV0Y2giLCJnZXRTdHJhcGlVUkwiLCJpZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJ2aXNpdGFzIiwib2siLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJTaWdudXBGb3JtIiwiYmFycmlvcyIsImJhcnJpb251ZXZvIiwicGFyc2UiLCJhdHRyaWJ1dGVzIiwiWXVwIiwidmNycmFkc29sIiwibWF4IiwicmVxdWlyZWQiLCJ2Y3Jub21hdGkiLCJmb3JtaWsiLCJoYW5kbGVTdWJtaXQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwiZ2V0RmllbGRQcm9wcyIsInRvdWNoZWQiLCJlcnJvcnMiLCJtYXAiLCJWY3JCYXJWZXIiLCJpc1N1Ym1pdHRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZ0JBQWdCO0FBQUEsMlJBQUcsaUJBQU9DLE1BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXZCQSxrQkFBTSxDQUFDQyxNQUFQLEdBQWdCLENBQUNELE1BQU0sQ0FBQ0MsTUFBUixDQUFoQjtBQUZ1QjtBQUFBO0FBQUEsbUJBS0NDLEtBQUssQ0FBQ0MsWUFBWSx3QkFBaUJILE1BQU0sQ0FBQ0ksRUFBeEIsRUFBYixFQUE0QztBQUNyRUMsb0JBQU0sRUFBRSxLQUQ2RDtBQUVyRUMscUJBQU8sRUFBRTtBQUNQLGdDQUFnQjtBQURULGVBRjREO0FBS3JFQyxrQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFFQyxvQkFBSSxFQUFFVjtBQUFSLGVBQWY7QUFMK0QsYUFBNUMsQ0FMTjs7QUFBQTtBQUtmVyxtQkFMZTs7QUFZ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ZWJwYWNrL3BhZ2VzL3Zpc2l0YS9bc2x1Z10uMDJmM2ZiN2M2YmViYjk5MjYwYjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IEZvcm1paywgRmllbGQsIEZvcm0sIEVycm9yTWVzc2FnZSB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgKiBhcyBZdXAgZnJvbSAneXVwJztcblxuY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IGFzeW5jICh2YWx1ZXMpID0+IHtcblxuICB2YWx1ZXMuYmFycmlvID0gW3ZhbHVlcy5iYXJyaW9dO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgdmlzaXRhcyA9IGF3YWl0IGZldGNoKGdldFN0cmFwaVVSTChgL2FwaS92aXNpdGFzLyR7dmFsdWVzLmlkfWApLCB7XG4gICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZGF0YTogdmFsdWVzIH0pLFxuICAgIH0pO1xuICAgIGlmICh2aXNpdGFzLm9rKSB7XG4gICAgICBjb25zb2xlLmxvZygnwqFTb2xpY2l0dWQgUFVUIGVudmlhZGEgY29uIMOpeGl0byEnKTtcbiAgICAgIC8vIFJlYWxpemEgYWxndW5hIGFjY2nDs24gYWRpY2lvbmFsIGRlc3B1w6lzIGRlIGVudmlhciBsYSBzb2xpY2l0dWQgUFVUXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBhbCBlbnZpYXIgbGEgc29saWNpdHVkIFBVVCcpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cblxuICBhbGVydChKU09OLnN0cmluZ2lmeSh2YWx1ZXMsIG51bGwsIDIpKTtcblxufTtcblxuY29uc3QgU2lnbnVwRm9ybSA9ICh7IHZpc2l0YXMsIGJhcnJpb3MgfSkgPT4ge1xuICBcbiAgY29uc3QgYmFycmlvbnVldm8gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZpc2l0YXMpKTtcbiAgZGVsZXRlIGJhcnJpb251ZXZvLmF0dHJpYnV0ZXMuYmFycmlvXG4gIGJhcnJpb251ZXZvLmF0dHJpYnV0ZXMuaWQgPSB2aXNpdGFzLmlkXG4gIGJhcnJpb251ZXZvLmF0dHJpYnV0ZXMuYmFycmlvID0gdmlzaXRhcy5hdHRyaWJ1dGVzLmJhcnJpby5kYXRhLmlkO1xuXG4vKiBcbiBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShiYXJyaW9udWV2bywgbnVsbCwgMikpOyAgIFxuIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHZpc2l0YXMuYXR0cmlidXRlcy5iYXJyaW8uZGF0YSwgbnVsbCwgMikpOyAgXG4gY29uc29sZS5sb2codmlzaXRhcy5hdHRyaWJ1dGVzLmJhcnJpby5kYXRhLmlkKTsgKi9cblxuXG4gIHJldHVybiAoXG4gICAgPEZvcm1pa1xuICAgICAgaW5pdGlhbFZhbHVlcz17YmFycmlvbnVldm8uYXR0cmlidXRlc31cbiAgICAgIHZhbGlkYXRpb25TY2hlbWE9e1l1cC5vYmplY3Qoe1xuICAgICAgICB2Y3JyYWRzb2w6IFl1cC5zdHJpbmcoKVxuICAgICAgICAgIC5tYXgoMTUsICdEZWJlIHRlbmVyIDE1IGNhcmFjdGVyZXMgbyBtZW5vcycpXG4gICAgICAgICAgLnJlcXVpcmVkKCdSZXF1ZXJpZG8nKSxcbiAgICAgICAgdmNybm9tYXRpOiBZdXAuc3RyaW5nKClcbiAgICAgICAgICAubWF4KDUwLCAnRGViZSB0ZW5lciAyMCBjYXJhY3RlcmVzIG8gbWVub3MnKVxuICAgICAgICAgIC5yZXF1aXJlZCgnUmVxdWVyaWRvJyksXG4gICAgICB9KX1cbiAgICAgIG9uU3VibWl0PXsodmFsdWVzKSA9PiBoYW5kbGVGb3JtU3VibWl0KHZhbHVlcyl9XG4gICAgPlxuICAgICAge2Zvcm1payA9PiAoXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodGJsdWUnLCBwYWRkaW5nOiAnMjBweCcgfX0+XG4gICAgICAgICAgey8qIDxsYWJlbCBodG1sRm9yPVwiaWRcIj5JZDogPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPVwiaWRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgey4uLmZvcm1pay5nZXRGaWVsZFByb3BzKCdpZCcpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2Zvcm1pay50b3VjaGVkLmlkICYmIGZvcm1pay5lcnJvcnMuaWQgPyAoXG4gICAgICAgICAgICA8ZGl2Pntmb3JtaWsuZXJyb3JzLmlkfTwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfTxiciAvPiAqL31cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInZjcnJhZHNvbFwiPlJhZGljYWRvOiA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJ2Y3JyYWRzb2xcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgey4uLmZvcm1pay5nZXRGaWVsZFByb3BzKCd2Y3JyYWRzb2wnKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC52Y3JyYWRzb2wgJiYgZm9ybWlrLmVycm9ycy52Y3JyYWRzb2wgPyAoXG4gICAgICAgICAgICA8ZGl2Pntmb3JtaWsuZXJyb3JzLnZjcnJhZHNvbH08L2Rpdj5cbiAgICAgICAgICApIDogbnVsbH08YnIgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInZjcm5vbWF0aVwiPk5vbWJyZTogPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPVwidmNybm9tYXRpXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHsuLi5mb3JtaWsuZ2V0RmllbGRQcm9wcygndmNybm9tYXRpJyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQudmNybm9tYXRpICYmIGZvcm1pay5lcnJvcnMudmNybm9tYXRpID8gKFxuICAgICAgICAgICAgPGRpdj57Zm9ybWlrLmVycm9ycy52Y3Jub21hdGl9PC9kaXY+XG4gICAgICAgICAgKSA6IG51bGx9PGJyIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJiYXJyaW9cIj5CYXJyaW86IDwvbGFiZWw+XG4gICAgICAgICAgPEZpZWxkIG5hbWU9XCJiYXJyaW9cIiBhcz1cInNlbGVjdFwiIGNsYXNzTmFtZT1cIm15LXNlbGVjdFwiPiAgICAgICAgICBcbiAgICAgICAgICAgIHtiYXJyaW9zLm1hcCgoYmFycmlvKSA9PiAoXG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtiYXJyaW8uaWR9IHZhbHVlPXtiYXJyaW8uaWR9PlxuICAgICAgICAgICAgICAgIHtiYXJyaW8uYXR0cmlidXRlcy5WY3JCYXJWZXJ9XG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17Zm9ybWlrLmlzU3VibWl0dGluZ30+IE1vZGlmaWNhciA8L2J1dHRvbj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3Zpc2l0YXNcIj48YT4gIENhbmNlbGFyICA8L2E+PC9MaW5rPlxuXG4gICAgICAgIDwvZm9ybT5cbiAgICAgICl9XG4gICAgPC9Gb3JtaWs+XG4gICk7XG59O1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgY2F0ZWdvcmllc1JlcyA9IGF3YWl0IGZldGNoQVBJKFwiL3Zpc2l0YXNcIiwgeyBmaWVsZHM6IFtcImlkXCJdIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogY2F0ZWdvcmllc1Jlcy5kYXRhLm1hcCgodmlzaXRhKSA9PiAoe1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHNsdWc6IHZpc2l0YS5pZC50b1N0cmluZygxMCksXG4gICAgICB9LFxuICAgIH0pKSxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgY29uc3QgW3Zpc2l0YXMsIGJhcnJpb3MgXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBmZXRjaEFQSShcIi92aXNpdGFzXCIsIHsgcG9wdWxhdGU6IFwiKlwiLCBmaWx0ZXJzOiB7IGlkOiBwYXJhbXMuc2x1Z319KSxcbiAgICBmZXRjaEFQSShcIi9iYXJyaW9zXCIsIHsgcG9wdWxhdGU6IFwiKlwiLCBwYWdpbmF0aW9uOiB7IHN0YXJ0OiAwLCBsaW1pdDogNTAwIH0sIHNvcnQ6IFsnVmNyQmFyVmVyJ119KVxuICBdKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICB2aXNpdGFzOiB2aXNpdGFzLmRhdGFbMF0sXG4gICAgICBiYXJyaW9zOiBiYXJyaW9zLmRhdGFcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ251cEZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==