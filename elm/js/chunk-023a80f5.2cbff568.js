(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-023a80f5"],{"0a99":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"me"},[a("div",{staticClass:"headInfo"},[a("div",{staticClass:"head-img"}),a("div",{staticClass:"head-profile"},[t.userInfo?a("p",{staticClass:"user-id"},[t._v(t._s(t.userInfo._id))]):a("p",{staticClass:"user-id",on:{click:t.handleLogin}},[t._v("登录/注册")]),a("p",{staticClass:"user-phone"},[a("i",{staticClass:"fa fa-mobile"}),t.userInfo?a("span",[t._v(t._s(t.encryptPhone(t.userInfo.phone)))]):a("span",[t._v("登录后享受更多特权")])])]),a("i",{staticClass:"fa fa-angle-right"})]),t.userInfo?a("div",[a("div",{staticClass:"address-cell"},[a("i",{staticClass:"fa fa-map-marker"}),a("div",{staticClass:"address-index",on:{click:t.myAddress}},[a("span",[t._v("我的地址")]),a("i",{staticClass:"fa fa-angle-right"})])]),a("button",{staticClass:"loginOut-btn",on:{click:t.handleLogout}},[t._v("退出登录")])]):t._e()])},s=[],r=(a("a481"),{name:"me",data:function(){return{userInfo:""}},beforeRouteEnter:function(t,e,a){a((function(t){return t.getData()}))},methods:{handleLogin:function(){this.$router.push("/login")},getData:function(){var t=this,e=localStorage.ele_token;this.$axios("/api/user/user_info/".concat(e)).then((function(e){console.log(e.data),t.userInfo=e.data}))},encryptPhone:function(t){return t.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2")},handleLogout:function(){localStorage.removeItem("ele_token"),this.$router.push("/login")},myAddress:function(){this.userInfo.myAddress.length>0?this.$router.push("/myAddress"):this.$router.push({name:"addAddress",params:{title:"添加地址",addressInfo:{name:"",sex:"",phone:"",address:"",bottom:"",tag:""}}})}}}),i=r,o=(a("eadc"),a("2877")),c=Object(o["a"])(i,n,s,!1,null,"63f251b2",null);e["default"]=c.exports},"918a":function(t,e,a){},a481:function(t,e,a){"use strict";var n=a("cb7c"),s=a("4bf8"),r=a("9def"),i=a("4588"),o=a("0390"),c=a("5f1b"),u=Math.max,l=Math.min,d=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g,v=function(t){return void 0===t?t:String(t)};a("214f")("replace",2,(function(t,e,a,g){return[function(n,s){var r=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,r,s):a.call(String(r),n,s)},function(t,e){var s=g(a,t,this,e);if(s.done)return s.value;var d=n(t),f=String(this),h="function"===typeof e;h||(e=String(e));var m=d.global;if(m){var b=d.unicode;d.lastIndex=0}var _=[];while(1){var C=c(d,f);if(null===C)break;if(_.push(C),!m)break;var I=String(C[0]);""===I&&(d.lastIndex=o(f,r(d.lastIndex),b))}for(var $="",k=0,x=0;x<_.length;x++){C=_[x];for(var S=String(C[0]),w=u(l(i(C.index),f.length),0),y=[],A=1;A<C.length;A++)y.push(v(C[A]));var L=C.groups;if(h){var M=[S].concat(y,w,f);void 0!==L&&M.push(L);var D=String(e.apply(void 0,M))}else D=p(S,f,w,y,L,e);w>=k&&($+=f.slice(k,w)+D,k=w+S.length)}return $+f.slice(k)}];function p(t,e,n,r,i,o){var c=n+t.length,u=r.length,l=h;return void 0!==i&&(i=s(i),l=f),a.call(o,l,(function(a,s){var o;switch(s.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(c);case"<":o=i[s.slice(1,-1)];break;default:var l=+s;if(0===l)return a;if(l>u){var f=d(l/10);return 0===f?a:f<=u?void 0===r[f-1]?s.charAt(1):r[f-1]+s.charAt(1):a}o=r[l-1]}return void 0===o?"":o}))}}))},eadc:function(t,e,a){"use strict";var n=a("918a"),s=a.n(n);s.a}}]);
//# sourceMappingURL=chunk-023a80f5.2cbff568.js.map