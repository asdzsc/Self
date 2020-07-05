// pages/demo11/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        id: 0,
        name: "首页",
        isActive: true
      },
      {
        id: 1,
        name: "原创",
        isActive: false
      }, {
        id: 0,
        name: "分类",
        isActive: false
      }, {
        id: 0,
        name: "关于",
        isActive: false
      }
    ]
  },
  handleChange(e) {
    console.log(e);
    const {
      index
    } = e.detail
    console.log(index);
    let {
      list
    } = this.data
    list.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
    this.setData({
      list
    })
  }
})