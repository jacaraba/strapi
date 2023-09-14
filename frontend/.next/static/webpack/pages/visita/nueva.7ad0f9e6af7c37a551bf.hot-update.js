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
            return fetch((0,_lib_api__WEBPACK_IMPORTED_MODULE_4__.getStrapiURL)("/api/visitas"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
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
          lineNumber: 74,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread({
          id: "vcrradsol",
          type: "text"
        }, formik.getFieldProps('vcrradsol')), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this), formik.touched.vcrradsol && formik.errors.vcrradsol ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          children: formik.errors.vcrradsol
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 13
        }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 20
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
          htmlFor: "vcrnomati",
          children: "Nombre: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread({
          id: "vcrnomati",
          type: "text"
        }, formik.getFieldProps('vcrnomati')), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, _this), formik.touched.vcrnomati && formik.errors.vcrnomati ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          children: formik.errors.vcrnomati
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 13
        }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 20
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
          htmlFor: "barrio",
          children: "Barrio: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
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
              lineNumber: 95,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
          type: "submit",
          disabled: formik.isSubmitting,
          children: " Modificar "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
          href: "/visitas",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            children: "  Cancelar  "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 33
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlzaXRhL251ZXZhL2luZGV4LmpzIl0sIm5hbWVzIjpbImhhbmRsZUZvcm1TdWJtaXQiLCJ2YWx1ZXMiLCJiYXJyaW8iLCJwYXJzZUludCIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiZmV0Y2giLCJnZXRTdHJhcGlVUkwiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsImRhdGEiLCJ2aXNpdGFzIiwib2siLCJhbGVydCIsIlNpZ251cEZvcm0iLCJiYXJyaW9zIiwiYmFycmlvbnVldm8iLCJwYXJzZSIsImF0dHJpYnV0ZXMiLCJpZCIsImNsYXZlIiwiaGFzT3duUHJvcGVydHkiLCJzbHVnIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0IiwicHVibGlzaGVkQXQiLCJZdXAiLCJ2Y3JyYWRzb2wiLCJtYXgiLCJyZXF1aXJlZCIsInZjcm5vbWF0aSIsImZvcm1payIsImhhbmRsZVN1Ym1pdCIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJnZXRGaWVsZFByb3BzIiwidG91Y2hlZCIsImVycm9ycyIsIm1hcCIsIlZjckJhclZlciIsImlzU3VibWl0dGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxnQkFBZ0I7QUFBQSwyUkFBRyxpQkFBT0MsTUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFdkJBLGtCQUFNLENBQUNDLE1BQVAsR0FBZ0IsQ0FBQ0MsUUFBUSxDQUFDRixNQUFNLENBQUNDLE1BQVIsQ0FBVCxDQUFoQjtBQUNBRSxtQkFBTyxDQUFDQyxHQUFSLENBQVlDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTixNQUFmLEVBQXVCLElBQXZCLEVBQTZCLENBQTdCLENBQVo7QUFIdUI7QUFBQTtBQUFBLG1CQU1DTyxLQUFLLENBQUNDLHNEQUFZLENBQUMsY0FBRCxDQUFi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QUVBLE1BQU0sQ0FBQ29CLEVBQXRDO0FBQUEsd0JBQ0dwQixNQUFNLENBQUNtQixVQUFQLENBQWtCcUI7QUFEckIsZUFBYXhDLE1BQU0sQ0FBQ29CLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFc7QUFBQSxXQUFaO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFyQkYsZUE0QkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE1QkYsZUE2QkU7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixrQkFBUSxFQUFFWSxNQUFNLENBQUNTLFlBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdCRixlQThCRSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxVQUFYO0FBQUEsaUNBQXNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBOUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURLO0FBQUE7QUFaVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFrREQsQ0ExRUQ7O0tBQU0xQixVOztBQTJGTiwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92aXNpdGEvbnVldmEuN2FkMGY5ZTZhZjdjMzdhNTUxYmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFN0cmFwaVVSTCAsIGZldGNoQVBJIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9hcGlcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IEZvcm1paywgRmllbGQsIEZvcm0sIEVycm9yTWVzc2FnZSB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgKiBhcyBZdXAgZnJvbSAneXVwJztcblxuY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IGFzeW5jICh2YWx1ZXMpID0+IHtcblxuICB2YWx1ZXMuYmFycmlvID0gW3BhcnNlSW50KHZhbHVlcy5iYXJyaW8pXTtcbiAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodmFsdWVzLCBudWxsLCAyKSlcblxuICB0cnkge1xuICAgIGNvbnN0IHZpc2l0YXMgPSBhd2FpdCBmZXRjaChnZXRTdHJhcGlVUkwoXCIvYXBpL3Zpc2l0YXNcIiksIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZGF0YTogdmFsdWVzIH0pLFxuICAgIH0pO1xuICAgIGlmICh2aXNpdGFzLm9rKSB7XG4gICAgICBjb25zb2xlLmxvZygnwqFTb2xpY2l0dWQgUE9TVCBlbnZpYWRhIGNvbiDDqXhpdG8hJyk7XG4gICAgICAvLyBSZWFsaXphIGFsZ3VuYSBhY2Npw7NuIGFkaWNpb25hbCBkZXNwdcOpcyBkZSBlbnZpYXIgbGEgc29saWNpdHVkIFBVVFxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgYWwgZW52aWFyIGxhIHNvbGljaXR1ZCBQT1NUJyk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxuXG4gIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHZhbHVlcywgbnVsbCwgMikpO1xuXG59O1xuXG5jb25zdCBTaWdudXBGb3JtID0gKHsgdmlzaXRhcywgYmFycmlvcyB9KSA9PiB7XG4gIFxuICBjb25zdCBiYXJyaW9udWV2byA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmlzaXRhcykpO1xuICBkZWxldGUgYmFycmlvbnVldm8uYXR0cmlidXRlcy5iYXJyaW9cbiAgZGVsZXRlIGJhcnJpb251ZXZvLmlkXG5cbiAgZm9yIChjb25zdCBjbGF2ZSBpbiBiYXJyaW9udWV2by5hdHRyaWJ1dGVzKSB7XG4gICAgaWYgKGJhcnJpb251ZXZvLmF0dHJpYnV0ZXMuaGFzT3duUHJvcGVydHkoY2xhdmUpKSB7XG4gICAgICBiYXJyaW9udWV2by5hdHRyaWJ1dGVzW2NsYXZlXSA9IFwiXCI7XG4gICAgfVxuICB9XG4gIC8vIGJhcnJpb251ZXZvLmF0dHJpYnV0ZXMuaWQgPSBcIk51ZXZhIFZpc2l0YVwiXG4gIGJhcnJpb251ZXZvLmF0dHJpYnV0ZXMuYmFycmlvID0gNTAwO1xuXG4gIGRlbGV0ZSBiYXJyaW9udWV2by5hdHRyaWJ1dGVzLnNsdWdcbiAgZGVsZXRlIGJhcnJpb251ZXZvLmF0dHJpYnV0ZXMuY3JlYXRlZEF0XG4gIGRlbGV0ZSBiYXJyaW9udWV2by5hdHRyaWJ1dGVzLnVwZGF0ZWRBdFxuICBkZWxldGUgYmFycmlvbnVldm8uYXR0cmlidXRlcy5wdWJsaXNoZWRBdFxuXG4gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoYmFycmlvbnVldm8sIG51bGwsIDIpKTsgICBcbiAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh2aXNpdGFzLmF0dHJpYnV0ZXMuYmFycmlvLmRhdGEsIG51bGwsIDIpKTsgIFxuIC8vIGNvbnNvbGUubG9nKHZpc2l0YXMuYXR0cmlidXRlcy5iYXJyaW8uZGF0YS5pZCk7IFxuXG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybWlrXG4gICAgICBpbml0aWFsVmFsdWVzPXtiYXJyaW9udWV2by5hdHRyaWJ1dGVzfVxuICAgICAgdmFsaWRhdGlvblNjaGVtYT17WXVwLm9iamVjdCh7XG4gICAgICAgIHZjcnJhZHNvbDogWXVwLnN0cmluZygpXG4gICAgICAgICAgLm1heCgxNSwgJ0RlYmUgdGVuZXIgMTUgY2FyYWN0ZXJlcyBvIG1lbm9zJylcbiAgICAgICAgICAucmVxdWlyZWQoJ1JlcXVlcmlkbycpLFxuICAgICAgICB2Y3Jub21hdGk6IFl1cC5zdHJpbmcoKVxuICAgICAgICAgIC5tYXgoNTAsICdEZWJlIHRlbmVyIDIwIGNhcmFjdGVyZXMgbyBtZW5vcycpXG4gICAgICAgICAgLnJlcXVpcmVkKCdSZXF1ZXJpZG8nKSxcbiAgICAgIH0pfVxuICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMpID0+IGhhbmRsZUZvcm1TdWJtaXQodmFsdWVzKX1cbiAgICA+XG4gICAgICB7Zm9ybWlrID0+IChcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ2xpZ2h0Ymx1ZScsIHBhZGRpbmc6ICcyMHB4JyB9fT5cbiAgICAgICAgICBcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInZjcnJhZHNvbFwiPlJhZGljYWRvOiA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJ2Y3JyYWRzb2xcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgey4uLmZvcm1pay5nZXRGaWVsZFByb3BzKCd2Y3JyYWRzb2wnKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC52Y3JyYWRzb2wgJiYgZm9ybWlrLmVycm9ycy52Y3JyYWRzb2wgPyAoXG4gICAgICAgICAgICA8ZGl2Pntmb3JtaWsuZXJyb3JzLnZjcnJhZHNvbH08L2Rpdj5cbiAgICAgICAgICApIDogbnVsbH08YnIgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInZjcm5vbWF0aVwiPk5vbWJyZTogPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPVwidmNybm9tYXRpXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHsuLi5mb3JtaWsuZ2V0RmllbGRQcm9wcygndmNybm9tYXRpJyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQudmNybm9tYXRpICYmIGZvcm1pay5lcnJvcnMudmNybm9tYXRpID8gKFxuICAgICAgICAgICAgPGRpdj57Zm9ybWlrLmVycm9ycy52Y3Jub21hdGl9PC9kaXY+XG4gICAgICAgICAgKSA6IG51bGx9PGJyIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJiYXJyaW9cIj5CYXJyaW86IDwvbGFiZWw+XG4gICAgICAgICAgPEZpZWxkIG5hbWU9XCJiYXJyaW9cIiBhcz1cInNlbGVjdFwiIGNsYXNzTmFtZT1cIm15LXNlbGVjdFwiPiAgICAgICAgICBcbiAgICAgICAgICAgIHtiYXJyaW9zLm1hcCgoYmFycmlvKSA9PiAoXG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtiYXJyaW8uaWR9IHZhbHVlPXtiYXJyaW8uaWR9PlxuICAgICAgICAgICAgICAgIHtiYXJyaW8uYXR0cmlidXRlcy5WY3JCYXJWZXJ9XG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17Zm9ybWlrLmlzU3VibWl0dGluZ30+IE1vZGlmaWNhciA8L2J1dHRvbj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3Zpc2l0YXNcIj48YT4gIENhbmNlbGFyICA8L2E+PC9MaW5rPlxuXG4gICAgICAgIDwvZm9ybT5cbiAgICAgICl9XG4gICAgPC9Gb3JtaWs+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICBjb25zdCBbdmlzaXRhcywgYmFycmlvcyBdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGZldGNoQVBJKFwiL3Zpc2l0YXNcIiwgeyBwb3B1bGF0ZTogXCIqXCIsIGZpbHRlcnM6IHsgaWQ6IDF9fSksXG4gICAgZmV0Y2hBUEkoXCIvYmFycmlvc1wiLCB7IHBvcHVsYXRlOiBcIipcIiwgcGFnaW5hdGlvbjogeyBzdGFydDogMCwgbGltaXQ6IDUwMCB9LCBzb3J0OiBbJ1ZjckJhclZlciddfSlcbiAgXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgdmlzaXRhczogdmlzaXRhcy5kYXRhWzBdLFxuICAgICAgYmFycmlvczogYmFycmlvcy5kYXRhLFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwRm9ybTsiXSwic291cmNlUm9vdCI6IiJ9