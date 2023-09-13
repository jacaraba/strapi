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
  var _ref = (0,C_Users_jacar_Desktop_strapi_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_jacar_Desktop_strapi_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(values, registro) {
    return C_Users_jacar_Desktop_strapi_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            /* values.barrio = [values.barrio];
            try {
              const visitas = await fetch(`http://localhost:1337/api/visitas/${registro}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: values }),
              });
              if (visitas.ok) {
                console.log('¡Solicitud PUT enviada con éxito!');
                // Realiza alguna acción adicional después de enviar la solicitud PUT
              } else {
                console.log('Error al enviar la solicitud PUT');
              }
            } catch (error) {
              console.log(error);
            } */
            alert(JSON.stringify(values, null, 2));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function handleFormSubmit(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var SignupForm = function SignupForm(_ref2) {
  var registro = _ref2.registro,
      visitas = _ref2.visitas,
      barrios = _ref2.barrios;
  visitas.id = registro;
  visitas.attributes.barrio = visitas.attributes.barrio.data.attributes.id;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Formik, {
    initialValues: visitas.attributes,
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_7__.object({
      vcrradsol: yup__WEBPACK_IMPORTED_MODULE_7__.string().max(15, 'Debe tener 15 caracteres o menos').required('Requerido'),
      vcrnomati: yup__WEBPACK_IMPORTED_MODULE_7__.string().max(20, 'Debe tener 20 caracteres o menos').required('Requerido')
    }),
    onSubmit: function onSubmit(values) {
      return handleFormSubmit(values, registro);
    },
    children: function children(formik) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
        onSubmit: formik.handleSubmit,
        style: {
          backgroundColor: 'lightblue',
          padding: '20px'
        },
        children: [formik.touched.id && formik.errors.id ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          children: formik.errors.id
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 13
        }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 20
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
          htmlFor: "vcrradsol",
          children: "Radicado: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread({
          id: "vcrradsol",
          type: "text"
        }, formik.getFieldProps('vcrradsol')), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this), formik.touched.vcrradsol && formik.errors.vcrradsol ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          children: formik.errors.vcrradsol
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 13
        }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 20
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
          htmlFor: "vcrnomati",
          children: "Nombre: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread({
          id: "vcrnomati",
          type: "text"
        }, formik.getFieldProps('vcrnomati')), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, _this), formik.touched.vcrnomati && formik.errors.vcrnomati ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          children: formik.errors.vcrnomati
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 20
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
          htmlFor: "barrio",
          children: "Barrio: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
          name: "barrio",
          as: "select",
          className: "my-select",
          children: barrios.map(function (opcion) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
              value: opcion.id,
              children: opcion.attributes.VcrBarVer
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
          type: "submit",
          disabled: formik.isSubmitting,
          children: "Enviar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
          href: "/visitas",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            children: "  Cancelar  "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 33
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlzaXRhL1tzbHVnXS5qcyJdLCJuYW1lcyI6WyJoYW5kbGVGb3JtU3VibWl0IiwidmFsdWVzIiwicmVnaXN0cm8iLCJhbGVydCIsIkpTT04iLCJzdHJpbmdpZnkiLCJTaWdudXBGb3JtIiwidmlzaXRhcyIsImJhcnJpb3MiLCJpZCIsImF0dHJpYnV0ZXMiLCJiYXJyaW8iLCJkYXRhIiwiWXVwIiwidmNycmFkc29sIiwibWF4IiwicmVxdWlyZWQiLCJ2Y3Jub21hdGkiLCJmb3JtaWsiLCJoYW5kbGVTdWJtaXQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwidG91Y2hlZCIsImVycm9ycyIsImdldEZpZWxkUHJvcHMiLCJtYXAiLCJvcGNpb24iLCJWY3JCYXJWZXIiLCJpc1N1Ym1pdHRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZ0JBQWdCO0FBQUEsMlJBQUcsaUJBQU9DLE1BQVAsRUFBZUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3ZCO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFQyxpQkFBSyxDQUFDQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUosTUFBZixFQUF1QixJQUF2QixFQUE2QixDQUE3QixDQUFELENBQUw7O0FBbkJ1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFoQkQsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBLEdBQXRCOztBQXNCQSxJQUFNTSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxRQUFvQztBQUFBLE1BQWpDSixRQUFpQyxTQUFqQ0EsUUFBaUM7QUFBQSxNQUF2QkssT0FBdUIsU0FBdkJBLE9BQXVCO0FBQUEsTUFBZEMsT0FB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LENBQUNoQixVQUFQLENBQWtCaUI7QUFEckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEVztBQUFBLFdBQVo7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdCRixlQW9DRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBDRixlQXFDRTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLGtCQUFRLEVBQUVULE1BQU0sQ0FBQ1UsWUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBckNGLGVBc0NFLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLFVBQVg7QUFBQSxpQ0FBc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREs7QUFBQTtBQVpUO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBERCxDQS9ERDs7S0FBTXRCLFU7O0FBK0ZOLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Zpc2l0YS9bc2x1Z10uYzQyODcwNTBkODA5MmMzMmYzOTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IEZvcm1paywgRmllbGQsIEZvcm0sIEVycm9yTWVzc2FnZSB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgKiBhcyBZdXAgZnJvbSAneXVwJztcblxuY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IGFzeW5jICh2YWx1ZXMsIHJlZ2lzdHJvKSA9PiB7XG4gIC8qIHZhbHVlcy5iYXJyaW8gPSBbdmFsdWVzLmJhcnJpb107XG4gIHRyeSB7XG4gICAgY29uc3QgdmlzaXRhcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjEzMzcvYXBpL3Zpc2l0YXMvJHtyZWdpc3Ryb31gLCB7XG4gICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZGF0YTogdmFsdWVzIH0pLFxuICAgIH0pO1xuICAgIGlmICh2aXNpdGFzLm9rKSB7XG4gICAgICBjb25zb2xlLmxvZygnwqFTb2xpY2l0dWQgUFVUIGVudmlhZGEgY29uIMOpeGl0byEnKTtcbiAgICAgIC8vIFJlYWxpemEgYWxndW5hIGFjY2nDs24gYWRpY2lvbmFsIGRlc3B1w6lzIGRlIGVudmlhciBsYSBzb2xpY2l0dWQgUFVUXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBhbCBlbnZpYXIgbGEgc29saWNpdHVkIFBVVCcpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH0gKi9cbiAgYWxlcnQoSlNPTi5zdHJpbmdpZnkodmFsdWVzLCBudWxsLCAyKSk7XG59O1xuXG5jb25zdCBTaWdudXBGb3JtID0gKHsgcmVnaXN0cm8sIHZpc2l0YXMsIGJhcnJpb3MgfSkgPT4ge1xuICBcbiAgdmlzaXRhcy5pZCA9IHJlZ2lzdHJvO1xuICB2aXNpdGFzLmF0dHJpYnV0ZXMuYmFycmlvID0gdmlzaXRhcy5hdHRyaWJ1dGVzLmJhcnJpby5kYXRhLmF0dHJpYnV0ZXMuaWQ7XG4gXG4gIHJldHVybiAoXG4gICAgPEZvcm1pa1xuICAgICAgaW5pdGlhbFZhbHVlcz17dmlzaXRhcy5hdHRyaWJ1dGVzfVxuICAgICAgdmFsaWRhdGlvblNjaGVtYT17WXVwLm9iamVjdCh7XG4gICAgICAgIHZjcnJhZHNvbDogWXVwLnN0cmluZygpXG4gICAgICAgICAgLm1heCgxNSwgJ0RlYmUgdGVuZXIgMTUgY2FyYWN0ZXJlcyBvIG1lbm9zJylcbiAgICAgICAgICAucmVxdWlyZWQoJ1JlcXVlcmlkbycpLFxuICAgICAgICB2Y3Jub21hdGk6IFl1cC5zdHJpbmcoKVxuICAgICAgICAgIC5tYXgoMjAsICdEZWJlIHRlbmVyIDIwIGNhcmFjdGVyZXMgbyBtZW5vcycpXG4gICAgICAgICAgLnJlcXVpcmVkKCdSZXF1ZXJpZG8nKSxcbiAgICAgIH0pfVxuICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMpID0+IGhhbmRsZUZvcm1TdWJtaXQodmFsdWVzLCByZWdpc3Rybyl9XG4gICAgPlxuICAgICAge2Zvcm1payA9PiAoXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodGJsdWUnLCBwYWRkaW5nOiAnMjBweCcgfX0+XG4gICAgICAgICAgey8qIDxsYWJlbCBodG1sRm9yPVwiaWRcIj5JZDogPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPVwiaWRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgey4uLmZvcm1pay5nZXRGaWVsZFByb3BzKCdpZCcpfVxuICAgICAgICAgIC8+ICovfVxuICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC5pZCAmJiBmb3JtaWsuZXJyb3JzLmlkID8gKFxuICAgICAgICAgICAgPGRpdj57Zm9ybWlrLmVycm9ycy5pZH08L2Rpdj5cbiAgICAgICAgICApIDogbnVsbH08YnIgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInZjcnJhZHNvbFwiPlJhZGljYWRvOiA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJ2Y3JyYWRzb2xcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgey4uLmZvcm1pay5nZXRGaWVsZFByb3BzKCd2Y3JyYWRzb2wnKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC52Y3JyYWRzb2wgJiYgZm9ybWlrLmVycm9ycy52Y3JyYWRzb2wgPyAoXG4gICAgICAgICAgICA8ZGl2Pntmb3JtaWsuZXJyb3JzLnZjcnJhZHNvbH08L2Rpdj5cbiAgICAgICAgICApIDogbnVsbH08YnIgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInZjcm5vbWF0aVwiPk5vbWJyZTogPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPVwidmNybm9tYXRpXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHsuLi5mb3JtaWsuZ2V0RmllbGRQcm9wcygndmNybm9tYXRpJyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQudmNybm9tYXRpICYmIGZvcm1pay5lcnJvcnMudmNybm9tYXRpID8gKFxuICAgICAgICAgICAgPGRpdj57Zm9ybWlrLmVycm9ycy52Y3Jub21hdGl9PC9kaXY+XG4gICAgICAgICAgKSA6IG51bGx9PGJyIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJiYXJyaW9cIj5CYXJyaW86IDwvbGFiZWw+XG4gICAgICAgICAgPEZpZWxkIG5hbWU9XCJiYXJyaW9cIiBhcz1cInNlbGVjdFwiIGNsYXNzTmFtZT1cIm15LXNlbGVjdFwiPiAgICAgICAgICBcbiAgICAgICAgICAgIHtiYXJyaW9zLm1hcCgob3BjaW9uKSA9PiAoXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e29wY2lvbi5pZH0+XG4gICAgICAgICAgICAgICAge29wY2lvbi5hdHRyaWJ1dGVzLlZjckJhclZlcn1cbiAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtmb3JtaWsuaXNTdWJtaXR0aW5nfT5FbnZpYXI8L2J1dHRvbj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3Zpc2l0YXNcIj48YT4gIENhbmNlbGFyICA8L2E+PC9MaW5rPlxuXG4gICAgICAgIDwvZm9ybT5cbiAgICAgICl9XG4gICAgPC9Gb3JtaWs+XG4gICk7XG59O1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgY2F0ZWdvcmllc1JlcyA9IGF3YWl0IGZldGNoQVBJKFwiL3Zpc2l0YXNcIiwgeyBmaWVsZHM6IFtcImlkXCJdIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogY2F0ZWdvcmllc1Jlcy5kYXRhLm1hcCgodmlzaXRhKSA9PiAoe1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHNsdWc6IHZpc2l0YS5pZC50b1N0cmluZygxMCksXG4gICAgICB9LFxuICAgIH0pKSxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgY29uc3QgW3Zpc2l0YXMsIGJhcnJpb3MgXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBmZXRjaEFQSShcIi92aXNpdGFzXCIsIHsgcG9wdWxhdGU6IFwiKlwiLCBmaWx0ZXJzOiB7IGlkOiBwYXJhbXMuc2x1Z319KSxcbiAgICBmZXRjaEFQSShcIi9iYXJyaW9zXCIsIHsgcG9wdWxhdGU6IFwiKlwiLCBwYWdpbmF0aW9uOiB7IHN0YXJ0OiAwLCBsaW1pdDogNTAwIH0sIHNvcnQ6IFsnaWQnXX0pXG4gIF0pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHZpc2l0YXM6IHZpc2l0YXMuZGF0YVswXSxcbiAgICAgIGJhcnJpb3M6IGJhcnJpb3MuZGF0YSxcbiAgICAgIHJlZ2lzdHJvOiBwYXJhbXMuc2x1ZyxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ251cEZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==