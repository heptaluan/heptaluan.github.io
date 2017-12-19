webpackJsonp([0],{

/***/ "XG86":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("BkJT")(true);
// imports


// module
exports.push([module.i, "\n.dy-input-group {\n  margin-bottom: 20px;\n}\n", "", {"version":3,"sources":["C:/Users/Administrator/Desktop/app/example/views/components/Input.vue"],"names":[],"mappings":";AACA;EACE,oBAAoB;CACrB","file":"Input.vue","sourcesContent":["\n.dy-input-group {\n  margin-bottom: 20px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "YC2e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.6.0@vue-loader/lib/selector.js?type=script&index=0!./example/views/components/Input.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Input = ({
	data: function data() {
		return {
			telMsg: "",
			emailMsg: ""
		};
	}
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.6.0@vue-loader/lib/template-compiler?{"id":"data-v-d451a70a","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.6.0@vue-loader/lib/selector.js?type=template&index=0!./example/views/components/Input.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-box"},[_c('div',{staticClass:"components-title"},[_vm._v("Input 输入框")]),_vm._v(" "),_c('div',{staticClass:"components-wrapper"},[_c('ul',[_c('li',[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("输入框（默认）")]),_vm._v(" "),_c('dy-input')],1),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n\r\n        <dy-input></dy-input>\r\n\r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            // ...\r\n        }\r\n    </script>\r\n    ")]),_vm._v("\r\n")])]),_vm._v(" "),_c('li',[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("输入框（定制大小）")]),_vm._v(" "),_c('dy-input',{attrs:{"w":"50%","h":"40px"}})],1),_vm._v(" "),_c('div',{staticClass:"components-content"},[_c('dy-input',{attrs:{"w":"35%","h":"45px"}})],1),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n\r\n        <dy-input w=\"50%\" h=\"40px\"></dy-input>\r\n\r\n        <dy-input w=\"35%\" h=\"45px\"></dy-input>\r\n\r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            // ...\r\n        }\r\n    </script>\r\n    ")]),_vm._v("\r\n")])]),_vm._v(" "),_c('li',[_c('div',{staticClass:"components-content",staticStyle:{"height":"100px"}},[_c('h2',{staticClass:"h2"},[_vm._v("输入框（验证规则）")]),_vm._v(" "),_c('dy-input',{attrs:{"placeholder":"请输入手机号码","regex":"^1\\d{10}$","errorNotice":"请输入正确的手机号码"},model:{value:(_vm.telMsg),callback:function ($$v) {_vm.telMsg=$$v},expression:"telMsg"}})],1),_vm._v(" "),_c('div',{staticClass:"components-content",staticStyle:{"height":"60px"}},[_c('dy-input',{attrs:{"placeholder":"请输入邮箱地址","regex":"^[a-z0-9]+([._\\\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$","errorNotice":"请输入正确的邮箱地址"},model:{value:(_vm.emailMsg),callback:function ($$v) {_vm.emailMsg=$$v},expression:"emailMsg"}})],1),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n\r\n        <dy-input\r\n            placeholder=\"请输入手机号码\"\r\n            v-model=\"telMsg\"\r\n            regex=\"^1\\d{10}$\"\r\n            errorNotice=\"请输入正确的手机号码\"\r\n        ></dy-input>\r\n        \r\n\r\n        <dy-input\r\n            placeholder=\"请输入邮箱地址\"\r\n            v-model=\"emailMsg\"\r\n            regex=\"^[a-z0-9]+([._\\\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$\"\r\n            errorNotice=\"请输入正确的邮箱地址\"\r\n        ></dy-input>\r\n\r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            data() {\r\n                return {\r\n                    telMsg: \"\",\r\n                    emailMsg: \"\"\r\n                }\r\n            }\r\n        }\r\n    </script>\r\n    ")]),_vm._v("\r\n")])]),_vm._v(" "),_c('li',[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("输入框（禁用状态）")]),_vm._v(" "),_c('dy-input',{attrs:{"disabled":""}})],1),_vm._v(" "),_vm._m(3),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n\r\n        <dy-input disabled></dy-input>\r\n\r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            // ...\r\n        }\r\n    </script>\r\n    ")]),_vm._v("\r\n")])]),_vm._v(" "),_c('li',[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("复合型输入框")]),_vm._v(" "),_c('dy-input-group',[_c('span',{attrs:{"slot":"prepend"},slot:"prepend"},[_vm._v("http://")]),_vm._v(" "),_c('span',{attrs:{"slot":"append"},slot:"append"},[_vm._v(".com")]),_vm._v(" "),_c('dy-input')],1),_vm._v(" "),_c('dy-input-group',{attrs:{"disabled":""}},[_c('span',{attrs:{"slot":"prepend"},slot:"prepend"},[_vm._v("请输入帐号")]),_vm._v(" "),_c('dy-input')],1),_vm._v(" "),_c('dy-input-group',[_c('span',{attrs:{"slot":"append"},slot:"append"},[_vm._v("密码")]),_vm._v(" "),_c('dy-input')],1)],1),_vm._v(" "),_vm._m(4),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n\r\n        <dy-input-group>\r\n            <span slot=\"prepend\">http://</span>\r\n            <span slot=\"append\">.com</span>\r\n            <dy-input></dy-input>\r\n        </dy-input-group>\r\n\r\n\r\n        <dy-input-group disabled>\r\n            <span slot=\"prepend\">请输入帐号</span>\r\n            <dy-input></dy-input>\r\n        </dy-input-group>\r\n\r\n\r\n        <dy-input-group>\r\n            <span slot=\"append\">密码</span>\r\n            <dy-input></dy-input>\r\n        </dy-input-group>\r\n\r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            // ...\r\n        }\r\n    </script>\r\n    ")]),_vm._v("\r\n")])]),_vm._v(" "),_c('li',[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("文本框（默认）")]),_vm._v(" "),_c('dy-input',{attrs:{"type":"textarea"}})],1),_vm._v(" "),_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("文本框（可以拖拽改变大小）")]),_vm._v(" "),_c('dy-input',{attrs:{"resize":"","type":"textarea"}})],1),_vm._v(" "),_vm._m(5),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n\r\n        <dy-input type=\"textarea\"></dy-input>\r\n\r\n        <dy-input resize type=\"textarea\"></dy-input>\r\n\r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            // ...\r\n        }\r\n    </script>\r\n    ")]),_vm._v("\r\n")])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_c('code',[_vm._v("input")]),_vm._v(" 的原生属性可以正常使用，比如 "),_c('code',[_vm._v("placeholder")]),_vm._v("，默认的文本为请输入内容，可以手动指定将其覆盖掉")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("input")]),_vm._v(" 的默认宽度为 "),_c('code',[_vm._v("100%")]),_vm._v("，高度为 "),_c('code',[_vm._v("40px")]),_vm._v("（包含边框在内）")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("使用 "),_c('code',[_vm._v("w")]),_vm._v(" 和 "),_c('code',[_vm._v("h")]),_vm._v(" 参数来指定 "),_c('code',[_vm._v("input")]),_vm._v(" 框的长度和高度，需要带上单位，支持 "),_c('code',[_vm._v("px")]),_vm._v("，"),_c('code',[_vm._v("%")]),_vm._v("，"),_c('code',[_vm._v("em/rem")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("使用 "),_c('code',[_vm._v("regex")]),_vm._v(" 参数来指定验证的规则（注意：只需要添加正则即可，不需要 "),_c('code',[_vm._v("/ /")]),_vm._v("），"),_c('code',[_vm._v("errorNotice")]),_vm._v(" 参数来指定验证时提示的文字")]),_vm._v(" "),_c('p',[_vm._v("错误提示默认为红色字样，当匹配验证规则后会恢复原样")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("指定 "),_c('code',[_vm._v("disabled")]),_vm._v(" 参数来指定禁用即可")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("需要使用 "),_c('code',[_vm._v("dy-input-group")]),_vm._v(" 来包裹 "),_c('code',[_vm._v("dy-input")]),_vm._v(" 使用")]),_vm._v(" "),_c('p',[_vm._v("然后指定一个 "),_c('code',[_vm._v("span")]),_vm._v(" 标签，使用 "),_c('code',[_vm._v("slot=\"prepend\"")]),_vm._v(" 和 "),_c('code',[_vm._v("slot=\"append\"")]),_vm._v(" 参数来指定左右位置")]),_vm._v(" "),_c('p',[_vm._v("固定框中的文字是自适应长度的，如果只添加头部标签，尾部标签默认不显示（反之同理）")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("指定 "),_c('code',[_vm._v("dy-input")]),_vm._v(" 的 "),_c('code',[_vm._v("type")]),_vm._v(" 属性为 "),_c('code',[_vm._v("textarea")]),_vm._v(" 即可")]),_vm._v(" "),_c('p',[_vm._v("指定 "),_c('code',[_vm._v("resize")]),_vm._v(" 参数来指定是否可以拖拽改变大小")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_Input = (esExports);
// CONCATENATED MODULE: ./example/views/components/Input.vue
function injectStyle (ssrContext) {
  __webpack_require__("zxY9")
}
var normalizeComponent = __webpack_require__("OF7X")
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
  Input,
  components_Input,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_components_Input = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "zxY9":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("XG86");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("8bSs")("4ee14139", content, true);

/***/ })

});
//# sourceMappingURL=0.9e470e2bbd5fdb36a898.js.map