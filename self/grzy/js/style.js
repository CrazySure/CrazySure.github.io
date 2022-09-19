
// JavaScript Document
var images = [
    "images/bg1.jpg",
    "images/bg2.jpg",
    "images/bg3.jpg",
    "images/bg4.jpg",
    "images/1-2.jpg",
    "images/1-3.png",
    "images/bg5.jpg",
];

var page_w = $(window).width();
var page_h = $(window).height();
$(function(){
	
	PreLoadImg(images,function(){
	$('.loadingCls').css({'width':page_w,'height':page_h});
	/*****layer1*****/
	$('.layer1 .layer1-1').css({'top':535/750*page_w,'height':347/750*page_w});
	$('.layer1-4,.layer1-5,.layer1-6,.layer1-7').css({'width':190/750*page_w});
	$('.layer1-4').css({'top':930/750*page_w});
	$('.layer1-5').css({'top':930/750*page_w});
	$('.layer1-6').css({'top':1072/750*page_w});
	$('.layer1-7').css({'top':1072/750*page_w});
	$('.layer1-3').css({'top':1000/750*page_w});
	
	/*****layer2*****/
	//$('.layer2 .layer2-1').css({'top':0/600*page_w});
	//$('.layer2 .layer2-2').css({'top':700/600*page_w});
	/*****layer3*****/
	$('.layer3 .layer3-1').css({'top':70/750*page_w});
	$('.layer3 .layer3-2').css({'top':150/600*page_w,'height':60/600*page_w});
	$('.layer3 .layer3-3').css({'top':212/600*page_w,'height':60/600*page_w});
	$('.layer3 .layer3-4').css({'top':274/600*page_w,'height':60/600*page_w});
	$('.layer3 .layer3-5').css({'top':336/600*page_w,'height':60/600*page_w});
	$('.layer3 .layer3-6').css({'top':398/600*page_w,'height':60/600*page_w});
	$('.layer3 .layer3-7').css({'top':460/600*page_w,'height':60/600*page_w});
	$('.layer3 .layer3-8').css({'top':522/600*page_w,'height':60/600*page_w});
	$('.layer3 .layer3-9').css({'top':584/600*page_w,'height':60/600*page_w});
	$('.layer3 .layer3-10').css({'top':646/600*page_w,'height':60/600*page_w});
	$('.layer3 .layer3-11').css({'top':708/600*page_w,'height':60/600*page_w});
	$('.layer3 .layer3-12').css({'top':770/600*page_w,'height':60/600*page_w});
	
	$('.layer3-13').css({'font-size':24/600*page_w,'top':170/600*page_w});
	$('.layer3-14').css({'font-size':24/600*page_w,'top':230/600*page_w});
	$('.layer3-15').css({'font-size':24/600*page_w,'top':290/600*page_w});
	$('.layer3-16').css({'font-size':24/600*page_w,'top':353/600*page_w});
	$('.layer3-17').css({'font-size':24/600*page_w,'top':414/600*page_w});
	$('.layer3-18').css({'font-size':24/600*page_w,'top':480/600*page_w});
	$('.layer3-19').css({'font-size':24/600*page_w,'top':541/600*page_w});
	/*****layer4*****/
	$('.layer4-1').css({'top':70/750*page_w});
	$('.layer4-2').css({'top':66/750*page_w,'height':1020/750*page_w});
	$('.layer4-3').css({'top':270/750*page_w,'height':579/750*page_w});
	$('.layer4-4').css({'top':271/750*page_w});
	$('.layer4-5').css({'top':778/750*page_w});
	$('.layer4-6').css({'top':288/750*page_w,'font-size':30/750*page_w,'line-height':2.3/750*page_w,'width':490/750*page_w,'left':117/750*page_w});
	/*****layer5*****/
	$('.layer5-1').css({'top':70/750*page_w});
	$('.layer5-2').css({'top':164/750*page_w});
	$('.layer5-3').css({'top':200/600*page_w});
	$('.layer5-4').css({'top':300/600*page_w});
	$('.layer5-5').css({'top':400/600*page_w});
	$('.layer5-6').css({'top':500/600*page_w});
	$('.layer5-7').css({'top':200/600*page_w,'font-size':24/600*page_w});
	$('.layer5-8').css({'top':400/600*page_w,'font-size':24/600*page_w});
	/*****layer6*****/
	$('.layer6-1').css({'top':70/750*page_w});
	$('.layer6-2').css({'top':167/750*page_w});
	$('.layer6-3').css({'top':196/750*page_w});
	$('.layer6-5').css({'top':444/750*page_w});
	$('.layer6-7').css({'top':692/750*page_w});
	
	$('.layer6-4').css({'top':255/600*page_w});
	$('.layer6-6').css({'top':455/600*page_w});
	$('.layer6-8').css({'top':655/600*page_w});
	
	$('.layer6-9,.layer6-10,.layer6-11,.layer6-12').css({'width':50/750*page_w,'height':30/750*page_w,'top':230/750*page_w});
	$('.layer6-13').css({'top':233/750*page_w,'font-size':30/750*page_w});
	
	$('.layer6-14,.layer6-15,.layer6-16').css({'width':50/750*page_w,'height':30/750*page_w,'top':480/750*page_w});
	$('.layer6-23').css({'width':40/750*page_w,'height':30/750*page_w,'top':480/750*page_w});
	$('.layer6-17').css({'top':480/750*page_w,'font-size':30/750*page_w});
	
	$('.layer6-18,.layer6-19,.layer6-20,.layer6-22').css({'width':35/600*page_w,'height':30/600*page_w,'top':580/600*page_w});
	$('.layer6-21').css({'top':725/750*page_w,'font-size':30/750*page_w});
	/*****layer7*****/
	$('.layer7-2').css({'top':375/600*page_w,'left':74/600*page_w,'width':234/600*page_w});
	$('.layer7-3').css({'top':270/600*page_w,'left':250/600*page_w,'width':234/600*page_w});
	$('.layer7-4').css({'top':475/600*page_w,'left':250/600*page_w,'width':234/600*page_w});
	$('.layer7-5').css({'top':427/600*page_w,'left':255/600*page_w,'width':91/600*page_w});
	
	$('.layer7-6').css({'top':400/600*page_w,'left':120/600*page_w,'width':140/600*page_w,'height':145/600*page_w});
	$('.layer7-7').css({'top':295/600*page_w,'left':297/600*page_w,'width':140/600*page_w,'height':145/600*page_w});
	$('.layer7-8').css({'top':520/600*page_w,'left':297/600*page_w,'width':140/600*page_w,'height':145/600*page_w});
	/*****layer8*****/
	$('.layer8-2').css({'top':275/600*page_w,'left':74/600*page_w,'width':234/600*page_w});
	$('.layer8-3').css({'top':170/600*page_w,'left':250/600*page_w,'width':234/600*page_w});
	$('.layer8-4').css({'top':475/600*page_w,'left':74/600*page_w,'width':234/600*page_w});
	$('.layer8-5').css({'top':375/600*page_w,'left':250/600*page_w,'width':234/600*page_w});
	$('.layer8-6').css({'top':670/600*page_w,'left':74/600*page_w,'width':234/600*page_w});
	$('.layer8-7').css({'top':575/600*page_w,'left':250/600*page_w,'width':234/600*page_w});
	/*****layer9*****/
	$('.layer9-3').css({'top':891/750*page_w});
	/****************************************音乐****************************************/
	$('.music').css({'top':35/1029*page_h});
	var isaoto = 0;
	function stop(){
		var myVideo = document.getElementById("video");
		var myMusic = document.getElementById("music");
		
		if(!myVideo.paused){
			myVideo.pause();
			$(".music").removeClass('music_run');
		} else {
			myVideo.play();
			$(".music").addClass('music_run');
		}
	}
	function play(){
		var myVideo = document.getElementById("video");
		myVideo.play();
	}
	document.ontouchstart = function(e){
		if(isaoto ==0){
			play();
			isaoto = 1;
		}
	}
	setTimeout(play,1000);
	$(".music").click(stop);
	//touch.on(".music",'touchstart',stop);
	})
})