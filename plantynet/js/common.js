$(document).ready(function() {
	var $window = $(window);

	var $menuList = $('.top_menu .content .menu_list li');
	var $menuDraw = $('.menu_draw');
	var $top_menu = $('.top_menu');

	if($top_menu.hasClass('sub')){
		$top_menu.css('background','#74bf45');
	}

	$top_menu.hover(function(){
		$top_menu.css('background','#74bf45');
	},function(){
		if($top_menu.hasClass('sub')){
			$top_menu.css('background','#74bf45');
		}else{
			$top_menu.css('background','transparent');
		}
		
	});

	$menuList.hover(function(){
		$menuDraw.stop().show();
	},function(){
		$menuDraw.stop().hide();
	});

	$menuDraw.hover(function(){
		$menuDraw.stop().show();
		$top_menu.css('background','#74bf45');
	},function(){
		$menuDraw.stop().hide();
		if($top_menu.hasClass('sub')){
			$top_menu.css('background','#74bf45');
		}else{
			$top_menu.css('background','transparent');
		}
	});

	$menuList.click(function(){
		$(this).addClass('on').siblings().removeClass('on');
	});

	//left menu
	var $list = $(".right_open ul .list");
	var $list_detail = $(".right_open ul div");

	$list.click(function(){
		if($(this).next().css('display')=='none'){
			$(this).next().slideDown(300);
			$(this).css('background-image','url("images/arrowU.png")');
		}else {
			$(this).next().slideUp(300);
			$(this).css('background-image','url("images/arrowD.png")');
		}
	});


	var $wrap = $('#wrap');
	var $Mmenu_btn = $('.Mmenu_btn');
	var $right_open = $('.right_open');
	var $left_close = $('.left_close');
	var $closebox = $('.closebox img');

	$Mmenu_btn.click(function(){
		$right_open.css('right','0');
		$left_close.fadeIn(300);
		$('body').on('scroll touchmove mousewheel', function(event) {
			event.preventDefault();
			event.stopPropagation();
			return false;
		});
	});
	$left_close.click(function(){
		$right_open.css('right','-300px');
		$left_close.fadeOut(0);
		$('body').off('scroll touchmove mousewheel');
	});
	$closebox.click(function(){
		$right_open.css('right','-300px');
		$left_close.fadeOut(0);
		$('body').off('scroll touchmove mousewheel');
	});

	var $logobox = $(".logo_box ul li a");
	var $mlang = $(".mlang a");

	$logobox.click(function(){
		if(!$(this).hasClass('on')){
			$logobox.removeClass('on');
			$(this).addClass('on');
		}
	});


	$mlang.click(function(){
		$(this).addClass('on').siblings().removeClass('on');
	});
	
	//PC 탑메뉴 수정
	var $box_list_d = $('.box_list_d li a');
	$box_list_d.each(function(idx,item){
		$(item).click(function(){
			if(idx<3)
				window.location.href = "sub2_1.html?idx=" + (idx+1);
			else
				window.location.href = "sub2_2.html?idx=" + (idx+1);
		});
	});
	
	//M 탑메뉴 수정
	var $list_detail_2 = $('.list_detail_2 ul li a');
	$list_detail_2.each(function(idx,item){
		$(item).click(function(){
			if(idx<3)
				window.location.href = "sub2_1.html?idx=" + (idx+1);
			else
				window.location.href = "sub2_2.html?idx=" + (idx+1);
		});
	});
	
	if(window.location.href.match('sub2')){
		var num = window.location.href.split('=');
		var topmenu = $(".top_menu ").height()-1;
		
		if (matchMedia("screen and (max-width: 991px)").matches) {
			topmenu = $(".Mtop_menu ").height()-1;
		} else {
			topmenu = $(".top_menu ").height()-1;
		}
		
		if(num[1]==3){
			var offset = $(".section-02").offset();
		}else if (num[1]==5){
			var offset = $(".section-01").offset();
		}else if (num[1]==6){
			var offset = $(".section-02").offset();
		}else if (num[1]==7){
			var offset = $(".section-03").offset();
		}else if (num[1]==8){
			var offset = $(".section-04").offset();
		}
		if(!offset) {
			return false;
		}
		
        //$('html, body').animate({scrollTop : offset.top-topmenu}, 0);
        $('html, body').scrollTop(offset.top-topmenu);
	}
	
	$('.slideH').hover(function(){
		$(this).next().stop().slideDown();
	},function(){
		$(this).next().stop().slideUp();
	});
	
	$('.main_slideD').hover(function(){
		$(this).stop().slideDown();
	},function(){
		$(this).stop().slideUp();
	});
});


