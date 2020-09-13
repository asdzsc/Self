/**
 * @author: xiangliang.zeng
 * @description:
 * @Date: 2017/1/4 11:38
 * @Last Modified by:   xiangliang.zeng
 */
(function(window, document) {
    var load51 = new Load51(true, onDomReady, onLoaded);
    // 类似Jquery的$(function(){});
    function onDomReady() {
        musicSwitch();
        console.log('DOM is ready');

    }
    // 当loading页面关闭时执行的函数
    function onLoaded() {
        removeTouchMove();
        console.log('Loaded');
        init();
    }

    function init() {
        // 实例化swiper对象
        var mySwiper = new Swiper('.big-sw', {
            //Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
            direction: 'vertical',
            //将hashnav设置为true，并在每个slide处增加data-hash属性，可在当前页刷新。
            hashnav: true,
            onInit: function(swiper) {
                swiperAnimateCache(swiper);
                swiperAnimate(swiper);
                $('.page-L').scrollTop(0);
            },
            onSlideChangeEnd: function(swiper) {
                swiperAnimate(swiper);
                $('.page-L').scrollTop(0);
                console.log(swiper.activeIndex);
                if (swiper.activeIndex == 0) {
                    $('.end-btn').show()
                } else {
                    $('.end-btn').hide()
                }
            }
        });


        // 引导页的enter键点击划入第二页
        $('.enter img').on('click', function(event) {
            // mySwiper.slideTo(1,1000,true);
            mySwiper.slideNext();
        });

        $(document).on('click', ".hidenav>li", function() { //nav点击滚动
            mySwiper.slideTo($(this).index(), 1000, true);
            $(this).addClass('active-push').siblings().removeClass('active-push')
        })

        $('.end-btn>div').click(function() {
                console.log(123);
                mySwiper.slideTo(1, 1000, true);
                if ($(this).attr('jid') == 2) {
                    $('.select-list2>li').eq(0).removeClass()
                    $('.select-list2>li').eq(1).addClass('active-li')
                    $('.post-list').eq(1).show().siblings('.post-list').hide()
                }
            })
            // 需要局部滚动的页面，阻止事件冒泡 -- 阻止swiper滑动
            // $('.comname').on('touchmove', function() {
            //     event.stopPropagation();
            // });
        $('.top').on('touchmove', function() {
            event.stopPropagation();
        });
        // $('.end-img').on('touchmove', function() {
        //     event.stopPropagation();
        // });

        /***************************************** 地图 ***************************************************/
        //添加公司地址位置，修改公司地址方法如下：
        // http://api.map.baidu.com/lbsapi/creatmap/index.html，该地址是百度地图生成器，
        //打开网址后，将公司地址输入，获取到横纵坐标，请“coord=25.015643,102.753885”替换为获取到的横纵坐标，title替换为公司名称
        // $('.map').click(function() {
        //     location.href = 'http://api.map.baidu.com/marker?location=31.184249,121.416137&title=延锋伟世通电子科技（上海）有限公司&content=徐汇区钦州北路1001号&output=html';
        // });
    }


    // 音乐切换
    function musicSwitch() {
        var mediaWrap = document.querySelector('.media-wrap');
        var audio = document.querySelector('#autoplay');
        var musicOn = document.querySelector('.music_on');
        var musicOff = document.querySelector('.music_off');
        audio.play();
        document.addEventListener("WeixinJSBridgeReady", function() {
            audio.play();
        }, false);
        mediaWrap.addEventListener('click', function() {
            if (audio.paused) {
                audio.play();
                mediaWrap.classList.add('on');
                musicOn.style.display = 'block';
                musicOff.style.display = 'none';
            } else {
                audio.pause();
                mediaWrap.classList.remove('on');
                musicOn.style.display = 'none';
                musicOff.style.display = 'block';
            }
        }, false);
        $('#autoplay').on('ended', function() {
            this.load();
            this.play();
        })
    }

    // 移除默认事件及阻止冒泡
    function removeDefaultEvt(e) {
        e.preventDefault();
    }
    // 移除默认document的touchmove，针对苹果手机
    function removeTouchMove() {
        document.body.addEventListener('touchmove', removeDefaultEvt, false);
    }
})(window, document);

var arr = [
    { "postName": "顺丰DHL2021管培生-上海", "href": "https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=4906204&jobid=125137491" },
    { "postName": "顺丰DHL2021管培生-北京", "href": "https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=4906204&jobid=125139262" },
    { "postName": "顺丰DHL2021管培生-深圳", "href": "https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=4906204&jobid=125138608" },
    { "postName": "顺丰DHL2021管培生-广州", "href": "https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=4906204&jobid=125138503" },
    { "postName": "顺丰DHL2021管培生-东莞", "href": "https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=4906204&jobid=125138752" },
    { "postName": "顺丰DHL2021管培生-苏州", "href": "https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=4906204&jobid=125137780" },
    { "postName": "顺丰DHL2021管培生-杭州", "href": "https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=4906204&jobid=125137654" },
    { "postName": "顺丰DHL2021管培生-沈阳", "href": "https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=4906204&jobid=125139350" },
    { "postName": "顺丰DHL2021管培生-成都", "href": "https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=4906204&jobid=125138862" },
    { "postName": "顺丰DHL2021管培生-重庆", "href": "https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=4906204&jobid=125138967" },
    { "postName": "顺丰DHL2021管培生-武汉", "href": "https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=4906204&jobid=125139055" },
    { "postName": "顺丰DHL2021管培生-南宁", "href": "https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=4906204&jobid=125139154" },
    { "postName": "顺丰DHL2021管培生-合肥", "href": "https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=4906204&jobid=125138335" },

]

