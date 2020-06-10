window.onload = function(){
	new Vue({
		el:"#app",
		data:{
			pageNo:0,//请求起始页
			pageSize:5,//每页显示数据
			data:[],
			url:'http://47.96.117.121:7001/news/page/',
			endOfScreen:false
		},
		watch:{
			endOfScreen(newValue,oldValue){
				if (newValue) {
					this.pageNo++
					this.loadData(this.pageNo,this.pageSize)
				}
			}
		},
		created(){//hooks
			this.loadData()
			// window.onscroll = ()=>{
			// 	this.endOfScreen = this.scrollCheck()
			// }
			window.onscroll = ()=>{
				
				//变量scrollTop是滚动条滚动时，距离顶部的距离
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				console.log(scrollTop)
				//变量windowHeight是可视区的高度
				var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
				console.log(windowHeight)
				//变量scrollHeight是滚动条的总高度
				var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
				console.log(scrollHeight)
			   //滚动条到底部的条件
			   if(scrollTop + windowHeight == scrollHeight){
			   //写后台加载数据的函数
				  	console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
			   } 
			   this.endOfScreen = this.scrollCheck()
			 }
		},
		methods:{
			scrollCheck(){
				var newsHeight = window.scrollY + window.innerHeight
				return newsHeight === document.documentElement.offsetHeight
			},
			loadData(pageNo=this.pageNo,pageSize=this.pageSize){
				setTimeout(()=>{
					//ajax promise axios 
					fetch(this.url + this.pageNo + '/' + this.pageSize)
					  .then(res=>{
					  	// console.log(res)
					  	return res.json();
					  })
					  .then(res=>{
					  	// console.log(res)
					  	// console.log(this)
					  	 for(let i in res.data){
					  	 	//转换后台ip
						  	if (res.data[i].img) {
						  		var reg = new RegExp('127.0.0.1','g')
						  		res.data[i].img = res.data[i].img.replace(reg,'47.96.117.121')
						  	}	
						  	this.data.push(res.data[i])
						  }
					  })
				},1500)
			}
		}
	})
}