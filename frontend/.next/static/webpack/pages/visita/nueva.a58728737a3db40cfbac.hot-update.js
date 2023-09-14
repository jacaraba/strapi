self["webpackHotUpdate_N_E"]("pages/visita/nueva",{

/***/ "./pages/visita/nueva/index.js":
/*!*************************************!*\
  !*** ./pages/visita/nueva/index.js ***!
  \*************************************/
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
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/api */ "./lib/api.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! yup */ "./node_modules/yup/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\jacar\\Desktop\\strapi\\frontend\\pages\\visita\\nueva\\index.js",
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
            values.barrio = [parseInt(values.barrio)];
            console.log(JSON.stringify(values, null, 2));
            _context.prev = 2;
            _context.next = 5;
            return (0,_lib_api__WEBPACK_IMPORTED_MODULE_4__.fetchAPI)("/visitas", {
              method: 'POST',
              body: JSON.stringify({
                data: values
              })
            });

          case 5:
            visitas = _context.sent;

            if (visitas.ok) {
              console.log('¡Solicitud POST enviada con éxito!'); // Realiza alguna acción adicional después de enviar la solicitud PUT
            } else {
              console.log('Error al enviar la solicitud POST');
            }

            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0);

          case 12:
            alert(JSON.stringify(values, null, 2));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 9]]);
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
  delete barrionuevo.id;

  for (var clave in barrionuevo.attributes) {
    if (barrionuevo.attributes.hasOwnProperty(clave)) {
      barrionuevo.attributes[clave] = "";
    }
  } // barrionuevo.attributes.id = "Nueva Visita"


  barrionuevo.attributes.barrio = 500;
  delete barrionuevo.attributes.slug;
  delete barrionuevo.attributes.createdAt;
  delete barrionuevo.attributes.updatedAt;
  delete barrionuevo.attributes.publishedAt;
  console.log(JSON.stringify(barrionuevo, null, 2)); // console.log(JSON.stringify(visitas.attributes.barrio.data, null, 2));  
  // console.log(visitas.attributes.barrio.data.id); 

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Formik, {
    initialValues: barrionuevo.attributes,
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_8__.object({
      vcrradsol: yup__WEBPACK_IMPORTED_MODULE_8__.string().max(15, 'Debe tener 15 caracteres o menos').required('Requerido'),
      vcrnomati: yup__WEBPACK_IMPORTED_MODULE_8__.string().max(50, 'Debe tener 20 caracteres o menos').required('Requerido')
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
          lineNumber: 71,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread({
          id: "vcrradsol",
          type: "text"
        }, formik.getFieldProps('vcrradsol')), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, _this), formik.touched.vcrradsol && formik.errors.vcrradsol ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          children: formik.errors.vcrradsol
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 13
        }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 20
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
          htmlFor: "vcrnomati",
          children: "Nombre: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread({
          id: "vcrnomati",
          type: "text"
        }, formik.getFieldProps('vcrnomati')), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this), formik.touched.vcrnomati && formik.errors.vcrnomati ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          children: formik.errors.vcrnomati
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 13
        }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 20
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
          htmlFor: "barrio",
          children: "Barrio: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
          name: "barrio",
          as: "select",
          className: "my-select",
          children: barrios.map(function (barrio) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
              value: barrio.id,
              children: barrio.attributes.VcrBarVer
            }, barrio.id, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
          type: "submit",
          disabled: formik.isSubmitting,
          children: " Modificar "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
          href: "/visitas",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            children: "  Cancelar  "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 33
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 56,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlzaXRhL251ZXZhL2luZGV4LmpzIl0sIm5hbWVzIjpbImhhbmRsZUZvcm1TdWJtaXQiLCJ2YWx1ZXMiLCJiYXJyaW8iLCJwYXJzZUludCIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiZmV0Y2hBUEkiLCJtZXRob2QiLCJib2R5IiwiZGF0YSIsInZpc2l0YXMiLCJvayIsImFsZXJ0IiwiU2lnbnVwRm9ybSIsImJhcnJpb3MiLCJiYXJyaW9udWV2byIsInBhcnNlIiwiYXR0cmlidXRlcyIsImlkIiwiY2xhdmUiLCJoYXNPd25Qcm9wZXJ0eSIsInNsdWciLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJwdWJsaXNoZWRBdCIsIll1cCIsInZjcnJhZHNvbCIsIm1heCIsInJlcXVpcmVkIiwidmNybm9tYXRpIiwiZm9ybWlrIiwiaGFuZGxlU3VibWl0IiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImdldEZpZWxkUHJvcHMiLCJ0b3VjaGVkIiwiZXJyb3JzIiwibWFwIiwiVmNyQmFyVmVyIiwiaXNTdWJtaXR0aW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGdCQUFnQjtBQUFBLDJSQUFHLGlCQUFPQyxNQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUV2QkEsa0JBQU0sQ0FBQ0MsTUFBUCxHQUFnQixDQUFDQyxRQUFRLENBQUNGLE1BQU0sQ0FBQ0MsTUFBUixDQUFULENBQWhCO0FBQ0FFLG1CQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBSSxDQUFDQyxTQUFMLENBQWVOLE1BQWYsRUFBdUIsSUFBdkIsRUFBNkIsQ0FBN0IsQ0FBWjtBQUh1QjtBQUFBO0FBQUEsbUJBTUNPLGtEQUFRLENBQUMsVUFBRCxFQUFhO0FBQ3pDQyxvQkFBTSxFQUFFLE1BRGlDO0FBRXpDQyxr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RUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEVztBQUFBLFdBQVo7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXJCRixlQTRCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTVCRixlQTZCRTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLGtCQUFRLEVBQUVZLE1BQU0sQ0FBQ1MsWUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBN0JGLGVBOEJFLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLFVBQVg7QUFBQSxpQ0FBc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE5QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREs7QUFBQTtBQVpUO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtERCxDQTFFRDs7S0FBTTFCLFU7O0FBMkZOLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Zpc2l0YS9udWV2YS5hNTg3Mjg3MzdhM2RiNDBjZmJhYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U3RyYXBpVVJMICwgZmV0Y2hBUEkgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2FwaVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgRm9ybWlrLCBGaWVsZCwgRm9ybSwgRXJyb3JNZXNzYWdlIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnO1xuXG5jb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gYXN5bmMgKHZhbHVlcykgPT4ge1xuXG4gIHZhbHVlcy5iYXJyaW8gPSBbcGFyc2VJbnQodmFsdWVzLmJhcnJpbyldO1xuICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh2YWx1ZXMsIG51bGwsIDIpKVxuXG4gIHRyeSB7XG4gICAgY29uc3QgdmlzaXRhcyA9IGF3YWl0IGZldGNoQVBJKFwiL3Zpc2l0YXNcIiwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsICAgICBcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZGF0YTogdmFsdWVzIH0pLFxuICAgIH0pO1xuICAgIGlmICh2aXNpdGFzLm9rKSB7XG4gICAgICBjb25zb2xlLmxvZygnwqFTb2xpY2l0dWQgUE9TVCBlbnZpYWRhIGNvbiDDqXhpdG8hJyk7XG4gICAgICAvLyBSZWFsaXphIGFsZ3VuYSBhY2Npw7NuIGFkaWNpb25hbCBkZXNwdcOpcyBkZSBlbnZpYXIgbGEgc29saWNpdHVkIFBVVFxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgYWwgZW52aWFyIGxhIHNvbGljaXR1ZCBQT1NUJyk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxuXG4gIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHZhbHVlcywgbnVsbCwgMikpO1xuXG59O1xuXG5jb25zdCBTaWdudXBGb3JtID0gKHsgdmlzaXRhcywgYmFycmlvcyB9KSA9PiB7XG4gIFxuICBjb25zdCBiYXJyaW9udWV2byA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmlzaXRhcykpO1xuICBkZWxldGUgYmFycmlvbnVldm8uYXR0cmlidXRlcy5iYXJyaW9cbiAgZGVsZXRlIGJhcnJpb251ZXZvLmlkXG5cbiAgZm9yIChjb25zdCBjbGF2ZSBpbiBiYXJyaW9udWV2by5hdHRyaWJ1dGVzKSB7XG4gICAgaWYgKGJhcnJpb251ZXZvLmF0dHJpYnV0ZXMuaGFzT3duUHJvcGVydHkoY2xhdmUpKSB7XG4gICAgICBiYXJyaW9udWV2by5hdHRyaWJ1dGVzW2NsYXZlXSA9IFwiXCI7XG4gICAgfVxuICB9XG4gIC8vIGJhcnJpb251ZXZvLmF0dHJpYnV0ZXMuaWQgPSBcIk51ZXZhIFZpc2l0YVwiXG4gIGJhcnJpb251ZXZvLmF0dHJpYnV0ZXMuYmFycmlvID0gNTAwO1xuXG4gIGRlbGV0ZSBiYXJyaW9udWV2by5hdHRyaWJ1dGVzLnNsdWdcbiAgZGVsZXRlIGJhcnJpb251ZXZvLmF0dHJpYnV0ZXMuY3JlYXRlZEF0XG4gIGRlbGV0ZSBiYXJyaW9udWV2by5hdHRyaWJ1dGVzLnVwZGF0ZWRBdFxuICBkZWxldGUgYmFycmlvbnVldm8uYXR0cmlidXRlcy5wdWJsaXNoZWRBdFxuXG4gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoYmFycmlvbnVldm8sIG51bGwsIDIpKTsgICBcbiAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh2aXNpdGFzLmF0dHJpYnV0ZXMuYmFycmlvLmRhdGEsIG51bGwsIDIpKTsgIFxuIC8vIGNvbnNvbGUubG9nKHZpc2l0YXMuYXR0cmlidXRlcy5iYXJyaW8uZGF0YS5pZCk7IFxuXG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybWlrXG4gICAgICBpbml0aWFsVmFsdWVzPXtiYXJyaW9udWV2by5hdHRyaWJ1dGVzfVxuICAgICAgdmFsaWRhdGlvblNjaGVtYT17WXVwLm9iamVjdCh7XG4gICAgICAgIHZjcnJhZHNvbDogWXVwLnN0cmluZygpXG4gICAgICAgICAgLm1heCgxNSwgJ0RlYmUgdGVuZXIgMTUgY2FyYWN0ZXJlcyBvIG1lbm9zJylcbiAgICAgICAgICAucmVxdWlyZWQoJ1JlcXVlcmlkbycpLFxuICAgICAgICB2Y3Jub21hdGk6IFl1cC5zdHJpbmcoKVxuICAgICAgICAgIC5tYXgoNTAsICdEZWJlIHRlbmVyIDIwIGNhcmFjdGVyZXMgbyBtZW5vcycpXG4gICAgICAgICAgLnJlcXVpcmVkKCdSZXF1ZXJpZG8nKSxcbiAgICAgIH0pfVxuICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMpID0+IGhhbmRsZUZvcm1TdWJtaXQodmFsdWVzKX1cbiAgICA+XG4gICAgICB7Zm9ybWlrID0+IChcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ2xpZ2h0Ymx1ZScsIHBhZGRpbmc6ICcyMHB4JyB9fT5cbiAgICAgICAgICBcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInZjcnJhZHNvbFwiPlJhZGljYWRvOiA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJ2Y3JyYWRzb2xcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgey4uLmZvcm1pay5nZXRGaWVsZFByb3BzKCd2Y3JyYWRzb2wnKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC52Y3JyYWRzb2wgJiYgZm9ybWlrLmVycm9ycy52Y3JyYWRzb2wgPyAoXG4gICAgICAgICAgICA8ZGl2Pntmb3JtaWsuZXJyb3JzLnZjcnJhZHNvbH08L2Rpdj5cbiAgICAgICAgICApIDogbnVsbH08YnIgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInZjcm5vbWF0aVwiPk5vbWJyZTogPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPVwidmNybm9tYXRpXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHsuLi5mb3JtaWsuZ2V0RmllbGRQcm9wcygndmNybm9tYXRpJyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQudmNybm9tYXRpICYmIGZvcm1pay5lcnJvcnMudmNybm9tYXRpID8gKFxuICAgICAgICAgICAgPGRpdj57Zm9ybWlrLmVycm9ycy52Y3Jub21hdGl9PC9kaXY+XG4gICAgICAgICAgKSA6IG51bGx9PGJyIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJiYXJyaW9cIj5CYXJyaW86IDwvbGFiZWw+XG4gICAgICAgICAgPEZpZWxkIG5hbWU9XCJiYXJyaW9cIiBhcz1cInNlbGVjdFwiIGNsYXNzTmFtZT1cIm15LXNlbGVjdFwiPiAgICAgICAgICBcbiAgICAgICAgICAgIHtiYXJyaW9zLm1hcCgoYmFycmlvKSA9PiAoXG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtiYXJyaW8uaWR9IHZhbHVlPXtiYXJyaW8uaWR9PlxuICAgICAgICAgICAgICAgIHtiYXJyaW8uYXR0cmlidXRlcy5WY3JCYXJWZXJ9XG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17Zm9ybWlrLmlzU3VibWl0dGluZ30+IE1vZGlmaWNhciA8L2J1dHRvbj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3Zpc2l0YXNcIj48YT4gIENhbmNlbGFyICA8L2E+PC9MaW5rPlxuXG4gICAgICAgIDwvZm9ybT5cbiAgICAgICl9XG4gICAgPC9Gb3JtaWs+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICBjb25zdCBbdmlzaXRhcywgYmFycmlvcyBdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGZldGNoQVBJKFwiL3Zpc2l0YXNcIiwgeyBwb3B1bGF0ZTogXCIqXCIsIGZpbHRlcnM6IHsgaWQ6IDF9fSksXG4gICAgZmV0Y2hBUEkoXCIvYmFycmlvc1wiLCB7IHBvcHVsYXRlOiBcIipcIiwgcGFnaW5hdGlvbjogeyBzdGFydDogMCwgbGltaXQ6IDUwMCB9LCBzb3J0OiBbJ1ZjckJhclZlciddfSlcbiAgXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgdmlzaXRhczogdmlzaXRhcy5kYXRhWzBdLFxuICAgICAgYmFycmlvczogYmFycmlvcy5kYXRhLFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwRm9ybTsiXSwic291cmNlUm9vdCI6IiJ9