(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2adf3e14"],{"02b2":function(e,t,a){},"0a49":function(e,t,a){var i=a("9b43"),r=a("626a"),n=a("4bf8"),o=a("9def"),s=a("cd1c");e.exports=function(e,t){var a=1==e,c=2==e,l=3==e,u=4==e,m=6==e,p=5==e||m,g=t||s;return function(t,s,d){for(var f,v,h=n(t),b=r(h),y=i(s,d,3),C=o(b.length),_=0,k=a?g(t,C):c?g(t,0):void 0;C>_;_++)if((p||_ in b)&&(f=b[_],v=y(f,_,h),e))if(a)k[_]=v;else if(v)switch(e){case 3:return!0;case 5:return f;case 6:return _;case 2:k.push(f)}else if(u)return!1;return m?-1:l||u?u:k}}},"20d6":function(e,t,a){"use strict";var i=a("5ca1"),r=a("0a49")(6),n="findIndex",o=!0;n in[]&&Array(1)[n]((function(){o=!1})),i(i.P+i.F*o,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(n)},7514:function(e,t,a){"use strict";var i=a("5ca1"),r=a("0a49")(5),n="find",o=!0;n in[]&&Array(1)[n]((function(){o=!1})),i(i.P+i.F*o,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(n)},9094:function(e,t,a){"use strict";var i=a("db72"),r=a("aba9"),n=a("bc3a"),o=a.n(n),s=o.a.create({baseURL:r["a"].baseURL});function c(e){return s({url:r["a"].getImageList,params:Object(i["a"])({},e)})}function l(e){return s({url:r["a"].getVideoList,params:Object(i["a"])({},e)})}function u(e){return s({url:r["a"].getCreativeList,params:Object(i["a"])({},e)})}t["a"]={getImageList:c,getVideoList:l,getCreativeList:u}},"9cf1":function(e,t,a){"use strict";var i=a("02b2"),r=a.n(i);r.a},aba9:function(e,t,a){"use strict";t["a"]={baseURL:"http://192.168.0.88:9999",login:"/api/admin/login",getHomeAccount:"/api/home/account",getHomeAdv:"/api/home/adv",getHomePlan:"/api/home/plan",getHomeLine:"/api/home/line",getHomeCircle:"/api/home/circle",getHomeRegion:"/api/home/region",getHomeTime:"/api/home/time",getPlanList:"/api/extension/table",getUserLine:"/api/repet/user/line",getUserCircle:"/api/repet/user/circle",getUserRegion:"/api/repet/user/region",getUserTime:"/api/repet/user/time",getPlanLine:"/api/repet/plan/line",getPlanCircle:"/api/repet/plan/circle",getPlanRegion:"/api/repet/plan/region",getPlanTime:"/api/repet/plan/time",getOriLine:"/api/repet/ori/line",getOriCircle:"/api/repet/ori/circle",getOriRegion:"/api/repet/ori/region",getOriTime:"/api/repet/ori/time",getGroupLine:"/api/repet/Group/line",getGroupCircle:"/api/repet/Group/circle",getGroupRegion:"/api/repet/Group/region",getGroupTime:"/api/repet/Group/time",getImageList:"/api/material/img",getVideoList:"/api/material/video",getCreativeList:"/api/material/creative"}},b6dc:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"image-container"},[a("el-card",{staticClass:"mb"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{lg:7,xl:5}},[a("span",{staticClass:"mr_20"},[e._v("搜索")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入视频名称",clearable:""},on:{clear:function(t){return e.getVideoListData()}},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getVideoListData()}},model:{value:e.queryParams.name,callback:function(t){e.$set(e.queryParams,"name","string"===typeof t?t.trim():t)},expression:"queryParams.name"}})],1),e._v(" "),a("el-col",{attrs:{lg:7,xl:5}},[a("span",{staticClass:"mr_20"},[e._v("分组")]),e._v(" "),a("el-select",{attrs:{clearable:"",placeholder:"请选择分组"},on:{change:e.groupChange,clear:e.groupClear},model:{value:e.queryParams.group,callback:function(t){e.$set(e.queryParams,"group",t)},expression:"queryParams.group"}},e._l(e.groupData,(function(e){return a("el-option",{key:e.id,attrs:{label:e.label,value:e.label}})})),1)],1),e._v(" "),a("el-col",{staticClass:"text_r",attrs:{lg:10,xl:14}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.searchFilter}},[e._v("查询")])],1)],1)],1),e._v(" "),a("el-row",{staticClass:"mb extension-tabs"},[a("el-card",[a("el-tabs",{attrs:{type:"card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},e._l(e.groupData,(function(t){return a("el-tab-pane",{key:t.value,attrs:{label:t.label,name:t.label}},[a("div",{staticClass:"mb"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-upload"},on:{click:e.showImageDialog}},[e._v("上传视频")]),e._v(" "),a("span",{staticClass:"upload-title"},[e._v("大小不超过1.6M")])],1),e._v(" "),a("div",{staticClass:"source-content"},e._l(e.sourceImg,(function(t){return a("div",{key:t.id,staticClass:"source-box"},[a("div",{staticClass:"inner-box"},[e.imgChoose==t.id?a("el-dropdown",{staticClass:"img-menu",attrs:{trigger:"click"},on:{command:e.handleCommand}},[a("span",{staticClass:"el-dropdown-link"},[a("svg-icon",{staticClass:"icon-menu",attrs:{"icon-class":"menu"}})],1),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"重命名","data-id":t.id}},[e._v("重命名")]),e._v(" "),a("el-dropdown-item",{ref:"dataNum",refInFor:!0,attrs:{command:"删除","data-id":t.id}},[e._v("删除")])],1)],1):e._e(),e._v(" "),a("el-radio-group",{model:{value:e.imgChoose,callback:function(t){e.imgChoose=t},expression:"imgChoose"}},[a("el-radio",{attrs:{border:"",label:t.id}},[a("video",{attrs:{autoplay:""}},[a("source",{attrs:{src:t.url},on:{click:function(a){return e.choiceImg(t.id)}}})])])],1)],1),e._v(" "),t.imgname_edit?a("el-input",{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"edit-img-name",attrs:{size:"mini"},on:{blur:function(a){return e.inputBlur(t.id)}},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.inputBlur(t.id)}},model:{value:t.name,callback:function(a){e.$set(t,"name",a)},expression:"item.name"}}):a("p",{staticClass:"img-name"},[e._v(e._s(t.name))])],1)})),0),e._v(" "),a("el-pagination",{attrs:{"current-page":e.queryParams.page,"page-sizes":[5,10,15,20],"page-size":e.queryParams.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.imgSizeChange,"current-change":e.imgCurrentChange}})],1)})),1)],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"上传视频",visible:e.imageDialogVisible,width:"50%"},on:{"update:visible":function(t){e.imageDialogVisible=t}}},[a("el-upload",{staticClass:"img-upload img-upload-two",attrs:{action:e.localUploadImgUrl,multiple:"","list-type":"picture","before-upload":e.videoBeforeUpload,"on-remove":e.localVideoRemove,"on-success":e.localVideoUploadSuccess}},[a("svg-icon",{staticClass:"upload-icon",attrs:{"icon-class":"upload"}}),e._v(" "),a("div",{staticClass:"el-upload__text"},[e._v("\n                上传视频\n                "),a("br"),e._v("*尺寸：不得大于400k。支持MP4、OGG、FLV、WMV、RMVB格式\n            ")])],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.imageDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.imageDialogVisible=!1}}},[e._v("确 定")])],1)],1)],1)},r=[],n=(a("20d6"),a("ac6a"),a("7514"),a("7f7f"),a("9094")),o={data:function(){return{groupData:[],activeName:"全部视频",imgChoose:0,total:0,queryParams:{page:1,limit:5,name:"",group:""},sourceImg:[],imageDialogVisible:!1,localUploadImgUrl:"https://jsonplaceholder.typicode.com/posts/"}},methods:{searchFilter:function(){(this.queryParams.name||this.queryParams.group)&&this.getVideoListData()},groupChange:function(e){this.activeName=e},groupClear:function(){this.activeName="全部视频"},getVideoListData:function(){var e=this;n["a"].getVideoList(this.queryParams).then((function(t){console.log(t),e.sourceImg=t.data.data.datas,e.total=t.data.data.total,e.groupData=t.data.data.groupData}))},imgSizeChange:function(e){this.queryParams.limit=e,this.getVideoListData()},imgCurrentChange:function(e){this.queryParams.page=e,this.getVideoListData()},choiceImg:function(e){this.sourceImg.find((function(t){return t.id===e}))},handleCommand:function(e){var t=this;"重命名"==e?this.$refs.dataNum.forEach((function(e){var a=e.$attrs["data-id"],i=t.sourceImg.find((function(e){return e.id===a}));i.imgname_edit=!0})):"删除"==e&&this.$refs.dataNum.forEach((function(e){var a=e.$attrs["data-id"];t.$confirm("确定要删除素材吗","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var e=t.sourceImg.findIndex((function(e){return e.id==a}));t.sourceImg.splice(e,1),t.$message.success("删除成功")})).catch((function(){t.$message.error("已经取消删除")}))}))},inputBlur:function(e){var t=this.sourceImg.find((function(t){return t.id===e}));t.imgname_edit=!1,this.$message.success("修改名称成功")},showImageDialog:function(){this.imageDialogVisible=!0},videoBeforeUpload:function(e){console.log(e);var t=e.size/1024/1024<10,a="video/mp4"===e.type||"video/ogg"===e.type||"video/flv"===e.type||"video/avi"===e.type||"image/wmv"===e.type||"image/rmvb"===e.type;return a||this.$message.error("上传视频只能是 mp4、ogg、flv、avi、wmv、rmvb 格式!"),t||this.$message.error("上传视频大小不能超过 400k!"),t&&a},localVideoRemove:function(e){},localVideoUploadSuccess:function(e,t,a){}},created:function(){this.getVideoListData()},watch:{activeName:function(e){var t=this;"全部视频"!==e?(this.queryParams={page:1,limit:5,name:"",group:e},n["a"].getVideoList(this.queryParams).then((function(a){t.sourceImg=a.data.data.datas.filter((function(t){return t.group==e}))})),n["a"].getVideoList().then((function(a){t.total=a.data.data.datas.filter((function(t){return t.group==e})).length}))):(this.queryParams={page:1,limit:5,name:"",group:""},this.getVideoListData())}}},s=o,c=(a("9cf1"),a("2877")),l=Object(c["a"])(s,i,r,!1,null,"5708ef53",null);t["default"]=l.exports},cd1c:function(e,t,a){var i=a("e853");e.exports=function(e,t){return new(i(e))(t)}},e853:function(e,t,a){var i=a("d3f4"),r=a("1169"),n=a("2b4c")("species");e.exports=function(e){var t;return r(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!r(t.prototype)||(t=void 0),i(t)&&(t=t[n],null===t&&(t=void 0))),void 0===t?Array:t}}}]);