(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68fcbb52"],{"0971":function(e,t,r){},"322a":function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));r("ac1f"),r("466d");var n=null;function o(){try{var e=navigator.userAgent;if(null!=e.match(/Windows\sPhone/i))return!0;if(null!=e.match(/iPhone|iPod/i))return!0;if(null!=e.match(/Android/i))return!0;if(null!=e.match(/Edge\D?\d+/i))return!0;var t=e.match(/Trident\D?\d+/i),r=e.match(/MSIE\D?\d+/i),n=e.match(/OPR\D?\d+/i),o=e.match(/Firefox\D?\d+/i),a=e.match(/x64/i);if(null==t&&null==r&&null!==a)return!0;if(null!==o){if(o=o[0].match(/\d+/),o[0]>=42||null!==a)return!0}else if(null!==n){if(n=n[0].match(/\d+/),n[0]>=32)return!0}else if(null==t&&null==r){var l=e.match(/Chrome\D?\d+/i);if(null!==l&&(l=l[0].match(/\d+/),l[0]>=42))return!0}return!1}catch(d){return!0}}if(o()){var a=document.head||document.getElementsByTagName("head")[0]||document.documentElement,l=document.createElement("script");l.src="http://localhost:8000/CLodopfuncs.js?priority=1",a.insertBefore(l,a.firstChild),l=document.createElement("script"),l.src="http://localhost:18000/CLodopfuncs.js?priority=0",a.insertBefore(l,a.firstChild)}function d(e,t){var r,a="<br><font color='#FF00FF'>打印控件未安装!点击这里<a href='install_lodop32.exe' target='_self'>执行安装</a>,安装后请刷新页面或重新进入。</font>",l="<br><font color='#FF00FF'>打印控件需要升级!点击这里<a href='install_lodop32.exe' target='_self'>执行升级</a>,升级后请重新进入。</font>",d="<br><font color='#FF00FF'>打印控件未安装!点击这里<a href='install_lodop64.exe' target='_self'>执行安装</a>,安装后请刷新页面或重新进入。</font>",s="<br><font color='#FF00FF'>打印控件需要升级!点击这里<a href='install_lodop64.exe' target='_self'>执行升级</a>,升级后请重新进入。</font>",i="<br><br><font color='#FF00FF'>（注意：如曾安装过Lodop旧版附件npActiveXPLugin,请在【工具】->【附加组件】->【扩展】中先卸它）</font>",c="<br><br><font color='#FF00FF'>(如果此前正常，仅因浏览器升级或重安装而出问题，需重新执行以上安装）</font>",p="<br><font color='#FF00FF'>CLodop云打印服务需升级!点击这里<a href='CLodop_Setup_for_Win32NT.exe' target='_self'>执行升级</a>,升级后请刷新页面。</font>";try{var b=navigator.userAgent.indexOf("MSIE")>=0||navigator.userAgent.indexOf("Trident")>=0;if(o()){try{r=getCLodop()}catch(m){}if(!r&&"complete"!==document.readyState)return void alert("C-Lodop没准备好，请稍后再试！");r&&(CLODOP.CVERSION<"3.0.0.2"&&(b?document.write(p):document.documentElement.innerHTML=p+document.documentElement.innerHTML),t&&t.parentNode&&t.parentNode.removeChild(t),e&&e.parentNode&&e.parentNode.removeChild(e))}else{var u=b&&navigator.userAgent.indexOf("x64")>=0;if(void 0!=e||void 0!=t?r=b?e:t:null==n?(r=document.createElement("object"),r.setAttribute("width",0),r.setAttribute("height",0),r.setAttribute("style","position:absolute;left:0px;top:-100px;width:0px;height:0px;"),b?r.setAttribute("classid","clsid:2105C259-1E0C-4534-8141-A753534CB4CA"):r.setAttribute("type","application/x-print-lodop"),document.documentElement.appendChild(r),n=r):r=n,null==r||"undefined"==typeof r.VERSION)return navigator.userAgent.indexOf("Chrome")>=0&&(document.documentElement.innerHTML=c+document.documentElement.innerHTML),navigator.userAgent.indexOf("Firefox")>=0&&(document.documentElement.innerHTML=i+document.documentElement.innerHTML),u?document.write(d):b?document.write(a):document.documentElement.innerHTML=a+document.documentElement.innerHTML,r}return r.VERSION<"6.0"?(o()||(u?document.write(s):b?document.write(l):document.documentElement.innerHTML=l+document.documentElement.innerHTML),r):(r.SET_LICENSES("北京美迪希兰数据有限公司","653626080738175919278901905623","",""),r)}catch(m){alert("getLodop出错:"+m)}}},4678:function(e,t,r){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df48","./fa.js":"8df48","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b46","./gd.js":"f6b46","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(e){var t=a(e);return r(t)}function a(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=a,e.exports=o,o.id="4678"},"5d15":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("b775");function o(e){return Object(n["a"])({url:"/nurse/ordersBrowsing/queryOrders",method:"post",data:e})}},"62e4":function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},7101:function(e,t,r){"use strict";r("0971")},7345:function(e,t,r){},"9dac":function(e,t,r){"use strict";r("7345")},f480:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"window-resize",rawName:"v-window-resize"}],staticClass:"app-container orders-browsing-container"},[r("el-tabs",{on:{"tab-click":e.changeOrder},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[r("el-form",{attrs:{inline:!0,model:e.formData,size:"small"}},[r("el-form-item",{attrs:{label:"起止日期"}},[r("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",format:"yyyy-MM-dd HH:mm",clearable:!1},model:{value:e.formData.dates,callback:function(t){e.$set(e.formData,"dates",t)},expression:"formData.dates"}})],1),r("el-form-item",{attrs:{label:""}},[r("el-col",{attrs:{span:12}},[r("el-radio",{staticClass:"left-radio",attrs:{label:0},model:{value:e.formData.condition,callback:function(t){e.$set(e.formData,"condition",t)},expression:"formData.condition"}},[e._v("全病区")]),r("el-radio",{staticClass:"left-radio",attrs:{label:1},model:{value:e.formData.condition,callback:function(t){e.$set(e.formData,"condition",t)},expression:"formData.condition"}},[e._v("单床")])],1),r("el-col",{attrs:{span:12}},[r("el-input",{attrs:{placeholder:"请输入床号"},on:{focus:e.bedClick},model:{value:e.formData.bedNum,callback:function(t){e.$set(e.formData,"bedNum",t)},expression:"formData.bedNum"}})],1)],1),"longOrders"==e.activeName?r("el-form-item",{attrs:{label:"医嘱类型"}},[r("el-select",{attrs:{placeholder:"请选择医嘱类型"},model:{value:e.formData.longOrderType,callback:function(t){e.$set(e.formData,"longOrderType",t)},expression:"formData.longOrderType"}},[r("el-option",{attrs:{label:"新开医嘱",value:1}}),r("el-option",{attrs:{label:"新停医嘱",value:2}}),r("el-option",{attrs:{label:"变更医嘱",value:3}}),r("el-option",{attrs:{label:"有效医嘱",value:4}}),r("el-option",{attrs:{label:"有效药品医嘱",value:5}})],1)],1):r("el-form-item",{attrs:{label:"类型"}},[r("el-select",{attrs:{placeholder:"请选择类型"},model:{value:e.formData.tempOrderType,callback:function(t){e.$set(e.formData,"tempOrderType",t)},expression:"formData.tempOrderType"}},[r("el-option",{attrs:{label:"全部类型",value:6}}),r("el-option",{attrs:{label:"药品",value:7}})],1)],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.queryOrders}},[e._v("查询")]),r("el-button",{attrs:{type:"primary",icon:"el-icon-printer"},on:{click:e.printOrders}},[e._v("打印")])],1)],1),r("el-tab-pane",{attrs:{label:"长期医嘱",name:"longOrders"}},[r("el-table",{ref:"orderTable",staticStyle:{width:"100%"},attrs:{data:e.longOrders,border:"","tree-props":{children:"inpOrdersList"},"row-key":"id",indent:0,"default-expand-all":!0,"span-method":e.orderColSpan,"min-height":"500px","max-height":e.getAutoHeight(),"header-cell-style":e.orderHeaderStyle,"header-row-class-name":e.orderHeaderRowClass}},[r("el-table-column",{attrs:{label:"病人信息","header-align":"center"}}),r("el-table-column",{attrs:{label:"开始","header-align":"center"}},[r("el-table-column",{attrs:{label:"日期",width:"100","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.createDateToString.substring(0,10))+" ")]}}])}),r("el-table-column",{attrs:{label:"时间",width:"100","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.createDateToString.substring(11,16))+" ")]}}])}),r("el-table-column",{attrs:{prop:"enterDocName",label:"医生",width:"100","header-align":"center"}}),r("el-table-column",{attrs:{prop:"checkNurseName",label:"护士",width:"100","header-align":"center"}})],1),r("el-table-column",{attrs:{label:"长期医嘱",align:"center","header-align":"center"}},[r("el-table-column",{attrs:{prop:"enterDocName",label:"医嘱","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[null!=t.row.patientRegId&&""!=t.row.patientRegId?r("div",{staticStyle:{"text-align":"center"}},[r("b",[e._v("床号：")]),r("span",{staticClass:"border-bottom"},[e._v(e._s(t.row.bedNumStr))]),r("b",[e._v("病案号：")]),r("span",{staticClass:"border-bottom"},[e._v(e._s(t.row.recordNum))]),r("b",[e._v("姓名：")]),r("span",{staticClass:"border-bottom"},[e._v(e._s(t.row.patientName))]),r("b",[e._v("性别：")]),r("span",{staticClass:"border-bottom"},[e._v(e._s(t.row.gender))])]):e._e(),null==t.row.patientRegId||""==t.row.patientRegId?r("div",{staticStyle:{"text-align":"left"}},[r("span",{staticClass:"float-left"},[1==t.row.urgent?r("span",{staticStyle:{color:"red"}},[e._v("急")]):e._e(),e._v(" "+e._s(t.row.orderText+" "+(1==t.row.noDrug?"<自备>":"")+("1"==t.row.dischargeMed?"<出院带药>":"")+("+"==t.row.skin?"<阳性>":"-"==t.row.skin?"<阴性>":""))+" ")])]):e._e()]}}])}),r("el-table-column",{attrs:{label:"剂量",width:"100","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(""!=t.row.quantity&&t.row.quantity<=1&&null!=t.row.orderItemId&&""!=t.row.orderItemId?"":t.row.quantity+t.row.unit)+" ")]}}])}),r("el-table-column",{attrs:{prop:"medUsageName",label:"用法",width:"100","header-align":"center"}}),r("el-table-column",{attrs:{prop:"medFreqName",label:"频次",width:"100","header-align":"center"}})],1),r("el-table-column",{attrs:{label:"停止","header-align":"center"}},[r("el-table-column",{attrs:{label:"日期",width:"100","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(null==t.row.stopSysDateToString?"":t.row.stopSysDateToString.substring(0,10))+" ")]}}])}),r("el-table-column",{attrs:{label:"时间",width:"100","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(null==t.row.stopSysDateToString?"":t.row.stopSysDateToString.substring(0,10))+" ")]}}])}),r("el-table-column",{attrs:{prop:"stopDoctName",label:"医生",width:"100","header-align":"center"}}),r("el-table-column",{attrs:{prop:"stopCheckNurseName",label:"护士",width:"100","header-align":"center"}})],1)],1)],1),r("el-tab-pane",{attrs:{label:"临时医嘱",name:"tempOrders"}},[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tempOrders,border:"","tree-props":{children:"inpOrdersList"},"row-key":"id",indent:0,"default-expand-all":!0,"span-method":e.tempOrderColSpan,"min-height":"500px","max-height":e.getAutoHeight(),"header-cell-style":e.orderHeaderStyle,"header-row-style":e.tempOrderHeaderStyle}},[r("el-table-column",{attrs:{label:"日期",width:"100","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.createDateToString.substring(0,10))+" ")]}}])}),r("el-table-column",{attrs:{label:"时间",width:"100","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.createDateToString.substring(11,16))+" ")]}}])}),r("el-table-column",{attrs:{label:"临时医嘱",align:"center","header-align":"center"}},[r("el-table-column",{attrs:{prop:"enterDocName",label:"医嘱","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[null!=t.row.patientRegId&&""!=t.row.patientRegId?r("div",{staticStyle:{"text-align":"center"}},[r("b",[e._v("床号：")]),r("span",{staticClass:"border-bottom"},[e._v(e._s(t.row.bedNumStr))]),r("b",[e._v("病案号：")]),r("span",{staticClass:"border-bottom"},[e._v(e._s(t.row.recordNum))]),r("b",[e._v("姓名：")]),r("span",{staticClass:"border-bottom"},[e._v(e._s(t.row.patientName))]),r("b",[e._v("性别：")]),r("span",{staticClass:"border-bottom"},[e._v(e._s(t.row.gender))])]):e._e(),null==t.row.patientRegId||""==t.row.patientRegId?r("div",{staticStyle:{"text-align":"left"}},[r("span",{staticClass:"float-left"},[1==t.row.urgent?r("span",{staticStyle:{color:"red"}},[e._v("急")]):e._e(),e._v(" "+e._s(t.row.orderText+" "+(1==t.row.noDrug?"<自备>":"")+("1"==t.row.dischargeMed?"<出院带药>":"")+("+"==t.row.skin?"<阳性>":"-"==t.row.skin?"<阴性>":""))+" ")])]):e._e()]}}])}),r("el-table-column",{attrs:{label:"剂量",width:"100","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(""!=t.row.quantity&&t.row.quantity<=1&&null!=t.row.orderItemId&&""!=t.row.orderItemId?"":t.row.quantity+t.row.unit)+" ")]}}])}),r("el-table-column",{attrs:{prop:"medUsageName",label:"用法",width:"100","header-align":"center"}}),r("el-table-column",{attrs:{prop:"medFreqName",label:"频次",width:"100","header-align":"center"}})],1),r("el-table-column",{attrs:{prop:"enterDocName",label:"医生",width:"100","header-align":"center"}}),r("el-table-column",{attrs:{prop:"checkNurseName",label:"护士",width:"100","header-align":"center"}}),r("el-table-column",{attrs:{prop:"remark",label:"备注/检查目的",width:"350","header-align":"center"}}),r("el-table-column",{attrs:{prop:"executiveDeptName",label:"执行科室",width:"200","header-align":"center"}})],1)],1)],1)],1)},o=[],a=(r("d3b7"),r("159b"),r("5d15")),l=r("6bd7"),d=r("c1df"),s=r.n(d),i=r("322a"),c={name:"OrdersBrowsing",data:function(){return{activeName:"longOrders",formData:{startDate:"",endDate:"",bedNum:"",condition:0,orderType:2,dates:[s()(0,"HH"),s()()],longOrderType:1,tempOrderType:6},longOrders:[],tempOrders:[]}},methods:{getAutoHeight:function(){var e=document.body.clientHeight-250;return e+"px"},changeOrder:function(e,t){"longOrders"==this.activeName?this.formData.orderType=2:this.formData.orderType=1},orderHeaderRowClass:function(e){e.row,e.rowIndex;"undefined"!=typeof this.$refs.orderTable&&this.$refs.orderTable.store.states.originColumns.forEach((function(e){"长期医嘱"==e.label&&(e.rowSpan=2)}))},orderHeaderStyle:function(e){e.row,e.column;var t=e.rowIndex,r=e.columnIndex;return 1!=t||0!=r&&1!=r&&2!=r&&3!=r&&4!=r&&5!=r&&6!=r&&7!=r?{background:this.$store.state.settings.theme,color:"#fff","text-align":"center"}:{background:" rgba(0,128,150,0.85)",color:"#fff","text-align":"center"}},orderColSpan:function(e){var t=e.row,r=(e.column,e.rowIndex,e.columnIndex);return Object(l["b"])(t.patientRegId)?[1,1]:4===r?[1,12]:[0,0]},tempOrderColSpan:function(e){var t=e.row,r=(e.column,e.rowIndex,e.columnIndex);return Object(l["b"])(t.patientRegId)?[1,1]:2===r?[1,10]:[0,0]},tempOrderHeaderStyle:function(e){e.row;var t=e.rowIndex;if(1==t)return"display:none"},queryOrders:function(){var e=this;this.formData.queryType=2==this.formData.orderType?this.formData.longOrderType:1==this.formData.orderType?this.formData.tempOrderType:"",this.formData.startDate=s()(this.formData.dates[0]).format("YYYY-MM-DD HH:mm"),this.formData.endDate=s()(this.formData.dates[1]).format("YYYY-MM-DD HH:mm");var t=this.formData.orderType;Object(a["a"])(this.formData).then((function(r){var n=r.data;n.forEach((function(e){e.id=Object(l["a"])()})),2==t?e.longOrders=n:e.tempOrders=n}))},bedClick:function(){this.formData.condition=1},printOrders:function(){var e=Object(i["a"])();if("2"==this.formData.orderType){var t=this.longOrders;if(Object(l["b"])(t))return;var r=document.getElementById("printLongOrder"),n=r.getElementsByTagName("table")[0],o=n.getElementsByTagName("thead")[0],a=n.getElementsByTagName("tbody")[0];o.innerHTML="",a.innerHTML="",e.SET_PRINT_PAGESIZE(1,0,0,"A4"),o.innerHTML="<tr><td colspan='4' style='border-style:solid;border-width:2px;border-color:black;font-weight:bold;overflow:hidden; text-overflow:clip; white-space:nowrap;'>起始</td><td colspan='4' rowspan='2' style='width: 20%;border-style:solid;border-width:2px;border-color:black;font-weight:bold;overflow:hidden; text-overflow:clip; white-space:nowrap;'><span  style='letter-spacing:40px;'>长期医嘱</span></td><td colspan='4' style='border-style:solid;border-width:2px;border-color:black;font-weight:bold;overflow:hidden; text-overflow:clip; white-space:nowrap;'>停止</td></tr><tr><td style='border-style:solid;border-width:2px;border-color:black;font-weight:bold;overflow:hidden; text-overflow:clip; white-space:nowrap;'>日期</td><td style='border-style:solid;border-width:2px;border-color:black;font-weight:bold;overflow:hidden; text-overflow:clip; white-space:nowrap;'>时间</td><td style='border-style:solid;border-width:2px;border-color:black;font-weight:bold;overflow:hidden; text-overflow:clip; white-space:nowrap;'>医生</td><td style='border-style:solid;border-width:2px;border-color:black;font-weight:bold;overflow:hidden; text-overflow:clip; white-space:nowrap;'>护士</td><td style='border-style:solid;border-width:2px;border-color:black;font-weight:bold;overflow:hidden; text-overflow:clip; white-space:nowrap;'>日期</td><td style='border-style:solid;border-width:2px;border-color:black;font-weight:bold;overflow:hidden; text-overflow:clip; white-space:nowrap;'>时间</td><td style='border-style:solid;border-width:2px;border-color:black;font-weight:bold;overflow:hidden; text-overflow:clip; white-space:nowrap;'>医生</td><td style='border-style:solid;border-width:2px;border-color:black;font-weight:bold;overflow:hidden; text-overflow:clip; white-space:nowrap;'>护士</td></tr>";for(var d=0;d<t.length;d++){var c=t[d],p="<tr name='splitP'><td colspan='12'  style='height:28px;border-bottom: 2px solid black;font-size:12px;border-top: 1px solid black;'>",b=c.bedNumStr;"-"==c.bedNumStr&&(b="&nbsp;&nbsp;&nbsp;&nbsp"),p+="<b>床号：</b><span class='border-bottom' style='padding: 10px;font-size:12px;'>"+b+"</span>&nbsp;&nbsp;<b>病案号：</b><span class='border-bottom' style='margin-left: 5px;font-size:12px;'>"+c.recordNum+"</span>&nbsp;&nbsp;<b>姓名：</b><span class='border-bottom' style='margin-left: 5px;font-size:12px;'>"+c.patientName+"</span>&nbsp;&nbsp;<b>性别：</b><span class='border-bottom' style='margin-left: 5px;font-size:12px;'>"+c.gender+"</span></td></tr>",a.innerHTML=a.innerHTML+p;for(var u=0;u<c.inpOrdersList.length;u++){var m="",f="border-top:1px solid black;font-size:12px;",h=c.inpOrdersList[u],g=c.inpOrdersList[u-1],w=this.returnNotNull(h.createDateToString),y=this.returnNotNull(h.stopSysDateToString),v="",T="";v=h.enterDocName||"",T=h.stopDoctName||"";var x="";x=h.checkNurseName||"";var j="";j=h.stopCheckNurseName||"";var N="";N="1"==h.quantity&&null==h.unit?"":h.quantity;var _="";_="+"==h.skin?"<阳性>":"-"==h.skin?"<阴性>":"",u>0&&null!=h.orderGroupNoUuid&&g.orderGroupNoUuid==h.orderGroupNoUuid?m+="<tr><td style='width: 5.5%;height:28px;'></td><td style='width: 3%;'></td><td style='width: 4%;'></td><td style='width: 4%;'></td><td colspan='4' style='width: 20%;text-align:left;font-size: 12px;'><div style='float: left;width: 120px; height:28px;overflow:hidden; '>"+("1"==h.urgent?"急":"")+" "+(h.oderName||"")+("1"==h.noDrug?"<自备>":"")+("1"==h.dischargeMed?"<出院带药>":"")+_+"</div><div style='float: right;width: 140px;height:28px;overflow: hidden'><div style='width: 30px;height:28px;float: left;'>"+this.returnNotNull(N)+this.returnNotNull(h.unit)+"</div><div style='width: 60px;height:28px;float: left;'></div><div style='width: 50px; height:28px;float: left;'></div></div></td><td style='width: 5.5%;'></td><td style='width: 3%;'></td><td style='width: 4%;'></td><td style='width: 4%;'></td></tr>":m+="<tr><td style='height:28px;width: 5.5%;font-size: 14px;"+f+"'>"+w.substring(0,10)+"</td><td style='width: 3%;"+f+"'>"+w.substring(11,16)+"</td><td style='width: 4%;"+f+"'>"+v.substring(0,3)+"</td><td style='width: 4%;"+f+"'>"+x.substring(0,3)+"</td><td colspan='4' style='width: 20%;text-align:left;"+f+"'><div style='float: left;width: 120px; height:28px;overflow:hidden; '>"+("1"==h.urgent?"急":"")+" "+(h.oderName||"")+("1"==h.noDrug?"<自备>":"")+("1"==h.dischargeMed?"<出院带药>":"")+_+"</div><div style='float: right;width: 140px;height:28px;overflow: hidden'><div style='width: 30px;height:28px;float: left;overflow: hidden'>"+this.returnNotNull(N)+this.returnNotNull(h.unit)+"</div><div style='width: 60px;height:28px;float: left;'>&nbsp;"+(h.medUsageName||"").substring(0,4)+"</div><div style='width: 45px; height:28px;float: left;'>"+(h.medFreqName||"")+"</div></div></td><td style='width: 5.5%;"+f+"'>"+y.substring(0,10)+"</td><td style='width: 3%;"+f+"'>"+y.substring(11,16)+"</td><td style='width: 4%;"+f+"'>"+T.substring(0,3)+"</td><td style='width: 4%;"+f+"'>"+j.substring(0,3)+"</td></tr>",a.innerHTML=a.innerHTML+m}}m="<tr><td style='width: 5%;"+f+"'></td><td style='width: 2%;"+f+"'></td><td style='width: 4%;"+f+"'></td><td style='width: 4%;"+f+"'></td><td colspan='4' style='width: 20%;text-align:left;font-size:14px;"+f+"'></td><td style='width: 5%;"+f+"'></td><td style='width: 2%;"+f+"'></td><td style='width: 4%;"+f+"'></td><td style='width: 4%;"+f+"'></td></tr>",m+=m,n.setAttribute("style","text-align:center;"),e.SET_PRINT_PAGESIZE(1,0,0,"A4");var D=this.pageLongOrders(o,a);D.forEach((function(t,r){e.ADD_PRINT_TABLE("30mm","10mm","188mm","290mm",t.outerHTML),e.NewPageA()})),e.ADD_PRINT_TEXT("15mm","10mm","188mm","10mm","时间"+s()(this.formData.dates[0]).format("YYYY-MM-DD HH:mm")+"--"+s()(this.formData.dates[1]).format("YYYY-MM-DD HH:mm")),e.SET_PRINT_STYLEA(0,"ItemType",1),e.SET_PRINT_STYLEA(0,"FontSize",15),e.SET_PRINT_STYLEA(0,"Alignment",2),e.SET_PRINT_STYLE("Bold",1),e.ADD_PRINT_TEXT("285mm","100mm","25mm","8mm","第#页"),e.SET_PRINT_STYLEA(0,"ItemType",2),e.SET_PRINT_STYLEA(0,"FontSize",12),e.PRINT()}else{t=this.tempOrders;if(Object(l["b"])(t))return;r=document.getElementById("printTempOrder"),n=r.getElementsByTagName("table")[0],o=n.getElementsByTagName("thead")[0],a=n.getElementsByTagName("tbody")[0];o.innerHTML="",a.innerHTML="";var k="<tr><td style='width: 20%;border-style:solid;border-width:2px;border-color:black;font-size:20px;font-weight:bold;'>日期时间</td><td  colspan='4' style='border-style:solid;border-width:2px;border-color:black;font-size:20px;font-weight:bold;'><span  style='letter-spacing:40px;'>临时医嘱</span></td><td style='8%;border-style:solid;border-width:2px;border-color:black;font-size:20px;font-weight:bold;'>医生</td><td style='8%;border-style:solid;border-width:2px;border-color:black;font-size:20px;font-weight:bold;'>护士</td></tr>";o.innerHTML=k,a.setAttribute("style","border-bottom:1px solid black;");for(m="",d=0;d<t.length;d++){c=t[d],p="<tr  name='splitP2'style='line-height: 30px; '><td colspan='12' style='border-bottom: 2px solid black;font-size:12px;border-top: 1px solid black;'>",b=c.bedNumStr;"-"==c.bedNumStr&&(b="&nbsp;&nbsp;&nbsp;&nbsp"),p+="<b>床号：</b><span class='border-bottom' style='padding: 10px;'>"+b+"</span>&nbsp;&nbsp;<b>病案号：</b><span class='border-bottom' style='margin-left: 5px;font-size:12px;'>"+c.recordNum+"</span>&nbsp;&nbsp;<b>姓名：</b><span class='border-bottom' style='margin-left: 5px;font-size:12px;'>"+c.patientName+"</span>&nbsp;&nbsp;<b>性别：</b><span class='border-bottom' style='margin-left: 5px;font-size:12px;'>"+c.gender+"</span></td></tr>",a.innerHTML+=p;for(u=0;u<c.inpOrdersList.length;u++){m="";f="border-top:1px solid black;font-size:12px;height: 30px;",h=c.inpOrdersList[u],g=c.inpOrdersList[u-1],w=this.returnNotNull(h.createDateToString),y=this.returnNotNull(h.stopSysDateToString),v="";v=h.enterDocName||"";x="";x=h.checkNurseName||"";N="";if("PH0015_07"!=h.orderStstus){N="1"==h.quantity&&null==h.unit?"":h.quantity;_="";"PH0018_06"!=h.orderType&&"PH0018_07"!=h.orderType&&"PH0018_08"!=h.orderType&&(_="+"==h.skin?"<阳性>":"-"==h.skin?"<阴性>":"");var S="";S="PH0055_01"==h.usageType||"PH0055_99"==h.usageType?(h.standard||"")+"&nbsp;&nbsp;"+this.returnNotNull(N)+this.returnNotNull(h.unit):"PH0055_03"==h.usageType?this.returnNotNull(N)+this.returnNotNull(h.unit):"PH0018_03"==h.orderType||"PH0018_01"==h.orderType||"PH0018_02"==h.orderType?"1"==N?"":this.returnNotNull(N)+this.returnNotNull(h.unit):"";var H=h.oderName;Object(l["b"])(h.deathDate)||(H=h.orderText);var L="";L="PH0018_08"==h.orderType?h.quantity+"剂":h.consumption||"";var E="";E="PH0018_13"==h.orderType?"<div style='float: left;margin:0px;padding:0px;width: 390px; height:28px;overflow:hidden;'>"+(H||"")+"</div>":"<div style='float: left;margin:0px;padding:0px;width: 230px;height: 28px; overflow:hidden;'>"+("1"==h.urgent?"急":"")+" "+(H||"")+S+("1"==h.noDrug?"<自备>":"")+("1"==h.dischargeMed?"<出院带药>":"")+_+"</div><div style='float: right;width: 160px;height:28px;overflow: hidden'><div style='width: 30px;height:28px;float: left;'>"+L+"</div><div style='width: 60px;height:28px;float: left;'>"+(h.medUsageName||"").substring(0,4)+"</div><div style='width: 50px; height:28px;float: left;'>"+(h.medFreqName||"").substring(0,4)+"</div></div>",u>0?null!=h.orderGroupNoUuid&&g.orderGroupNoUuid==h.orderGroupNoUuid?m+="<tr><td style='width: 20%;'></td><td colspan='4' style='text-align:left;font-size: 12px;'><div style='float: left;width: 230px; height:28px;overflow:hidden; text-overflow:clip; white-space:nowrap;'>"+("1"==h.urgent?"急":"")+" "+(H||"")+S+("1"==h.noDrug?"<自备>":"")+("1"==h.dischargeMed?"<出院带药>":"")+_+"</div><div style='float: right;width: 160px;height:28px;overflow: hidden'><div style='width: 30px;height:20px;float: left;'>"+L+"</div><div style='width: 60px;height:20px;float: left;'>"+(h.medUsageName||"").substring(0,4)+"</div><div style='width: 50px; height:28px;float: left;'>"+(h.medFreqName||"").substring(0,4)+"</div></div></td><td style='width: 8%;'></td><td style='width: 8%;'></td></tr>":m+="<tr><td style='width:20%;"+f+"'>"+w.substring(0,16)+"</td><td colspan='4' style='text-align:left;"+f+"'>"+E+"</td><td style='width: 8%;"+f+"'>"+v.substring(0,3)+"</td><td style='width: 8%;"+f+"'>"+x.substring(0,3)+"</td></tr>":m+="<tr><td style='width: 20%;"+f+"'>"+w.substring(0,16)+"</td><td colspan='4' style='text-align:left;"+f+"'>"+E+"</td><td style='width: 8%;"+f+"'>"+v.substring(0,3)+"</td><td style='width: 8%;"+f+"'>"+x.substring(0,3)+"</td></tr>",a.innerHTML+=m}}}m="<tr><td style='width: 20%;"+f+"'></td><td colspan='4' style='text-align:left;"+f+"'></td><td style='width: 8%;"+f+"'></td><td style='width: 8%;"+f+"'></td></tr>",a.innerHTML+=m,e.SET_PRINT_PAGESIZE(1,0,0,"A4");D=this.pageTempOrders(o,a);D.forEach((function(t,r){e.ADD_PRINT_TABLE("30mm","10mm","188mm","290mm",t.outerHTML),e.NewPageA()})),e.ADD_PRINT_TEXT("15mm","10mm","188mm","10mm","时间"+s()(this.formData.dates[0]).format("YYYY-MM-DD HH:mm")+"--"+s()(this.formData.dates[1]).format("YYYY-MM-DD HH:mm")),e.SET_PRINT_STYLEA(0,"ItemType",1),e.SET_PRINT_STYLEA(0,"FontSize",15),e.SET_PRINT_STYLEA(0,"Alignment",2),e.SET_PRINT_STYLE("Bold",1),e.ADD_PRINT_TEXT("285mm","100mm","25mm","8mm","第#页"),e.SET_PRINT_STYLEA(0,"ItemType",2),e.SET_PRINT_STYLEA(0,"FontSize",12),e.PRINT()}},pageLongOrders:function(e,t){var r=e.outerHTML,n=t.getElementsByTagName("tr"),o=document.createElement("table");o.setAttribute("style","text-align: center"),o.setAttribute("cellspacing","0px"),o.setAttribute("width","100%");var a=new Array,l=1;o.innerHTML=o.innerHTML+r;var d,s=document.createElement("tbody");return n.forEach((function(e,t){"splitP"==e.getAttribute("name")&&(d=e),1==l&&"splitP"!=e.getAttribute("name")&&(l+=1,s.innerHTML=s.innerHTML+d.innerHTML),l++,s.innerHTML=s.innerHTML+e.innerHTML,l>=29?(o.innerHTML=o.innerHTML+s.innerHTML,a.push(o),o.innerHTML="",s.innerHTML="",l=1):t==n.length-1&&(o.innerHTML=o.innerHTML+s.innerHTML,a.push(o),o.getElementsByTagName("tbody").innerHTML="",s.innerHTML="",l=1)})),a},pageTempOrders:function(e,t){var r=e.outerHTML,n=t.getElementsByTagName("tr"),o=document.createElement("table");o.setAttribute("style","text-align: center"),o.setAttribute("cellspacing","0px"),o.setAttribute("width","100%");var a=new Array,l=1;o.innerHTML=o.innerHTML+r;var d=document.createElement("tbody"),s="";return n.forEach((function(e,t){"splitP2"==e.getAttribute("name")&&(s=e),1==l&&"splitP2"!=e.getAttribute("name")&&(l+=1,d.innerHTML+=s.innerHTML),l++,d.innerHTML+=e.innerHTML,(l>=30||t==n.length-1)&&(o.innerHTML+=d.innerHTML,a.push(o),o.getElementsByTagName("tbody").innerHTML="",d.innerHTML="",l=1)})),a},returnNotNull:function(e){return null==e||"null"==e?"":e}},mounted:function(){}},p=c,b=(r("9dac"),r("7101"),r("2877")),u=Object(b["a"])(p,n,o,!1,null,"006e3a0a",null);t["default"]=u.exports}}]);