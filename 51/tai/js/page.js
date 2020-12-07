var isTouch = Modernizr.touch,
	isMobile = false,//区分移动端与PC端
	mobile = false,//区分手机端与平板
	w_width = 0,
	w_height = 0,
	bannerImgh=638,
	navItem = 0,
	h_height=0,
	roll=0,
	sTop=150,
	produs=0,
	ST = 0;
	
var _mousemove;
var _click;
var _mousedown;
var _mouseup;

//移动端事件和PC事件的切换
if (Modernizr.touch) {
    _mousemove = "touchmove";
    _click = "touchend";
    _mousedown = "touchstart";
    _mouseup = "touchend";
} else {
    _mousemove = "mousemove";
    _click = "click";
    _mousedown = "mousedown";
    _mouseup = "mouseup";
};

function pageBox() {
    w_width = jQuery(window).width();
    w_height = jQuery(window).height();

	//设置移动端参数
    if (w_width <= 1024) {
        isMobile = true;
    } else if (w_width > 1024) {
        isMobile = false;
    };
	//区分手机端和平板
    if (w_width <= 640) {
        mobile = true;
    } else if (w_width > 640) {
        mobile = false;
    };
    if(isMobile){
    	$("body").find('.article-block').removeClass('article-block');
	}
}
pageBox();
jQuery(window).resize(function () {
    pageBox();
});




//手机导航
var navigatie = {
	init: function() {
		this.setnav();
	},
	setnav: function() {
		$('.menubtn').on('click', function(e) {
			e.stopPropagation();
			$(this).toggleClass('active');
			$(".navigate").stop().fadeToggle();
		});
		

		$(".navigeli >li >a").bind("click", function (e) {
			var $navMobile=jQuery(".navigate"),
				$navA=$navMobile.find(".navigeli >li >a"),
				$mSubnav=$navMobile.find(".menulist");
			var hjcur = $(this);
			var hjDD = $(this).parents("li");
			if (hjDD.find(".menulist").size() > 0) {
				if (hjDD.hasClass("active")) {
					$(".menubtn").removeClass('active');
					$(".navigate").fadeOut('show');
					hjDD.find(".menulist").stop(false, false).slideUp();
					hjDD.removeClass("active");
				} else {
					$navA.parents('li').removeClass("active");
					$mSubnav.stop(false, false).slideUp();
					hjDD.find(".menulist").stop(false, false).slideDown();
					hjDD.addClass("active");
					e.preventDefault();
				}
			}
		});
	}
};


navigatie.setnav();


