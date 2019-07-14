webpackJsonp([19],{

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_Checkbox_vue__ = __webpack_require__(513);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_32d71281_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_Checkbox_vue__ = __webpack_require__(547);
function injectStyle (ssrContext) {
  __webpack_require__(546)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_Checkbox_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_32d71281_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_Checkbox_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 513:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
			checkbox1: [],
			checkbox2: ["苹果", "葡萄"],
			checkbox3: ["苹果"],
			checkbox4: [],
			checkbox5: ["苹果"]
		};
	}
});

/***/ }),

/***/ 546:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-box"},[_c('div',{staticClass:"components-title"},[_vm._v("Checkbox 多选框")]),_vm._v(" "),_c('div',{staticClass:"components-wrapper"},[_c('ul',[_c('li',[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("多选框（默认）")]),_vm._v(" "),_c('dy-checkbox-group',{model:{value:(_vm.checkbox1),callback:function ($$v) {_vm.checkbox1=$$v},expression:"checkbox1"}},[_c('dy-checkbox',{attrs:{"label":"苹果"}}),_vm._v(" "),_c('dy-checkbox',{attrs:{"label":"香蕉"}}),_vm._v(" "),_c('dy-checkbox',{attrs:{"label":"葡萄"}}),_vm._v(" "),_c('dy-checkbox',{attrs:{"label":"鸭梨"}})],1),_vm._v(" "),_c('div',{staticClass:"subBox"},[_vm._v("\r\n        当前选择的是："+_vm._s(_vm.checkbox1)+"\r\n    ")])],1),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n\r\n        <dy-checkbox-group v-model=\"checkbox1\">\r\n            <dy-checkbox label=\"苹果\"></dy-checkbox>\r\n            <dy-checkbox label=\"香蕉\"></dy-checkbox>\r\n            <dy-checkbox label=\"葡萄\"></dy-checkbox>\r\n            <dy-checkbox label=\"鸭梨\"></dy-checkbox>\r\n        </dy-checkbox-group>\r\n\r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            data() {\r\n                return {\r\n                    checkbox1: []\r\n                }\r\n            }\r\n        }\r\n    </script>\r\n    ")]),_vm._v("\r\n")])]),_vm._v(" "),_c('li',[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("多选框（默认选中）")]),_vm._v(" "),_c('dy-checkbox-group',{model:{value:(_vm.checkbox2),callback:function ($$v) {_vm.checkbox2=$$v},expression:"checkbox2"}},[_c('dy-checkbox',{attrs:{"label":"苹果"}}),_vm._v(" "),_c('dy-checkbox',{attrs:{"label":"香蕉"}}),_vm._v(" "),_c('dy-checkbox',{attrs:{"label":"葡萄"}}),_vm._v(" "),_c('dy-checkbox',{attrs:{"label":"鸭梨"}})],1),_vm._v(" "),_c('div',{staticClass:"subBox"},[_vm._v("\r\n        当前选择的是："+_vm._s(_vm.checkbox2)+"\r\n    ")])],1),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n\r\n        <dy-checkbox-group v-model=\"checkbox1\">\r\n            <dy-checkbox label=\"苹果\"></dy-checkbox>\r\n            <dy-checkbox label=\"香蕉\"></dy-checkbox>\r\n            <dy-checkbox label=\"葡萄\"></dy-checkbox>\r\n            <dy-checkbox label=\"鸭梨\"></dy-checkbox>\r\n        </dy-checkbox-group>\r\n\r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            data() {\r\n                return {\r\n                    checkbox2: [\"苹果\", \"葡萄\"]\r\n                }\r\n            }\r\n        }\r\n    </script>\r\n    ")]),_vm._v("\r\n")])]),_vm._v(" "),_c('li',[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("多选框（全部禁用）")]),_vm._v(" "),_c('dy-checkbox-group',{attrs:{"disabled":""},model:{value:(_vm.checkbox3),callback:function ($$v) {_vm.checkbox3=$$v},expression:"checkbox3"}},[_c('dy-checkbox',{attrs:{"label":"苹果"}}),_vm._v(" "),_c('dy-checkbox',{attrs:{"label":"香蕉"}}),_vm._v(" "),_c('dy-checkbox',{attrs:{"label":"葡萄"}}),_vm._v(" "),_c('dy-checkbox',{attrs:{"label":"鸭梨"}})],1),_vm._v(" "),_c('div',{staticClass:"subBox"},[_vm._v("\r\n        当前选择的是："+_vm._s(_vm.checkbox3)+"\r\n    ")])],1),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n\r\n        <dy-checkbox-group disabled v-model=\"checkbox3\">\r\n            <dy-checkbox label=\"苹果\"></dy-checkbox>\r\n            <dy-checkbox label=\"香蕉\"></dy-checkbox>\r\n            <dy-checkbox label=\"葡萄\"></dy-checkbox>\r\n            <dy-checkbox label=\"鸭梨\"></dy-checkbox>\r\n        </dy-checkbox-group>\r\n\r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            data() {\r\n                return {\r\n                    checkbox3: [\"苹果\"]\r\n                }\r\n            }\r\n        }\r\n    </script>\r\n    ")]),_vm._v("\r\n")])]),_vm._v(" "),_c('li',[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("多选框（部分禁用）")]),_vm._v(" "),_c('dy-checkbox-group',{model:{value:(_vm.checkbox4),callback:function ($$v) {_vm.checkbox4=$$v},expression:"checkbox4"}},[_c('dy-checkbox',{attrs:{"disabled":"","label":"苹果"}}),_vm._v(" "),_c('dy-checkbox',{attrs:{"label":"香蕉"}}),_vm._v(" "),_c('dy-checkbox',{attrs:{"label":"葡萄"}}),_vm._v(" "),_c('dy-checkbox',{attrs:{"label":"鸭梨"}})],1),_vm._v(" "),_c('div',{staticClass:"subBox"},[_vm._v("\r\n        当前选择的是："+_vm._s(_vm.checkbox4)+"\r\n    ")])],1),_vm._v(" "),_vm._m(3),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n\r\n        <dy-checkbox-group v-model=\"checkbox4\">\r\n            <dy-checkbox disabled label=\"苹果\"></dy-checkbox>\r\n            <dy-checkbox label=\"香蕉\"></dy-checkbox>\r\n            <dy-checkbox label=\"葡萄\"></dy-checkbox>\r\n            <dy-checkbox label=\"鸭梨\"></dy-checkbox>\r\n        </dy-checkbox-group>\r\n\r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            data() {\r\n                return {\r\n                    checkbox4: []\r\n                }\r\n            }\r\n        }\r\n    </script>\r\n    ")]),_vm._v("\r\n")])]),_vm._v(" "),_c('li',[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("多选框（限定选择项）")]),_vm._v(" "),_c('dy-checkbox-group',{attrs:{"min":1,"max":3},model:{value:(_vm.checkbox5),callback:function ($$v) {_vm.checkbox5=$$v},expression:"checkbox5"}},[_c('dy-checkbox',{attrs:{"label":"苹果"}}),_vm._v(" "),_c('dy-checkbox',{attrs:{"label":"香蕉"}}),_vm._v(" "),_c('dy-checkbox',{attrs:{"label":"葡萄"}}),_vm._v(" "),_c('dy-checkbox',{attrs:{"label":"鸭梨"}})],1),_vm._v(" "),_c('div',{staticClass:"subBox"},[_vm._v("\r\n        当前选择的是："+_vm._s(_vm.checkbox5)+"\r\n    ")])],1),_vm._v(" "),_vm._m(4),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n\r\n        <dy-checkbox-group v-model=\"checkbox5\" :min=\"1\" :max=\"3\">\r\n            <dy-checkbox label=\"苹果\"></dy-checkbox>\r\n            <dy-checkbox label=\"香蕉\"></dy-checkbox>\r\n            <dy-checkbox label=\"葡萄\"></dy-checkbox>\r\n            <dy-checkbox label=\"鸭梨\"></dy-checkbox>\r\n        </dy-checkbox-group>\r\n\r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            data() {\r\n                return {\r\n                    checkbox5: []\r\n                }\r\n            }\r\n        }\r\n    </script>\r\n    ")]),_vm._v("\r\n")])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("需要使用 "),_c('code',[_vm._v("dy-checkbox-group")]),_vm._v(" 组件来包裹 "),_c('code',[_vm._v("dy-checkbox")]),_vm._v(" 组件使用")]),_vm._v(" "),_c('p',[_vm._v("指定 "),_c('code',[_vm._v("v-model")]),_vm._v(" 绑定当前选中的数据，"),_c('code',[_vm._v("label")]),_vm._v(" 为各个选项的名称")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('p',[_vm._v("参数设置如下：")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("v-model")]),_vm._v("  --  用于双向绑定展示的值")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("label")]),_vm._v("  --  选项内容")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("disabled")]),_vm._v("  --  禁用选项")]),_vm._v(" "),_c('p',[_c('code',[_vm._v(":min")]),_vm._v("  --  最少选择几项")]),_vm._v(" "),_c('p',[_c('code',[_vm._v(":max")]),_vm._v("  --  最多选择几项")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_c('code',[_vm._v("data")]),_vm._v(" 当中指定默认选中的数据即可")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("针对 "),_c('code',[_vm._v("dy-checkbox-group")]),_vm._v(" 组件指定 "),_c('code',[_vm._v("disabled")]),_vm._v(" 参数即可")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("针对 "),_c('code',[_vm._v("dy-checkbox")]),_vm._v(" 组件需要禁用的选项添加 "),_c('code',[_vm._v("disabled")]),_vm._v(" 参数即可")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("添加 "),_c('code',[_vm._v(":min")]),_vm._v(" 和 "),_c('code',[_vm._v(":max")]),_vm._v(" 参数来指定选择的最少项和最多项")]),_vm._v(" "),_c('p',[_vm._v("如示例当中表示为至少选择一项，最多选择三项")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});