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
        vcrbarrio: selectedData.attributes.barrio.data.attributes.VcrIdBarVE
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
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
    }, _this)
  }, void 0, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlzaXRhcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJGb3JtdWxhcmlvIiwidmlzaXRhcyIsImJhcnJpb3MiLCJ1c2VTdGF0ZSIsImlkIiwidmNycmFkc29sIiwiYXR0cmlidXRlcyIsInZjcm5vbWF0aSIsInZjcmRpciIsInZjcmJhcnJpbyIsImJhcnJpbyIsImRhdGEiLCJWY3JJZEJhclZFIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImhhbmRsZUNoYW5nZSIsImUiLCJwcmV2RGF0YSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZVJlZ2lzdHJvIiwic2VsZWN0ZWREYXRhIiwiZmluZCIsIml0ZW0iLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJjb25zb2xlIiwibG9nIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUEwQjtBQUFBOztBQUFBLE1BQXZCQyxPQUF1QixRQUF2QkEsT0FBdUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7O0FBQUEsa0JBQ1hDLCtDQUFRLENBQUM7QUFDdkNDLE1BQUUsRUFBRUgsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXRyxFQUR3QjtBQUV2Q0MsYUFBUyxFQUFFSixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdLLFVBQVgsQ0FBc0JELFNBRk07QUFHdkNFLGFBQVMsRUFBRU4sT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXSyxVQUFYLENBQXNCQyxTQUhNO0FBSXZDQyxVQUFNLEVBQUVQLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0ssVUFBWCxDQUFzQkUsTUFKUztBQUt2Q0MsYUFBUyxFQUFFUixPQUFPLENBQUMsQ0FB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aXNpdGFzLjcwZDUyNzhhYThkNDc1MjhlMjNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIjtcblxuY29uc3QgRm9ybXVsYXJpbyA9ICh7IHZpc2l0YXMsIGJhcnJpb3MgfSkgPT4ge1xuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBpZDogdmlzaXRhc1swXS5pZCxcbiAgICB2Y3JyYWRzb2w6IHZpc2l0YXNbMF0uYXR0cmlidXRlcy52Y3JyYWRzb2wsXG4gICAgdmNybm9tYXRpOiB2aXNpdGFzWzBdLmF0dHJpYnV0ZXMudmNybm9tYXRpLFxuICAgIHZjcmRpcjogdmlzaXRhc1swXS5hdHRyaWJ1dGVzLnZjcmRpcixcbiAgICB2Y3JiYXJyaW86IHZpc2l0YXNbMF0uYXR0cmlidXRlcy5iYXJyaW8uZGF0YS5hdHRyaWJ1dGVzLlZjcklkQmFyVkUsXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0Rm9ybURhdGEoKHByZXZEYXRhKSA9PiAoe1xuICAgICAgLi4ucHJldkRhdGEsXG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLFxuICAgIH0pKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2VSZWdpc3RybyA9IChlKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWREYXRhID0gdmlzaXRhcy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PSBlLnRhcmdldC52YWx1ZSk7XG4gICAgXG4gICAgc2V0Rm9ybURhdGEoc2VsZWN0ZWREYXRhLmF0dHJpYnV0ZXMpO1xuICAgIHNldEZvcm1EYXRhKHByZXZEYXRhID0+ICh7XG4gICAgICAuLi5wcmV2RGF0YSxcbiAgICAgIGlkOiBzZWxlY3RlZERhdGEuaWRcbiAgICB9KSk7XG4gICAgc2V0Rm9ybURhdGEocHJldkRhdGEgPT4gKHtcbiAgICAgIC4uLnByZXZEYXRhLFxuICAgICAgdmNyYmFycmlvOiBzZWxlY3RlZERhdGEuYXR0cmlidXRlcy5iYXJyaW8uZGF0YS5hdHRyaWJ1dGVzLlZjcklkQmFyVkVcbiAgICB9KSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHZpc2l0YXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS92aXNpdGFzLyR7Zm9ybURhdGEuaWR9YCwge1xuICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB2aXNpdGFzOiBmb3JtRGF0YSB9KSxcbiAgICAgIH0pO1xuICAgICAgaWYgKHZpc2l0YXMub2spIHtcbiAgICAgICAgY29uc29sZS5sb2coJ8KhU29saWNpdHVkIFBVVCBlbnZpYWRhIGNvbiDDqXhpdG8hJyk7XG4gICAgICAgIC8vIFJlYWxpemEgYWxndW5hIGFjY2nDs24gYWRpY2lvbmFsIGRlc3B1w6lzIGRlIGVudmlhciBsYSBzb2xpY2l0dWQgUFVUXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgYWwgZW52aWFyIGxhIHNvbGljaXR1ZCBQVVQnKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PlxuICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VSZWdpc3Ryb30+XG4gICAgICAgICAge3Zpc2l0YXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17aXRlbS5pZH0gdmFsdWU9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICB7aXRlbS5pZH0te2l0ZW0uYXR0cmlidXRlcy52Y3Jub21hdGl9XG4gICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgIDwvPlxuICApXG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IFthbGx2aXNpdGFzLCBhbGxiYXJyaW9zIF0gPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICBbZmV0Y2hBUEkoXCIvdmlzaXRhc1wiLCB7IHBvcHVsYXRlOiBcIipcIiB9KV0sXG4gICAgW2ZldGNoQVBJKFwiL2JhcnJpb3NcIiwgeyBwb3B1bGF0ZTogXCIqXCIgfSldXG4gICAgKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHZpc2l0YXM6IGFsbHZpc2l0YXMuZGF0YSxcbiAgICAgIGJhcnJpb3M6IGFsbGJhcnJpb3MuZGF0YSxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm11bGFyaW87Il0sInNvdXJjZVJvb3QiOiIifQ==