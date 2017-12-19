webpackJsonp([2],{

/***/ "2LdQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.6.0@vue-loader/lib/selector.js?type=script&index=0!./example/views/components/Slider.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Slider = ({
	data: function data() {
		return {
			sliderVal01: 0,
			sliderVal02: 0,
			sliderVal03: 25,
			sliderVal04: 30,
			sliderVal05: 420,
			sliderVal06: 10,
			sliderVal07: 20
		};
	}
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.6.0@vue-loader/lib/template-compiler?{"id":"data-v-759a44ee","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.6.0@vue-loader/lib/selector.js?type=template&index=0!./example/views/components/Slider.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-box"},[_c('div',{staticClass:"components-title"},[_vm._v("Slider 滑块")]),_vm._v(" "),_c('div',{staticClass:"components-wrapper"},[_c('ul',[_c('li',[_c('div',{staticClass:"components-content"},[_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("Slider - 滑块（默认）")]),_vm._v(" "),_c('dy-slider',{model:{value:(_vm.sliderVal01),callback:function ($$v) {_vm.sliderVal01=$$v},expression:"sliderVal01"}})],1),_vm._v(" "),_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("Slider - 滑块（显示tooltip）")]),_vm._v(" "),_c('dy-slider',{attrs:{"showTooltip":""},model:{value:(_vm.sliderVal02),callback:function ($$v) {_vm.sliderVal02=$$v},expression:"sliderVal02"}})],1),_vm._v(" "),_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("Slider - 滑块（自定义初始值）")]),_vm._v(" "),_c('dy-slider',{attrs:{"showTooltip":""},model:{value:(_vm.sliderVal03),callback:function ($$v) {_vm.sliderVal03=$$v},expression:"sliderVal03"}})],1),_vm._v(" "),_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("Slider - 滑块（显示输入框）")]),_vm._v(" "),_c('dy-slider',{attrs:{"showTooltip":"","showInput":""},model:{value:(_vm.sliderVal04),callback:function ($$v) {_vm.sliderVal04=$$v},expression:"sliderVal04"}})],1),_vm._v(" "),_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("Slider - 滑块（输入框限定范围值【100-1000】）")]),_vm._v(" "),_c('dy-slider',{attrs:{"showTooltip":"","showInput":"","min":100,"max":1000},model:{value:(_vm.sliderVal05),callback:function ($$v) {_vm.sliderVal05=$$v},expression:"sliderVal05"}})],1),_vm._v(" "),_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("Slider - 滑块（离散值）")]),_vm._v(" "),_c('dy-slider',{attrs:{"showTooltip":"","show-input":"","step":10},model:{value:(_vm.sliderVal06),callback:function ($$v) {_vm.sliderVal06=$$v},expression:"sliderVal06"}})],1),_vm._v(" "),_c('div',{staticClass:"components-content"},[_c('h2',{staticClass:"h2"},[_vm._v("Slider - 滑块（离散值【显示间断点】）")]),_vm._v(" "),_c('dy-slider',{attrs:{"showTooltip":"","show-input":"","step":20,"show-steps":""},model:{value:(_vm.sliderVal07),callback:function ($$v) {_vm.sliderVal07=$$v},expression:"sliderVal07"}})],1)]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("\r\n    "),_c('code',{staticClass:"html"},[_vm._v("\r\n    <template>\r\n        \r\n        <h2 class=\"h2\">Slider - 滑块（默认）</h2>\r\n        <dy-slider v-model=\"sliderVal01\"></dy-slider>\r\n\r\n        <h2 class=\"h2\">Slider - 滑块（显示tooltip）</h2>\r\n        <dy-slider v-model=\"sliderVal02\" showTooltip></dy-slider>\r\n\r\n        <h2 class=\"h2\">Slider - 滑块（自定义初始值）</h2>\r\n        <dy-slider v-model=\"sliderVal03\" showTooltip></dy-slider>\r\n\r\n        <h2 class=\"h2\">Slider - 滑块（显示输入框）</h2>\r\n        <dy-slider v-model=\"sliderVal04\" showTooltip showInput></dy-slider>\r\n\r\n        <h2 class=\"h2\">Slider - 滑块（输入框限定范围值【100-1000】）</h2>\r\n        <dy-slider v-model=\"sliderVal05\" showTooltip showInput :min=\"100\" :max=\"1000\"></dy-slider>\r\n\r\n        <h2 class=\"h2\">Slider - 滑块（离散值）</h2>\r\n        <dy-slider v-model=\"sliderVal06\" showTooltip show-input :step=\"10\"></dy-slider>\r\n\r\n        <h2 class=\"h2\">Slider - 滑块（离散值【显示间断点】）</h2>\r\n        <dy-slider v-model=\"sliderVal07\" showTooltip show-input :step=\"20\" show-steps></dy-slider>\r\n\r\n    </template>\r\n\r\n    <script>\r\n\r\n        export default {\r\n            data() {\r\n                return {\r\n                    sliderVal01: 0,\r\n                    sliderVal02: 0,\r\n                    sliderVal03: 25,\r\n                    sliderVal04: 30,\r\n                    sliderVal05: 420,\r\n                    sliderVal06: 10,\r\n                    sliderVal07: 20,\r\n                }\r\n            }\r\n        }\r\n\r\n    </script>\r\n    ")]),_vm._v("\r\n")])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-code"},[_c('div',{staticClass:"code-title"},[_vm._v("示例代码")]),_vm._v(" "),_c('div',{staticClass:"code-tip"},[_c('p',[_c('code',[_vm._v("showTooltip")]),_vm._v(" -- 布尔值，是否显示 "),_c('code',[_vm._v("tooltip")]),_vm._v("，默认为 "),_c('code',[_vm._v("false")])]),_vm._v(" "),_c('p',[_c('code',[_vm._v("showInput")]),_vm._v(" -- 布尔值，是否显示配套显示的 "),_c('code',[_vm._v("input")]),_vm._v("，默认为 "),_c('code',[_vm._v("false")])]),_vm._v(" "),_c('p',[_c('code',[_vm._v(":min")]),_vm._v(" -- 设定最小值")]),_vm._v(" "),_c('p',[_c('code',[_vm._v(":max")]),_vm._v(" -- 设定最大值")]),_vm._v(" "),_c('p',[_c('code',[_vm._v(":step")]),_vm._v(" -- 设定离散数值")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("show-steps")]),_vm._v(" -- 布尔值，是否显示离散数值间断点，默认为 "),_c('code',[_vm._v("false")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_Slider = (esExports);
// CONCATENATED MODULE: ./example/views/components/Slider.vue
function injectStyle (ssrContext) {
  __webpack_require__("Jna1")
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
  Slider,
  components_Slider,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_components_Slider = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "Jna1":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("QbDX");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("8bSs")("c0aa6c3a", content, true);

/***/ }),

/***/ "QbDX":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("BkJT")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Slider.vue","sourceRoot":""}]);

// exports


/***/ })

});
//# sourceMappingURL=2.0d31a02370d09b66d74e.js.map