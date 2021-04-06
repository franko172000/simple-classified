(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_public_all-categories_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/public/all-categories.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/public/all-categories.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      categories: [],
      limit: 10,
      totalRec: 0,
      page: 1
    };
  },
  computed: {
    getCategories: function getCategories() {
      return this.categories;
    },
    getTotalPages: function getTotalPages() {
      return Math.ceil(this.totalRec / this.limit);
    }
  },
  methods: {
    loadCategories: function loadCategories(page) {
      var _this = this;

      (0,_services_requests_public__WEBPACK_IMPORTED_MODULE_0__.getCategories)(this.limit, page).then(function (res) {
        _this.categories = res.data.data;
        _this.totalRec = res.data.total_records;
      });
    },
    repondToChange: function repondToChange(page) {
      this.loadCategories(page);
    }
  },
  mounted: function mounted() {
    this.loadCategories(1);
  }
});

/***/ }),

/***/ "./resources/js/views/public/all-categories.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/public/all-categories.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _all_categories_vue_vue_type_template_id_04075082___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-categories.vue?vue&type=template&id=04075082& */ "./resources/js/views/public/all-categories.vue?vue&type=template&id=04075082&");
/* harmony import */ var _all_categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-categories.vue?vue&type=script&lang=js& */ "./resources/js/views/public/all-categories.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _all_categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _all_categories_vue_vue_type_template_id_04075082___WEBPACK_IMPORTED_MODULE_0__.render,
  _all_categories_vue_vue_type_template_id_04075082___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/public/all-categories.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/public/all-categories.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/public/all-categories.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_all_categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./all-categories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/public/all-categories.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_all_categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/public/all-categories.vue?vue&type=template&id=04075082&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/public/all-categories.vue?vue&type=template&id=04075082& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_all_categories_vue_vue_type_template_id_04075082___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_all_categories_vue_vue_type_template_id_04075082___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_all_categories_vue_vue_type_template_id_04075082___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./all-categories.vue?vue&type=template&id=04075082& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/public/all-categories.vue?vue&type=template&id=04075082&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/public/all-categories.vue?vue&type=template&id=04075082&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/public/all-categories.vue?vue&type=template&id=04075082& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "inner-banner", attrs: { showHomeButton: true } },
        [_c("h1", [_vm._v("All Categories")])]
      ),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "inner-content category-listing" },
        [
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
          _c("pagination", {
            attrs: { totalPages: _vm.getTotalPages },
            on: { onPageChange: _vm.repondToChange }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);