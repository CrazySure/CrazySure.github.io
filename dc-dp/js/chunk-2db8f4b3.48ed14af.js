(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2db8f4b3"],{"9cd6":function(t,a,s){},aec3:function(t,a,s){"use strict";s("9cd6")},f0b6:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"early-warning-router-container"},[s("div",{staticClass:"main-card"},[s("div",{staticClass:"main-header"},[s("span",{staticClass:"main-title"},[t._v("数据分析")]),s("div",{staticClass:"header-title"},[t._v("地表水断面分析")]),s("div",{staticClass:"close-btn",on:{click:t.cancelBtn}},[t._v("×")])]),s("div",{staticClass:"content1"},[s("div",{staticClass:"buttomBox"},[s("div",{staticClass:"contentBox"},[s("div",{staticClass:"top_box"},[s("div",{staticClass:"top_center"},[s("button",{class:1==t.modelShow?"active":"",on:{click:function(a){return t.detailClk("1","1,2")}}},[t._v("国、市考核断面")]),s("button",{class:2==t.modelShow?"active":"",on:{click:function(a){return t.detailClk("2","3")}}},[t._v("镇(街道）考核断面")])])]),s("div",{staticClass:"content_div"},[s("div",{staticClass:"table-box"},[t._m(0),s("div",{staticClass:"my-table-body"},[s("vue-seamless-scroll",{staticClass:"seamless-warp",attrs:{data:t.tableData,"class-option":t.classOption}},t._l(t.tableData,(function(a,e){return s("a",{key:e,staticClass:"my-table-content",attrs:{href:"javascript:;"},on:{click:function(s){return t.goToDetails(a)}}},[s("div",{staticClass:"text-span"},[t._v(t._s(a.name))]),s("div",{staticClass:"text-span"},[t._v(t._s(a.river))]),s("div",{staticClass:"text-span"},[t._v(t._s(a.type))]),s("div",{staticClass:"text-span"},[t._v(t._s(a.wq_object))]),s("div",{staticClass:"text-span"},[t._v(t._s(a.wq_reach))]),s("div",{staticClass:"text-span"},[t._v(t._s(a.wq_year_level))]),s("div",{staticClass:"text-span"},[t._v(t._s(a.wq_year_reach))])])})),0)],1)])])])])])])])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"my-table-header"},[s("span",{staticStyle:{width:"200px"}},[t._v("断面名称")]),s("span",{staticStyle:{width:"200px"}},[t._v("河流")]),s("span",{staticStyle:{width:"200px"}},[t._v("考核断面")]),s("span",{staticStyle:{width:"200px"}},[t._v("水质目标类别")]),s("span",{staticStyle:{width:"200px"}},[t._v("当月达标情况")]),s("span",{staticStyle:{width:"200px"}},[t._v("本年平均水质类别")]),s("span",{staticStyle:{width:"200px"}},[t._v("本年达标情况")])])}],n=s("b775"),c={components:{},data:function(){return{modelShow:"1",tabeName:"1,2",tableData:[],list:[{name:"1,2"},{name:"3"},{name:"4"}]}},created:function(){this.getData(),this.getAirsDataList()},computed:{classOption:function(){return{step:"1"==this.modelShow?0:.5,limitMoveNum:10,hoverStop:!0,direction:1,singleHeight:0,singleWidth:0,waitTime:1e3}}},methods:{detailClk:function(t,a){this.modelShow=t,this.tabeName=a,this.getAirsDataList()},cancelBtn:function(){this.$router.push({name:"Home"})},getData:function(){},getAirsDataList:function(){var t=this,a={username:"api",password:"a123456b",section_type:this.tabeName};n["a"].get("https://api-dx-smart-city.airqualitychina.cn:9998/v1/dashboard/water/section-data",{params:{json:a}}).then((function(a){var s=a.data.result;2e3===a.data.code&&s&&(t.tableData=s)}))}}},l=c,o=(s("aec3"),s("2877")),r=Object(o["a"])(l,e,i,!1,null,"2b6f6192",null);a["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2db8f4b3.48ed14af.js.map