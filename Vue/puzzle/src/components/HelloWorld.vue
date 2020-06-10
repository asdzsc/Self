<template>
    <div>
        <d-puzzle @next="hanldeNext" v-bind="pizzleConfig[level]" />   
    </div>
</template>

<script>


  import DPuzzle from './Puzzle.vue'


  export default {
    components:{
      DPuzzle
    },
    data(){
      return{
      level:0,
        pizzleConfig:[
          { col:3, row:3, img:'1.jpg' },
          { col:4, row:4, img:'2.jpg' },
          { col:5, row:5, img:'3.jpg' },
          { col:6, row:6, img:'4.jpg' },
          { col:8, row:8, img:'5.jpg' }
        ]
      }
    },
    methods:{
      hanldeNext(){
        // console.log('hanldeNext')
        // this.level 
        if ( ++this.level == this.pizzleConfig.length) {
          const answerFlag = window.confirm('已经是最后一关了，要重新开始不？')
          if (answerFlag) {
            this.level = 0
          }
        }
      }
    } 
  } 
</script>
<!-- Attributes -->


<!-- 参数        说明            类型      默认值 -->
<!-- img    拼图显示图片（必需）  string    --- -->
<!-- width  拼图总宽度           number    500 -->
<!-- height  拼图总搞度          number    500 -->
<!-- row     拼图行数            number    3 -->
<!-- col     拼图列数            number    3    -->

<!-- 判断是不是最后一个元素，如果是就把它的透明度为零 -->

<!-- 判断是否是相邻元素 -->
<!-- left 相等 &&  top相减绝对值为blockHeight -->
<!-- top 相等 &&  left相减绝对值为blockWidth -->