$(document).ready(function() {
	var $window = $(window);
	var $body = $("body");
	

	var $bot_menu = $('.bot_menu ul li');

	$bot_menu.click(function(){
		var num = this.id.charAt(this.id.length - 1);
		swiper4.slideTo(num,1200);
	});

	var $next_slide = $('.next_slide');

	$next_slide.click(function(){
		var num = this.id.charAt(this.id.length - 1);
		swiper2.slideTo(num,500);
	});
	/*
	var $indexR = $(".indexR ul li");

	var idxPrev = 0;
	var idxNext = 0;

	$indexR.each(function(){
		if($(this).hasClass('on')){
			idxPrev = this.id.charAt(this.id.length - 1);
		}
	});*/

	/*$body.on("mousewheel DOMMouseScroll", function (e) {
		console.log(e.originalEvent.wheelDelta);
		if(e.originalEvent.wheelDelta>0){
			if(idxPrev>1){
				idxPrev = +idxNext - 1;
				console.log(idxPrev);
				console.log(idxNext);
				TweenMax.fromTo($("#bg"+idxPrev), 1.5, {top:'-'+wrapH,ease:Cubic.easeInOut}, {top:'0px',ease:Cubic.easeInOut});
				TweenMax.fromTo($("#bg"+idxNext), 1.5, {top:'0px',ease:Cubic.easeInOut}, {top:wrapH,ease:Cubic.easeInOut});

				$indexR.each(function(){
					$("#idx"+idxPrev).addClass("on");
					$("#idx"+idxNext).removeClass("on");
				})
				idxNext--;
			}else{
				return false;
			}
		}else{
			if(idxPrev<5){
				idxNext = +idxPrev + 1;
				console.log(idxPrev);
				console.log(idxNext);
				TweenMax.fromTo($("#bg"+idxPrev), 1.5, {top:'0px',ease:Cubic.easeInOut}, {top:'-'+wrapH,ease:Cubic.easeInOut});
				TweenMax.fromTo($("#bg"+idxNext), 1.5, {top:wrapH,ease:Cubic.easeInOut}, {top:'0px',ease:Cubic.easeInOut});
				
				$indexR.each(function(){
					$("#idx"+idxNext).addClass("on");
					$("#idx"+idxPrev).removeClass("on");
				});
				idxPrev++;
			}else{
				return false;
			}
		}
	});*/

	/*var $bot_menu = $(".bot_menu ul li");

	$bot_menu.click(function(){
		if(this.id=="sub1"){
			idxPrev = 1;
			idxNext = 2;
			TweenMax.fromTo($("#bg1"), 1.5, {top:'0px',ease:Cubic.easeInOut}, {top:'-'+wrapH,ease:Cubic.easeInOut});
			TweenMax.fromTo($("#bg"+idxNext), 1.5, {top:wrapH,ease:Cubic.easeInOut}, {top:'0px',ease:Cubic.easeInOut});
		}else if(this.id=="sub2"){
			idxPrev = 2;
			idxNext = 3;
			TweenMax.fromTo($("#bg1"), 1.5, {top:'0px',ease:Cubic.easeInOut}, {top:'-'+wrapH,ease:Cubic.easeInOut});
			TweenMax.fromTo($("#bg"+idxNext), 1.5, {top:wrapH,ease:Cubic.easeInOut}, {top:'0px',ease:Cubic.easeInOut});
		}else if(this.id=="sub3"){
			idxPrev = 3;
			idxNext = 4;
			TweenMax.fromTo($("#bg1"), 1.5, {top:'0px',ease:Cubic.easeInOut}, {top:'-'+wrapH,ease:Cubic.easeInOut});
			TweenMax.fromTo($("#bg"+idxNext), 1.5, {top:wrapH,ease:Cubic.easeInOut}, {top:'0px',ease:Cubic.easeInOut});
		}else if(this.id=="sub4"){
			idxPrev = 4;
			idxNext = 5;
			TweenMax.fromTo($("#bg1"), 1.5, {top:'0px',ease:Cubic.easeInOut}, {top:'-'+wrapH,ease:Cubic.easeInOut});
			TweenMax.fromTo($("#bg"+idxNext), 1.5, {top:wrapH,ease:Cubic.easeInOut}, {top:'0px',ease:Cubic.easeInOut});
		}
		$("#idx1").removeClass("on");
		$("#idx"+idxNext).addClass("on");
		$("#idx"+idxPrev).removeClass("on");
		idxPrev = idxNext;
	});*/

	
	/*
	$indexR.click(function(){
		
		idxNext = this.id.charAt(this.id.length - 1);
		
		console.log(idxPrev);
		console.log(idxNext);

		if(this.id=='idx1'){
			if(!$(this).hasClass('on')){
				TweenMax.fromTo($("#bg1"), 1.5, {top:'-'+wrapH,ease:Cubic.easeInOut}, {top:'0px',ease:Cubic.easeInOut});
				TweenMax.fromTo($("#bg"+idxPrev), 1.5, {top:'0px',ease:Cubic.easeInOut}, {top:wrapH,ease:Cubic.easeInOut});
			}
		}else if(this.id=='idx2'){
			idxR_swiper();
		}else if(this.id=='idx3'){
			idxR_swiper();
		}else if(this.id=='idx4'){
			idxR_swiper();
		}else if(this.id=='idx5'){
			idxR_swiper();
		}
		idxPrev = idxNext;
		$(this).addClass('on').siblings().removeClass('on');
	});

	function idxR_swiper(){
		if(idxPrev>idxNext){
			TweenMax.fromTo($("#bg"+idxNext), 1.5, {top:'-'+wrapH,ease:Cubic.easeInOut}, {top:'0px',ease:Cubic.easeInOut});
			TweenMax.fromTo($("#bg"+idxPrev), 1.5, {top:'0px',ease:Cubic.easeInOut}, {top:wrapH,ease:Cubic.easeInOut});
		}else{
			TweenMax.to($("#bg"+idxPrev),1.5,{top:'-'+wrapH,ease:Cubic.easeInOut});
			TweenMax.to($("#bg"+idxNext),1.5,{top:'0px',ease:Cubic.easeInOut});
		}
	};
	
	var $main_txtbox = $('.main_txtbox');
	var $main_txtbox2 = $('.main_txtbox2');*/
	
	/*var flag = true;
	setInterval(function() {
		
		
		if(flag){
			console.log('true');
			$main_txtbox.hide();
			$main_txtbox2.show();
			flag = false;
		}else {
			console.log('false');
			$main_txtbox.show();
			$main_txtbox2.hide();
			flag = true;
		}
		
	}, 3000); */

	// background slide
	/*var $bg1 = $('#bg1');
	$bg1.vegas({
		slides: [
			{ src: './images/mainbg_1.jpg' },
			{ src: './images/mainbg_2.jpg' }
		]
	});*/





});

