<template>
	<div 
		class="progress"
		:class = "[ 
			status ? `is-${status}` : '',
			`progress--${type}`
		]"
	>
		<div class="progress-bar" v-if="type === 'line'">
			<div class="progress-bar__outer" :style="{ height:strokeWidth+ 'px' }">
				<div class="progress-bar__inner" :style="barStyle">
					<div class="progress-bar__innerText" v-if ='textInside && showText'>{{ percentage }}</div>
				</div>
			</div>
		</div>
			
		
		<div 
			class="progress-circle"
			:style = "{ width: width + 'px',height: width + 'px'}"
			 v-else
		>
			<svg 
				viewBox = "0 0 100 100"
			>
				<path
					:d = "trackPath"
					fill = 'none'
					:stroke-width = "relativeStrokeWidth"
					stroke = "#e5e9f2"
				 />	
				<path
					:d = "trackPath"
					fill = 'none'
					:stroke-width = "relativeStrokeWidth"
					:stroke = "strok"
					:style = "circlePathStyle"
					stroke-linecap = "round"
				 />	
			</svg>
		</div>



		<div 
			class="progress__text" 
			:style="{ fontSize:peogressTextSize + 'px' }"
			v-if = "!textInside && showText"
		>
			<!-- 90% -->
			<template v-if="!status"> {{ percentage }} %</template>
			<i v-else class="icon" :class="iconClass" ></i>
		</div>
	</div>
</template>
<script>
	export default {
		props:{
			strokeWidth:{
				type:Number,
				default:6
			},
			percentage:{
				type:Number,
				requird:true,	
				default:0,
				// validator(value){
				// 	return value >=0 && value <=100
				// }
				validator: val => val >= 0 && val <=100 
			},
			status:{
				type:String
			},
			type:{
				type:String,
				default:'line',
				validator: val => ['circle','line'].includes(val)
			},
			textInside:{
				type:Boolean,
				default:false,
			},
			showText:{
				type:Boolean,
				default:true,
			},
			color:{
				type:String
			},
			width:{
				type:Number,
				default:126
			}
		},
		computed:{
			peogressTextSize(){
				return 12 + this.strokeWidth * 0.4
			},
			strok(){
				let color;

				if (this.color) {
					return this.color
				}


				switch (this.status) {
					case 'success':
						color = '#13ce66';
						break;
					case 'exception':
						color = '#ff4949';
						break;
						default :
						color = '#20a0ff'
						break;
				}
				return color 
			},
			barStyle(){
				return {
					width: this.percentage + '%',
					background : this.strok
				}
			},
			iconClass(){
				if (this.type === 'line') {
					return this.status == 'success'
						? 	'icon-circle-check'
						:   'icon-circle-close'
				}else {
						return this.status == 'success'
						? 	'icon-check'
						:   'icon-close'
				}
			},
			trackPath(){

				const radius = 50 - this.relativeStrokeWidth / 2;

				return `
					M 50 50 
					m 0 -${radius} 
					a ${radius} ${radius} 0 1 1 0 ${radius * 2}  
					a ${radius} ${radius} 0 1 1 0 -${radius * 2}
				`;
			},
			relativeStrokeWidth(){
				return this.strokeWidth * 100 / this.width
			},
			perimeter(){
				const radius = 50 - this.relativeStrokeWidth / 2;
				return 2 * Math.PI * radius
			},
			circlePathStyle(){
				const perimeter = this.perimeter
				return{
					strokeDasharray:`${perimeter}px,${perimeter}px`,
					strokeDashoffset:(1 - this.percentage / 100) * perimeter + 'px'
				}
				
			}
		}
	}
</script>
<style>

@font-face {
  font-family: 'icon';  /* project id 1482239 */
  src: url('../../iconfont/iconfont.eot');
  src: url('../../iconfont/iconfont.eot?#iefix') format('embedded-opentype'),
  url('../../iconfont/iconfont.woff2') format('woff2'),
  url('../../iconfont/iconfont.woff') format('woff'),
  url('../../iconfont/iconfont.ttf') format('truetype'),
  url('../../iconfont/iconfont.svg#iconfont') format('svg');
}
	.icon{
		font-family: 'icon' !important;
		font-size: 26px;
		font-style: normal;
		vertical-align: middle;
	}
	.icon-circle-check::before{
		content: '\e68e'
	}
	.icon-circle-close::before{
		content: '\e630'
	}
	.icon-check::before{
		content: '\e742'
	}
	.icon-close::before{
		content: '\e62a'
	}


	.progress.is-success .progress__text{
		color: #67c23a;
	}
	.progress.is-exception .progress__text{
		color: #f56c6c;
	}



	.progress-bar{
		display: inline-block;
		width: 100%;
		/*width: calc(100% - 50px);*/
		padding-right: 50px;
		box-sizing: border-box;
		margin-right: -50px;
	}
	.progress-bar__outer{
		background: #ebeef5;
		width: 100%;
		border-radius: 50px;
	}
	.progress-bar__inner{
		height: 100%;
		border-radius: 50px;
		transition: width 0.6s ease;
		text-align: right;
		margin-top: 15px;
		
	}
	.progress-bar__innerText{
		height: 100%;
		display: inline-block;
		color: #fff;
		margin: 0 5px;
		vertical-align: middle;
	}
	.progress__text{
		display: inline-block;
		margin-left: 10px;
		color: #606266;
	}
	.progress--circle{
		display: inline-block;
		position: relative;
	}
	.progress--circle .progress__text{
		position: absolute;
		top: 50%;
		width: 100%;
		margin-left: 0;
		text-align: center;
		transform: translateY(-50%);
	}
</style>