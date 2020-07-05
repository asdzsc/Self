import {
    request
} from '../../request/index.js'
import {
    runtime
} from '../../lib/runtime/runtime'
// pages/goods_list/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: [{
            id: 0,
            value: "综合",
            isActive: true
        }, {
            id: 1,
            value: "销量",
            isActive: false
        }, {
            id: 2,
            value: "价格",
            isActive: false
        }],
        goodsList: []
    },
    QueryParams: {
        query: "",
        cid: "",
        pagenum: 1,
        pagesize: 10
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        // console.log(options);
        this.QueryParams.cid = options.cid
            // console.log(this.QueryParams.cid);
        this.getGoodsList()
    },
    async getGoodsList() {
        // const res = await request({
        //     url: "/goods/search"
        // })
        // this.QueryParams = res
        // console.log(res);
        // this.setData({
        //         QueryParams
        //     })
        const res = await request({
            url: "/goods/search",
            data: this.QueryParams
        })
        this.setData({
            goodsList: res.goods
        })
    },
    // 标题点击事件
    handleBindItemTap(e) {
        //获取索引
        const {
            index
        } = e.detail
        console.log(index);
        //修改原数组
        let { tabs } = this.data
        tabs.forEach((v, i) =>
            i === index ? v.isActive = true : v.isActive = false
        )
        this.setData({
            tabs
        })
    }

})