//bg_PC
var swiper1 = new Swiper('.swiper1', {
	speed:1500,
	autoplay: 5000,
	autoplayDisableOnInteraction: false,
	loop: true,
	effect:"fade"//slide,fade,cube,coverflow,flip
});

//Mobile 메인
var swiper2 = new Swiper('.swiper2', {
	pagination: '.swiper-pagination-m',
	loop: true,
	direction: 'vertical',
	loop:false,
	paginationClickable: true,
	effect:"slide",//slide,fade,cube,coverflow,flip
	paginationBulletRender: function (obj, index,className) {
		return '<div class="' + className + '"></div>';
	}
});

//bg_M
var swiper3 = new Swiper('.swiper3', {
	speed:1500,
	autoplay: 5000,
	autoplayDisableOnInteraction: false,
	loop: true,
	effect:"fade"//slide,fade,cube,coverflow,flip
});

var indextxt = ['index','유해콘텐츠 차단','비업무 트래픽 차단','매장 배경음악','디지털사이니지&광고'];
//PC 메인 
var swiper4 = new Swiper('.swiper4', {
	pagination: '.swiper-pagination-pc',
	direction: 'vertical',
	speed:1200,
	slidesPerView: 1,
	paginationClickable: true,
	spaceBetween: 0,
	mousewheelControl: true,
	effect:"slide",//slide,fade,cube,coverflow,flip
	paginationBulletRender: function (obj, index,className) {
		return '<div class="' + className + '">'+indextxt[index]+'<div class="circle"></div></div>';
	}
});