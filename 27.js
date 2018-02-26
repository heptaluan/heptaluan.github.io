webpackJsonp([27],{

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_Message_vue__ = __webpack_require__(516);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_331db86d_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_Message_vue__ = __webpack_require__(554);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_Message_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_331db86d_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_Message_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 516:
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

/* harmony default export */ __webpack_exports__["a"] = ({
	methods: {
		message01: function message01() {
			this.$message({
				title: "标题",
				message: "侧边栏信息提示内容主体",
				type: "default",
				placement: "left-bottom",
				delay: 2000
			});
		},
		message02: function message02() {
			this.$message({
				title: "标题",
				message: "侧边栏信息提示内容主体",
				type: "success",
				placement: "left-top",
				delay: 2000
			});
		},
		message03: function message03() {
			this.$message({
				title: "标题",
				message: "侧边栏信息提示内容主体",
				type: "warning",
				placement: "right-bottom",
				delay: 2000,
				close: true
			});
		},
		message04: function message04() {
			this.$message({
				title: "标题",
				message: "侧边栏信息提示内容主体",
				type: "danger",
				placement: "right-top",
				delay: 2000,
				close: true
			});
		}
	}
});

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-box"},[_c('div',{staticClass:"components-title"},[_vm._v("Message - 侧边信息提示")]),_vm._v(" "),_c('div',{staticClass:"components-wrapper"},[_c('ul',[_c('li',[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("Message - 侧边信息提示")]),_vm._v(" "),_c('dy-button',{on:{"click":_vm.message01}},[_vm._v("默认消息提示")]),_vm._v(" "),_c('dy-button',{on:{"click":_vm.message02}},[_vm._v("成功消息提示")]),_vm._v(" "),_c('dy-button',{on:{"click":_vm.message03}},[_vm._v("警告消息提示")]),_vm._v(" "),_c('dy-button',{on:{"click":_vm.message04}},[_vm._v("错误消息提示")])],1),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n\r\n        <dy-button @click=\"message01\">默认通知</dy-button>\r\n        <dy-button @click=\"message02\">成功通知</dy-button>\r\n        <dy-button @click=\"message03\">警告通知</dy-button>\r\n        <dy-button @click=\"message04\">危险通知</dy-button>\r\n\r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            methods: {\r\n                message01() {\r\n                    this.$message({\r\n                        title: \"标题\",\r\n                        message: \"侧边栏信息提示内容主体\",\r\n                        type: \"default\",\r\n                        placement: \"left-bottom\",\r\n                        delay: 2000\r\n                    });\r\n                },\r\n                message02() {\r\n                    this.$message({\r\n                        title: \"标题\",\r\n                        message: \"侧边栏信息提示内容主体\",\r\n                        type: \"success\",\r\n                        placement: \"left-top\",\r\n                        delay: 2000\r\n                    });\r\n                },\r\n                message03() {\r\n                    this.$message({\r\n                        title: \"标题\",\r\n                        message: \"侧边栏信息提示内容主体\",\r\n                        type: \"warning\",\r\n                        placement: \"right-bottom\",\r\n                        delay: 2000,\r\n                        close: true\r\n                    });\r\n                },\r\n                message04() {\r\n                    this.$message({\r\n                        title: \"标题\",\r\n                        message: \"侧边栏信息提示内容主体\",\r\n                        type: \"danger\",\r\n                        placement: \"right-top\",\r\n                        delay: 2000,\r\n                        close: true\r\n                    });\r\n                },\r\n            }\r\n        }\r\n    </script>\r\n    ")]),_vm._v("\r\n")])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("绑定 "),_c('code',[_vm._v("click")]),_vm._v(" 方法后调用指令 "),_c('code',[_vm._v("$message({})")]),_vm._v(" 方法即可")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('p',[_vm._v("相关参数设置如下：")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("title")]),_vm._v(" -- 标题文本")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("message")]),_vm._v(" -- 内容文本")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("close")]),_vm._v(" -- 布尔值，是否出现关闭按钮，默认为 "),_c('code',[_vm._v("false")])]),_vm._v(" "),_c('p',[_c('code',[_vm._v("onClose")]),_vm._v(" -- 侧边提示信息关闭后的回调事件")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("delay")]),_vm._v(" -- 自动关闭时间，默认为 "),_c('code',[_vm._v("2000")]),_vm._v(" 毫秒")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("type")]),_vm._v(" -- 弹窗的主题，分为 "),_c('code',[_vm._v("default")]),_vm._v("，"),_c('code',[_vm._v("success")]),_vm._v("，"),_c('code',[_vm._v("warning")]),_vm._v("，"),_c('code',[_vm._v("danger")]),_vm._v("，默认为 "),_c('code',[_vm._v("default")])]),_vm._v(" "),_c('p',[_c('code',[_vm._v("placement")]),_vm._v(" -- 弹窗出现的方位，分为 "),_c('code',[_vm._v("left-top")]),_vm._v("，"),_c('code',[_vm._v("left-bottom")]),_vm._v("，"),_c('code',[_vm._v("right-top")]),_vm._v("，"),_c('code',[_vm._v("right-bottom")]),_vm._v("，默认为 "),_c('code',[_vm._v("right-top")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});