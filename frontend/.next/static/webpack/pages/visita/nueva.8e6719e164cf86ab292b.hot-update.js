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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! yup */ "./node_modules/yup/index.esm.js");
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
            return fetch("http://localhost:1337/api/visitas/", {
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
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlzaXRhL251ZXZhL2luZGV4LmpzIl0sIm5hbWVzIjpbImhhbmRsZUZvcm1TdWJtaXQiLCJ2YWx1ZXMiLCJiYXJyaW8iLCJwYXJzZUludCIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsImRhdGEiLCJ2aXNpdGFzIiwib2siLCJhbGVydCIsIlNpZ251cEZvcm0iLCJiYXJyaW9zIiwiYmFycmlvbnVldm8iLCJwYXJzZSIsImF0dHJpYnV0ZXMiLCJpZCIsImNsYXZlIiwiaGFzT3duUHJvcGVydHkiLCJzbHVnIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0IiwicHVibGlzaGVkQXQiLCJZdXAiLCJ2Y3JyYWRzb2wiLCJtYXgiLCJyZXF1aXJlZCIsInZjcm5vbWF0aSIsImZvcm1payIsImhhbmRsZVN1Ym1pdCIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJnZXRGaWVsZFByb3BzIiwidG91Y2hlZCIsImVycm9ycyIsIm1hcCIsIlZjckJhclZlciIsImlzU3VibWl0dGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxnQkFBZ0I7QUFBQSwyUkFBRyxpQkFBT0MsTUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFdkJBLGtCQUFNLENBQUNDLE1BQVAsR0FBZ0IsQ0FBQ0MsUUFBUSxDQUFDRixNQUFNLENBQUNDLE1BQVIsQ0FBVCxDQUFoQjtBQUNBRSxtQkFBTyxDQUFDQyxHQUFSLENBQVlDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTixNQUFmLEVBQXVCLElBQXZCLEVBQTZCLENBQTdCLENBQVo7QUFIdUI7QUFBQTtBQUFBLG1CQU1DTyxLQUFLLHVDQUF1QztBQUNoRUMsb0JBQU0sRUFBRSxNQUR3RDtBQUVoRUMscUJBQU8sRUFB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VUFBUCxDQUFrQnFCO0FBRHJCLGVBQWF2QyxNQUFNLENBQUNtQixFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURXO0FBQUEsV0FBWjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBckJGLGVBNEJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBNUJGLGVBNkJFO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBc0Isa0JBQVEsRUFBRVksTUFBTSxDQUFDUyxZQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE3QkYsZUE4QkUsOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUMsVUFBWDtBQUFBLGlDQUFzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTlCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESztBQUFBO0FBWlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0RELENBMUVEOztLQUFNMUIsVTs7QUEyRk4sK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmlzaXRhL251ZXZhLjhlNjcxOWUxNjRjZjg2YWIyOTJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gXCIuLi8uLi8uLi9saWIvYXBpXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgeyBGb3JtaWssIEZpZWxkLCBGb3JtLCBFcnJvck1lc3NhZ2UgfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCc7XG5cbmNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBhc3luYyAodmFsdWVzKSA9PiB7XG5cbiAgdmFsdWVzLmJhcnJpbyA9IFtwYXJzZUludCh2YWx1ZXMuYmFycmlvKV07XG4gIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHZhbHVlcywgbnVsbCwgMikpXG5cbiAgdHJ5IHtcbiAgICBjb25zdCB2aXNpdGFzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9hcGkvdmlzaXRhcy9gLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGRhdGE6IHZhbHVlcyB9KSxcbiAgICB9KTtcbiAgICBpZiAodmlzaXRhcy5vaykge1xuICAgICAgY29uc29sZS5sb2coJ8KhU29saWNpdHVkIFBPU1QgZW52aWFkYSBjb24gw6l4aXRvIScpO1xuICAgICAgLy8gUmVhbGl6YSBhbGd1bmEgYWNjacOzbiBhZGljaW9uYWwgZGVzcHXDqXMgZGUgZW52aWFyIGxhIHNvbGljaXR1ZCBQVVRcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGFsIGVudmlhciBsYSBzb2xpY2l0dWQgUE9TVCcpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cblxuICBhbGVydChKU09OLnN0cmluZ2lmeSh2YWx1ZXMsIG51bGwsIDIpKTtcblxufTtcblxuY29uc3QgU2lnbnVwRm9ybSA9ICh7IHZpc2l0YXMsIGJhcnJpb3MgfSkgPT4ge1xuICBcbiAgY29uc3QgYmFycmlvbnVldm8gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZpc2l0YXMpKTtcbiAgZGVsZXRlIGJhcnJpb251ZXZvLmF0dHJpYnV0ZXMuYmFycmlvXG4gIGRlbGV0ZSBiYXJyaW9udWV2by5pZFxuXG4gIGZvciAoY29uc3QgY2xhdmUgaW4gYmFycmlvbnVldm8uYXR0cmlidXRlcykge1xuICAgIGlmIChiYXJyaW9udWV2by5hdHRyaWJ1dGVzLmhhc093blByb3BlcnR5KGNsYXZlKSkge1xuICAgICAgYmFycmlvbnVldm8uYXR0cmlidXRlc1tjbGF2ZV0gPSBcIlwiO1xuICAgIH1cbiAgfVxuICAvLyBiYXJyaW9udWV2by5hdHRyaWJ1dGVzLmlkID0gXCJOdWV2YSBWaXNpdGFcIlxuICBiYXJyaW9udWV2by5hdHRyaWJ1dGVzLmJhcnJpbyA9IDUwMDtcblxuICBkZWxldGUgYmFycmlvbnVldm8uYXR0cmlidXRlcy5zbHVnXG4gIGRlbGV0ZSBiYXJyaW9udWV2by5hdHRyaWJ1dGVzLmNyZWF0ZWRBdFxuICBkZWxldGUgYmFycmlvbnVldm8uYXR0cmlidXRlcy51cGRhdGVkQXRcbiAgZGVsZXRlIGJhcnJpb251ZXZvLmF0dHJpYnV0ZXMucHVibGlzaGVkQXRcblxuIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGJhcnJpb251ZXZvLCBudWxsLCAyKSk7ICAgXG4gLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodmlzaXRhcy5hdHRyaWJ1dGVzLmJhcnJpby5kYXRhLCBudWxsLCAyKSk7ICBcbiAvLyBjb25zb2xlLmxvZyh2aXNpdGFzLmF0dHJpYnV0ZXMuYmFycmlvLmRhdGEuaWQpOyBcblxuXG4gIHJldHVybiAoXG4gICAgPEZvcm1pa1xuICAgICAgaW5pdGlhbFZhbHVlcz17YmFycmlvbnVldm8uYXR0cmlidXRlc31cbiAgICAgIHZhbGlkYXRpb25TY2hlbWE9e1l1cC5vYmplY3Qoe1xuICAgICAgICB2Y3JyYWRzb2w6IFl1cC5zdHJpbmcoKVxuICAgICAgICAgIC5tYXgoMTUsICdEZWJlIHRlbmVyIDE1IGNhcmFjdGVyZXMgbyBtZW5vcycpXG4gICAgICAgICAgLnJlcXVpcmVkKCdSZXF1ZXJpZG8nKSxcbiAgICAgICAgdmNybm9tYXRpOiBZdXAuc3RyaW5nKClcbiAgICAgICAgICAubWF4KDUwLCAnRGViZSB0ZW5lciAyMCBjYXJhY3RlcmVzIG8gbWVub3MnKVxuICAgICAgICAgIC5yZXF1aXJlZCgnUmVxdWVyaWRvJyksXG4gICAgICB9KX1cbiAgICAgIG9uU3VibWl0PXsodmFsdWVzKSA9PiBoYW5kbGVGb3JtU3VibWl0KHZhbHVlcyl9XG4gICAgPlxuICAgICAge2Zvcm1payA9PiAoXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodGJsdWUnLCBwYWRkaW5nOiAnMjBweCcgfX0+XG4gICAgICAgICAgXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ2Y3JyYWRzb2xcIj5SYWRpY2FkbzogPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPVwidmNycmFkc29sXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHsuLi5mb3JtaWsuZ2V0RmllbGRQcm9wcygndmNycmFkc29sJyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQudmNycmFkc29sICYmIGZvcm1pay5lcnJvcnMudmNycmFkc29sID8gKFxuICAgICAgICAgICAgPGRpdj57Zm9ybWlrLmVycm9ycy52Y3JyYWRzb2x9PC9kaXY+XG4gICAgICAgICAgKSA6IG51bGx9PGJyIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ2Y3Jub21hdGlcIj5Ob21icmU6IDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD1cInZjcm5vbWF0aVwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB7Li4uZm9ybWlrLmdldEZpZWxkUHJvcHMoJ3Zjcm5vbWF0aScpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2Zvcm1pay50b3VjaGVkLnZjcm5vbWF0aSAmJiBmb3JtaWsuZXJyb3JzLnZjcm5vbWF0aSA/IChcbiAgICAgICAgICAgIDxkaXY+e2Zvcm1pay5lcnJvcnMudmNybm9tYXRpfTwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfTxiciAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYmFycmlvXCI+QmFycmlvOiA8L2xhYmVsPlxuICAgICAgICAgIDxGaWVsZCBuYW1lPVwiYmFycmlvXCIgYXM9XCJzZWxlY3RcIiBjbGFzc05hbWU9XCJteS1zZWxlY3RcIj4gICAgICAgICAgXG4gICAgICAgICAgICB7YmFycmlvcy5tYXAoKGJhcnJpbykgPT4gKFxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT17YmFycmlvLmlkfSB2YWx1ZT17YmFycmlvLmlkfT5cbiAgICAgICAgICAgICAgICB7YmFycmlvLmF0dHJpYnV0ZXMuVmNyQmFyVmVyfVxuICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e2Zvcm1pay5pc1N1Ym1pdHRpbmd9PiBNb2RpZmljYXIgPC9idXR0b24+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi92aXNpdGFzXCI+PGE+ICBDYW5jZWxhciAgPC9hPjwvTGluaz5cblxuICAgICAgICA8L2Zvcm0+XG4gICAgICApfVxuICAgIDwvRm9ybWlrPlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgY29uc3QgW3Zpc2l0YXMsIGJhcnJpb3MgXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBmZXRjaEFQSShcIi92aXNpdGFzXCIsIHsgcG9wdWxhdGU6IFwiKlwiLCBmaWx0ZXJzOiB7IGlkOiAxfX0pLFxuICAgIGZldGNoQVBJKFwiL2JhcnJpb3NcIiwgeyBwb3B1bGF0ZTogXCIqXCIsIHBhZ2luYXRpb246IHsgc3RhcnQ6IDAsIGxpbWl0OiA1MDAgfSwgc29ydDogWydWY3JCYXJWZXInXX0pXG4gIF0pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHZpc2l0YXM6IHZpc2l0YXMuZGF0YVswXSxcbiAgICAgIGJhcnJpb3M6IGJhcnJpb3MuZGF0YSxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ251cEZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==