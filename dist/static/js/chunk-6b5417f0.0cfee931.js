(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b5417f0"],{"37f9":function(e,a,t){},"42c4":function(e,a,t){"use strict";var l=t("bddd"),r=t.n(l);r.a},ad8f:function(e,a,t){"use strict";t.d(a,"e",(function(){return r})),t.d(a,"f",(function(){return s})),t.d(a,"c",(function(){return n})),t.d(a,"a",(function(){return o})),t.d(a,"h",(function(){return i})),t.d(a,"b",(function(){return c})),t.d(a,"d",(function(){return d})),t.d(a,"g",(function(){return u}));var l=t("b775");function r(e){return Object(l["a"])({url:"/table/list",method:"get",params:e})}function s(e){return Object(l["a"])({method:"get",url:"/table/planlist",params:e})}function n(e){return Object(l["a"])({url:"/table/editdata",method:"post",data:e})}function o(e){return Object(l["a"])({url:"/table/add",method:"post",data:e})}function i(e){return Object(l["a"])({url:"/table/editplan",method:"post",data:e})}function c(e){return Object(l["a"])({url:"/table/addplan",method:"post",data:e})}function d(e){return Object(l["a"])({method:"get",url:"/table/Journallist",params:e})}function u(e){return Object(l["a"])({url:"/table/editori",method:"post",data:e})}},bddd:function(e,a,t){},c963:function(e,a,t){"use strict";t.r(a);var l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"add-plan"},[t("el-steps",{staticClass:"mb",attrs:{active:e.activeIndex,"finish-status":"success","align-center":"",simple:""}},[t("el-step",{attrs:{title:"新建广告组"}}),e._v(" "),t("el-step",{attrs:{title:"新建推广计划"}}),e._v(" "),t("el-step",{attrs:{title:"新建创意"}})],1),e._v(" "),t("el-card",[t("el-row",{staticClass:"budget-box scene-box"},[t("div",{staticClass:"public-label"},[e._v("所属广告组")]),e._v(" "),e.advName.value?t("span",{staticClass:"adv-name"},[e._v(e._s(e.advName.value))]):t("span",{staticClass:"adv-name"},[e._v(e._s(e.advName))])])],1),e._v(" "),t("el-card",[t("el-form",{ref:"addPlanFormRef",attrs:{model:e.addPlanForm,rules:e.addPlanFormRules,"label-width":"120px","label-position":"left"}},[t("el-row",{staticClass:"title mb"},[e._v("设置计划名称")]),e._v(" "),t("el-form-item",{attrs:{label:"计划名称",prop:"plan_name"}},[t("el-input",{staticClass:"my-input",model:{value:e.addPlanForm.plan_name,callback:function(a){e.$set(e.addPlanForm,"plan_name",a)},expression:"addPlanForm.plan_name"}})],1),e._v(" "),t("el-row",{staticClass:"title mb"},[e._v("时间定向")]),e._v(" "),t("el-row",{staticClass:"budget-box time-box"},[t("div",{staticClass:"public-label"},[e._v("投放时间")]),e._v(" "),t("el-tabs",{staticClass:"budget-tabs",attrs:{type:"card"},model:{value:e.timeActiveName,callback:function(a){e.timeActiveName=a},expression:"timeActiveName"}},[t("el-tab-pane",{attrs:{label:"不限",name:"timeOne"}}),e._v(" "),t("el-tab-pane",{attrs:{label:"自定义",name:"timeTwo"}},[t("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.addPlanForm.put_time,callback:function(a){e.$set(e.addPlanForm,"put_time",a)},expression:"addPlanForm.put_time"}})],1)],1)],1),e._v(" "),t("el-row",{staticClass:"budget-box time-box"},[t("div",{staticClass:"public-label"},[e._v("投放时间段")]),e._v(" "),t("el-tabs",{staticClass:"budget-tabs",attrs:{type:"card"},model:{value:e.timeSlotActiveName,callback:function(a){e.timeSlotActiveName=a},expression:"timeSlotActiveName"}},[t("el-tab-pane",{attrs:{label:"不限",name:"timeSlotOne"}}),e._v(" "),t("el-tab-pane",{attrs:{label:"自定义",name:"timeSlotTwo"}},[t("el-time-picker",{attrs:{"is-range":"","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",placeholder:"选择时间范围"},model:{value:e.addPlanForm.put_slot_time,callback:function(a){e.$set(e.addPlanForm,"put_slot_time",a)},expression:"addPlanForm.put_slot_time"}})],1)],1)],1),e._v(" "),t("el-row",{staticClass:"title mb"},[e._v("地域定向")]),e._v(" "),t("el-row",{staticClass:"budget-box scene-box"},[t("div",{staticClass:"public-label"},[e._v("投放地域")]),e._v(" "),t("el-tabs",{staticClass:"budget-tabs",attrs:{type:"card"},model:{value:e.areaActiveName,callback:function(a){e.areaActiveName=a},expression:"areaActiveName"}},[t("el-tab-pane",{attrs:{label:"不限",name:"areaOrientOne"}}),e._v(" "),t("el-tab-pane",{attrs:{label:"自定义",name:"areaOrientTwo"}},[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:14}},[t("el-card",{staticClass:"box-card my-card"},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",[e._v("地域定向")])]),e._v(" "),t("div",{staticClass:"my-cascader"},[t("el-cascader-panel",{attrs:{size:"large",options:e.areaOptions,props:e.areaProps},on:{change:e.areaChange},model:{value:e.addPlanForm.put_area,callback:function(a){e.$set(e.addPlanForm,"put_area",a)},expression:"addPlanForm.put_area"}})],1)])],1)],1)],1)],1)],1),e._v(" "),t("el-row",{staticClass:"title mb"},[e._v("人群定向")]),e._v(" "),t("el-row",{staticClass:"budget-box operator-box"},[t("div",{staticClass:"public-label"},[e._v("运行商定向")]),e._v(" "),t("el-tabs",{staticClass:"budget-tabs",attrs:{type:"card"},model:{value:e.operatorActiveName,callback:function(a){e.operatorActiveName=a},expression:"operatorActiveName"}},[t("el-tab-pane",{attrs:{label:"不限",name:"operatorOne"}}),e._v(" "),t("el-tab-pane",{attrs:{label:"自定义",name:"operatorTwo"}},[t("el-checkbox-group",{staticClass:"mb",model:{value:e.addPlanForm.operator_orient,callback:function(a){e.$set(e.addPlanForm,"operator_orient",a)},expression:"addPlanForm.operator_orient"}},[t("el-checkbox-button",{attrs:{label:"联通"}}),e._v(" "),t("el-checkbox-button",{attrs:{label:"移动"}}),e._v(" "),t("el-checkbox-button",{attrs:{label:"电信"}})],1)],1)],1)],1),e._v(" "),t("el-row",{staticClass:"budget-box operator-box"},[t("div",{staticClass:"public-label"},[e._v("车主")]),e._v(" "),t("el-tabs",{staticClass:"budget-tabs",attrs:{type:"card"},model:{value:e.carActiveName,callback:function(a){e.carActiveName=a},expression:"carActiveName"}},[t("el-tab-pane",{attrs:{label:"不限",name:"carOne"}}),e._v(" "),t("el-tab-pane",{attrs:{label:"自定义",name:"carTwo"}},[t("el-checkbox-group",{staticClass:"mb",model:{value:e.addPlanForm.car_owner,callback:function(a){e.$set(e.addPlanForm,"car_owner",a)},expression:"addPlanForm.car_owner"}},[t("el-checkbox-button",{attrs:{label:"低端车"}}),e._v(" "),t("el-checkbox-button",{attrs:{label:"中端车"}}),e._v(" "),t("el-checkbox-button",{attrs:{label:"高端车"}})],1)],1)],1)],1),e._v(" "),t("el-row",{staticClass:"budget-box scene-box"},[t("div",{staticClass:"public-label"},[e._v("场景定向")]),e._v(" "),t("el-tabs",{staticClass:"budget-tabs",attrs:{type:"card"},model:{value:e.sceneActiveName,callback:function(a){e.sceneActiveName=a},expression:"sceneActiveName"}},[t("el-tab-pane",{attrs:{label:"不限",name:"sceneOrientOne"}}),e._v(" "),t("el-tab-pane",{attrs:{label:"自定义",name:"sceneOrientTwo"}},[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:14}},[t("el-card",{staticClass:"box-card my-card"},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",[e._v("场景定向")])]),e._v(" "),t("div",{staticClass:"my-cascader"},[t("el-tree",{ref:"treeRefs",attrs:{data:e.sceneData,props:e.sceneProps,"default-expand-all":"","show-checkbox":"","node-key":"id"},on:{"check-change":e.checkActived}})],1)])],1)],1)],1)],1)],1),e._v(" "),t("el-row",{staticClass:"title mb"},[e._v("投放渠道")]),e._v(" "),t("el-row",{staticClass:"budget-box"},[t("div",{staticClass:"public-label"},[e._v("渠道")]),e._v(" "),t("el-tabs",{staticClass:"budget-tabs",attrs:{type:"card"},model:{value:e.mediaActiveName,callback:function(a){e.mediaActiveName=a},expression:"mediaActiveName"}},[t("el-tab-pane",{attrs:{label:"不限",name:"mediaOne"}}),e._v(" "),t("el-tab-pane",{attrs:{label:"自定义",name:"mediaTwo"}},[t("el-form-item",{attrs:{label:"渠道列表"}},[t("el-radio-group",{staticClass:"new-style",model:{value:e.addPlanForm.put_media,callback:function(a){e.$set(e.addPlanForm,"put_media",a)},expression:"addPlanForm.put_media"}},[t("el-radio-button",{attrs:{label:"etcp停车"}}),e._v(" "),t("el-radio-button",{attrs:{label:"国票"}}),e._v(" "),t("el-radio-button",{attrs:{label:"快报报"}}),e._v(" "),t("el-radio-button",{attrs:{label:"停简单"}}),e._v(" "),t("el-radio-button",{attrs:{label:"ETC"}})],1)],1)],1)],1)],1),e._v(" "),t("el-row",{staticClass:"budget-box"},[t("div",{staticClass:"public-label"},[e._v("计划预算")]),e._v(" "),t("el-tabs",{staticClass:"budget-tabs",attrs:{type:"card"},model:{value:e.budgetActiveName,callback:function(a){e.budgetActiveName=a},expression:"budgetActiveName"}},[t("el-tab-pane",{attrs:{label:"不限",name:"budgeOne"}}),e._v(" "),t("el-tab-pane",{attrs:{label:"手动",name:"budgeTwo"}},[t("el-form-item",{attrs:{label:"计划总预算",prop:"group_budget"}},[t("el-input",{staticClass:"my-input",model:{value:e.addPlanForm.group_budget,callback:function(a){e.$set(e.addPlanForm,"group_budget",e._n(a))},expression:"addPlanForm.group_budget"}}),e._v(" 元\n                        ")],1),e._v(" "),t("el-form-item",{attrs:{label:"计划每日预算",prop:"day_budget"}},[t("el-input",{staticClass:"my-input",model:{value:e.addPlanForm.day_budget,callback:function(a){e.$set(e.addPlanForm,"day_budget",e._n(a))},expression:"addPlanForm.day_budget"}}),e._v(" 元\n                        ")],1)],1)],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"投放方式",prop:"put_mode"}},[t("el-radio-group",{staticClass:"scene-choice",model:{value:e.addPlanForm.put_mode,callback:function(a){e.$set(e.addPlanForm,"put_mode",a)},expression:"addPlanForm.put_mode"}},[t("el-radio-button",{attrs:{label:"快速投放"}},[e._v("\n                        快速投放\n                        "),t("div",{staticClass:"gray"},[t("svg-icon",{attrs:{"icon-class":"info"}}),e._v("在较短时间内欢度最大的曝光量\n                        ")],1)]),e._v(" "),t("el-radio-button",{attrs:{label:"均匀投放"}},[e._v("\n                        均匀投放\n                        "),t("div",{staticClass:"gray"},[t("svg-icon",{attrs:{"icon-class":"info"}}),e._v("将预算划分到当天的每个小时，均匀投放\n                        ")],1)])],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"投放频次",prop:"put_rate"}},[t("el-radio-group",{staticClass:"scene-choice",model:{value:e.addPlanForm.put_rate.text,callback:function(a){e.$set(e.addPlanForm.put_rate,"text",a)},expression:"addPlanForm.put_rate.text"}},[t("el-radio-button",{attrs:{label:"不控制频次"}},[e._v("\n                        不控制频次\n                        "),t("div",{staticClass:"gray"},[t("svg-icon",{attrs:{"icon-class":"info"}}),e._v("针对移动设备部控制投放频次\n                        ")],1)]),e._v(" "),t("el-radio-button",{staticClass:"rate-input-box",attrs:{label:"自定义频次"}},[e._v("\n                        自定义频次\n                        "),t("div",{staticClass:"gray"},[t("svg-icon",{attrs:{"icon-class":"info"}}),e._v("每天每个设备曝光\n                            "),t("el-input",{staticClass:"rate-input",model:{value:e.addPlanForm.put_rate.number,callback:function(a){e.$set(e.addPlanForm.put_rate,"number",e._n(a))},expression:"addPlanForm.put_rate.number"}}),e._v("次\n                        ")],1)])],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"计费方式",prop:"cost_mode"}},[t("el-radio-group",{staticClass:"scene-choice",model:{value:e.addPlanForm.cost_mode,callback:function(a){e.$set(e.addPlanForm,"cost_mode",a)},expression:"addPlanForm.cost_mode"}},[t("el-radio-button",{attrs:{label:"CPM"}},[e._v("\n                        CPM\n                        "),t("div",{staticClass:"gray"},[t("svg-icon",{attrs:{"icon-class":"info"}}),e._v("每千次展示的成本\n                        ")],1)]),e._v(" "),t("el-radio-button",{attrs:{label:"CPC"}},[e._v("\n                        CPC\n                        "),t("div",{staticClass:"gray"},[t("svg-icon",{attrs:{"icon-class":"info"}}),e._v("每次点击的有效成本\n                        ")],1)]),e._v(" "),t("el-radio-button",{attrs:{label:"CPD"}},[e._v("\n                        CPD\n                        "),t("div",{staticClass:"gray"},[t("svg-icon",{attrs:{"icon-class":"info"}}),e._v("每天展示的有效成本\n                        ")],1)])],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"出价",prop:"offer_price"}},[t("el-input",{staticClass:"my-input",model:{value:e.addPlanForm.offer_price,callback:function(a){e.$set(e.addPlanForm,"offer_price",e._n(a))},expression:"addPlanForm.offer_price"}}),e._v(" 元/条\n                "),t("span",{staticClass:"gray"},[t("span",{staticClass:"tips"},[t("i",{staticClass:"red"},[e._v(" * ")]),e._v("当前价格下可覆盖媒体50%的流量")])])],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.planAddData}},[e._v("保存并关闭")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.goMemberAddOri}},[e._v("保存并编辑创意")]),e._v(" "),t("el-button",{on:{click:e.goReturn}},[e._v("返回")])],1)],1)],1)],1)},r=[],s=t("75fc"),n=(t("c5f6"),t("7cdf"),t("ad8f")),o=t("ef6c"),i={created:function(){this.advName=JSON.parse(this.$route.query.item)},data:function(){var e=this,a=function(e,a,t){a?Number.isInteger(a)?a<1?t(new Error("组预算必须大于0")):t():t(new Error("请输入数字值")):t(new Error("请输入组预算"))},t=function(a,t,l){t?Number.isInteger(t)?t<1?l(new Error("日预算必须大于0")):t>e.addPlanForm.group_budget?l(new Error("日预算不能大于组预算")):l():l(new Error("请输入数字值")):l(new Error("请输入日预算"))},l=function(e,a,t){a?Number.isInteger(a)?a<1?t(new Error("出价必须大于0")):t():t(new Error("请输入数字值")):t(new Error("请填写出价"))};return{advName:"",activeIndex:1,sceneActiveName:"sceneOrientOne",parentNodes:[],sceneData:[{id:"lx",label:"旅游/出行",children:[{id:"jc",label:"机场"},{id:"gt",label:"高铁"},{id:"gstx",label:"高速通行"},{id:"tc",label:"停车"},{id:"hc",label:"火车"}]},{id:"gw",label:"购物/消费",children:[{id:"gw-one",label:"购物 2-1"},{id:"gw-two",label:"购物 2-2"}]},{id:"cy",label:"餐饮/娱乐",children:[{id:"cy-one",label:"餐饮 3-1"},{id:"cy-two",label:"餐饮 3-2"}]}],sceneProps:{children:"children",label:"label"},areaActiveName:"areaOrientOne",budgetActiveName:"budgeOne",timeActiveName:"timeOne",timeSlotActiveName:"timeSlotOne",addPlanForm:{plan_name:"",put_time:[],put_slot_time:[new Date(2020,9,10,0,0),new Date(2020,9,10,24,0)],put_area:[],operator_orient:[],car_owner:[],scene_orient:[],put_media:{},group_budget:"",day_budget:"",put_mode:"快速投放",put_rate:{text:"不控制频次",number:""},cost_mode:"CPM",offer_price:""},addPlanFormRules:{plan_name:[{required:!0,message:"请输入计划名称",trigger:"blur"}],group_budget:[{validator:a,trigger:"blur"}],day_budget:[{validator:t,trigger:"blur"}],offer_price:[{validator:l,trigger:"blur"}]},areaOptions:o["regionDataPlus"],areaSelect:[],areaProps:{multiple:!0},operatorActiveName:"operatorOne",carActiveName:"carOne",mediaActiveName:"mediaOne"}},methods:{areaChange:function(e){console.log(e)},checkActived:function(){this.addPlanForm.scene_orient=[].concat(Object(s["a"])(this.$refs.treeRefs.getCheckedNodes()),Object(s["a"])(this.$refs.treeRefs.getHalfCheckedNodes()))},planAddData:function(){var e=this;this.$refs["addPlanFormRef"].validate((function(a){a&&(e.addPlanForm.plan_id=parseInt(100*Math.random())+1024,Object(n["b"])(e.addPlanForm).then((function(){e.$message.success("添加计划成功"),e.$router.push("/extension")})))}))},goReturn:function(){this.$router.go(-1)},goMemberAddOri:function(){var e=this;"budgeOne"===this.budgetActiveName?this.$refs["addPlanFormRef"].validateField(["plan_name","put_time"],(function(a){a||Object(n["b"])(e.addPlanForm).then((function(){e.$message.success("添加计划成功"),e.$router.push({name:"MemberChooseOri"})}))})):"budgeTwo"===this.budgetActiveName&&this.$refs["addPlanFormRef"].validate((function(a){a&&(e.addPlanForm.plan_id=parseInt(100*Math.random())+1024,Object(n["b"])(e.addPlanForm).then((function(){e.$message.success("添加计划成功"),e.$router.push({name:"MemberChooseOri"})})))}))}}},c=i,d=(t("42c4"),t("dd72"),t("2877")),u=Object(d["a"])(c,l,r,!1,null,"ec804dc0",null);a["default"]=u.exports},dd72:function(e,a,t){"use strict";var l=t("37f9"),r=t.n(l);r.a}}]);