$('.job_cont li .slide').click(function () {

    if ($(this).find('.name').attr("src") == "images/open.png") {

        $(this).find('.name').attr("src", "images/close.png")

    } else {

        $(this).find('.name').attr("src", "images/open.png")

    }

    $(this).parent().next().slideToggle();

});
$(".nav li").click(function () {
    $(".nav li").eq($(this).index()).addClass("active").siblings().removeClass('active');
    $(".nav_cont li").hide().eq($(this).index()).show();
});