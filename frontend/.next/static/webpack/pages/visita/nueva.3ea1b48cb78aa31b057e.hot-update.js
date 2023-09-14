self["webpackHotUpdate_N_E"]("pages/visita/nueva",{

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStrapiURL": function() { return /* binding */ getStrapiURL; },
/* harmony export */   "fetchAPI": function() { return /* binding */ fetchAPI; }
/* harmony export */ });
/* harmony import */ var C_Users_jacar_Desktop_strapi_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_jacar_Desktop_strapi_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_jacar_Desktop_strapi_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_jacar_Desktop_strapi_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_jacar_Desktop_strapi_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_jacar_Desktop_strapi_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */

function getStrapiURL() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return "".concat(process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337").concat(path);
}
/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */

function fetchAPI(_x) {
  return _fetchAPI.apply(this, arguments);
}

function _fetchAPI() {
  _fetchAPI = (0,C_Users_jacar_Desktop_strapi_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_jacar_Desktop_strapi_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(path) {
    var urlParamsObject,
        options,
        mergedOptions,
        queryString,
        requestUrl,
        response,
        data,
        _args = arguments;
    return C_Users_jacar_Desktop_strapi_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            urlParamsObject = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
            // Merge default and user options
            mergedOptions = _objectSpread({
              headers: {
                "Content-Type": "application/json"
              }
            }, options); // Build request URL

            queryString = qs__WEBPACK_IMPORTED_MODULE_3___default().stringify(urlParamsObject);
            requestUrl = "".concat(getStrapiURL("/api".concat(path).concat(queryString ? "?".concat(queryString) : ""))); // Trigger API call

            _context.next = 7;
            return fetch(requestUrl, mergedOptions);

          case 7:
            response = _context.sent;

            if (response.ok) {
              _context.next = 11;
              break;
            }

            console.error(response.statusText);
            throw new Error("An error occured please try again");

          case 11:
            _context.next = 13;
            return response.json();

          case 13:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchAPI.apply(this, arguments);
}

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


/***/ }),

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


/***/ }),

/***/ "./node_modules/call-bind/callBound.js":
/*!*********************************************!*\
  !*** ./node_modules/call-bind/callBound.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");

var callBind = __webpack_require__(/*! ./ */ "./node_modules/call-bind/index.js");

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


/***/ }),

/***/ "./node_modules/call-bind/index.js":
/*!*****************************************!*\
  !*** ./node_modules/call-bind/index.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind(originalFunction) {
	var func = $reflectApply(bind, $call, arguments);
	if ($gOPD && $defineProperty) {
		var desc = $gOPD(func, 'length');
		if (desc.configurable) {
			// original length, plus the receiver, minus any additional arguments (after the receiver)
			$defineProperty(
				func,
				'length',
				{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
			);
		}
	}
	return func;
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}


/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/***/ (function(module) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/get-intrinsic/index.js":
/*!*********************************************!*\
  !*** ./node_modules/get-intrinsic/index.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var undefined;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(/*! has-symbols */ "./node_modules/has-symbols/index.js")();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var hasOwn = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};


/***/ }),

/***/ "./node_modules/has-symbols/index.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/index.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var origSymbol = __webpack_require__.g.Symbol;
var hasSymbolSham = __webpack_require__(/*! ./shams */ "./node_modules/has-symbols/shams.js");

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};


/***/ }),

/***/ "./node_modules/has-symbols/shams.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/shams.js ***!
  \*******************************************/
/***/ (function(module) {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/object-inspect/index.js":
/*!**********************************************!*\
  !*** ./node_modules/object-inspect/index.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var match = String.prototype.match;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
var isEnumerable = Object.prototype.propertyIsEnumerable;

var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || (
    [].__proto__ === Array.prototype // eslint-disable-line no-proto
        ? function (O) {
            return O.__proto__; // eslint-disable-line no-proto
        }
        : null
);

var inspectCustom = __webpack_require__(/*! ./util.inspect */ "?4f7e").custom;
var inspectSymbol = inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;
var toStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag !== 'undefined' ? Symbol.toStringTag : null;

module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};

    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (
        has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
            : opts.maxStringLength !== null
        )
    ) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean') {
        throw new TypeError('option "customInspect", if provided, must be `true` or `false`');
    }

    if (
        has(opts, 'indent')
        && opts.indent !== null
        && opts.indent !== '\t'
        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
    ) {
        throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');
    }

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        return String(obj);
    }
    if (typeof obj === 'bigint') {
        return String(obj) + 'n';
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') { depth = 0; }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray(obj) ? '[Array]' : '[Object]';
    }

    var indent = getIndent(opts, depth);

    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect(value, from, noIndent) {
        if (from) {
            seen = seen.slice();
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function') {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + keys.join(', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? String(obj).replace(/^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + String(obj.nodeName).toLowerCase();
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
        s += '</' + String(obj.nodeName).toLowerCase() + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) { return '[]'; }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + xs.join(', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (parts.length === 0) { return '[' + String(obj) + ']'; }
        return '{ [' + String(obj) + '] ' + parts.join(', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function') {
            return obj[inspectSymbol]();
        } else if (typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        mapForEach.call(obj, function (value, key) {
            mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
        });
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        setForEach.call(obj, function (value) {
            setParts.push(inspect(value, obj));
        });
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isWeakRef(obj)) {
        return weakCollectionOf('WeakRef');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? '' : 'null prototype';
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? toStr(obj).slice(8, -1) : protoTag ? 'Object' : '';
        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
        var tag = constructorTag + (stringTag || protoTag ? '[' + [].concat(stringTag || [], protoTag || []).join(': ') + '] ' : '');
        if (ys.length === 0) { return tag + '{}'; }
        if (indent) {
            return tag + '{' + indentedJoin(ys, indent) + '}';
        }
        return tag + '{ ' + ys.join(', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}

function quote(s) {
    return String(s).replace(/"/g, '&quot;');
}

function isArray(obj) { return toStr(obj) === '[object Array]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isDate(obj) { return toStr(obj) === '[object Date]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isRegExp(obj) { return toStr(obj) === '[object RegExp]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isError(obj) { return toStr(obj) === '[object Error]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isString(obj) { return toStr(obj) === '[object String]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isNumber(obj) { return toStr(obj) === '[object Number]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isBoolean(obj) { return toStr(obj) === '[object Boolean]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }

// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) {
        return obj && typeof obj === 'object' && obj instanceof Symbol;
    }
    if (typeof obj === 'symbol') {
        return true;
    }
    if (!obj || typeof obj !== 'object' || !symToString) {
        return false;
    }
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}

function isBigInt(obj) {
    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
        return false;
    }
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) { return f.name; }
    var m = match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) { return m[1]; }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) { return xs.indexOf(x); }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) { return i; }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement(x) {
    if (!x || typeof x !== 'object') { return false; }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}

function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString(str.slice(0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = str.replace(/(['\\])/g, '\\$1').replace(/[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) { return '\\' + x; }
    return '\\x' + (n < 0x10 ? '0' : '') + n.toString(16).toUpperCase();
}

function markBoxed(str) {
    return 'Object(' + str + ')';
}

function weakCollectionOf(type) {
    return type + ' { ? }';
}

function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : entries.join(', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}

function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}

function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = Array(opts.indent + 1).join(' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: Array(depth + 1).join(baseIndent)
    };
}

function indentedJoin(xs, indent) {
    if (xs.length === 0) { return ''; }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + xs.join(',' + lineJoiner) + '\n' + indent.prev;
}

function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
            symMap['$' + syms[k]] = syms[k];
        }
    }

    for (var key in obj) { // eslint-disable-line no-restricted-syntax
        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
            // this is to prevent shammed Symbols, which are stored as strings, from being included in the string key section
            continue; // eslint-disable-line no-restricted-syntax, no-continue
        } else if ((/[^\w$]/).test(key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    if (typeof gOPS === 'function') {
        for (var j = 0; j < syms.length; j++) {
            if (isEnumerable.call(obj, syms[j])) {
                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
            }
        }
    }
    return xs;
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ (function(module) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/qs/lib/formats.js":
/*!****************************************!*\
  !*** ./node_modules/qs/lib/formats.js ***!
  \****************************************/
/***/ (function(module) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};


/***/ }),

/***/ "./node_modules/qs/lib/index.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/index.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ "./node_modules/qs/lib/stringify.js");
var parse = __webpack_require__(/*! ./parse */ "./node_modules/qs/lib/parse.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ "./node_modules/qs/lib/parse.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/parse.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = { __proto__: null };

    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else if (cleanRoot !== '__proto__') {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    if (options.allowSparse === true) {
        return obj;
    }

    return utils.compact(obj);
};


/***/ }),

/***/ "./node_modules/qs/lib/stringify.js":
/*!******************************************!*\
  !*** ./node_modules/qs/lib/stringify.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var getSideChannel = __webpack_require__(/*! side-channel */ "./node_modules/side-channel/index.js");
var utils = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var sentinel = {};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    commaRoundTrip,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    format,
    formatter,
    encodeValuesOnly,
    charset,
    sideChannel
) {
    var obj = object;

    var tmpSc = sideChannel;
    var step = 0;
    var findFlag = false;
    while ((tmpSc = tmpSc.get(sentinel)) !== void undefined && !findFlag) {
        // Where object last appeared in the ref tree
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== 'undefined') {
            if (pos === step) {
                throw new RangeError('Cyclic object value');
            } else {
                findFlag = true; // Break while
            }
        }
        if (typeof tmpSc.get(sentinel) === 'undefined') {
            step = 0;
        }
    }

    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = utils.maybeMap(obj, function (value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray(obj)) {
        // we need to join elements in
        if (encodeValuesOnly && encoder) {
            obj = utils.maybeMap(obj, encoder);
        }
        objKeys = [{ value: obj.length > 0 ? obj.join(',') || null : void undefined }];
    } else if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? prefix + '[]' : prefix;

    for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === 'object' && typeof key.value !== 'undefined' ? key.value : obj[key];

        if (skipNulls && value === null) {
            continue;
        }

        var keyPrefix = isArray(obj)
            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(adjustedPrefix, key) : adjustedPrefix
            : adjustedPrefix + (allowDots ? '.' + key : '[' + key + ']');

        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify(
            value,
            keyPrefix,
            generateArrayPrefix,
            commaRoundTrip,
            strictNullHandling,
            skipNulls,
            generateArrayPrefix === 'comma' && encodeValuesOnly && isArray(obj) ? null : encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            format,
            formatter,
            encodeValuesOnly,
            charset,
            valueSideChannel
        ));
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
    if (opts && 'commaRoundTrip' in opts && typeof opts.commaRoundTrip !== 'boolean') {
        throw new TypeError('`commaRoundTrip` must be a boolean, or absent');
    }
    var commaRoundTrip = generateArrayPrefix === 'comma' && opts && opts.commaRoundTrip;

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    var sideChannel = getSideChannel();
    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            commaRoundTrip,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.format,
            options.formatter,
            options.encodeValuesOnly,
            options.charset,
            sideChannel
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ "./node_modules/qs/lib/utils.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/utils.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
            || (format === formats.RFC1738 && (c === 0x28 || c === 0x29)) // ( )
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        /* eslint operator-linebreak: [2, "before"] */
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};


/***/ }),

/***/ "./node_modules/side-channel/index.js":
/*!********************************************!*\
  !*** ./node_modules/side-channel/index.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");
var callBound = __webpack_require__(/*! call-bind/callBound */ "./node_modules/call-bind/callBound.js");
var inspect = __webpack_require__(/*! object-inspect */ "./node_modules/object-inspect/index.js");

var $TypeError = GetIntrinsic('%TypeError%');
var $WeakMap = GetIntrinsic('%WeakMap%', true);
var $Map = GetIntrinsic('%Map%', true);

var $weakMapGet = callBound('WeakMap.prototype.get', true);
var $weakMapSet = callBound('WeakMap.prototype.set', true);
var $weakMapHas = callBound('WeakMap.prototype.has', true);
var $mapGet = callBound('Map.prototype.get', true);
var $mapSet = callBound('Map.prototype.set', true);
var $mapHas = callBound('Map.prototype.has', true);

/*
 * This function traverses the list returning the node corresponding to the
 * given key.
 *
 * That node is also moved to the head of the list, so that if it's accessed
 * again we don't need to traverse the whole list. By doing so, all the recently
 * used nodes can be accessed relatively quickly.
 */
var listGetNode = function (list, key) { // eslint-disable-line consistent-return
	for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
		if (curr.key === key) {
			prev.next = curr.next;
			curr.next = list.next;
			list.next = curr; // eslint-disable-line no-param-reassign
			return curr;
		}
	}
};

var listGet = function (objects, key) {
	var node = listGetNode(objects, key);
	return node && node.value;
};
var listSet = function (objects, key, value) {
	var node = listGetNode(objects, key);
	if (node) {
		node.value = value;
	} else {
		// Prepend the new node to the beginning of the list
		objects.next = { // eslint-disable-line no-param-reassign
			key: key,
			next: objects.next,
			value: value
		};
	}
};
var listHas = function (objects, key) {
	return !!listGetNode(objects, key);
};

module.exports = function getSideChannel() {
	var $wm;
	var $m;
	var $o;
	var channel = {
		assert: function (key) {
			if (!channel.has(key)) {
				throw new $TypeError('Side channel does not contain ' + inspect(key));
			}
		},
		get: function (key) { // eslint-disable-line consistent-return
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapGet($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapGet($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listGet($o, key);
				}
			}
		},
		has: function (key) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapHas($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapHas($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listHas($o, key);
				}
			}
			return false;
		},
		set: function (key, value) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if (!$wm) {
					$wm = new $WeakMap();
				}
				$weakMapSet($wm, key, value);
			} else if ($Map) {
				if (!$m) {
					$m = new $Map();
				}
				$mapSet($m, key, value);
			} else {
				if (!$o) {
					/*
					 * Initialize the linked list as an empty node, so that we don't have
					 * to special-case handling of the first node: we can always refer to
					 * it as (previous node).next, instead of something like (list).head
					 */
					$o = { key: {}, next: null };
				}
				listSet($o, key, value);
			}
		}
	};
	return channel;
};


