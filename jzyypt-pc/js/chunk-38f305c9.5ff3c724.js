(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38f305c9"],{9138:function(e,a,t){},a9cd:function(e,a,t){"use strict";t("9138")},c79a:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-row",{staticClass:"order-result-maintain-container public-container"},[t("el-form",{ref:"dynamicValidateForm",attrs:{model:e.dynamicValidateForm,"label-width":"140px"}},[e._l(e.dynamicValidateForm.domains,(function(a,r){return t("el-row",{key:a.key},[t("el-col",{attrs:{span:7}},[t("el-form-item",{attrs:{label:"编号类型"+(r+1),prop:"domains."+r+".numberType",rules:{required:!0,message:"编号类型不能为空",trigger:"change"}}},[t("el-select",{staticStyle:{width:"100%"},attrs:{clearable:"",placeholder:"请选择编号类型"},model:{value:a.numberType,callback:function(t){e.$set(a,"numberType",t)},expression:"domain.numberType"}},[t("el-option",{attrs:{label:"普通编号",value:"1"}}),t("el-option",{attrs:{label:"加号编号",value:"2"}}),t("el-option",{attrs:{label:"VIP编号",value:"3"}}),t("el-option",{attrs:{label:"绿通编号",value:"4"}})],1)],1)],1),t("el-col",{attrs:{span:7}},[t("el-form-item",{attrs:{label:"编号区间"+(r+1),prop:"domains."+r+".numberArea",rules:{required:!0,message:"编号区间不能为空",trigger:"blur"}}},[t("el-input",{attrs:{clearable:"",placeholder:"请输入编号区间"},model:{value:a.numberArea,callback:function(t){e.$set(a,"numberArea",t)},expression:"domain.numberArea"}})],1)],1),t("el-col",{attrs:{span:7}},[t("el-form-item",{attrs:{label:"编号重置范围"+(r+1),prop:"domains."+r+".resetRange",rules:{required:!0,message:"编号重置范围不能为空",trigger:"change"}}},[t("el-select",{staticStyle:{width:"100%"},attrs:{clearable:"",placeholder:"请选择编号重置范围"},model:{value:a.resetRange,callback:function(t){e.$set(a,"resetRange",t)},expression:"domain.resetRange"}},[t("el-option",{attrs:{label:"每天",value:"1"}}),t("el-option",{attrs:{label:"每周",value:"2"}}),t("el-option",{attrs:{label:"每月",value:"3"}}),t("el-option",{attrs:{label:"无限制",value:"4"}})],1)],1)],1)],1)})),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.addDomain}},[e._v("新增规则")]),t("el-button",{attrs:{type:"primary"},on:{click:function(a){return e.submitForm("dynamicValidateForm")}}},[e._v("提交")]),t("el-button",{on:{click:function(a){return e.resetForm("dynamicValidateForm")}}},[e._v("重置")])],1)],2)],1)},l=[],n=(t("a434"),{name:"OrderResultMaintain",data:function(){return{dynamicValidateForm:{domains:[{numberType:"",numberArea:"",resetRange:""}]}}},methods:{submitForm:function(e){this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")}))},resetForm:function(e){this.$refs[e].resetFields()},removeDomain:function(e){var a=this.dynamicValidateForm.domains.indexOf(e);-1!==a&&this.dynamicValidateForm.domains.splice(a,1)},addDomain:function(){this.dynamicValidateForm.domains.push({numberType:"",numberArea:"",resetRange:"",key:Date.now()})}}}),i=n,o=(t("a9cd"),t("2877")),s=Object(o["a"])(i,r,l,!1,null,null,null);a["default"]=s.exports}}]);