webpackJsonp([16],{

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_Dialog_vue__ = __webpack_require__(517);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_9567169a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_Dialog_vue__ = __webpack_require__(556);
function injectStyle (ssrContext) {
  __webpack_require__(555)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_Dialog_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_9567169a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_Dialog_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 517:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
			alertVisible: false,
			confirmVisible: false,
			modelVisible: false,
			prompt001: false,
			prompt002: false,
			promptTel: "",
			promptEmail: ""
		};
	},

	methods: {
		// Alert
		showAlert: function showAlert() {
			this.alertVisible = true;
		},
		alertSubmitHandle: function alertSubmitHandle() {
			var _this = this;

			setTimeout(function () {
				_this.$notify({
					message: "成功提交",
					type: "success",
					delay: 2000
				});
			}, 300);
		},


		// Confirm
		showConfirm: function showConfirm() {
			this.confirmVisible = true;
		},
		cancelHandle: function cancelHandle() {
			var _this2 = this;

			setTimeout(function () {
				_this2.$notify({
					message: "删除成功",
					type: "success",
					delay: 2000
				});
			}, 300);
		},
		confirmHandle: function confirmHandle() {
			var _this3 = this;

			setTimeout(function () {
				_this3.$notify({
					message: "删除取消",
					type: "default",
					delay: 2000
				});
			}, 300);
		},


		// Prompt
		showPrompt001: function showPrompt001() {
			this.prompt001 = true;
		},
		prompt1: function prompt1() {
			var _this4 = this;

			setTimeout(function () {
				_this4.$notify({
					message: "\u60A8\u8F93\u5165\u7684\u624B\u673A\u53F7\u7801\u4E3A " + _this4.promptTel,
					type: "success",
					delay: 2000
				});
			}, 300);
		},
		prompt2: function prompt2() {
			var _this5 = this;

			setTimeout(function () {
				_this5.$notify({
					message: "取消输入",
					type: "default",
					delay: 2000
				});
			}, 300);
		},
		showPrompt002: function showPrompt002() {
			this.prompt002 = true;
		},
		prompt3: function prompt3() {
			var _this6 = this;

			setTimeout(function () {
				_this6.$notify({
					message: "\u60A8\u8F93\u5165\u7684\u90AE\u7BB1\u5730\u5740\u4E3A " + _this6.promptEmail,
					type: "success",
					delay: 2000
				});
			}, 300);
		},
		prompt4: function prompt4() {
			var _this7 = this;

			setTimeout(function () {
				_this7.$notify({
					message: "取消输入",
					type: "default",
					delay: 2000
				});
			}, 300);
		},


		// 自定义弹窗
		showModel: function showModel() {
			this.modelVisible = true;
		},
		model1: function model1() {
			this.modelVisible = false;
		},
		model2: function model2() {
			this.modelVisible = false;
		}
	}
});

/***/ }),

