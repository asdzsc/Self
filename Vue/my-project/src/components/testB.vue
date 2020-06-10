<template>
	<div class="testb">
		<h1>B组件</h1>
		<ul>
			<li v-for="(value,index) in list" :key="index"> {{ value }} </li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'TestB',
		data(){
			return {
				list:[1,2,3,4]
			}
		}
	}
</script>
<style scoped>
	.testb{
		background: #f67;
		list-style: none;
	}
</style>