<template>
    <div 
        class="puzzle"
        :style="{ width: width +'px',height: height + 'px' }" 
        >
        <div 
            class="puzzle__block" 
            v-for="(item,index) in blockPoints"
            :key="item.id"
            :style="{ 
                width: blockWidth +'px',
                height: blockHeight + 'px',
                left: item.x + 'px',
                top: item.y + 'px',
                backgroundImage: `url(${img}) `,
                backgroundPosition : ` -${correntPoints[index].x}px  -${correntPoints[index].y}px `,
                opacity : index === blockPoints.length - 1 && 0
            }"
            @click = "handleClick"
            :ref = " index == blockPoints.length - 1 ? 'empty' : 'block' "
            :data-correntX  = "correntPoints[index].x"
            :data-correntY  = "correntPoints[index].y"
        > 
        </div>
    </div>
</template>

<script>
export default {
    props:{
        width:{
            type:Number,
            default:500
        },
        height:{
            type:Number,
            default:500
        },
        row:{
            type:Number,
            default:3
        },
        col:{
            type:Number,
            default:3
        },
        img:{
            type:String,
            required:true
        }
    },
    computed:{
        blockWidth(){
            return this.width / this.col
        },
        blockHeight(){
            return this.width / this.row
        },
        correntPoints(){
            const { row, col, blockWidth, blockHeight } = this;
            const arr = [];

            for(let i = 0; i < row; i++){
                for(let j = 0; j < row; j++){
                    arr.push({
                        x: j * blockWidth,
                        y: i * blockHeight,
                        id : new Date().getTime() + Math.random() * 100
                    })
                }   
            }
            return arr;
        },
        blockPoints(){
            const points = this.correntPoints;
            const length = points.length; 
            const lastEle = points[ length - 1];
            const newArr = [...points];
            newArr.length = length - 1;
            newArr.sort(() => Math.random() -0.5);
            newArr.push(lastEle);
            return newArr;
        }
    },
    methods:{
        handleClick(e){
            // console.log('aa')
            const blockDom = e.target;
            const emptyDom = this.$refs.empty[0];

            if (!this.isAdjacent(blockDom,emptyDom)) {
                return;
            }

            const { left,top } = blockDom.style

            blockDom.style.left = emptyDom.style.left; 
            blockDom.style.top = emptyDom.style.top; 
            emptyDom.style.left = left;
            emptyDom.style.top = top;

            const winFlag =  this.checkWin();
            if (winFlag) {
                // console.log('success')
                this.winGame(emptyDom)
            }
        },
        isAdjacent(blockDom,emptyDom){
            const { left:domLeft, top:domTop, width, height } = blockDom.style;
            const { left:emptyLeft, top:emptyTop } = emptyDom.style

            const xDis = Math.floor(Math.abs(parseFloat(domLeft) - parseFloat(emptyLeft)))
            const yDis = Math.floor(Math.abs(parseFloat(domTop) - parseFloat(emptyTop)))

            const flag = (domLeft === emptyLeft && yDis === parseInt(height))
                    || (domTop === emptyTop && xDis === parseInt(width))
            return flag;
        },
        checkWin(){
            const blockDomArr = this.$refs.block;
               return blockDomArr.every( dom => {     

                const { left:domLeft, top:domTop } = dom.style;
                const { correntx:correntX, correnty:correntY } = dom.dataset;

                const flag = parseInt(domLeft) === parseInt(correntX) && parseInt(domTop) === parseInt(correntY)  
                return flag

            })
        },
        winGame(emptyDom){
            setTimeout(() =>{
                alert('恭喜通关')
                emptyDom.style.opacity = 1
               setTimeout(()=>{
                 this.goToNextLevel()
               })
            },300)
        },
        goToNextLevel(){
            console.log('aaa')
            const answerFlag = window.confirm('要玩下一关吗？')
            if (answerFlag) {
                this.$emit('next')
            }
        }
    }

}
</script>

<style>
    .puzzle{
        border: 2px solid #ccc;
        position: relative;
    }
    .puzzle__block{
        position: absolute;
        box-sizing: border-box;
        border: 2px solid #fff;
        /*background: red;*/
        transition: all .3s;
    }
</style>
