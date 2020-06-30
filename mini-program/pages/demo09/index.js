// pages/demo09/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        sex: ""
    },
    handleChange(e) {
        console.log(e)
        let sex = e.detail.value
        this.setData({
            sex
        })
    }
})