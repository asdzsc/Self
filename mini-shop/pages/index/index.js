//Page Object
// 引入promise方法在小程序中路径要补全
import {
    request
} from '../../request/index.js'
Page({
    data: {
        swiperList: [],
        cateList: [],
        floorList: []
    },
    //options(Object)
    onLoad: function (options) {
        // wx.request({
        //       url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
        //     method: 'GET',
        //     success: (result) => {
        //         // console.log(result);
        //         // console.log(result.data.message);
        //         this.setData({
        //             swiperList: result.data.message
        //         })
        //     }
        // });
        this.getSwiperList();
        this.getCateList();
        this.getFloorList();

    },
    async getSwiperList() {
        request({
            url: "/home/swiperdata",
        }).then(result => {
            this.setData({
                swiperList: result
            })

        })
    },
    getCateList() {
        request({
            url: "/home/catitems",
        }).then(result => {
            this.setData({
                cateList: result
            })

        })
    },
    getFloorList() {
        request({
            url: "/home/floordata",
        }).then(result => {
            this.setData({
                floorList: result
            })

        })
    },

});