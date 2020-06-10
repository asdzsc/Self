<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
 	<el-carousel :interval="4000" type="card" height="400px">
    	<el-carousel-item v-for="item in items">
      		<!-- <h3 class="medium">{{ item }}</h3> -->
      		<img :src="item.img" alt="">
    	</el-carousel-item>
  	</el-carousel>
	<el-collapse v-model="activeName" accordion>
	  	<el-collapse-item title="一致性 Consistency" name="1">
		    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
		    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
	  	</el-collapse-item>
	  	<el-collapse-item title="反馈 Feedback" name="2">
		    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
		    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
	  	</el-collapse-item>
	  	<el-collapse-item title="效率 Efficiency" name="3">
		    <div>简化流程：设计简洁直观的操作流程；</div>
		    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
		    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
	  	</el-collapse-item>
	  	<el-collapse-item title="可控 Controllability" name="4">
		    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
		    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
	  	</el-collapse-item>
	</el-collapse>
  </div>
</template>

<script>
export default {
  name: 'Config',
  data () {
    return {
    	msg: '配置页',
       	activeName: '1',
		items:[
			{img:'http://pic27.nipic.com/20130313/9252150_092049419327_2.jpg'},
			{img:'http://img3.cache.netease.com/photo/0001/2009-10-01/5KHL6EHM0UQ20001.JPG'},
			{img:'http://pic22.nipic.com/20120620/9644879_220135570113_2.jpg'},
			{img:'http://pic11.nipic.com/20101125/2531170_090452750000_2.jpg'},
			{img:'http://pic17.nipic.com/20111114/6755043_141842599341_2.jpg'},
			{img:'http://photocdn.sohu.com/20110716/Img313617599.jpg'}
		],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.el-collapse{
		text-align: left;
	}	
	.el-carousel__item h3 {
	    color: #475669;
	    font-size: 14px;
	    opacity: 0.75;
	    line-height: 200px;
	    margin: 0;
	}
	.el-carousel__item:nth-child(2n) {
	    background-color: #99a9bf;
	}
	img{
		width: 100%;
		height: 100%;
	}
	.el-carousel__item:nth-child(2n+1) {
	    background-color: #d3dce6;
	}
</style>
