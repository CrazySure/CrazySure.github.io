(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f80d48a4"],{"3fbf":function(e,r,t){},"5f4e":function(e,r,t){},bf10:function(e,r,t){"use strict";var a=t("3fbf"),s=t.n(a);s.a},d5c2:function(e,r,t){"use strict";t.r(r);var a,s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"register-container"},[t("el-card",[t("div",{staticClass:"main"},[t("p",{staticClass:"title"},[e._v("基本信息")]),e._v(" "),t("el-form",{ref:"registerFormRef",attrs:{model:e.registerForm,rules:e.registerFormRules,"label-width":"100px","label-position":"left"}},[t("el-form-item",{attrs:{label:"头像上传",prop:"imageUrl"}},[t("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadURL,"show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.registerForm.imageUrl?t("img",{staticClass:"avatar",attrs:{src:e.registerForm.imageUrl}}):t("i",{staticClass:"el-icon-plus avatar-uploader-icon"},[t("span",[e._v("上传照片")])]),e._v(" "),t("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("建议尺寸100*100"),t("br"),e._v("支持jpg、png、jpeg格式图片，且单张大小不能大于5M")])])],1),e._v(" "),t("el-form-item",{attrs:{label:"账户类型",prop:"account"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.registerForm.account,callback:function(r){e.$set(e.registerForm,"account",r)},expression:"registerForm.account"}},e._l(e.accountOptions,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),t("el-form-item",{attrs:{label:"用户类型",prop:"user"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.registerForm.user,callback:function(r){e.$set(e.registerForm,"user",r)},expression:"registerForm.user"}},e._l(e.userOptions,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),t("el-form-item",{attrs:{label:"企业名称",prop:"company"}},[t("el-input",{attrs:{placeholder:"请输入企业名称"},model:{value:e.registerForm.company,callback:function(r){e.$set(e.registerForm,"company",r)},expression:"registerForm.company"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"设置密码",prop:"password"}},[t("el-input",{attrs:{placeholder:"请输入密码"},model:{value:e.registerForm.password,callback:function(r){e.$set(e.registerForm,"password",r)},expression:"registerForm.password"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"确认密码",prop:"rePassword"}},[t("el-input",{attrs:{placeholder:"请再次确认密码"},model:{value:e.registerForm.rePassword,callback:function(r){e.$set(e.registerForm,"rePassword",r)},expression:"registerForm.rePassword"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"联系人姓名",prop:"name"}},[t("el-input",{attrs:{placeholder:"请输入联系人姓名"},model:{value:e.registerForm.name,callback:function(r){e.$set(e.registerForm,"name",e._n(r))},expression:"registerForm.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[t("el-input",{attrs:{placeholder:"请输入手机号"},model:{value:e.registerForm.phone,callback:function(r){e.$set(e.registerForm,"phone",r)},expression:"registerForm.phone"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[t("el-input",{attrs:{placeholder:"请输入邮箱"},model:{value:e.registerForm.email,callback:function(r){e.$set(e.registerForm,"email",r)},expression:"registerForm.email"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"所属行业",prop:"industry"}},[t("el-cascader",{attrs:{options:e.industryOptions},model:{value:e.registerForm.industry,callback:function(r){e.$set(e.registerForm,"industry",r)},expression:"registerForm.industry"}})],1),e._v(" "),t("p",{staticClass:"title"},[e._v("完善信息")]),e._v(" "),t("el-form-item",{attrs:{label:"固定电话"}},[t("el-input",{staticClass:"header-input",attrs:{placeholder:"010"},model:{value:e.registerForm.mobile.header,callback:function(r){e.$set(e.registerForm.mobile,"header",r)},expression:"registerForm.mobile.header"}}),t("el-input",{staticClass:"number-input",attrs:{placeholder:"请输入固定电话"},model:{value:e.registerForm.mobile.number,callback:function(r){e.$set(e.registerForm.mobile,"number",r)},expression:"registerForm.mobile.number"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"联系地址",prop:"address"}},[t("el-input",{attrs:{placeholder:"请输入联系地址"},model:{value:e.registerForm.address,callback:function(r){e.$set(e.registerForm,"address",r)},expression:"registerForm.address"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"网址",prop:"website"}},[t("el-input",{attrs:{placeholder:"请输入网址"},model:{value:e.registerForm.website,callback:function(r){e.$set(e.registerForm,"website",r)},expression:"registerForm.website"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.register}},[e._v("注册")]),e._v(" "),t("el-button",{on:{click:e.goLogin}},[e._v("取消")])],1)],1)],1)]),e._v(" "),t("el-dialog",{attrs:{visible:e.registerDialogVisible,width:"80%"},on:{"update:visible":function(r){e.registerDialogVisible=r}}},[t("div",{staticClass:"dialog-box"},[t("svg-icon",{staticClass:"success-icon",attrs:{"icon-class":"success"}}),e._v(" "),t("p",[e._v("您已注册成功！")]),e._v(" "),t("div",[t("el-button",{attrs:{type:"primary"},on:{click:e.goAuthen}},[e._v("马上企业认证")])],1),e._v(" "),t("div",[t("el-button",{staticClass:"plain-btn",attrs:{type:"primary",plain:""},on:{click:e.goLogin}},[e._v("去登录")])],1)],1)])],1)},l=[],i=t("bd86"),o={data:function(){var e=this,r=function(r,t,a){""===t?a(new Error("请再次输入密码")):t!==e.registerForm.password?a(new Error("两次输入密码不一致!")):a()},t=function(e,r,t){var a=/(^1[3|4|5|6|7|8|9]\d{9}$)|(^09\d{8}$)/;r?a.test(r)?t():t(new Error("请输入正确的手机号")):t(new Error("手机号不能为空"))},a=function(e,r,t){var a=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;r?a.test(r)?t():t(new Error("请输入正确的邮箱!")):t(new Error("邮箱不能为空"))};return{uploadURL:"",registerForm:{imageUrl:"",account:"",user:"",company:"",password:"",rePassword:"",name:"",phone:"",email:"",address:"",website:"",industry:[],mobile:{header:"",number:""}},registerFormRules:{account:[{required:!0,message:"请选择账户类型",trigger:"change"}],user:[{required:!0,message:"请选择用户类型",trigger:"change"}],company:[{required:!0,message:"请输入企业名称",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:15,message:"长度在 6 到 15 个字符，数字字母均可",trigger:"blur"}],rePassword:[{required:!0,validator:r,trigger:"blur"}],name:[{required:!0,message:"请输入联系人姓名",trigger:"blur"}],phone:[{required:!0,validator:t,trigger:"blur"}],email:[{required:!0,validator:a,trigger:"blur"}]},accountOptions:[{value:"个人",label:"个人"},{value:"公司",label:"公司"}],userOptions:[{value:"广告主",label:"广告主"},{value:"流量主",label:"流量主"},{value:"代理商",label:"代理商"}],industryOptions:[{value:"广告主",label:"广告主",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"},{value:"xiaolv",label:"效率"},{value:"kekong",label:"可控"}]},{value:"流量主",label:"流量主"},{value:"代理商",label:"代理商"}],registerDialogVisible:!1}},methods:(a={goLogin:function(){this.$router.push("/login")},register:function(){var e=this;this.$refs["registerFormRef"].validate((function(r){if(!r)return console.log("error submit!!"),!1;e.registerDialogVisible=!0}))},goAuthen:function(){this.$router.push("/authen")}},Object(i["a"])(a,"goLogin",(function(){this.$router.push("/login")})),Object(i["a"])(a,"handleAvatarSuccess",(function(e,r){this.imageUrl=URL.createObjectURL(r.raw)})),Object(i["a"])(a,"beforeAvatarUpload",(function(e){var r="image/jpg"===e.type||"image/png"===e.type||"image/jpeg"===e.type,t=e.size/1024/1024<5;return r||this.$message.error("上传头像图片只能是 jpg、png、jpeg 格式!"),t||this.$message.error("上传头像图片大小不能超过 5MB!"),r&&t})),a)},n=o,u=(t("bf10"),t("d862"),t("2877")),c=Object(u["a"])(n,s,l,!1,null,"cef845f0",null);r["default"]=c.exports},d862:function(e,r,t){"use strict";var a=t("5f4e"),s=t.n(a);s.a}}]);