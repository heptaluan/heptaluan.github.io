webpackJsonp([18],{

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_Close_vue__ = __webpack_require__(509);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_882bb326_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_Close_vue__ = __webpack_require__(536);
function injectStyle (ssrContext) {
  __webpack_require__(535)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_Close_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_882bb326_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_Close_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 509:
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

/***/ 535:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-box"},[_c('div',{staticClass:"components-title"},[_vm._v("Close 关闭按钮")]),_vm._v(" "),_c('div',{staticClass:"components-wrapper"},[_c('ul',[_c('li',[_c('div',{staticClass:"components-content"},[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("Close 关闭按钮")]),_vm._v(" "),_c('div',[_c('dy-close',{attrs:{"size":"28"}}),_vm._v(" "),_c('dy-close',{attrs:{"size":"20"}}),_vm._v(" "),_c('dy-close')],1)])]),_vm._v(" "),_c('div',{staticClass:"components-content"},[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("绑定 Close 点击事件")]),_vm._v(" "),_c('div',[_c('dy-close',{attrs:{"size":"20"},on:{"click":_vm.closeHandle}})],1)])]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n        \r\n        <dy-close size=\"28\"></dy-close>\r\n\r\n        <dy-close size=\"20\"></dy-close>\r\n\r\n        <dy-close></dy-close>\r\n\r\n        <dy-close size=\"20\" @click=\"closeHandle\"></dy-close>\r\n\r\n    </template>\r\n\r\n    <script>\r\n\r\n        export default {\r\n            methods: {\r\n                closeHandle() {\r\n                    this.$notify({\r\n                        message: \"点击了关闭按钮\",\r\n                        delay: 2000,\r\n                        type: \"default\"\r\n                    });\r\n                }\r\n            }\r\n        }\r\n\r\n    </script>\r\n    ")]),_vm._v("\r\n")])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("使用的是基于阿里巴巴的矢量图标库")]),_vm._v(" "),_c('p',[_vm._v("默认的图标是没有点击事件的，封装后 "),_c('code',[_vm._v("close")]),_vm._v(" 组件会 "),_c('code',[_vm._v("$emit")]),_vm._v(" 一个 "),_c('code',[_vm._v("click")]),_vm._v(" 事件予以调用")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('p',[_vm._v("参数设置如下：")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("size")]),_vm._v("  --  指定图标大小，默认大小为 "),_c('code',[_vm._v("10")])]),_vm._v(" "),_c('p',[_c('code',[_vm._v("@click")]),_vm._v("  --  按钮点击的回调事件")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});