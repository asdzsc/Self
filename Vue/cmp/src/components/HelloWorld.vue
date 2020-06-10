<template>
  <!-- <div> I am a cmp {{ msg }} </div> -->
  <div>

    <!-- <h2>线性进度条 ---- 百分百外显</h2> -->
    <d-progress :percentage = '0' :showText = 'false' />    
    <d-progress :percentage = '44' color='orange' />    
    <d-progress :percentage = '60' status='success'/>    
    <d-progress :percentage = '30' status='exception'/>  

    <br>

    <!-- <h2>线性进度条 ---- 百分百内显</h2> -->
    <d-progress :stroke-width="18" :percentage = '0' :showText = 'false'  :text-inside='true' />    
    <d-progress :stroke-width="18" :percentage = '30' :text-inside='true' />    
    <d-progress :stroke-width="18" :percentage = '60' status='success' :text-inside='true' />    
    <d-progress :stroke-width="18" :percentage = '80' status='exception' :text-inside='true' />    

    <br>

    <!-- <h2>环形进度条</h2> -->
    <d-progress :percentage = '0' type='circle'  />    
    <d-progress :percentage = '80' type='circle'  />    
    <d-progress :percentage = '40' type='circle' status="success"  />    
    <d-progress :percentage = '60' type='circle' status='exception'  />    
  </div>
</template>
<script>
  import DProgress from './progress.vue' 
  export default{
    components:{
      DProgress
    },
    data (){
      return {
        msg:'hello word'
      }   
    }
  }
</script>
<style>
/*  div{
    background:red;
  }*/
</style>