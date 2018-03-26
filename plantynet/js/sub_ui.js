$(document).ready(function() {
	var $window = $(window);
	var $body = $("body");
	

	if($('.mapContents').length){
		//구글 지도
		var myLatlng = new google.maps.LatLng(37.402070, 127.106137); //위치값 = 위도 & 경도
		var myOptions = {
			zoom: 16,
			center: myLatlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

		var marker = new google.maps.Marker({
			position:myLatlng,
			map:map,
			title:"plantynet"
		});
	}

	/*var $bizbtn_box = $('.bizbtn_box .btn');
	$bizbtn_box.click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		if(this.id == 'btn1'){
			$('.tit1,.cont1').show();
			$('.tit2,.cont2').hide();
		}else if(this.id == 'btn2'){
			$('.tit1,.cont1').hide();
			$('.tit2,.cont2').show();
		}
	});*/

	$window.resize(function(){
		var $wrap = $('.wrap').height();
		var $top_menu = $('.top_menu').height();
		var $Mtop_menu = $('.Mtop_menu').height();
		var $contentWrap1 = $('.contentWrap1').height();
		var $footer = $('.footer').height();
		var $Mfooter = $('.Mfooter').height();
		var $contentWrap2 = $('.contentWrap2');
		var con2height_pc = $wrap-$top_menu-$contentWrap1-$footer;
		var con2height_pad = $wrap-$Mtop_menu-$contentWrap1-$footer;
		var con2height_m = $wrap-$Mtop_menu-$contentWrap1-$Mfooter;

		if (window.matchMedia('(min-width: 320px) and (max-width: 768px)').matches) {
			$contentWrap2.css('min-height',con2height_m);
			var $vrboxH = $wrap - $Mtop_menu;
			$('.vrBox').css('height',$vrboxH);
		} else if(window.matchMedia('(min-width: 769px) and (max-width: 991px)').matches){
			$contentWrap2.css('min-height',con2height_pad);
			var $vrboxH = $wrap - $Mtop_menu;
			$('.vrBox').css('height',$vrboxH);
		} else {
			$contentWrap2.css('min-height',con2height_pc);
			var $vrboxH = $wrap - $top_menu;
			$('.vrBox').css('height',$vrboxH);
		}
	}).resize();

	var $menu = $('.nav .m');
	var $menu2 = $('.nav .m2');
	var $contents = $('.scroll');
	var $contents2 = $('.scroll2');
	var $doc = $('html, body');

	$menu.on('click','a',function(e){
		var $top_menu = $('.top_menu').height();
		var $Mtop_menu = $('.Mtop_menu').height();
		var $target = $(this).parent();
		var idx = $target.index();
		var section = $contents.eq(idx);
		if (matchMedia("screen and (max-width: 991px)").matches) {
			var offsetTop = section.offset().top-$Mtop_menu;
		} else {
			var offsetTop = section.offset().top-$top_menu;
		}
		
		$doc.stop()
			.animate({
				scrollTop:offsetTop
			},500);
		return false;
	});

	$menu2.on('click','a',function(e){
		var $top_menu = $('.top_menu').height();
		var $Mtop_menu = $('.Mtop_menu').height();
		var $target = $(this).parent();
		var idx = $target.index();
		var section = $contents2.eq(idx);
		if (matchMedia("screen and (max-width: 991px)").matches) {
			var offsetTop = section.offset().top-$Mtop_menu;
		} else {
			var offsetTop = section.offset().top-$top_menu;
		}
		
		$doc.stop()
			.animate({
				scrollTop:offsetTop
			},500);
		return false;
	});

	var $Mmenu = $('.Mnav .m');
	var $Mmenu2 = $('.Mnav .m2');

	$Mmenu.on('click','a',function(e){
		var $top_menu = $('.top_menu').height();
		var $Mtop_menu = $('.Mtop_menu').height();
		var $target = $(this).parent();
		var idx = $target.index();
		var section = $contents.eq(idx);
		if (matchMedia("screen and (max-width: 991px)").matches) {
			var offsetTop = section.offset().top-$Mtop_menu+1;
		} else {
			var offsetTop = section.offset().top-$top_menu;
		}
		
		$doc.stop()
			.animate({
				scrollTop:offsetTop
			},500);
		return false;
	});

	$Mmenu2.on('click','a',function(e){
		var $top_menu = $('.top_menu').height();
		var $Mtop_menu = $('.Mtop_menu').height();
		var $target = $(this).parent();
		var idx = $target.index();
		var section = $contents2.eq(idx);
		if (matchMedia("screen and (max-width: 991px)").matches) {
			var offsetTop = section.offset().top-$Mtop_menu+1;
		} else {
			var offsetTop = section.offset().top-$top_menu;
		}
		
		$doc.stop()
			.animate({
				scrollTop:offsetTop
			},500);
		return false;
	});

	$(window).scroll(function(){
		var $top_menu = $('.top_menu').height();
		var $Mtop_menu = $('.Mtop_menu').height();
		var scltop = $(window).scrollTop();
		var $vrH = $('.vrBox').height();
		$.each($contents, function(idx, item){
			var $target = $contents.eq(idx);
			var i = $target.index();
			if (matchMedia("screen and (max-width: 991px)").matches) {
				var targetTop = parseInt($target.offset().top-$Mtop_menu);
			} else {
				var targetTop = parseInt($target.offset().top-$top_menu);
			}
			
			if (targetTop <= scltop) {
				$menu.children().removeClass('active');
				$menu.children().eq(idx).addClass('active');
			}
			if (!($vrH-2 <= scltop)) {
				$menu.children().removeClass('active');
			}
		})
	});

	$(window).scroll(function(){
		var $top_menu = $('.top_menu').height();
		var $Mtop_menu = $('.Mtop_menu').height();
		var scltop = $(window).scrollTop();
		$.each($contents2, function(idx, item){
			var $target = $contents2.eq(idx);
			var i = $target.index();
			if (matchMedia("screen and (max-width: 991px)").matches) {
				var targetTop = parseInt($target.offset().top-$Mtop_menu);
			} else {
				var targetTop = parseInt($target.offset().top-$top_menu);
			}
			
			if (targetTop <= scltop) {
				$menu2.children().removeClass('active');
				$menu2.children().eq(idx).addClass('active');
			}
		})
	});
		

	// go-top
	$(".go-top").hide();
	$(function () {
		$window.scroll(function () {
			if ($(this).scrollTop() > 120) {
				$('.go-top').fadeIn();
			} else {
				$('.go-top').fadeOut();
			}
		});
				
		$('.go-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 450); // 탑 이동 스크롤 속도
			return false;
		});
	});

	//vr 화면보기
	var $view_btn = $('.view_btn');
	var $viewframe_close = $('.viewframe_close');
	var $vr_viewmore = $('.vr_viewmore');
	$view_btn.click(function(){
		$vr_viewmore.fadeIn();
		var cid = $(this).attr('id');
		$('.viewframe').attr('src','https://www.plantynet.com/kor/vr/plantynetvr_'+cid+'/plantynetvr_'+cid+'.html')
		$('.viewframe').show();

		$('body').on('scroll touchmove mousewheel', function(event) {
			event.preventDefault();
			event.stopPropagation();
			return false;
		});

	});

	$viewframe_close.click(function(){
		$('body').off('scroll touchmove mousewheel');
		$('.viewframe').hide();
		$vr_viewmore.fadeOut();
		$('.viewframe').attr('src','');
	});

	var $ircont = $('.ircont ul li');
	$ircont.click(function(){
		$ircont.removeClass('on');
		$(this).addClass('on');
		if($(this).hasClass('ir_btn1')){
			$('.ir_2').hide();
			$('.ir_1').show();
		}else if($(this).hasClass('ir_btn2')){
			$('.ir_1').hide();
			$('.ir_2').show();
		};
	});

	$(".wine_btn").click(function(){
		alert("준비중입니다.")
	});

});

function setIFrameHeight(obj){
	if(obj.contentDocument){
		obj.height = obj.contentDocument.body.offsetHeight + 40;
	} else {
		obj.height = obj.contentWindow.document.body.scrollHeight;
	}
}
//onLoad="setIFrameHeight(this)"

//모바일 메뉴 현재 페이지 영역 오픈
(function(){
	var $container = $('.container');
	var classname = $container.attr('class').split('container sub');
	var cnum = classname[1];
	$('.list_detail_'+cnum).show();
	$('.list_'+cnum).css('background-image','url("./images/arrowU.png")');
})();

window.onload = function () {
	$('.loading').hide();
}
