<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
	<el-table
	    ref="filterTable"
	    :data="tableData"
	    style="width: 100%">
	    <el-table-column
	      	prop="date"
		    label="日期"
		    sortable
		    width="180"
		    column-key="date"
		    :filters="dateList"
		    :filter-method="filterHandler"
	    >
	    </el-table-column>
	    <el-table-column
	      	prop="name"
	      	label="姓名"
	      	width="180">
	    </el-table-column>
	    <el-table-column
	      	prop="address"
	      	label="地址"
	      	:formatter="formatter">
	    </el-table-column>
	    <el-table-column
		    prop="tag"
		    label="标签"
		    width="100"
		    :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
		    :filter-method="filterTag"
		    filter-placement="bottom-end">
	      <template slot-scope="scope">
	        <el-tag
	          	:type="scope.row.tag === '家' ? 'primary' : 'success'"
	          	disable-transitions>{{scope.row.tag}}</el-tag>
	      </template>
	    </el-table-column>
	</el-table>
	<div class="swiper-container">
	    <div class="swiper-wrapper">
	      <div class="swiper-slide"><img src="http://pic27.nipic.com/20130313/9252150_092049419327_2.jpg" alt=""></div>
	      <div class="swiper-slide"><img src="http://img3.cache.netease.com/photo/0001/2009-10-01/5KHL6EHM0UQ20001.JPG" alt=""></div>
	      <div class="swiper-slide"><img src="http://pic22.nipic.com/20120620/9644879_220135570113_2.jpg" alt=""></div>
	    </div>
	    <!-- 如果需要分页器 -->
	    <div class="swiper-pagination"></div>
	    <!-- 如果需要导航按钮 -->
	    <div class="swiper-button-prev"></div>
	    <div class="swiper-button-next"></div>
	    <!-- 如果需要滚动条 -->
	    <!-- <div class="swiper-scrollbar"></div> -->
	  </div>
  </div>
</template>

<script>
 export default {
    data() {
      return {
      	msg:'应用页',
      	dateList:[{
					text: '2016-05-01',
					value: '2016-05-01'
				},{
					text: '2016-05-02',
					value: '2016-05-02'
				}, {
					text: '2016-05-03',
					value: '2016-05-03'
				},{
					text: '2016-05-04',
					value: '2016-05-04'
				}],
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '家'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          tag: '公司'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
        }]
      }
    },
	mounted(){
	  /* eslint-disable no-new */
	  // new Swiper('.swiper-container', {
			// // autoplay: {
		 // //    	delay: 30000,//1秒切换一次
		 // //  	},
			// navigation: {
			//     nextEl: '.swiper-button-next',
			//     prevEl: '.swiper-button-prev',
			// },
			// pagination: {
			//     el: '.swiper-pagination',
			// },

			// loop : true,
	  // })
  var mySwiper = new Swiper('.swiper-container', {
          autoplay:true,
          loop:true
        })

	  // var mySwiper = new Swiper('.swiper-container', {
			
	  // })

	},
    methods: {
		getData(){//请求获取数据设置数据
			// axios.get('http://127.0.0.1:333/tablist')
			// .then(res=>{
			// 	console.log(res)
			// if (data.code = '200') {
			// 	if (res.data.result && res.data.result.length > 0) {
			// 		this.tableData = res.data.result
					// for(var i = 0;i<tableData.length;i++){
					// 	this.dateList.push({text: 'this.tableData[i].date',value: 'this.tableData[i].date'})
					// }
			// 	}
			// }
			// },error=>{
			// 	console.log(error)
			// })
		},
	  	resetDateFilter() {
	    	this.$refs.filterTable.clearFilter('date');
	  	},
	  	clearFilter() {
	    	this.$refs.filterTable.clearFilter();
	  	},
	  	formatter(row, column) {
	    	return row.address;
	  	},
	  	filterTag(value, row) {
	    	return row.tag === value;
	  	},
	  	filterHandler(value, row, column) {
	    	const property = column['property'];
	    	return row[property] === value;
	  	}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
	line-height: 20px;
}
.swiper-container {
  width: 600px;
  height: 300px;
}
img{
	width: 100%;
	height: 100%;
}
</style>
