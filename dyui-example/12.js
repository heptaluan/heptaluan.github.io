webpackJsonp([12],{

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_Loading_vue__ = __webpack_require__(521);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_fb89fa5c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_Loading_vue__ = __webpack_require__(564);
function injectStyle (ssrContext) {
  __webpack_require__(563)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_Loading_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_fb89fa5c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_Loading_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 521:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        loadingHandle01: function loadingHandle01() {
            this.$loading.open();
        },
        loadingHandle02: function loadingHandle02() {
            this.$loading.open({
                timeout: 500,
                loadingText: "拼命加载中"
            });
        },
        loadingHandle03: function loadingHandle03() {
            var _this = this;

            this.$loading.open({
                timeout: 9999999
            });
            setTimeout(function () {
                _this.$loading.close();
            }, 500);
        }
    }
});

/***/ }),

/***/ 563:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-box"},[_c('div',{staticClass:"components-title"},[_vm._v("Loading 加载中")]),_vm._v(" "),_c('div',{staticClass:"components-wrapper"},[_c('ul',[_c('li',[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("Loading 加载中（默认）")]),_vm._v(" "),_c('dy-button',{on:{"click":_vm.loadingHandle01}},[_vm._v("点击加载")])],1),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n        \r\n        <dy-button @click=\"loadingHandle01\">点击加载</dy-button>\r\n\r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            methods: {\r\n                loadingHandle01() {\r\n                    this.$loading.open()\r\n                }\r\n            }\r\n        };\r\n    </template>\r\n    ")]),_vm._v("\r\n")])]),_vm._v(" "),_c('li',[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("Loading 加载中（参数设置）")]),_vm._v(" "),_c('dy-button',{on:{"click":_vm.loadingHandle02}},[_vm._v("点击加载")])],1),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n        \r\n        <dy-button @click=\"loadingHandle02\">点击加载</dy-button>\r\n\r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            methods: {\r\n                loadingHandle02() {\r\n                    this.$loading.open({\r\n                        timeout: 500,\r\n                        loadingText: \"拼命加载中\"\r\n                    })\r\n                }\r\n            }\r\n        };\r\n    </template>\r\n    ")]),_vm._v("\r\n")])]),_vm._v(" "),_c('li',[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("Loading 加载中（手动关闭）")]),_vm._v(" "),_c('dy-button',{on:{"click":_vm.loadingHandle03}},[_vm._v("点击加载")])],1),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n        \r\n        <dy-button @click=\"loadingHandle03\">点击加载</dy-button>\r\n\r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            methods: {\r\n                loadingHandle03() {\r\n                    // 长时间开启\r\n                    this.$loading.open({\r\n                        timeout: 9999999\r\n                    })\r\n\r\n                    // 手动关闭\r\n                    setTimeout( () => {\r\n                        this.$loading.close()\r\n                    }, 500)\r\n                }\r\n            }\r\n        };\r\n    </template>\r\n    ")]),_vm._v("\r\n")])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("直接绑定点击事件，然后调用 "),_c('code',[_vm._v("this.$loading.open()")]),_vm._v(" 方法即可")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('p',[_vm._v("相关参数设置如下：")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("this.$loading")]),_vm._v(" 指令提供了两个方法，"),_c('code',[_vm._v("open()")]),_vm._v(" 和 "),_c('code',[_vm._v("close()")])]),_vm._v(" "),_c('p',[_c('code',[_vm._v("open()")]),_vm._v(" 方法可以接收参数，参数为一个对象")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("tiemout")]),_vm._v(" -- 关闭时间，默认为 "),_c('code',[_vm._v("3000")]),_vm._v(" 毫秒")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("loadingText")]),_vm._v(" -- 加载的提示文字，不填写的情况下默认为 "),_c('code',[_vm._v("Loading")])]),_vm._v(" "),_c('p',[_c('code',[_vm._v("close()")]),_vm._v(" -- 该方法直接调用即可")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("可以为 "),_c('code',[_vm._v("open()")]),_vm._v(" 方法指定参数")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("也可以手动的调用 "),_c('code',[_vm._v("close()")]),_vm._v(" 方法来进行关闭")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});