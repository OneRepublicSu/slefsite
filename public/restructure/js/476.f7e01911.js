"use strict";(self["webpackChunkOneRepublicSu"]=self["webpackChunkOneRepublicSu"]||[]).push([[476],{5476:function(t,e,s){s.r(e),s.d(e,{default:function(){return r}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main"},[e("h2",[t._v("项目名称")]),e("div",{staticClass:"top"},[t._m(0),e("div",{on:{click:function(e){return t.$router.back()}}},[t._v(" click here to back"),e("i",{staticClass:"el-icon-caret-right"})])]),e("div",{staticClass:"or-container"},t._l(t.piclist,(function(s,a){return e("div",{key:a,staticClass:"box",class:t.eleindex==a?"eleactive":"",on:{mouseenter:function(e){return t.enter(a)},mouseleave:function(e){return t.out(a)}}},[e("img",{attrs:{src:s.img}})])})),0),e("el-descriptions",[e("template",{slot:"title"},[e("span",{staticClass:"titleimp"},[t._v("项目信息")])]),e("el-descriptions-item",{attrs:{label:"项目类型"}},[t._v("以表单为主导的后台管理系统")]),e("el-descriptions-item",{attrs:{label:"开发周期"}},[t._v("2022.11 – 2022.12（仅收尾） ")]),e("el-descriptions-item",{attrs:{label:"迭代周期"}},[t._v("技术支持组，不参与迭代")]),e("el-descriptions-item",{attrs:{label:"技术栈"}},[e("el-tag",{attrs:{size:"small"}},[t._v("Vue2")]),e("el-tag",{attrs:{size:"small"}},[t._v("axios")]),e("el-tag",{attrs:{size:"small"}},[t._v("Element UI")]),e("el-tag",{attrs:{size:"small"}},[t._v("Scss")])],1),e("el-descriptions-item",{attrs:{label:"团队配置"}},[t._v("技术支持组，不清楚原有配比 ")]),e("el-descriptions-item",{attrs:{label:"项目截图"}},[t._v("如上所示（保护隐私，截取图数据为模拟数据） ")])],2),e("div",[e("el-collapse",{attrs:{accordion:""},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[e("el-collapse-item",{attrs:{name:"1"}},[e("template",{slot:"title"},[e("span",{staticClass:"titleimp"},[t._v("项目总览")])]),e("p",[t._v(" 这是一个基于Vue2和Element UI以及uni-app的后台管理系统+前台展示+移动端app项目 "),e("br"),t._v(" 记录的主要原因是这是我第一次接触到业务线如此完整和闭环的项目（多端都有） "),e("br"),t._v(" 在开发时涉及到了"),e("span",{staticClass:"imp"},[t._v("组件化")]),t._v("以及各类插件的使用 ")])],2),e("el-collapse-item",{attrs:{name:"2"}},[e("template",{slot:"title"},[e("span",{staticClass:"titleimp"},[t._v("开发存档")])]),e("el-backtop"),e("p",[t._v(" 未参与开发，技术支持组仅提供支持 ")])],2),e("el-collapse-item",{attrs:{name:"3"}},[e("template",{slot:"title"},[e("span",{staticClass:"titleimp"},[t._v("Bug记录")])]),e("el-backtop"),e("div",[e("div",{staticClass:"contain"},[e("div",[e("h4",[t._v("git的hash相关使用")]),e("p",[t._v(" 在进行超大型工程的开发时，子模块的出现是不可避免的，子模块与原工程大概率并不同属于一个仓库，在一部分情况下 子模块与父模块是分开管理的，在一部分情况下为了方便是一起管理的，这个时候就需要用到hash的概念，在主分支会生成一个 包含"),e("span",{staticClass:"imp"},[t._v("-Subproject commit bb935192a07b0b12531fc35d5199b88ba4fbc1fb")]),t._v("的文件，提交的时候这一部分 也需要进行push ")])]),e("div",[e("h4",[t._v("传值的小坑")]),e("p",[t._v(" 传值这个操作我们都是非常清楚并不陌生的操作，但是是否有时会出现一种奇怪的现象，就是在传布尔值时，真值可传，false的携带总是失败显示 undefined，这种情况多半是因为组件是通用的，在接收值的地方设置了逻辑符号 "),e("span",{staticClass:"imp"},[t._v("|| 或者 && ")]),t._v(" 一定要注意这样的情况 ，因为这种符号遇到布尔值很容易就直接进行判断和其他的操作了 ")])]),e("div",[e("h4",[t._v("数据的双向关联")]),e("p",[t._v(" 两个值的总和保持不变这种需求是非常常见的，我们最常用的方法就是"),e("span",{staticClass:"imp"},[t._v("监听")]),t._v("，监听值的变化可以很好的消化这个问题。 监听分两种，一种监听值，值变另一个跟着变，但是因为vue2的监听原理的关系，当监听复杂的对象时，新值会完全覆盖掉旧值 如果出现这样的情况，可以考虑直接监听输入框的"),e("span",{staticClass:"imp"},[t._v("input或者change")]),t._v("事件 ")])]),e("div",[e("h4",[t._v("部分信息显示为数字")]),e("p",[t._v(" 这种情况多半是出现在有下拉框的区域，或者是其他需要遍历替换的地方，无论出现在什么地方，出现这种情况的可能性只有一种 就是被渲染成数字的这一项在"),e("span",{staticClass:"imp"},[t._v("本来的表单")]),t._v("里，或者说是被遍历的表单里，是"),e("span",{staticClass:"imp"},[t._v("不存在")]),t._v("的。 ")])])])])],2)],1)],1)],1)},i=[function(){var t=this,e=t._self._c;return e("div",[e("p",{staticClass:"title"},[t._v("CTRM-风险子（后管）")])])}],l={data(){return{activeName:"1",eleindex:0,piclist:[{img:"https://superjunior.top/uploads/1e917f1423685718dda664fbba725a26"},{img:"https://superjunior.top/uploads/fb804432d80a2d6876e4720630aa19e7"},{img:"https://superjunior.top/uploads/040528cb21a3954e1c69f38cefd5f78d"},{img:"https://superjunior.top/uploads/49b01c83cbc7ddea09b4cc79d016ad31"},{img:"https://superjunior.top/uploads/0a9149d0546a9b7b7cce1df53f971053"}]}},methods:{enter:function(t){this.eleindex=t},out:function(t){this.imgindex=-1}}},c=l,n=s(1001),p=(0,n.Z)(c,a,i,!1,null,"ac91ea34",null),r=p.exports}}]);