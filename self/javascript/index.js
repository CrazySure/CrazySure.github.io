
	$(function(){
		/*$(window).scroll(function(e) {
            var myTop = $('.screen02').offset().top; 
			if($(window).scrollTop()>myTop){
				
				$('.screen02 h2').animate({'top':'-90px'},1000);
			}else if($(window).scrollTop()>800){
				alert(0)
				$('.screen03 h2').animate({'top':'-90px'},1000);	
			}	
        });*/
		//鼠标移动
		$(window).mousemove(function(e) {
            x = e.pageX +200;
			y = e.pageY -200;
			
			//  '+x+'
			$('.Mouse').css({'left': ''+x+'px','top': y + 'px'});
        });
				
		//回顶部
		
		$(window).scroll(function(e){
			
			if($(window).scrollTop()>745){
				$('.return').animate({'right':'0'},100);
			}else{
				$('.return').animate({'right':'-200px'},100);
			}	
		})
		
		//导航
		$('.nav01 ul a').hover(function(e) {
            $(this).parent('li').css('background-position','0px -289px').stop().animate({'text-indent':'-300px'},0).stop().animate({'text-indent':'100px'},100).animate({'text-indent':'-100px'},100).animate({'text-indent':'0'},100).animate({'text-indent':'-50px'},50).animate({'text-indent':'0'},50).css({'color':'#fff','font-weight':'bold'});
        },function(){
			$(this).parent('li').css('background-position','0px -181px').css({'color':'#00DDFF','font-weight':'normal'});
		});	
		//第一屏左侧ul
		$('.asideLeft ul li a').hover(function(e) {
            $(this).addClass('current');;
        },function(){
			$(this).removeClass('current');	
		});
		//logo
		var timer02 = null;
		timer02 = setInterval(function(){
			$('.nav01 .logo .logoIn .feng').animate({'left':'-100px','top':'50px'},0).animate({'left':'12px'},3000).fadeOut(2000);
			$('.nav01 .logo .logoIn .shuo').animate({'right':'-100px','top':'50px'},0).animate({'right':'12px'},3000).fadeOut(2000);
			$('.nav01 .logo .logoIn .feng').fadeIn(1000).animate({'top':'-100px'},500).animate({'left':'12px'},3000);
			$('.nav01 .logo .logoIn .shuo').fadeIn(1000).animate({'top':'200px'},500).animate({'right':'12px'},3000);	
		})
		//右半部分
		//点击第一个按钮如果音乐不是静音状态点击之后是静音，如果是静音则播放
		$('.asideRight ul li').eq(0).find('span').click(function(e) {
			if($('.music')[0].muted==false){
				$('.music')[0].muted=true;
			}else{
				$('.music')[0].muted=false;	
			}
		});
		//点击第二个按钮播放
		$('.asideRight ul li').eq(1).find('span').click(function(e) {
			$('.music')[0].play();
        });
		//点击第三个按钮暂停
		$('.asideRight ul li').eq(2).find('span').click(function(e) {
			$('.music')[0].pause();
        });
		//点击第四个按钮上一曲
	
		
		//footer
		var timer01 = null;
		timer01 = setInterval(function(){
			$('.screen01 .footerImg').animate({'left':'-365px'},18000).animate({'left':'442px'},0);
		},1000)
		//变形金刚
		$('.screen01 .transform').show().animate({'top':'160px'},2000);//.animate({'left':'76px'},5000);	
		
		/**********************************第二屏**************************/
		//左半部分
		// 定义了一个圆周
		 	var par01 = {
			    center: [200,200],  //圆心
		        radius: 150,    //半径
		        start: 0,  //起始角度
		        end: 1,		//终止角度
		        dir: -1     //1逆时针 -1顺时针
			 }
			 var par02 = {
			    center: [200,200],  //圆心
		        radius: 150,    //半径
		        start: 72,  //起始角度
		        end: 73,		//终止角度
		        dir: -1     //1逆时针 -1顺时针
			 }
			 var par03 = {
			    center: [200,200],  //圆心
		        radius: 150,    //半径
		        start: 144,  //起始角度
		        end: 145,		//终止角度
		        dir: -1     //1逆时针 -1顺时针
			 }
			 var par04 = {
			    center: [200,200],  //圆心
		        radius: 150,    //半径
		        start: 216,  //起始角度
		        end: 217,		//终止角度
		        dir: -1     //1逆时针 -1顺时针
			 }
			 var par05 = {
			    center: [200,200],  //圆心
		        radius: 150,    //半径
		        start: 288,  //起始角度
		        end: 289,		//终止角度
		        dir: -1     //1逆时针 -1顺时针
			 }

			run01();
			function run01(){
				//运动
				$(".left .ulText li:eq(0)").animate({path : new $.path.arc(par01)},8000,"linear",function(){
					//回调函数，动画执行了之后，再次调用run()
					//派出一个人调用，就行了
					run01();
				})
				$(".left .ulText li:eq(1)").animate({path : new $.path.arc(par02)},8000,"linear");
				$(".left .ulText li:eq(2)").animate({path : new $.path.arc(par03)},8000,"linear");
				$(".left .ulText li:eq(3)").animate({path : new $.path.arc(par04)},8000,"linear");
				$(".left .ulText li:eq(4)").animate({path : new $.path.arc(par05)},8000,"linear");
			}
			
			
			var par1 = {
			    center: [200,200],  //圆心
		        radius: 250,    //半径
		        start: 0,  //起始角度
		        end: -1,		//终止角度
		        dir: 1     //1逆时针 -1顺时针
			 }
			 var par2 = {
			    center: [200,200],  //圆心
		        radius: 250,    //半径
		        start: 90,  //起始角度
		        end: 89,		//终止角度
		        dir: 1     //1逆时针 -1顺时针
			 }
			 var par3 = {
			    center: [200,200],  //圆心
		        radius: 250,    //半径
		        start: 180,  //起始角度
		        end: 179,		//终止角度
		        dir: 1     //1逆时针 -1顺时针
			 }
			 var par4 = {
			    center: [200,200],  //圆心
		        radius: 250,    //半径
		        start: 270,  //起始角度
		        end: 269,		//终止角度
		        dir: 1     //1逆时针 -1顺时针
			 }

			run02();
			function run02(){
				//运动
				$(".left .ulPicture li:eq(0)").animate({path : new $.path.arc(par1)},5000,"linear",function(){
					//回调函数，动画执行了之后，再次调用run()
					//派出一个人调用，就行了
					run02();
				})
				$(".left .ulPicture li:eq(1)").animate({path : new $.path.arc(par2)},5000,"linear");
				$(".left .ulPicture li:eq(2)").animate({path : new $.path.arc(par3)},5000,"linear");
				$(".left .ulPicture li:eq(3)").animate({path : new $.path.arc(par4)},5000,"linear");
				
			}
			
			
			
				
		
		
		
		//右半部分
		$('.screen02 aside .right li a').eq(0).hover(function(e) {
        	$(this).find('img').attr('src','../img/right_web_hover.png').stop().animate({'left':'-100px'},1000);    
        },function(){
			$(this).find('img').attr('src','../img/right_web.png').stop().animate({'left':'0px'},1000);
		});
		$('.screen02 aside .right li a').eq(1).hover(function(e) {
        	$(this).find('img').attr('src','../img/right_wy_hover.png').stop().animate({'left':'-100px'},1000);    
        },function(){
			$(this).find('img').attr('src','../img/right_wy.png').stop().animate({'left':'0px'},1000);
		});
		$('.screen02 aside .right li a').eq(2).hover(function(e) {
        	$(this).find('img').attr('src','../img/right_ui_hover.png').stop().animate({'left':'-100px'},1000);    
        },function(){
			$(this).find('img').attr('src','../img/right_ui.png').stop().animate({'left':'0px'},1000);
		});
		$('.screen02 aside .right li a').eq(3).hover(function(e) {
        	$(this).find('img').attr('src','../img/right_pm_hover.png').stop().animate({'left':'-100px'},1000);    
        },function(){
			$(this).find('img').attr('src','../img/right_pm.png').stop().animate({'left':'0px'},1000);
		});
		$('.screen02 aside .right li a').eq(4).hover(function(e) {
        	$(this).find('img').attr('src','../img/right_flash_hover.png').stop().animate({'left':'-100px'},1000);    
        },function(){
			$(this).find('img').attr('src','../img/right_flash.png').stop().animate({'left':'0px'},1000);
		});
		
		
		/**********************************第三屏**************************/
		$('.screen03 .Ul li').eq(0).addClass('current');
		
		//划过事件
		
		$('.screen03 .Ul li').hover(function(e) {
            $(this).find('.img01').addClass('moveImg01');
			$(this).find('.img02').addClass('moveImg02');
			$(this).find('span').addClass('liSpan');
        },function(){
			$(this).find('.img01').removeClass('moveImg01');
			$(this).find('.img02').removeClass('moveImg02');
			$(this).find('span').removeClass('liSpan');
		});
		//点击事件
		$('.screen03 .Ul li').click(function(e) {
            $(this).addClass('current').siblings().removeClass('current');
			$('.screen03 .ulBox ul').eq($(this).index()).stop().show().siblings().stop().hide();
        });
		//作品图片列表
		$('.screen03 .ulBox ul').eq(0).show();
		$('.screen03 .Ul01 li').hover(function(e) {
            $(this).find('.hideBox').stop().animate({'top':'0'},100).animate({'top':'-50px'},100).animate({'top':'0'},100);
			$(this).find('img').addClass('current');
        },function(){
            $(this).find('.hideBox').stop().animate({'top':'-250px'},100);
			$(this).find('img').removeClass('current');
		});
		
		/**********************************第四屏**************************/
		
		var imgkey = 0;
		var imgkey01 = 0;
		<!-- var num = 0; -->
		var timer01 = null;
		var timer02 = null;
		
		
		var myLi01=$('.pictureHover ul li:eq(0)').clone(true);
		$('.pictureHover ul').append(myLi01);
		timer02 = setInterval(function(){
			imgkey01=imgkey01-3;
			if(imgkey01 < -1800){//判断极值 范围
				imgkey01 = 0;	
			}
			$('.pictureHover ul').css('left',''+imgkey01+'px');		
		},50);
		
		var myLi=$('.picture ul li:eq(0)').clone(true);
		$('.picture ul').append(myLi);
		timer01 = setInterval(function(){
			imgkey=imgkey-3;
			if(imgkey < -1800){//判断极值 范围
				imgkey = 0;	
			}
			$('.picture ul').css('left',''+imgkey+'px');		
		},50);
		
		
		
		$('.picture_box').hover(function(e) {
            $('.pictureHover').show();
        },function(){
            $('.pictureHover').hide();
		});
		
		/**********************************第五屏**************************/
		$(window).scroll(function(e) {
            if($(window).scrollTop()>=$('.screen05').offset().top){
				$('.screen05 .text').stop().animate({'right':'50px'},500);
			}else{
				$('.screen05 .text').stop().animate({'right':'-750px'},100);
			}
			if($(window).scrollTop()>=$('.screen04_box').offset().top){
				$('.screen04 .con').stop().animate({'right':'110px'},500);
				$('.screen04 .picture_box').stop().animate({'left':'210px'},500);
			}else{
				$('.screen04 .con').stop().animate({'right':'-560px'},100);
				$('.screen04 .picture_box').stop().animate({'left':'-240px'},100);
			}
			if($(window).scrollTop()>=$('.screen03_box').offset().top){
				$('.screen03 .Ul li').eq(0).stop().animate({'left':'0'},1000);
				$('.screen03 .Ul li').eq(1).stop().animate({'top':'0'},200);
				$('.screen03 .Ul li').eq(2).stop().animate({'right':'0'},1000);
				$('.screen03 .ulBox').stop().animate({'top':'500px'},800);
			}
			else{
				$('.screen03 .Ul li').eq(0).stop().animate({'left':'-200px'},100);
				$('.screen03 .Ul li').eq(1).stop().animate({'top':'-70px'},100);
				$('.screen03 .Ul li').eq(2).stop().animate({'right':'-200px'},100);
				$('.screen03 .ulBox').stop().animate({'top':'800px'},100);
				
			}if($(window).scrollTop()>=$('.screen02_box').offset().top){
				$('.screen02 aside .left').stop().animate({'left':'40px'},500);
				$('.screen02 aside .right').stop().animate({'right':'75px'},500);	
			}else{
				$('.screen02 aside .left').stop().animate({'left':'-580px'},100);	
				$('.screen02 aside .right').stop().animate({'right':'-450px'},100);	
			}
			
				
				
        });
		
	})
