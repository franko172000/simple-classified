(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_public_ad-detail_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/public/ad-detail.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/public/ad-detail.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_requests_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/requests/public */ "./resources/js/services/requests/public.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers */ "./resources/js/helpers.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
      listing: {},
      user: {},
      images: ['https://images.unsplash.com/photo-1453831362806-3d5577f014a4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ', 'https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ', 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ', 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ', 'https://images.unsplash.com/photo-1472926373053-51b220987527?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ', 'https://images.unsplash.com/photo-1497534547324-0ebb3f052e88?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ']
    };
  },
  computed: {
    popularListing: function popularListing() {
      return this.listing;
    }
  },
  methods: {
    getAmount: function getAmount(amount, currency) {
      return (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.formatAmount)(amount, currency);
    },
    getFormatDate: function getFormatDate(postedAt) {
      return (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.formatDate)(postedAt);
    },
    getPopularListing: function getPopularListing() {
      var _this = this;

      getListings().then(function (res) {
        _this.listings = res.data.data;
      });
    },
    loadListing: function loadListing() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var slug, res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                slug = _this2.$route.params.slug;
                _context.next = 3;
                return (0,_services_requests_public__WEBPACK_IMPORTED_MODULE_1__.getListingDetail)(slug);

              case 3:
                res = _context.sent;
                data = res.data.data;
                _this2.listing = data;
                _this2.images = data.images;
                _this2.user = res.data.user;

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  mounted: function mounted() {
    this.loadListing();
  }
});

/***/ }),

/***/ "./resources/js/views/public/ad-detail.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/public/ad-detail.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ad_detail_vue_vue_type_template_id_f2d3b0d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ad-detail.vue?vue&type=template&id=f2d3b0d8& */ "./resources/js/views/public/ad-detail.vue?vue&type=template&id=f2d3b0d8&");
/* harmony import */ var _ad_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ad-detail.vue?vue&type=script&lang=js& */ "./resources/js/views/public/ad-detail.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ad_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ad_detail_vue_vue_type_template_id_f2d3b0d8___WEBPACK_IMPORTED_MODULE_0__.render,
  _ad_detail_vue_vue_type_template_id_f2d3b0d8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/public/ad-detail.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/public/ad-detail.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/public/ad-detail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ad_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ad-detail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/public/ad-detail.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ad_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/public/ad-detail.vue?vue&type=template&id=f2d3b0d8&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/public/ad-detail.vue?vue&type=template&id=f2d3b0d8& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ad_detail_vue_vue_type_template_id_f2d3b0d8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ad_detail_vue_vue_type_template_id_f2d3b0d8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ad_detail_vue_vue_type_template_id_f2d3b0d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ad-detail.vue?vue&type=template&id=f2d3b0d8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/public/ad-detail.vue?vue&type=template&id=f2d3b0d8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/public/ad-detail.vue?vue&type=template&id=f2d3b0d8&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/public/ad-detail.vue?vue&type=template&id=f2d3b0d8& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
        [_c("h1", [_vm._v("Advert Detail")])]
      ),
      _vm._v(" "),
      _c("section", { staticClass: "inner-content" }, [
        _c(
          "div",
          { staticClass: "listing-detail" },
          [
            _c(
              "card",
              { attrs: { className: "details-card mb-3" } },
              [
                _c("h2", [_vm._v(_vm._s(_vm.listing.title))]),
                _vm._v(" "),
                _c("p", { staticClass: "flex justify-between my-3" }, [
                  _c("span", [
                    _c("b", [_vm._v("Posted:")]),
                    _vm._v(
                      " " + _vm._s(_vm.getFormatDate(_vm.listing.posted_at))
                    )
                  ]),
                  _vm._v(" "),
                  _c("span", [
                    _c("b", [_vm._v("Category:")]),
                    _vm._v(" " + _vm._s(_vm.listing.category))
                  ]),
                  _vm._v(" "),
                  _c("span", [
                    _c("b", [_vm._v("Location:")]),
                    _vm._v(" " + _vm._s(_vm.listing.location))
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "carousel",
                  { attrs: { autoplay: true } },
                  _vm._l(_vm.images, function(image, index) {
                    return _c("slide", { key: index }, [
                      _c("img", { attrs: { src: image.photo, alt: "" } })
                    ])
                  }),
                  1
                ),
                _vm._v(" "),
                _c("h2", { staticClass: "my-2" }, [_vm._v("Description")]),
                _vm._v(" "),
                _c("div", [
                  _vm._v(
                    "\n                     " +
                      _vm._s(_vm.listing.description) +
                      "\n                 "
                  )
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "widget-card" },
              [
                _c("card", { attrs: { className: "w-full bg-primary" } }, [
                  _c("h2", {
                    staticClass: "text-white",
                    domProps: {
                      innerHTML: _vm._s(_vm.getAmount(_vm.listing.price))
                    }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "card",
                  { attrs: { className: "w-full flex flex-col items-center" } },
                  [
                    _c("h3", [_vm._v(" Seller Info ")]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "rounded-full h-24 w-24 flex items-center justify-center bg-gray-200 my-5"
                      },
                      [_c("i", { staticClass: "fas fa-user" })]
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-xl font-medium" }, [
                      _vm._v(_vm._s(_vm.user.name))
                    ])
                  ]
                )
              ],
              1
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);