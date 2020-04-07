// JavaScript Document
            var ua = navigator.userAgent.toLowerCase();
            var isWeixin = ua.indexOf('micromessenger') != -1;
            var isAndroid = ua.indexOf('android') != -1;
            var isIos = (ua.indexOf('iphone') != -1) || (ua.indexOf('ipad') != -1);
            // function onReady(){
            //     if(isAndroid) {
            //         if (history.length && history.length > 1) {
            //             history.back();
            //         } else {
            //             WeixinJSBridge.invoke('closeWindow');
            //         }
            //     }
            // }
            // document.addEventListener?document.addEventListener("WeixinJSBridgeReady",onReady,!1):document.attachEvent&&document.attachEvent("onWeixinJSBridgeReady",onReady);
            if (!isWeixin) {
                document.head.innerHTML = '<title>抱歉，出错了</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0"><link rel="stylesheet" type="text/css" href="https://res.wx.qq.com/connect/zh_CN/htmledition/style/wap_err1a9853.css"><style type="text/css">body{background:#fff;}.icon80_smile{background:url(images/code.png) no-repeat;width:270px;height:270px;}</style>';
                document.body.innerHTML = '<div class="page_msg"><div class="inner"><span class="msg_icon_wrp"><i class="icon80_smile"></i></span><div class="msg_content"><h4>请用微信扫一扫查阅案例</h4></div></div></div>';
            }

