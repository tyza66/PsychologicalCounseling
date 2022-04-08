<template>
	<view>
		<!--<view class="bg-set"></view>
		<view class="win" v-if="winq">
			<view class="text"><p>成功减少100点压力！</p></view>
			<view class="butt" @click="restart()"><p>继续</p></view>
			<view class="butt" @click="back()"><p>退出</p></view>
		</view>
		<view class="body">
			<view class="guai" :style="{top:g1_y+'rpx',left:g1_x+'rpx'}" v-if="g1">
				<view class="guai1-0" :style="{width:guai1_b+'%'}"></view>
				<image class="guai1-1" src="../../static/g2.gif"  @click="touch1()"></image>
			</view>
		</view>-->
		<web-view src="http://h5.17173.com/"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				guai1_b: 100,
				g1_x: 0,
				g1_y: 0,
				g1: true,
				winq: false,
				audo1: null,
				audo2: null,
				audo3: null
			}
		},
		onLoad() {
			this.g1_x =this.randomNum(0,550);
			this.g1_y =this.randomNum(0,1250);
			this.audo1 = uni.createInnerAudioContext();
			this.audo1.autoplay = false;
			this.audo1.src = '../../static/go.mp3';
			this.audo2 = uni.createInnerAudioContext();
			this.audo2.autoplay = false;
			this.audo2.src = '../../static/dong.mp3';
			this.audo3 = uni.createInnerAudioContext();
			this.audo3.autoplay = false;
			this.audo3.src = '../../static/winwinwin.mp3'
			//this.audo1.play();
			
		},
		methods: {
			touch1(){
				this.g1_x =this.randomNum(0,550);
				this.g1_y =this.randomNum(0,1250);
				this.guai1_b -= this.randomNum(0,15);
				this.audo2.play();
				if(this.guai1_b<=0){this.audo3.play();this.g1 = false;this.winq=true;}
			},
			randomNum(minNum,maxNum){ 
			    switch(arguments.length){ 
			        case 1: 
			            return parseInt(Math.random()*minNum+1,10); 
			        break; 
			        case 2: 
			            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
			        break; 
			            default: 
			                return 0; 
			            break; 
			    } 
			},
			restart(){
				this.g1_x =this.randomNum(0,550);
				this.g1_y =this.randomNum(0,1050);
				this.guai1_b =100;
				this.g1 = true;this.winq=false;
			},
			back(){
				uni.navigateBack();
			}
		}
	}
</script>

<style>
	web-view{
		width: 100%;
		height: 100%;
		z-index: 99999999;
	}
	iframe{
		width: 100%;
		height: 700rpx;
	}
	
</style>
