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
  visitas[0].id = registro;
  visitas[0].attributes.barrio = visitas[0].attributes.barrio.data.attributes.id;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Formik, {
    initialValues: visitas[0].attributes,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlzaXRhL1tzbHVnXS5qcyJdLCJuYW1lcyI6WyJoYW5kbGVGb3JtU3VibWl0IiwidmFsdWVzIiwicmVnaXN0cm8iLCJhbGVydCIsIkpTT04iLCJzdHJpbmdpZnkiLCJTaWdudXBGb3JtIiwidmlzaXRhcyIsImJhcnJpb3MiLCJpZCIsImF0dHJpYnV0ZXMiLCJiYXJyaW8iLCJkYXRhIiwiWXVwIiwidmNycmFkc29sIiwibWF4IiwicmVxdWlyZWQiLCJ2Y3Jub21hdGkiLCJmb3JtaWsiLCJoYW5kbGVTdWJtaXQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwidG91Y2hlZCIsImVycm9ycyIsImdldEZpZWxkUHJvcHMiLCJtYXAiLCJvcGNpb24iLCJWY3JCYXJWZXIiLCJpc1N1Ym1pdHRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZ0JBQWdCO0FBQUEsMlJBQUcsaUJBQU9DLE1BQVAsRUFBZUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3ZCO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFQyxpQkFBSyxDQUFDQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUosTUFBZixFQUF1QixJQUF2QixFQUE2QixDQUE3QixDQUFELENBQUw7O0FBbkJ1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFoQkQsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBLEdBQXRCOztBQXNCQSxJQUFNTSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxRQUFvQztBQUFBLE1BQWpDSixRQUFpQyxTQUFqQ0EsUUFBaUM7QUFBQSxNQUF2QkssT0FBdUIsU0FBdkJBLE9BQXVCO0FBQUEsTUFBZEMsT0FB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QUFBLGdDQUNYO0FBQVEsbUJBQUssRUFBRUEsTUFBTSxDQUFDakIsRUFBdEI7QUFBQSx3QkFDR2lCLE1BQU0sQ0FBQ2hCLFVBQVAsQ0FBa0JpQjtBQURyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURXO0FBQUEsV0FBWjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBN0JGLGVBb0NFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcENGLGVBcUNFO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBc0Isa0JBQVEsRUFBRVQsTUFBTSxDQUFDVSxZQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFyQ0YsZUFzQ0UsOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUMsVUFBWDtBQUFBLGlDQUFzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESztBQUFBO0FBWlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMERELENBL0REOztLQUFNdEIsVTs7QUErRk4sK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmlzaXRhL1tzbHVnXS45ZmFjNWQ3NWJjMmZkOGMxZTUxMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tIFwiLi4vLi4vbGliL2FwaVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgRm9ybWlrLCBGaWVsZCwgRm9ybSwgRXJyb3JNZXNzYWdlIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnO1xuXG5jb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gYXN5bmMgKHZhbHVlcywgcmVnaXN0cm8pID0+IHtcbiAgLyogdmFsdWVzLmJhcnJpbyA9IFt2YWx1ZXMuYmFycmlvXTtcbiAgdHJ5IHtcbiAgICBjb25zdCB2aXNpdGFzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9hcGkvdmlzaXRhcy8ke3JlZ2lzdHJvfWAsIHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBkYXRhOiB2YWx1ZXMgfSksXG4gICAgfSk7XG4gICAgaWYgKHZpc2l0YXMub2spIHtcbiAgICAgIGNvbnNvbGUubG9nKCfCoVNvbGljaXR1ZCBQVVQgZW52aWFkYSBjb24gw6l4aXRvIScpO1xuICAgICAgLy8gUmVhbGl6YSBhbGd1bmEgYWNjacOzbiBhZGljaW9uYWwgZGVzcHXDqXMgZGUgZW52aWFyIGxhIHNvbGljaXR1ZCBQVVRcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGFsIGVudmlhciBsYSBzb2xpY2l0dWQgUFVUJyk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfSAqL1xuICBhbGVydChKU09OLnN0cmluZ2lmeSh2YWx1ZXMsIG51bGwsIDIpKTtcbn07XG5cbmNvbnN0IFNpZ251cEZvcm0gPSAoeyByZWdpc3RybywgdmlzaXRhcywgYmFycmlvcyB9KSA9PiB7XG4gIFxuICB2aXNpdGFzWzBdLmlkID0gcmVnaXN0cm87XG4gIHZpc2l0YXNbMF0uYXR0cmlidXRlcy5iYXJyaW8gPSB2aXNpdGFzWzBdLmF0dHJpYnV0ZXMuYmFycmlvLmRhdGEuYXR0cmlidXRlcy5pZDtcbiBcbiAgcmV0dXJuIChcbiAgICA8Rm9ybWlrXG4gICAgICBpbml0aWFsVmFsdWVzPXt2aXNpdGFzWzBdLmF0dHJpYnV0ZXN9XG4gICAgICB2YWxpZGF0aW9uU2NoZW1hPXtZdXAub2JqZWN0KHtcbiAgICAgICAgdmNycmFkc29sOiBZdXAuc3RyaW5nKClcbiAgICAgICAgICAubWF4KDE1LCAnRGViZSB0ZW5lciAxNSBjYXJhY3RlcmVzIG8gbWVub3MnKVxuICAgICAgICAgIC5yZXF1aXJlZCgnUmVxdWVyaWRvJyksXG4gICAgICAgIHZjcm5vbWF0aTogWXVwLnN0cmluZygpXG4gICAgICAgICAgLm1heCgyMCwgJ0RlYmUgdGVuZXIgMjAgY2FyYWN0ZXJlcyBvIG1lbm9zJylcbiAgICAgICAgICAucmVxdWlyZWQoJ1JlcXVlcmlkbycpLFxuICAgICAgfSl9XG4gICAgICBvblN1Ym1pdD17KHZhbHVlcykgPT4gaGFuZGxlRm9ybVN1Ym1pdCh2YWx1ZXMsIHJlZ2lzdHJvKX1cbiAgICA+XG4gICAgICB7Zm9ybWlrID0+IChcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ2xpZ2h0Ymx1ZScsIHBhZGRpbmc6ICcyMHB4JyB9fT5cbiAgICAgICAgICB7LyogPGxhYmVsIGh0bWxGb3I9XCJpZFwiPklkOiA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJpZFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB7Li4uZm9ybWlrLmdldEZpZWxkUHJvcHMoJ2lkJyl9XG4gICAgICAgICAgLz4gKi99XG4gICAgICAgICAge2Zvcm1pay50b3VjaGVkLmlkICYmIGZvcm1pay5lcnJvcnMuaWQgPyAoXG4gICAgICAgICAgICA8ZGl2Pntmb3JtaWsuZXJyb3JzLmlkfTwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfTxiciAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidmNycmFkc29sXCI+UmFkaWNhZG86IDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD1cInZjcnJhZHNvbFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB7Li4uZm9ybWlrLmdldEZpZWxkUHJvcHMoJ3ZjcnJhZHNvbCcpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2Zvcm1pay50b3VjaGVkLnZjcnJhZHNvbCAmJiBmb3JtaWsuZXJyb3JzLnZjcnJhZHNvbCA/IChcbiAgICAgICAgICAgIDxkaXY+e2Zvcm1pay5lcnJvcnMudmNycmFkc29sfTwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfTxiciAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidmNybm9tYXRpXCI+Tm9tYnJlOiA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJ2Y3Jub21hdGlcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgey4uLmZvcm1pay5nZXRGaWVsZFByb3BzKCd2Y3Jub21hdGknKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC52Y3Jub21hdGkgJiYgZm9ybWlrLmVycm9ycy52Y3Jub21hdGkgPyAoXG4gICAgICAgICAgICA8ZGl2Pntmb3JtaWsuZXJyb3JzLnZjcm5vbWF0aX08L2Rpdj5cbiAgICAgICAgICApIDogbnVsbH08YnIgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJhcnJpb1wiPkJhcnJpbzogPC9sYWJlbD5cbiAgICAgICAgICA8RmllbGQgbmFtZT1cImJhcnJpb1wiIGFzPVwic2VsZWN0XCIgY2xhc3NOYW1lPVwibXktc2VsZWN0XCI+ICAgICAgICAgIFxuICAgICAgICAgICAge2JhcnJpb3MubWFwKChvcGNpb24pID0+IChcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17b3BjaW9uLmlkfT5cbiAgICAgICAgICAgICAgICB7b3BjaW9uLmF0dHJpYnV0ZXMuVmNyQmFyVmVyfVxuICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e2Zvcm1pay5pc1N1Ym1pdHRpbmd9PkVudmlhcjwvYnV0dG9uPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdmlzaXRhc1wiPjxhPiAgQ2FuY2VsYXIgIDwvYT48L0xpbms+XG5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgKX1cbiAgICA8L0Zvcm1paz5cbiAgKTtcbn07XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBjYXRlZ29yaWVzUmVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvdmlzaXRhc1wiLCB7IGZpZWxkczogW1wiaWRcIl0gfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBjYXRlZ29yaWVzUmVzLmRhdGEubWFwKCh2aXNpdGEpID0+ICh7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgc2x1ZzogdmlzaXRhLmlkLnRvU3RyaW5nKDEwKSxcbiAgICAgIH0sXG4gICAgfSkpLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICBjb25zdCBbdmlzaXRhcywgYmFycmlvcyBdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGZldGNoQVBJKFwiL3Zpc2l0YXNcIiwgeyBwb3B1bGF0ZTogXCIqXCIsIGZpbHRlcnM6IHsgaWQ6IHBhcmFtcy5zbHVnfX0pLFxuICAgIGZldGNoQVBJKFwiL2JhcnJpb3NcIiwgeyBwb3B1bGF0ZTogXCIqXCIsIHBhZ2luYXRpb246IHsgc3RhcnQ6IDAsIGxpbWl0OiA1MDAgfSwgc29ydDogWydpZCddfSlcbiAgXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgdmlzaXRhczogdmlzaXRhcy5kYXRhLFxuICAgICAgYmFycmlvczogYmFycmlvcy5kYXRhLFxuICAgICAgcmVnaXN0cm86IHBhcmFtcy5zbHVnLFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwRm9ybTsiXSwic291cmNlUm9vdCI6IiJ9