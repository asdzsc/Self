$(function () {
    // pagescrolling();//页面滚动内容元素动画特效
    goToTop(); //回到顶部
    // fluctuation();//节流防抖
    map(); //腾讯地图
    // lb();// 3D轮播
    // webshare();//网页分享
    // wxshare();//微信分享

    var jobData = [{
            "name": "管培生",
            "value": "顺丰DHL2021管培生-上海",
            "city": "上海",
            "type": "营运部",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=125137491&ctmid=4906204"
        },
        {
            "name": "管培生",
            "value": "顺丰DHL2021管培生-北京",
            "city": "北京",
            "type": "营运部",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=125139262&ctmid=4906204"
        },
        {
            "name": "管培生",
            "value": "顺丰DHL2021管培生-深圳",
            "city": "深圳",
            "type": "营运部",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=125138608&ctmid=4906204"
        },
        {
            "name": "管培生",
            "value": "顺丰DHL2021管培生-广州",
            "city": "广州",
            "type": "营运部",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=125138503&ctmid=4906204"
        },
        {
            "name": "管培生",
            "value": "顺丰DHL2021管培生-东莞",
            "city": "东莞",
            "type": "营运部",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=125138752&ctmid=4906204"
        },
        {
            "name": "管培生",
            "value": "顺丰DHL2021管培生-苏州",
            "city": "苏州",
            "type": "营运部",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=125137780&ctmid=4906204"
        },
        {
            "name": "管培生",
            "value": "顺丰DHL2021管培生-杭州",
            "city": "杭州",
            "type": "营运部",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=125137654&ctmid=4906204"
        },
        {
            "name": "管培生",
            "value": "顺丰DHL2021管培生-沈阳",
            "city": "沈阳",
            "type": "营运部",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=125139350&ctmid=4906204"
        },
        {
            "name": "管培生",
            "value": "顺丰DHL2021管培生-成都",
            "city": "成都",
            "type": "营运部",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=125138862&ctmid=4906204"
        },
        {
            "name": "管培生",
            "value": "顺丰DHL2021管培生-重庆",
            "city": "重庆",
            "type": "营运部",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=125138967&ctmid=4906204"
        },
        {
            "name": "管培生",
            "value": "顺丰DHL2021管培生-武汉",
            "city": "武汉",
            "type": "营运部",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=125139055&ctmid=4906204"
        },
        {
            "name": "管培生",
            "value": "顺丰DHL2021管培生-南宁",
            "city": "南宁",
            "type": "营运部",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=125139154&ctmid=4906204"
        },
        {
            "name": "管培生",
            "value": "顺丰DHL2021管培生-合肥",
            "city": "合肥",
            "type": "营运部",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=125138335&ctmid=4906204"
        },
        {
            "name": "实习生",
            "value": "IT实习生-上海",
            "city": "上海",
            "type": "信息技术部",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=125140912&ctmid=4906204"
        },
        {
            "name": "实习生",
            "value": "采购实习生-上海",
            "city": "上海",
            "type": "采购部",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=125139828&ctmid=4906204"
        },
        {
            "name": "实习生",
            "value": "物流产品实习生-上海",
            "city": "上海",
            "type": "产品部",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=125139466&ctmid=4906204"
        },
        {
            "name": "实习生",
            "value": "业务发展实习生-上海",
            "city": "上海",
            "type": "业务发展部",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=125135851&ctmid=4906204"
        },
        {
            "name": "实习生",
            "value": "财务实习生-上海",
            "city": "上海",
            "type": "业务发展部",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=125327477&ctmid=4906204"
        },
        {
            "name": "实习生",
            "value": "HR实习生-地区服务-上海",
            "city": "上海",
            "type": "人力资源部",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=125139724&ctmid=4906204"
        },
        {
            "name": "实习生",
            "value": "HR实习生-共享服务-上海",
            "city": "上海",
            "type": "人力资源部",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=125139633&ctmid=4906204"
        },
        {
            "name": "实习生",
            "value": "HR实习生-培训-上海",
            "city": "上海",
            "type": "人力资源部",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=125139550&ctmid=4906204"
        },
        {
            "name": "实习生",
            "value": "站点数字化实习生-深圳",
            "city": "深圳",
            "type": "卓越营运部",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=125140754&ctmid=4906204"
        },
        {
            "name": "实习生",
            "value": "仓储运营实习生-操作盘点-上海",
            "city": "上海",
            "type": "营运部",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=125140310&ctmid=4906204"
        },
        {
            "name": "实习生",
            "value": "仓储运营实习生-系统操作-上海",
            "city": "上海",
            "type": "营运部",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=125140430&ctmid=4906204"
        },
        {
            "name": "实习生",
            "value": "仓储运营实习生-运营管理-上海",
            "city": "上海",
            "type": "营运部",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=125140670&ctmid=4906204"
        },

        {
            "name": "实习生",
            "value": "仓储运营实习生-操作改进-北京",
            "city": "北京",
            "type": "营运部",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=125140231&ctmid=4906204"
        },
        {
            "name": "实习生",
            "value": "仓储运营实习生-订单管理-北京",
            "city": "北京",
            "type": "营运部",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=125140012&ctmid=4906204"
        },
        {
            "name": "实习生",
            "value": "仓储运营实习生-操作改进-东莞",
            "city": "东莞",
            "type": "营运部",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=125140521&ctmid=4906204"
        },
        {
            "name": "实习生",
            "value": "仓储运营实习生-系统操作-东莞",
            "city": "东莞",
            "type": "营运部",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=125140845&ctmid=4906204"
        },
        {
            "name": "实习生",
            "value": "仓储运营实习生-库存管理-东莞",
            "city": "东莞",
            "type": "营运部",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=125140591&ctmid=4906204"
        },
        {
            "name": "实习生",
            "value": "仓储运营实习生-数据处理-南京",
            "city": "南京",
            "type": "营运部",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=125139904&ctmid=4906204"
        },
        {
            "name": "实习生",
            "value": "仓储运营实习生-订单管理-青岛",
            "city": "青岛",
            "type": "营运部",
            "link": "http://xyz.51job.com/external/apply.aspx?jobid=125140097&ctmid=4906204"
        },
    ];

    attr();
    //职位列表渲染
    function attr() {
        var html = '';
        $.each(jobData, function () {
            if (this.name == $('.target').text().trim()) {
                html += '<div class="postItem clearfix">'
                html += '<p>' + this.value + '</p>'
                html += '<div> <img src="images/postPic.png" alt=""></div>'
                html += '<a class="link" href="' + this.link + '">立即申请</a>'
                html += '</div>'
            }
        });
        $('.postVessel').html(html);
    }

    $('.typeBox div').on('click', function () {
        $(this).find('p').addClass('target').parent().siblings().find('p').removeClass('target');
        attr();
    })

    //导航栏hover效果
    $('.menu p').mouseenter(function () {
        $(this).addClass('goal').siblings().removeClass('goal');
    });
    $('.menu').mouseleave(function () {
        $(this).find('p').eq(0).addClass('goal').siblings().removeClass('goal');
    });

    //首页banner下滑效果
    $('.slide').on('click', function () {
        var txt = $(this).find('p').text().trim();
        console.log(txt);
        if (txt == '向下滑动') {
            $(".main").animate({
                marginTop: "-80px",
            }, 500);
            $(this).find('img').removeClass('tea_arrowDown').addClass('tea_arrowUp');
            // $(this).find('img').attr('src', 'images/slideUp.png');
            $(this).find('p').text('向上滑动');
        } else if ((txt == '向上滑动')) {
            $(".main").animate({
                marginTop: "-17%",
            }, 500);
            $(this).find('img').removeClass('tea_arrowUp').addClass('tea_arrowDown');
            // $(this).find('img').attr('src', 'images/slideDown.png');
            $(this).find('p').text('向下滑动');
        }
    })

    //首页底部轮播图功能
    $('.swiper-pagination').on('click', 'span', function () {
        var idx = $('.swiper-container3 .swiper-pagination-bullet-active').index();
        // console.log(idx);
        $('.msg div').eq(idx + 1).addClass('target').siblings().removeClass('target');
    });

    //二级菜单效果
    $('.top li').mouseenter(function () {
        $(this).find('div').slideDown(50);
    })

    $('.top li').mouseleave(function () {
        $(this).find('div').slideUp(50);
    })

    function pagescrolling() {
        // <!--页面滚动内容元素动画特效-->
        $('.block').smoove({
            offset: '20%'
        });
        // data-move-y="200px" data-move-x="200px" data-rotate="-45deg"
    }

    function lb() {
        // 3D轮播
        var certifySwiper = new Swiper('#certify .swiper-container', {
            watchSlidesProgress: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            loop: true,
            loopedSlides: 5, //总张数
            autoplay: true,
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                //clickable :true,
            },
            on: {
                progress: function (progress) {
                    for (i = 0; i < this.slides.length; i++) {
                        var slide = this.slides.eq(i);
                        var slideProgress = this.slides[i].progress;
                        modify = 1;
                        if (Math.abs(slideProgress) > 1) {
                            modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                        }
                        translate = slideProgress * modify * 260 + 'px';
                        scale = 1 - Math.abs(slideProgress) / 5;
                        zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                        slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                        slide.css('zIndex', zIndex);
                        slide.css('opacity', 1);
                        if (Math.abs(slideProgress) > 3) {
                            slide.css('opacity', 0);
                        }
                    }
                },
                setTransition: function (transition) {
                    for (var i = 0; i < this.slides.length; i++) {
                        var slide = this.slides.eq(i)
                        slide.transition(transition);
                    }

                }
            }
        })
    }

    function goToTop() {
        //goToTop
        jQuery.fn.goToTop = function (settings) {
            settings = jQuery.extend({
                min: 1, //设置距离顶部的最小值为1
                fadeSpeed: 200, //设置一个淡出淡入的速度
                ieOffset: 50 //处理IE的兼容问题
            }, settings);
            return this.each(function () {
                //listen for scroll
                var el = $(this);
                el.css("display", "none"); //in case the user forgot
                $(window).scroll(function () {
                    //stupid IE hack
                    if (!jQuery.support.hrefNormalized) { //设置这个按钮的css属性
                        el.css({
                            "position": "absolute",
                            "top": $(window).scrollTop() + $(window).height() - settings.ieOffset
                        });
                    }
                    if ($(window).scrollTop() >= settings.min) {
                        el.fadeIn(settings.fadeSpeed);
                    } else {
                        el.fadeOut(settings.fadeSpeed);
                    }
                });
            });
        };
        $(function () {
            var goToTopButton = "<div id='goToTop'><a href='javascript:;'><img src='images/Top.png'></a></div>";
            $("#wrap").append(goToTopButton); //插入按钮的html标签
            if ($(window).scrollTop() < 1) {
                $("#goToTop").hide(); //滚动条距离顶端的距离小于showDistance是隐藏goToTop按钮
            }
            $("#goToTop").goToTop({
                min: 1,
                fadeSpeed: 500
            });
            $("#goToTop").click(function (e) {
                e.preventDefault();
                $("html,body").animate({
                    scrollTop: 0
                }, "slow");
            });
        });
    }

    function fluctuation() {
        //节流防抖
        window.onload = function () {
            var isFrist = true; // 是不是第一次点击
            function delBtn() {
                console.log('用户处理事件')
            }
            var throttle = function (method, context) {
                clearTimeout(method.tId);
                method.tId = setTimeout(function () {
                    method.call(context);
                }, 300);
            };
            var btnDom = document.querySelector('.btn1'); //点击事件
            btnDom.onclick = function () {
                if (isFrist) {
                    // 如果是第一次点击直接执行相关请求
                    delBtn();
                    isFrist = false
                } else {
                    // 如果不是第一次点击进行节流
                    throttle(delBtn)
                }
            }
        }
    }

    function map() {
        // 腾讯地图接口
        var init = function () {
            // 地图坐标获取,请前往  https://lbs.qq.com/tool/getpoint/  这个网址获取相应地点的坐标
            var center = new qq.maps.LatLng(39.908823, 116.397470);
            var map = new qq.maps.Map(document.getElementById('qq_map'), {
                center: center,
                draggable: false,
                scrollwheel: false,
                zoom: 15,
                panControl: false, //平移控件的初始启用/停用状态。
                zoomControl: true, //缩放控件的初始启用/停用状态。
                scaleControl: false,
            });
            var anchor = new qq.maps.Point(10, 20),
                size = new qq.maps.Size(20, 25),
                origin = new qq.maps.Point(0, 0),
                icon = new qq.maps.MarkerImage('images/tip2.png', size, origin, anchor);
            var marker = new qq.maps.Marker({
                icon: icon,
                map: map,
                position: map.getCenter()
            });

        };
        init();
    }

    function webshare() {
        var imgsUrl = window.location.href;
        var imgFxUrl = imgsUrl.substring(0, imgsUrl.lastIndexOf('/') + 1);
        window._bd_share_config = {
            common: {
                bdText: '自定义分享内容',
                bdDesc: '自定义分享摘要',
                bdUrl: location.href,
                bdPic: imgFxUrl + "images/share.png",
            },
            share: [{
                "bdSize": 16
            }],
            slide: [{
                bdImg: 0,
                bdPos: "right",
                bdTop: 100
            }],
            image: [{
                viewType: 'list',
                viewPos: 'top',
                viewColor: 'black',
                viewSize: '16',
                viewList: ['qzone', 'tsina', 'huaban', 'tqq', 'renren']
            }],
            selectShare: [{
                "bdselectMiniList": ['qzone', 'tqq', 'kaixin001', 'bdxc', 'tqf']
            }]
        }
        with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion=' + ~(-new Date() / 36e5)];
    }

    function wxshare() {
        $.support.cors = true; //
        var ent = {};
        ent.url = location.href.split('#')[0];

        var imgsUrl = window.location.href;
        var imgFxUrl = imgsUrl.substring(0, imgsUrl.lastIndexOf('/') + 1)

        $.ajax({
            url: "https://sdk.51job.com/mobile/post.php",
            type: 'POST',
            async: false,
            data: ent,
            success: function (data) {
                var resoult = JSON.parse(data);
                appid = resoult.appId;
                timestamp = resoult.timestamp;
                nonceStr = resoult.nonceStr;
                signature = resoult.signature;
            },
        });
        wx.config({
            debug: false,
            appId: appid,
            timestamp: timestamp,
            nonceStr: nonceStr,
            signature: signature,
            jsApiList: [
                'onMenuShareAppMessage',
                'onMenuShareTimeline',
                'onMenuShareWeibo',
                'onMenuShareQQ',
                'onMenuShareQZone',
            ]
        });
        wx.ready(function () {
            wx.checkJsApi({
                jsApiList: [
                    'onMenuShareAppMessage',
                    'onMenuShareTimeline',
                    'onMenuShareWeibo',
                    'onMenuShareQQ',
                    'onMenuShareQZone',
                ]
            })
            var shareData = {
                title: '自定义分享内容',
                desc: '自定义分享摘要',
                link: location.href,
                shareUrl: location.href,
                imgUrl: imgFxUrl + "images/share.png", //图片路径
            };
            wx.onMenuShareAppMessage(shareData);
            wx.onMenuShareTimeline(shareData);
            wx.onMenuShareWeibo(shareData);
            wx.onMenuShareQQ(shareData);
            wx.onMenuShareQZone(shareData);
        });
    }
    // 禁止拖动img
    $('img').on('mousedown', function (e) {
        e.preventDefault()
    })
    $(".logo").click(function () {
        window.location.href = "index.html"
    })
})