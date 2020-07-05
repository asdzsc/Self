// pages/demo06/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //标签字符串
    html:'<header class="sc-VigVT SQtZc"><div class="header-bd"><a class="placeholder"><span class="text iconfont icon-search">寻找宝贝店铺</span></a></div></header>',
    //对象数组
    html1:[
      {
        //定义标签
        name:"div",
        attrs:{
          class:"my_div",
          style:"color:red"
        },
        //子节点
        children:[{
          name:"p",
          attrs:{},
          children:[
            {
              type:"text",
              text:"hello"
            }
          ]
        }]
      }
    ]
  }
})