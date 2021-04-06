(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_user_edit-ad_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/edit-ad.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/edit-ad.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _services_requests_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/requests/public */ "./resources/js/services/requests/public.js");
/* harmony import */ var _services_requests_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/requests/user */ "./resources/js/services/requests/user.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      uploadProgress: false,
      uploadImgProgress: false,
      images: [],
      categories: [],
      locations: [],
      listing: {},
      currencies: [{
        name: 'Naira',
        code: 'NGN'
      }, {
        name: 'US Dollars',
        code: 'USD'
      }],
      form: this.$form.createForm(this)
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapState)(['tmpPhotos'])), {}, {
    getLocations: function getLocations() {
      return this.locations;
    },
    getCategories: function getCategories() {
      return this.categories;
    },
    getImages: function getImages() {
      return this.images;
    },
    getListing: function getListing() {
      return this.listing;
    }
  }),
  methods: {
    checkFile: function checkFile(file) {
      var isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

      if (!isJpgOrPng) {
        this.$notification.error({
          message: 'You can only upload JPG & PNG file!'
        });
      }

      var isLt2M = file.size / 1024 / 1024 < 2;

      if (!isLt2M) {
        this.$notification.error({
          message: 'Image must smaller than 2MB!'
        });
      }

      return isJpgOrPng && isLt2M;
    },
    triggerClick: function triggerClick() {
      this.$refs.filePic.click();
    },
    onSelectedPhoto: function onSelectedPhoto(e) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var file, data, res, img;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                file = e.target.files[0];

                if (_this.checkFile(file)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", false);

              case 3:
                _this.imgSrc = URL.createObjectURL(e.target.files[0]);
                data = new FormData();
                data.append('photo', _this.$refs.filePic.files[0]);
                _this.uploadImgProgress = true;
                _context.next = 9;
                return (0,_services_requests_user__WEBPACK_IMPORTED_MODULE_2__.uploadPhoto)(data);

              case 9:
                res = _context.sent;
                img = res.data.data;
                img['removed'] = false;
                img['new'] = true;

                _this.images.push(img);

                _this.uploadImgProgress = false;

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    removeImage: function removeImage(index, img) {
      var __this = this;

      this.$modal.confirm({
        title: "Delete image?",
        onOk: function onOk() {
          return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    img.removed = true;

                    __this.images.splice(index, 1, img);

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }))();
        }
      });
    },
    updatePost: function updatePost() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var __this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                __this = _this2;

                _this2.form.validateFields( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(err, values) {
                    var slug;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            if (err) {
                              _context3.next = 8;
                              break;
                            }

                            if (!(__this.images.length === 0)) {
                              _context3.next = 4;
                              break;
                            }

                            __this.$notification.error({
                              message: 'You must upload atleast one image'
                            });

                            return _context3.abrupt("return");

                          case 4:
                            __this.uploadProgress = true;
                            values['images'] = __this.images;
                            slug = _this2.$route.params.slug;
                            (0,_services_requests_user__WEBPACK_IMPORTED_MODULE_2__.updateAdPost)(values, slug).then(function (res) {
                              __this.$notification.success({
                                message: 'Ad was updated successfully!'
                              });

                              __this.uploadProgress = false; //clear storage

                              __this.$store.dispatch('tmpPhotos/removeTempImages');

                              __this.form.resetFields();

                              __this.$router.push({
                                name: 'user-listings'
                              });
                            });

                          case 8:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x, _x2) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    loadListing: function loadListing() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        var slug, res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                slug = _this3.$route.params.slug;
                _context5.next = 3;
                return (0,_services_requests_public__WEBPACK_IMPORTED_MODULE_1__.getListingDetail)(slug);

              case 3:
                res = _context5.sent;
                data = res.data.data;
                _this3.listing = data;

                _this3.listing.images.map(function (val) {
                  val['removed'] = false;
                });

                _this3.images = _this3.listing.images;

                _this3.form.setFieldsValue({
                  title: data.title,
                  excerpt: data.excerpt,
                  description: data.description,
                  price: data.price,
                  currency: data.currency,
                  category: data.category_id,
                  location: data.location_code
                });

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _this4.loadListing();

            case 2:
              (0,_services_requests_public__WEBPACK_IMPORTED_MODULE_1__.getLocations)().then(function (res) {
                _this4.locations = res.data.data;
              });
              (0,_services_requests_public__WEBPACK_IMPORTED_MODULE_1__.getAllCategories)().then(function (res) {
                _this4.categories = res.data.data;
              });

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }))();
  }
});

