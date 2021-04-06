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
    }); //store all categories

    this.$store.dispatch('misc/loadCategories');
  }
});

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
              attrs: { to: { name: "listings" } }
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
                attrs: { to: { name: "listings" } }
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
                attrs: { to: { name: "categories" } }
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