(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a16fda0"],{"0c66":function(t,e,i){"use strict";i("a481"),i("6762"),i("2fdb");var a={bind:function(t,e,i){var a=t.querySelector(".drag-video"),o=t.querySelector(".preview-viedo"),s=t;a.style.cssText+=";cursor:move;",o.style.cssText+=";top:0px;";var l=function(){return window.document.currentStyle?function(t,e){return t.currentStyle[e]}:function(t,e){return getComputedStyle(t,!1)[e]}}();a.onmousedown=function(t){var e=t.clientX-a.style.width,i=t.clientY-a.style.height,r=o.offsetWidth,n=o.offsetHeight,c=s.offsetWidth,d=s.offsetHeight,u=o.offsetLeft,m=c-o.offsetLeft-r,v=o.offsetTop,p=d-o.offsetTop-n,f=l(o,"left"),g=l(o,"top");f.includes("%")?(f=+document.body.clientWidth*(+f.replace(/\%/g,"")/100),g=+document.body.clientHeight*(+g.replace(/\%/g,"")/100)):(f=+f.replace(/\px/g,""),g=+g.replace(/\px/g,"")),document.onmousemove=function(t){var a=t.clientX-e,s=t.clientY-i;-a>u?a=-u:a>m&&(a=m),-s>v?s=-v:s>p&&(s=p),o.style.cssText+=";left:".concat(a+f,"px;top:").concat(s+g,"px;")},document.onmouseup=function(t){document.onmousemove=null,document.onmouseup=null}}}},o=function(t){t.directive("el-drag-dialog-video",a)};window.Vue&&(window["el-drag-dialog-video"]=a,Vue.use(o)),a.install=o;e["a"]=a},"2fdb":function(t,e,i){"use strict";var a=i("5ca1"),o=i("d2c8"),s="includes";a(a.P+a.F*i("5147")(s),"String",{includes:function(t){return!!~o(this,t,s).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},4694:function(t,e,i){"use strict";var a=i("f2d3"),o=i.n(a);o.a},5147:function(t,e,i){var a=i("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(i){try{return e[a]=!1,!"/./"[t](e)}catch(o){}}return!0}},"57d7":function(t,e,i){},6762:function(t,e,i){"use strict";var a=i("5ca1"),o=i("c366")(!0);a(a.P,"Array",{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("9c6c")("includes")},"7db3":function(t,e,i){"use strict";i("a481"),i("6762"),i("2fdb");var a={bind:function(t,e,i){var a=t.querySelector(".drag-text"),o=t.querySelector(".dec"),s=t;a.style.cssText+=";cursor:move;",o.style.cssText+=";top:0px;";var l=function(){return window.document.currentStyle?function(t,e){return t.currentStyle[e]}:function(t,e){return getComputedStyle(t,!1)[e]}}();a.onmousedown=function(t){var e=t.clientX-a.style.width,i=t.clientY-a.style.height,r=o.offsetWidth,n=o.offsetHeight,c=s.offsetWidth,d=s.offsetHeight,u=o.offsetLeft,m=c-o.offsetLeft-r,v=o.offsetTop,p=d-o.offsetTop-n,f=l(o,"left"),g=l(o,"top");f.includes("%")?(f=+document.body.clientWidth*(+f.replace(/\%/g,"")/100),g=+document.body.clientHeight*(+g.replace(/\%/g,"")/100)):(f=+f.replace(/\px/g,""),g=+g.replace(/\px/g,"")),document.onmousemove=function(t){var a=t.clientX-e,s=t.clientY-i;-a>u?a=-u:a>m&&(a=m),-s>v?s=-v:s>p&&(s=p),o.style.cssText+=";left:".concat(a+f,"px;top:").concat(s+g,"px;")},document.onmouseup=function(t){document.onmousemove=null,document.onmouseup=null}}}},o=function(t){t.directive("el-drag-dialog-text",a)};window.Vue&&(window["el-drag-dialog-text"]=a,Vue.use(o)),a.install=o;e["a"]=a},a888:function(t,e,i){"use strict";i("a481"),i("6762"),i("2fdb");var a={bind:function(t,e,i){var a=t.querySelector(".drag-img"),o=t.querySelector(".preview-img"),s=t;a.style.cssText+=";cursor:move;",o.style.cssText+=";top:0px;";var l=function(){return window.document.currentStyle?function(t,e){return t.currentStyle[e]}:function(t,e){return getComputedStyle(t,!1)[e]}}();a.onmousedown=function(t){var e=t.clientX-a.style.width,i=t.clientY-a.style.height,r=o.offsetWidth,n=o.offsetHeight,c=s.offsetWidth,d=s.offsetHeight,u=o.offsetLeft,m=c-o.offsetLeft-r,v=o.offsetTop,p=d-o.offsetTop-n,f=l(o,"left"),g=l(o,"top");f.includes("%")?(f=+document.body.clientWidth*(+f.replace(/\%/g,"")/100),g=+document.body.clientHeight*(+g.replace(/\%/g,"")/100)):(f=+f.replace(/\px/g,""),g=+g.replace(/\px/g,"")),document.onmousemove=function(t){var a=t.clientX-e,s=t.clientY-i;-a>u?a=-u:a>m&&(a=m),-s>v?s=-v:s>p&&(s=p),o.style.cssText+=";left:".concat(a+f,"px;top:").concat(s+g,"px;")},document.onmouseup=function(t){document.onmousemove=null,document.onmouseup=null}}}},o=function(t){t.directive("el-drag-dialog",a)};window.Vue&&(window["el-drag-dialog"]=a,Vue.use(o)),a.install=o;e["a"]=a},b6ad:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"add-ori"},[i("el-steps",{staticClass:"mb",attrs:{active:t.activeIndex,"finish-status":"success","align-center":"",simple:""}},[i("el-step",{attrs:{title:"新建广告组"}}),t._v(" "),i("el-step",{attrs:{title:"新建推广计划"}}),t._v(" "),i("el-step",{attrs:{title:"新建创意"}})],1),t._v(" "),i("el-card",{staticClass:"mb_10"},[i("el-row",{staticClass:"budget-box scene-box"},[i("div",{staticClass:"public-label"},[t._v("所属广告计划")]),t._v(" "),i("p",{staticClass:"plan-name"},[t._v(t._s(t.planName.value))])])],1),t._v(" "),i("el-card",{staticClass:"ori-main"},[i("el-row",{staticClass:"title"},[t._v("\n            制作创意\n            "),i("span",{staticClass:"tips"},[i("i",{staticClass:"red"},[t._v("*")]),t._v(" 所有创意大小不能超过1.9M\n            ")])]),t._v(" "),i("el-divider"),t._v(" "),i("el-form",{ref:"addOriFormRef",attrs:{model:t.addOriForm,rules:t.addOriFormRules,"label-width":"120px","label-position":"left"}},[i("el-form-item",{attrs:{label:"选择创意"}},[i("el-tabs",{staticClass:"budget-tabs",attrs:{type:"card"},model:{value:t.choice_ori,callback:function(e){t.choice_ori=e},expression:"choice_ori"}},[i("el-tab-pane",{attrs:{label:"新建",name:"choiceOne"}}),t._v(" "),i("el-tab-pane",{attrs:{label:"创意库",name:"choiceTwo"}})],1)],1),t._v(" "),i("el-form-item",{attrs:{label:"创意名称",prop:"plan_name"}},[i("el-input",{model:{value:t.addOriForm.plan_name,callback:function(e){t.$set(t.addOriForm,"plan_name",e)},expression:"addOriForm.plan_name"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"文本设置",prop:"setting"}},[i("el-input",{attrs:{type:"textarea",maxlength:"300",placeholder:"文字描述300个字符以内"},model:{value:t.addOriForm.setting,callback:function(e){t.$set(t.addOriForm,"setting",e)},expression:"addOriForm.setting"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"短链接",prop:"link"}},[i("el-input",{attrs:{type:"text",placeholder:"短链接地址规范 http://www.xxx.com/abc?z=1"},model:{value:t.addOriForm.link,callback:function(e){t.$set(t.addOriForm,"link",e)},expression:"addOriForm.link"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"视频素材",prop:"video_url"}},[i("el-upload",{staticClass:"img-upload",attrs:{"show-file-list":!1,action:t.uploadVideoUrl,"before-upload":t.videoBeforeUpload,"on-remove":t.videoRemove,"on-success":t.videoUploadSuccess}},[t.addOriForm.video_url?i("video",{staticClass:"avatar",attrs:{autoplay:"",controls:""}},[i("source",{attrs:{src:t.addOriForm.video_url,type:"video/mp4"}})]):[i("svg-icon",{staticClass:"upload-icon",attrs:{"icon-class":"upload"}}),t._v(" "),i("div",{staticClass:"el-upload__text"},[t._v("上传视频")])],t._v(" "),i("div",{staticClass:"el-upload__tip my-tip",attrs:{slot:"tip"},slot:"tip"},[i("el-button",{attrs:{"data-type":"视频"},on:{click:function(e){return t.sourceBtn("video")}}},[t._v("素材库")])],1)],2),t._v(" "),i("div",{staticClass:"upload-title"},[t._v("*尺寸：不得大于400k。支持MP4、OGG、FLV、WMV、RMVB格式\n                    ")])],1),t._v(" "),i("el-form-item",{attrs:{label:"图片素材",prop:"image_url"}},[i("el-upload",{staticClass:"img-upload",attrs:{"show-file-list":!1,action:t.uploadImgUrl,"on-remove":t.imgRemove,"on-success":t.imgUploadSuccess}},[t.addOriForm.image_url?i("img",{staticClass:"avatar",attrs:{src:t.addOriForm.image_url}}):[i("svg-icon",{staticClass:"upload-icon",attrs:{"icon-class":"upload"}}),t._v(" "),i("div",{staticClass:"el-upload__text"},[t._v("上传图片")])],t._v(" "),i("div",{staticClass:"el-upload__tip my-tip",attrs:{slot:"tip"},slot:"tip"},[i("el-button",{attrs:{"data-type":"图片"},on:{click:function(e){return t.sourceBtn("img")}}},[t._v("素材库")])],1)],2),t._v(" "),i("div",{staticClass:"upload-title"},[t._v("*尺寸：宽高比1920×1080、800×1000不得大于400k。支持JPG、PNG、GIF格式\n                    ")])],1),t._v(" "),i("el-form-item",{attrs:{label:"曝光监测地址",prop:"exposure_link"}},[i("el-input",{model:{value:t.addOriForm.exposure_link,callback:function(e){t.$set(t.addOriForm,"exposure_link",e)},expression:"addOriForm.exposure_link"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"点击监测地址",prop:"click_link"}},[i("el-input",{model:{value:t.addOriForm.click_link,callback:function(e){t.$set(t.addOriForm,"click_link",e)},expression:"addOriForm.click_link"}})],1),t._v(" "),i("el-form-item",[i("el-button",{on:{click:t.goReturn}},[t._v("返回")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.oriEditData}},[t._v("新建并关闭")])],1)],1),t._v(" "),i("div",{staticClass:"ori-box"},[i("el-row",{staticClass:"public-label"},[t._v("创意预览")]),t._v(" "),i("el-tabs",{staticClass:"budget-tabs",attrs:{type:"card"},model:{value:t.phoneActiveName,callback:function(e){t.phoneActiveName=e},expression:"phoneActiveName"}},[i("el-tab-pane",{attrs:{label:"Ios",name:"applePhone"}},[i("div",{staticClass:"public-box"},[i("div",{directives:[{name:"el-drag-dialog",rawName:"v-el-drag-dialog"},{name:"el-drag-dialog-video",rawName:"v-el-drag-dialog-video"},{name:"el-drag-dialog-text",rawName:"v-el-drag-dialog-text"}],staticClass:"apple move-area"},[i("div",{staticClass:"drag-move"},[i("div",{staticClass:"dec preview"},[i("span",{staticClass:"drag-text"}),t._v(" "),i("p",[t._v(t._s(t.addOriForm.plan_name))]),t._v("\n                                    "+t._s(t.addOriForm.setting)+"\n                                    "),i("el-link",{attrs:{type:"primary",underline:!1}},[t._v(t._s(t.addOriForm.link))])],1)]),t._v(" "),i("div",[i("div",{staticClass:"drag-move"},[i("div",{staticClass:"preview-img preview"},[i("span",{staticClass:"drag-img"}),t._v(" "),t.addOriForm.image_url?i("img",{attrs:{src:t.addOriForm.image_url,alt:""}}):t._e()])])]),t._v(" "),i("div",{staticClass:"drag-move"},[i("div",{staticClass:"preview-viedo preview"},[i("span",{staticClass:"drag-video"}),t._v(" "),t.addOriForm.video_url?i("video",{attrs:{autoplay:"",controls:""}},[i("source",{attrs:{src:t.addOriForm.video_url,type:"video/mp4"}})]):t._e()])])]),t._v(" "),i("p",{staticClass:"text"},[t._v("拖 动 素 材 改 变 位 置")])])]),t._v(" "),i("el-tab-pane",{attrs:{label:"Android",name:"androidPhone"}},[i("div",{staticClass:"public-box"},[i("div",{directives:[{name:"el-drag-dialog",rawName:"v-el-drag-dialog"},{name:"el-drag-dialog-video",rawName:"v-el-drag-dialog-video"},{name:"el-drag-dialog-text",rawName:"v-el-drag-dialog-text"}],staticClass:"android move-area"},[i("div",{staticClass:"drag-move"},[i("div",{staticClass:"dec preview"},[i("span",{staticClass:"drag-text"}),t._v(" "),i("p",[t._v(t._s(t.addOriForm.plan_name))]),t._v("\n                                    "+t._s(t.addOriForm.setting)+"\n                                    "),i("el-link",{attrs:{type:"primary",underline:!1}},[t._v(t._s(t.addOriForm.link))])],1)]),t._v(" "),i("div",[i("div",{staticClass:"drag-move"},[i("div",{staticClass:"preview-img preview"},[i("span",{staticClass:"drag-img"}),t._v(" "),i("img",{attrs:{src:t.addOriForm.image_url,alt:""}})])])]),t._v(" "),i("div",{staticClass:"drag-move"},[i("div",{staticClass:"preview-viedo preview"},[i("span",{staticClass:"drag-video"}),t._v(" "),t.addOriForm.video_url?i("video",{attrs:{autoplay:"",controls:""}},[i("source",{attrs:{src:t.addOriForm.video_url,type:"video/mp4"}})]):t._e()])])]),t._v(" "),i("p",{staticClass:"text"},[t._v("拖 动 素 材 改 变 位 置")])])])],1)],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"我的创意",visible:t.oriDialogVisible,width:"50%"},on:{"update:visible":function(e){t.oriDialogVisible=e},close:t.oriDialogClosed}},[i("div",{staticClass:"ori-content"},t._l(t.oriImg,(function(e){return i("div",{key:e.id,staticClass:"ori-box"},[i("el-card",{staticClass:"inner-box"},[i("img",{attrs:{src:e.image_url,alt:e.name}}),t._v(" "),i("video",{attrs:{autoplay:"",controls:""}},[i("source",{attrs:{src:e.video_url,type:"video/mp4"}})]),t._v(" "),i("p",{staticClass:"describe"},[t._v(t._s(e.setting))]),t._v(" "),i("el-link",{attrs:{type:"primary",underline:!1}},[t._v(t._s(e.link))]),t._v(" "),i("el-divider",{staticClass:"line"}),t._v(" "),i("p",{staticClass:"ori-title"},[t._v(t._s(e.plan_name))]),t._v(" "),i("p",{staticClass:"id"},[t._v("ID:"+t._s(e.id))]),t._v(" "),i("el-divider",{staticClass:"line"}),t._v(" "),i("div",{staticClass:"btn-box"},[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(i){return t.goToEdit(e)}}},[t._v("立即编辑")])],1)],1)],1)})),0),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.oriDialogVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.oriDialogVisible=!1}}},[t._v("确 定")])],1)]),t._v(" "),i("el-dialog",{attrs:{visible:t.sourceDialogVisible,width:"50%"},on:{"update:visible":function(e){t.sourceDialogVisible=e},close:t.sourceDialog}},[i("el-tabs",{staticClass:"source-dialog",model:{value:t.sourcDialogName,callback:function(e){t.sourcDialogName=e},expression:"sourcDialogName"}},[i("el-tab-pane",{attrs:{label:"我的"+t.titleText,name:"mySourceImg"}},[i("div",{staticClass:"source-content"},["图片"==t.titleText?t._l(t.sourceImg,(function(e){return i("div",{key:e.id,staticClass:"source-box"},[i("div",{staticClass:"inner-box"},[t.imgChoose==e.id?i("el-dropdown",{staticClass:"img-menu",attrs:{trigger:"click"},on:{command:t.handleCommand}},[i("span",{staticClass:"el-dropdown-link"},[i("svg-icon",{staticClass:"icon-menu",attrs:{"icon-class":"menu"}})],1),t._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",{attrs:{command:"重命名","data-id":e.id}},[t._v("重命名")]),t._v(" "),i("el-dropdown-item",{ref:"dataNum",refInFor:!0,attrs:{command:"删除","data-id":e.id}},[t._v("删除")])],1)],1):t._e(),t._v(" "),i("el-radio-group",{model:{value:t.imgChoose,callback:function(e){t.imgChoose=e},expression:"imgChoose"}},[i("el-radio",{attrs:{border:"",label:e.id}},[i("img",{attrs:{src:e.url,alt:e.name},on:{click:function(i){return t.choiceImg(e.id)}}})])],1)],1),t._v(" "),e.imgname_edit?i("el-input",{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"edit-img-name",attrs:{size:"mini"},on:{blur:function(i){return t.inputBlur(e.id)}},nativeOn:{keyup:function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"enter",13,i.key,"Enter")?null:t.inputBlur(e.id)}},model:{value:e.name,callback:function(i){t.$set(e,"name",i)},expression:"item.name"}}):i("p",{staticClass:"img-name"},[t._v(t._s(e.name))])],1)})):t._l(t.sourceVideo,(function(e){return i("div",{key:e.id,staticClass:"source-box"},[i("div",{staticClass:"inner-box"},[t.imgChoose==e.id?i("el-dropdown",{staticClass:"img-menu",attrs:{trigger:"click"},on:{command:t.handleCommand}},[i("span",{staticClass:"el-dropdown-link"},[i("svg-icon",{staticClass:"icon-menu",attrs:{"icon-class":"menu"}})],1),t._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",{attrs:{command:"重命名","data-id":e.id}},[t._v("重命名")]),t._v(" "),i("el-dropdown-item",{ref:"dataNum",refInFor:!0,attrs:{command:"删除","data-id":e.id}},[t._v("删除")])],1)],1):t._e(),t._v(" "),i("el-radio-group",{model:{value:t.imgChoose,callback:function(e){t.imgChoose=e},expression:"imgChoose"}},[i("el-radio",{attrs:{border:"",label:e.id}},[i("video",{attrs:{autoplay:""}},[i("source",{attrs:{src:e.url,type:"video/mp4"},on:{click:function(i){return t.choiceImg(e.id)}}})])])],1)],1),t._v(" "),e.imgname_edit?i("el-input",{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"edit-img-name",attrs:{size:"mini"},on:{blur:function(i){return t.inputBlur(e.id)}},nativeOn:{keyup:function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"enter",13,i.key,"Enter")?null:t.inputBlur(e.id)}},model:{value:e.name,callback:function(i){t.$set(e,"name",i)},expression:"item.name"}}):i("p",{staticClass:"img-name"},[t._v(t._s(e.name))])],1)}))],2)])],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.sourceDialogVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.submitUrl}},[t._v("确 定")])],1)],1)],1)},o=[],s=(i("a888"),i("0c66"),i("7db3"),void 0),l=(i("f309"),i("4694"),i("2877")),r=Object(l["a"])(s,a,o,!1,null,"38a9f4e9",null);e["default"]=r.exports},d2c8:function(t,e,i){var a=i("aae3"),o=i("be13");t.exports=function(t,e,i){if(a(e))throw TypeError("String#"+i+" doesn't accept regex!");return String(o(t))}},f2d3:function(t,e,i){},f309:function(t,e,i){"use strict";var a=i("57d7"),o=i.n(a);o.a}}]);