/***/ 555:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-box"},[_c('div',{staticClass:"components-title"},[_vm._v("Dialog - 对话框")]),_vm._v(" "),_c('div',{staticClass:"components-wrapper"},[_c('ul',[_c('li',[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("Alert")]),_vm._v(" "),_c('dy-button',{on:{"click":_vm.showAlert}},[_vm._v("Alert")]),_vm._v(" "),_c('dy-alert',{attrs:{"isShow":_vm.alertVisible,"titleText":"标题","close":false},on:{"update:isShow":function($event){_vm.alertVisible=$event},"submit":_vm.alertSubmitHandle}},[_vm._v("\r\n        信息内容\r\n    ")])],1),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n\r\n        <dy-button @click=\"showAlert\">Alert</dy-button>\r\n\r\n        <dy-alert :isShow.sync=\"alertVisible\" titleText=\"标题\" @submit=\"alertSubmitHandle\" :close=\"false\">\r\n            信息内容\r\n        </dy-alert>\r\n\r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            data() {\r\n                return {\r\n                    alertVisible: false\r\n                }\r\n            },\r\n            methods: {\r\n                // Alert\r\n                showAlert() {\r\n                    this.alertVisible = true;\r\n                },\r\n                alertSubmitHandle() {\r\n                    setTimeout( () => {\r\n                        this.$notify({\r\n                            message: \"成功提交\",\r\n                            type: \"success\",\r\n                            delay: 2000\r\n                        })\r\n                    }, 300)\r\n                },\r\n            }\r\n        }\r\n    </script>\r\n    ")]),_vm._v("\r\n")])]),_vm._v(" "),_c('li',[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("Confirm")]),_vm._v(" "),_c('dy-button',{on:{"click":_vm.showConfirm}},[_vm._v("Confirm")]),_vm._v(" "),_c('dy-confirm',{attrs:{"isShow":_vm.confirmVisible,"titleText":"删除文件"},on:{"update:isShow":function($event){_vm.confirmVisible=$event},"cancel":_vm.cancelHandle,"confirm":_vm.confirmHandle}},[_vm._v("\r\n        此操作将会删除该文件, 是否继续?\r\n    ")])],1),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n\r\n        <dy-button @click=\"showConfirm\">Confirm</dy-button>\r\n\r\n        <dy-confirm \r\n            :isShow.sync=\"confirmVisible\" \r\n            titleText=\"删除文件\" \r\n            @cancel=\"cancelHandle\" \r\n            @confirm=\"confirmHandle\"\r\n        >\r\n            此操作将会删除该文件, 是否继续?\r\n        </dy-confirm>\r\n\r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            data() {\r\n                return {\r\n                    confirmVisible: false\r\n                }\r\n            },\r\n            methods: {\r\n                // Confirm\r\n                showConfirm() {\r\n                    this.confirmVisible = true;\r\n                },\r\n                cancelHandle() {\r\n                    setTimeout( () => {\r\n                        this.$notify({\r\n                            message: \"删除成功\",\r\n                            type: \"success\",\r\n                            delay: 2000\r\n                        })\r\n                    }, 300)\r\n                },\r\n                confirmHandle() {\r\n                    setTimeout( () => {\r\n                        this.$notify({\r\n                            message: \"删除取消\",\r\n                            type: \"default\",\r\n                            delay: 2000\r\n                        })\r\n                    }, 300)\r\n                }\r\n            }\r\n        }\r\n    </script>\r\n    ")]),_vm._v("\r\n")])]),_vm._v(" "),_c('li',[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("Prompt")]),_vm._v(" "),_c('dy-button',{on:{"click":_vm.showPrompt001}},[_vm._v("请输入手机号码")]),_vm._v(" "),_c('dy-prompt',{attrs:{"isShow":_vm.prompt001,"titleText":"提示","regex":"^1\\d{10}$","errorNotice":"请输入正确的手机号码","placeholder":"请输入手机号码"},on:{"update:isShow":function($event){_vm.prompt001=$event},"cancel":_vm.prompt1,"confirm":_vm.prompt2},model:{value:(_vm.promptTel),callback:function ($$v) {_vm.promptTel=$$v},expression:"promptTel"}},[_vm._v("\r\n        请输入手机号码\r\n    ")]),_vm._v(" "),_c('dy-button',{on:{"click":_vm.showPrompt002}},[_vm._v("请输入邮箱地址")]),_vm._v(" "),_c('dy-prompt',{attrs:{"isShow":_vm.prompt002,"titleText":"提示","regex":"^[a-z0-9]+([._\\\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$","errorNotice":"请输入正确的邮箱地址","placeholder":"请输入邮箱地址"},on:{"update:isShow":function($event){_vm.prompt002=$event},"cancel":_vm.prompt3,"confirm":_vm.prompt4},model:{value:(_vm.promptEmail),callback:function ($$v) {_vm.promptEmail=$$v},expression:"promptEmail"}},[_vm._v("\r\n        请输入邮箱地址\r\n    ")])],1),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n\r\n        <dy-button @click=\"showPrompt001\">请输入手机号码</dy-button>\r\n\r\n        <dy-prompt\r\n            :isShow.sync=\"prompt001\" \r\n            titleText=\"提示\" \r\n            @cancel=\"prompt1\" \r\n            @confirm=\"prompt2\"\r\n            v-model=\"promptTel\"\r\n            regex=\"^1\\d{10}$\"\r\n            errorNotice=\"请输入正确的手机号码\"\r\n            placeholder=\"请输入手机号码\"\r\n        >\r\n            请输入手机号码\r\n        </dy-prompt>\r\n\r\n\r\n        <dy-button @click=\"showPrompt002\">请输入邮箱地址</dy-button>\r\n\r\n        <dy-prompt\r\n            :isShow.sync=\"prompt002\" \r\n            titleText=\"提示\" \r\n            @cancel=\"prompt3\" \r\n            @confirm=\"prompt4\"\r\n            v-model=\"promptEmail\"\r\n            regex=\"^[a-z0-9]+([._\\\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$\"\r\n            errorNotice=\"请输入正确的邮箱地址\"\r\n            placeholder=\"请输入邮箱地址\"\r\n        >\r\n            请输入邮箱地址\r\n        </dy-prompt>\r\n\r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            data() {\r\n                return {\r\n                    promptTel: \"\",\r\n                    prompt001: false,\r\n\r\n                    promptEmail: \"\",\r\n                    prompt002: false\r\n                }\r\n            },\r\n            methods: {\r\n                // Prompt\r\n                showPrompt001() {\r\n                    this.prompt001 = true;\r\n                },\r\n                prompt1() {\r\n                    setTimeout( () => {\r\n                        this.$notify({\r\n                            message: `您输入的手机号码为 ${this.promptTel}`,\r\n                            type: \"success\",\r\n                            delay: 2000\r\n                        })\r\n                    }, 300)\r\n                },\r\n                prompt2() {\r\n                    setTimeout( () => {\r\n                        this.$notify({\r\n                            message: \"取消输入\",\r\n                            type: \"default\",\r\n                            delay: 2000\r\n                        })\r\n                    }, 300)\r\n                },\r\n\r\n                showPrompt002() {\r\n                    this.prompt002 = true;\r\n                },\r\n                prompt3() {\r\n                    setTimeout( () => {\r\n                        this.$notify({\r\n                            message: `您输入的邮箱地址为 ${this.promptEmail}`,\r\n                            type: \"success\",\r\n                            delay: 2000\r\n                        })\r\n                    }, 300)\r\n                },\r\n                prompt4() {\r\n                    setTimeout( () => {\r\n                        this.$notify({\r\n                            message: \"取消输入\",\r\n                            type: \"default\",\r\n                            delay: 2000\r\n                        })\r\n                    }, 300)\r\n                }\r\n            }\r\n        }\r\n    </script>\r\n    ")]),_vm._v("\r\n")])]),_vm._v(" "),_c('li',[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("自定义弹窗内容")]),_vm._v(" "),_c('dy-button',{on:{"click":_vm.showModel}},[_vm._v("自定义弹窗")]),_vm._v(" "),_c('dy-model',{attrs:{"isShow":_vm.modelVisible,"width":650},on:{"update:isShow":function($event){_vm.modelVisible=$event}}},[_c('header',{staticClass:"model-header"},[_vm._v("这里是头部")]),_vm._v(" "),_c('article',{staticClass:"model-body"},[_c('h2',[_vm._v("这里是内容部分")]),_vm._v(" "),_c('p',[_vm._v("内容")]),_vm._v(" "),_c('p',[_vm._v("内容")]),_vm._v(" "),_c('p',[_vm._v("内容")]),_vm._v(" "),_c('p',[_vm._v("内容")]),_vm._v(" "),_c('p',[_vm._v("内容")]),_vm._v(" "),_c('p',[_vm._v("内容")]),_vm._v(" "),_c('p',[_vm._v("内容")]),_vm._v(" "),_c('p',[_vm._v("内容")]),_vm._v(" "),_c('p',[_vm._v("内容")])]),_vm._v(" "),_c('footer',{staticClass:"model-footer"},[_c('dy-button',{attrs:{"size":"m"},on:{"click":_vm.model1}},[_vm._v("\r\n                取消\r\n            ")]),_vm._v(" "),_c('dy-button',{attrs:{"type":"primary","size":"m"},on:{"click":_vm.model2}},[_vm._v("\r\n                确定\r\n            ")])],1)])],1),_vm._v(" "),_vm._m(3),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n\r\n        <dy-button @click=\"showModel\">自定义弹窗</dy-button>\r\n    \r\n        <dy-model :isShow.sync=\"modelVisible\" :width=\"650\">\r\n\r\n            <header class=\"model-header\">这里是头部</header>\r\n\r\n            <article class=\"model-body\">\r\n                <h2>这里是内容部分</h2>\r\n                <p>内容</p>\r\n                <p>内容</p>\r\n                <p>内容</p>\r\n                <p>内容</p>\r\n                <p>内容</p>\r\n                <p>内容</p>\r\n                <p>内容</p>\r\n                <p>内容</p>\r\n                <p>内容</p>\r\n            </article>\r\n\r\n            <footer class=\"model-footer\">\r\n                <dy-button size=\"m\" @click=\"model1\">\r\n                    取消\r\n                </dy-button>\r\n                <dy-button type=\"primary\" size=\"m\" @click=\"model2\">\r\n                    确定\r\n                </dy-button>\r\n            </footer>\r\n\r\n        </dy-model>\r\n        \r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            methods: {\r\n                // 自定义弹窗\r\n                showModel() {\r\n                    this.modelVisible = true;\r\n                },\r\n                model1() {\r\n                    this.modelVisible = false;\r\n                },\r\n                model2() {\r\n                    this.modelVisible = false;\r\n                }\r\n            }\r\n        }\r\n    </script>\r\n    ")]),_vm._v("\r\n")])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("绑定 "),_c('code',[_vm._v("click")]),_vm._v(" 事件，改变 "),_c('code',[_vm._v(":isShow.sync")]),_vm._v(" 绑定的值 "),_c('code',[_vm._v("alertVisible")]),_vm._v(" 的状态即可切换弹窗显示状态")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('p',[_vm._v("相关参数设置如下：")]),_vm._v(" "),_c('p',[_c('code',[_vm._v(":isShow.sync")]),_vm._v(" -- 根据与其绑定的值的状态来判断弹窗的显示与隐藏")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("titleText")]),_vm._v(" -- 弹窗的标题内容")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("信息内容")]),_vm._v(" -- 弹窗主体中的自定义内容")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("@submit")]),_vm._v(" -- 弹窗内的按钮事件回调")]),_vm._v(" "),_c('p',[_c('code',[_vm._v(":close")]),_vm._v(" -- 布尔值，用于显示和隐藏关闭按钮，默认为 "),_c('code',[_vm._v("true")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("其他参数设置与上述组件一致")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('p',[_vm._v("参数设置如下：")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("@cancel")]),_vm._v(" -- 确定事件回调")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("@confirm")]),_vm._v(" -- 取消事件回调")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("其他参数设置与上述组件一致")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('p',[_vm._v("参数设置如下：")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("@cancel")]),_vm._v(" -- 确定事件回调")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("@confirm")]),_vm._v(" -- 取消事件回调")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("v-model")]),_vm._v(" -- 弹窗内 "),_c('code',[_vm._v("input")]),_vm._v(" 绑定所用")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("placeholder")]),_vm._v(" -- "),_c('code',[_vm._v("input")]),_vm._v(" 原生属性")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('p',[_vm._v("下面两个参数为选填，可以提供简单的验证，原理为使用正则去匹配输入框内的输入值，验证不通过的时候显示提示文字")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("regex")]),_vm._v(" -- 验证用的正则，不需要添加"),_c('code',[_vm._v("\"/ /\"")])]),_vm._v(" "),_c('p',[_c('code',[_vm._v("errorNotice")]),_vm._v(" -- 验证时候的提示文字")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("注意与上述组件区别开来")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("dy-model")]),_vm._v(" 组件仅仅只是提供一个居中显示的带遮罩的容器盒子，内部的内容均为自定义")]),_vm._v(" "),_c('p',[_vm._v("只需根据 "),_c('code',[_vm._v(":isShow.sync")]),_vm._v(" 绑定状态值控制弹窗的显示和隐藏即可")]),_vm._v(" "),_c('p',[_vm._v("内部的按钮点击事件可以根据需要来进行自定义的添加和删除")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('p',[_vm._v("参数设置如下：")]),_vm._v(" "),_c('p',[_c('code',[_vm._v(":width")]),_vm._v(" -- 自定义容器的宽度（不需要单位）【容器的高度为居中自适应】")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("model1，model2")]),_vm._v(" -- 为内部自定义按钮事件的回调")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});