var arr1 = [
    { "postName": "IT实习生-上海", "href": "https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=4906204&jobid=125140912" },
    { "postName": "采购实习生-上海", "href": "https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=4906204&jobid=125139828" },
    { "postName": "物流产品实习生-上海", "href": "https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=4906204&jobid=125139466" },
    { "postName": "业务发展实习生-上海", "href": "https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=4906204&jobid=125135851" },
    { "postName": "财务实习生-上海", "href": "https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=4906204&jobid=125327477" },
    { "postName": "HR实习生-地区服务-上海", "href": "https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=4906204&jobid=125139724" },
    { "postName": "HR实习生-共享服务-上海", "href": "https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=4906204&jobid=125139633" },
    { "postName": "HR实习生-培训-上海", "href": "https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=4906204&jobid=125139550" },
    { "postName": "站点数字化实习生-深圳", "href": "https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=4906204&jobid=125140754" },
    { "postName": "仓储运营实习生-操作盘点-上海", "href": "https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=4906204&jobid=125140310" },
    { "postName": "仓储运营实习生-系统操作-上海", "href": "https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=4906204&jobid=125140430" },
    { "postName": "仓储运营实习生-运营管理-上海", "href": "https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=4906204&jobid=125140670" },
    { "postName": "仓储运营实习生-操作改进-北京", "href": "https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=4906204&jobid=125140231" },
    { "postName": "仓储运营实习生-订单管理-北京", "href": "https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=4906204&jobid=125140012" },
    { "postName": "仓储运营实习生-操作改进-东莞", "href": "https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=4906204&jobid=125140521" },
    { "postName": "仓储运营实习生-系统操作-东莞", "href": "https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=4906204&jobid=125140845" },
    { "postName": "仓储运营实习生-库存管理-东莞", "href": "https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=4906204&jobid=125140591" },
    { "postName": "仓储运营实习生-数据处理-南京", "href": "https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=4906204&jobid=125139904" },
    { "postName": "仓储运营实习生-订单管理-青岛", "href": "https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=4906204&jobid=125140097" },

]



// 渲染
function   html(arr,  dom)  {    
    var str = ""    
    arr.forEach(function(v,  i)  {
        str  +=  
            '<li>' +
            '<p>' + v.postName + '</p>' +
            '<a target="blank" class="apply-btn" href="' + v.href + '">立即申请</a>' +
            '</li>'
    })

    $(dom).html(str)
}
html(arr, '.post-list1') //管培
html(arr1, '.post-list2') //实习


// 切换
function   effect(dom,  dom1,  active)  {     
    $(dom).click(function()  {    
        console.log(123)    
        $(this).addClass(active).siblings().removeClass(active) 
        var index  =  $(this).index() 
        console.log(index);                 
        $(dom1).eq(index).show().siblings(dom1).hide()         
    })
}
effect('.s4_1>li', '.wap-box', 'active-li')
effect('.selct-show1>li', '.showhide-box>li', 'active-show')
effect('.select-list2>li', '.post-list', 'active-li')
effect('.select-list3>li', '.show', 'active-li')


//微站导航切换
// function wei(navli, main, active) {
//     $(document).on("click", navli, function() {
//         var index = $(this).index()
//         $(this).addClass(active).siblings().removeClass(active)
//         $(navli).each(function(i, v) {
//             $(v).children().attr('src', './images/i' + i + '.png')
//         })
//         $(this).children().attr('src', './images/i' + index + '_on.png')
//         $(main).eq(index).show().siblings('.comname').hide()
//     })
// }


// 轮播-------首页
var mySwiper = new Swiper('.sw1', {
    autoplay: 2000, //可选选项，自动滑动
    pagination: '.pg1',
    // paginationType: 'fraction',
    paginationBulletRender: function(swiper, index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
    }
})

// 轮播-------------s4
var mySwiper1 = new Swiper('.sw2', {
    autoplay: 2000, //可选选项，自动滑动
    effect: 'coverflow',
    pagination: '.pg2',
    slidesPerView: 1.5,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 60,
        depth: 0,
        modifier: 1,
        slideShadows: true
    },
    loop: true
})

// nav---------遮盖层
$('.push1').click(function() {
    $('.coverUp').show()
})
$('.push2').click(function() {
    $('.coverUp').hide()
})
$('.push-left').click(function() {
    $('.coverUp').hide()
})