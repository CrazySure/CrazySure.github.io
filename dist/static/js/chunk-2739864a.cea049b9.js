(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2739864a"],{"0a49":function(t,e,a){var i=a("9b43"),n=a("626a"),r=a("4bf8"),o=a("9def"),s=a("cd1c");t.exports=function(t,e){var a=1==t,c=2==t,l=3==t,u=4==t,m=6==t,g=5==t||m,d=e||s;return function(e,s,p){for(var f,v,h=r(e),b=n(h),y=i(s,p,3),_=o(b.length),C=0,I=a?d(e,_):c?d(e,0):void 0;_>C;C++)if((g||C in b)&&(f=b[C],v=y(f,C,h),t))if(a)I[C]=v;else if(v)switch(t){case 3:return!0;case 5:return f;case 6:return C;case 2:I.push(f)}else if(u)return!1;return m?-1:l||u?u:I}}},"20d6":function(t,e,a){"use strict";var i=a("5ca1"),n=a("0a49")(6),r="findIndex",o=!0;r in[]&&Array(1)[r]((function(){o=!1})),i(i.P+i.F*o,"Array",{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(r)},"232c":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"image-container"},[a("el-card",{staticClass:"mb"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{lg:7,xl:5}},[a("span",{staticClass:"mr_20"},[t._v("搜索")]),t._v(" "),a("el-input",{attrs:{placeholder:"请输入图片名称",clearable:""},on:{clear:function(e){return t.getImageListData()}},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getImageListData()}},model:{value:t.queryParams.title,callback:function(e){t.$set(t.queryParams,"title","string"===typeof e?e.trim():e)},expression:"queryParams.title"}})],1),t._v(" "),a("el-col",{attrs:{lg:7,xl:5}},[a("span",{staticClass:"mr_20"},[t._v("分组")]),t._v(" "),a("el-select",{attrs:{clearable:"",placeholder:"请选择分组"},on:{clear:t.groupClear,change:t.groupChange},model:{value:t.queryParams.group,callback:function(e){t.$set(t.queryParams,"group",e)},expression:"queryParams.group"}},t._l(t.groupData,(function(t){return a("el-option",{key:t.id,attrs:{label:t.label,value:t.label}})})),1)],1),t._v(" "),a("el-col",{staticClass:"text_r",attrs:{lg:10,xl:14}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.searchFilter}},[t._v("查询")])],1)],1)],1),t._v(" "),a("el-row",{staticClass:"mb extension-tabs"},[a("el-card",[a("el-tabs",{attrs:{type:"card"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.groupData,(function(e){return a("el-tab-pane",{key:e.value,attrs:{label:e.label,name:e.label}},[a("div",{staticClass:"mb"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-upload"},on:{click:t.showImageDialog}},[t._v("上传图片")]),t._v(" "),a("span",{staticClass:"upload-title"},[t._v("大小不超过400k")])],1),t._v(" "),a("div",{staticClass:"source-content"},t._l(t.sourceImg,(function(e){return a("div",{key:e.id,staticClass:"source-box"},[a("div",{staticClass:"inner-box"},[t.imgChoose==e.id?a("el-dropdown",{staticClass:"img-menu",attrs:{trigger:"click"},on:{command:t.handleCommand}},[a("span",{staticClass:"el-dropdown-link"},[a("svg-icon",{staticClass:"icon-menu",attrs:{"icon-class":"menu"}})],1),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"重命名","data-id":e.id}},[t._v("重命名")]),t._v(" "),a("el-dropdown-item",{ref:"dataNum",refInFor:!0,attrs:{command:"删除","data-id":e.id}},[t._v("删除")])],1)],1):t._e(),t._v(" "),a("el-radio-group",{model:{value:t.imgChoose,callback:function(e){t.imgChoose=e},expression:"imgChoose"}},[a("el-radio",{attrs:{border:"",label:e.id}},[a("img",{attrs:{src:e.url,alt:e.name},on:{click:function(a){return t.choiceImg(e.id)}}})])],1)],1),t._v(" "),e.imgname_edit?a("el-input",{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"edit-img-name",attrs:{size:"mini"},on:{blur:function(a){return t.inputBlur(e.id)}},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.inputBlur(e.id)}},model:{value:e.name,callback:function(a){t.$set(e,"name",a)},expression:"item.name"}}):a("p",{staticClass:"img-name"},[t._v(t._s(e.name))])],1)})),0),t._v(" "),a("el-pagination",{attrs:{"current-page":t.queryParams.page,"page-sizes":[5,10,15,20],"page-size":t.queryParams.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.imgSizeChange,"current-change":t.imgCurrentChange}})],1)})),1)],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"上传图片",visible:t.imageDialogVisible,width:"50%"},on:{"update:visible":function(e){t.imageDialogVisible=e}}},[a("el-upload",{staticClass:"img-upload img-upload-two",attrs:{action:t.localUploadImgUrl,multiple:"","list-type":"picture","before-upload":t.imgBeforeUpload,"on-remove":t.localImgRemove,"on-success":t.localImgUploadSuccess}},[a("svg-icon",{staticClass:"upload-icon",attrs:{"icon-class":"upload"}}),t._v(" "),a("div",{staticClass:"el-upload__text"},[t._v("\n                上传图片\n                "),a("br"),t._v("*尺寸：宽高比1920×1080、800×1000不得大于400k。支持JPG、PNG、GIF格式\n            ")])],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.imageDialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.imageDialogVisible=!1}}},[t._v("确 定")])],1)],1)],1)},n=[],r=(a("20d6"),a("ac6a"),a("7514"),a("49de")),o={data:function(){return{groupData:[],activeName:"全部图片",imgChoose:0,total:0,queryParams:{page:1,limit:5,title:"",group:""},sourceImg:[],imageDialogVisible:!1,localUploadImgUrl:"https://jsonplaceholder.typicode.com/posts/"}},methods:{searchFilter:function(){(this.queryParams.title||this.queryParams.group)&&this.getImageListData()},groupChange:function(t){this.activeName=t},groupClear:function(){this.activeName="全部图片",this.getImageListData()},getImageListData:function(){var t=this;Object(r["b"])(this.queryParams).then((function(e){console.log(e),t.sourceImg=e.data.items,t.total=e.data.total,t.groupData=e.data.groupData}))},imgSizeChange:function(t){this.queryParams.limit=t,this.getImageListData()},imgCurrentChange:function(t){this.queryParams.page=t,this.getImageListData()},choiceImg:function(t){this.sourceImg.find((function(e){return e.id===t}))},handleCommand:function(t){var e=this;"重命名"==t?this.$refs.dataNum.forEach((function(t){var a=t.$attrs["data-id"],i=e.sourceImg.find((function(t){return t.id===a}));i.imgname_edit=!0})):"删除"==t&&this.$refs.dataNum.forEach((function(t){var a=t.$attrs["data-id"];e.$confirm("确定要删除素材吗","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var t=e.sourceImg.findIndex((function(t){return t.id==a}));e.sourceImg.splice(t,1),e.$message.success("删除成功")})).catch((function(){e.$message.error("已经取消删除")}))}))},inputBlur:function(t){var e=this.sourceImg.find((function(e){return e.id===t}));e.imgname_edit=!1,this.$message.success("修改名称成功")},showImageDialog:function(){this.imageDialogVisible=!0},imgBeforeUpload:function(t){var e=this,a=t.size/1024/1024<.4,i="image/jpeg"===t.type||"image/png"===t.type||"image/gif"===t.type;i||this.$message.error("上传图片只能是 jpg、png、gif 格式!"),a||this.$message.error("上传图片大小不能超过 400k!");var n=new Promise((function(e,a){var i=window.URL||window.webkitURL,n=new Image;n.onload=function(){var t=n.width/n.height===1920/1080||n.width/n.height===1.25;t?e():a()},n.src=i.createObjectURL(t)})).then((function(){return t}),(function(){return e.$message.error("上传图片尺寸不符合,只能是1920*1080或者1000*800!"),Promise.reject()}));return i&&a&&n},localImgRemove:function(t){},localImgUploadSuccess:function(t,e,a){}},created:function(){this.getImageListData()},watch:{activeName:function(t){var e=this;"全部图片"!==t?(this.queryParams={page:1,limit:5,title:"",group:t},Object(r["b"])(this.queryParams).then((function(a){e.sourceImg=a.data.items.filter((function(e){return e.group==t}))})),Object(r["b"])().then((function(a){e.total=a.data.items.filter((function(e){return e.group==t})).length}))):(this.queryParams={page:1,limit:5,title:"",group:""},this.getImageListData())}}},s=o,c=(a("8b2d"),a("2877")),l=Object(c["a"])(s,i,n,!1,null,"135bc744",null);e["default"]=l.exports},3930:function(t,e,a){},"49de":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return o}));var i=a("b775");function n(t){return Object(i["a"])({method:"get",url:"/material/imagelist",params:t})}function r(t){return Object(i["a"])({method:"get",url:"/material/videolist",params:t})}function o(t){return Object(i["a"])({method:"get",url:"/material/creativelist",params:t})}},7514:function(t,e,a){"use strict";var i=a("5ca1"),n=a("0a49")(5),r="find",o=!0;r in[]&&Array(1)[r]((function(){o=!1})),i(i.P+i.F*o,"Array",{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(r)},"8b2d":function(t,e,a){"use strict";var i=a("3930"),n=a.n(i);n.a},cd1c:function(t,e,a){var i=a("e853");t.exports=function(t,e){return new(i(t))(e)}},e853:function(t,e,a){var i=a("d3f4"),n=a("1169"),r=a("2b4c")("species");t.exports=function(t){var e;return n(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!n(e.prototype)||(e=void 0),i(e)&&(e=e[r],null===e&&(e=void 0))),void 0===e?Array:e}}}]);