/***/ }),

/***/ "./resources/js/views/user/edit-ad.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/user/edit-ad.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _edit_ad_vue_vue_type_template_id_740fd401___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-ad.vue?vue&type=template&id=740fd401& */ "./resources/js/views/user/edit-ad.vue?vue&type=template&id=740fd401&");
/* harmony import */ var _edit_ad_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-ad.vue?vue&type=script&lang=js& */ "./resources/js/views/user/edit-ad.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _edit_ad_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _edit_ad_vue_vue_type_template_id_740fd401___WEBPACK_IMPORTED_MODULE_0__.render,
  _edit_ad_vue_vue_type_template_id_740fd401___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/edit-ad.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/edit-ad.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/user/edit-ad.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_ad_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit-ad.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/edit-ad.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_ad_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/user/edit-ad.vue?vue&type=template&id=740fd401&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/user/edit-ad.vue?vue&type=template&id=740fd401& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_ad_vue_vue_type_template_id_740fd401___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_ad_vue_vue_type_template_id_740fd401___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_ad_vue_vue_type_template_id_740fd401___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit-ad.vue?vue&type=template&id=740fd401& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/edit-ad.vue?vue&type=template&id=740fd401&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/edit-ad.vue?vue&type=template&id=740fd401&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/edit-ad.vue?vue&type=template&id=740fd401& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
      _c(
        "banner",
        { staticClass: "inner-banner", attrs: { showHomeButton: true } },
        [_c("h1", [_vm._v("Edit Listing")])]
      ),
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
            {
              staticClass:
                "bg-white rounded shadow p-6 m-4 w-full lg:w-2/4 border-gray-300 border bottom-border-style"
            },
            [
              _c(
                "a-form",
                {
                  attrs: { form: _vm.form },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.updatePost($event)
                    }
                  }
                },
                [
                  _c(
                    "div",
                    [
                      _c(
                        "a-form-item",
                        { attrs: { label: "Post title" } },
                        [
                          _c("a-input", {
                            directives: [
                              {
                                name: "decorator",
                                rawName: "v-decorator",
                                value: [
                                  "title",
                                  {
                                    rules: [
                                      {
                                        required: true,
                                        message: "Please enter post title"
                                      }
                                    ]
                                  }
                                ],
                                expression:
                                  "['title',{rules: [{ required: true, message: 'Please enter post title' }] }]"
                              }
                            ],
                            attrs: {
                              placeholder: "Enter your post title",
                              name: "title",
                              size: "large"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-form-item",
                        { attrs: { label: "Excerpt" } },
                        [
                          _c("a-input", {
                            directives: [
                              {
                                name: "decorator",
                                rawName: "v-decorator",
                                value: [
                                  "excerpt",
                                  {
                                    rules: [
                                      {
                                        required: true,
                                        message: "Please enter excerpt"
                                      }
                                    ]
                                  }
                                ],
                                expression:
                                  "['excerpt',{rules: [{ required: true, message: 'Please enter excerpt' }] }]"
                              }
                            ],
                            attrs: { rows: "5", type: "textarea" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-form-item",
                        { attrs: { label: "Description" } },
                        [
                          _c("a-input", {
                            directives: [
                              {
                                name: "decorator",
                                rawName: "v-decorator",
                                value: [
                                  "description",
                                  {
                                    rules: [
                                      {
                                        required: true,
                                        message: "Please enter description"
                                      }
                                    ]
                                  }
                                ],
                                expression:
                                  "['description',{rules: [{ required: true, message: 'Please enter description' }] }]"
                              }
                            ],
                            attrs: { rows: "10", type: "textarea" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-form-item",
                        { attrs: { label: "Ad Photo" } },
                        [
                          _c(
                            "a-button",
                            {
                              attrs: {
                                htmlType: "button",
                                loading: _vm.uploadImgProgress
                              },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.triggerClick($event)
                                }
                              }
                            },
                            [
                              _c("a-icon", { attrs: { type: "upload" } }),
                              _vm._v(
                                "Click to select photo\n                          "
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.getImages, function(img, index) {
                            return _c(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: !img.removed,
                                    expression: "!img.removed"
                                  }
                                ],
                                key: index,
                                staticClass: "flex"
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "bg-white w-2/4 flex items-center p-2 rounded shadow border m-1"
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "flex items-center space-x-4"
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "w-16 h-16 rounded-xl",
                                          attrs: {
                                            src: img.photo,
                                            alt: "My profile"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "flex-grow p-3" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "text-sm text-gray-500"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                    img.filename\n                                  "
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "p-2" }, [
                                      _c(
                                        "button",
                                        {
                                          attrs: { type: "button" },
                                          on: {
                                            click: function($event) {
                                              return _vm.removeImage(index, img)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fas fa-trash"
                                          })
                                        ]
                                      )
                                    ])
                                  ]
                                )
                              ]
                            )
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-2-grid" },
                        [
                          _c(
                            "a-form-item",
                            { attrs: { label: "Price" } },
                            [
                              _c("a-input", {
                                directives: [
                                  {
                                    name: "decorator",
                                    rawName: "v-decorator",
                                    value: [
                                      "price",
                                      {
                                        rules: [
                                          {
                                            required: true,
                                            message: "Please enter price"
                                          }
                                        ]
                                      }
                                    ],
                                    expression:
                                      "['price',{rules: [{ required: true, message: 'Please enter price' }] }]"
                                  }
                                ],
                                attrs: {
                                  placeholder: "Enter price",
                                  name: "price",
                                  size: "large"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "a-form-item",
                            { attrs: { label: "Currency" } },
                            [
                              _c(
                                "a-select",
                                {
                                  directives: [
                                    {
                                      name: "decorator",
                                      rawName: "v-decorator",
                                      value: [
                                        "currency",
                                        {
                                          rules: [
                                            {
                                              required: true,
                                              message: "Please select currency"
                                            }
                                          ]
                                        }
                                      ],
                                      expression:
                                        "['currency',{rules: [{ required: true, message: 'Please select currency' }] }]"
                                    }
                                  ],
                                  attrs: { size: "large" }
                                },
                                _vm._l(_vm.currencies, function(
                                  currency,
                                  index
                                ) {
                                  return _c(
                                    "a-select-option",
                                    {
                                      key: index,
                                      attrs: { value: currency.code }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(currency.name) +
                                          "\n                                "
                                      )
                                    ]
                                  )
                                }),
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-2-grid" },
                        [
                          _c(
                            "a-form-item",
                            { attrs: { label: "Category" } },
                            [
                              _c(
                                "a-select",
                                {
                                  directives: [
                                    {
                                      name: "decorator",
                                      rawName: "v-decorator",
                                      value: [
                                        "category",
                                        {
                                          rules: [
                                            {
                                              required: true,
                                              message: "Please select category"
                                            }
                                          ]
                                        }
                                      ],
                                      expression:
                                        "['category',{rules: [{ required: true, message: 'Please select category' }] }]"
                                    }
                                  ],
                                  attrs: { size: "large" }
                                },
                                _vm._l(_vm.getCategories, function(
                                  category,
                                  index
                                ) {
                                  return _c(
                                    "a-select-option",
                                    {
                                      key: index,
                                      attrs: { value: category.id }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(category.name) +
                                          "\n                                "
                                      )
                                    ]
                                  )
                                }),
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "a-form-item",
                            { attrs: { label: "Location" } },
                            [
                              _c(
                                "a-select",
                                {
                                  directives: [
                                    {
                                      name: "decorator",
                                      rawName: "v-decorator",
                                      value: [
                                        "location",
                                        {
                                          rules: [
                                            {
                                              required: true,
                                              message: "Please select location"
                                            }
                                          ]
                                        }
                                      ],
                                      expression:
                                        "['location',{rules: [{ required: true, message: 'Please select location' }] }]"
                                    }
                                  ],
                                  attrs: { size: "large" }
                                },
                                _vm._l(_vm.getLocations, function(
                                  location,
                                  index
                                ) {
                                  return _c(
                                    "a-select-option",
                                    {
                                      key: index,
                                      attrs: { value: location.code }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(location.name) +
                                          "\n                                "
                                      )
                                    ]
                                  )
                                }),
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-button",
                        {
                          staticClass: "text-center w-100",
                          attrs: {
                            type: "primary",
                            size: "large",
                            loading: _vm.uploadProgress,
                            htmlType: "submit"
                          }
                        },
                        [_c("strong", [_vm._v("Submit")])]
                      )
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c("form", [
                _c("input", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: false,
                      expression: "false"
                    }
                  ],
                  ref: "filePic",
                  attrs: { type: "file", name: "profile_photo" },
                  on: { change: _vm.onSelectedPhoto }
                })
              ])
            ],
            1
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