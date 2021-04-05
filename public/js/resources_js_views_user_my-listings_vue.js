(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_user_my-listings_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/my-listings.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/my-listings.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_requests_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/requests/user */ "./resources/js/services/requests/user.js");


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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      listings: []
    };
  },
  computed: {
    getListings: function getListings() {
      return this.listings;
    }
  },
  methods: {
    loadListings: function loadListings() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                (0,_services_requests_user__WEBPACK_IMPORTED_MODULE_1__.getUserListings)().then(function (res) {
                  _this.listings = res.data.data;
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    changeStatus: function changeStatus(ele, item) {
      var _this2 = this;

      var status = ele.target.checked ? 'online' : 'offline';
      var index = this.listings.indexOf(item);
      item.status = status;
      this.listings.splice(index, 1, item);
      (0,_services_requests_user__WEBPACK_IMPORTED_MODULE_1__.updateListingStatus)(item.id, status).then(function (res) {
        _this2.$notification.success({
          message: 'Status updated'
        });
      });
    },
    deleteUserListing: function deleteUserListing(item) {
      var __this = this;

      this.$modal.confirm({
        title: "Delete listing?",
        confirmLoading: true,
        onOk: function onOk() {
          return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    (0,_services_requests_user__WEBPACK_IMPORTED_MODULE_1__.deleteListing)(item.id).then(function (res) {
                      var index = __this.listings.indexOf(item);

                      __this.listings.splice(index, 1);

                      __this.$notification.success({
                        message: 'Listing deleted'
                      });
                    });

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }))();
        }
      });
    }
  },
  created: function created() {
    this.loadListings();
  }
});

/***/ }),

/***/ "./resources/js/views/user/my-listings.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/user/my-listings.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _my_listings_vue_vue_type_template_id_3b94802b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-listings.vue?vue&type=template&id=3b94802b& */ "./resources/js/views/user/my-listings.vue?vue&type=template&id=3b94802b&");
/* harmony import */ var _my_listings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-listings.vue?vue&type=script&lang=js& */ "./resources/js/views/user/my-listings.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _my_listings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _my_listings_vue_vue_type_template_id_3b94802b___WEBPACK_IMPORTED_MODULE_0__.render,
  _my_listings_vue_vue_type_template_id_3b94802b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/my-listings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/my-listings.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/user/my-listings.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_my_listings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./my-listings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/my-listings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_my_listings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/user/my-listings.vue?vue&type=template&id=3b94802b&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/user/my-listings.vue?vue&type=template&id=3b94802b& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_my_listings_vue_vue_type_template_id_3b94802b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_my_listings_vue_vue_type_template_id_3b94802b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_my_listings_vue_vue_type_template_id_3b94802b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./my-listings.vue?vue&type=template&id=3b94802b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/my-listings.vue?vue&type=template&id=3b94802b&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/my-listings.vue?vue&type=template&id=3b94802b&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/my-listings.vue?vue&type=template&id=3b94802b& ***!
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
    [
      _c("banner", { staticClass: "inner-banner" }, [
        _c("h1", [_vm._v("My Listings")])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "h-100 w-full flex items-center justify-center bg-teal-lightest"
        },
        [
          _c(
            "div",
            { staticClass: "bg-white p-6 m-4 w-full lg:w-2/4 " },
            _vm._l(_vm.getListings, function(listing, index) {
              return _c(
                "div",
                {
                  key: index,
                  staticClass:
                    "bg-white w-full my-3 border-2 border-gray-300 p-5 rounded-md tracking-wide shadow-lg bottom-border-style"
                },
                [
                  _c("div", { staticClass: "flex", attrs: { id: "header" } }, [
                    _c("img", {
                      staticClass:
                        "w-auto h-44 rounded-md border-2 border-gray-300",
                      attrs: { alt: "mountain", src: listing.images[0].photo }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "flex flex-col ml-5",
                        attrs: { id: "body" }
                      },
                      [
                        _c(
                          "h4",
                          {
                            staticClass: "text-xl font-semibold mb-2",
                            attrs: { id: "name" }
                          },
                          [_vm._v(_vm._s(listing.title))]
                        ),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticClass: "text-gray-800 mt-2",
                            attrs: { id: "job" }
                          },
                          [_vm._v(_vm._s(listing.excerpt))]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex mt-5" }, [
                          _c(
                            "span",
                            { staticClass: "mr-3 text-primary" },
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: { to: "/user/edit-ad/" + listing.slug }
                                },
                                [
                                  _c("i", { staticClass: "fas fa-edit mx-1" }),
                                  _vm._v("Edit")
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("span", { staticClass: "mx-3 text-red-600" }, [
                            _c(
                              "a",
                              {
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.deleteUserListing(listing)
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "fas fa-trash mx-1" }),
                                _vm._v("Delete")
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex mt-5" }, [
                          _c("label", { staticClass: "switch" }, [
                            _c("input", {
                              attrs: { type: "checkbox" },
                              domProps: {
                                checked:
                                  listing.status === "offline" ? false : true
                              },
                              on: {
                                click: function($event) {
                                  return _vm.changeStatus($event, listing)
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "slider round" })
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "ml-2" }, [
                            _vm._v(
                              _vm._s(
                                listing.status === "offline"
                                  ? "Offline"
                                  : "Published"
                              )
                            )
                          ])
                        ])
                      ]
                    )
                  ])
                ]
              )
            }),
            0
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);