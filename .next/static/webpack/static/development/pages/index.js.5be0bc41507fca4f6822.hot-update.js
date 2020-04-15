webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "E:\\rnd\\nextjsTraversyMedia\\components\\Prices.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Prices = function Prices(_ref) {
  var bpi = _ref.bpi;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("USD"),
      currency = _useState[0],
      setcurrency = _useState[1];

  var list = "";

  if (currency === "USD") {
    list = __jsx("li", {
      className: "list-group-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 7
      }
    }, "Bitcoin rate for ", bpi.USD.description, " :", " ", __jsx("span", {
      className: "badge badge-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }
    }, bpi.USD.code, " ", __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 26
      }
    }, bpi.USD.rate)));
  } else if (currency === "GBP") {
    list = __jsx("li", {
      className: "list-group-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }
    }, "Bitcoin rate for ", bpi.GBP.description, " :", " ", __jsx("span", {
      className: "badge badge-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    }, bpi.GBP.code, " ", __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 26
      }
    }, bpi.GBP.rate)));
  } else if (currency === "EUR") {
    list = __jsx("li", {
      className: "list-group-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }
    }, "Bitcoin rate for ", bpi.EUR.description, " :", " ", __jsx("span", {
      className: "badge badge-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }
    }, bpi.EUR.code, " ", __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 26
      }
    }, bpi.EUR.rate)));
  }

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx("ul", {
    className: "list-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, list), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), __jsx("select", {
    ocChange: function ocChange(e) {
      return setcurrency(e.target.value);
    },
    className: "form-control",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Prices);

/***/ })

})
//# sourceMappingURL=index.js.5be0bc41507fca4f6822.hot-update.js.map