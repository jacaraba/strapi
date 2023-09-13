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
            return fetch("http://localhost:1337/api/visitas/".concat(values.id), {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlzaXRhL1tzbHVnXS5qcyJdLCJuYW1lcyI6WyJoYW5kbGVGb3JtU3VibWl0IiwidmFsdWVzIiwiYmFycmlvIiwiZmV0Y2giLCJpZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJ2aXNpdGFzIiwib2siLCJjb25zb2xlIiwibG9nIiwiU2lnbnVwRm9ybSIsImJhcnJpb3MiLCJiYXJyaW9udWV2byIsInBhcnNlIiwiYXR0cmlidXRlcyIsIll1cCIsInZjcnJhZHNvbCIsIm1heCIsInJlcXVpcmVkIiwidmNybm9tYXRpIiwiZm9ybWlrIiwiaGFuZGxlU3VibWl0IiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImdldEZpZWxkUHJvcHMiLCJ0b3VjaGVkIiwiZXJyb3JzIiwibWFwIiwiVmNyQmFyVmVyIiwiaXNTdWJtaXR0aW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGdCQUFnQjtBQUFBLDJSQUFHLGlCQUFPQyxNQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUV2QkEsa0JBQU0sQ0FBQ0MsTUFBUCxHQUFnQixDQUFDRCxNQUFNLENBQUNDLE1BQVIsQ0FBaEI7QUFGdUI7QUFBQTtBQUFBLG1CQUtDQyxLQUFLLDZDQUFzQ0YsTUFBTSxDQUFDRyxFQUE3QyxHQUFtRDtBQUM1RUMsb0JBQU0sRUFBRSxLQURvRTtBQUU1RUMscUJBQU8sRUFBRTtBQUNQLGdDQUFnQjtBQURULGVBRm1FO0FBSzVFQyxrQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFFQyxvQkFBSSxFQUFFVDtBQUFSLGVBQWY7QUFMc0UsYUFBbkQsQ0FMTjs7QUFBQTtBQUtmVSxtQkFMZTs7QUFZckIsZ0JBQUlBLE9BQU8sQ0FBQ0MsRUFBWixFQUFnQjtBQUNkQyxx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O0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBM0JYLGVBNEJFO0FBQU8saUJBQU8sRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTVCRixlQTZCRSw4REFBQyx5Q0FBRDtBQUFPLGNBQUksRUFBQyxRQUFaO0FBQXFCLFlBQUUsRUFBQyxRQUF4QjtBQUFpQyxtQkFBUyxFQUFDLFdBQTNDO0FBQUEsb0JBQ0dSLE9BQU8sQ0FBQ2dCLEdBQVIsQ0FBWSxVQUFDOUIsTUFBRDtBQUFBLGdDQUNYO0FBQXdCLG1CQUFLLEVBQUVBLE1BQU0sQ0FBQ0UsRUFBdEM7QUFBQSx3QkFDR0YsTUFBTSxDQUFDaUIsVUFBUCxDQUFrQmM7QUFEckIsZUFBYS9CLE1BQU0sQ0FBQ0UsRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEVztBQUFBLFdBQVo7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdCRixlQW9DRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBDRixlQXFDRTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLGtCQUFRLEVBQUVxQixNQUFNLENBQUNTLFlBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXJDRixlQXNDRSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxVQUFYO0FBQUEsaUNBQXNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURLO0FBQUE7QUFaVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwREQsQ0F2RUQ7O0tBQU1uQixVOztBQXNHTiwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92aXNpdGEvW3NsdWddLmExYmM1ZTVkNDc4Mjg5MTE3NzU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgeyBGb3JtaWssIEZpZWxkLCBGb3JtLCBFcnJvck1lc3NhZ2UgfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCc7XG5cbmNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBhc3luYyAodmFsdWVzKSA9PiB7XG5cbiAgdmFsdWVzLmJhcnJpbyA9IFt2YWx1ZXMuYmFycmlvXTtcblxuICB0cnkge1xuICAgIGNvbnN0IHZpc2l0YXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS92aXNpdGFzLyR7dmFsdWVzLmlkfWAsIHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBkYXRhOiB2YWx1ZXMgfSksXG4gICAgfSk7XG4gICAgaWYgKHZpc2l0YXMub2spIHtcbiAgICAgIGNvbnNvbGUubG9nKCfCoVNvbGljaXR1ZCBQVVQgZW52aWFkYSBjb24gw6l4aXRvIScpO1xuICAgICAgLy8gUmVhbGl6YSBhbGd1bmEgYWNjacOzbiBhZGljaW9uYWwgZGVzcHXDqXMgZGUgZW52aWFyIGxhIHNvbGljaXR1ZCBQVVRcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGFsIGVudmlhciBsYSBzb2xpY2l0dWQgUFVUJyk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxuXG4gIC8vIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHZhbHVlcywgbnVsbCwgMikpO1xuXG59O1xuXG5jb25zdCBTaWdudXBGb3JtID0gKHsgdmlzaXRhcywgYmFycmlvcyB9KSA9PiB7XG4gIFxuICBjb25zdCBiYXJyaW9udWV2byA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmlzaXRhcykpO1xuICBkZWxldGUgYmFycmlvbnVldm8uYXR0cmlidXRlcy5iYXJyaW9cbiAgYmFycmlvbnVldm8uYXR0cmlidXRlcy5pZCA9IHZpc2l0YXMuaWRcbiAgYmFycmlvbnVldm8uYXR0cmlidXRlcy5iYXJyaW8gPSB2aXNpdGFzLmF0dHJpYnV0ZXMuYmFycmlvLmRhdGEuaWQ7XG5cbi8qIFxuIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGJhcnJpb251ZXZvLCBudWxsLCAyKSk7ICAgXG4gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodmlzaXRhcy5hdHRyaWJ1dGVzLmJhcnJpby5kYXRhLCBudWxsLCAyKSk7ICBcbiBjb25zb2xlLmxvZyh2aXNpdGFzLmF0dHJpYnV0ZXMuYmFycmlvLmRhdGEuaWQpOyAqL1xuXG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybWlrXG4gICAgICBpbml0aWFsVmFsdWVzPXtiYXJyaW9udWV2by5hdHRyaWJ1dGVzfVxuICAgICAgdmFsaWRhdGlvblNjaGVtYT17WXVwLm9iamVjdCh7XG4gICAgICAgIHZjcnJhZHNvbDogWXVwLnN0cmluZygpXG4gICAgICAgICAgLm1heCgxNSwgJ0RlYmUgdGVuZXIgMTUgY2FyYWN0ZXJlcyBvIG1lbm9zJylcbiAgICAgICAgICAucmVxdWlyZWQoJ1JlcXVlcmlkbycpLFxuICAgICAgICB2Y3Jub21hdGk6IFl1cC5zdHJpbmcoKVxuICAgICAgICAgIC5tYXgoNTAsICdEZWJlIHRlbmVyIDIwIGNhcmFjdGVyZXMgbyBtZW5vcycpXG4gICAgICAgICAgLnJlcXVpcmVkKCdSZXF1ZXJpZG8nKSxcbiAgICAgIH0pfVxuICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMpID0+IGhhbmRsZUZvcm1TdWJtaXQodmFsdWVzKX1cbiAgICA+XG4gICAgICB7Zm9ybWlrID0+IChcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ2xpZ2h0Ymx1ZScsIHBhZGRpbmc6ICcyMHB4JyB9fT5cbiAgICAgICAgICB7LyogPGxhYmVsIGh0bWxGb3I9XCJpZFwiPklkOiA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJpZFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB7Li4uZm9ybWlrLmdldEZpZWxkUHJvcHMoJ2lkJyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQuaWQgJiYgZm9ybWlrLmVycm9ycy5pZCA/IChcbiAgICAgICAgICAgIDxkaXY+e2Zvcm1pay5lcnJvcnMuaWR9PC9kaXY+XG4gICAgICAgICAgKSA6IG51bGx9PGJyIC8+ICovfVxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidmNycmFkc29sXCI+UmFkaWNhZG86IDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD1cInZjcnJhZHNvbFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB7Li4uZm9ybWlrLmdldEZpZWxkUHJvcHMoJ3ZjcnJhZHNvbCcpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2Zvcm1pay50b3VjaGVkLnZjcnJhZHNvbCAmJiBmb3JtaWsuZXJyb3JzLnZjcnJhZHNvbCA/IChcbiAgICAgICAgICAgIDxkaXY+e2Zvcm1pay5lcnJvcnMudmNycmFkc29sfTwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfTxiciAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidmNybm9tYXRpXCI+Tm9tYnJlOiA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJ2Y3Jub21hdGlcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgey4uLmZvcm1pay5nZXRGaWVsZFByb3BzKCd2Y3Jub21hdGknKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC52Y3Jub21hdGkgJiYgZm9ybWlrLmVycm9ycy52Y3Jub21hdGkgPyAoXG4gICAgICAgICAgICA8ZGl2Pntmb3JtaWsuZXJyb3JzLnZjcm5vbWF0aX08L2Rpdj5cbiAgICAgICAgICApIDogbnVsbH08YnIgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJhcnJpb1wiPkJhcnJpbzogPC9sYWJlbD5cbiAgICAgICAgICA8RmllbGQgbmFtZT1cImJhcnJpb1wiIGFzPVwic2VsZWN0XCIgY2xhc3NOYW1lPVwibXktc2VsZWN0XCI+ICAgICAgICAgIFxuICAgICAgICAgICAge2JhcnJpb3MubWFwKChiYXJyaW8pID0+IChcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2JhcnJpby5pZH0gdmFsdWU9e2JhcnJpby5pZH0+XG4gICAgICAgICAgICAgICAge2JhcnJpby5hdHRyaWJ1dGVzLlZjckJhclZlcn1cbiAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtmb3JtaWsuaXNTdWJtaXR0aW5nfT4gTW9kaWZpY2FyIDwvYnV0dG9uPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdmlzaXRhc1wiPjxhPiAgQ2FuY2VsYXIgIDwvYT48L0xpbms+XG5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgKX1cbiAgICA8L0Zvcm1paz5cbiAgKTtcbn07XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBjYXRlZ29yaWVzUmVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvdmlzaXRhc1wiLCB7IGZpZWxkczogW1wiaWRcIl0gfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBjYXRlZ29yaWVzUmVzLmRhdGEubWFwKCh2aXNpdGEpID0+ICh7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgc2x1ZzogdmlzaXRhLmlkLnRvU3RyaW5nKDEwKSxcbiAgICAgIH0sXG4gICAgfSkpLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICBjb25zdCBbdmlzaXRhcywgYmFycmlvcyBdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGZldGNoQVBJKFwiL3Zpc2l0YXNcIiwgeyBwb3B1bGF0ZTogXCIqXCIsIGZpbHRlcnM6IHsgaWQ6IHBhcmFtcy5zbHVnfX0pLFxuICAgIGZldGNoQVBJKFwiL2JhcnJpb3NcIiwgeyBwb3B1bGF0ZTogXCIqXCIsIHBhZ2luYXRpb246IHsgc3RhcnQ6IDAsIGxpbWl0OiA1MDAgfSwgc29ydDogWydpZCddfSlcbiAgXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgdmlzaXRhczogdmlzaXRhcy5kYXRhWzBdLFxuICAgICAgYmFycmlvczogYmFycmlvcy5kYXRhXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaWdudXBGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=