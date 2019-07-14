webpackJsonp([10],{

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_Notify_vue__ = __webpack_require__(515);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_d6a8c262_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_Notify_vue__ = __webpack_require__(553);
function injectStyle (ssrContext) {
  __webpack_require__(552)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_Notify_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_d6a8c262_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_Notify_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 515:
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

/* harmony default export */ __webpack_exports__["a"] = ({
	methods: {
		notify01: function notify01() {
			this.$notify({
				message: "这是一条默认消息通知",
				delay: 2000,
				type: "default"
			});
		},
		notify02: function notify02() {
			this.$notify({
				message: "这是一条成功消息通知",
				delay: 2000,
				type: "success"
			});
		},
		notify03: function notify03() {
			this.$notify({
				message: "这是一条警告消息通知",
				delay: 2000,
				type: "warning"
			});
		},
		notify04: function notify04() {
			this.$notify({
				message: "这是一条危险消息通知",
				delay: 2000,
				type: "danger"
			});
		},
		notify05: function notify05() {
			this.$notify({
				message: "这是一条默认消息通知",
				delay: 2000,
				type: "default",
				close: true,
				onClick: function onClick() {
					console.log("...");
				}
			});
		},
		notify06: function notify06() {
			this.$notify({
				message: "这是一条成功消息通知",
				delay: 2000,
				type: "success",
				close: true,
				onClick: function onClick() {
					console.log("...");
				}
			});
		},
		notify07: function notify07() {
			this.$notify({
				message: "这是一条默认消息通知",
				delay: 2000,
				type: "default",
				onClick: function onClick() {
					console.log("...");
				},

				align: "center"
			});
		},
		notify08: function notify08() {
			this.$notify({
				message: "这是一条成功消息通知",
				delay: 2000,
				type: "success",
				close: true,
				onClick: function onClick() {
					console.log("...");
				},

				align: "center"
			});
		}
	}
});

/***/ }),

/***/ 552:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-box"},[_c('div',{staticClass:"components-title"},[_vm._v("Notify - 顶部消息通知")]),_vm._v(" "),_c('div',{staticClass:"components-wrapper"},[_c('ul',[_c('li',[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("Notify - 消息通知（默认）")]),_vm._v(" "),_c('dy-button',{on:{"click":_vm.notify01}},[_vm._v("默认通知")]),_vm._v(" "),_c('dy-button',{on:{"click":_vm.notify02}},[_vm._v("成功通知")]),_vm._v(" "),_c('dy-button',{on:{"click":_vm.notify03}},[_vm._v("警告通知")]),_vm._v(" "),_c('dy-button',{on:{"click":_vm.notify04}},[_vm._v("危险通知")])],1),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n\r\n        <dy-button @click=\"notify01\">默认通知</dy-button>\r\n        <dy-button @click=\"notify02\">成功通知</dy-button>\r\n        <dy-button @click=\"notify03\">警告通知</dy-button>\r\n        <dy-button @click=\"notify04\">危险通知</dy-button>\r\n\r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            methods: {\r\n                notify01() {\r\n                    this.$notify({\r\n                        message: \"这是一条默认消息通知\",\r\n                        delay: 2000,\r\n                        type: \"default\"\r\n                    });\r\n                },\r\n                notify02() {\r\n                    this.$notify({\r\n                        message: \"这是一条成功消息通知\",\r\n                        delay: 2000,\r\n                        type: \"success\"\r\n                    });\r\n                },\r\n                notify03() {\r\n                    this.$notify({\r\n                        message: \"这是一条警告消息通知\",\r\n                        delay: 2000,\r\n                        type: \"warning\"\r\n                    });\r\n                },\r\n                notify04() {\r\n                    this.$notify({\r\n                        message: \"这是一条危险消息通知\",\r\n                        delay: 2000,\r\n                        type: \"danger\"\r\n                    });\r\n                },\r\n            }\r\n        }\r\n    </script>\r\n    ")]),_vm._v("\r\n")])]),_vm._v(" "),_c('li',[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("Notify - 消息通知（带关闭按钮）")]),_vm._v(" "),_c('dy-button',{on:{"click":_vm.notify05}},[_vm._v("默认通知")]),_vm._v(" "),_c('dy-button',{on:{"click":_vm.notify06}},[_vm._v("成功通知")])],1),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n\r\n        <dy-button @click=\"notify05\">默认通知</dy-button>\r\n        <dy-button @click=\"notify06\">成功通知</dy-button>\r\n        \r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            methods: {\r\n                notify05() {\r\n                    this.$notify({\r\n                        message: \"这是一条默认消息通知\",\r\n                        delay: 2000,\r\n                        type: \"default\",\r\n                        close: true,\r\n                        onClick() {\r\n                            console.log(`...`)\r\n                        }\r\n                    });\r\n                },\r\n                notify06() {\r\n                    this.$notify({\r\n                        message: \"这是一条成功消息通知\",\r\n                        delay: 2000,\r\n                        type: \"success\",\r\n                        close: true,\r\n                        onClick() {\r\n                            console.log(`...`)\r\n                        }\r\n                    });\r\n                }\r\n            }\r\n        }\r\n    </script>\r\n    ")]),_vm._v("\r\n")])]),_vm._v(" "),_c('li',[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("Notify - 消息通知（文字居中显示）")]),_vm._v(" "),_c('dy-button',{on:{"click":_vm.notify07}},[_vm._v("默认通知")]),_vm._v(" "),_c('dy-button',{on:{"click":_vm.notify08}},[_vm._v("成功通知")])],1),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n\r\n        <dy-button @click=\"notify07\">默认通知</dy-button>\r\n        <dy-button @click=\"notify08\">成功通知</dy-button>\r\n        \r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            methods: {\r\n                notify07() {\r\n                    this.$notify({\r\n                        message: \"这是一条默认消息通知\",\r\n                        delay: 2000,\r\n                        type: \"default\",\r\n                        onClick() {\r\n                            console.log(`...`)\r\n                        },\r\n                        align: \"center\"\r\n                    });\r\n                },\r\n                notify08() {\r\n                    this.$notify({\r\n                        message: \"这是一条成功消息通知\",\r\n                        delay: 2000,\r\n                        type: \"success\",\r\n                        close: true,\r\n                        onClick() {\r\n                            console.log(`...`)\r\n                        },\r\n                        align: \"center\"\r\n                    });\r\n                }\r\n            }\r\n        }\r\n    </script>\r\n    ")]),_vm._v("\r\n")])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("绑定 "),_c('code',[_vm._v("click")]),_vm._v(" 方法后调用 "),_c('code',[_vm._v("$notify({})")]),_vm._v(" 方法即可")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('p',[_vm._v("相关参数设置如下：")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("message")]),_vm._v(" -- 通知内容")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("delay")]),_vm._v(" -- 自动关闭时间，默认为 "),_c('code',[_vm._v("2000")]),_vm._v(" 毫秒")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("close")]),_vm._v(" -- 布尔值，是否出现关闭按钮，默认为 "),_c('code',[_vm._v("false")])]),_vm._v(" "),_c('p',[_c('code',[_vm._v("onClose")]),_vm._v(" -- 消息通知关闭后的回调事件")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("type")]),_vm._v(" -- 通知框的主题，分为 "),_c('code',[_vm._v("default")]),_vm._v("，"),_c('code',[_vm._v("success")]),_vm._v("，"),_c('code',[_vm._v("warning")]),_vm._v("，"),_c('code',[_vm._v("danger")]),_vm._v("，默认为 "),_c('code',[_vm._v("default")])]),_vm._v(" "),_c('p',[_c('code',[_vm._v("align")]),_vm._v(" -- 字体显示方向，默认为 "),_c('code',[_vm._v("left")]),_vm._v("，可选值为 "),_c('code',[_vm._v("center")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_c('code',[_vm._v("$notify({})")]),_vm._v(" 指令中添加参数 "),_c('code',[_vm._v("close: true")]),_vm._v(" 即可")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_c('code',[_vm._v("$notify({})")]),_vm._v(" 指令中添加参数 "),_c('code',[_vm._v("align: \"center\"")]),_vm._v(" 即可")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});