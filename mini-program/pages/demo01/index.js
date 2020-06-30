// pages/demo01/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        num: 0
    },
    handleInput(e) {
        // console.log(e.detail.value);
        this.setData({
            num: e.detail.value
        })
    },
    handleNum(e) {
        // console.log(e);
        const operation = e.currentTarget.dataset.operation
            // console.log(operation);

        this.setData({
            num: this.data.num + operation
        })

    }
})