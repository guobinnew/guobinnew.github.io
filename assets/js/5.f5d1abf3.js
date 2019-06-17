(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{182:function(s,a,n){"use strict";n.r(a);var t=n(0),e=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"blueprint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#blueprint","aria-hidden":"true"}},[s._v("#")]),s._v(" blueprint")]),s._v(" "),n("p",[s._v("基于Canvas的轻量级可视化编辑器，底层框架采用Konva，支持拖放、缩放、连线、Undo/Redo、Save/Load等功能")]),s._v(" "),n("p",[n("img",{attrs:{src:"/img/blueprint/mainui.png",alt:"image"}})]),s._v(" "),n("h2",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("npm install orion-blueprint\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"vue框架中使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue框架中使用","aria-hidden":"true"}},[s._v("#")]),s._v(" Vue框架中使用")]),s._v(" "),n("p",[s._v("App.Vue")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<template>\n    <div class="container" v-resize="onResize">\n        <div id="editor"></div>\n    </div>\n</template>\n\n<style scoped>\n.container {\n  overflow: hidden;\n  height: 100%;\n}\n\n#editor {\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n}\n</style>\n\n<script>\nimport blueprint from "orion-blueprint"\nimport resize from \'vue-resize-directive\'\n\nexport default {\n  data: function() {\n    return {\n      editor: null,\n      size: {\n        width: 0,\n        height: 0\n      }\n    }\n  },\n  directives: {\n    resize,\n  },\n  methods: {\n    onResize() {\n      this.size.width = this.$el.clientWidth\n      this.size.height = this.$el.clientHeight\n      this.$nextTick( () => {\n         this.editor.resize(this.size.width, this.size.height)\n      })\n    }\n  },\n  mounted: function() {\n   this.size.width = this.$el.clientWidth\n   this.size.height = this.$el.clientHeight\n\n   this.scene.stage = blueprint.init({\n      container: \'editor\',\n      width: this.size.width,\n      height: this.size.height\n   })\n  }\n}\n<\/script>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br")])]),n("h2",{attrs:{id:"主要api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#主要api","aria-hidden":"true"}},[s._v("#")]),s._v(" 主要API")]),s._v(" "),n("h3",{attrs:{id:"blueprint-init-option"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#blueprint-init-option","aria-hidden":"true"}},[s._v("#")]),s._v(" blueprint.init(option)")]),s._v(" "),n("p",[s._v("用来初始化编辑器，返回一个Stage对象实例。\noption选项包含：\n{\ncontainer: string 用来容纳的DOM节点Id（必须有）\nwidth:  number canvas宽度（必须有）\nheight: number canvas高度（必须有）\ndraggable: boolean 是否允许内容拖放，默认false\ncanZoom: boolean true 是否允许缩放，默认true\nmodel:\n{\nportName: string 用于显示端口名称的字段，默认为'name'\nshowDataType: boolean 是否显示端口数据类型，默认为true\n}\n}")]),s._v(" "),n("p",[s._v("示例")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  let editor = blueprint.init({\n       container: 'editor',\n       width: this.size.width,\n       height: this.size.height\n    })\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h3",{attrs:{id:"stage-addmodel-option"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#stage-addmodel-option","aria-hidden":"true"}},[s._v("#")]),s._v(" Stage.addModel(option)")]),s._v(" "),n("p",[s._v("添加一个模型，返回一个对象节点（Konva.Group对象）\noption选项包含：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(" {\n      uid: string 模型唯一ID（没有则自动生成）\n      x: number X坐标\n      y: number Y坐标\n      title: string 模型标题\n      name: string 模型ID名\n      version: string 模型版本\n      ports: [ 端口列表\n        {\n          orientation: in | out  端口方向\n          external: boolean 是否暴露给外部\n          name: string 端口ID\n          title: string 端口标题\n          dataType: string 数据类型\n          version: string 数据类型版本\n        }\n      ]\n }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("p",[s._v("示例")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("   let model = this.scene.stage.addModel({\n            name: 'ComponentA',\n            title: '组件A',\n            x: 200,\n            y: 200,\n            ports: [\n              {\n                orientation: 'in',\n                external: true,\n                name: 'LocationX',\n                datatype: 'float'\n              },\n              {\n                orientation: 'in',\n                external: true,\n                name: 'LocationY',\n                datatype: 'float'\n              },\n              {\n                orientation: 'out',\n                name: 'Distance',\n                datatype: 'float'\n              }\n            ]\n          })\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("p",[s._v("返回的Model对象，提供inport和outport函数来获取端口对象，使用方法如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  let o = g1.outport('Distance')\n  let i = g1.inport('LocationX')\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"stage-addline-option"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#stage-addline-option","aria-hidden":"true"}},[s._v("#")]),s._v(" Stage.addLine(option)")]),s._v(" "),n("p",[s._v("添加一个连线，返回一个对象节点（Konva.Line对象）\noption选项包含：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  {\n     start: konva.Group  起始端口（必须是outport类型）\n     end: konva.Group 终止端口（必须是inport类型）\n     points: array[number] 连线的坐标点数组（共4个坐标点，连线为贝塞尔曲线，2个顶点 + 2个控制点），如果不提供则自动根据端口生成\n  }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("示例")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("   editor.addLink({\n       start: model1.outport('Distance'),\n       end: model2.inport('Distance')\n   })\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"stage-savetojson"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#stage-savetojson","aria-hidden":"true"}},[s._v("#")]),s._v(" Stage.saveToJson()")]),s._v(" "),n("p",[s._v("将编辑器内容保存为JSON对象\nJSON格式示例：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('{\n  models: [\n    {\n      name: "ComponentA",\n      ports: [\n       {orientation: "in", external: true, name: "LocationX", datatype: "float"},\n       {orientation: "in", external: true, name: "LocationY", datatype: "float"},\n       {orientation: "out", name: "Distance", datatype: "float"}\n      ],\n      title: "组件A",\n      uid: "1jr8rp20d",\n      x: 162,\n      y: 310\n    }\n  ],\n  links: [\n    {\n       end: {mid: "1jr8rp20f", port: "Distance"},\n       points: [338.7373046875, 384, 438.7373046875, 384, 450, 217, 550, 217],\n       start: {mid: "1jr8rp20d", port: "Distance"}\n    }\n  ]\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("p",[s._v("示例")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("   let cache = editor.saveToJson()\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"stage-loadfromjson-data-cache-true"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#stage-loadfromjson-data-cache-true","aria-hidden":"true"}},[s._v("#")]),s._v(" Stage.loadFromJson(data, cache = true)")]),s._v(" "),n("p",[s._v("加载JSON数据（由Stage.saveToJson()函数生成）, 其中cache参数用于控制是否清除Undo缓存，默认为true")]),s._v(" "),n("p",[s._v("示例")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("   editor.loadFromJson(cache)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"stage-snapshot"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#stage-snapshot","aria-hidden":"true"}},[s._v("#")]),s._v(" Stage.snapshot()")]),s._v(" "),n("p",[s._v("生成编辑器内容快照，主要用于Undo/Redo")]),s._v(" "),n("h3",{attrs:{id:"stage-zoomin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#stage-zoomin","aria-hidden":"true"}},[s._v("#")]),s._v(" Stage.zoomIn()")]),s._v(" "),n("p",[s._v("放大编辑区的缩放比例，最大为10倍")]),s._v(" "),n("h3",{attrs:{id:"stage-zoomout"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#stage-zoomout","aria-hidden":"true"}},[s._v("#")]),s._v(" Stage.zoomOut()")]),s._v(" "),n("p",[s._v("缩小编辑区的缩放比例，最小为1/10倍")]),s._v(" "),n("h3",{attrs:{id:"stage-reset"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#stage-reset","aria-hidden":"true"}},[s._v("#")]),s._v(" Stage.reset()")]),s._v(" "),n("p",[s._v("恢复编辑区的缩放比例和位置偏移（回到原点）")]),s._v(" "),n("h3",{attrs:{id:"stage-undo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#stage-undo","aria-hidden":"true"}},[s._v("#")]),s._v(" Stage.undo()")]),s._v(" "),n("p",[s._v("撤销最近的一步操作")]),s._v(" "),n("h3",{attrs:{id:"stage-redo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#stage-redo","aria-hidden":"true"}},[s._v("#")]),s._v(" Stage.redo()")]),s._v(" "),n("p",[s._v("重做上一次撤销的操作")]),s._v(" "),n("h3",{attrs:{id:"stage-clear-cache-true"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#stage-clear-cache-true","aria-hidden":"true"}},[s._v("#")]),s._v(" Stage.clear(cache = true)")]),s._v(" "),n("p",[s._v("清空编辑区, 其中cache参数用于控制是否清除Undo缓存，默认为true")]),s._v(" "),n("h3",{attrs:{id:"stage-autolink"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#stage-autolink","aria-hidden":"true"}},[s._v("#")]),s._v(" Stage.autoLink()")]),s._v(" "),n("p",[s._v("自动实现端口连线，连线条件必须是端口名+数据类型+版本完全一致")])])}],!1,null,null,null);e.options.__file="README.md";a.default=e.exports}}]);