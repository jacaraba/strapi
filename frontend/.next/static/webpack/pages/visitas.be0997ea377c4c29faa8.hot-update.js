self["webpackHotUpdate_N_E"]("pages/visitas",{

/***/ "./pages/visitas/index.js":
/*!********************************!*\
  !*** ./pages/visitas/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_jacar_Desktop_strapi_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_jacar_Desktop_strapi_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_jacar_Desktop_strapi_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_jacar_Desktop_strapi_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_jacar_Desktop_strapi_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\jacar\\Desktop\\strapi\\frontend\\pages\\visitas\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_jacar_Desktop_strapi_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var Formulario = function Formulario(_ref) {
  _s();

  var visitas = _ref.visitas,
      barrios = _ref.barrios;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
    id: visitas[0].id,
    vcrradsol: visitas[0].attributes.vcrradsol,
    vcrnomati: visitas[0].attributes.vcrnomati,
    vcrdir: visitas[0].attributes.vcrdir,
    vcrbarrio: visitas[0].attributes.barrio.data.attributes.VcrIdBarVE
  }),
      formData = _useState[0],
      setFormData = _useState[1];

  var handleChange = function handleChange(e) {
    setFormData(function (prevData) {
      return _objectSpread(_objectSpread({}, prevData), {}, (0,C_Users_jacar_Desktop_strapi_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)({}, e.target.name, e.target.value));
    });
  };

  var handleChangeRegistro = function handleChangeRegistro(e) {
    var selectedData = visitas.find(function (item) {
      return item.id == e.target.value;
    });
    setFormData(selectedData.attributes);
    setFormData(function (prevData) {
      return _objectSpread(_objectSpread({}, prevData), {}, {
        id: selectedData.id
      });
    });
    setFormData(function (prevData) {
      return _objectSpread(_objectSpread({}, prevData), {}, {
        vcrbarrio: selectedData.attributes.barrio.data.id
      });
    });
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_jacar_Desktop_strapi_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_jacar_Desktop_strapi_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
      var _visitas;

      return C_Users_jacar_Desktop_strapi_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.prev = 1;
              _context.next = 4;
              return fetch("http://localhost:1337/api/visitas/".concat(formData.id), {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  visitas: formData
                })
              });

            case 4:
              _visitas = _context.sent;

              if (_visitas.ok) {
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

    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
        onChange: handleChangeRegistro,
        children: visitas.map(function (item) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: item.id,
            children: [item.id, "-", item.attributes.vcrnomati]
          }, item.id, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          children: ["ID:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            name: "id",
            value: formData.id,
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          children: ["VCRRADSOL:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            name: "vcrradsol",
            value: formData.vcrradsol,
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          children: ["VCRNOMATI:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            name: "vcrnomati",
            value: formData.vcrnomati,
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          children: ["VCRDIR:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            name: "vcrdir",
            value: formData.vcrdir,
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          children: ["VCRBAR:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
            id: "vcrbarrio",
            name: "vcrbarrio",
            children: barrios.map(function (opcion) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                name: "vcrbarrio",
                value: formData.vcrbarrio,
                children: opcion.id
              }, opcion.id, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          children: "Guardar cambios"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Formulario, "Rs6qQubKJa3iD89PDp1rFyA88kU=");

_c = Formulario;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Formulario);

var _c;

$RefreshReg$(_c, "Formulario");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlzaXRhcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJGb3JtdWxhcmlvIiwidmlzaXRhcyIsImJhcnJpb3MiLCJ1c2VTdGF0ZSIsImlkIiwidmNycmFkc29sIiwiYXR0cmlidXRlcyIsInZjcm5vbWF0aSIsInZjcmRpciIsInZjcmJhcnJpbyIsImJhcnJpbyIsImRhdGEiLCJWY3JJZEJhclZFIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImhhbmRsZUNoYW5nZSIsImUiLCJwcmV2RGF0YSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZVJlZ2lzdHJvIiwic2VsZWN0ZWREYXRhIiwiZmluZCIsIml0ZW0iLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJjb25zb2xlIiwibG9nIiwibWFwIiwib3BjaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUEwQjtBQUFBOztBQUFBLE1BQXZCQyxPQUF1QixRQUF2QkEsT0FBdUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7O0FBQUEsa0JBQ1hDLCtDQUFRLENBQUM7QUFDdkNDLE1BQUUsRUFBRUgsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXRyxFQUR3QjtBQUV2Q0MsYUFBUyxFQUFFSixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdLLFVBQVgsQ0FBc0JELFNBRk07QUFHdkNFLGFBQVMsRUFBRU4sT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXSyxVQUFYLENBQXNCQyxTQUhNO0FBSXZDQyxVQUFNLEVBQUVQLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0ssVUFBWCxDQUFzQkUsTUFKUztBQUt2Q0MsYUFBUyxFQUFFUixPQUFP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QyxFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURXO0FBQUEsYUFBWjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRDRixlQWlERTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkY7QUFBQSxrQkFERjtBQWtFRCxDQXJIRDs7R0FBTUosVTs7S0FBQUEsVTs7QUF3SU4sK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmlzaXRhcy5iZTA5OTdlYTM3N2M0YzI5ZmFhOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XG5cbmNvbnN0IEZvcm11bGFyaW8gPSAoeyB2aXNpdGFzLCBiYXJyaW9zIH0pID0+IHtcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgaWQ6IHZpc2l0YXNbMF0uaWQsXG4gICAgdmNycmFkc29sOiB2aXNpdGFzWzBdLmF0dHJpYnV0ZXMudmNycmFkc29sLFxuICAgIHZjcm5vbWF0aTogdmlzaXRhc1swXS5hdHRyaWJ1dGVzLnZjcm5vbWF0aSxcbiAgICB2Y3JkaXI6IHZpc2l0YXNbMF0uYXR0cmlidXRlcy52Y3JkaXIsXG4gICAgdmNyYmFycmlvOiB2aXNpdGFzWzBdLmF0dHJpYnV0ZXMuYmFycmlvLmRhdGEuYXR0cmlidXRlcy5WY3JJZEJhclZFLFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldEZvcm1EYXRhKChwcmV2RGF0YSkgPT4gKHtcbiAgICAgIC4uLnByZXZEYXRhLFxuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSxcbiAgICB9KSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlUmVnaXN0cm8gPSAoZSkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkRGF0YSA9IHZpc2l0YXMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT0gZS50YXJnZXQudmFsdWUpO1xuICAgIFxuICAgIHNldEZvcm1EYXRhKHNlbGVjdGVkRGF0YS5hdHRyaWJ1dGVzKTtcbiAgICBzZXRGb3JtRGF0YShwcmV2RGF0YSA9PiAoe1xuICAgICAgLi4ucHJldkRhdGEsXG4gICAgICBpZDogc2VsZWN0ZWREYXRhLmlkXG4gICAgfSkpO1xuICAgIHNldEZvcm1EYXRhKHByZXZEYXRhID0+ICh7XG4gICAgICAuLi5wcmV2RGF0YSxcbiAgICAgIHZjcmJhcnJpbzogc2VsZWN0ZWREYXRhLmF0dHJpYnV0ZXMuYmFycmlvLmRhdGEuaWRcbiAgICB9KSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHZpc2l0YXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS92aXNpdGFzLyR7Zm9ybURhdGEuaWR9YCwge1xuICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB2aXNpdGFzOiBmb3JtRGF0YSB9KSxcbiAgICAgIH0pO1xuICAgICAgaWYgKHZpc2l0YXMub2spIHtcbiAgICAgICAgY29uc29sZS5sb2coJ8KhU29saWNpdHVkIFBVVCBlbnZpYWRhIGNvbiDDqXhpdG8hJyk7XG4gICAgICAgIC8vIFJlYWxpemEgYWxndW5hIGFjY2nDs24gYWRpY2lvbmFsIGRlc3B1w6lzIGRlIGVudmlhciBsYSBzb2xpY2l0dWQgUFVUXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgYWwgZW52aWFyIGxhIHNvbGljaXR1ZCBQVVQnKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PlxuICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VSZWdpc3Ryb30+XG4gICAgICAgICAge3Zpc2l0YXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17aXRlbS5pZH0gdmFsdWU9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICB7aXRlbS5pZH0te2l0ZW0uYXR0cmlidXRlcy52Y3Jub21hdGl9XG4gICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIElEOlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cImlkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmlkfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgVkNSUkFEU09MOlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cInZjcnJhZHNvbFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS52Y3JyYWRzb2x9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgVkNSTk9NQVRJOlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cInZjcm5vbWF0aVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS52Y3Jub21hdGl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgVkNSRElSOlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cInZjcmRpclwiXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS52Y3JkaXJ9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgVkNSQkFSOlxuICAgICAgICAgICAgPHNlbGVjdCBpZD1cInZjcmJhcnJpb1wiIG5hbWU9XCJ2Y3JiYXJyaW9cIiA+XG4gICAgICAgICAgICAgIHtiYXJyaW9zLm1hcCgob3BjaW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e29wY2lvbi5pZH0gbmFtZT1cInZjcmJhcnJpb1widmFsdWU9e2Zvcm1EYXRhLnZjcmJhcnJpb30+XG4gICAgICAgICAgICAgICAgICB7b3BjaW9uLmlkfVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5HdWFyZGFyIGNhbWJpb3M8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgW3Zpc2l0YXMsIGJhcnJpb3MgXSA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgIFtmZXRjaEFQSShcIi92aXNpdGFzXCIsIHsgcG9wdWxhdGU6IFwiKlwiIH0pLFxuICAgIGZldGNoQVBJKFwiL2JhcnJpb3NcIiwgeyBwb3B1bGF0ZTogXCIqXCIgfSldXG4gICAgKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHZpc2l0YXM6IHZpc2l0YXMuZGF0YSxcbiAgICAgIGJhcnJpb3M6IGJhcnJpb3MuZGF0YSxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH07XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBGb3JtdWxhcmlvOyJdLCJzb3VyY2VSb290IjoiIn0=