/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (function() {

/* (ignored) */

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2FwaS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlzaXRhL251ZXZhL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvY2FsbC1iaW5kL2NhbGxCb3VuZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2NhbGwtYmluZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Z1bmN0aW9uLWJpbmQvaW1wbGVtZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9mdW5jdGlvbi1iaW5kL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ2V0LWludHJpbnNpYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hhcy1zeW1ib2xzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaGFzLXN5bWJvbHMvc2hhbXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9oYXMvc3JjL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvb2JqZWN0LWluc3BlY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9xcy9saWIvZm9ybWF0cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3FzL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3FzL2xpYi9wYXJzZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3FzL2xpYi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9xcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zaWRlLWNoYW5uZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS9pZ25vcmVkfEM6XFxVc2Vyc1xcamFjYXJcXERlc2t0b3BcXHN0cmFwaVxcZnJvbnRlbmRcXG5vZGVfbW9kdWxlc1xcb2JqZWN0LWluc3BlY3R8Li91dGlsLmluc3BlY3QiXSwibmFtZXMiOlsiZ2V0U3RyYXBpVVJMIiwicGF0aCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTCIsImZldGNoQVBJIiwidXJsUGFyYW1zT2JqZWN0Iiwib3B0aW9ucyIsIm1lcmdlZE9wdGlvbnMiLCJoZWFkZXJzIiwicXVlcnlTdHJpbmciLCJxcyIsInJlcXVlc3RVcmwiLCJmZXRjaCIsInJlc3BvbnNlIiwib2siLCJjb25zb2xlIiwiZXJyb3IiLCJzdGF0dXNUZXh0IiwiRXJyb3IiLCJqc29uIiwiZGF0YSIsImhhbmRsZUZvcm1TdWJtaXQiLCJ2YWx1ZXMiLCJiYXJyaW8iLCJwYXJzZUludCIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJtZXRob2QiLCJib2R5IiwidmlzaXRhcyIsImFsZXJ0IiwiU2lnbnVwRm9ybSIsImJhcnJpb3MiLCJiYXJyaW9udWV2byIsInBhcnNlIiwiYXR0cmlidXRlcyIsImlkIiwiY2xhdmUiLCJoYXNPd25Qcm9wZXJ0eSIsInNsdWciLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJwdWJsaXNoZWRBdCIsIll1cCIsInZjcnJhZHNvbCIsIm1heCIsInJlcXVpcmVkIiwidmNybm9tYXRpIiwiZm9ybWlrIiwiaGFuZGxlU3VibWl0IiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImdldEZpZWxkUHJvcHMiLCJ0b3VjaGVkIiwiZXJyb3JzIiwibWFwIiwiVmNyQmFyVmVyIiwiaXNTdWJtaXR0aW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU0Es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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4Qyw0QkFBNEIsNkJBQTZCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzNIQSxlIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Zpc2l0YS9udWV2YS4zZWExYjQ4Y2I3OGFhMzFiMDU3ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzIGZyb20gXCJxc1wiXG5cbi8qKlxuICogR2V0IGZ1bGwgU3RyYXBpIFVSTCBmcm9tIHBhdGhcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFBhdGggb2YgdGhlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gRnVsbCBTdHJhcGkgVVJMXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHJhcGlVUkwocGF0aCA9IFwiXCIpIHtcbiAgcmV0dXJuIGAke1xuICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMIHx8IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3XCJcbiAgfSR7cGF0aH1gXG59XG5cbi8qKlxuICogSGVscGVyIHRvIG1ha2UgR0VUIHJlcXVlc3RzIHRvIFN0cmFwaSBBUEkgZW5kcG9pbnRzXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBQYXRoIG9mIHRoZSBBUEkgcm91dGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB1cmxQYXJhbXNPYmplY3QgVVJMIHBhcmFtcyBvYmplY3QsIHdpbGwgYmUgc3RyaW5naWZpZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIE9wdGlvbnMgcGFzc2VkIHRvIGZldGNoXG4gKiBAcmV0dXJucyBQYXJzZWQgQVBJIGNhbGwgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQVBJKHBhdGgsIHVybFBhcmFtc09iamVjdCA9IHt9LCBvcHRpb25zID0ge30pIHtcbiAgLy8gTWVyZ2UgZGVmYXVsdCBhbmQgdXNlciBvcHRpb25zXG4gIGNvbnN0IG1lcmdlZE9wdGlvbnMgPSB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICAuLi5vcHRpb25zLFxuICB9XG5cbiAgLy8gQnVpbGQgcmVxdWVzdCBVUkxcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSBxcy5zdHJpbmdpZnkodXJsUGFyYW1zT2JqZWN0KVxuICBjb25zdCByZXF1ZXN0VXJsID0gYCR7Z2V0U3RyYXBpVVJMKFxuICAgIGAvYXBpJHtwYXRofSR7cXVlcnlTdHJpbmcgPyBgPyR7cXVlcnlTdHJpbmd9YCA6IFwiXCJ9YFxuICApfWBcblxuICAvLyBUcmlnZ2VyIEFQSSBjYWxsXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdFVybCwgbWVyZ2VkT3B0aW9ucylcblxuICAvLyBIYW5kbGUgcmVzcG9uc2VcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dClcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIGVycm9yIG9jY3VyZWQgcGxlYXNlIHRyeSBhZ2FpbmApXG4gIH1cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICByZXR1cm4gZGF0YVxufVxuIiwiaW1wb3J0IHsgZ2V0U3RyYXBpVVJMICwgZmV0Y2hBUEkgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2FwaVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgRm9ybWlrLCBGaWVsZCwgRm9ybSwgRXJyb3JNZXNzYWdlIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnO1xuXG5jb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gYXN5bmMgKHZhbHVlcykgPT4ge1xuXG4gIHZhbHVlcy5iYXJyaW8gPSBbcGFyc2VJbnQodmFsdWVzLmJhcnJpbyldO1xuICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh2YWx1ZXMsIG51bGwsIDIpKVxuXG4gIHRyeSB7XG4gICAgY29uc3QgdmlzaXRhcyA9IGF3YWl0IGZldGNoKGdldFN0cmFwaVVSTChcIi9hcGkvdmlzaXRhc1wiKSwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBkYXRhOiB2YWx1ZXMgfSksXG4gICAgfSk7XG4gICAgaWYgKHZpc2l0YXMub2spIHtcbiAgICAgIGNvbnNvbGUubG9nKCfCoVNvbGljaXR1ZCBQT1NUIGVudmlhZGEgY29uIMOpeGl0byEnKTtcbiAgICAgIC8vIFJlYWxpemEgYWxndW5hIGFjY2nDs24gYWRpY2lvbmFsIGRlc3B1w6lzIGRlIGVudmlhciBsYSBzb2xpY2l0dWQgUFVUXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBhbCBlbnZpYXIgbGEgc29saWNpdHVkIFBPU1QnKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG5cbiAgYWxlcnQoSlNPTi5zdHJpbmdpZnkodmFsdWVzLCBudWxsLCAyKSk7XG5cbn07XG5cbmNvbnN0IFNpZ251cEZvcm0gPSAoeyB2aXNpdGFzLCBiYXJyaW9zIH0pID0+IHtcbiAgXG4gIGNvbnN0IGJhcnJpb251ZXZvID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2aXNpdGFzKSk7XG4gIGRlbGV0ZSBiYXJyaW9udWV2by5hdHRyaWJ1dGVzLmJhcnJpb1xuICBkZWxldGUgYmFycmlvbnVldm8uaWRcblxuICBmb3IgKGNvbnN0IGNsYXZlIGluIGJhcnJpb251ZXZvLmF0dHJpYnV0ZXMpIHtcbiAgICBpZiAoYmFycmlvbnVldm8uYXR0cmlidXRlcy5oYXNPd25Qcm9wZXJ0eShjbGF2ZSkpIHtcbiAgICAgIGJhcnJpb251ZXZvLmF0dHJpYnV0ZXNbY2xhdmVdID0gXCJcIjtcbiAgICB9XG4gIH1cbiAgLy8gYmFycmlvbnVldm8uYXR0cmlidXRlcy5pZCA9IFwiTnVldmEgVmlzaXRhXCJcbiAgYmFycmlvbnVldm8uYXR0cmlidXRlcy5iYXJyaW8gPSA1MDA7XG5cbiAgZGVsZXRlIGJhcnJpb251ZXZvLmF0dHJpYnV0ZXMuc2x1Z1xuICBkZWxldGUgYmFycmlvbnVldm8uYXR0cmlidXRlcy5jcmVhdGVkQXRcbiAgZGVsZXRlIGJhcnJpb251ZXZvLmF0dHJpYnV0ZXMudXBkYXRlZEF0XG4gIGRlbGV0ZSBiYXJyaW9udWV2by5hdHRyaWJ1dGVzLnB1Ymxpc2hlZEF0XG5cbiBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShiYXJyaW9udWV2bywgbnVsbCwgMikpOyAgIFxuIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHZpc2l0YXMuYXR0cmlidXRlcy5iYXJyaW8uZGF0YSwgbnVsbCwgMikpOyAgXG4gLy8gY29uc29sZS5sb2codmlzaXRhcy5hdHRyaWJ1dGVzLmJhcnJpby5kYXRhLmlkKTsgXG5cblxuICByZXR1cm4gKFxuICAgIDxGb3JtaWtcbiAgICAgIGluaXRpYWxWYWx1ZXM9e2JhcnJpb251ZXZvLmF0dHJpYnV0ZXN9XG4gICAgICB2YWxpZGF0aW9uU2NoZW1hPXtZdXAub2JqZWN0KHtcbiAgICAgICAgdmNycmFkc29sOiBZdXAuc3RyaW5nKClcbiAgICAgICAgICAubWF4KDE1LCAnRGViZSB0ZW5lciAxNSBjYXJhY3RlcmVzIG8gbWVub3MnKVxuICAgICAgICAgIC5yZXF1aXJlZCgnUmVxdWVyaWRvJyksXG4gICAgICAgIHZjcm5vbWF0aTogWXVwLnN0cmluZygpXG4gICAgICAgICAgLm1heCg1MCwgJ0RlYmUgdGVuZXIgMjAgY2FyYWN0ZXJlcyBvIG1lbm9zJylcbiAgICAgICAgICAucmVxdWlyZWQoJ1JlcXVlcmlkbycpLFxuICAgICAgfSl9XG4gICAgICBvblN1Ym1pdD17KHZhbHVlcykgPT4gaGFuZGxlRm9ybVN1Ym1pdCh2YWx1ZXMpfVxuICAgID5cbiAgICAgIHtmb3JtaWsgPT4gKFxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnbGlnaHRibHVlJywgcGFkZGluZzogJzIwcHgnIH19PlxuICAgICAgICAgIFxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidmNycmFkc29sXCI+UmFkaWNhZG86IDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD1cInZjcnJhZHNvbFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB7Li4uZm9ybWlrLmdldEZpZWxkUHJvcHMoJ3ZjcnJhZHNvbCcpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2Zvcm1pay50b3VjaGVkLnZjcnJhZHNvbCAmJiBmb3JtaWsuZXJyb3JzLnZjcnJhZHNvbCA/IChcbiAgICAgICAgICAgIDxkaXY+e2Zvcm1pay5lcnJvcnMudmNycmFkc29sfTwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfTxiciAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidmNybm9tYXRpXCI+Tm9tYnJlOiA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJ2Y3Jub21hdGlcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgey4uLmZvcm1pay5nZXRGaWVsZFByb3BzKCd2Y3Jub21hdGknKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC52Y3Jub21hdGkgJiYgZm9ybWlrLmVycm9ycy52Y3Jub21hdGkgPyAoXG4gICAgICAgICAgICA8ZGl2Pntmb3JtaWsuZXJyb3JzLnZjcm5vbWF0aX08L2Rpdj5cbiAgICAgICAgICApIDogbnVsbH08YnIgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJhcnJpb1wiPkJhcnJpbzogPC9sYWJlbD5cbiAgICAgICAgICA8RmllbGQgbmFtZT1cImJhcnJpb1wiIGFzPVwic2VsZWN0XCIgY2xhc3NOYW1lPVwibXktc2VsZWN0XCI+ICAgICAgICAgIFxuICAgICAgICAgICAge2JhcnJpb3MubWFwKChiYXJyaW8pID0+IChcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2JhcnJpby5pZH0gdmFsdWU9e2JhcnJpby5pZH0+XG4gICAgICAgICAgICAgICAge2JhcnJpby5hdHRyaWJ1dGVzLlZjckJhclZlcn1cbiAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtmb3JtaWsuaXNTdWJtaXR0aW5nfT4gTW9kaWZpY2FyIDwvYnV0dG9uPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdmlzaXRhc1wiPjxhPiAgQ2FuY2VsYXIgIDwvYT48L0xpbms+XG5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgKX1cbiAgICA8L0Zvcm1paz5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IFt2aXNpdGFzLCBiYXJyaW9zIF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZmV0Y2hBUEkoXCIvdmlzaXRhc1wiLCB7IHBvcHVsYXRlOiBcIipcIiwgZmlsdGVyczogeyBpZDogMX19KSxcbiAgICBmZXRjaEFQSShcIi9iYXJyaW9zXCIsIHsgcG9wdWxhdGU6IFwiKlwiLCBwYWdpbmF0aW9uOiB7IHN0YXJ0OiAwLCBsaW1pdDogNTAwIH0sIHNvcnQ6IFsnVmNyQmFyVmVyJ119KVxuICBdKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICB2aXNpdGFzOiB2aXNpdGFzLmRhdGFbMF0sXG4gICAgICBiYXJyaW9zOiBiYXJyaW9zLmRhdGEsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaWdudXBGb3JtOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIEdldEludHJpbnNpYyA9IHJlcXVpcmUoJ2dldC1pbnRyaW5zaWMnKTtcblxudmFyIGNhbGxCaW5kID0gcmVxdWlyZSgnLi8nKTtcblxudmFyICRpbmRleE9mID0gY2FsbEJpbmQoR2V0SW50cmluc2ljKCdTdHJpbmcucHJvdG90eXBlLmluZGV4T2YnKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY2FsbEJvdW5kSW50cmluc2ljKG5hbWUsIGFsbG93TWlzc2luZykge1xuXHR2YXIgaW50cmluc2ljID0gR2V0SW50cmluc2ljKG5hbWUsICEhYWxsb3dNaXNzaW5nKTtcblx0aWYgKHR5cGVvZiBpbnRyaW5zaWMgPT09ICdmdW5jdGlvbicgJiYgJGluZGV4T2YobmFtZSwgJy5wcm90b3R5cGUuJykgPiAtMSkge1xuXHRcdHJldHVybiBjYWxsQmluZChpbnRyaW5zaWMpO1xuXHR9XG5cdHJldHVybiBpbnRyaW5zaWM7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCdnZXQtaW50cmluc2ljJyk7XG5cbnZhciAkYXBwbHkgPSBHZXRJbnRyaW5zaWMoJyVGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHklJyk7XG52YXIgJGNhbGwgPSBHZXRJbnRyaW5zaWMoJyVGdW5jdGlvbi5wcm90b3R5cGUuY2FsbCUnKTtcbnZhciAkcmVmbGVjdEFwcGx5ID0gR2V0SW50cmluc2ljKCclUmVmbGVjdC5hcHBseSUnLCB0cnVlKSB8fCBiaW5kLmNhbGwoJGNhbGwsICRhcHBseSk7XG5cbnZhciAkZ09QRCA9IEdldEludHJpbnNpYygnJU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IlJywgdHJ1ZSk7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gR2V0SW50cmluc2ljKCclT2JqZWN0LmRlZmluZVByb3BlcnR5JScsIHRydWUpO1xudmFyICRtYXggPSBHZXRJbnRyaW5zaWMoJyVNYXRoLm1heCUnKTtcblxuaWYgKCRkZWZpbmVQcm9wZXJ0eSkge1xuXHR0cnkge1xuXHRcdCRkZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IHZhbHVlOiAxIH0pO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0Ly8gSUUgOCBoYXMgYSBicm9rZW4gZGVmaW5lUHJvcGVydHlcblx0XHQkZGVmaW5lUHJvcGVydHkgPSBudWxsO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY2FsbEJpbmQob3JpZ2luYWxGdW5jdGlvbikge1xuXHR2YXIgZnVuYyA9ICRyZWZsZWN0QXBwbHkoYmluZCwgJGNhbGwsIGFyZ3VtZW50cyk7XG5cdGlmICgkZ09QRCAmJiAkZGVmaW5lUHJvcGVydHkpIHtcblx0XHR2YXIgZGVzYyA9ICRnT1BEKGZ1bmMsICdsZW5ndGgnKTtcblx0XHRpZiAoZGVzYy5jb25maWd1cmFibGUpIHtcblx0XHRcdC8vIG9yaWdpbmFsIGxlbmd0aCwgcGx1cyB0aGUgcmVjZWl2ZXIsIG1pbnVzIGFueSBhZGRpdGlvbmFsIGFyZ3VtZW50cyAoYWZ0ZXIgdGhlIHJlY2VpdmVyKVxuXHRcdFx0JGRlZmluZVByb3BlcnR5KFxuXHRcdFx0XHRmdW5jLFxuXHRcdFx0XHQnbGVuZ3RoJyxcblx0XHRcdFx0eyB2YWx1ZTogMSArICRtYXgoMCwgb3JpZ2luYWxGdW5jdGlvbi5sZW5ndGggLSAoYXJndW1lbnRzLmxlbmd0aCAtIDEpKSB9XG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZnVuYztcbn07XG5cbnZhciBhcHBseUJpbmQgPSBmdW5jdGlvbiBhcHBseUJpbmQoKSB7XG5cdHJldHVybiAkcmVmbGVjdEFwcGx5KGJpbmQsICRhcHBseSwgYXJndW1lbnRzKTtcbn07XG5cbmlmICgkZGVmaW5lUHJvcGVydHkpIHtcblx0JGRlZmluZVByb3BlcnR5KG1vZHVsZS5leHBvcnRzLCAnYXBwbHknLCB7IHZhbHVlOiBhcHBseUJpbmQgfSk7XG59IGVsc2Uge1xuXHRtb2R1bGUuZXhwb3J0cy5hcHBseSA9IGFwcGx5QmluZDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuLyogZXNsaW50IG5vLWludmFsaWQtdGhpczogMSAqL1xuXG52YXIgRVJST1JfTUVTU0FHRSA9ICdGdW5jdGlvbi5wcm90b3R5cGUuYmluZCBjYWxsZWQgb24gaW5jb21wYXRpYmxlICc7XG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGZ1bmNUeXBlID0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKHRoYXQpIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcztcbiAgICBpZiAodHlwZW9mIHRhcmdldCAhPT0gJ2Z1bmN0aW9uJyB8fCB0b1N0ci5jYWxsKHRhcmdldCkgIT09IGZ1bmNUeXBlKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRVJST1JfTUVTU0FHRSArIHRhcmdldCk7XG4gICAgfVxuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgdmFyIGJvdW5kO1xuICAgIHZhciBiaW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgYm91bmQpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0YXJnZXQuYXBwbHkoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKE9iamVjdChyZXN1bHQpID09PSByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0LmFwcGx5KFxuICAgICAgICAgICAgICAgIHRoYXQsXG4gICAgICAgICAgICAgICAgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgYm91bmRMZW5ndGggPSBNYXRoLm1heCgwLCB0YXJnZXQubGVuZ3RoIC0gYXJncy5sZW5ndGgpO1xuICAgIHZhciBib3VuZEFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvdW5kTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm91bmRBcmdzLnB1c2goJyQnICsgaSk7XG4gICAgfVxuXG4gICAgYm91bmQgPSBGdW5jdGlvbignYmluZGVyJywgJ3JldHVybiBmdW5jdGlvbiAoJyArIGJvdW5kQXJncy5qb2luKCcsJykgKyAnKXsgcmV0dXJuIGJpbmRlci5hcHBseSh0aGlzLGFyZ3VtZW50cyk7IH0nKShiaW5kZXIpO1xuXG4gICAgaWYgKHRhcmdldC5wcm90b3R5cGUpIHtcbiAgICAgICAgdmFyIEVtcHR5ID0gZnVuY3Rpb24gRW1wdHkoKSB7fTtcbiAgICAgICAgRW1wdHkucHJvdG90eXBlID0gdGFyZ2V0LnByb3RvdHlwZTtcbiAgICAgICAgYm91bmQucHJvdG90eXBlID0gbmV3IEVtcHR5KCk7XG4gICAgICAgIEVtcHR5LnByb3RvdHlwZSA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJvdW5kO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kIHx8IGltcGxlbWVudGF0aW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdW5kZWZpbmVkO1xuXG52YXIgJFN5bnRheEVycm9yID0gU3ludGF4RXJyb3I7XG52YXIgJEZ1bmN0aW9uID0gRnVuY3Rpb247XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG52YXIgZ2V0RXZhbGxlZENvbnN0cnVjdG9yID0gZnVuY3Rpb24gKGV4cHJlc3Npb25TeW50YXgpIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gJEZ1bmN0aW9uKCdcInVzZSBzdHJpY3RcIjsgcmV0dXJuICgnICsgZXhwcmVzc2lvblN5bnRheCArICcpLmNvbnN0cnVjdG9yOycpKCk7XG5cdH0gY2F0Y2ggKGUpIHt9XG59O1xuXG52YXIgJGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuaWYgKCRnT1BEKSB7XG5cdHRyeSB7XG5cdFx0JGdPUEQoe30sICcnKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdCRnT1BEID0gbnVsbDsgLy8gdGhpcyBpcyBJRSA4LCB3aGljaCBoYXMgYSBicm9rZW4gZ09QRFxuXHR9XG59XG5cbnZhciB0aHJvd1R5cGVFcnJvciA9IGZ1bmN0aW9uICgpIHtcblx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoKTtcbn07XG52YXIgVGhyb3dUeXBlRXJyb3IgPSAkZ09QRFxuXHQ/IChmdW5jdGlvbiAoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnMsIG5vLWNhbGxlciwgbm8tcmVzdHJpY3RlZC1wcm9wZXJ0aWVzXG5cdFx0XHRhcmd1bWVudHMuY2FsbGVlOyAvLyBJRSA4IGRvZXMgbm90IHRocm93IGhlcmVcblx0XHRcdHJldHVybiB0aHJvd1R5cGVFcnJvcjtcblx0XHR9IGNhdGNoIChjYWxsZWVUaHJvd3MpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdC8vIElFIDggdGhyb3dzIG9uIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYXJndW1lbnRzLCAnJylcblx0XHRcdFx0cmV0dXJuICRnT1BEKGFyZ3VtZW50cywgJ2NhbGxlZScpLmdldDtcblx0XHRcdH0gY2F0Y2ggKGdPUER0aHJvd3MpIHtcblx0XHRcdFx0cmV0dXJuIHRocm93VHlwZUVycm9yO1xuXHRcdFx0fVxuXHRcdH1cblx0fSgpKVxuXHQ6IHRocm93VHlwZUVycm9yO1xuXG52YXIgaGFzU3ltYm9scyA9IHJlcXVpcmUoJ2hhcy1zeW1ib2xzJykoKTtcblxudmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4Ll9fcHJvdG9fXzsgfTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wcm90b1xuXG52YXIgbmVlZHNFdmFsID0ge307XG5cbnZhciBUeXBlZEFycmF5ID0gdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogZ2V0UHJvdG8oVWludDhBcnJheSk7XG5cbnZhciBJTlRSSU5TSUNTID0ge1xuXHQnJUFnZ3JlZ2F0ZUVycm9yJSc6IHR5cGVvZiBBZ2dyZWdhdGVFcnJvciA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBBZ2dyZWdhdGVFcnJvcixcblx0JyVBcnJheSUnOiBBcnJheSxcblx0JyVBcnJheUJ1ZmZlciUnOiB0eXBlb2YgQXJyYXlCdWZmZXIgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQXJyYXlCdWZmZXIsXG5cdCclQXJyYXlJdGVyYXRvclByb3RvdHlwZSUnOiBoYXNTeW1ib2xzID8gZ2V0UHJvdG8oW11bU3ltYm9sLml0ZXJhdG9yXSgpKSA6IHVuZGVmaW5lZCxcblx0JyVBc3luY0Zyb21TeW5jSXRlcmF0b3JQcm90b3R5cGUlJzogdW5kZWZpbmVkLFxuXHQnJUFzeW5jRnVuY3Rpb24lJzogbmVlZHNFdmFsLFxuXHQnJUFzeW5jR2VuZXJhdG9yJSc6IG5lZWRzRXZhbCxcblx0JyVBc3luY0dlbmVyYXRvckZ1bmN0aW9uJSc6IG5lZWRzRXZhbCxcblx0JyVBc3luY0l0ZXJhdG9yUHJvdG90eXBlJSc6IG5lZWRzRXZhbCxcblx0JyVBdG9taWNzJSc6IHR5cGVvZiBBdG9taWNzID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEF0b21pY3MsXG5cdCclQmlnSW50JSc6IHR5cGVvZiBCaWdJbnQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQmlnSW50LFxuXHQnJUJvb2xlYW4lJzogQm9vbGVhbixcblx0JyVEYXRhVmlldyUnOiB0eXBlb2YgRGF0YVZpZXcgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogRGF0YVZpZXcsXG5cdCclRGF0ZSUnOiBEYXRlLFxuXHQnJWRlY29kZVVSSSUnOiBkZWNvZGVVUkksXG5cdCclZGVjb2RlVVJJQ29tcG9uZW50JSc6IGRlY29kZVVSSUNvbXBvbmVudCxcblx0JyVlbmNvZGVVUkklJzogZW5jb2RlVVJJLFxuXHQnJWVuY29kZVVSSUNvbXBvbmVudCUnOiBlbmNvZGVVUklDb21wb25lbnQsXG5cdCclRXJyb3IlJzogRXJyb3IsXG5cdCclZXZhbCUnOiBldmFsLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWV2YWxcblx0JyVFdmFsRXJyb3IlJzogRXZhbEVycm9yLFxuXHQnJUZsb2F0MzJBcnJheSUnOiB0eXBlb2YgRmxvYXQzMkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEZsb2F0MzJBcnJheSxcblx0JyVGbG9hdDY0QXJyYXklJzogdHlwZW9mIEZsb2F0NjRBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBGbG9hdDY0QXJyYXksXG5cdCclRmluYWxpemF0aW9uUmVnaXN0cnklJzogdHlwZW9mIEZpbmFsaXphdGlvblJlZ2lzdHJ5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEZpbmFsaXphdGlvblJlZ2lzdHJ5LFxuXHQnJUZ1bmN0aW9uJSc6ICRGdW5jdGlvbixcblx0JyVHZW5lcmF0b3JGdW5jdGlvbiUnOiBuZWVkc0V2YWwsXG5cdCclSW50OEFycmF5JSc6IHR5cGVvZiBJbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogSW50OEFycmF5LFxuXHQnJUludDE2QXJyYXklJzogdHlwZW9mIEludDE2QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogSW50MTZBcnJheSxcblx0JyVJbnQzMkFycmF5JSc6IHR5cGVvZiBJbnQzMkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEludDMyQXJyYXksXG5cdCclaXNGaW5pdGUlJzogaXNGaW5pdGUsXG5cdCclaXNOYU4lJzogaXNOYU4sXG5cdCclSXRlcmF0b3JQcm90b3R5cGUlJzogaGFzU3ltYm9scyA/IGdldFByb3RvKGdldFByb3RvKFtdW1N5bWJvbC5pdGVyYXRvcl0oKSkpIDogdW5kZWZpbmVkLFxuXHQnJUpTT04lJzogdHlwZW9mIEpTT04gPT09ICdvYmplY3QnID8gSlNPTiA6IHVuZGVmaW5lZCxcblx0JyVNYXAlJzogdHlwZW9mIE1hcCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBNYXAsXG5cdCclTWFwSXRlcmF0b3JQcm90b3R5cGUlJzogdHlwZW9mIE1hcCA9PT0gJ3VuZGVmaW5lZCcgfHwgIWhhc1N5bWJvbHMgPyB1bmRlZmluZWQgOiBnZXRQcm90byhuZXcgTWFwKClbU3ltYm9sLml0ZXJhdG9yXSgpKSxcblx0JyVNYXRoJSc6IE1hdGgsXG5cdCclTnVtYmVyJSc6IE51bWJlcixcblx0JyVPYmplY3QlJzogT2JqZWN0LFxuXHQnJXBhcnNlRmxvYXQlJzogcGFyc2VGbG9hdCxcblx0JyVwYXJzZUludCUnOiBwYXJzZUludCxcblx0JyVQcm9taXNlJSc6IHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb21pc2UsXG5cdCclUHJveHklJzogdHlwZW9mIFByb3h5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb3h5LFxuXHQnJVJhbmdlRXJyb3IlJzogUmFuZ2VFcnJvcixcblx0JyVSZWZlcmVuY2VFcnJvciUnOiBSZWZlcmVuY2VFcnJvcixcblx0JyVSZWZsZWN0JSc6IHR5cGVvZiBSZWZsZWN0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFJlZmxlY3QsXG5cdCclUmVnRXhwJSc6IFJlZ0V4cCxcblx0JyVTZXQlJzogdHlwZW9mIFNldCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBTZXQsXG5cdCclU2V0SXRlcmF0b3JQcm90b3R5cGUlJzogdHlwZW9mIFNldCA9PT0gJ3VuZGVmaW5lZCcgfHwgIWhhc1N5bWJvbHMgPyB1bmRlZmluZWQgOiBnZXRQcm90byhuZXcgU2V0KClbU3ltYm9sLml0ZXJhdG9yXSgpKSxcblx0JyVTaGFyZWRBcnJheUJ1ZmZlciUnOiB0eXBlb2YgU2hhcmVkQXJyYXlCdWZmZXIgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogU2hhcmVkQXJyYXlCdWZmZXIsXG5cdCclU3RyaW5nJSc6IFN0cmluZyxcblx0JyVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUnOiBoYXNTeW1ib2xzID8gZ2V0UHJvdG8oJydbU3ltYm9sLml0ZXJhdG9yXSgpKSA6IHVuZGVmaW5lZCxcblx0JyVTeW1ib2wlJzogaGFzU3ltYm9scyA/IFN5bWJvbCA6IHVuZGVmaW5lZCxcblx0JyVTeW50YXhFcnJvciUnOiAkU3ludGF4RXJyb3IsXG5cdCclVGhyb3dUeXBlRXJyb3IlJzogVGhyb3dUeXBlRXJyb3IsXG5cdCclVHlwZWRBcnJheSUnOiBUeXBlZEFycmF5LFxuXHQnJVR5cGVFcnJvciUnOiAkVHlwZUVycm9yLFxuXHQnJVVpbnQ4QXJyYXklJzogdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDhBcnJheSxcblx0JyVVaW50OENsYW1wZWRBcnJheSUnOiB0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDhDbGFtcGVkQXJyYXksXG5cdCclVWludDE2QXJyYXklJzogdHlwZW9mIFVpbnQxNkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQxNkFycmF5LFxuXHQnJVVpbnQzMkFycmF5JSc6IHR5cGVvZiBVaW50MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50MzJBcnJheSxcblx0JyVVUklFcnJvciUnOiBVUklFcnJvcixcblx0JyVXZWFrTWFwJSc6IHR5cGVvZiBXZWFrTWFwID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFdlYWtNYXAsXG5cdCclV2Vha1JlZiUnOiB0eXBlb2YgV2Vha1JlZiA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBXZWFrUmVmLFxuXHQnJVdlYWtTZXQlJzogdHlwZW9mIFdlYWtTZXQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogV2Vha1NldFxufTtcblxudmFyIGRvRXZhbCA9IGZ1bmN0aW9uIGRvRXZhbChuYW1lKSB7XG5cdHZhciB2YWx1ZTtcblx0aWYgKG5hbWUgPT09ICclQXN5bmNGdW5jdGlvbiUnKSB7XG5cdFx0dmFsdWUgPSBnZXRFdmFsbGVkQ29uc3RydWN0b3IoJ2FzeW5jIGZ1bmN0aW9uICgpIHt9Jyk7XG5cdH0gZWxzZSBpZiAobmFtZSA9PT0gJyVHZW5lcmF0b3JGdW5jdGlvbiUnKSB7XG5cdFx0dmFsdWUgPSBnZXRFdmFsbGVkQ29uc3RydWN0b3IoJ2Z1bmN0aW9uKiAoKSB7fScpO1xuXHR9IGVsc2UgaWYgKG5hbWUgPT09ICclQXN5bmNHZW5lcmF0b3JGdW5jdGlvbiUnKSB7XG5cdFx0dmFsdWUgPSBnZXRFdmFsbGVkQ29uc3RydWN0b3IoJ2FzeW5jIGZ1bmN0aW9uKiAoKSB7fScpO1xuXHR9IGVsc2UgaWYgKG5hbWUgPT09ICclQXN5bmNHZW5lcmF0b3IlJykge1xuXHRcdHZhciBmbiA9IGRvRXZhbCgnJUFzeW5jR2VuZXJhdG9yRnVuY3Rpb24lJyk7XG5cdFx0aWYgKGZuKSB7XG5cdFx0XHR2YWx1ZSA9IGZuLnByb3RvdHlwZTtcblx0XHR9XG5cdH0gZWxzZSBpZiAobmFtZSA9PT0gJyVBc3luY0l0ZXJhdG9yUHJvdG90eXBlJScpIHtcblx0XHR2YXIgZ2VuID0gZG9FdmFsKCclQXN5bmNHZW5lcmF0b3IlJyk7XG5cdFx0aWYgKGdlbikge1xuXHRcdFx0dmFsdWUgPSBnZXRQcm90byhnZW4ucHJvdG90eXBlKTtcblx0XHR9XG5cdH1cblxuXHRJTlRSSU5TSUNTW25hbWVdID0gdmFsdWU7XG5cblx0cmV0dXJuIHZhbHVlO1xufTtcblxudmFyIExFR0FDWV9BTElBU0VTID0ge1xuXHQnJUFycmF5QnVmZmVyUHJvdG90eXBlJSc6IFsnQXJyYXlCdWZmZXInLCAncHJvdG90eXBlJ10sXG5cdCclQXJyYXlQcm90b3R5cGUlJzogWydBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVBcnJheVByb3RvX2VudHJpZXMlJzogWydBcnJheScsICdwcm90b3R5cGUnLCAnZW50cmllcyddLFxuXHQnJUFycmF5UHJvdG9fZm9yRWFjaCUnOiBbJ0FycmF5JywgJ3Byb3RvdHlwZScsICdmb3JFYWNoJ10sXG5cdCclQXJyYXlQcm90b19rZXlzJSc6IFsnQXJyYXknLCAncHJvdG90eXBlJywgJ2tleXMnXSxcblx0JyVBcnJheVByb3RvX3ZhbHVlcyUnOiBbJ0FycmF5JywgJ3Byb3RvdHlwZScsICd2YWx1ZXMnXSxcblx0JyVBc3luY0Z1bmN0aW9uUHJvdG90eXBlJSc6IFsnQXN5bmNGdW5jdGlvbicsICdwcm90b3R5cGUnXSxcblx0JyVBc3luY0dlbmVyYXRvciUnOiBbJ0FzeW5jR2VuZXJhdG9yRnVuY3Rpb24nLCAncHJvdG90eXBlJ10sXG5cdCclQXN5bmNHZW5lcmF0b3JQcm90b3R5cGUlJzogWydBc3luY0dlbmVyYXRvckZ1bmN0aW9uJywgJ3Byb3RvdHlwZScsICdwcm90b3R5cGUnXSxcblx0JyVCb29sZWFuUHJvdG90eXBlJSc6IFsnQm9vbGVhbicsICdwcm90b3R5cGUnXSxcblx0JyVEYXRhVmlld1Byb3RvdHlwZSUnOiBbJ0RhdGFWaWV3JywgJ3Byb3RvdHlwZSddLFxuXHQnJURhdGVQcm90b3R5cGUlJzogWydEYXRlJywgJ3Byb3RvdHlwZSddLFxuXHQnJUVycm9yUHJvdG90eXBlJSc6IFsnRXJyb3InLCAncHJvdG90eXBlJ10sXG5cdCclRXZhbEVycm9yUHJvdG90eXBlJSc6IFsnRXZhbEVycm9yJywgJ3Byb3RvdHlwZSddLFxuXHQnJUZsb2F0MzJBcnJheVByb3RvdHlwZSUnOiBbJ0Zsb2F0MzJBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVGbG9hdDY0QXJyYXlQcm90b3R5cGUlJzogWydGbG9hdDY0QXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclRnVuY3Rpb25Qcm90b3R5cGUlJzogWydGdW5jdGlvbicsICdwcm90b3R5cGUnXSxcblx0JyVHZW5lcmF0b3IlJzogWydHZW5lcmF0b3JGdW5jdGlvbicsICdwcm90b3R5cGUnXSxcblx0JyVHZW5lcmF0b3JQcm90b3R5cGUlJzogWydHZW5lcmF0b3JGdW5jdGlvbicsICdwcm90b3R5cGUnLCAncHJvdG90eXBlJ10sXG5cdCclSW50OEFycmF5UHJvdG90eXBlJSc6IFsnSW50OEFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJUludDE2QXJyYXlQcm90b3R5cGUlJzogWydJbnQxNkFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJUludDMyQXJyYXlQcm90b3R5cGUlJzogWydJbnQzMkFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJUpTT05QYXJzZSUnOiBbJ0pTT04nLCAncGFyc2UnXSxcblx0JyVKU09OU3RyaW5naWZ5JSc6IFsnSlNPTicsICdzdHJpbmdpZnknXSxcblx0JyVNYXBQcm90b3R5cGUlJzogWydNYXAnLCAncHJvdG90eXBlJ10sXG5cdCclTnVtYmVyUHJvdG90eXBlJSc6IFsnTnVtYmVyJywgJ3Byb3RvdHlwZSddLFxuXHQnJU9iamVjdFByb3RvdHlwZSUnOiBbJ09iamVjdCcsICdwcm90b3R5cGUnXSxcblx0JyVPYmpQcm90b190b1N0cmluZyUnOiBbJ09iamVjdCcsICdwcm90b3R5cGUnLCAndG9TdHJpbmcnXSxcblx0JyVPYmpQcm90b192YWx1ZU9mJSc6IFsnT2JqZWN0JywgJ3Byb3RvdHlwZScsICd2YWx1ZU9mJ10sXG5cdCclUHJvbWlzZVByb3RvdHlwZSUnOiBbJ1Byb21pc2UnLCAncHJvdG90eXBlJ10sXG5cdCclUHJvbWlzZVByb3RvX3RoZW4lJzogWydQcm9taXNlJywgJ3Byb3RvdHlwZScsICd0aGVuJ10sXG5cdCclUHJvbWlzZV9hbGwlJzogWydQcm9taXNlJywgJ2FsbCddLFxuXHQnJVByb21pc2VfcmVqZWN0JSc6IFsnUHJvbWlzZScsICdyZWplY3QnXSxcblx0JyVQcm9taXNlX3Jlc29sdmUlJzogWydQcm9taXNlJywgJ3Jlc29sdmUnXSxcblx0JyVSYW5nZUVycm9yUHJvdG90eXBlJSc6IFsnUmFuZ2VFcnJvcicsICdwcm90b3R5cGUnXSxcblx0JyVSZWZlcmVuY2VFcnJvclByb3RvdHlwZSUnOiBbJ1JlZmVyZW5jZUVycm9yJywgJ3Byb3RvdHlwZSddLFxuXHQnJVJlZ0V4cFByb3RvdHlwZSUnOiBbJ1JlZ0V4cCcsICdwcm90b3R5cGUnXSxcblx0JyVTZXRQcm90b3R5cGUlJzogWydTZXQnLCAncHJvdG90eXBlJ10sXG5cdCclU2hhcmVkQXJyYXlCdWZmZXJQcm90b3R5cGUlJzogWydTaGFyZWRBcnJheUJ1ZmZlcicsICdwcm90b3R5cGUnXSxcblx0JyVTdHJpbmdQcm90b3R5cGUlJzogWydTdHJpbmcnLCAncHJvdG90eXBlJ10sXG5cdCclU3ltYm9sUHJvdG90eXBlJSc6IFsnU3ltYm9sJywgJ3Byb3RvdHlwZSddLFxuXHQnJVN5bnRheEVycm9yUHJvdG90eXBlJSc6IFsnU3ludGF4RXJyb3InLCAncHJvdG90eXBlJ10sXG5cdCclVHlwZWRBcnJheVByb3RvdHlwZSUnOiBbJ1R5cGVkQXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclVHlwZUVycm9yUHJvdG90eXBlJSc6IFsnVHlwZUVycm9yJywgJ3Byb3RvdHlwZSddLFxuXHQnJVVpbnQ4QXJyYXlQcm90b3R5cGUlJzogWydVaW50OEFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJVVpbnQ4Q2xhbXBlZEFycmF5UHJvdG90eXBlJSc6IFsnVWludDhDbGFtcGVkQXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclVWludDE2QXJyYXlQcm90b3R5cGUlJzogWydVaW50MTZBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVVaW50MzJBcnJheVByb3RvdHlwZSUnOiBbJ1VpbnQzMkFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJVVSSUVycm9yUHJvdG90eXBlJSc6IFsnVVJJRXJyb3InLCAncHJvdG90eXBlJ10sXG5cdCclV2Vha01hcFByb3RvdHlwZSUnOiBbJ1dlYWtNYXAnLCAncHJvdG90eXBlJ10sXG5cdCclV2Vha1NldFByb3RvdHlwZSUnOiBbJ1dlYWtTZXQnLCAncHJvdG90eXBlJ11cbn07XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnZnVuY3Rpb24tYmluZCcpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJ2hhcycpO1xudmFyICRjb25jYXQgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgQXJyYXkucHJvdG90eXBlLmNvbmNhdCk7XG52YXIgJHNwbGljZUFwcGx5ID0gYmluZC5jYWxsKEZ1bmN0aW9uLmFwcGx5LCBBcnJheS5wcm90b3R5cGUuc3BsaWNlKTtcbnZhciAkcmVwbGFjZSA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UpO1xudmFyICRzdHJTbGljZSA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBTdHJpbmcucHJvdG90eXBlLnNsaWNlKTtcblxuLyogYWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9sb2Rhc2gvbG9kYXNoL2Jsb2IvNC4xNy4xNS9kaXN0L2xvZGFzaC5qcyNMNjczNS1MNjc0NCAqL1xudmFyIHJlUHJvcE5hbWUgPSAvW14lLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcXFxdfFxcXFwuKSo/KVxcMilcXF18KD89KD86XFwufFxcW1xcXSkoPzpcXC58XFxbXFxdfCUkKSkvZztcbnZhciByZUVzY2FwZUNoYXIgPSAvXFxcXChcXFxcKT8vZzsgLyoqIFVzZWQgdG8gbWF0Y2ggYmFja3NsYXNoZXMgaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgc3RyaW5nVG9QYXRoID0gZnVuY3Rpb24gc3RyaW5nVG9QYXRoKHN0cmluZykge1xuXHR2YXIgZmlyc3QgPSAkc3RyU2xpY2Uoc3RyaW5nLCAwLCAxKTtcblx0dmFyIGxhc3QgPSAkc3RyU2xpY2Uoc3RyaW5nLCAtMSk7XG5cdGlmIChmaXJzdCA9PT0gJyUnICYmIGxhc3QgIT09ICclJykge1xuXHRcdHRocm93IG5ldyAkU3ludGF4RXJyb3IoJ2ludmFsaWQgaW50cmluc2ljIHN5bnRheCwgZXhwZWN0ZWQgY2xvc2luZyBgJWAnKTtcblx0fSBlbHNlIGlmIChsYXN0ID09PSAnJScgJiYgZmlyc3QgIT09ICclJykge1xuXHRcdHRocm93IG5ldyAkU3ludGF4RXJyb3IoJ2ludmFsaWQgaW50cmluc2ljIHN5bnRheCwgZXhwZWN0ZWQgb3BlbmluZyBgJWAnKTtcblx0fVxuXHR2YXIgcmVzdWx0ID0gW107XG5cdCRyZXBsYWNlKHN0cmluZywgcmVQcm9wTmFtZSwgZnVuY3Rpb24gKG1hdGNoLCBudW1iZXIsIHF1b3RlLCBzdWJTdHJpbmcpIHtcblx0XHRyZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBxdW90ZSA/ICRyZXBsYWNlKHN1YlN0cmluZywgcmVFc2NhcGVDaGFyLCAnJDEnKSA6IG51bWJlciB8fCBtYXRjaDtcblx0fSk7XG5cdHJldHVybiByZXN1bHQ7XG59O1xuLyogZW5kIGFkYXB0YXRpb24gKi9cblxudmFyIGdldEJhc2VJbnRyaW5zaWMgPSBmdW5jdGlvbiBnZXRCYXNlSW50cmluc2ljKG5hbWUsIGFsbG93TWlzc2luZykge1xuXHR2YXIgaW50cmluc2ljTmFtZSA9IG5hbWU7XG5cdHZhciBhbGlhcztcblx0aWYgKGhhc093bihMRUdBQ1lfQUxJQVNFUywgaW50cmluc2ljTmFtZSkpIHtcblx0XHRhbGlhcyA9IExFR0FDWV9BTElBU0VTW2ludHJpbnNpY05hbWVdO1xuXHRcdGludHJpbnNpY05hbWUgPSAnJScgKyBhbGlhc1swXSArICclJztcblx0fVxuXG5cdGlmIChoYXNPd24oSU5UUklOU0lDUywgaW50cmluc2ljTmFtZSkpIHtcblx0XHR2YXIgdmFsdWUgPSBJTlRSSU5TSUNTW2ludHJpbnNpY05hbWVdO1xuXHRcdGlmICh2YWx1ZSA9PT0gbmVlZHNFdmFsKSB7XG5cdFx0XHR2YWx1ZSA9IGRvRXZhbChpbnRyaW5zaWNOYW1lKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgJiYgIWFsbG93TWlzc2luZykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2ludHJpbnNpYyAnICsgbmFtZSArICcgZXhpc3RzLCBidXQgaXMgbm90IGF2YWlsYWJsZS4gUGxlYXNlIGZpbGUgYW4gaXNzdWUhJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGFsaWFzOiBhbGlhcyxcblx0XHRcdG5hbWU6IGludHJpbnNpY05hbWUsXG5cdFx0XHR2YWx1ZTogdmFsdWVcblx0XHR9O1xuXHR9XG5cblx0dGhyb3cgbmV3ICRTeW50YXhFcnJvcignaW50cmluc2ljICcgKyBuYW1lICsgJyBkb2VzIG5vdCBleGlzdCEnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gR2V0SW50cmluc2ljKG5hbWUsIGFsbG93TWlzc2luZykge1xuXHRpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnIHx8IG5hbWUubGVuZ3RoID09PSAwKSB7XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2ludHJpbnNpYyBuYW1lIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nJyk7XG5cdH1cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIHR5cGVvZiBhbGxvd01pc3NpbmcgIT09ICdib29sZWFuJykge1xuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdcImFsbG93TWlzc2luZ1wiIGFyZ3VtZW50IG11c3QgYmUgYSBib29sZWFuJyk7XG5cdH1cblxuXHR2YXIgcGFydHMgPSBzdHJpbmdUb1BhdGgobmFtZSk7XG5cdHZhciBpbnRyaW5zaWNCYXNlTmFtZSA9IHBhcnRzLmxlbmd0aCA+IDAgPyBwYXJ0c1swXSA6ICcnO1xuXG5cdHZhciBpbnRyaW5zaWMgPSBnZXRCYXNlSW50cmluc2ljKCclJyArIGludHJpbnNpY0Jhc2VOYW1lICsgJyUnLCBhbGxvd01pc3NpbmcpO1xuXHR2YXIgaW50cmluc2ljUmVhbE5hbWUgPSBpbnRyaW5zaWMubmFtZTtcblx0dmFyIHZhbHVlID0gaW50cmluc2ljLnZhbHVlO1xuXHR2YXIgc2tpcEZ1cnRoZXJDYWNoaW5nID0gZmFsc2U7XG5cblx0dmFyIGFsaWFzID0gaW50cmluc2ljLmFsaWFzO1xuXHRpZiAoYWxpYXMpIHtcblx0XHRpbnRyaW5zaWNCYXNlTmFtZSA9IGFsaWFzWzBdO1xuXHRcdCRzcGxpY2VBcHBseShwYXJ0cywgJGNvbmNhdChbMCwgMV0sIGFsaWFzKSk7XG5cdH1cblxuXHRmb3IgKHZhciBpID0gMSwgaXNPd24gPSB0cnVlOyBpIDwgcGFydHMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHR2YXIgcGFydCA9IHBhcnRzW2ldO1xuXHRcdHZhciBmaXJzdCA9ICRzdHJTbGljZShwYXJ0LCAwLCAxKTtcblx0XHR2YXIgbGFzdCA9ICRzdHJTbGljZShwYXJ0LCAtMSk7XG5cdFx0aWYgKFxuXHRcdFx0KFxuXHRcdFx0XHQoZmlyc3QgPT09ICdcIicgfHwgZmlyc3QgPT09IFwiJ1wiIHx8IGZpcnN0ID09PSAnYCcpXG5cdFx0XHRcdHx8IChsYXN0ID09PSAnXCInIHx8IGxhc3QgPT09IFwiJ1wiIHx8IGxhc3QgPT09ICdgJylcblx0XHRcdClcblx0XHRcdCYmIGZpcnN0ICE9PSBsYXN0XG5cdFx0KSB7XG5cdFx0XHR0aHJvdyBuZXcgJFN5bnRheEVycm9yKCdwcm9wZXJ0eSBuYW1lcyB3aXRoIHF1b3RlcyBtdXN0IGhhdmUgbWF0Y2hpbmcgcXVvdGVzJyk7XG5cdFx0fVxuXHRcdGlmIChwYXJ0ID09PSAnY29uc3RydWN0b3InIHx8ICFpc093bikge1xuXHRcdFx0c2tpcEZ1cnRoZXJDYWNoaW5nID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRpbnRyaW5zaWNCYXNlTmFtZSArPSAnLicgKyBwYXJ0O1xuXHRcdGludHJpbnNpY1JlYWxOYW1lID0gJyUnICsgaW50cmluc2ljQmFzZU5hbWUgKyAnJSc7XG5cblx0XHRpZiAoaGFzT3duKElOVFJJTlNJQ1MsIGludHJpbnNpY1JlYWxOYW1lKSkge1xuXHRcdFx0dmFsdWUgPSBJTlRSSU5TSUNTW2ludHJpbnNpY1JlYWxOYW1lXTtcblx0XHR9IGVsc2UgaWYgKHZhbHVlICE9IG51bGwpIHtcblx0XHRcdGlmICghKHBhcnQgaW4gdmFsdWUpKSB7XG5cdFx0XHRcdGlmICghYWxsb3dNaXNzaW5nKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2Jhc2UgaW50cmluc2ljIGZvciAnICsgbmFtZSArICcgZXhpc3RzLCBidXQgdGhlIHByb3BlcnR5IGlzIG5vdCBhdmFpbGFibGUuJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHZvaWQgdW5kZWZpbmVkO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCRnT1BEICYmIChpICsgMSkgPj0gcGFydHMubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBkZXNjID0gJGdPUEQodmFsdWUsIHBhcnQpO1xuXHRcdFx0XHRpc093biA9ICEhZGVzYztcblxuXHRcdFx0XHQvLyBCeSBjb252ZW50aW9uLCB3aGVuIGEgZGF0YSBwcm9wZXJ0eSBpcyBjb252ZXJ0ZWQgdG8gYW4gYWNjZXNzb3Jcblx0XHRcdFx0Ly8gcHJvcGVydHkgdG8gZW11bGF0ZSBhIGRhdGEgcHJvcGVydHkgdGhhdCBkb2VzIG5vdCBzdWZmZXIgZnJvbVxuXHRcdFx0XHQvLyB0aGUgb3ZlcnJpZGUgbWlzdGFrZSwgdGhhdCBhY2Nlc3NvcidzIGdldHRlciBpcyBtYXJrZWQgd2l0aFxuXHRcdFx0XHQvLyBhbiBgb3JpZ2luYWxWYWx1ZWAgcHJvcGVydHkuIEhlcmUsIHdoZW4gd2UgZGV0ZWN0IHRoaXMsIHdlXG5cdFx0XHRcdC8vIHVwaG9sZCB0aGUgaWxsdXNpb24gYnkgcHJldGVuZGluZyB0byBzZWUgdGhhdCBvcmlnaW5hbCBkYXRhXG5cdFx0XHRcdC8vIHByb3BlcnR5LCBpLmUuLCByZXR1cm5pbmcgdGhlIHZhbHVlIHJhdGhlciB0aGFuIHRoZSBnZXR0ZXJcblx0XHRcdFx0Ly8gaXRzZWxmLlxuXHRcdFx0XHRpZiAoaXNPd24gJiYgJ2dldCcgaW4gZGVzYyAmJiAhKCdvcmlnaW5hbFZhbHVlJyBpbiBkZXNjLmdldCkpIHtcblx0XHRcdFx0XHR2YWx1ZSA9IGRlc2MuZ2V0O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhbHVlID0gdmFsdWVbcGFydF07XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlzT3duID0gaGFzT3duKHZhbHVlLCBwYXJ0KTtcblx0XHRcdFx0dmFsdWUgPSB2YWx1ZVtwYXJ0XTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGlzT3duICYmICFza2lwRnVydGhlckNhY2hpbmcpIHtcblx0XHRcdFx0SU5UUklOU0lDU1tpbnRyaW5zaWNSZWFsTmFtZV0gPSB2YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHZhbHVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIG9yaWdTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIGhhc1N5bWJvbFNoYW0gPSByZXF1aXJlKCcuL3NoYW1zJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaGFzTmF0aXZlU3ltYm9scygpIHtcblx0aWYgKHR5cGVvZiBvcmlnU3ltYm9sICE9PSAnZnVuY3Rpb24nKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiBvcmlnU3ltYm9sKCdmb28nKSAhPT0gJ3N5bWJvbCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICh0eXBlb2YgU3ltYm9sKCdiYXInKSAhPT0gJ3N5bWJvbCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0cmV0dXJuIGhhc1N5bWJvbFNoYW0oKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qIGVzbGludCBjb21wbGV4aXR5OiBbMiwgMThdLCBtYXgtc3RhdGVtZW50czogWzIsIDMzXSAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBoYXNTeW1ib2xzKCkge1xuXHRpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAhPT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09ICdzeW1ib2wnKSB7IHJldHVybiB0cnVlOyB9XG5cblx0dmFyIG9iaiA9IHt9O1xuXHR2YXIgc3ltID0gU3ltYm9sKCd0ZXN0Jyk7XG5cdHZhciBzeW1PYmogPSBPYmplY3Qoc3ltKTtcblx0aWYgKHR5cGVvZiBzeW0gPT09ICdzdHJpbmcnKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3ltKSAhPT0gJ1tvYmplY3QgU3ltYm9sXScpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3ltT2JqKSAhPT0gJ1tvYmplY3QgU3ltYm9sXScpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0Ly8gdGVtcCBkaXNhYmxlZCBwZXIgaHR0cHM6Ly9naXRodWIuY29tL2xqaGFyYi9vYmplY3QuYXNzaWduL2lzc3Vlcy8xN1xuXHQvLyBpZiAoc3ltIGluc3RhbmNlb2YgU3ltYm9sKSB7IHJldHVybiBmYWxzZTsgfVxuXHQvLyB0ZW1wIGRpc2FibGVkIHBlciBodHRwczovL2dpdGh1Yi5jb20vV2ViUmVmbGVjdGlvbi9nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMvaXNzdWVzLzRcblx0Ly8gaWYgKCEoc3ltT2JqIGluc3RhbmNlb2YgU3ltYm9sKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHQvLyBpZiAodHlwZW9mIFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmcgIT09ICdmdW5jdGlvbicpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdC8vIGlmIChTdHJpbmcoc3ltKSAhPT0gU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN5bSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0dmFyIHN5bVZhbCA9IDQyO1xuXHRvYmpbc3ltXSA9IHN5bVZhbDtcblx0Zm9yIChzeW0gaW4gb2JqKSB7IHJldHVybiBmYWxzZTsgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG5cdGlmICh0eXBlb2YgT2JqZWN0LmtleXMgPT09ICdmdW5jdGlvbicgJiYgT2JqZWN0LmtleXMob2JqKS5sZW5ndGggIT09IDApIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0aWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyA9PT0gJ2Z1bmN0aW9uJyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopLmxlbmd0aCAhPT0gMCkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHR2YXIgc3ltcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqKTtcblx0aWYgKHN5bXMubGVuZ3RoICE9PSAxIHx8IHN5bXNbMF0gIT09IHN5bSkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmosIHN5bSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0aWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgc3ltKTtcblx0XHRpZiAoZGVzY3JpcHRvci52YWx1ZSAhPT0gc3ltVmFsIHx8IGRlc2NyaXB0b3IuZW51bWVyYWJsZSAhPT0gdHJ1ZSkgeyByZXR1cm4gZmFsc2U7IH1cblx0fVxuXG5cdHJldHVybiB0cnVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCdmdW5jdGlvbi1iaW5kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuIiwidmFyIGhhc01hcCA9IHR5cGVvZiBNYXAgPT09ICdmdW5jdGlvbicgJiYgTWFwLnByb3RvdHlwZTtcbnZhciBtYXBTaXplRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgaGFzTWFwID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihNYXAucHJvdG90eXBlLCAnc2l6ZScpIDogbnVsbDtcbnZhciBtYXBTaXplID0gaGFzTWFwICYmIG1hcFNpemVEZXNjcmlwdG9yICYmIHR5cGVvZiBtYXBTaXplRGVzY3JpcHRvci5nZXQgPT09ICdmdW5jdGlvbicgPyBtYXBTaXplRGVzY3JpcHRvci5nZXQgOiBudWxsO1xudmFyIG1hcEZvckVhY2ggPSBoYXNNYXAgJiYgTWFwLnByb3RvdHlwZS5mb3JFYWNoO1xudmFyIGhhc1NldCA9IHR5cGVvZiBTZXQgPT09ICdmdW5jdGlvbicgJiYgU2V0LnByb3RvdHlwZTtcbnZhciBzZXRTaXplRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgaGFzU2V0ID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihTZXQucHJvdG90eXBlLCAnc2l6ZScpIDogbnVsbDtcbnZhciBzZXRTaXplID0gaGFzU2V0ICYmIHNldFNpemVEZXNjcmlwdG9yICYmIHR5cGVvZiBzZXRTaXplRGVzY3JpcHRvci5nZXQgPT09ICdmdW5jdGlvbicgPyBzZXRTaXplRGVzY3JpcHRvci5nZXQgOiBudWxsO1xudmFyIHNldEZvckVhY2ggPSBoYXNTZXQgJiYgU2V0LnByb3RvdHlwZS5mb3JFYWNoO1xudmFyIGhhc1dlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyAmJiBXZWFrTWFwLnByb3RvdHlwZTtcbnZhciB3ZWFrTWFwSGFzID0gaGFzV2Vha01hcCA/IFdlYWtNYXAucHJvdG90eXBlLmhhcyA6IG51bGw7XG52YXIgaGFzV2Vha1NldCA9IHR5cGVvZiBXZWFrU2V0ID09PSAnZnVuY3Rpb24nICYmIFdlYWtTZXQucHJvdG90eXBlO1xudmFyIHdlYWtTZXRIYXMgPSBoYXNXZWFrU2V0ID8gV2Vha1NldC5wcm90b3R5cGUuaGFzIDogbnVsbDtcbnZhciBoYXNXZWFrUmVmID0gdHlwZW9mIFdlYWtSZWYgPT09ICdmdW5jdGlvbicgJiYgV2Vha1JlZi5wcm90b3R5cGU7XG52YXIgd2Vha1JlZkRlcmVmID0gaGFzV2Vha1JlZiA/IFdlYWtSZWYucHJvdG90eXBlLmRlcmVmIDogbnVsbDtcbnZhciBib29sZWFuVmFsdWVPZiA9IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2Y7XG52YXIgb2JqZWN0VG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgbWF0Y2ggPSBTdHJpbmcucHJvdG90eXBlLm1hdGNoO1xudmFyIGJpZ0ludFZhbHVlT2YgPSB0eXBlb2YgQmlnSW50ID09PSAnZnVuY3Rpb24nID8gQmlnSW50LnByb3RvdHlwZS52YWx1ZU9mIDogbnVsbDtcbnZhciBnT1BTID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBzeW1Ub1N0cmluZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gJ3N5bWJvbCcgPyBTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nIDogbnVsbDtcbnZhciBoYXNTaGFtbWVkU3ltYm9scyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gJ29iamVjdCc7XG52YXIgaXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxudmFyIGdQTyA9ICh0eXBlb2YgUmVmbGVjdCA9PT0gJ2Z1bmN0aW9uJyA/IFJlZmxlY3QuZ2V0UHJvdG90eXBlT2YgOiBPYmplY3QuZ2V0UHJvdG90eXBlT2YpIHx8IChcbiAgICBbXS5fX3Byb3RvX18gPT09IEFycmF5LnByb3RvdHlwZSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXByb3RvXG4gICAgICAgID8gZnVuY3Rpb24gKE8pIHtcbiAgICAgICAgICAgIHJldHVybiBPLl9fcHJvdG9fXzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wcm90b1xuICAgICAgICB9XG4gICAgICAgIDogbnVsbFxuKTtcblxudmFyIGluc3BlY3RDdXN0b20gPSByZXF1aXJlKCcuL3V0aWwuaW5zcGVjdCcpLmN1c3RvbTtcbnZhciBpbnNwZWN0U3ltYm9sID0gaW5zcGVjdEN1c3RvbSAmJiBpc1N5bWJvbChpbnNwZWN0Q3VzdG9tKSA/IGluc3BlY3RDdXN0b20gOiBudWxsO1xudmFyIHRvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnICE9PSAndW5kZWZpbmVkJyA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IG51bGw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5zcGVjdF8ob2JqLCBvcHRpb25zLCBkZXB0aCwgc2Vlbikge1xuICAgIHZhciBvcHRzID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIGlmIChoYXMob3B0cywgJ3F1b3RlU3R5bGUnKSAmJiAob3B0cy5xdW90ZVN0eWxlICE9PSAnc2luZ2xlJyAmJiBvcHRzLnF1b3RlU3R5bGUgIT09ICdkb3VibGUnKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gXCJxdW90ZVN0eWxlXCIgbXVzdCBiZSBcInNpbmdsZVwiIG9yIFwiZG91YmxlXCInKTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgICBoYXMob3B0cywgJ21heFN0cmluZ0xlbmd0aCcpICYmICh0eXBlb2Ygb3B0cy5tYXhTdHJpbmdMZW5ndGggPT09ICdudW1iZXInXG4gICAgICAgICAgICA/IG9wdHMubWF4U3RyaW5nTGVuZ3RoIDwgMCAmJiBvcHRzLm1heFN0cmluZ0xlbmd0aCAhPT0gSW5maW5pdHlcbiAgICAgICAgICAgIDogb3B0cy5tYXhTdHJpbmdMZW5ndGggIT09IG51bGxcbiAgICAgICAgKVxuICAgICkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gXCJtYXhTdHJpbmdMZW5ndGhcIiwgaWYgcHJvdmlkZWQsIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyLCBJbmZpbml0eSwgb3IgYG51bGxgJyk7XG4gICAgfVxuICAgIHZhciBjdXN0b21JbnNwZWN0ID0gaGFzKG9wdHMsICdjdXN0b21JbnNwZWN0JykgPyBvcHRzLmN1c3RvbUluc3BlY3QgOiB0cnVlO1xuICAgIGlmICh0eXBlb2YgY3VzdG9tSW5zcGVjdCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBcImN1c3RvbUluc3BlY3RcIiwgaWYgcHJvdmlkZWQsIG11c3QgYmUgYHRydWVgIG9yIGBmYWxzZWAnKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAgIGhhcyhvcHRzLCAnaW5kZW50JylcbiAgICAgICAgJiYgb3B0cy5pbmRlbnQgIT09IG51bGxcbiAgICAgICAgJiYgb3B0cy5pbmRlbnQgIT09ICdcXHQnXG4gICAgICAgICYmICEocGFyc2VJbnQob3B0cy5pbmRlbnQsIDEwKSA9PT0gb3B0cy5pbmRlbnQgJiYgb3B0cy5pbmRlbnQgPiAwKVxuICAgICkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb25zIFwiaW5kZW50XCIgbXVzdCBiZSBcIlxcXFx0XCIsIGFuIGludGVnZXIgPiAwLCBvciBgbnVsbGAnKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuICd1bmRlZmluZWQnO1xuICAgIH1cbiAgICBpZiAob2JqID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgcmV0dXJuIG9iaiA/ICd0cnVlJyA6ICdmYWxzZSc7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBpbnNwZWN0U3RyaW5nKG9iaiwgb3B0cyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnbnVtYmVyJykge1xuICAgICAgICBpZiAob2JqID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gSW5maW5pdHkgLyBvYmogPiAwID8gJzAnIDogJy0wJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU3RyaW5nKG9iaik7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnYmlnaW50Jykge1xuICAgICAgICByZXR1cm4gU3RyaW5nKG9iaikgKyAnbic7XG4gICAgfVxuXG4gICAgdmFyIG1heERlcHRoID0gdHlwZW9mIG9wdHMuZGVwdGggPT09ICd1bmRlZmluZWQnID8gNSA6IG9wdHMuZGVwdGg7XG4gICAgaWYgKHR5cGVvZiBkZXB0aCA9PT0gJ3VuZGVmaW5lZCcpIHsgZGVwdGggPSAwOyB9XG4gICAgaWYgKGRlcHRoID49IG1heERlcHRoICYmIG1heERlcHRoID4gMCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gaXNBcnJheShvYmopID8gJ1tBcnJheV0nIDogJ1tPYmplY3RdJztcbiAgICB9XG5cbiAgICB2YXIgaW5kZW50ID0gZ2V0SW5kZW50KG9wdHMsIGRlcHRoKTtcblxuICAgIGlmICh0eXBlb2Ygc2VlbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc2VlbiA9IFtdO1xuICAgIH0gZWxzZSBpZiAoaW5kZXhPZihzZWVuLCBvYmopID49IDApIHtcbiAgICAgICAgcmV0dXJuICdbQ2lyY3VsYXJdJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnNwZWN0KHZhbHVlLCBmcm9tLCBub0luZGVudCkge1xuICAgICAgICBpZiAoZnJvbSkge1xuICAgICAgICAgICAgc2VlbiA9IHNlZW4uc2xpY2UoKTtcbiAgICAgICAgICAgIHNlZW4ucHVzaChmcm9tKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9JbmRlbnQpIHtcbiAgICAgICAgICAgIHZhciBuZXdPcHRzID0ge1xuICAgICAgICAgICAgICAgIGRlcHRoOiBvcHRzLmRlcHRoXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGhhcyhvcHRzLCAncXVvdGVTdHlsZScpKSB7XG4gICAgICAgICAgICAgICAgbmV3T3B0cy5xdW90ZVN0eWxlID0gb3B0cy5xdW90ZVN0eWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluc3BlY3RfKHZhbHVlLCBuZXdPcHRzLCBkZXB0aCArIDEsIHNlZW4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnNwZWN0Xyh2YWx1ZSwgb3B0cywgZGVwdGggKyAxLCBzZWVuKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgbmFtZSA9IG5hbWVPZihvYmopO1xuICAgICAgICB2YXIga2V5cyA9IGFyck9iaktleXMob2JqLCBpbnNwZWN0KTtcbiAgICAgICAgcmV0dXJuICdbRnVuY3Rpb24nICsgKG5hbWUgPyAnOiAnICsgbmFtZSA6ICcgKGFub255bW91cyknKSArICddJyArIChrZXlzLmxlbmd0aCA+IDAgPyAnIHsgJyArIGtleXMuam9pbignLCAnKSArICcgfScgOiAnJyk7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChvYmopKSB7XG4gICAgICAgIHZhciBzeW1TdHJpbmcgPSBoYXNTaGFtbWVkU3ltYm9scyA/IFN0cmluZyhvYmopLnJlcGxhY2UoL14oU3ltYm9sXFwoLipcXCkpX1teKV0qJC8sICckMScpIDogc3ltVG9TdHJpbmcuY2FsbChvYmopO1xuICAgICAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgIWhhc1NoYW1tZWRTeW1ib2xzID8gbWFya0JveGVkKHN5bVN0cmluZykgOiBzeW1TdHJpbmc7XG4gICAgfVxuICAgIGlmIChpc0VsZW1lbnQob2JqKSkge1xuICAgICAgICB2YXIgcyA9ICc8JyArIFN0cmluZyhvYmoubm9kZU5hbWUpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHZhciBhdHRycyA9IG9iai5hdHRyaWJ1dGVzIHx8IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGF0dHJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzICs9ICcgJyArIGF0dHJzW2ldLm5hbWUgKyAnPScgKyB3cmFwUXVvdGVzKHF1b3RlKGF0dHJzW2ldLnZhbHVlKSwgJ2RvdWJsZScsIG9wdHMpO1xuICAgICAgICB9XG4gICAgICAgIHMgKz0gJz4nO1xuICAgICAgICBpZiAob2JqLmNoaWxkTm9kZXMgJiYgb2JqLmNoaWxkTm9kZXMubGVuZ3RoKSB7IHMgKz0gJy4uLic7IH1cbiAgICAgICAgcyArPSAnPC8nICsgU3RyaW5nKG9iai5ub2RlTmFtZSkudG9Mb3dlckNhc2UoKSArICc+JztcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfVxuICAgIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgICAgaWYgKG9iai5sZW5ndGggPT09IDApIHsgcmV0dXJuICdbXSc7IH1cbiAgICAgICAgdmFyIHhzID0gYXJyT2JqS2V5cyhvYmosIGluc3BlY3QpO1xuICAgICAgICBpZiAoaW5kZW50ICYmICFzaW5nbGVMaW5lVmFsdWVzKHhzKSkge1xuICAgICAgICAgICAgcmV0dXJuICdbJyArIGluZGVudGVkSm9pbih4cywgaW5kZW50KSArICddJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ1sgJyArIHhzLmpvaW4oJywgJykgKyAnIF0nO1xuICAgIH1cbiAgICBpZiAoaXNFcnJvcihvYmopKSB7XG4gICAgICAgIHZhciBwYXJ0cyA9IGFyck9iaktleXMob2JqLCBpbnNwZWN0KTtcbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gJ1snICsgU3RyaW5nKG9iaikgKyAnXSc7IH1cbiAgICAgICAgcmV0dXJuICd7IFsnICsgU3RyaW5nKG9iaikgKyAnXSAnICsgcGFydHMuam9pbignLCAnKSArICcgfSc7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBjdXN0b21JbnNwZWN0KSB7XG4gICAgICAgIGlmIChpbnNwZWN0U3ltYm9sICYmIHR5cGVvZiBvYmpbaW5zcGVjdFN5bWJvbF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBvYmpbaW5zcGVjdFN5bWJvbF0oKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqLmluc3BlY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBvYmouaW5zcGVjdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChpc01hcChvYmopKSB7XG4gICAgICAgIHZhciBtYXBQYXJ0cyA9IFtdO1xuICAgICAgICBtYXBGb3JFYWNoLmNhbGwob2JqLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgbWFwUGFydHMucHVzaChpbnNwZWN0KGtleSwgb2JqLCB0cnVlKSArICcgPT4gJyArIGluc3BlY3QodmFsdWUsIG9iaikpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb25PZignTWFwJywgbWFwU2l6ZS5jYWxsKG9iaiksIG1hcFBhcnRzLCBpbmRlbnQpO1xuICAgIH1cbiAgICBpZiAoaXNTZXQob2JqKSkge1xuICAgICAgICB2YXIgc2V0UGFydHMgPSBbXTtcbiAgICAgICAgc2V0Rm9yRWFjaC5jYWxsKG9iaiwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBzZXRQYXJ0cy5wdXNoKGluc3BlY3QodmFsdWUsIG9iaikpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb25PZignU2V0Jywgc2V0U2l6ZS5jYWxsKG9iaiksIHNldFBhcnRzLCBpbmRlbnQpO1xuICAgIH1cbiAgICBpZiAoaXNXZWFrTWFwKG9iaikpIHtcbiAgICAgICAgcmV0dXJuIHdlYWtDb2xsZWN0aW9uT2YoJ1dlYWtNYXAnKTtcbiAgICB9XG4gICAgaWYgKGlzV2Vha1NldChvYmopKSB7XG4gICAgICAgIHJldHVybiB3ZWFrQ29sbGVjdGlvbk9mKCdXZWFrU2V0Jyk7XG4gICAgfVxuICAgIGlmIChpc1dlYWtSZWYob2JqKSkge1xuICAgICAgICByZXR1cm4gd2Vha0NvbGxlY3Rpb25PZignV2Vha1JlZicpO1xuICAgIH1cbiAgICBpZiAoaXNOdW1iZXIob2JqKSkge1xuICAgICAgICByZXR1cm4gbWFya0JveGVkKGluc3BlY3QoTnVtYmVyKG9iaikpKTtcbiAgICB9XG4gICAgaWYgKGlzQmlnSW50KG9iaikpIHtcbiAgICAgICAgcmV0dXJuIG1hcmtCb3hlZChpbnNwZWN0KGJpZ0ludFZhbHVlT2YuY2FsbChvYmopKSk7XG4gICAgfVxuICAgIGlmIChpc0Jvb2xlYW4ob2JqKSkge1xuICAgICAgICByZXR1cm4gbWFya0JveGVkKGJvb2xlYW5WYWx1ZU9mLmNhbGwob2JqKSk7XG4gICAgfVxuICAgIGlmIChpc1N0cmluZyhvYmopKSB7XG4gICAgICAgIHJldHVybiBtYXJrQm94ZWQoaW5zcGVjdChTdHJpbmcob2JqKSkpO1xuICAgIH1cbiAgICBpZiAoIWlzRGF0ZShvYmopICYmICFpc1JlZ0V4cChvYmopKSB7XG4gICAgICAgIHZhciB5cyA9IGFyck9iaktleXMob2JqLCBpbnNwZWN0KTtcbiAgICAgICAgdmFyIGlzUGxhaW5PYmplY3QgPSBnUE8gPyBnUE8ob2JqKSA9PT0gT2JqZWN0LnByb3RvdHlwZSA6IG9iaiBpbnN0YW5jZW9mIE9iamVjdCB8fCBvYmouY29uc3RydWN0b3IgPT09IE9iamVjdDtcbiAgICAgICAgdmFyIHByb3RvVGFnID0gb2JqIGluc3RhbmNlb2YgT2JqZWN0ID8gJycgOiAnbnVsbCBwcm90b3R5cGUnO1xuICAgICAgICB2YXIgc3RyaW5nVGFnID0gIWlzUGxhaW5PYmplY3QgJiYgdG9TdHJpbmdUYWcgJiYgT2JqZWN0KG9iaikgPT09IG9iaiAmJiB0b1N0cmluZ1RhZyBpbiBvYmogPyB0b1N0cihvYmopLnNsaWNlKDgsIC0xKSA6IHByb3RvVGFnID8gJ09iamVjdCcgOiAnJztcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9yVGFnID0gaXNQbGFpbk9iamVjdCB8fCB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yICE9PSAnZnVuY3Rpb24nID8gJycgOiBvYmouY29uc3RydWN0b3IubmFtZSA/IG9iai5jb25zdHJ1Y3Rvci5uYW1lICsgJyAnIDogJyc7XG4gICAgICAgIHZhciB0YWcgPSBjb25zdHJ1Y3RvclRhZyArIChzdHJpbmdUYWcgfHwgcHJvdG9UYWcgPyAnWycgKyBbXS5jb25jYXQoc3RyaW5nVGFnIHx8IFtdLCBwcm90b1RhZyB8fCBbXSkuam9pbignOiAnKSArICddICcgOiAnJyk7XG4gICAgICAgIGlmICh5cy5sZW5ndGggPT09IDApIHsgcmV0dXJuIHRhZyArICd7fSc7IH1cbiAgICAgICAgaWYgKGluZGVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRhZyArICd7JyArIGluZGVudGVkSm9pbih5cywgaW5kZW50KSArICd9JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFnICsgJ3sgJyArIHlzLmpvaW4oJywgJykgKyAnIH0nO1xuICAgIH1cbiAgICByZXR1cm4gU3RyaW5nKG9iaik7XG59O1xuXG5mdW5jdGlvbiB3cmFwUXVvdGVzKHMsIGRlZmF1bHRTdHlsZSwgb3B0cykge1xuICAgIHZhciBxdW90ZUNoYXIgPSAob3B0cy5xdW90ZVN0eWxlIHx8IGRlZmF1bHRTdHlsZSkgPT09ICdkb3VibGUnID8gJ1wiJyA6IFwiJ1wiO1xuICAgIHJldHVybiBxdW90ZUNoYXIgKyBzICsgcXVvdGVDaGFyO1xufVxuXG5mdW5jdGlvbiBxdW90ZShzKSB7XG4gICAgcmV0dXJuIFN0cmluZyhzKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG59XG5cbmZ1bmN0aW9uIGlzQXJyYXkob2JqKSB7IHJldHVybiB0b1N0cihvYmopID09PSAnW29iamVjdCBBcnJheV0nICYmICghdG9TdHJpbmdUYWcgfHwgISh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiB0b1N0cmluZ1RhZyBpbiBvYmopKTsgfVxuZnVuY3Rpb24gaXNEYXRlKG9iaikgeyByZXR1cm4gdG9TdHIob2JqKSA9PT0gJ1tvYmplY3QgRGF0ZV0nICYmICghdG9TdHJpbmdUYWcgfHwgISh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiB0b1N0cmluZ1RhZyBpbiBvYmopKTsgfVxuZnVuY3Rpb24gaXNSZWdFeHAob2JqKSB7IHJldHVybiB0b1N0cihvYmopID09PSAnW29iamVjdCBSZWdFeHBdJyAmJiAoIXRvU3RyaW5nVGFnIHx8ICEodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgdG9TdHJpbmdUYWcgaW4gb2JqKSk7IH1cbmZ1bmN0aW9uIGlzRXJyb3Iob2JqKSB7IHJldHVybiB0b1N0cihvYmopID09PSAnW29iamVjdCBFcnJvcl0nICYmICghdG9TdHJpbmdUYWcgfHwgISh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiB0b1N0cmluZ1RhZyBpbiBvYmopKTsgfVxuZnVuY3Rpb24gaXNTdHJpbmcob2JqKSB7IHJldHVybiB0b1N0cihvYmopID09PSAnW29iamVjdCBTdHJpbmddJyAmJiAoIXRvU3RyaW5nVGFnIHx8ICEodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgdG9TdHJpbmdUYWcgaW4gb2JqKSk7IH1cbmZ1bmN0aW9uIGlzTnVtYmVyKG9iaikgeyByZXR1cm4gdG9TdHIob2JqKSA9PT0gJ1tvYmplY3QgTnVtYmVyXScgJiYgKCF0b1N0cmluZ1RhZyB8fCAhKHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIHRvU3RyaW5nVGFnIGluIG9iaikpOyB9XG5mdW5jdGlvbiBpc0Jvb2xlYW4ob2JqKSB7IHJldHVybiB0b1N0cihvYmopID09PSAnW29iamVjdCBCb29sZWFuXScgJiYgKCF0b1N0cmluZ1RhZyB8fCAhKHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIHRvU3RyaW5nVGFnIGluIG9iaikpOyB9XG5cbi8vIFN5bWJvbCBhbmQgQmlnSW50IGRvIGhhdmUgU3ltYm9sLnRvU3RyaW5nVGFnIGJ5IHNwZWMsIHNvIHRoYXQgY2FuJ3QgYmUgdXNlZCB0byBlbGltaW5hdGUgZmFsc2UgcG9zaXRpdmVzXG5mdW5jdGlvbiBpc1N5bWJvbChvYmopIHtcbiAgICBpZiAoaGFzU2hhbW1lZFN5bWJvbHMpIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmogaW5zdGFuY2VvZiBTeW1ib2w7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnc3ltYm9sJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgIXN5bVRvU3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgc3ltVG9TdHJpbmcuY2FsbChvYmopO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaXNCaWdJbnQob2JqKSB7XG4gICAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgIWJpZ0ludFZhbHVlT2YpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBiaWdJbnRWYWx1ZU9mLmNhbGwob2JqKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbnZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5IHx8IGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSBpbiB0aGlzOyB9O1xuZnVuY3Rpb24gaGFzKG9iaiwga2V5KSB7XG4gICAgcmV0dXJuIGhhc093bi5jYWxsKG9iaiwga2V5KTtcbn1cblxuZnVuY3Rpb24gdG9TdHIob2JqKSB7XG4gICAgcmV0dXJuIG9iamVjdFRvU3RyaW5nLmNhbGwob2JqKTtcbn1cblxuZnVuY3Rpb24gbmFtZU9mKGYpIHtcbiAgICBpZiAoZi5uYW1lKSB7IHJldHVybiBmLm5hbWU7IH1cbiAgICB2YXIgbSA9IG1hdGNoLmNhbGwoZnVuY3Rpb25Ub1N0cmluZy5jYWxsKGYpLCAvXmZ1bmN0aW9uXFxzKihbXFx3JF0rKS8pO1xuICAgIGlmIChtKSB7IHJldHVybiBtWzFdOyB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGluZGV4T2YoeHMsIHgpIHtcbiAgICBpZiAoeHMuaW5kZXhPZikgeyByZXR1cm4geHMuaW5kZXhPZih4KTsgfVxuICAgIGZvciAodmFyIGkgPSAwLCBsID0geHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmICh4c1tpXSA9PT0geCkgeyByZXR1cm4gaTsgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG59XG5cbmZ1bmN0aW9uIGlzTWFwKHgpIHtcbiAgICBpZiAoIW1hcFNpemUgfHwgIXggfHwgdHlwZW9mIHggIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgbWFwU2l6ZS5jYWxsKHgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2V0U2l6ZS5jYWxsKHgpO1xuICAgICAgICB9IGNhdGNoIChzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geCBpbnN0YW5jZW9mIE1hcDsgLy8gY29yZS1qcyB3b3JrYXJvdW5kLCBwcmUtdjIuNS4wXG4gICAgfSBjYXRjaCAoZSkge31cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGlzV2Vha01hcCh4KSB7XG4gICAgaWYgKCF3ZWFrTWFwSGFzIHx8ICF4IHx8IHR5cGVvZiB4ICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIHdlYWtNYXBIYXMuY2FsbCh4LCB3ZWFrTWFwSGFzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHdlYWtTZXRIYXMuY2FsbCh4LCB3ZWFrU2V0SGFzKTtcbiAgICAgICAgfSBjYXRjaCAocykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHggaW5zdGFuY2VvZiBXZWFrTWFwOyAvLyBjb3JlLWpzIHdvcmthcm91bmQsIHByZS12Mi41LjBcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaXNXZWFrUmVmKHgpIHtcbiAgICBpZiAoIXdlYWtSZWZEZXJlZiB8fCAheCB8fCB0eXBlb2YgeCAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICB3ZWFrUmVmRGVyZWYuY2FsbCh4KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGlzU2V0KHgpIHtcbiAgICBpZiAoIXNldFNpemUgfHwgIXggfHwgdHlwZW9mIHggIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgc2V0U2l6ZS5jYWxsKHgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbWFwU2l6ZS5jYWxsKHgpO1xuICAgICAgICB9IGNhdGNoIChtKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geCBpbnN0YW5jZW9mIFNldDsgLy8gY29yZS1qcyB3b3JrYXJvdW5kLCBwcmUtdjIuNS4wXG4gICAgfSBjYXRjaCAoZSkge31cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGlzV2Vha1NldCh4KSB7XG4gICAgaWYgKCF3ZWFrU2V0SGFzIHx8ICF4IHx8IHR5cGVvZiB4ICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIHdlYWtTZXRIYXMuY2FsbCh4LCB3ZWFrU2V0SGFzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHdlYWtNYXBIYXMuY2FsbCh4LCB3ZWFrTWFwSGFzKTtcbiAgICAgICAgfSBjYXRjaCAocykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHggaW5zdGFuY2VvZiBXZWFrU2V0OyAvLyBjb3JlLWpzIHdvcmthcm91bmQsIHByZS12Mi41LjBcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaXNFbGVtZW50KHgpIHtcbiAgICBpZiAoIXggfHwgdHlwZW9mIHggIT09ICdvYmplY3QnKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIGlmICh0eXBlb2YgSFRNTEVsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHggaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHR5cGVvZiB4Lm5vZGVOYW1lID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgeC5nZXRBdHRyaWJ1dGUgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGluc3BlY3RTdHJpbmcoc3RyLCBvcHRzKSB7XG4gICAgaWYgKHN0ci5sZW5ndGggPiBvcHRzLm1heFN0cmluZ0xlbmd0aCkge1xuICAgICAgICB2YXIgcmVtYWluaW5nID0gc3RyLmxlbmd0aCAtIG9wdHMubWF4U3RyaW5nTGVuZ3RoO1xuICAgICAgICB2YXIgdHJhaWxlciA9ICcuLi4gJyArIHJlbWFpbmluZyArICcgbW9yZSBjaGFyYWN0ZXInICsgKHJlbWFpbmluZyA+IDEgPyAncycgOiAnJyk7XG4gICAgICAgIHJldHVybiBpbnNwZWN0U3RyaW5nKHN0ci5zbGljZSgwLCBvcHRzLm1heFN0cmluZ0xlbmd0aCksIG9wdHMpICsgdHJhaWxlcjtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRyb2wtcmVnZXhcbiAgICB2YXIgcyA9IHN0ci5yZXBsYWNlKC8oWydcXFxcXSkvZywgJ1xcXFwkMScpLnJlcGxhY2UoL1tcXHgwMC1cXHgxZl0vZywgbG93Ynl0ZSk7XG4gICAgcmV0dXJuIHdyYXBRdW90ZXMocywgJ3NpbmdsZScsIG9wdHMpO1xufVxuXG5mdW5jdGlvbiBsb3dieXRlKGMpIHtcbiAgICB2YXIgbiA9IGMuY2hhckNvZGVBdCgwKTtcbiAgICB2YXIgeCA9IHtcbiAgICAgICAgODogJ2InLFxuICAgICAgICA5OiAndCcsXG4gICAgICAgIDEwOiAnbicsXG4gICAgICAgIDEyOiAnZicsXG4gICAgICAgIDEzOiAncidcbiAgICB9W25dO1xuICAgIGlmICh4KSB7IHJldHVybiAnXFxcXCcgKyB4OyB9XG4gICAgcmV0dXJuICdcXFxceCcgKyAobiA8IDB4MTAgPyAnMCcgOiAnJykgKyBuLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBtYXJrQm94ZWQoc3RyKSB7XG4gICAgcmV0dXJuICdPYmplY3QoJyArIHN0ciArICcpJztcbn1cblxuZnVuY3Rpb24gd2Vha0NvbGxlY3Rpb25PZih0eXBlKSB7XG4gICAgcmV0dXJuIHR5cGUgKyAnIHsgPyB9Jztcbn1cblxuZnVuY3Rpb24gY29sbGVjdGlvbk9mKHR5cGUsIHNpemUsIGVudHJpZXMsIGluZGVudCkge1xuICAgIHZhciBqb2luZWRFbnRyaWVzID0gaW5kZW50ID8gaW5kZW50ZWRKb2luKGVudHJpZXMsIGluZGVudCkgOiBlbnRyaWVzLmpvaW4oJywgJyk7XG4gICAgcmV0dXJuIHR5cGUgKyAnICgnICsgc2l6ZSArICcpIHsnICsgam9pbmVkRW50cmllcyArICd9Jztcbn1cblxuZnVuY3Rpb24gc2luZ2xlTGluZVZhbHVlcyh4cykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGluZGV4T2YoeHNbaV0sICdcXG4nKSA+PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGdldEluZGVudChvcHRzLCBkZXB0aCkge1xuICAgIHZhciBiYXNlSW5kZW50O1xuICAgIGlmIChvcHRzLmluZGVudCA9PT0gJ1xcdCcpIHtcbiAgICAgICAgYmFzZUluZGVudCA9ICdcXHQnO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdHMuaW5kZW50ID09PSAnbnVtYmVyJyAmJiBvcHRzLmluZGVudCA+IDApIHtcbiAgICAgICAgYmFzZUluZGVudCA9IEFycmF5KG9wdHMuaW5kZW50ICsgMSkuam9pbignICcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBiYXNlOiBiYXNlSW5kZW50LFxuICAgICAgICBwcmV2OiBBcnJheShkZXB0aCArIDEpLmpvaW4oYmFzZUluZGVudClcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBpbmRlbnRlZEpvaW4oeHMsIGluZGVudCkge1xuICAgIGlmICh4cy5sZW5ndGggPT09IDApIHsgcmV0dXJuICcnOyB9XG4gICAgdmFyIGxpbmVKb2luZXIgPSAnXFxuJyArIGluZGVudC5wcmV2ICsgaW5kZW50LmJhc2U7XG4gICAgcmV0dXJuIGxpbmVKb2luZXIgKyB4cy5qb2luKCcsJyArIGxpbmVKb2luZXIpICsgJ1xcbicgKyBpbmRlbnQucHJldjtcbn1cblxuZnVuY3Rpb24gYXJyT2JqS2V5cyhvYmosIGluc3BlY3QpIHtcbiAgICB2YXIgaXNBcnIgPSBpc0FycmF5KG9iaik7XG4gICAgdmFyIHhzID0gW107XG4gICAgaWYgKGlzQXJyKSB7XG4gICAgICAgIHhzLmxlbmd0aCA9IG9iai5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB4c1tpXSA9IGhhcyhvYmosIGkpID8gaW5zcGVjdChvYmpbaV0sIG9iaikgOiAnJztcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgc3ltcyA9IHR5cGVvZiBnT1BTID09PSAnZnVuY3Rpb24nID8gZ09QUyhvYmopIDogW107XG4gICAgdmFyIHN5bU1hcDtcbiAgICBpZiAoaGFzU2hhbW1lZFN5bWJvbHMpIHtcbiAgICAgICAgc3ltTWFwID0ge307XG4gICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgc3ltcy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgc3ltTWFwWyckJyArIHN5bXNba11dID0gc3ltc1trXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgICBpZiAoIWhhcyhvYmosIGtleSkpIHsgY29udGludWU7IH0gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheCwgbm8tY29udGludWVcbiAgICAgICAgaWYgKGlzQXJyICYmIFN0cmluZyhOdW1iZXIoa2V5KSkgPT09IGtleSAmJiBrZXkgPCBvYmoubGVuZ3RoKSB7IGNvbnRpbnVlOyB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXgsIG5vLWNvbnRpbnVlXG4gICAgICAgIGlmIChoYXNTaGFtbWVkU3ltYm9scyAmJiBzeW1NYXBbJyQnICsga2V5XSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgICAgICAgLy8gdGhpcyBpcyB0byBwcmV2ZW50IHNoYW1tZWQgU3ltYm9scywgd2hpY2ggYXJlIHN0b3JlZCBhcyBzdHJpbmdzLCBmcm9tIGJlaW5nIGluY2x1ZGVkIGluIHRoZSBzdHJpbmcga2V5IHNlY3Rpb25cbiAgICAgICAgICAgIGNvbnRpbnVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4LCBuby1jb250aW51ZVxuICAgICAgICB9IGVsc2UgaWYgKCgvW15cXHckXS8pLnRlc3Qoa2V5KSkge1xuICAgICAgICAgICAgeHMucHVzaChpbnNwZWN0KGtleSwgb2JqKSArICc6ICcgKyBpbnNwZWN0KG9ialtrZXldLCBvYmopKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHhzLnB1c2goa2V5ICsgJzogJyArIGluc3BlY3Qob2JqW2tleV0sIG9iaikpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZ09QUyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHN5bXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChpc0VudW1lcmFibGUuY2FsbChvYmosIHN5bXNbal0pKSB7XG4gICAgICAgICAgICAgICAgeHMucHVzaCgnWycgKyBpbnNwZWN0KHN5bXNbal0pICsgJ106ICcgKyBpbnNwZWN0KG9ialtzeW1zW2pdXSwgb2JqKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHhzO1xufVxuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlcGxhY2UgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2U7XG52YXIgcGVyY2VudFR3ZW50aWVzID0gLyUyMC9nO1xuXG52YXIgRm9ybWF0ID0ge1xuICAgIFJGQzE3Mzg6ICdSRkMxNzM4JyxcbiAgICBSRkMzOTg2OiAnUkZDMzk4Nidcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgICdkZWZhdWx0JzogRm9ybWF0LlJGQzM5ODYsXG4gICAgZm9ybWF0dGVyczoge1xuICAgICAgICBSRkMxNzM4OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiByZXBsYWNlLmNhbGwodmFsdWUsIHBlcmNlbnRUd2VudGllcywgJysnKTtcbiAgICAgICAgfSxcbiAgICAgICAgUkZDMzk4NjogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgUkZDMTczODogRm9ybWF0LlJGQzE3MzgsXG4gICAgUkZDMzk4NjogRm9ybWF0LlJGQzM5ODZcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBzdHJpbmdpZnkgPSByZXF1aXJlKCcuL3N0cmluZ2lmeScpO1xudmFyIHBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZScpO1xudmFyIGZvcm1hdHMgPSByZXF1aXJlKCcuL2Zvcm1hdHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZm9ybWF0czogZm9ybWF0cyxcbiAgICBwYXJzZTogcGFyc2UsXG4gICAgc3RyaW5naWZ5OiBzdHJpbmdpZnlcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgICBhbGxvd0RvdHM6IGZhbHNlLFxuICAgIGFsbG93UHJvdG90eXBlczogZmFsc2UsXG4gICAgYWxsb3dTcGFyc2U6IGZhbHNlLFxuICAgIGFycmF5TGltaXQ6IDIwLFxuICAgIGNoYXJzZXQ6ICd1dGYtOCcsXG4gICAgY2hhcnNldFNlbnRpbmVsOiBmYWxzZSxcbiAgICBjb21tYTogZmFsc2UsXG4gICAgZGVjb2RlcjogdXRpbHMuZGVjb2RlLFxuICAgIGRlbGltaXRlcjogJyYnLFxuICAgIGRlcHRoOiA1LFxuICAgIGlnbm9yZVF1ZXJ5UHJlZml4OiBmYWxzZSxcbiAgICBpbnRlcnByZXROdW1lcmljRW50aXRpZXM6IGZhbHNlLFxuICAgIHBhcmFtZXRlckxpbWl0OiAxMDAwLFxuICAgIHBhcnNlQXJyYXlzOiB0cnVlLFxuICAgIHBsYWluT2JqZWN0czogZmFsc2UsXG4gICAgc3RyaWN0TnVsbEhhbmRsaW5nOiBmYWxzZVxufTtcblxudmFyIGludGVycHJldE51bWVyaWNFbnRpdGllcyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyYjKFxcZCspOy9nLCBmdW5jdGlvbiAoJDAsIG51bWJlclN0cikge1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChudW1iZXJTdHIsIDEwKSk7XG4gICAgfSk7XG59O1xuXG52YXIgcGFyc2VBcnJheVZhbHVlID0gZnVuY3Rpb24gKHZhbCwgb3B0aW9ucykge1xuICAgIGlmICh2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgJiYgb3B0aW9ucy5jb21tYSAmJiB2YWwuaW5kZXhPZignLCcpID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIHZhbC5zcGxpdCgnLCcpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWw7XG59O1xuXG4vLyBUaGlzIGlzIHdoYXQgYnJvd3NlcnMgd2lsbCBzdWJtaXQgd2hlbiB0aGUg4pyTIGNoYXJhY3RlciBvY2N1cnMgaW4gYW5cbi8vIGFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCBib2R5IGFuZCB0aGUgZW5jb2Rpbmcgb2YgdGhlIHBhZ2UgY29udGFpbmluZ1xuLy8gdGhlIGZvcm0gaXMgaXNvLTg4NTktMSwgb3Igd2hlbiB0aGUgc3VibWl0dGVkIGZvcm0gaGFzIGFuIGFjY2VwdC1jaGFyc2V0XG4vLyBhdHRyaWJ1dGUgb2YgaXNvLTg4NTktMS4gUHJlc3VtYWJseSBhbHNvIHdpdGggb3RoZXIgY2hhcnNldHMgdGhhdCBkbyBub3QgY29udGFpblxuLy8gdGhlIOKckyBjaGFyYWN0ZXIsIHN1Y2ggYXMgdXMtYXNjaWkuXG52YXIgaXNvU2VudGluZWwgPSAndXRmOD0lMjYlMjMxMDAwMyUzQic7IC8vIGVuY29kZVVSSUNvbXBvbmVudCgnJiMxMDAwMzsnKVxuXG4vLyBUaGVzZSBhcmUgdGhlIHBlcmNlbnQtZW5jb2RlZCB1dGYtOCBvY3RldHMgcmVwcmVzZW50aW5nIGEgY2hlY2ttYXJrLCBpbmRpY2F0aW5nIHRoYXQgdGhlIHJlcXVlc3QgYWN0dWFsbHkgaXMgdXRmLTggZW5jb2RlZC5cbnZhciBjaGFyc2V0U2VudGluZWwgPSAndXRmOD0lRTIlOUMlOTMnOyAvLyBlbmNvZGVVUklDb21wb25lbnQoJ+KckycpXG5cbnZhciBwYXJzZVZhbHVlcyA9IGZ1bmN0aW9uIHBhcnNlUXVlcnlTdHJpbmdWYWx1ZXMoc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIG9iaiA9IHsgX19wcm90b19fOiBudWxsIH07XG5cbiAgICB2YXIgY2xlYW5TdHIgPSBvcHRpb25zLmlnbm9yZVF1ZXJ5UHJlZml4ID8gc3RyLnJlcGxhY2UoL15cXD8vLCAnJykgOiBzdHI7XG4gICAgdmFyIGxpbWl0ID0gb3B0aW9ucy5wYXJhbWV0ZXJMaW1pdCA9PT0gSW5maW5pdHkgPyB1bmRlZmluZWQgOiBvcHRpb25zLnBhcmFtZXRlckxpbWl0O1xuICAgIHZhciBwYXJ0cyA9IGNsZWFuU3RyLnNwbGl0KG9wdGlvbnMuZGVsaW1pdGVyLCBsaW1pdCk7XG4gICAgdmFyIHNraXBJbmRleCA9IC0xOyAvLyBLZWVwIHRyYWNrIG9mIHdoZXJlIHRoZSB1dGY4IHNlbnRpbmVsIHdhcyBmb3VuZFxuICAgIHZhciBpO1xuXG4gICAgdmFyIGNoYXJzZXQgPSBvcHRpb25zLmNoYXJzZXQ7XG4gICAgaWYgKG9wdGlvbnMuY2hhcnNldFNlbnRpbmVsKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKHBhcnRzW2ldLmluZGV4T2YoJ3V0Zjg9JykgPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAocGFydHNbaV0gPT09IGNoYXJzZXRTZW50aW5lbCkge1xuICAgICAgICAgICAgICAgICAgICBjaGFyc2V0ID0gJ3V0Zi04JztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnRzW2ldID09PSBpc29TZW50aW5lbCkge1xuICAgICAgICAgICAgICAgICAgICBjaGFyc2V0ID0gJ2lzby04ODU5LTEnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBza2lwSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIGkgPSBwYXJ0cy5sZW5ndGg7IC8vIFRoZSBlc2xpbnQgc2V0dGluZ3MgZG8gbm90IGFsbG93IGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmIChpID09PSBza2lwSW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwYXJ0ID0gcGFydHNbaV07XG5cbiAgICAgICAgdmFyIGJyYWNrZXRFcXVhbHNQb3MgPSBwYXJ0LmluZGV4T2YoJ109Jyk7XG4gICAgICAgIHZhciBwb3MgPSBicmFja2V0RXF1YWxzUG9zID09PSAtMSA/IHBhcnQuaW5kZXhPZignPScpIDogYnJhY2tldEVxdWFsc1BvcyArIDE7XG5cbiAgICAgICAgdmFyIGtleSwgdmFsO1xuICAgICAgICBpZiAocG9zID09PSAtMSkge1xuICAgICAgICAgICAga2V5ID0gb3B0aW9ucy5kZWNvZGVyKHBhcnQsIGRlZmF1bHRzLmRlY29kZXIsIGNoYXJzZXQsICdrZXknKTtcbiAgICAgICAgICAgIHZhbCA9IG9wdGlvbnMuc3RyaWN0TnVsbEhhbmRsaW5nID8gbnVsbCA6ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAga2V5ID0gb3B0aW9ucy5kZWNvZGVyKHBhcnQuc2xpY2UoMCwgcG9zKSwgZGVmYXVsdHMuZGVjb2RlciwgY2hhcnNldCwgJ2tleScpO1xuICAgICAgICAgICAgdmFsID0gdXRpbHMubWF5YmVNYXAoXG4gICAgICAgICAgICAgICAgcGFyc2VBcnJheVZhbHVlKHBhcnQuc2xpY2UocG9zICsgMSksIG9wdGlvbnMpLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlbmNvZGVkVmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmRlY29kZXIoZW5jb2RlZFZhbCwgZGVmYXVsdHMuZGVjb2RlciwgY2hhcnNldCwgJ3ZhbHVlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWwgJiYgb3B0aW9ucy5pbnRlcnByZXROdW1lcmljRW50aXRpZXMgJiYgY2hhcnNldCA9PT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgICAgICB2YWwgPSBpbnRlcnByZXROdW1lcmljRW50aXRpZXModmFsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJ0LmluZGV4T2YoJ1tdPScpID4gLTEpIHtcbiAgICAgICAgICAgIHZhbCA9IGlzQXJyYXkodmFsKSA/IFt2YWxdIDogdmFsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhcy5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICAgICAgb2JqW2tleV0gPSB1dGlscy5jb21iaW5lKG9ialtrZXldLCB2YWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqW2tleV0gPSB2YWw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufTtcblxudmFyIHBhcnNlT2JqZWN0ID0gZnVuY3Rpb24gKGNoYWluLCB2YWwsIG9wdGlvbnMsIHZhbHVlc1BhcnNlZCkge1xuICAgIHZhciBsZWFmID0gdmFsdWVzUGFyc2VkID8gdmFsIDogcGFyc2VBcnJheVZhbHVlKHZhbCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBpID0gY2hhaW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIG9iajtcbiAgICAgICAgdmFyIHJvb3QgPSBjaGFpbltpXTtcblxuICAgICAgICBpZiAocm9vdCA9PT0gJ1tdJyAmJiBvcHRpb25zLnBhcnNlQXJyYXlzKSB7XG4gICAgICAgICAgICBvYmogPSBbXS5jb25jYXQobGVhZik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYmogPSBvcHRpb25zLnBsYWluT2JqZWN0cyA/IE9iamVjdC5jcmVhdGUobnVsbCkgOiB7fTtcbiAgICAgICAgICAgIHZhciBjbGVhblJvb3QgPSByb290LmNoYXJBdCgwKSA9PT0gJ1snICYmIHJvb3QuY2hhckF0KHJvb3QubGVuZ3RoIC0gMSkgPT09ICddJyA/IHJvb3Quc2xpY2UoMSwgLTEpIDogcm9vdDtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KGNsZWFuUm9vdCwgMTApO1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLnBhcnNlQXJyYXlzICYmIGNsZWFuUm9vdCA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBvYmogPSB7IDA6IGxlYWYgfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgIWlzTmFOKGluZGV4KVxuICAgICAgICAgICAgICAgICYmIHJvb3QgIT09IGNsZWFuUm9vdFxuICAgICAgICAgICAgICAgICYmIFN0cmluZyhpbmRleCkgPT09IGNsZWFuUm9vdFxuICAgICAgICAgICAgICAgICYmIGluZGV4ID49IDBcbiAgICAgICAgICAgICAgICAmJiAob3B0aW9ucy5wYXJzZUFycmF5cyAmJiBpbmRleCA8PSBvcHRpb25zLmFycmF5TGltaXQpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBvYmogPSBbXTtcbiAgICAgICAgICAgICAgICBvYmpbaW5kZXhdID0gbGVhZjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2xlYW5Sb290ICE9PSAnX19wcm90b19fJykge1xuICAgICAgICAgICAgICAgIG9ialtjbGVhblJvb3RdID0gbGVhZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxlYWYgPSBvYmo7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlYWY7XG59O1xuXG52YXIgcGFyc2VLZXlzID0gZnVuY3Rpb24gcGFyc2VRdWVyeVN0cmluZ0tleXMoZ2l2ZW5LZXksIHZhbCwgb3B0aW9ucywgdmFsdWVzUGFyc2VkKSB7XG4gICAgaWYgKCFnaXZlbktleSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVHJhbnNmb3JtIGRvdCBub3RhdGlvbiB0byBicmFja2V0IG5vdGF0aW9uXG4gICAgdmFyIGtleSA9IG9wdGlvbnMuYWxsb3dEb3RzID8gZ2l2ZW5LZXkucmVwbGFjZSgvXFwuKFteLltdKykvZywgJ1skMV0nKSA6IGdpdmVuS2V5O1xuXG4gICAgLy8gVGhlIHJlZ2V4IGNodW5rc1xuXG4gICAgdmFyIGJyYWNrZXRzID0gLyhcXFtbXltcXF1dKl0pLztcbiAgICB2YXIgY2hpbGQgPSAvKFxcW1teW1xcXV0qXSkvZztcblxuICAgIC8vIEdldCB0aGUgcGFyZW50XG5cbiAgICB2YXIgc2VnbWVudCA9IG9wdGlvbnMuZGVwdGggPiAwICYmIGJyYWNrZXRzLmV4ZWMoa2V5KTtcbiAgICB2YXIgcGFyZW50ID0gc2VnbWVudCA/IGtleS5zbGljZSgwLCBzZWdtZW50LmluZGV4KSA6IGtleTtcblxuICAgIC8vIFN0YXNoIHRoZSBwYXJlbnQgaWYgaXQgZXhpc3RzXG5cbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgLy8gSWYgd2UgYXJlbid0IHVzaW5nIHBsYWluIG9iamVjdHMsIG9wdGlvbmFsbHkgcHJlZml4IGtleXMgdGhhdCB3b3VsZCBvdmVyd3JpdGUgb2JqZWN0IHByb3RvdHlwZSBwcm9wZXJ0aWVzXG4gICAgICAgIGlmICghb3B0aW9ucy5wbGFpbk9iamVjdHMgJiYgaGFzLmNhbGwoT2JqZWN0LnByb3RvdHlwZSwgcGFyZW50KSkge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmFsbG93UHJvdG90eXBlcykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGtleXMucHVzaChwYXJlbnQpO1xuICAgIH1cblxuICAgIC8vIExvb3AgdGhyb3VnaCBjaGlsZHJlbiBhcHBlbmRpbmcgdG8gdGhlIGFycmF5IHVudGlsIHdlIGhpdCBkZXB0aFxuXG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChvcHRpb25zLmRlcHRoID4gMCAmJiAoc2VnbWVudCA9IGNoaWxkLmV4ZWMoa2V5KSkgIT09IG51bGwgJiYgaSA8IG9wdGlvbnMuZGVwdGgpIHtcbiAgICAgICAgaSArPSAxO1xuICAgICAgICBpZiAoIW9wdGlvbnMucGxhaW5PYmplY3RzICYmIGhhcy5jYWxsKE9iamVjdC5wcm90b3R5cGUsIHNlZ21lbnRbMV0uc2xpY2UoMSwgLTEpKSkge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmFsbG93UHJvdG90eXBlcykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBrZXlzLnB1c2goc2VnbWVudFsxXSk7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlcmUncyBhIHJlbWFpbmRlciwganVzdCBhZGQgd2hhdGV2ZXIgaXMgbGVmdFxuXG4gICAgaWYgKHNlZ21lbnQpIHtcbiAgICAgICAga2V5cy5wdXNoKCdbJyArIGtleS5zbGljZShzZWdtZW50LmluZGV4KSArICddJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlT2JqZWN0KGtleXMsIHZhbCwgb3B0aW9ucywgdmFsdWVzUGFyc2VkKTtcbn07XG5cbnZhciBub3JtYWxpemVQYXJzZU9wdGlvbnMgPSBmdW5jdGlvbiBub3JtYWxpemVQYXJzZU9wdGlvbnMob3B0cykge1xuICAgIGlmICghb3B0cykge1xuICAgICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuZGVjb2RlciAhPT0gbnVsbCAmJiBvcHRzLmRlY29kZXIgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb3B0cy5kZWNvZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0RlY29kZXIgaGFzIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHRzLmNoYXJzZXQgIT09ICd1bmRlZmluZWQnICYmIG9wdHMuY2hhcnNldCAhPT0gJ3V0Zi04JyAmJiBvcHRzLmNoYXJzZXQgIT09ICdpc28tODg1OS0xJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgY2hhcnNldCBvcHRpb24gbXVzdCBiZSBlaXRoZXIgdXRmLTgsIGlzby04ODU5LTEsIG9yIHVuZGVmaW5lZCcpO1xuICAgIH1cbiAgICB2YXIgY2hhcnNldCA9IHR5cGVvZiBvcHRzLmNoYXJzZXQgPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdHMuY2hhcnNldCA6IG9wdHMuY2hhcnNldDtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGFsbG93RG90czogdHlwZW9mIG9wdHMuYWxsb3dEb3RzID09PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRzLmFsbG93RG90cyA6ICEhb3B0cy5hbGxvd0RvdHMsXG4gICAgICAgIGFsbG93UHJvdG90eXBlczogdHlwZW9mIG9wdHMuYWxsb3dQcm90b3R5cGVzID09PSAnYm9vbGVhbicgPyBvcHRzLmFsbG93UHJvdG90eXBlcyA6IGRlZmF1bHRzLmFsbG93UHJvdG90eXBlcyxcbiAgICAgICAgYWxsb3dTcGFyc2U6IHR5cGVvZiBvcHRzLmFsbG93U3BhcnNlID09PSAnYm9vbGVhbicgPyBvcHRzLmFsbG93U3BhcnNlIDogZGVmYXVsdHMuYWxsb3dTcGFyc2UsXG4gICAgICAgIGFycmF5TGltaXQ6IHR5cGVvZiBvcHRzLmFycmF5TGltaXQgPT09ICdudW1iZXInID8gb3B0cy5hcnJheUxpbWl0IDogZGVmYXVsdHMuYXJyYXlMaW1pdCxcbiAgICAgICAgY2hhcnNldDogY2hhcnNldCxcbiAgICAgICAgY2hhcnNldFNlbnRpbmVsOiB0eXBlb2Ygb3B0cy5jaGFyc2V0U2VudGluZWwgPT09ICdib29sZWFuJyA/IG9wdHMuY2hhcnNldFNlbnRpbmVsIDogZGVmYXVsdHMuY2hhcnNldFNlbnRpbmVsLFxuICAgICAgICBjb21tYTogdHlwZW9mIG9wdHMuY29tbWEgPT09ICdib29sZWFuJyA/IG9wdHMuY29tbWEgOiBkZWZhdWx0cy5jb21tYSxcbiAgICAgICAgZGVjb2RlcjogdHlwZW9mIG9wdHMuZGVjb2RlciA9PT0gJ2Z1bmN0aW9uJyA/IG9wdHMuZGVjb2RlciA6IGRlZmF1bHRzLmRlY29kZXIsXG4gICAgICAgIGRlbGltaXRlcjogdHlwZW9mIG9wdHMuZGVsaW1pdGVyID09PSAnc3RyaW5nJyB8fCB1dGlscy5pc1JlZ0V4cChvcHRzLmRlbGltaXRlcikgPyBvcHRzLmRlbGltaXRlciA6IGRlZmF1bHRzLmRlbGltaXRlcixcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWltcGxpY2l0LWNvZXJjaW9uLCBuby1leHRyYS1wYXJlbnNcbiAgICAgICAgZGVwdGg6ICh0eXBlb2Ygb3B0cy5kZXB0aCA9PT0gJ251bWJlcicgfHwgb3B0cy5kZXB0aCA9PT0gZmFsc2UpID8gK29wdHMuZGVwdGggOiBkZWZhdWx0cy5kZXB0aCxcbiAgICAgICAgaWdub3JlUXVlcnlQcmVmaXg6IG9wdHMuaWdub3JlUXVlcnlQcmVmaXggPT09IHRydWUsXG4gICAgICAgIGludGVycHJldE51bWVyaWNFbnRpdGllczogdHlwZW9mIG9wdHMuaW50ZXJwcmV0TnVtZXJpY0VudGl0aWVzID09PSAnYm9vbGVhbicgPyBvcHRzLmludGVycHJldE51bWVyaWNFbnRpdGllcyA6IGRlZmF1bHRzLmludGVycHJldE51bWVyaWNFbnRpdGllcyxcbiAgICAgICAgcGFyYW1ldGVyTGltaXQ6IHR5cGVvZiBvcHRzLnBhcmFtZXRlckxpbWl0ID09PSAnbnVtYmVyJyA/IG9wdHMucGFyYW1ldGVyTGltaXQgOiBkZWZhdWx0cy5wYXJhbWV0ZXJMaW1pdCxcbiAgICAgICAgcGFyc2VBcnJheXM6IG9wdHMucGFyc2VBcnJheXMgIT09IGZhbHNlLFxuICAgICAgICBwbGFpbk9iamVjdHM6IHR5cGVvZiBvcHRzLnBsYWluT2JqZWN0cyA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5wbGFpbk9iamVjdHMgOiBkZWZhdWx0cy5wbGFpbk9iamVjdHMsXG4gICAgICAgIHN0cmljdE51bGxIYW5kbGluZzogdHlwZW9mIG9wdHMuc3RyaWN0TnVsbEhhbmRsaW5nID09PSAnYm9vbGVhbicgPyBvcHRzLnN0cmljdE51bGxIYW5kbGluZyA6IGRlZmF1bHRzLnN0cmljdE51bGxIYW5kbGluZ1xuICAgIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHIsIG9wdHMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IG5vcm1hbGl6ZVBhcnNlT3B0aW9ucyhvcHRzKTtcblxuICAgIGlmIChzdHIgPT09ICcnIHx8IHN0ciA9PT0gbnVsbCB8fCB0eXBlb2Ygc3RyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5wbGFpbk9iamVjdHMgPyBPYmplY3QuY3JlYXRlKG51bGwpIDoge307XG4gICAgfVxuXG4gICAgdmFyIHRlbXBPYmogPSB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyA/IHBhcnNlVmFsdWVzKHN0ciwgb3B0aW9ucykgOiBzdHI7XG4gICAgdmFyIG9iaiA9IG9wdGlvbnMucGxhaW5PYmplY3RzID8gT2JqZWN0LmNyZWF0ZShudWxsKSA6IHt9O1xuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSBrZXlzIGFuZCBzZXR1cCB0aGUgbmV3IG9iamVjdFxuXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0ZW1wT2JqKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgIHZhciBuZXdPYmogPSBwYXJzZUtleXMoa2V5LCB0ZW1wT2JqW2tleV0sIG9wdGlvbnMsIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnKTtcbiAgICAgICAgb2JqID0gdXRpbHMubWVyZ2Uob2JqLCBuZXdPYmosIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmFsbG93U3BhcnNlID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgcmV0dXJuIHV0aWxzLmNvbXBhY3Qob2JqKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBnZXRTaWRlQ2hhbm5lbCA9IHJlcXVpcmUoJ3NpZGUtY2hhbm5lbCcpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGZvcm1hdHMgPSByZXF1aXJlKCcuL2Zvcm1hdHMnKTtcbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgYXJyYXlQcmVmaXhHZW5lcmF0b3JzID0ge1xuICAgIGJyYWNrZXRzOiBmdW5jdGlvbiBicmFja2V0cyhwcmVmaXgpIHtcbiAgICAgICAgcmV0dXJuIHByZWZpeCArICdbXSc7XG4gICAgfSxcbiAgICBjb21tYTogJ2NvbW1hJyxcbiAgICBpbmRpY2VzOiBmdW5jdGlvbiBpbmRpY2VzKHByZWZpeCwga2V5KSB7XG4gICAgICAgIHJldHVybiBwcmVmaXggKyAnWycgKyBrZXkgKyAnXSc7XG4gICAgfSxcbiAgICByZXBlYXQ6IGZ1bmN0aW9uIHJlcGVhdChwcmVmaXgpIHtcbiAgICAgICAgcmV0dXJuIHByZWZpeDtcbiAgICB9XG59O1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG52YXIgcHVzaCA9IEFycmF5LnByb3RvdHlwZS5wdXNoO1xudmFyIHB1c2hUb0FycmF5ID0gZnVuY3Rpb24gKGFyciwgdmFsdWVPckFycmF5KSB7XG4gICAgcHVzaC5hcHBseShhcnIsIGlzQXJyYXkodmFsdWVPckFycmF5KSA/IHZhbHVlT3JBcnJheSA6IFt2YWx1ZU9yQXJyYXldKTtcbn07XG5cbnZhciB0b0lTTyA9IERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nO1xuXG52YXIgZGVmYXVsdEZvcm1hdCA9IGZvcm1hdHNbJ2RlZmF1bHQnXTtcbnZhciBkZWZhdWx0cyA9IHtcbiAgICBhZGRRdWVyeVByZWZpeDogZmFsc2UsXG4gICAgYWxsb3dEb3RzOiBmYWxzZSxcbiAgICBjaGFyc2V0OiAndXRmLTgnLFxuICAgIGNoYXJzZXRTZW50aW5lbDogZmFsc2UsXG4gICAgZGVsaW1pdGVyOiAnJicsXG4gICAgZW5jb2RlOiB0cnVlLFxuICAgIGVuY29kZXI6IHV0aWxzLmVuY29kZSxcbiAgICBlbmNvZGVWYWx1ZXNPbmx5OiBmYWxzZSxcbiAgICBmb3JtYXQ6IGRlZmF1bHRGb3JtYXQsXG4gICAgZm9ybWF0dGVyOiBmb3JtYXRzLmZvcm1hdHRlcnNbZGVmYXVsdEZvcm1hdF0sXG4gICAgLy8gZGVwcmVjYXRlZFxuICAgIGluZGljZXM6IGZhbHNlLFxuICAgIHNlcmlhbGl6ZURhdGU6IGZ1bmN0aW9uIHNlcmlhbGl6ZURhdGUoZGF0ZSkge1xuICAgICAgICByZXR1cm4gdG9JU08uY2FsbChkYXRlKTtcbiAgICB9LFxuICAgIHNraXBOdWxsczogZmFsc2UsXG4gICAgc3RyaWN0TnVsbEhhbmRsaW5nOiBmYWxzZVxufTtcblxudmFyIGlzTm9uTnVsbGlzaFByaW1pdGl2ZSA9IGZ1bmN0aW9uIGlzTm9uTnVsbGlzaFByaW1pdGl2ZSh2KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSAnc3RyaW5nJ1xuICAgICAgICB8fCB0eXBlb2YgdiA9PT0gJ251bWJlcidcbiAgICAgICAgfHwgdHlwZW9mIHYgPT09ICdib29sZWFuJ1xuICAgICAgICB8fCB0eXBlb2YgdiA9PT0gJ3N5bWJvbCdcbiAgICAgICAgfHwgdHlwZW9mIHYgPT09ICdiaWdpbnQnO1xufTtcblxudmFyIHNlbnRpbmVsID0ge307XG5cbnZhciBzdHJpbmdpZnkgPSBmdW5jdGlvbiBzdHJpbmdpZnkoXG4gICAgb2JqZWN0LFxuICAgIHByZWZpeCxcbiAgICBnZW5lcmF0ZUFycmF5UHJlZml4LFxuICAgIGNvbW1hUm91bmRUcmlwLFxuICAgIHN0cmljdE51bGxIYW5kbGluZyxcbiAgICBza2lwTnVsbHMsXG4gICAgZW5jb2RlcixcbiAgICBmaWx0ZXIsXG4gICAgc29ydCxcbiAgICBhbGxvd0RvdHMsXG4gICAgc2VyaWFsaXplRGF0ZSxcbiAgICBmb3JtYXQsXG4gICAgZm9ybWF0dGVyLFxuICAgIGVuY29kZVZhbHVlc09ubHksXG4gICAgY2hhcnNldCxcbiAgICBzaWRlQ2hhbm5lbFxuKSB7XG4gICAgdmFyIG9iaiA9IG9iamVjdDtcblxuICAgIHZhciB0bXBTYyA9IHNpZGVDaGFubmVsO1xuICAgIHZhciBzdGVwID0gMDtcbiAgICB2YXIgZmluZEZsYWcgPSBmYWxzZTtcbiAgICB3aGlsZSAoKHRtcFNjID0gdG1wU2MuZ2V0KHNlbnRpbmVsKSkgIT09IHZvaWQgdW5kZWZpbmVkICYmICFmaW5kRmxhZykge1xuICAgICAgICAvLyBXaGVyZSBvYmplY3QgbGFzdCBhcHBlYXJlZCBpbiB0aGUgcmVmIHRyZWVcbiAgICAgICAgdmFyIHBvcyA9IHRtcFNjLmdldChvYmplY3QpO1xuICAgICAgICBzdGVwICs9IDE7XG4gICAgICAgIGlmICh0eXBlb2YgcG9zICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaWYgKHBvcyA9PT0gc3RlcCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdDeWNsaWMgb2JqZWN0IHZhbHVlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpbmRGbGFnID0gdHJ1ZTsgLy8gQnJlYWsgd2hpbGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRtcFNjLmdldChzZW50aW5lbCkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBzdGVwID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZmlsdGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9iaiA9IGZpbHRlcihwcmVmaXgsIG9iaik7XG4gICAgfSBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIG9iaiA9IHNlcmlhbGl6ZURhdGUob2JqKTtcbiAgICB9IGVsc2UgaWYgKGdlbmVyYXRlQXJyYXlQcmVmaXggPT09ICdjb21tYScgJiYgaXNBcnJheShvYmopKSB7XG4gICAgICAgIG9iaiA9IHV0aWxzLm1heWJlTWFwKG9iaiwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZURhdGUodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAob2JqID09PSBudWxsKSB7XG4gICAgICAgIGlmIChzdHJpY3ROdWxsSGFuZGxpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBlbmNvZGVyICYmICFlbmNvZGVWYWx1ZXNPbmx5ID8gZW5jb2RlcihwcmVmaXgsIGRlZmF1bHRzLmVuY29kZXIsIGNoYXJzZXQsICdrZXknLCBmb3JtYXQpIDogcHJlZml4O1xuICAgICAgICB9XG5cbiAgICAgICAgb2JqID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKGlzTm9uTnVsbGlzaFByaW1pdGl2ZShvYmopIHx8IHV0aWxzLmlzQnVmZmVyKG9iaikpIHtcbiAgICAgICAgaWYgKGVuY29kZXIpIHtcbiAgICAgICAgICAgIHZhciBrZXlWYWx1ZSA9IGVuY29kZVZhbHVlc09ubHkgPyBwcmVmaXggOiBlbmNvZGVyKHByZWZpeCwgZGVmYXVsdHMuZW5jb2RlciwgY2hhcnNldCwgJ2tleScsIGZvcm1hdCk7XG4gICAgICAgICAgICByZXR1cm4gW2Zvcm1hdHRlcihrZXlWYWx1ZSkgKyAnPScgKyBmb3JtYXR0ZXIoZW5jb2RlcihvYmosIGRlZmF1bHRzLmVuY29kZXIsIGNoYXJzZXQsICd2YWx1ZScsIGZvcm1hdCkpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2Zvcm1hdHRlcihwcmVmaXgpICsgJz0nICsgZm9ybWF0dGVyKFN0cmluZyhvYmopKV07XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlcyA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgfVxuXG4gICAgdmFyIG9iaktleXM7XG4gICAgaWYgKGdlbmVyYXRlQXJyYXlQcmVmaXggPT09ICdjb21tYScgJiYgaXNBcnJheShvYmopKSB7XG4gICAgICAgIC8vIHdlIG5lZWQgdG8gam9pbiBlbGVtZW50cyBpblxuICAgICAgICBpZiAoZW5jb2RlVmFsdWVzT25seSAmJiBlbmNvZGVyKSB7XG4gICAgICAgICAgICBvYmogPSB1dGlscy5tYXliZU1hcChvYmosIGVuY29kZXIpO1xuICAgICAgICB9XG4gICAgICAgIG9iaktleXMgPSBbeyB2YWx1ZTogb2JqLmxlbmd0aCA+IDAgPyBvYmouam9pbignLCcpIHx8IG51bGwgOiB2b2lkIHVuZGVmaW5lZCB9XTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkoZmlsdGVyKSkge1xuICAgICAgICBvYmpLZXlzID0gZmlsdGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgICAgb2JqS2V5cyA9IHNvcnQgPyBrZXlzLnNvcnQoc29ydCkgOiBrZXlzO1xuICAgIH1cblxuICAgIHZhciBhZGp1c3RlZFByZWZpeCA9IGNvbW1hUm91bmRUcmlwICYmIGlzQXJyYXkob2JqKSAmJiBvYmoubGVuZ3RoID09PSAxID8gcHJlZml4ICsgJ1tdJyA6IHByZWZpeDtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgb2JqS2V5cy5sZW5ndGg7ICsraikge1xuICAgICAgICB2YXIga2V5ID0gb2JqS2V5c1tqXTtcbiAgICAgICAgdmFyIHZhbHVlID0gdHlwZW9mIGtleSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGtleS52YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgPyBrZXkudmFsdWUgOiBvYmpba2V5XTtcblxuICAgICAgICBpZiAoc2tpcE51bGxzICYmIHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBrZXlQcmVmaXggPSBpc0FycmF5KG9iailcbiAgICAgICAgICAgID8gdHlwZW9mIGdlbmVyYXRlQXJyYXlQcmVmaXggPT09ICdmdW5jdGlvbicgPyBnZW5lcmF0ZUFycmF5UHJlZml4KGFkanVzdGVkUHJlZml4LCBrZXkpIDogYWRqdXN0ZWRQcmVmaXhcbiAgICAgICAgICAgIDogYWRqdXN0ZWRQcmVmaXggKyAoYWxsb3dEb3RzID8gJy4nICsga2V5IDogJ1snICsga2V5ICsgJ10nKTtcblxuICAgICAgICBzaWRlQ2hhbm5lbC5zZXQob2JqZWN0LCBzdGVwKTtcbiAgICAgICAgdmFyIHZhbHVlU2lkZUNoYW5uZWwgPSBnZXRTaWRlQ2hhbm5lbCgpO1xuICAgICAgICB2YWx1ZVNpZGVDaGFubmVsLnNldChzZW50aW5lbCwgc2lkZUNoYW5uZWwpO1xuICAgICAgICBwdXNoVG9BcnJheSh2YWx1ZXMsIHN0cmluZ2lmeShcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAga2V5UHJlZml4LFxuICAgICAgICAgICAgZ2VuZXJhdGVBcnJheVByZWZpeCxcbiAgICAgICAgICAgIGNvbW1hUm91bmRUcmlwLFxuICAgICAgICAgICAgc3RyaWN0TnVsbEhhbmRsaW5nLFxuICAgICAgICAgICAgc2tpcE51bGxzLFxuICAgICAgICAgICAgZ2VuZXJhdGVBcnJheVByZWZpeCA9PT0gJ2NvbW1hJyAmJiBlbmNvZGVWYWx1ZXNPbmx5ICYmIGlzQXJyYXkob2JqKSA/IG51bGwgOiBlbmNvZGVyLFxuICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgc29ydCxcbiAgICAgICAgICAgIGFsbG93RG90cyxcbiAgICAgICAgICAgIHNlcmlhbGl6ZURhdGUsXG4gICAgICAgICAgICBmb3JtYXQsXG4gICAgICAgICAgICBmb3JtYXR0ZXIsXG4gICAgICAgICAgICBlbmNvZGVWYWx1ZXNPbmx5LFxuICAgICAgICAgICAgY2hhcnNldCxcbiAgICAgICAgICAgIHZhbHVlU2lkZUNoYW5uZWxcbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcztcbn07XG5cbnZhciBub3JtYWxpemVTdHJpbmdpZnlPcHRpb25zID0gZnVuY3Rpb24gbm9ybWFsaXplU3RyaW5naWZ5T3B0aW9ucyhvcHRzKSB7XG4gICAgaWYgKCFvcHRzKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICBpZiAob3B0cy5lbmNvZGVyICE9PSBudWxsICYmIHR5cGVvZiBvcHRzLmVuY29kZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBvcHRzLmVuY29kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRW5jb2RlciBoYXMgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICB2YXIgY2hhcnNldCA9IG9wdHMuY2hhcnNldCB8fCBkZWZhdWx0cy5jaGFyc2V0O1xuICAgIGlmICh0eXBlb2Ygb3B0cy5jaGFyc2V0ICE9PSAndW5kZWZpbmVkJyAmJiBvcHRzLmNoYXJzZXQgIT09ICd1dGYtOCcgJiYgb3B0cy5jaGFyc2V0ICE9PSAnaXNvLTg4NTktMScpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGNoYXJzZXQgb3B0aW9uIG11c3QgYmUgZWl0aGVyIHV0Zi04LCBpc28tODg1OS0xLCBvciB1bmRlZmluZWQnKTtcbiAgICB9XG5cbiAgICB2YXIgZm9ybWF0ID0gZm9ybWF0c1snZGVmYXVsdCddO1xuICAgIGlmICh0eXBlb2Ygb3B0cy5mb3JtYXQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGlmICghaGFzLmNhbGwoZm9ybWF0cy5mb3JtYXR0ZXJzLCBvcHRzLmZvcm1hdCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZm9ybWF0IG9wdGlvbiBwcm92aWRlZC4nKTtcbiAgICAgICAgfVxuICAgICAgICBmb3JtYXQgPSBvcHRzLmZvcm1hdDtcbiAgICB9XG4gICAgdmFyIGZvcm1hdHRlciA9IGZvcm1hdHMuZm9ybWF0dGVyc1tmb3JtYXRdO1xuXG4gICAgdmFyIGZpbHRlciA9IGRlZmF1bHRzLmZpbHRlcjtcbiAgICBpZiAodHlwZW9mIG9wdHMuZmlsdGVyID09PSAnZnVuY3Rpb24nIHx8IGlzQXJyYXkob3B0cy5maWx0ZXIpKSB7XG4gICAgICAgIGZpbHRlciA9IG9wdHMuZmlsdGVyO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZFF1ZXJ5UHJlZml4OiB0eXBlb2Ygb3B0cy5hZGRRdWVyeVByZWZpeCA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5hZGRRdWVyeVByZWZpeCA6IGRlZmF1bHRzLmFkZFF1ZXJ5UHJlZml4LFxuICAgICAgICBhbGxvd0RvdHM6IHR5cGVvZiBvcHRzLmFsbG93RG90cyA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0cy5hbGxvd0RvdHMgOiAhIW9wdHMuYWxsb3dEb3RzLFxuICAgICAgICBjaGFyc2V0OiBjaGFyc2V0LFxuICAgICAgICBjaGFyc2V0U2VudGluZWw6IHR5cGVvZiBvcHRzLmNoYXJzZXRTZW50aW5lbCA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5jaGFyc2V0U2VudGluZWwgOiBkZWZhdWx0cy5jaGFyc2V0U2VudGluZWwsXG4gICAgICAgIGRlbGltaXRlcjogdHlwZW9mIG9wdHMuZGVsaW1pdGVyID09PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRzLmRlbGltaXRlciA6IG9wdHMuZGVsaW1pdGVyLFxuICAgICAgICBlbmNvZGU6IHR5cGVvZiBvcHRzLmVuY29kZSA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5lbmNvZGUgOiBkZWZhdWx0cy5lbmNvZGUsXG4gICAgICAgIGVuY29kZXI6IHR5cGVvZiBvcHRzLmVuY29kZXIgPT09ICdmdW5jdGlvbicgPyBvcHRzLmVuY29kZXIgOiBkZWZhdWx0cy5lbmNvZGVyLFxuICAgICAgICBlbmNvZGVWYWx1ZXNPbmx5OiB0eXBlb2Ygb3B0cy5lbmNvZGVWYWx1ZXNPbmx5ID09PSAnYm9vbGVhbicgPyBvcHRzLmVuY29kZVZhbHVlc09ubHkgOiBkZWZhdWx0cy5lbmNvZGVWYWx1ZXNPbmx5LFxuICAgICAgICBmaWx0ZXI6IGZpbHRlcixcbiAgICAgICAgZm9ybWF0OiBmb3JtYXQsXG4gICAgICAgIGZvcm1hdHRlcjogZm9ybWF0dGVyLFxuICAgICAgICBzZXJpYWxpemVEYXRlOiB0eXBlb2Ygb3B0cy5zZXJpYWxpemVEYXRlID09PSAnZnVuY3Rpb24nID8gb3B0cy5zZXJpYWxpemVEYXRlIDogZGVmYXVsdHMuc2VyaWFsaXplRGF0ZSxcbiAgICAgICAgc2tpcE51bGxzOiB0eXBlb2Ygb3B0cy5za2lwTnVsbHMgPT09ICdib29sZWFuJyA/IG9wdHMuc2tpcE51bGxzIDogZGVmYXVsdHMuc2tpcE51bGxzLFxuICAgICAgICBzb3J0OiB0eXBlb2Ygb3B0cy5zb3J0ID09PSAnZnVuY3Rpb24nID8gb3B0cy5zb3J0IDogbnVsbCxcbiAgICAgICAgc3RyaWN0TnVsbEhhbmRsaW5nOiB0eXBlb2Ygb3B0cy5zdHJpY3ROdWxsSGFuZGxpbmcgPT09ICdib29sZWFuJyA/IG9wdHMuc3RyaWN0TnVsbEhhbmRsaW5nIDogZGVmYXVsdHMuc3RyaWN0TnVsbEhhbmRsaW5nXG4gICAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgb3B0cykge1xuICAgIHZhciBvYmogPSBvYmplY3Q7XG4gICAgdmFyIG9wdGlvbnMgPSBub3JtYWxpemVTdHJpbmdpZnlPcHRpb25zKG9wdHMpO1xuXG4gICAgdmFyIG9iaktleXM7XG4gICAgdmFyIGZpbHRlcjtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5maWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZmlsdGVyID0gb3B0aW9ucy5maWx0ZXI7XG4gICAgICAgIG9iaiA9IGZpbHRlcignJywgb2JqKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkob3B0aW9ucy5maWx0ZXIpKSB7XG4gICAgICAgIGZpbHRlciA9IG9wdGlvbnMuZmlsdGVyO1xuICAgICAgICBvYmpLZXlzID0gZmlsdGVyO1xuICAgIH1cblxuICAgIHZhciBrZXlzID0gW107XG5cbiAgICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICB2YXIgYXJyYXlGb3JtYXQ7XG4gICAgaWYgKG9wdHMgJiYgb3B0cy5hcnJheUZvcm1hdCBpbiBhcnJheVByZWZpeEdlbmVyYXRvcnMpIHtcbiAgICAgICAgYXJyYXlGb3JtYXQgPSBvcHRzLmFycmF5Rm9ybWF0O1xuICAgIH0gZWxzZSBpZiAob3B0cyAmJiAnaW5kaWNlcycgaW4gb3B0cykge1xuICAgICAgICBhcnJheUZvcm1hdCA9IG9wdHMuaW5kaWNlcyA/ICdpbmRpY2VzJyA6ICdyZXBlYXQnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFycmF5Rm9ybWF0ID0gJ2luZGljZXMnO1xuICAgIH1cblxuICAgIHZhciBnZW5lcmF0ZUFycmF5UHJlZml4ID0gYXJyYXlQcmVmaXhHZW5lcmF0b3JzW2FycmF5Rm9ybWF0XTtcbiAgICBpZiAob3B0cyAmJiAnY29tbWFSb3VuZFRyaXAnIGluIG9wdHMgJiYgdHlwZW9mIG9wdHMuY29tbWFSb3VuZFRyaXAgIT09ICdib29sZWFuJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdgY29tbWFSb3VuZFRyaXBgIG11c3QgYmUgYSBib29sZWFuLCBvciBhYnNlbnQnKTtcbiAgICB9XG4gICAgdmFyIGNvbW1hUm91bmRUcmlwID0gZ2VuZXJhdGVBcnJheVByZWZpeCA9PT0gJ2NvbW1hJyAmJiBvcHRzICYmIG9wdHMuY29tbWFSb3VuZFRyaXA7XG5cbiAgICBpZiAoIW9iaktleXMpIHtcbiAgICAgICAgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuc29ydCkge1xuICAgICAgICBvYmpLZXlzLnNvcnQob3B0aW9ucy5zb3J0KTtcbiAgICB9XG5cbiAgICB2YXIgc2lkZUNoYW5uZWwgPSBnZXRTaWRlQ2hhbm5lbCgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqS2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0gb2JqS2V5c1tpXTtcblxuICAgICAgICBpZiAob3B0aW9ucy5za2lwTnVsbHMgJiYgb2JqW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHB1c2hUb0FycmF5KGtleXMsIHN0cmluZ2lmeShcbiAgICAgICAgICAgIG9ialtrZXldLFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZ2VuZXJhdGVBcnJheVByZWZpeCxcbiAgICAgICAgICAgIGNvbW1hUm91bmRUcmlwLFxuICAgICAgICAgICAgb3B0aW9ucy5zdHJpY3ROdWxsSGFuZGxpbmcsXG4gICAgICAgICAgICBvcHRpb25zLnNraXBOdWxscyxcbiAgICAgICAgICAgIG9wdGlvbnMuZW5jb2RlID8gb3B0aW9ucy5lbmNvZGVyIDogbnVsbCxcbiAgICAgICAgICAgIG9wdGlvbnMuZmlsdGVyLFxuICAgICAgICAgICAgb3B0aW9ucy5zb3J0LFxuICAgICAgICAgICAgb3B0aW9ucy5hbGxvd0RvdHMsXG4gICAgICAgICAgICBvcHRpb25zLnNlcmlhbGl6ZURhdGUsXG4gICAgICAgICAgICBvcHRpb25zLmZvcm1hdCxcbiAgICAgICAgICAgIG9wdGlvbnMuZm9ybWF0dGVyLFxuICAgICAgICAgICAgb3B0aW9ucy5lbmNvZGVWYWx1ZXNPbmx5LFxuICAgICAgICAgICAgb3B0aW9ucy5jaGFyc2V0LFxuICAgICAgICAgICAgc2lkZUNoYW5uZWxcbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgdmFyIGpvaW5lZCA9IGtleXMuam9pbihvcHRpb25zLmRlbGltaXRlcik7XG4gICAgdmFyIHByZWZpeCA9IG9wdGlvbnMuYWRkUXVlcnlQcmVmaXggPT09IHRydWUgPyAnPycgOiAnJztcblxuICAgIGlmIChvcHRpb25zLmNoYXJzZXRTZW50aW5lbCkge1xuICAgICAgICBpZiAob3B0aW9ucy5jaGFyc2V0ID09PSAnaXNvLTg4NTktMScpIHtcbiAgICAgICAgICAgIC8vIGVuY29kZVVSSUNvbXBvbmVudCgnJiMxMDAwMzsnKSwgdGhlIFwibnVtZXJpYyBlbnRpdHlcIiByZXByZXNlbnRhdGlvbiBvZiBhIGNoZWNrbWFya1xuICAgICAgICAgICAgcHJlZml4ICs9ICd1dGY4PSUyNiUyMzEwMDAzJTNCJic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBlbmNvZGVVUklDb21wb25lbnQoJ+KckycpXG4gICAgICAgICAgICBwcmVmaXggKz0gJ3V0Zjg9JUUyJTlDJTkzJic7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gam9pbmVkLmxlbmd0aCA+IDAgPyBwcmVmaXggKyBqb2luZWQgOiAnJztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBmb3JtYXRzID0gcmVxdWlyZSgnLi9mb3JtYXRzJyk7XG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG52YXIgaGV4VGFibGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgICAgICAgYXJyYXkucHVzaCgnJScgKyAoKGkgPCAxNiA/ICcwJyA6ICcnKSArIGkudG9TdHJpbmcoMTYpKS50b1VwcGVyQ2FzZSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXk7XG59KCkpO1xuXG52YXIgY29tcGFjdFF1ZXVlID0gZnVuY3Rpb24gY29tcGFjdFF1ZXVlKHF1ZXVlKSB7XG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBxdWV1ZS5wb3AoKTtcbiAgICAgICAgdmFyIG9iaiA9IGl0ZW0ub2JqW2l0ZW0ucHJvcF07XG5cbiAgICAgICAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgICAgICAgICAgdmFyIGNvbXBhY3RlZCA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG9iai5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqW2pdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wYWN0ZWQucHVzaChvYmpbal0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbS5vYmpbaXRlbS5wcm9wXSA9IGNvbXBhY3RlZDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbnZhciBhcnJheVRvT2JqZWN0ID0gZnVuY3Rpb24gYXJyYXlUb09iamVjdChzb3VyY2UsIG9wdGlvbnMpIHtcbiAgICB2YXIgb2JqID0gb3B0aW9ucyAmJiBvcHRpb25zLnBsYWluT2JqZWN0cyA/IE9iamVjdC5jcmVhdGUobnVsbCkgOiB7fTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNvdXJjZS5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAodHlwZW9mIHNvdXJjZVtpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG9ialtpXSA9IHNvdXJjZVtpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59O1xuXG52YXIgbWVyZ2UgPSBmdW5jdGlvbiBtZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuICAgIC8qIGVzbGludCBuby1wYXJhbS1yZWFzc2lnbjogMCAqL1xuICAgIGlmICghc291cmNlKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChpc0FycmF5KHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRhcmdldC5wdXNoKHNvdXJjZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ICYmIHR5cGVvZiB0YXJnZXQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAoKG9wdGlvbnMgJiYgKG9wdGlvbnMucGxhaW5PYmplY3RzIHx8IG9wdGlvbnMuYWxsb3dQcm90b3R5cGVzKSkgfHwgIWhhcy5jYWxsKE9iamVjdC5wcm90b3R5cGUsIHNvdXJjZSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbc291cmNlXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gW3RhcmdldCwgc291cmNlXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgaWYgKCF0YXJnZXQgfHwgdHlwZW9mIHRhcmdldCAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIFt0YXJnZXRdLmNvbmNhdChzb3VyY2UpO1xuICAgIH1cblxuICAgIHZhciBtZXJnZVRhcmdldCA9IHRhcmdldDtcbiAgICBpZiAoaXNBcnJheSh0YXJnZXQpICYmICFpc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgICAgbWVyZ2VUYXJnZXQgPSBhcnJheVRvT2JqZWN0KHRhcmdldCwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkodGFyZ2V0KSAmJiBpc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgICAgc291cmNlLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgIGlmIChoYXMuY2FsbCh0YXJnZXQsIGkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldEl0ZW0gPSB0YXJnZXRbaV07XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldEl0ZW0gJiYgdHlwZW9mIHRhcmdldEl0ZW0gPT09ICdvYmplY3QnICYmIGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtpXSA9IG1lcmdlKHRhcmdldEl0ZW0sIGl0ZW0sIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2ldID0gaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHNvdXJjZSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBzb3VyY2Vba2V5XTtcblxuICAgICAgICBpZiAoaGFzLmNhbGwoYWNjLCBrZXkpKSB7XG4gICAgICAgICAgICBhY2Nba2V5XSA9IG1lcmdlKGFjY1trZXldLCB2YWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY2Nba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgbWVyZ2VUYXJnZXQpO1xufTtcblxudmFyIGFzc2lnbiA9IGZ1bmN0aW9uIGFzc2lnblNpbmdsZVNvdXJjZSh0YXJnZXQsIHNvdXJjZSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhzb3VyY2UpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICAgICAgYWNjW2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB0YXJnZXQpO1xufTtcblxudmFyIGRlY29kZSA9IGZ1bmN0aW9uIChzdHIsIGRlY29kZXIsIGNoYXJzZXQpIHtcbiAgICB2YXIgc3RyV2l0aG91dFBsdXMgPSBzdHIucmVwbGFjZSgvXFwrL2csICcgJyk7XG4gICAgaWYgKGNoYXJzZXQgPT09ICdpc28tODg1OS0xJykge1xuICAgICAgICAvLyB1bmVzY2FwZSBuZXZlciB0aHJvd3MsIG5vIHRyeS4uLmNhdGNoIG5lZWRlZDpcbiAgICAgICAgcmV0dXJuIHN0cldpdGhvdXRQbHVzLnJlcGxhY2UoLyVbMC05YS1mXXsyfS9naSwgdW5lc2NhcGUpO1xuICAgIH1cbiAgICAvLyB1dGYtOFxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyV2l0aG91dFBsdXMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHN0cldpdGhvdXRQbHVzO1xuICAgIH1cbn07XG5cbnZhciBlbmNvZGUgPSBmdW5jdGlvbiBlbmNvZGUoc3RyLCBkZWZhdWx0RW5jb2RlciwgY2hhcnNldCwga2luZCwgZm9ybWF0KSB7XG4gICAgLy8gVGhpcyBjb2RlIHdhcyBvcmlnaW5hbGx5IHdyaXR0ZW4gYnkgQnJpYW4gV2hpdGUgKG1zY2RleCkgZm9yIHRoZSBpby5qcyBjb3JlIHF1ZXJ5c3RyaW5nIGxpYnJhcnkuXG4gICAgLy8gSXQgaGFzIGJlZW4gYWRhcHRlZCBoZXJlIGZvciBzdHJpY3RlciBhZGhlcmVuY2UgdG8gUkZDIDM5ODZcbiAgICBpZiAoc3RyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIHZhciBzdHJpbmcgPSBzdHI7XG4gICAgaWYgKHR5cGVvZiBzdHIgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgIHN0cmluZyA9IFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzdHIpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgc3RyaW5nID0gU3RyaW5nKHN0cik7XG4gICAgfVxuXG4gICAgaWYgKGNoYXJzZXQgPT09ICdpc28tODg1OS0xJykge1xuICAgICAgICByZXR1cm4gZXNjYXBlKHN0cmluZykucmVwbGFjZSgvJXVbMC05YS1mXXs0fS9naSwgZnVuY3Rpb24gKCQwKSB7XG4gICAgICAgICAgICByZXR1cm4gJyUyNiUyMycgKyBwYXJzZUludCgkMC5zbGljZSgyKSwgMTYpICsgJyUzQic7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBvdXQgPSAnJztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgYyA9IHN0cmluZy5jaGFyQ29kZUF0KGkpO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGMgPT09IDB4MkQgLy8gLVxuICAgICAgICAgICAgfHwgYyA9PT0gMHgyRSAvLyAuXG4gICAgICAgICAgICB8fCBjID09PSAweDVGIC8vIF9cbiAgICAgICAgICAgIHx8IGMgPT09IDB4N0UgLy8gflxuICAgICAgICAgICAgfHwgKGMgPj0gMHgzMCAmJiBjIDw9IDB4MzkpIC8vIDAtOVxuICAgICAgICAgICAgfHwgKGMgPj0gMHg0MSAmJiBjIDw9IDB4NUEpIC8vIGEtelxuICAgICAgICAgICAgfHwgKGMgPj0gMHg2MSAmJiBjIDw9IDB4N0EpIC8vIEEtWlxuICAgICAgICAgICAgfHwgKGZvcm1hdCA9PT0gZm9ybWF0cy5SRkMxNzM4ICYmIChjID09PSAweDI4IHx8IGMgPT09IDB4MjkpKSAvLyAoIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBvdXQgKz0gc3RyaW5nLmNoYXJBdChpKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGMgPCAweDgwKSB7XG4gICAgICAgICAgICBvdXQgPSBvdXQgKyBoZXhUYWJsZVtjXTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGMgPCAweDgwMCkge1xuICAgICAgICAgICAgb3V0ID0gb3V0ICsgKGhleFRhYmxlWzB4QzAgfCAoYyA+PiA2KV0gKyBoZXhUYWJsZVsweDgwIHwgKGMgJiAweDNGKV0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYyA8IDB4RDgwMCB8fCBjID49IDB4RTAwMCkge1xuICAgICAgICAgICAgb3V0ID0gb3V0ICsgKGhleFRhYmxlWzB4RTAgfCAoYyA+PiAxMildICsgaGV4VGFibGVbMHg4MCB8ICgoYyA+PiA2KSAmIDB4M0YpXSArIGhleFRhYmxlWzB4ODAgfCAoYyAmIDB4M0YpXSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGkgKz0gMTtcbiAgICAgICAgYyA9IDB4MTAwMDAgKyAoKChjICYgMHgzRkYpIDw8IDEwKSB8IChzdHJpbmcuY2hhckNvZGVBdChpKSAmIDB4M0ZGKSk7XG4gICAgICAgIC8qIGVzbGludCBvcGVyYXRvci1saW5lYnJlYWs6IFsyLCBcImJlZm9yZVwiXSAqL1xuICAgICAgICBvdXQgKz0gaGV4VGFibGVbMHhGMCB8IChjID4+IDE4KV1cbiAgICAgICAgICAgICsgaGV4VGFibGVbMHg4MCB8ICgoYyA+PiAxMikgJiAweDNGKV1cbiAgICAgICAgICAgICsgaGV4VGFibGVbMHg4MCB8ICgoYyA+PiA2KSAmIDB4M0YpXVxuICAgICAgICAgICAgKyBoZXhUYWJsZVsweDgwIHwgKGMgJiAweDNGKV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dDtcbn07XG5cbnZhciBjb21wYWN0ID0gZnVuY3Rpb24gY29tcGFjdCh2YWx1ZSkge1xuICAgIHZhciBxdWV1ZSA9IFt7IG9iajogeyBvOiB2YWx1ZSB9LCBwcm9wOiAnbycgfV07XG4gICAgdmFyIHJlZnMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBxdWV1ZVtpXTtcbiAgICAgICAgdmFyIG9iaiA9IGl0ZW0ub2JqW2l0ZW0ucHJvcF07XG5cbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGtleXMubGVuZ3RoOyArK2opIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2pdO1xuICAgICAgICAgICAgdmFyIHZhbCA9IG9ialtrZXldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmIHZhbCAhPT0gbnVsbCAmJiByZWZzLmluZGV4T2YodmFsKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKHsgb2JqOiBvYmosIHByb3A6IGtleSB9KTtcbiAgICAgICAgICAgICAgICByZWZzLnB1c2godmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBhY3RRdWV1ZShxdWV1ZSk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG59O1xuXG52YXIgaXNSZWdFeHAgPSBmdW5jdGlvbiBpc1JlZ0V4cChvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufTtcblxudmFyIGlzQnVmZmVyID0gZnVuY3Rpb24gaXNCdWZmZXIob2JqKSB7XG4gICAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiAhIShvYmouY29uc3RydWN0b3IgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopKTtcbn07XG5cbnZhciBjb21iaW5lID0gZnVuY3Rpb24gY29tYmluZShhLCBiKSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdChhLCBiKTtcbn07XG5cbnZhciBtYXliZU1hcCA9IGZ1bmN0aW9uIG1heWJlTWFwKHZhbCwgZm4pIHtcbiAgICBpZiAoaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIHZhciBtYXBwZWQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIG1hcHBlZC5wdXNoKGZuKHZhbFtpXSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXBwZWQ7XG4gICAgfVxuICAgIHJldHVybiBmbih2YWwpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgYXJyYXlUb09iamVjdDogYXJyYXlUb09iamVjdCxcbiAgICBhc3NpZ246IGFzc2lnbixcbiAgICBjb21iaW5lOiBjb21iaW5lLFxuICAgIGNvbXBhY3Q6IGNvbXBhY3QsXG4gICAgZGVjb2RlOiBkZWNvZGUsXG4gICAgZW5jb2RlOiBlbmNvZGUsXG4gICAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICAgIGlzUmVnRXhwOiBpc1JlZ0V4cCxcbiAgICBtYXliZU1hcDogbWF5YmVNYXAsXG4gICAgbWVyZ2U6IG1lcmdlXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgR2V0SW50cmluc2ljID0gcmVxdWlyZSgnZ2V0LWludHJpbnNpYycpO1xudmFyIGNhbGxCb3VuZCA9IHJlcXVpcmUoJ2NhbGwtYmluZC9jYWxsQm91bmQnKTtcbnZhciBpbnNwZWN0ID0gcmVxdWlyZSgnb2JqZWN0LWluc3BlY3QnKTtcblxudmFyICRUeXBlRXJyb3IgPSBHZXRJbnRyaW5zaWMoJyVUeXBlRXJyb3IlJyk7XG52YXIgJFdlYWtNYXAgPSBHZXRJbnRyaW5zaWMoJyVXZWFrTWFwJScsIHRydWUpO1xudmFyICRNYXAgPSBHZXRJbnRyaW5zaWMoJyVNYXAlJywgdHJ1ZSk7XG5cbnZhciAkd2Vha01hcEdldCA9IGNhbGxCb3VuZCgnV2Vha01hcC5wcm90b3R5cGUuZ2V0JywgdHJ1ZSk7XG52YXIgJHdlYWtNYXBTZXQgPSBjYWxsQm91bmQoJ1dlYWtNYXAucHJvdG90eXBlLnNldCcsIHRydWUpO1xudmFyICR3ZWFrTWFwSGFzID0gY2FsbEJvdW5kKCdXZWFrTWFwLnByb3RvdHlwZS5oYXMnLCB0cnVlKTtcbnZhciAkbWFwR2V0ID0gY2FsbEJvdW5kKCdNYXAucHJvdG90eXBlLmdldCcsIHRydWUpO1xudmFyICRtYXBTZXQgPSBjYWxsQm91bmQoJ01hcC5wcm90b3R5cGUuc2V0JywgdHJ1ZSk7XG52YXIgJG1hcEhhcyA9IGNhbGxCb3VuZCgnTWFwLnByb3RvdHlwZS5oYXMnLCB0cnVlKTtcblxuLypcbiAqIFRoaXMgZnVuY3Rpb24gdHJhdmVyc2VzIHRoZSBsaXN0IHJldHVybmluZyB0aGUgbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoZVxuICogZ2l2ZW4ga2V5LlxuICpcbiAqIFRoYXQgbm9kZSBpcyBhbHNvIG1vdmVkIHRvIHRoZSBoZWFkIG9mIHRoZSBsaXN0LCBzbyB0aGF0IGlmIGl0J3MgYWNjZXNzZWRcbiAqIGFnYWluIHdlIGRvbid0IG5lZWQgdG8gdHJhdmVyc2UgdGhlIHdob2xlIGxpc3QuIEJ5IGRvaW5nIHNvLCBhbGwgdGhlIHJlY2VudGx5XG4gKiB1c2VkIG5vZGVzIGNhbiBiZSBhY2Nlc3NlZCByZWxhdGl2ZWx5IHF1aWNrbHkuXG4gKi9cbnZhciBsaXN0R2V0Tm9kZSA9IGZ1bmN0aW9uIChsaXN0LCBrZXkpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjb25zaXN0ZW50LXJldHVyblxuXHRmb3IgKHZhciBwcmV2ID0gbGlzdCwgY3VycjsgKGN1cnIgPSBwcmV2Lm5leHQpICE9PSBudWxsOyBwcmV2ID0gY3Vycikge1xuXHRcdGlmIChjdXJyLmtleSA9PT0ga2V5KSB7XG5cdFx0XHRwcmV2Lm5leHQgPSBjdXJyLm5leHQ7XG5cdFx0XHRjdXJyLm5leHQgPSBsaXN0Lm5leHQ7XG5cdFx0XHRsaXN0Lm5leHQgPSBjdXJyOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG5cdFx0XHRyZXR1cm4gY3Vycjtcblx0XHR9XG5cdH1cbn07XG5cbnZhciBsaXN0R2V0ID0gZnVuY3Rpb24gKG9iamVjdHMsIGtleSkge1xuXHR2YXIgbm9kZSA9IGxpc3RHZXROb2RlKG9iamVjdHMsIGtleSk7XG5cdHJldHVybiBub2RlICYmIG5vZGUudmFsdWU7XG59O1xudmFyIGxpc3RTZXQgPSBmdW5jdGlvbiAob2JqZWN0cywga2V5LCB2YWx1ZSkge1xuXHR2YXIgbm9kZSA9IGxpc3RHZXROb2RlKG9iamVjdHMsIGtleSk7XG5cdGlmIChub2RlKSB7XG5cdFx0bm9kZS52YWx1ZSA9IHZhbHVlO1xuXHR9IGVsc2Uge1xuXHRcdC8vIFByZXBlbmQgdGhlIG5ldyBub2RlIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGxpc3Rcblx0XHRvYmplY3RzLm5leHQgPSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cblx0XHRcdGtleToga2V5LFxuXHRcdFx0bmV4dDogb2JqZWN0cy5uZXh0LFxuXHRcdFx0dmFsdWU6IHZhbHVlXG5cdFx0fTtcblx0fVxufTtcbnZhciBsaXN0SGFzID0gZnVuY3Rpb24gKG9iamVjdHMsIGtleSkge1xuXHRyZXR1cm4gISFsaXN0R2V0Tm9kZShvYmplY3RzLCBrZXkpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRTaWRlQ2hhbm5lbCgpIHtcblx0dmFyICR3bTtcblx0dmFyICRtO1xuXHR2YXIgJG87XG5cdHZhciBjaGFubmVsID0ge1xuXHRcdGFzc2VydDogZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0aWYgKCFjaGFubmVsLmhhcyhrZXkpKSB7XG5cdFx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdTaWRlIGNoYW5uZWwgZG9lcyBub3QgY29udGFpbiAnICsgaW5zcGVjdChrZXkpKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGdldDogZnVuY3Rpb24gKGtleSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG5cdFx0XHRpZiAoJFdlYWtNYXAgJiYga2V5ICYmICh0eXBlb2Yga2V5ID09PSAnb2JqZWN0JyB8fCB0eXBlb2Yga2V5ID09PSAnZnVuY3Rpb24nKSkge1xuXHRcdFx0XHRpZiAoJHdtKSB7XG5cdFx0XHRcdFx0cmV0dXJuICR3ZWFrTWFwR2V0KCR3bSwga2V5KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICgkTWFwKSB7XG5cdFx0XHRcdGlmICgkbSkge1xuXHRcdFx0XHRcdHJldHVybiAkbWFwR2V0KCRtLCBrZXkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoJG8pIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1sb25lbHktaWZcblx0XHRcdFx0XHRyZXR1cm4gbGlzdEdldCgkbywga2V5KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aGFzOiBmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRpZiAoJFdlYWtNYXAgJiYga2V5ICYmICh0eXBlb2Yga2V5ID09PSAnb2JqZWN0JyB8fCB0eXBlb2Yga2V5ID09PSAnZnVuY3Rpb24nKSkge1xuXHRcdFx0XHRpZiAoJHdtKSB7XG5cdFx0XHRcdFx0cmV0dXJuICR3ZWFrTWFwSGFzKCR3bSwga2V5KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICgkTWFwKSB7XG5cdFx0XHRcdGlmICgkbSkge1xuXHRcdFx0XHRcdHJldHVybiAkbWFwSGFzKCRtLCBrZXkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoJG8pIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1sb25lbHktaWZcblx0XHRcdFx0XHRyZXR1cm4gbGlzdEhhcygkbywga2V5KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cdFx0c2V0OiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXHRcdFx0aWYgKCRXZWFrTWFwICYmIGtleSAmJiAodHlwZW9mIGtleSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIGtleSA9PT0gJ2Z1bmN0aW9uJykpIHtcblx0XHRcdFx0aWYgKCEkd20pIHtcblx0XHRcdFx0XHQkd20gPSBuZXcgJFdlYWtNYXAoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQkd2Vha01hcFNldCgkd20sIGtleSwgdmFsdWUpO1xuXHRcdFx0fSBlbHNlIGlmICgkTWFwKSB7XG5cdFx0XHRcdGlmICghJG0pIHtcblx0XHRcdFx0XHQkbSA9IG5ldyAkTWFwKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0JG1hcFNldCgkbSwga2V5LCB2YWx1ZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoISRvKSB7XG5cdFx0XHRcdFx0Lypcblx0XHRcdFx0XHQgKiBJbml0aWFsaXplIHRoZSBsaW5rZWQgbGlzdCBhcyBhbiBlbXB0eSBub2RlLCBzbyB0aGF0IHdlIGRvbid0IGhhdmVcblx0XHRcdFx0XHQgKiB0byBzcGVjaWFsLWNhc2UgaGFuZGxpbmcgb2YgdGhlIGZpcnN0IG5vZGU6IHdlIGNhbiBhbHdheXMgcmVmZXIgdG9cblx0XHRcdFx0XHQgKiBpdCBhcyAocHJldmlvdXMgbm9kZSkubmV4dCwgaW5zdGVhZCBvZiBzb21ldGhpbmcgbGlrZSAobGlzdCkuaGVhZFxuXHRcdFx0XHRcdCAqL1xuXHRcdFx0XHRcdCRvID0geyBrZXk6IHt9LCBuZXh0OiBudWxsIH07XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdFNldCgkbywga2V5LCB2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gY2hhbm5lbDtcbn07XG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9