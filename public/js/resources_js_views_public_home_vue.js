(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_public_home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/public/home.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/public/home.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_requests_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/requests/public */ "./resources/js/services/requests/public.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      listings: [],
      categories: []
    };
  },
  computed: {
    popularListing: function popularListing() {
      return this.listings;
    },
    getCategories: function getCategories() {
      return this.categories;
    }
  },
  methods: {
    getPopularListing: function getPopularListing() {
      var _this = this;

      (0,_services_requests_public__WEBPACK_IMPORTED_MODULE_0__.getListings)(20, 1).then(function (res) {
        _this.listings = res.data.data;
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.getPopularListing();
    (0,_services_requests_public__WEBPACK_IMPORTED_MODULE_0__.getCategories)(10, 1).then(function (res) {
      _this2.categories = res.data.data;
    });
  }
});

/***/ }),

/***/ "./resources/js/services/requests/public.js":
/*!**************************************************!*\
  !*** ./resources/js/services/requests/public.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLocations": () => (/* binding */ getLocations),
/* harmony export */   "getAllCategories": () => (/* binding */ getAllCategories),
/* harmony export */   "getCategories": () => (/* binding */ getCategories),
/* harmony export */   "getListingDetail": () => (/* binding */ getListingDetail),
/* harmony export */   "getListings": () => (/* binding */ getListings)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../axios */ "./resources/js/services/axios/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var resources = '/';

var generateParams = function generateParams(limit, page) {
  return limit && page ? '?' + new URLSearchParams({
    limit: limit,
    page: page
  }) : '';
};

var getLocations = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", _axios__WEBPACK_IMPORTED_MODULE_1__.default.get(resources + 'locations'));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getLocations() {
    return _ref.apply(this, arguments);
  };
}();
var getAllCategories = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", _axios__WEBPACK_IMPORTED_MODULE_1__.default.get(resources + 'categories/all'));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getAllCategories() {
    return _ref2.apply(this, arguments);
  };
}();
var getCategories = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(limit, page) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", _axios__WEBPACK_IMPORTED_MODULE_1__.default.get(resources + 'categories' + generateParams(limit, page)));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getCategories(_x, _x2) {
    return _ref3.apply(this, arguments);
  };
}();
var getListingDetail = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(slug) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", _axios__WEBPACK_IMPORTED_MODULE_1__.default.get(resources + 'listings/' + slug));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getListingDetail(_x3) {
    return _ref4.apply(this, arguments);
  };
}();
var getListings = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(limit, page) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", _axios__WEBPACK_IMPORTED_MODULE_1__.default.get(resources + 'listings' + generateParams(limit, page)));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function getListings(_x4, _x5) {
    return _ref5.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./resources/js/views/public/home.vue":
/*!********************************************!*\
  !*** ./resources/js/views/public/home.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_vue_vue_type_template_id_d43babd4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.vue?vue&type=template&id=d43babd4& */ "./resources/js/views/public/home.vue?vue&type=template&id=d43babd4&");
/* harmony import */ var _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.vue?vue&type=script&lang=js& */ "./resources/js/views/public/home.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _home_vue_vue_type_template_id_d43babd4___WEBPACK_IMPORTED_MODULE_0__.render,
  _home_vue_vue_type_template_id_d43babd4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/public/home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/public/home.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/public/home.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/public/home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/public/home.vue?vue&type=template&id=d43babd4&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/public/home.vue?vue&type=template&id=d43babd4& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_d43babd4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_d43babd4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_d43babd4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./home.vue?vue&type=template&id=d43babd4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/public/home.vue?vue&type=template&id=d43babd4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/public/home.vue?vue&type=template&id=d43babd4&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/public/home.vue?vue&type=template&id=d43babd4& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container" },
    [
      _c(
        "banner",
        { staticClass: "main-banner" },
        [
          _c("h1", [
            _vm._v("You can Buy, Sell, Rent, Book anything from here ")
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Buy and sell everything from used cars to mobile phones and computers, or search for property, jobs and more in the world."
            )
          ]),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "btn btn-default btn-sm my-10",
              attrs: { to: "/listings" }
            },
            [_c("i", { staticClass: "fas fa-eye" }), _vm._v(" Show all ads ")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("section", { staticClass: "inner-content popular-listing" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "listing" },
          _vm._l(_vm.popularListing, function(listing, index) {
            return _c("listing-card", {
              key: index,
              attrs: { listing: listing }
            })
          }),
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "flex justify-center" },
          [
            _c(
              "router-link",
              {
                staticClass: "btn btn-primary my-10",
                attrs: { to: "/listings" }
              },
              [_vm._v(" View more ads")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "inner-content category-listing" }, [
        _vm._m(1),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "listing" },
          _vm._l(_vm.getCategories, function(category, index) {
            return _c("category-card", {
              key: index,
              attrs: { category: category }
            })
          }),
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "flex justify-center" },
          [
            _c(
              "router-link",
              {
                staticClass: "btn btn-primary my-10",
                attrs: { to: "/categories" }
              },
              [_vm._v(" View more categories")]
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", [_vm._v(" Popular Trending "), _c("span", [_vm._v("Ads")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", [
      _vm._v(" Top Categories by "),
      _c("span", [_vm._v("Ads")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);