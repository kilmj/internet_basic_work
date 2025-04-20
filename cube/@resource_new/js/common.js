var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;

$(function(){

	// 전체메뉴goo
	$('.all_menu').bind('click',function(){
		$('.all_menu_area').fadeIn();
		$("body").css({overflow:'hidden'}).bind('touchmove', function(e){e.preventDefault()});

	});

	$('span.btn	.all_menu_close').bind('click',function(){
		$('.all_menu_area').fadeOut();
		$("body").css({overflow:'scroll'}).unbind('touchmove');

	});




	// head search
	
		
	$('.header_search').bind('click',function(){
		$('.h_search_box').fadeIn();
		$('.all_box').show();
	});
	$('.search_act').bind('click',function(){
		$('.h_search_box').fadeOut();
		$('.all_box').hide();
	});
	
	$('.all_box').bind('click',function(){
		$('.h_search_box').fadeOut();
		$('.all_box').hide();
	});


	//FAQ
	$("ul.faqList li dl dt a").each(function(){
		$(this).click(function(){
			 if (!$(this).parent().parent("dl").hasClass("current")) {
				$("ul.faqList li dl").removeClass("current");
				$("ul.faqList li dl dd").hide();
				$(this).parent().parent("dl").addClass("current");
				$(this).parent().siblings("dd").show();
			} else {
				$(this).parent().parent("dl").removeClass("current");
				$(this).parent().siblings("dd").hide();
			}
		});
	});



});
