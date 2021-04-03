(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_auth_register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/auth/register.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/auth/register.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  name: 'Login',
  data: function data() {
    return {
      user: {
        email: "",
        password: ""
      },
      form: this.$form.createForm(this)
    };
  },
  computed: {
    loading: function loading() {
      return this.$store.state.user.loading;
    }
  },
  methods: {
    compareToFirstPassword: function compareToFirstPassword(rule, value, callback) {
      var form = this.form;

      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    },
    validateToNextPassword: function validateToNextPassword(rule, value, callback) {
      var form = this.form;

      if (value && this.confirmDirty) {
        form.validateFields(['conf_password'], {
          force: true
        });
      }

      callback();
    },
    handleRegistration: function handleRegistration() {
      var _this = this;

      this.form.validateFields(function (err, values) {
        if (!err) {
          _this.$store.dispatch('user/REGISTER', {
            payload: values
          });
        }
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./resources/js/views/auth/register.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/auth/register.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _register_vue_vue_type_template_id_005be7bb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=005be7bb& */ "./resources/js/views/auth/register.vue?vue&type=template&id=005be7bb&");
/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ "./resources/js/views/auth/register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _register_vue_vue_type_template_id_005be7bb___WEBPACK_IMPORTED_MODULE_0__.render,
  _register_vue_vue_type_template_id_005be7bb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/auth/register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/auth/register.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/auth/register.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/auth/register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/auth/register.vue?vue&type=template&id=005be7bb&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/auth/register.vue?vue&type=template&id=005be7bb& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_005be7bb___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_005be7bb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_005be7bb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./register.vue?vue&type=template&id=005be7bb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/auth/register.vue?vue&type=template&id=005be7bb&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/auth/register.vue?vue&type=template&id=005be7bb&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/auth/register.vue?vue&type=template&id=005be7bb& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "auth" } }, [
    _c("div", { staticClass: "bg-section register-bg" }, [
      _c(
        "div",
        { staticClass: "nav" },
        [
          _c(
            "router-link",
            { staticClass: "text-primary", attrs: { to: "/" } },
            [_c("i", { staticClass: "fas fa-arrow-left" })]
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm._m(0)
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-section" }, [
      _c("h2", [_vm._v("Create Account")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form" },
        [
          _c(
            "a-form",
            {
              attrs: { form: _vm.form },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.handleRegistration($event)
                }
              }
            },
            [
              _c(
                "div",
                [
                  _c(
                    "a-form-item",
                    { attrs: { label: "First name" } },
                    [
                      _c("a-input", {
                        directives: [
                          {
                            name: "decorator",
                            rawName: "v-decorator",
                            value: [
                              "firstname",
                              {
                                rules: [
                                  {
                                    required: true,
                                    message: "Please enter first name"
                                  }
                                ]
                              }
                            ],
                            expression:
                              "['firstname',{rules: [{ required: true, message: 'Please enter first name' }] }]"
                          }
                        ],
                        attrs: {
                          placeholder: "Enter your first name",
                          name: "firstname",
                          size: "large"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "a-form-item",
                    { attrs: { label: "Last name" } },
                    [
                      _c("a-input", {
                        directives: [
                          {
                            name: "decorator",
                            rawName: "v-decorator",
                            value: [
                              "lastname",
                              {
                                rules: [
                                  {
                                    required: true,
                                    message: "Please enter last name"
                                  }
                                ]
                              }
                            ],
                            expression:
                              "['lastname',{rules: [{ required: true, message: 'Please enter last name' }] }]"
                          }
                        ],
                        attrs: {
                          placeholder: "Enter your last name",
                          name: "lastname",
                          size: "large"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "a-form-item",
                    { attrs: { label: "Email Address" } },
                    [
                      _c("a-input", {
                        directives: [
                          {
                            name: "decorator",
                            rawName: "v-decorator",
                            value: [
                              "email",
                              {
                                rules: [
                                  {
                                    type: "email",
                                    message: "Please enter a valid email"
                                  },
                                  {
                                    required: true,
                                    message: "Please enter addesss"
                                  }
                                ]
                              }
                            ],
                            expression:
                              "['email',{rules: [{type: 'email',message:'Please enter a valid email'},{ required: true, message: 'Please enter addesss' }] }]"
                          }
                        ],
                        attrs: {
                          placeholder: "Email Address",
                          name: "email",
                          size: "large"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "a-form-item",
                    { attrs: { label: "Password" } },
                    [
                      _c("a-input-password", {
                        directives: [
                          {
                            name: "decorator",
                            rawName: "v-decorator",
                            value: [
                              "password",
                              {
                                rules: [
                                  {
                                    required: true,
                                    message: "Please enter password"
                                  },
                                  {
                                    validator: _vm.validateToNextPassword
                                  }
                                ]
                              }
                            ],
                            expression:
                              "['password',{rules: [{ required: true, message: 'Please enter password' }, {\n                            validator: validateToNextPassword,\n                        }] }]"
                          }
                        ],
                        attrs: {
                          placeholder: "Enter Password",
                          name: "password",
                          size: "large"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "a-form-item",
                    { attrs: { label: "Confirm Password" } },
                    [
                      _c("a-input-password", {
                        directives: [
                          {
                            name: "decorator",
                            rawName: "v-decorator",
                            value: [
                              "conf_password",
                              {
                                rules: [
                                  {
                                    required: true,
                                    message: "Please enter password"
                                  },
                                  {
                                    validator: _vm.compareToFirstPassword
                                  }
                                ]
                              }
                            ],
                            expression:
                              "['conf_password',{rules: [{ required: true, message: 'Please enter password' }, {\n                            validator: compareToFirstPassword,\n                        }] }]"
                          }
                        ],
                        attrs: {
                          placeholder: "Confirm Password",
                          name: "conf_password",
                          size: "large"
                        }
                      })
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
                        loading: _vm.loading,
                        htmlType: "submit"
                      }
                    },
                    [_c("strong", [_vm._v("Register")])]
                  )
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c("div", [
            _c(
              "p",
              { staticClass: "text-center" },
              [
                _vm._v("Already a member? "),
                _c(
                  "router-link",
                  { staticClass: "text-primary", attrs: { to: "/auth/login" } },
                  [_vm._v("Login now")]
                )
              ],
              1
            )
          ])
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "body-text" }, [
      _c("h1", [_vm._v("Register for free")]),
      _vm._v(" "),
      _c("p", [
        _vm._v("Create an account to enjoy full features of Classic Ads")
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);