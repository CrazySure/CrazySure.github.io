(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bfdcf448"],{"250d":function(e,r,o){},"3eba8":function(e,r,o){},"5a76":function(e,r,o){"use strict";o.r(r);var a=function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("div",{staticClass:"users-info-container"},[o("el-card",[o("div",{staticClass:"main"},[o("p",{staticClass:"title"},[e._v("账户信息")]),e._v(" "),o("el-form",{ref:"userinfoFormRef",attrs:{model:e.userinfoForm,rules:e.userinfoFormRules,"label-width":"100px","label-position":"left"}},[o("el-form-item",{attrs:{label:"头像",prop:"imageUrl"}},[o("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadURL,"show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.userinfoForm.imageUrl?o("img",{staticClass:"avatar",attrs:{src:e.userinfoForm.imageUrl}}):o("i",{staticClass:"el-icon-plus avatar-uploader-icon"},[o("span",[e._v("上传照片")])]),e._v(" "),o("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("建议尺寸100*100"),o("br"),e._v("支持jpg、png、jpeg格式图片，且单张大小不能大于5M")])])],1),e._v(" "),o("el-form-item",{attrs:{label:"账户类型",prop:"account"}},[o("el-select",{attrs:{placeholder:"请选择"},model:{value:e.userinfoForm.account,callback:function(r){e.$set(e.userinfoForm,"account",r)},expression:"userinfoForm.account"}},e._l(e.accountOptions,(function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:"用户类型",prop:"user"}},[o("el-select",{attrs:{placeholder:"请选择"},model:{value:e.userinfoForm.user,callback:function(r){e.$set(e.userinfoForm,"user",r)},expression:"userinfoForm.user"}},e._l(e.userOptions,(function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:"企业名称",prop:"company"}},[o("el-input",{attrs:{placeholder:"请输入企业名称"},model:{value:e.userinfoForm.company,callback:function(r){e.$set(e.userinfoForm,"company",r)},expression:"userinfoForm.company"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"密码",prop:"password"}},[o("el-input",{attrs:{placeholder:"请输入密码"},model:{value:e.userinfoForm.password,callback:function(r){e.$set(e.userinfoForm,"password",r)},expression:"userinfoForm.password"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"联系人姓名",prop:"name"}},[o("el-input",{attrs:{placeholder:"请输入联系人姓名"},model:{value:e.userinfoForm.name,callback:function(r){e.$set(e.userinfoForm,"name",e._n(r))},expression:"userinfoForm.name"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[o("el-input",{attrs:{placeholder:"请输入手机号"},model:{value:e.userinfoForm.phone,callback:function(r){e.$set(e.userinfoForm,"phone",r)},expression:"userinfoForm.phone"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[o("el-input",{attrs:{placeholder:"请输入邮箱"},model:{value:e.userinfoForm.email,callback:function(r){e.$set(e.userinfoForm,"email",r)},expression:"userinfoForm.email"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"所属行业",prop:"industry"}},[o("el-cascader",{attrs:{options:e.industryOptions},model:{value:e.userinfoForm.industry,callback:function(r){e.$set(e.userinfoForm,"industry",r)},expression:"userinfoForm.industry"}})],1),e._v(" "),o("p",{staticClass:"title"},[e._v("完善信息")]),e._v(" "),o("el-form-item",{attrs:{label:"固定电话"}},[o("el-input",{staticClass:"header-input",attrs:{placeholder:"010"},model:{value:e.userinfoForm.mobile.header,callback:function(r){e.$set(e.userinfoForm.mobile,"header",r)},expression:"userinfoForm.mobile.header"}}),o("el-input",{staticClass:"number-input",attrs:{placeholder:"请输入固定电话"},model:{value:e.userinfoForm.mobile.number,callback:function(r){e.$set(e.userinfoForm.mobile,"number",r)},expression:"userinfoForm.mobile.number"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"联系地址",prop:"address"}},[o("el-input",{attrs:{placeholder:"请输入联系地址"},model:{value:e.userinfoForm.address,callback:function(r){e.$set(e.userinfoForm,"address",r)},expression:"userinfoForm.address"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"网址",prop:"website"}},[o("el-input",{attrs:{placeholder:"请输入网址"},model:{value:e.userinfoForm.website,callback:function(r){e.$set(e.userinfoForm,"website",r)},expression:"userinfoForm.website"}})],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:e.userinfo}},[e._v("确认")]),e._v(" "),o("el-button",{on:{click:e.goReturn}},[e._v("返回")])],1)],1)],1)])],1)},t=[],s=o("c20c"),l={created:function(){this.getUserinfoData()},data:function(){var e=this,r=function(r,o,a){""===o?a(new Error("请再次输入密码")):o!==e.userinfoForm.password?a(new Error("两次输入密码不一致!")):a()},o=function(e,r,o){var a=/(^1[3|4|5|6|7|8|9]\d{9}$)|(^09\d{8}$)/;r?a.test(r)?o():o(new Error("请输入正确的手机号")):o(new Error("手机号不能为空"))},a=function(e,r,o){var a=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;r?a.test(r)?o():o(new Error("请输入正确的邮箱!")):o(new Error("邮箱不能为空"))};return{uploadURL:"",userinfoForm:{imageUrl:"",account:"",user:"",company:"",password:"",name:"",phone:"",email:"",address:"",website:"",industry:[],mobile:{header:"",number:""}},userinfoFormRules:{account:[{required:!0,message:"请选择账户类型",trigger:"change"}],user:[{required:!0,message:"请选择用户类型",trigger:"change"}],company:[{required:!0,message:"请输入企业名称",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:15,message:"长度在 6 到 15 个字符，数字字母均可",trigger:"blur"}],rePassword:[{required:!0,validator:r,trigger:"blur"}],name:[{required:!0,message:"请输入联系人姓名",trigger:"blur"}],phone:[{required:!0,validator:o,trigger:"blur"}],email:[{required:!0,validator:a,trigger:"blur"}]},accountOptions:[{value:"个人",label:"个人"},{value:"公司",label:"公司"}],userOptions:[{value:"广告主",label:"广告主"},{value:"流量主",label:"流量主"},{value:"代理商",label:"代理商"}],industryOptions:[{value:"广告主",label:"广告主",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"},{value:"xiaolv",label:"效率"},{value:"kekong",label:"可控"}]},{value:"流量主",label:"流量主"},{value:"代理商",label:"代理商"}]}},methods:{getUserinfoData:function(){var e=this;Object(s["b"])().then((function(r){console.log(r),e.userinfoForm=r.data.items}))},goReturn:function(){this.$router.go(-1)},userinfo:function(){var e=this;this.$refs["userinfoFormRef"].validate((function(r){if(!r)return console.log("error submit!!"),!1;console.log(e.userinfoForm),e.$message.success("修改成功")}))},handleAvatarSuccess:function(e,r){this.imageUrl=URL.createObjectURL(r.raw)},beforeAvatarUpload:function(e){var r="image/jpg"===e.type||"image/png"===e.type||"image/jpeg"===e.type,o=e.size/1024/1024<5;return r||this.$message.error("上传头像图片只能是 jpg、png、jpeg 格式!"),o||this.$message.error("上传头像图片大小不能超过 5MB!"),r&&o}}},n=l,i=(o("8f42"),o("ab9b"),o("2877")),u=Object(i["a"])(n,a,t,!1,null,"090e26b8",null);r["default"]=u.exports},"8f42":function(e,r,o){"use strict";var a=o("250d"),t=o.n(a);t.a},ab9b:function(e,r,o){"use strict";var a=o("3eba8"),t=o.n(a);t.a},c20c:function(e,r,o){"use strict";o.d(r,"b",(function(){return t})),o.d(r,"a",(function(){return s}));var a=o("b775");function t(){return Object(a["a"])({url:"/users/userinfo",method:"get"})}function s(){return Object(a["a"])({url:"/users/authen",method:"get"})}}}]);