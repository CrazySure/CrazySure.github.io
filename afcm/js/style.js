$(function () {
    var page_w = $(window).width();
    var page_h = $(window).height();
    $(".layer5-3").click(function () {
        $(this).fadeOut().siblings('.layer5-2').fadeOut();
        $('.layer5').addClass('layer5-active');
    })

    $('.layer8 .layer8-2 input').css({ 'width': 280 / 640 * page_w, 'height': 62 / 640 * page_w, 'left': 145 / 640 * page_w, 'font-size': 28 / 640 * page_w + 'px' });
    $('.layer8 .layer8-2 .btn').css({ 'width': 328 / 640 * page_w, 'height': 52 / 640 * page_w, 'left': 150 / 640 * page_w });
    $('.layer8-2 .name').css({ 'top': 106 / 640 * page_w });
    $('.layer8-2 .company').css({ 'top': 219 / 640 * page_w });
    $('.layer8-2 .phone').css({ 'top': 325 / 640 * page_w });
    $('.layer8-2 .btn').css({ 'top': 460 / 640 * page_w });
    //第九屏
    //安卓手机输入框时，软键盘弹出隐藏的事件
    $(window).resize(function () {
        var thisHeight = $(this).height();
        if (page_h - thisHeight > 140) {
            //当软键盘弹出，在这里面操作
            document.querySelector('#inputId').scrollIntoView();
        } else {
            //当软键盘收起，在此处操作
            document.querySelector('#inputId').scrollIntoView(false);
        }
    });
    //  苹果
    var interval;
    var scrolltopBefor = document.body.scrollTop;//获取调用软键盘之前浏览器滚动的高度
    var inputBox = document.getElementById('inputId');
    $('.layer8-2 .name,.layer8-2 .company,.layer8-2 .phone').focus(function (e) {
        interval = setInterval(function () {
            // document.body.scrollTop = document.body.scrollHeight;//让浏览器滚动到最底部
            inputBox.scrollTop =document.body.scrollHeight- document.body.scrollTop

        }, 0)
    }).blur(function () {//设定输入框失去焦点时的事件
        setTimeout(function () {
            clearInterval(interval);//清除计时器
            document.body.scrollTop = scrolltopBefor;//恢复到调用软键盘之前浏览器的高度
        }, 0);
    });

    //********************音乐*******************//
    var myVideo = document.getElementById("video");
    var switchKey = 1;
	$(".music").click(function(){
        
        if(switchKey ==0){
            myVideo.pause();
            $(".music").removeClass('music_run');
			switchKey = 1;
		}else{
            myVideo.play();
            $(".music").addClass('music_run');
            switchKey = 0;
        }
    });
    //解决不自动播放问题
    document.addEventListener('WeixinJSBridgeReady', function() {
        document.getElementById('video').play()
    })
    document.addEventListener('touchstart', function() {
        document.getElementById('video').play()
    })






    //第九屏
    // 点击提交按钮
    $('.btn').on('click', function () {
        var name = $.trim($('.name').val());
        if (!name) {
            alert("姓名不能为空!");
            return false;
        }
        var company = $.trim($('.company').val());
        if (!company) {
            alert("公司名称不能为空!");
            return false;
        }
        //验证手机号
        var phoneVal = $('.phone').val();
        var phoneReg = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
        if (!phoneReg.test(phoneVal)) {
            alert("手机号码格式错误!");
            return false;
        }
        var params = {
            name: name,
            company: company,
            phone: phoneVal,
        }
        console.log(name + company + phoneVal + '恭喜你提交成功')
        //发起数据请求
        $.ajax({
            // 请求方式
            type: 'post',
            // 请求地址
            url: '/user',
            // 向服务器端发送的请求参数
            data: JSON.stringify(params),
            // 指定参数的格式类型
            contentType: 'application/json',
            // 请求成功以后函数被调用
            success: function (response) {
                console.log(response);
            }
        })
    });




})





