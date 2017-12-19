webpackJsonp([10],{

/***/ "09jh":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("sbk2");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("8bSs")("3a7e589f", content, true);

/***/ }),

/***/ "7FmX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.6.0@vue-loader/lib/selector.js?type=script&index=0!./example/views/components/Switch.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Switch = ({
	data: function data() {
		return {
			switch1: false,
			switch2: true,
			switch3: false,
			switch4: false,
			switch5: true
		};
	}
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.6.0@vue-loader/lib/template-compiler?{"id":"data-v-133c4bb7","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.6.0@vue-loader/lib/selector.js?type=template&index=0!./example/views/components/Switch.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-box"},[_c('div',{staticClass:"components-title"},[_vm._v("Switch 开关")]),_vm._v(" "),_c('div',{staticClass:"components-wrapper"},[_c('ul',[_c('li',[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("开关 - Switch（默认）")]),_vm._v(" "),_c('dy-switch',{model:{value:(_vm.switch1),callback:function ($$v) {_vm.switch1=$$v},expression:"switch1"}})],1),_vm._v(" "),_c('div',{staticClass:"components-content"},[_c('dy-switch',{model:{value:(_vm.switch2),callback:function ($$v) {_vm.switch2=$$v},expression:"switch2"}})],1),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n\r\n        <dy-switch v-model=\"switch1\"></dy-switch>\r\n\r\n        <dy-switch v-model=\"switch2\"></dy-switch>\r\n\r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            data() {\r\n                return {\r\n                    switch1: false,\r\n                    switch2: true\r\n                }\r\n            }\r\n        }\r\n    </script>\r\n    ")]),_vm._v("\r\n")])]),_vm._v(" "),_c('li',[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("开关 - Switch（添加文字提示）")]),_vm._v(" "),_c('dy-switch',{attrs:{"inActiveText":"左侧","activeText":"右侧"},model:{value:(_vm.switch3),callback:function ($$v) {_vm.switch3=$$v},expression:"switch3"}})],1),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n\r\n        <dy-switch\r\n            v-model=\"switch3\"\r\n            inActiveText=\"左侧\"\r\n            activeText=\"右侧\"\r\n        ></dy-switch>\r\n\r\n        <dy-switch v-model=\"switch3\"></dy-switch>\r\n\r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            data() {\r\n                return {\r\n                    switch3: false\r\n                }\r\n            }\r\n        }\r\n    </script>\r\n    ")]),_vm._v("\r\n")])]),_vm._v(" "),_c('li',[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("开关 - Switch（禁用状态）")]),_vm._v(" "),_c('dy-switch',{attrs:{"disabled":"","inActiveText":"左侧","activeText":"右侧"},model:{value:(_vm.switch4),callback:function ($$v) {_vm.switch4=$$v},expression:"switch4"}})],1),_vm._v(" "),_c('div',{staticClass:"components-content"},[_c('dy-switch',{attrs:{"disabled":"","inActiveText":"左侧","activeText":"右侧"},model:{value:(_vm.switch5),callback:function ($$v) {_vm.switch5=$$v},expression:"switch5"}})],1),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n\r\n        <dy-switch \r\n            disabled\r\n            v-model=\"switch4\"\r\n            inActiveText=\"左侧\"\r\n            activeText=\"右侧\"\r\n        ></dy-switch>\r\n\r\n        <dy-switch \r\n            disabled\r\n            v-model=\"switch5\"\r\n            inActiveText=\"左侧\"\r\n            activeText=\"右侧\"\r\n        ></dy-switch>\r\n\r\n    </template>\r\n\r\n    <script>\r\n        export default {\r\n            data() {\r\n                return {\r\n                    switch4: false,\r\n                    switch5: true\r\n                }\r\n            }\r\n        }\r\n    </script>\r\n    ")]),_vm._v("\r\n")])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("使用 "),_c('code',[_vm._v("v-model")]),_vm._v(" 所绑定的值来决定初始值")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("使用 "),_c('code',[_vm._v("inActiveText")]),_vm._v(" 和 "),_c('code',[_vm._v("activeText")]),_vm._v(" 参数来设置左右显示的文字")]),_vm._v(" "),_c('p',[_vm._v("具体样式可以配合生成的 "),_c('code',[_vm._v("class")]),_vm._v(" 的值 "),_c('code',[_vm._v("dy-switch-inActiveText")]),_vm._v(" 和 "),_c('code',[_vm._v("dy-switch-activeText")]),_vm._v(" 来进行设置")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_vm._v("添加 "),_c('code',[_vm._v("disabled")]),_vm._v(" 参数即可")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_Switch = (esExports);
// CONCATENATED MODULE: ./example/views/components/Switch.vue
function injectStyle (ssrContext) {
  __webpack_require__("09jh")
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
  Switch,
  components_Switch,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_components_Switch = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "sbk2":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("BkJT")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Switch.vue","sourceRoot":""}]);

// exports


/***/ })

});
//# sourceMappingURL=10.bf98ac15e9a15ff67091.js.map