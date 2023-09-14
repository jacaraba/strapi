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
          children: " Guardar "
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlzaXRhL251ZXZhL2luZGV4LmpzIl0sIm5hbWVzIjpbImhhbmRsZUZvcm1TdWJtaXQiLCJ2YWx1ZXMiLCJiYXJyaW8iLCJwYXJzZUludCIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiZmV0Y2giLCJnZXRTdHJhcGlVUkwiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsImRhdGEiLCJ2aXNpdGFzIiwib2siLCJTaWdudXBGb3JtIiwiYmFycmlvcyIsImJhcnJpb251ZXZvIiwicGFyc2UiLCJhdHRyaWJ1dGVzIiwiaWQiLCJjbGF2ZSIsImhhc093blByb3BlcnR5Iiwic2x1ZyIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInB1Ymxpc2hlZEF0IiwiWXVwIiwidmNycmFkc29sIiwibWF4IiwicmVxdWlyZWQiLCJ2Y3Jub21hdGkiLCJmb3JtaWsiLCJoYW5kbGVTdWJtaXQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwiZ2V0RmllbGRQcm9wcyIsInRvdWNoZWQiLCJlcnJvcnMiLCJtYXAiLCJWY3JCYXJWZXIiLCJpc1N1Ym1pdHRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZ0JBQWdCO0FBQUEsMlJBQUcsaUJBQU9DLE1BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXZCQSxrQkFBTSxDQUFDQyxNQUFQLEdBQWdCLENBQUNDLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDQyxNQUFSLENBQVQsQ0FBaEI7QUFDQUUsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZQyxJQUFJLENBQUNDLFNBQUwsQ0FBZU4sTUFBZixFQUF1QixJQUF2QixFQUE2QixDQUE3QixDQUFaO0FBSHVCO0FBQUE7QUFBQSxtQkFNQ08sS0FBSyxDQUFDQyxzREFBWSxDQUFDLGNBQUQsQ0FBYixFQUErQjtBQUN4REMsb0JBQU0sRUFBRSxNQURnRDtBQUV4REMscUJBQU8sRUFBRTtBQUNQLGdDQUFnQjtBQURULGVBRitDO0FBS3hEQyxrQkFBSSxFQUFFTixJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFFTSxvQkFBSSxFQUFFWjtBQUFSLGVBQWY7QUFMa0QsYUFBL0IsQ0FOTjs7QUFBQTtBQU1mYSxtQkFOZTs7QUFhckIsZ0JBQUlBLE9BQU8sQ0FBQ0MsRUFBWixFQUFnQjtBQUNkWCxxQkFBTyxDQUFDQyxHQUFSLENBQVksb0NBQVosRUFEYyxDQUVkO0FBQ0QsYUFIRCxNQUdPO0FBQ0xELHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxtQ0FBWjtBQUNEOztBQWxCb0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFvQnJCRCxtQkFBTyxDQUFDQyxHQUFSOztBQXBCcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBaEJMLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxHQUF0Qjs7QUEyQkEsSUFBTWdCLFVBQVUsR0FBRyxTQUFiQSxVQUFhLFFBQTBCO0FBQUEsTUFBdkJGLE9BQXVCLFNBQXZCQSxPQUF1QjtBQUFBLE1BQWRHLE9BQWMsU0FBZEEsT0FBYztBQUUzQyxNQUFNQyxXQUFXLEdBQUdaLElBQUksQ0FBQ2EsS0FBTCxDQUFXYixJQUFJLENBQUNDLFNBQUwsQ0FBZU8sT0FBZixDQUFYLENBQXBCO0FBQ0EsU0FBT0ksV0FBVyxDQUFDRSxVQUFaLENBQXVCbEIsTUFBOUI7QUFDQSxTQUFPZ0IsV0FBVyxDQUFDRyxFQUFuQjs7QUFFQSxPQUFLLElBQU1DLEtBQVgsSUFBb0JKLFdBQVcsQ0FBQ0UsVUFBaEMsRUFBNEM7QUFDMUMsUUFBSUYsV0FBVyxDQUFDRSxVQUFaLENBQXVCRyxjQUF2QixDQUFzQ0QsS0FBdEMsQ0FBSixFQUFrRDtBQUNoREosaUJBQVcsQ0FBQ0UsVUFBWixDQUF1QkUsS0FBdkIsSUFBZ0MsRUFBaEM7QUFDRDtBQUNGLEdBVjBDLENBVzNDOzs7QUFDQUosYUFBVyxDQUFDRSxVQUFaLENBQXVCbEIsTUFBdkIsR0FBZ0MsR0FBaEM7QUFFQSxTQUFPZ0IsV0FBVyxDQUFDRSxVQUFaLENBQXVCSSxJQUE5QjtBQUNBLFNBQU9OLFdBQVcsQ0FBQ0UsVUFBWixDQUF1QkssU0FBOUI7QUFDQSxTQUFPUCxXQUFXLENBQUNFLFVBQVosQ0FBdUJNLFNBQTlCO0FBQ0EsU0FBT1IsV0FBVyxDQUFDRSxVQUFaLENBQXVCTyxXQUE5QjtBQUVEdkIsU0FBTyxDQUFDQyxHQUFSLENBQVlDLElBQUksQ0FBQ0MsU0FBTCxDQUFlVyxXQUFmLEVBQTRCLElBQTVCLEVBQWtDLENBQWxDLENBQVosRUFuQjRDLENBb0I1QztBQUNBOztBQUdDLHNCQUNFLDhEQUFDLDBDQUFEO0FBQ0UsaUJBQWEsRUFBRUEsV0FBVyxDQUFDRSxVQUQ3QjtBQUVFLG9CQUFnQixFQUFFUSx1Q0FBQSxDQUFXO0FBQzNCQyxlQUFTLEVBQUVELHVDQUFBLEdBQ1JFLEdBRFEsQ0FDSixFQURJLEVBQ0Esa0NBREEsRUFFUkMsUUFGUSxDQUVDLFdBRkQsQ0FEZ0I7QUFJM0JDLGVBQVMsRUFBRUosdUNBQUEsR0FDUkUsR0FEUSxDQUNKLEVBREksRUFDQSxrQ0FEQSxFQUVSQyxRQUZRLENBRUMsV0FGRDtBQUpnQixLQUFYLENBRnBCO0FBVUUsWUFBUSxFQUFFLGtCQUFDOUIsTUFBRDtBQUFBLGFBQVlELGdCQUFnQixDQUFDQyxNQUFELENBQTVCO0FBQUEsS0FWWjtBQUFBLGNBWUcsa0JBQUFnQyxNQUFNO0FBQUEsMEJBQ0w7QUFBTSxnQkFBUSxFQUFFQSxNQUFNLENBQUNDLFlBQXZCO0FBQXFDLGFBQUssRUFBRTtBQUFFQyx5QkFBZSxFQUFFLFdBQW5CO0FBQWdDQyxpQkFBTyxFQUFFO0FBQXpDLFNBQTVDO0FBQUEsZ0NBRUU7QUFBTyxpQkFBTyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRTtBQUNFLFlBQUUsRUFBQyxXQURMO0FBRUUsY0FBSSxFQUFDO0FBRlAsV0FHTUgsTUFBTSxDQUFDSSxhQUFQLENBQXFCLFdBQXJCLENBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixFQVFHSixNQUFNLENBQUNLLE9BQVAsQ0FBZVQsU0FBZixJQUE0QkksTUFBTSxDQUFDTSxNQUFQLENBQWNWLFNBQTFDLGdCQUNDO0FBQUEsb0JBQU1JLE1BQU0sQ0FBQ00sTUFBUCxDQUFjVjtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELEdBRUcsSUFWTixlQVVXO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVlgsZUFXRTtBQUFPLGlCQUFPLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRixlQVlFO0FBQ0UsWUFBRSxFQUFDLFdBREw7QUFFRSxjQUFJLEVBQUM7QUFGUCxXQUdNSSxNQUFNLENBQUNJLGFBQVAsQ0FBcUIsV0FBckIsQ0FITjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGLEVBaUJHSixNQUFNLENBQUNLLE9BQVAsQ0FBZU4sU0FBZixJQUE0QkMsTUFBTSxDQUFDTSxNQUFQLENBQWNQLFNBQTFDLGdCQUNDO0FBQUEsb0JBQU1DLE1BQU0sQ0FBQ00sTUFBUCxDQUFjUDtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELEdBRUcsSUFuQk4sZUFtQlc7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFuQlgsZUFvQkU7QUFBTyxpQkFBTyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcEJGLGVBcUJFLDhEQUFDLHlDQUFEO0FBQU8sY0FBSSxFQUFDLFFBQVo7QUFBcUIsWUFBRSxFQUFDLFFBQXhCO0FBQWlDLG1CQUFTLEVBQUMsV0FBM0M7QUFBQSxvQkFDR2YsT0FBTyxDQUFDdUIsR0FBUixDQUFZLFVBQUN0QyxNQUFEO0FBQUEsZ0NBQ1g7QUFBd0IsbUJBQUssRUFBRUEsTUFBTSxDQUFDbUIsRUFBdEM7QUFBQSx3QkFDR25CLE1BQU0sQ0FBQ2tCLFVBQVAsQ0FBa0JxQjtBQURyQixlQUFhdkMsTUFBTSxDQUFDbUIsRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEVztBQUFBLFdBQVo7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXJCRixlQTRCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTVCRixlQTZCRTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLGtCQUFRLEVBQUVZLE1BQU0sQ0FBQ1MsWUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBN0JGLGVBOEJFLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLFVBQVg7QUFBQSxpQ0FBc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE5QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREs7QUFBQTtBQVpUO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtERCxDQTFFRDs7S0FBTTFCLFU7O0FBMkZOLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Zpc2l0YS9udWV2YS4wMzQxZWIxODJjNjZlZTdiMjVlZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U3RyYXBpVVJMICwgZmV0Y2hBUEkgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2FwaVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgRm9ybWlrLCBGaWVsZCwgRm9ybSwgRXJyb3JNZXNzYWdlIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnO1xuXG5jb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gYXN5bmMgKHZhbHVlcykgPT4ge1xuXG4gIHZhbHVlcy5iYXJyaW8gPSBbcGFyc2VJbnQodmFsdWVzLmJhcnJpbyldO1xuICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh2YWx1ZXMsIG51bGwsIDIpKVxuXG4gIHRyeSB7XG4gICAgY29uc3QgdmlzaXRhcyA9IGF3YWl0IGZldGNoKGdldFN0cmFwaVVSTChcIi9hcGkvdmlzaXRhc1wiKSwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBkYXRhOiB2YWx1ZXMgfSksXG4gICAgfSk7XG4gICAgaWYgKHZpc2l0YXMub2spIHtcbiAgICAgIGNvbnNvbGUubG9nKCfCoVNvbGljaXR1ZCBQT1NUIGVudmlhZGEgY29uIMOpeGl0byEnKTtcbiAgICAgIC8vIFJlYWxpemEgYWxndW5hIGFjY2nDs24gYWRpY2lvbmFsIGRlc3B1w6lzIGRlIGVudmlhciBsYSBzb2xpY2l0dWQgUFVUXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBhbCBlbnZpYXIgbGEgc29saWNpdHVkIFBPU1QnKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG5cbiAvLyBhbGVydChKU09OLnN0cmluZ2lmeSh2YWx1ZXMsIG51bGwsIDIpKTtcblxufTtcblxuY29uc3QgU2lnbnVwRm9ybSA9ICh7IHZpc2l0YXMsIGJhcnJpb3MgfSkgPT4ge1xuICBcbiAgY29uc3QgYmFycmlvbnVldm8gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZpc2l0YXMpKTtcbiAgZGVsZXRlIGJhcnJpb251ZXZvLmF0dHJpYnV0ZXMuYmFycmlvXG4gIGRlbGV0ZSBiYXJyaW9udWV2by5pZFxuXG4gIGZvciAoY29uc3QgY2xhdmUgaW4gYmFycmlvbnVldm8uYXR0cmlidXRlcykge1xuICAgIGlmIChiYXJyaW9udWV2by5hdHRyaWJ1dGVzLmhhc093blByb3BlcnR5KGNsYXZlKSkge1xuICAgICAgYmFycmlvbnVldm8uYXR0cmlidXRlc1tjbGF2ZV0gPSBcIlwiO1xuICAgIH1cbiAgfVxuICAvLyBiYXJyaW9udWV2by5hdHRyaWJ1dGVzLmlkID0gXCJOdWV2YSBWaXNpdGFcIlxuICBiYXJyaW9udWV2by5hdHRyaWJ1dGVzLmJhcnJpbyA9IDUwMDtcblxuICBkZWxldGUgYmFycmlvbnVldm8uYXR0cmlidXRlcy5zbHVnXG4gIGRlbGV0ZSBiYXJyaW9udWV2by5hdHRyaWJ1dGVzLmNyZWF0ZWRBdFxuICBkZWxldGUgYmFycmlvbnVldm8uYXR0cmlidXRlcy51cGRhdGVkQXRcbiAgZGVsZXRlIGJhcnJpb251ZXZvLmF0dHJpYnV0ZXMucHVibGlzaGVkQXRcblxuIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGJhcnJpb251ZXZvLCBudWxsLCAyKSk7ICAgXG4gLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodmlzaXRhcy5hdHRyaWJ1dGVzLmJhcnJpby5kYXRhLCBudWxsLCAyKSk7ICBcbiAvLyBjb25zb2xlLmxvZyh2aXNpdGFzLmF0dHJpYnV0ZXMuYmFycmlvLmRhdGEuaWQpOyBcblxuXG4gIHJldHVybiAoXG4gICAgPEZvcm1pa1xuICAgICAgaW5pdGlhbFZhbHVlcz17YmFycmlvbnVldm8uYXR0cmlidXRlc31cbiAgICAgIHZhbGlkYXRpb25TY2hlbWE9e1l1cC5vYmplY3Qoe1xuICAgICAgICB2Y3JyYWRzb2w6IFl1cC5zdHJpbmcoKVxuICAgICAgICAgIC5tYXgoMTUsICdEZWJlIHRlbmVyIDE1IGNhcmFjdGVyZXMgbyBtZW5vcycpXG4gICAgICAgICAgLnJlcXVpcmVkKCdSZXF1ZXJpZG8nKSxcbiAgICAgICAgdmNybm9tYXRpOiBZdXAuc3RyaW5nKClcbiAgICAgICAgICAubWF4KDUwLCAnRGViZSB0ZW5lciAyMCBjYXJhY3RlcmVzIG8gbWVub3MnKVxuICAgICAgICAgIC5yZXF1aXJlZCgnUmVxdWVyaWRvJyksXG4gICAgICB9KX1cbiAgICAgIG9uU3VibWl0PXsodmFsdWVzKSA9PiBoYW5kbGVGb3JtU3VibWl0KHZhbHVlcyl9XG4gICAgPlxuICAgICAge2Zvcm1payA9PiAoXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodGJsdWUnLCBwYWRkaW5nOiAnMjBweCcgfX0+XG4gICAgICAgICAgXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ2Y3JyYWRzb2xcIj5SYWRpY2FkbzogPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPVwidmNycmFkc29sXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHsuLi5mb3JtaWsuZ2V0RmllbGRQcm9wcygndmNycmFkc29sJyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQudmNycmFkc29sICYmIGZvcm1pay5lcnJvcnMudmNycmFkc29sID8gKFxuICAgICAgICAgICAgPGRpdj57Zm9ybWlrLmVycm9ycy52Y3JyYWRzb2x9PC9kaXY+XG4gICAgICAgICAgKSA6IG51bGx9PGJyIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ2Y3Jub21hdGlcIj5Ob21icmU6IDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD1cInZjcm5vbWF0aVwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB7Li4uZm9ybWlrLmdldEZpZWxkUHJvcHMoJ3Zjcm5vbWF0aScpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2Zvcm1pay50b3VjaGVkLnZjcm5vbWF0aSAmJiBmb3JtaWsuZXJyb3JzLnZjcm5vbWF0aSA/IChcbiAgICAgICAgICAgIDxkaXY+e2Zvcm1pay5lcnJvcnMudmNybm9tYXRpfTwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfTxiciAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYmFycmlvXCI+QmFycmlvOiA8L2xhYmVsPlxuICAgICAgICAgIDxGaWVsZCBuYW1lPVwiYmFycmlvXCIgYXM9XCJzZWxlY3RcIiBjbGFzc05hbWU9XCJteS1zZWxlY3RcIj4gICAgICAgICAgXG4gICAgICAgICAgICB7YmFycmlvcy5tYXAoKGJhcnJpbykgPT4gKFxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT17YmFycmlvLmlkfSB2YWx1ZT17YmFycmlvLmlkfT5cbiAgICAgICAgICAgICAgICB7YmFycmlvLmF0dHJpYnV0ZXMuVmNyQmFyVmVyfVxuICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e2Zvcm1pay5pc1N1Ym1pdHRpbmd9PiBHdWFyZGFyIDwvYnV0dG9uPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdmlzaXRhc1wiPjxhPiAgQ2FuY2VsYXIgIDwvYT48L0xpbms+XG5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgKX1cbiAgICA8L0Zvcm1paz5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IFt2aXNpdGFzLCBiYXJyaW9zIF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZmV0Y2hBUEkoXCIvdmlzaXRhc1wiLCB7IHBvcHVsYXRlOiBcIipcIiwgZmlsdGVyczogeyBpZDogMX19KSxcbiAgICBmZXRjaEFQSShcIi9iYXJyaW9zXCIsIHsgcG9wdWxhdGU6IFwiKlwiLCBwYWdpbmF0aW9uOiB7IHN0YXJ0OiAwLCBsaW1pdDogNTAwIH0sIHNvcnQ6IFsnVmNyQmFyVmVyJ119KVxuICBdKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICB2aXNpdGFzOiB2aXNpdGFzLmRhdGFbMF0sXG4gICAgICBiYXJyaW9zOiBiYXJyaW9zLmRhdGEsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaWdudXBGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=