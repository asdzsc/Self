//实现插件 -- 扩展插件 + 插件功能
//扩展插件 -- $.fn.extend()
//插件功能 -- 实现方法（点击、动态渲染等）
//$.fn.extend() 传参 一个参数为扩展方法  两个参数为合并方法

(function ($) {

    function init(dom, args) {
        console.log(dom, args)
        if (args.current <= args.pageCount) {
            fillHtml(dom, args)
            bindEvent(dom, args)
        } else {
            alert('请输入正确页码')
        }
    };
    //渲染html结构
    function fillHtml(dom, args) {
        //上一页
        if (args.current > 1) {
            dom.append('<a href="#" class="prev-btn">上一页</a>')
        } else {
            dom.remove('.prev-btn')
            dom.append('<span class="disabled">上一页</span>')
        }

        //中间页 1 + 页数/... + 页数/... + pageCount
        //第一页

        if (args.current !== 1 && args.current >= 4 && args.current !== 4) {
            dom.append('<a href="#" class="num">1</a>')
        }
        if (args.current - 2 > 2 && args.pageCount > 5) {
            dom.append('<span>...</span>')
        }

        //中间连续页
        var start = args.current - 2;
        var end = args.current + 2;

        for (; start <= end; start++) {
            if (start <= args.pageCount && start >= 1) {
                if (start == args.current) {
                    dom.append('<span class="current">' + start + '</span>')
                } else {
                    dom.append('<a href="#" class="num">' + start + '</a>')
                }
            }

        }

        //最后一页

        if (args.current + 2 < args.pageCount - 1 && args.pageCount > 5) {
            dom.append('<span>...</span>')
        }
        if (args.current !== args.pageCount && args.current < args.pageCount - 2 && args.pageCount !== 4) {
            dom.append('<a href="#" class="num">' + args.pageCount + '</a>')
        }




        //下一页
        if (args.current < args.pageCount) {
            dom.append('<a href="#" class="next-btn">下一页</a>')
        } else {
            dom.remove('.next-btn')
            dom.append('<span class="disabled">下一页</span>')
        }
    };
    //绑定事件
    function bindEvent(dom, args) {
        dom.on('click', '.num', function () {
            var cur = parseInt($(this).text())
            changePage(dom,args,cur)
        })
        dom.on('click', '.prev-btn', function () {
            var cur = parseInt(dom.find('.current').text())
            changePage(dom,args,cur - 1)
        })
        dom.on('click', '.next-btn', function () {
            var cur = parseInt(dom.find('.current').text())
            changePage(dom,args,cur + 1)
        })
    };
    //重新渲染dom
    function changePage(dom,args,page) {
        fillHtml(dom, {
            current: page,
            pageCount: args.pageCount
        })
        args.backFn(page)
    }
    //扩展插件
    $.fn.extend({
        createPage: function (options) {
            var args = $.extend({
                pageCount: 5,
                current: 3,
                backFn: function () {}
            }, options);
            init(this, args)
        }
    })
})(jQuery)