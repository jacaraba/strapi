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

  /* const barrionuevo = JSON.parse(JSON.stringify(visitas));;
  // visitas.attributes.id = visitas.id
  // delete visitas.attributes.barrio
  delete barrionuevo.attributes.barrio
  barrionuevo.attributes.barrio = 500
   // visitas.attributes.barrio = visitas.attributes.barrio.data.attributes.id;
  console.log(JSON.stringify(barrionuevo, null, 2));  */
  console.log(JSON.stringify(visitas.attributes.barrio.data.attributes.id, null, 2));
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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
          htmlFor: "id",
          children: "Id: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread({
          id: "id",
          type: "text"
        }, formik.getFieldProps('id')), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, _this), formik.touched.id && formik.errors.id ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          children: formik.errors.id
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 20
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
          htmlFor: "vcrradsol",
          children: "Radicado: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread({
          id: "vcrradsol",
          type: "text"
        }, formik.getFieldProps('vcrradsol')), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, _this), formik.touched.vcrradsol && formik.errors.vcrradsol ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          children: formik.errors.vcrradsol
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 20
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
          htmlFor: "vcrnomati",
          children: "Nombre: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread({
          id: "vcrnomati",
          type: "text"
        }, formik.getFieldProps('vcrnomati')), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this), formik.touched.vcrnomati && formik.errors.vcrnomati ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          children: formik.errors.vcrnomati
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 13
        }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 20
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
          htmlFor: "barrio",
          children: "Barrio: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
          name: "barrio",
          as: "select",
          className: "my-select",
          children: barrios.map(function (barrio) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
              value: barrio.id,
              children: barrio.attributes.VcrBarVer
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
          type: "submit",
          disabled: formik.isSubmitting,
          children: "Enviar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
          href: "/visitas",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            children: "  Cancelar  "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 33
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlzaXRhL1tzbHVnXS5qcyJdLCJuYW1lcyI6WyJoYW5kbGVGb3JtU3VibWl0IiwidmFsdWVzIiwicmVnaXN0cm8iLCJhbGVydCIsIkpTT04iLCJzdHJpbmdpZnkiLCJTaWdudXBGb3JtIiwidmlzaXRhcyIsImJhcnJpb3MiLCJjb25zb2xlIiwibG9nIiwiYXR0cmlidXRlcyIsImJhcnJpbyIsImRhdGEiLCJpZCIsIll1cCIsInZjcnJhZHNvbCIsIm1heCIsInJlcXVpcmVkIiwidmNybm9tYXRpIiwiZm9ybWlrIiwiaGFuZGxlU3VibWl0IiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImdldEZpZWxkUHJvcHMiLCJ0b3VjaGVkIiwiZXJyb3JzIiwibWFwIiwiVmNyQmFyVmVyIiwiaXNTdWJtaXR0aW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGdCQUFnQjtBQUFBLDJSQUFHLGlCQUFPQyxNQUFQLEVBQWVDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN2QjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRUMsaUJBQUssQ0FBQ0MsSUFBSSxDQUFDQyxTQUFMLENBQWVKLE1BQWYsRUFBdUIsSUFBdkIsRUFBNkIsQ0FBN0IsQ0FBRCxDQUFMOztBQW5CdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBaEJELGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxHQUF0Qjs7QUFzQkEsSUFBTU0sVUFBVSxHQUFHLFNBQWJBLFVBQWEsUUFBb0M7QUFBQSxNQUFqQ0osUUFBaUMsU0FBakNBLFFBQWlDO0FBQUEsTUFBdkJLLE9BQXVCLFNBQXZCQSxPQUF1QjtBQUFBLE1B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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTVCRixlQTZCRSw4REFBQyx5Q0FBRDtBQUFPLGNBQUksRUFBQyxRQUFaO0FBQXFCLFlBQUUsRUFBQyxRQUF4QjtBQUFpQyxtQkFBUyxFQUFDLFdBQTNDO0FBQUEsb0JBQ0dYLE9BQU8sQ0FBQ21CLEdBQVIsQ0FBWSxVQUFDZixNQUFEO0FBQUEsZ0NBQ1g7QUFBUSxtQkFBSyxFQUFFQSxNQUFNLENBQUNFLEVBQXRCO0FBQUEsd0JBQ0dGLE1BQU0sQ0FBQ0QsVUFBUCxDQUFrQmlCO0FBRHJCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFc7QUFBQSxXQUFaO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE3QkYsZUFvQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwQ0YsZUFxQ0U7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixrQkFBUSxFQUFFUixNQUFNLENBQUNTLFlBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXJDRixlQXNDRSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxVQUFYO0FBQUEsaUNBQXNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURLO0FBQUE7QUFaVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwREQsQ0F0RUQ7O0tBQU12QixVOztBQXNHTiwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92aXNpdGEvW3NsdWddLmM0ZGM4ZmMwOWZlYzMzZTQzZTFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgeyBGb3JtaWssIEZpZWxkLCBGb3JtLCBFcnJvck1lc3NhZ2UgfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCc7XG5cbmNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBhc3luYyAodmFsdWVzLCByZWdpc3RybykgPT4ge1xuICAvKiB2YWx1ZXMuYmFycmlvID0gW3ZhbHVlcy5iYXJyaW9dO1xuICB0cnkge1xuICAgIGNvbnN0IHZpc2l0YXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS92aXNpdGFzLyR7cmVnaXN0cm99YCwge1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGRhdGE6IHZhbHVlcyB9KSxcbiAgICB9KTtcbiAgICBpZiAodmlzaXRhcy5vaykge1xuICAgICAgY29uc29sZS5sb2coJ8KhU29saWNpdHVkIFBVVCBlbnZpYWRhIGNvbiDDqXhpdG8hJyk7XG4gICAgICAvLyBSZWFsaXphIGFsZ3VuYSBhY2Npw7NuIGFkaWNpb25hbCBkZXNwdcOpcyBkZSBlbnZpYXIgbGEgc29saWNpdHVkIFBVVFxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgYWwgZW52aWFyIGxhIHNvbGljaXR1ZCBQVVQnKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9ICovXG4gIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHZhbHVlcywgbnVsbCwgMikpO1xufTtcblxuY29uc3QgU2lnbnVwRm9ybSA9ICh7IHJlZ2lzdHJvLCB2aXNpdGFzLCBiYXJyaW9zIH0pID0+IHtcbiAgXG4gIC8qIGNvbnN0IGJhcnJpb251ZXZvID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2aXNpdGFzKSk7O1xuICAvLyB2aXNpdGFzLmF0dHJpYnV0ZXMuaWQgPSB2aXNpdGFzLmlkXG4gIC8vIGRlbGV0ZSB2aXNpdGFzLmF0dHJpYnV0ZXMuYmFycmlvXG4gIGRlbGV0ZSBiYXJyaW9udWV2by5hdHRyaWJ1dGVzLmJhcnJpb1xuICBiYXJyaW9udWV2by5hdHRyaWJ1dGVzLmJhcnJpbyA9IDUwMFxuXG4gIC8vIHZpc2l0YXMuYXR0cmlidXRlcy5iYXJyaW8gPSB2aXNpdGFzLmF0dHJpYnV0ZXMuYmFycmlvLmRhdGEuYXR0cmlidXRlcy5pZDtcbiBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShiYXJyaW9udWV2bywgbnVsbCwgMikpOyAgKi9cbiBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh2aXNpdGFzLmF0dHJpYnV0ZXMuYmFycmlvLmRhdGEuYXR0cmlidXRlcy5pZCwgbnVsbCwgMikpO1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1pa1xuICAgICAgaW5pdGlhbFZhbHVlcz17dmlzaXRhcy5hdHRyaWJ1dGVzfVxuICAgICAgdmFsaWRhdGlvblNjaGVtYT17WXVwLm9iamVjdCh7XG4gICAgICAgIHZjcnJhZHNvbDogWXVwLnN0cmluZygpXG4gICAgICAgICAgLm1heCgxNSwgJ0RlYmUgdGVuZXIgMTUgY2FyYWN0ZXJlcyBvIG1lbm9zJylcbiAgICAgICAgICAucmVxdWlyZWQoJ1JlcXVlcmlkbycpLFxuICAgICAgICB2Y3Jub21hdGk6IFl1cC5zdHJpbmcoKVxuICAgICAgICAgIC5tYXgoMjAsICdEZWJlIHRlbmVyIDIwIGNhcmFjdGVyZXMgbyBtZW5vcycpXG4gICAgICAgICAgLnJlcXVpcmVkKCdSZXF1ZXJpZG8nKSxcbiAgICAgIH0pfVxuICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMpID0+IGhhbmRsZUZvcm1TdWJtaXQodmFsdWVzLCByZWdpc3Rybyl9XG4gICAgPlxuICAgICAge2Zvcm1payA9PiAoXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodGJsdWUnLCBwYWRkaW5nOiAnMjBweCcgfX0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpZFwiPklkOiA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJpZFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB7Li4uZm9ybWlrLmdldEZpZWxkUHJvcHMoJ2lkJyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQuaWQgJiYgZm9ybWlrLmVycm9ycy5pZCA/IChcbiAgICAgICAgICAgIDxkaXY+e2Zvcm1pay5lcnJvcnMuaWR9PC9kaXY+XG4gICAgICAgICAgKSA6IG51bGx9PGJyIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ2Y3JyYWRzb2xcIj5SYWRpY2FkbzogPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPVwidmNycmFkc29sXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHsuLi5mb3JtaWsuZ2V0RmllbGRQcm9wcygndmNycmFkc29sJyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQudmNycmFkc29sICYmIGZvcm1pay5lcnJvcnMudmNycmFkc29sID8gKFxuICAgICAgICAgICAgPGRpdj57Zm9ybWlrLmVycm9ycy52Y3JyYWRzb2x9PC9kaXY+XG4gICAgICAgICAgKSA6IG51bGx9PGJyIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ2Y3Jub21hdGlcIj5Ob21icmU6IDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD1cInZjcm5vbWF0aVwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB7Li4uZm9ybWlrLmdldEZpZWxkUHJvcHMoJ3Zjcm5vbWF0aScpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2Zvcm1pay50b3VjaGVkLnZjcm5vbWF0aSAmJiBmb3JtaWsuZXJyb3JzLnZjcm5vbWF0aSA/IChcbiAgICAgICAgICAgIDxkaXY+e2Zvcm1pay5lcnJvcnMudmNybm9tYXRpfTwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfTxiciAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYmFycmlvXCI+QmFycmlvOiA8L2xhYmVsPlxuICAgICAgICAgIDxGaWVsZCBuYW1lPVwiYmFycmlvXCIgYXM9XCJzZWxlY3RcIiBjbGFzc05hbWU9XCJteS1zZWxlY3RcIj4gICAgICAgICAgXG4gICAgICAgICAgICB7YmFycmlvcy5tYXAoKGJhcnJpbykgPT4gKFxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtiYXJyaW8uaWR9PlxuICAgICAgICAgICAgICAgIHtiYXJyaW8uYXR0cmlidXRlcy5WY3JCYXJWZXJ9XG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17Zm9ybWlrLmlzU3VibWl0dGluZ30+RW52aWFyPC9idXR0b24+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi92aXNpdGFzXCI+PGE+ICBDYW5jZWxhciAgPC9hPjwvTGluaz5cblxuICAgICAgICA8L2Zvcm0+XG4gICAgICApfVxuICAgIDwvRm9ybWlrPlxuICApO1xufTtcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IGNhdGVnb3JpZXNSZXMgPSBhd2FpdCBmZXRjaEFQSShcIi92aXNpdGFzXCIsIHsgZmllbGRzOiBbXCJpZFwiXSB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IGNhdGVnb3JpZXNSZXMuZGF0YS5tYXAoKHZpc2l0YSkgPT4gKHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBzbHVnOiB2aXNpdGEuaWQudG9TdHJpbmcoMTApLFxuICAgICAgfSxcbiAgICB9KSksXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IFt2aXNpdGFzLCBiYXJyaW9zIF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZmV0Y2hBUEkoXCIvdmlzaXRhc1wiLCB7IHBvcHVsYXRlOiBcIipcIiwgZmlsdGVyczogeyBpZDogcGFyYW1zLnNsdWd9fSksXG4gICAgZmV0Y2hBUEkoXCIvYmFycmlvc1wiLCB7IHBvcHVsYXRlOiBcIipcIiwgcGFnaW5hdGlvbjogeyBzdGFydDogMCwgbGltaXQ6IDUwMCB9LCBzb3J0OiBbJ2lkJ119KVxuICBdKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICB2aXNpdGFzOiB2aXNpdGFzLmRhdGFbMF0sXG4gICAgICBiYXJyaW9zOiBiYXJyaW9zLmRhdGEsXG4gICAgICByZWdpc3RybzogcGFyYW1zLnNsdWcsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaWdudXBGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=