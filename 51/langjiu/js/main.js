// JavaScript Document
$('.navBtn').click(function(){
	if($(this).hasClass('on')){
		$(this).removeClass('on');
		$('.nav').animate({'top':'-100%'},500)
	}else{
		$(this).addClass('on');
		$('.nav').animate({'top':'0'},500)
	}
})
$('.nav li').hover(function(){
	$(this).children('dl').stop().slideToggle();
})
var swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  freeMode: true,
  mousewheel: true,
});