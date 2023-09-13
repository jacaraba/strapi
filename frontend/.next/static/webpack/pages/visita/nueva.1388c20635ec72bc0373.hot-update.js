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
            values.barrio = [values.barrio];
            _context.prev = 1;
            _context.next = 4;
            return fetch("http://localhost:1337/api/visitas", {
              method: 'POST',
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
              console.log('¡Solicitud POST enviada con éxito!'); // Realiza alguna acción adicional después de enviar la solicitud PUT
            } else {
              console.log('Error al enviar la solicitud POST');
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

  for (var clave in barrionuevo.attributes) {
    if (barrionuevo.attributes.hasOwnProperty(clave)) {
      barrionuevo.attributes[clave] = "";
    }
  }

  barrionuevo.attributes.id = "Nueva Visita";
  barrionuevo.attributes.barrio = 500;
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
          htmlFor: "id",
          children: "Id: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread({
          id: "id",
          type: "text"
        }, formik.getFieldProps('id')), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, _this), formik.touched.id && formik.errors.id ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          children: formik.errors.id
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 20
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
          htmlFor: "vcrradsol",
          children: "Radicado: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread({
          id: "vcrradsol",
          type: "text"
        }, formik.getFieldProps('vcrradsol')), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, _this), formik.touched.vcrradsol && formik.errors.vcrradsol ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          children: formik.errors.vcrradsol
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 13
        }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 20
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
          htmlFor: "vcrnomati",
          children: "Nombre: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread({
          id: "vcrnomati",
          type: "text"
        }, formik.getFieldProps('vcrnomati')), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, _this), formik.touched.vcrnomati && formik.errors.vcrnomati ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          children: formik.errors.vcrnomati
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 20
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
          htmlFor: "barrio",
          children: "Barrio: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
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
              lineNumber: 97,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
          type: "submit",
          disabled: formik.isSubmitting,
          children: " Modificar "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
          href: "/visitas",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            children: "  Cancelar  "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 33
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlzaXRhL251ZXZhL2luZGV4LmpzIl0sIm5hbWVzIjpbImhhbmRsZUZvcm1TdWJtaXQiLCJ2YWx1ZXMiLCJiYXJyaW8iLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJ2aXNpdGFzIiwib2siLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJTaWdudXBGb3JtIiwiYmFycmlvcyIsImJhcnJpb251ZXZvIiwicGFyc2UiLCJhdHRyaWJ1dGVzIiwiY2xhdmUiLCJoYXNPd25Qcm9wZXJ0eSIsImlkIiwiWXVwIiwidmNycmFkc29sIiwibWF4IiwicmVxdWlyZWQiLCJ2Y3Jub21hdGkiLCJmb3JtaWsiLCJoYW5kbGVTdWJtaXQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwiZ2V0RmllbGRQcm9wcyIsInRvdWNoZWQiLCJlcnJvcnMiLCJtYXAiLCJWY3JCYXJWZXIiLCJpc1N1Ym1pdHRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZ0JBQWdCO0FBQUEsMlJBQUcsaUJBQU9DLE1BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXZCQSxrQkFBTSxDQUFDQyxNQUFQLEdBQWdCLENBQUNELE1BQU0sQ0FBQ0MsTUFBUixDQUFoQjtBQUZ1QjtBQUFBO0FBQUEsbUJBS0NDLEtBQUssc0NBQXNDO0FBQy9EQyxvQkFBTSxFQUFFLE1BRHVEO0FBRS9EQyxxQkFBTyxFQUFFO0FBQ1AsZ0NBQWdCO0FBRFQsZUFGc0Q7QUFLL0RDLGtCQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUVDLG9CQUFJLEVBQUVSO0FBQVIsZUFBZjtBQUx5RCxhQUF0QyxDQUxOOztBQUFBO0FBS2ZTLG1CQUxlOztBQVlyQixnQkFBSUEsT0FBTyxDQUFDQyxFQUFa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QSxNQUFNLENBQUNvQixFQUF0QztBQUFBLHdCQUNHcEIsTUFBTSxDQUFDaUIsVUFBUCxDQUFrQmlCO0FBRHJCLGVBQWFsQyxNQUFNLENBQUNvQixFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURXO0FBQUEsV0FBWjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBN0JGLGVBb0NFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcENGLGVBcUNFO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBc0Isa0JBQVEsRUFBRU0sTUFBTSxDQUFDUyxZQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFyQ0YsZUFzQ0UsOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUMsVUFBWDtBQUFBLGlDQUFzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESztBQUFBO0FBWlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMERELENBN0VEOztLQUFNdEIsVTs7QUE4Rk4sK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmlzaXRhL251ZXZhLjEzODhjMjA2MzVlYzcyYmMwMzczLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gXCIuLi8uLi8uLi9saWIvYXBpXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgeyBGb3JtaWssIEZpZWxkLCBGb3JtLCBFcnJvck1lc3NhZ2UgfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCc7XG5cbmNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBhc3luYyAodmFsdWVzKSA9PiB7XG5cbiAgdmFsdWVzLmJhcnJpbyA9IFt2YWx1ZXMuYmFycmlvXTtcblxuICB0cnkge1xuICAgIGNvbnN0IHZpc2l0YXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS92aXNpdGFzYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBkYXRhOiB2YWx1ZXMgfSksXG4gICAgfSk7XG4gICAgaWYgKHZpc2l0YXMub2spIHtcbiAgICAgIGNvbnNvbGUubG9nKCfCoVNvbGljaXR1ZCBQT1NUIGVudmlhZGEgY29uIMOpeGl0byEnKTtcbiAgICAgIC8vIFJlYWxpemEgYWxndW5hIGFjY2nDs24gYWRpY2lvbmFsIGRlc3B1w6lzIGRlIGVudmlhciBsYSBzb2xpY2l0dWQgUFVUXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBhbCBlbnZpYXIgbGEgc29saWNpdHVkIFBPU1QnKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG5cbiAgYWxlcnQoSlNPTi5zdHJpbmdpZnkodmFsdWVzLCBudWxsLCAyKSk7XG5cbn07XG5cbmNvbnN0IFNpZ251cEZvcm0gPSAoeyB2aXNpdGFzLCBiYXJyaW9zIH0pID0+IHtcbiAgXG4gIGNvbnN0IGJhcnJpb251ZXZvID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2aXNpdGFzKSk7XG4gIGRlbGV0ZSBiYXJyaW9udWV2by5hdHRyaWJ1dGVzLmJhcnJpb1xuICBmb3IgKGNvbnN0IGNsYXZlIGluIGJhcnJpb251ZXZvLmF0dHJpYnV0ZXMpIHtcbiAgICBpZiAoYmFycmlvbnVldm8uYXR0cmlidXRlcy5oYXNPd25Qcm9wZXJ0eShjbGF2ZSkpIHtcbiAgICAgIGJhcnJpb251ZXZvLmF0dHJpYnV0ZXNbY2xhdmVdID0gXCJcIjtcbiAgICB9XG4gIH1cbiAgYmFycmlvbnVldm8uYXR0cmlidXRlcy5pZCA9IFwiTnVldmEgVmlzaXRhXCJcbiAgYmFycmlvbnVldm8uYXR0cmlidXRlcy5iYXJyaW8gPSA1MDA7XG4gIFxuXG5cbiBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShiYXJyaW9udWV2bywgbnVsbCwgMikpOyAgIFxuIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHZpc2l0YXMuYXR0cmlidXRlcy5iYXJyaW8uZGF0YSwgbnVsbCwgMikpOyAgXG4gLy8gY29uc29sZS5sb2codmlzaXRhcy5hdHRyaWJ1dGVzLmJhcnJpby5kYXRhLmlkKTsgXG5cblxuICByZXR1cm4gKFxuICAgIDxGb3JtaWtcbiAgICAgIGluaXRpYWxWYWx1ZXM9e2JhcnJpb251ZXZvLmF0dHJpYnV0ZXN9XG4gICAgICB2YWxpZGF0aW9uU2NoZW1hPXtZdXAub2JqZWN0KHtcbiAgICAgICAgdmNycmFkc29sOiBZdXAuc3RyaW5nKClcbiAgICAgICAgICAubWF4KDE1LCAnRGViZSB0ZW5lciAxNSBjYXJhY3RlcmVzIG8gbWVub3MnKVxuICAgICAgICAgIC5yZXF1aXJlZCgnUmVxdWVyaWRvJyksXG4gICAgICAgIHZjcm5vbWF0aTogWXVwLnN0cmluZygpXG4gICAgICAgICAgLm1heCg1MCwgJ0RlYmUgdGVuZXIgMjAgY2FyYWN0ZXJlcyBvIG1lbm9zJylcbiAgICAgICAgICAucmVxdWlyZWQoJ1JlcXVlcmlkbycpLFxuICAgICAgfSl9XG4gICAgICBvblN1Ym1pdD17KHZhbHVlcykgPT4gaGFuZGxlRm9ybVN1Ym1pdCh2YWx1ZXMpfVxuICAgID5cbiAgICAgIHtmb3JtaWsgPT4gKFxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnbGlnaHRibHVlJywgcGFkZGluZzogJzIwcHgnIH19PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaWRcIj5JZDogPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPVwiaWRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgey4uLmZvcm1pay5nZXRGaWVsZFByb3BzKCdpZCcpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2Zvcm1pay50b3VjaGVkLmlkICYmIGZvcm1pay5lcnJvcnMuaWQgPyAoXG4gICAgICAgICAgICA8ZGl2Pntmb3JtaWsuZXJyb3JzLmlkfTwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfTxiciAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidmNycmFkc29sXCI+UmFkaWNhZG86IDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD1cInZjcnJhZHNvbFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB7Li4uZm9ybWlrLmdldEZpZWxkUHJvcHMoJ3ZjcnJhZHNvbCcpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2Zvcm1pay50b3VjaGVkLnZjcnJhZHNvbCAmJiBmb3JtaWsuZXJyb3JzLnZjcnJhZHNvbCA/IChcbiAgICAgICAgICAgIDxkaXY+e2Zvcm1pay5lcnJvcnMudmNycmFkc29sfTwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfTxiciAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidmNybm9tYXRpXCI+Tm9tYnJlOiA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJ2Y3Jub21hdGlcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgey4uLmZvcm1pay5nZXRGaWVsZFByb3BzKCd2Y3Jub21hdGknKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC52Y3Jub21hdGkgJiYgZm9ybWlrLmVycm9ycy52Y3Jub21hdGkgPyAoXG4gICAgICAgICAgICA8ZGl2Pntmb3JtaWsuZXJyb3JzLnZjcm5vbWF0aX08L2Rpdj5cbiAgICAgICAgICApIDogbnVsbH08YnIgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJhcnJpb1wiPkJhcnJpbzogPC9sYWJlbD5cbiAgICAgICAgICA8RmllbGQgbmFtZT1cImJhcnJpb1wiIGFzPVwic2VsZWN0XCIgY2xhc3NOYW1lPVwibXktc2VsZWN0XCI+ICAgICAgICAgIFxuICAgICAgICAgICAge2JhcnJpb3MubWFwKChiYXJyaW8pID0+IChcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2JhcnJpby5pZH0gdmFsdWU9e2JhcnJpby5pZH0+XG4gICAgICAgICAgICAgICAge2JhcnJpby5hdHRyaWJ1dGVzLlZjckJhclZlcn1cbiAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtmb3JtaWsuaXNTdWJtaXR0aW5nfT4gTW9kaWZpY2FyIDwvYnV0dG9uPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdmlzaXRhc1wiPjxhPiAgQ2FuY2VsYXIgIDwvYT48L0xpbms+XG5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgKX1cbiAgICA8L0Zvcm1paz5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IFt2aXNpdGFzLCBiYXJyaW9zIF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZmV0Y2hBUEkoXCIvdmlzaXRhc1wiLCB7IHBvcHVsYXRlOiBcIipcIiwgZmlsdGVyczogeyBpZDogMX19KSxcbiAgICBmZXRjaEFQSShcIi9iYXJyaW9zXCIsIHsgcG9wdWxhdGU6IFwiKlwiLCBwYWdpbmF0aW9uOiB7IHN0YXJ0OiAwLCBsaW1pdDogNTAwIH0sIHNvcnQ6IFsnVmNyQmFyVmVyJ119KVxuICBdKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICB2aXNpdGFzOiB2aXNpdGFzLmRhdGFbMF0sXG4gICAgICBiYXJyaW9zOiBiYXJyaW9zLmRhdGEsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaWdudXBGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=