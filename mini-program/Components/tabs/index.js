// Components/tabs/index.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		// 要接收的数据的名称
		// aaa:{
		//   // type  要接收的数据的类型 
		//   type:String,
		//   // value  默认值
		//   value:""
		// }
		list: {
			type: Array,
			default: []
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {

	},

	/**
	 * 组件的方法列表
	 */
	/* 
	1 页面.js 文件中 存放事件回调函数的时候 存放在data同层级下！！！
	2 组件.js 文件中 存放事件回调函数的时候 必须要存在在 methods中！！！
	 */
	methods: {
		handleItemTab(e) {
			/* 
			1 绑定点击事件  需要在methods中绑定
			2 获取被点击的索引 
			3 获取原数组 
			4 对数组循环
			  1 给每一个循环性 选中属性 改为 false
			  2 给 当前的索引的 项 添加激活选中效果就可以了！！！
			 5 点击事件触发的时候 
			    触发父组件中的自定义事件 同时传递数据给  父组件  
			    this.triggerEvent("父组件自定义事件的名称",要传递的参数)
			 */
			// console.log(e);
			const {
				index
			} = e.currentTarget.dataset
			// let {
			//   list
			// } = this.data
			// list.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);

			// this.setData({
			//   list
			// })
			this.triggerEvent("itemChange", {
				index
			})
		}
	}
})