webpackJsonp([21],{

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_Badge_vue__ = __webpack_require__(531);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_57fefce2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_Badge_vue__ = __webpack_require__(586);
function injectStyle (ssrContext) {
  __webpack_require__(585)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_Badge_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_57fefce2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_Badge_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    closeHandle: function closeHandle() {
      this.$notify({
        message: "点击了关闭按钮",
        delay: 2000,
        type: "default"
      });
    }
  }
});

/***/ }),

/***/ 585:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-box"},[_c('div',{staticClass:"components-title"},[_vm._v("Badge 徽章")]),_vm._v(" "),_c('div',{staticClass:"components-wrapper"},[_c('ul',[_c('li',[_c('div',{staticClass:"components-content"},[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("Badge 徽章（默认）")]),_vm._v(" "),_c('div',{staticClass:"badge-box"},[_c('dy-badge',{attrs:{"value":6}},[_c('dy-button',[_vm._v("徽章")])],1)],1),_vm._v(" "),_c('div',{staticClass:"badge-box"},[_c('dy-badge',{attrs:{"value":0}},[_c('dy-button',[_vm._v("徽章")])],1)],1),_vm._v(" "),_c('div',{staticClass:"badge-box"},[_c('dy-badge',{attrs:{"value":6666,"max":99}},[_c('dy-button',[_vm._v("徽章")])],1)],1),_vm._v(" "),_c('div',{staticClass:"badge-box"},[_c('dy-badge',{attrs:{"isDot":""}},[_c('dy-button',[_vm._v("徽章")])],1)],1)])]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n        \r\n      <dy-badge :value=\"6\">\r\n        <dy-button>徽章</dy-button>\r\n      </dy-badge>\r\n\r\n      <dy-badge :value=\"0\">\r\n        <dy-button>徽章</dy-button>\r\n      </dy-badge>\r\n\r\n      <dy-badge :value=\"6666\" :max=\"99\">\r\n        <dy-button>徽章</dy-button>\r\n      </dy-badge>\r\n\r\n      <dy-badge isDot>\r\n        <dy-button>徽章</dy-button>\r\n      </dy-badge>\r\n\r\n    </template>\r\n    ")]),_vm._v("\r\n")])])])]),_vm._v(" "),_c('div',{staticStyle:{"height":"600px"}})])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("使用 "),_c('code',[_vm._v("dy-badge")]),_vm._v(" 组件包裹使用即可，内部内容可以自行定义")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('p',[_vm._v("参数设置如下：")]),_vm._v(" "),_c('p',[_c('code',[_vm._v(":value")]),_vm._v(" -- 徽章显示数目，若为 "),_c('code',[_vm._v("0")]),_vm._v("，则会隐藏")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("max")]),_vm._v(" -- 用于指定显示的最大数目")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("isDot")]),_vm._v(" -- 显示标识，而不显示具体数目")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});