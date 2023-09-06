(function() {
var exports = {};
exports.id = "pages/visitas";
exports.ids = ["pages/visitas"];
exports.modules = {

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStrapiURL": function() { return /* binding */ getStrapiURL; },
/* harmony export */   "fetchAPI": function() { return /* binding */ fetchAPI; }
/* harmony export */ });
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qs */ "qs");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */

function getStrapiURL(path = "") {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"}${path}`;
}
/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */

async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  // Merge default and user options
  const mergedOptions = _objectSpread({
    headers: {
      "Content-Type": "application/json"
    }
  }, options); // Build request URL


  const queryString = qs__WEBPACK_IMPORTED_MODULE_0___default().stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}` : ""}`)}`; // Trigger API call

  const response = await fetch(requestUrl, mergedOptions); // Handle response

  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occured please try again`);
  }

  const data = await response.json();
  return data;
}

/***/ }),

/***/ "./pages/visitas/index.js":
/*!********************************!*\
  !*** ./pages/visitas/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");


var _jsxFileName = "C:\\Users\\jacar\\Desktop\\strapi\\frontend\\pages\\visitas\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Formulario = ({
  visitas,
  barrios
}) => {
  const {
    0: formData,
    1: setFormData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    id: visitas[0].id,
    vcrradsol: visitas[0].attributes.vcrradsol,
    vcrnomati: visitas[0].attributes.vcrnomati,
    vcrdir: visitas[0].attributes.vcrdir,
    vcrbarrio: visitas[0].attributes.barrio.data.attributes.VcrIdBarVE
  });

  const handleChange = e => {
    setFormData(prevData => _objectSpread(_objectSpread({}, prevData), {}, {
      [e.target.name]: e.target.value
    }));
  };

  const handleChangeRegistro = e => {
    const selectedData = visitas.find(item => item.id == e.target.value);
    setFormData(selectedData.attributes);
    setFormData(prevData => _objectSpread(_objectSpread({}, prevData), {}, {
      id: selectedData.id
    }));
    setFormData(prevData => _objectSpread(_objectSpread({}, prevData), {}, {
      vcrbarrio: selectedData.attributes.barrio.data.id
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const visitas = await fetch(`http://localhost:1337/api/visitas/${formData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          visitas: formData
        })
      });

      if (visitas.ok) {
        console.log('¡Solicitud PUT enviada con éxito!'); // Realiza alguna acción adicional después de enviar la solicitud PUT
      } else {
        console.log('Error al enviar la solicitud PUT');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
        onChange: handleChangeRegistro,
        children: visitas.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: item.id,
          children: [item.id, "-", item.attributes.vcrnomati]
        }, item.id, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          children: ["VCRRADSOL:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            name: "vcrradsol",
            value: formData.vcrradsol,
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          children: ["VCRNOMATI:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            name: "vcrnomati",
            value: formData.vcrnomati,
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          children: ["VCRDIR:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            name: "vcrdir",
            value: formData.vcrdir,
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          children: ["VCRBAR:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
            id: "vcrbarrio",
            name: "vcrbarrio",
            children: barrios.map(opcion => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              value: opcion.id,
              children: formData.vcrbarrio
            }, opcion.id, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 17
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          children: "Guardar cambios"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

async function getStaticProps() {
  const [visitas, barrios] = await Promise.all([(0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.fetchAPI)("/visitas", {
    populate: "*"
  }), (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.fetchAPI)("/barrios", {
    populate: "*"
  })]);
  return {
    props: {
      visitas: visitas.data,
      barrios: barrios.data
    },
    revalidate: 1
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Formulario);

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("qs");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/visitas/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9saWIvYXBpLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL3BhZ2VzL3Zpc2l0YXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nL2V4dGVybmFsIFwicXNcIiIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL215LW5leHQtYmxvZy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImdldFN0cmFwaVVSTCIsInBhdGgiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkwiLCJmZXRjaEFQSSIsInVybFBhcmFtc09iamVjdCIsIm9wdGlvbnMiLCJtZXJnZWRPcHRpb25zIiwiaGVhZGVycyIsInF1ZXJ5U3RyaW5nIiwicXMiLCJyZXF1ZXN0VXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiY29uc29sZSIsImVycm9yIiwic3RhdHVzVGV4dCIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJGb3JtdWxhcmlvIiwidmlzaXRhcyIsImJhcnJpb3MiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwidXNlU3RhdGUiLCJpZCIsInZjcnJhZHNvbCIsImF0dHJpYnV0ZXMiLCJ2Y3Jub21hdGkiLCJ2Y3JkaXIiLCJ2Y3JiYXJyaW8iLCJiYXJyaW8iLCJWY3JJZEJhclZFIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZEYXRhIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlUmVnaXN0cm8iLCJzZWxlY3RlZERhdGEiLCJmaW5kIiwiaXRlbSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2ciLCJtYXAiLCJvcGNpb24iLCJnZXRTdGF0aWNQcm9wcyIsIlByb21pc2UiLCJhbGwiLCJwb3B1bGF0ZSIs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QUFPLENBQUM2QixHQUFSLENBQWFDLE1BQUQsaUJBQ1g7QUFBeUIsbUJBQUssRUFBRUEsTUFBTSxDQUFDMUIsRUFBdkM7QUFBQSx3QkFDR0gsUUFBUSxDQUFDUTtBQURaLGVBQWFxQixNQUFNLENBQUMxQixFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBdENGLGVBaURFO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBakRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkY7QUFBQSxrQkFERjtBQWtFRCxDQXJIRDs7QUF1SE8sZUFBZTJCLGNBQWYsR0FBZ0M7QUFDckMsUUFBTSxDQUFDaEMsT0FBRCxFQUFVQyxPQUFWLElBQXNCLE1BQU1nQyxPQUFPLENBQUNDLEdBQVIsQ0FDaEMsQ0FBQ3BELGtEQUFRLENBQUMsVUFBRCxFQUFhO0FBQUVxRCxZQUFRLEVBQUU7QUFBWixHQUFiLENBQVQsRUFDQXJELGtEQUFRLENBQUMsVUFBRCxFQUFhO0FBQUVxRCxZQUFRLEVBQUU7QUFBWixHQUFiLENBRFIsQ0FEZ0MsQ0FBbEM7QUFLQSxTQUFPO0FBQ0xDLFNBQUssRUFBRTtBQUNMcEMsYUFBTyxFQUFFQSxPQUFPLENBQUNILElBRFo7QUFFTEksYUFBTyxFQUFFQSxPQUFPLENBQUNKO0FBRlosS0FERjtBQUtMd0MsY0FBVSxFQUFFO0FBTFAsR0FBUDtBQU9EO0FBSUQsK0RBQWV0QyxVQUFmLEU7Ozs7Ozs7Ozs7O0FDM0lBLGdDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL3Zpc2l0YXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXMgZnJvbSBcInFzXCJcblxuLyoqXG4gKiBHZXQgZnVsbCBTdHJhcGkgVVJMIGZyb20gcGF0aFxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggUGF0aCBvZiB0aGUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBGdWxsIFN0cmFwaSBVUkxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFN0cmFwaVVSTChwYXRoID0gXCJcIikge1xuICByZXR1cm4gYCR7XG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkwgfHwgXCJodHRwOi8vbG9jYWxob3N0OjEzMzdcIlxuICB9JHtwYXRofWBcbn1cblxuLyoqXG4gKiBIZWxwZXIgdG8gbWFrZSBHRVQgcmVxdWVzdHMgdG8gU3RyYXBpIEFQSSBlbmRwb2ludHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFBhdGggb2YgdGhlIEFQSSByb3V0ZVxuICogQHBhcmFtIHtPYmplY3R9IHVybFBhcmFtc09iamVjdCBVUkwgcGFyYW1zIG9iamVjdCwgd2lsbCBiZSBzdHJpbmdpZmllZFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgT3B0aW9ucyBwYXNzZWQgdG8gZmV0Y2hcbiAqIEByZXR1cm5zIFBhcnNlZCBBUEkgY2FsbCByZXNwb25zZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hBUEkocGF0aCwgdXJsUGFyYW1zT2JqZWN0ID0ge30sIG9wdGlvbnMgPSB7fSkge1xuICAvLyBNZXJnZSBkZWZhdWx0IGFuZCB1c2VyIG9wdGlvbnNcbiAgY29uc3QgbWVyZ2VkT3B0aW9ucyA9IHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIC4uLm9wdGlvbnMsXG4gIH1cblxuICAvLyBCdWlsZCByZXF1ZXN0IFVSTFxuICBjb25zdCBxdWVyeVN0cmluZyA9IHFzLnN0cmluZ2lmeSh1cmxQYXJhbXNPYmplY3QpXG4gIGNvbnN0IHJlcXVlc3RVcmwgPSBgJHtnZXRTdHJhcGlVUkwoXG4gICAgYC9hcGkke3BhdGh9JHtxdWVyeVN0cmluZyA/IGA/JHtxdWVyeVN0cmluZ31gIDogXCJcIn1gXG4gICl9YFxuXG4gIC8vIFRyaWdnZXIgQVBJIGNhbGxcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0VXJsLCBtZXJnZWRPcHRpb25zKVxuXG4gIC8vIEhhbmRsZSByZXNwb25zZVxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgY29uc29sZS5lcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KVxuICAgIHRocm93IG5ldyBFcnJvcihgQW4gZXJyb3Igb2NjdXJlZCBwbGVhc2UgdHJ5IGFnYWluYClcbiAgfVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gIHJldHVybiBkYXRhXG59XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIjtcblxuY29uc3QgRm9ybXVsYXJpbyA9ICh7IHZpc2l0YXMsIGJhcnJpb3MgfSkgPT4ge1xuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBpZDogdmlzaXRhc1swXS5pZCxcbiAgICB2Y3JyYWRzb2w6IHZpc2l0YXNbMF0uYXR0cmlidXRlcy52Y3JyYWRzb2wsXG4gICAgdmNybm9tYXRpOiB2aXNpdGFzWzBdLmF0dHJpYnV0ZXMudmNybm9tYXRpLFxuICAgIHZjcmRpcjogdmlzaXRhc1swXS5hdHRyaWJ1dGVzLnZjcmRpcixcbiAgICB2Y3JiYXJyaW86IHZpc2l0YXNbMF0uYXR0cmlidXRlcy5iYXJyaW8uZGF0YS5hdHRyaWJ1dGVzLlZjcklkQmFyVkUsXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0Rm9ybURhdGEoKHByZXZEYXRhKSA9PiAoe1xuICAgICAgLi4ucHJldkRhdGEsXG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLFxuICAgIH0pKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2VSZWdpc3RybyA9IChlKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWREYXRhID0gdmlzaXRhcy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PSBlLnRhcmdldC52YWx1ZSk7XG4gICAgXG4gICAgc2V0Rm9ybURhdGEoc2VsZWN0ZWREYXRhLmF0dHJpYnV0ZXMpO1xuICAgIHNldEZvcm1EYXRhKHByZXZEYXRhID0+ICh7XG4gICAgICAuLi5wcmV2RGF0YSxcbiAgICAgIGlkOiBzZWxlY3RlZERhdGEuaWRcbiAgICB9KSk7XG4gICAgc2V0Rm9ybURhdGEocHJldkRhdGEgPT4gKHtcbiAgICAgIC4uLnByZXZEYXRhLFxuICAgICAgdmNyYmFycmlvOiBzZWxlY3RlZERhdGEuYXR0cmlidXRlcy5iYXJyaW8uZGF0YS5pZFxuICAgIH0pKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdmlzaXRhcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjEzMzcvYXBpL3Zpc2l0YXMvJHtmb3JtRGF0YS5pZH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHZpc2l0YXM6IGZvcm1EYXRhIH0pLFxuICAgICAgfSk7XG4gICAgICBpZiAodmlzaXRhcy5vaykge1xuICAgICAgICBjb25zb2xlLmxvZygnwqFTb2xpY2l0dWQgUFVUIGVudmlhZGEgY29uIMOpeGl0byEnKTtcbiAgICAgICAgLy8gUmVhbGl6YSBhbGd1bmEgYWNjacOzbiBhZGljaW9uYWwgZGVzcHXDqXMgZGUgZW52aWFyIGxhIHNvbGljaXR1ZCBQVVRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBhbCBlbnZpYXIgbGEgc29saWNpdHVkIFBVVCcpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVJlZ2lzdHJvfT5cbiAgICAgICAgICB7dmlzaXRhcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpdGVtLmlkfSB2YWx1ZT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgIHtpdGVtLmlkfS17aXRlbS5hdHRyaWJ1dGVzLnZjcm5vbWF0aX1cbiAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgSUQ6XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwiaWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuaWR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBWQ1JSQURTT0w6XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwidmNycmFkc29sXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnZjcnJhZHNvbH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBWQ1JOT01BVEk6XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwidmNybm9tYXRpXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnZjcm5vbWF0aX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBWQ1JESVI6XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwidmNyZGlyXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnZjcmRpcn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBWQ1JCQVI6XG4gICAgICAgICAgICA8c2VsZWN0IGlkPVwidmNyYmFycmlvXCIgbmFtZT1cInZjcmJhcnJpb1wiID5cbiAgICAgICAgICAgICAge2JhcnJpb3MubWFwKChvcGNpb24pID0+IChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17b3BjaW9uLmlkfSAgdmFsdWU9e29wY2lvbi5pZH0+XG4gICAgICAgICAgICAgICAgICB7Zm9ybURhdGEudmNyYmFycmlvfVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5HdWFyZGFyIGNhbWJpb3M8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgW3Zpc2l0YXMsIGJhcnJpb3MgXSA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgIFtmZXRjaEFQSShcIi92aXNpdGFzXCIsIHsgcG9wdWxhdGU6IFwiKlwiIH0pLFxuICAgIGZldGNoQVBJKFwiL2JhcnJpb3NcIiwgeyBwb3B1bGF0ZTogXCIqXCIgfSldXG4gICAgKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHZpc2l0YXM6IHZpc2l0YXMuZGF0YSxcbiAgICAgIGJhcnJpb3M6IGJhcnJpb3MuZGF0YSxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH07XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBGb3JtdWxhcmlvOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInFzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9