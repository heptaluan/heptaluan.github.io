webpackJsonp([9],{

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_Pagination_vue__ = __webpack_require__(526);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_27e4784a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_Pagination_vue__ = __webpack_require__(574);
function injectStyle (ssrContext) {
  __webpack_require__(573)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_Pagination_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_27e4784a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_Pagination_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 526:
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

/* harmony default export */ __webpack_exports__["a"] = ({
    methods: {
        pageChange: function pageChange(pageNum) {
            this.$notify({
                message: "\u5F53\u524D\u9009\u62E9\u7684\u662F\u7B2C " + pageNum + " \u9875",
                delay: 2000,
                type: "default"
            });
        }
    }
});

/***/ }),

/***/ 573:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-box"},[_c('div',{staticClass:"components-title"},[_vm._v("Pagination 分页")]),_vm._v(" "),_c('div',{staticClass:"tab-wrapper"},[_c('ul',[_c('li',[_c('div',{staticClass:"tab-content"},[_c('h2',{staticClass:"h2"},[_vm._v("Pagination 分页（默认）")]),_vm._v(" "),_c('dy-pagination',{attrs:{"total":100}})],1),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n        \r\n        <dy-pagination :total=\"100\"></dy-pagination>\r\n\r\n    </template>\r\n    ")]),_vm._v("\r\n")])]),_vm._v(" "),_c('li',[_c('div',{staticClass:"tab-content"},[_c('h2',{staticClass:"h2"},[_vm._v("Pagination 分页（设置参数）")]),_vm._v(" "),_c('dy-pagination',{attrs:{"total":20,"value":2,"pageSize":4,"fixedShowPageNums":5},on:{"change":_vm.pageChange}})],1),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n        \r\n        <dy-pagination \r\n            :total=\"20\" \r\n            :value=\"2\" \r\n            :pageSize=\"4\" \r\n            :fixedShowPageNums=\"5\" \r\n            @change=\"pageChange\"\r\n        ></dy-pagination>\r\n\r\n    </template>\r\n    \r\n    <script>\r\n\r\n        export default {\r\n            methods: {\r\n                pageChange(pageNum) {\r\n                    this.$notify({\r\n                        message: `当前选择的是第 ${pageNum} 页`,\r\n                        delay: 2000,\r\n                        type: \"default\"\r\n                    });\r\n                }\r\n            }\r\n        };\r\n\r\n    </script>\r\n\r\n    ")]),_vm._v("\r\n")])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("直接使用 "),_c('code',[_vm._v("dy-pagination")]),_vm._v(" 组件，并且指定需要展示的数据总条目 "),_c('code',[_vm._v("total")]),_vm._v(" 参数（该参数为必填项）")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('p',[_vm._v("相关参数设置如下：")]),_vm._v(" "),_c('p',[_c('code',[_vm._v(":total")]),_vm._v("  --  需要分页的总条目，该项为必填项")]),_vm._v(" "),_c('p',[_c('code',[_vm._v(":value")]),_vm._v("  --  当前展示第几页，默认为 "),_c('code',[_vm._v("1")])]),_vm._v(" "),_c('p',[_c('code',[_vm._v(":pageSize")]),_vm._v("  --  每页展示多少条目，默认为 "),_c('code',[_vm._v("10")])]),_vm._v(" "),_c('p',[_c('code',[_vm._v(":fixedShowPageNums")]),_vm._v("  --  分页按钮显示的总个数，默认为 "),_c('code',[_vm._v("7")])]),_vm._v(" "),_c('p',[_c('code',[_vm._v(":firstBtnText")]),_vm._v("  --  首页文本显示内容，默认为首页")]),_vm._v(" "),_c('p',[_c('code',[_vm._v(":lastBtnText")]),_vm._v("  --  尾页文本显示内容，默认为尾页")]),_vm._v(" "),_c('p',[_c('code',[_vm._v(":prevBtnText")]),_vm._v("  --  上一页文本显示内容，默认为上一页")]),_vm._v(" "),_c('p',[_c('code',[_vm._v(":nextBtnText")]),_vm._v("  --  下一页文本显示内容，默认为下一页")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("@change")]),_vm._v("  --  按钮点击事件")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('p',[_vm._v("注：")]),_vm._v(" "),_c('p',[_vm._v("如果调整了 "),_c('code',[_vm._v(":pageSize")]),_vm._v(" 参数（每页展示条目数），则需要根据展示条目数来动态调整 "),_c('code',[_vm._v(":fixedShowPageNums")]),_vm._v(" 参数，即分页按钮显示的总个数")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("参数设置，总条目为 "),_c('code',[_vm._v("20")]),_vm._v("，初始显示第 "),_c('code',[_vm._v("2")]),_vm._v(" 页，每页展示 "),_c('code',[_vm._v("4")]),_vm._v(" 条数据，共 "),_c('code',[_vm._v("20 / 4")]),_vm._v(" 页，"),_c('code',[_vm._v("@change")]),_vm._v(" 事件为按钮点击事件")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});