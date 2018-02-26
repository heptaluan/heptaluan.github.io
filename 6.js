webpackJsonp([6],{

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_Select_vue__ = __webpack_require__(519);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_74eaa729_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_Select_vue__ = __webpack_require__(560);
function injectStyle (ssrContext) {
  __webpack_require__(559)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_Select_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_74eaa729_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_Select_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 519:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    data: function data() {
        return {
            options01: [{
                label: "东瓜"
            }, {
                label: "南瓜"
            }, {
                label: "西瓜"
            }],
            options02: [{
                label: "东瓜"
            }, {
                label: "南瓜"
            }, {
                label: "西瓜"
            }, {
                label: "北瓜"
            }, {
                label: "中瓜"
            }, {
                label: "葡萄"
            }, {
                label: "梨子"
            }, {
                label: "香蕉"
            }, {
                label: "苹果"
            }, {
                label: "地瓜"
            }, {
                label: "皮瓜"
            }],
            selectVal01: [],
            selectVal02: []
        };
    }
    // methods: {
    //     selectHandle() {
    //         this.selectVal = val;
    //     }
    // }

});

/***/ }),

/***/ 559:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-box"},[_c('div',{staticClass:"components-title"},[_vm._v("Select 选择框")]),_vm._v(" "),_c('div',{staticClass:"components-wrapper"},[_c('ul',[_c('li',[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("Select 选择框（默认）")]),_vm._v(" "),_c('dy-select',{attrs:{"options":_vm.options01}})],1),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n\r\n        <dy-select :options=\"options01\"></dy-select>\r\n\r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            data() {\r\n                return {\r\n                    options01: [{\r\n                        label: \"东瓜\"\r\n                    }, {\r\n                        label: \"南瓜\"\r\n                    }, {\r\n                        label: \"西瓜\",\r\n                    }]\r\n                }\r\n            }\r\n        }\r\n    </script>\r\n    ")]),_vm._v("\r\n")])]),_vm._v(" "),_c('li',[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("Select 选择框（获取选中值）")]),_vm._v(" "),_c('dy-select',{attrs:{"options":_vm.options01},model:{value:(_vm.selectVal01),callback:function ($$v) {_vm.selectVal01=$$v},expression:"selectVal01"}}),_vm._v(" "),_c('div',{staticClass:"subBox dy-select-subBox"},[_vm._v("\r\n        当前选择的是："+_vm._s(_vm.selectVal01)+"\r\n    ")])],1),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n\r\n        <dy-select :options=\"options01\" v-model=\"selectVal01\"></dy-select>\r\n\r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            data() {\r\n                return {\r\n                    options01: [{\r\n                        label: \"东瓜\"\r\n                    }, {\r\n                        label: \"南瓜\"\r\n                    }, {\r\n                        label: \"西瓜\",\r\n                    }],\r\n                    selectVal01: []\r\n                }\r\n            }\r\n        }\r\n    </script>\r\n    ")]),_vm._v("\r\n")])]),_vm._v(" "),_c('li',[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("Select 选择框（多选）")]),_vm._v(" "),_c('dy-select',{attrs:{"options":_vm.options01,"multiple":true}})],1),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n\r\n        <dy-select :options=\"options01\" :multiple=\"true\"></dy-select>\r\n\r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            data() {\r\n                return {\r\n                    options01: [{\r\n                        label: \"东瓜\"\r\n                    }, {\r\n                        label: \"南瓜\"\r\n                    }, {\r\n                        label: \"西瓜\",\r\n                    }]\r\n                }\r\n            }\r\n        }\r\n    </script>\r\n    ")]),_vm._v("\r\n")])]),_vm._v(" "),_c('li',[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("Select 选择框（设定宽高）")]),_vm._v(" "),_c('dy-select',{attrs:{"options":_vm.options02,"maxHeight":300,"width":400,"multiple":true},model:{value:(_vm.selectVal02),callback:function ($$v) {_vm.selectVal02=$$v},expression:"selectVal02"}}),_vm._v(" "),_c('div',{staticClass:"subBox dy-select-subBox"},[_vm._v("\r\n        当前选择的是："+_vm._s(_vm.selectVal02)+"\r\n    ")])],1),_vm._v(" "),_vm._m(3),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n\r\n        <dy-select \r\n            :options=\"options02\" \r\n            :maxHeight=\"300\" \r\n            :width=\"400\" \r\n            :multiple=\"true\" \r\n            v-model=\"selectVal02\"\r\n        ></dy-select>\r\n\r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            data() {\r\n                return {\r\n                    options02: [{\r\n                        label: \"东瓜\"\r\n                    }, {\r\n                        label: \"南瓜\"\r\n                    }, {\r\n                        label: \"西瓜\",\r\n                    }, {\r\n                        label: \"北瓜\",\r\n                    }, {\r\n                        label: \"中瓜\",\r\n                    }, {\r\n                        label: \"葡萄\",\r\n                    }, {\r\n                        label: \"梨子\",\r\n                    }, {\r\n                        label: \"香蕉\",\r\n                    }, {\r\n                        label: \"苹果\",\r\n                    }, {\r\n                        label: \"地瓜\",\r\n                    }, {\r\n                        label: \"皮瓜\",\r\n                    }],\r\n                    selectVal02: []\r\n                }\r\n            }\r\n        }\r\n    </script>\r\n    ")]),_vm._v("\r\n")])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("直接调用 "),_c('code',[_vm._v("dy-select")]),_vm._v(" 组件，然后使用 "),_c('code',[_vm._v(":options")]),_vm._v(" 绑定需要渲染的数据即可")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('p',[_vm._v("参数设置如下：")]),_vm._v(" "),_c('p',[_c('code',[_vm._v(":options")]),_vm._v(" -- 绑定需要渲染的数组列表")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("v-model")]),_vm._v(" -- 双向绑定的值")]),_vm._v(" "),_c('p',[_c('code',[_vm._v(":multiple")]),_vm._v(" -- 布尔值，指定是否开启多选模式，默认为单选模式")]),_vm._v(" "),_c('p',[_c('code',[_vm._v(":width")]),_vm._v(" -- 设定下拉按钮和下拉框的长度，默认为 "),_c('code',[_vm._v("200")])]),_vm._v(" "),_c('p',[_c('code',[_vm._v(":maxHeight")]),_vm._v(" -- 设定下拉框的最大高度，默认为 "),_c('code',[_vm._v("300")]),_vm._v("，超出最大高度后出现滚动条 ")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("使用 "),_c('code',[_vm._v("v-model")]),_vm._v(" 双向绑定即可")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("指定参数 "),_c('code',[_vm._v(":multiple")]),_vm._v(" 为 "),_c('code',[_vm._v("true")]),_vm._v(" 即可")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("可以手动指定下拉组件的宽度和高度，只需要使用 "),_c('code',[_vm._v(":maxHeight")]),_vm._v(" 和 "),_c('code',[_vm._v(":width")]),_vm._v(" 参数即可")]),_vm._v(" "),_c('p',[_vm._v("需要注意，最大高度中包含 "),_c('code',[_vm._v("30")]),_vm._v(" 像素的 "),_c('code',[_vm._v("padding")]),_vm._v(" 距离（长度没有）")]),_vm._v(" "),_c('p',[_vm._v("即设置 "),_c('code',[_vm._v("300")]),_vm._v(" 最大高度，实则为 "),_c('code',[_vm._v("270")]),_vm._v("，目的是为了抵消与外层容器之间的间距，否则会溢出容器")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('p',[_c('code',[_vm._v(":maxHeight")]),_vm._v(" -- 设定下拉框的最大高度，默认为 "),_c('code',[_vm._v("300")]),_vm._v("，超出最大高度后出现滚动条 ")]),_vm._v(" "),_c('p',[_c('code',[_vm._v(":width")]),_vm._v(" -- 设定下拉按钮和下拉框的长度，默认为 "),_c('code',[_vm._v("200")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});