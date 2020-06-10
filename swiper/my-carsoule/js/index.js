	
	//实现插件  +   轮播功能
	// $.fn.extend 实例上的方法
	// $.extend  原型链工具的方法
(function($){
	function Slide(ele,opt){
		//默认值
		var d = {
			curDisplay:0,
			autoplay:false,
			interval:2000
		}

		this.opts = $.extend({},d,opt);
		this.wrap = ele;
		this.curDisplay = this.opts.curDisplay;
		this.$img = this.wrap.find('img');
		this.imgLen = this.$img.length;
		this.nowIndex = 0;
		this.timer = null;
		this.autoplay = this.opts.autoplay;
		this.interval = this.opts.interval;

		this.init();
	}
	Slide.prototype.init = function(){
		console.log(this)
		this.initMove()
		this.bindEvent()
	}
	Slide.prototype.initMove = function(){

		var _this = this;
		//中间索引值
		var hlen = Math.floor(_this.imgLen / 2)
		var lNum,rNum;
		//实现分散
		for(var i = 0;i < hlen; i++){
			lNum = _this.curDisplay - i - 1;
			console.log(_this.$img.eq(lNum))
			_this.$img.eq(lNum).css({
				transform:'translateX(' + ( -150 * (i + 1)) + 'px) translateZ (' + (200 - i * 100) + 'px) rotateY(30deg)'
			})
			rNum = _this.curDisplay - i + 1;
			_this.$img.eq(rNum).css({
				transform:'translateX(' + ( 150 * (i + 1)) + 'px) translateZ (' + (200 - i * 100) + 'px) rotateY(-30deg)'
			})
		}
		_this.$img.eq(_this.curDisplay).css({
			transform:'translateZ(300px)'
		})
	}
	Slide.prototype.bindEvent = function(){
		var _this = this;
		_this.$img.on('click',function(){
			_this.nowIndex = $(this).index();
			_this.moving(_this.nowIndex)
		}).hover(function(){
			clearInterval(_this.timer)
		},function(){
			_this.timer = setInterval(function(){
				_this.play();
			},_this.interval)
		})
		_this.timer = setInterval(function(){
				_this.play();
		},_this.interval)
	}
	Slide.prototype.moving = function(index){
		this.curDisplay = index;
		this.initMove()
	}
	//自动播放
	Slide.prototype.play = function(){
		if (this.autoplay) {
			if (this.nowIndex == this.$imgLen - 1 ) {
				this.nowIndex = 0
			}else {
				this.nowIndex ++;
			}
			this.moving(this.nowIndex)
		}
	}

	//扩展插件
	$.fn.extend({
		slide:function(options){
			new Slide(this,options)
		}
	})

})(jQuery)
