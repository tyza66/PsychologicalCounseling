<template>
	<view class="content">
		 <view class="bg-set"></view> 
		 <view class="stop" @click="stop()"><image :src="sp"></image></image></view>
		 <view class="body">
			 <view class="title"><h1>心理自助系统</h1></view>
			 <view class="butts">
				 <view :class="bt1" v-show="BT1" @click="b1c()"><p>心理测量室</p></view>
				 <view :class="bt2" v-show="BT2" @click="b2c()"><p>心理咨询室</p></view>
				 <view :class="bt3" v-show="BT3" @click="b3c()"><p>心理小知识</p></view>
				 <view :class="bt4" v-show="BT4" @click="b4c()"><p>心理一对一</p></view>
				 <view :class="bt5" v-show="BT5" @click="b5c()"><p>沙盘治疗室</p></view>
				 <view :class="bt6" v-show="BT6" @click="b6c()"><p>成为咨询师</p></view>
			 </view>
		 </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				BT1: false,bt1: "bt1",
				BT2: false,bt2: "bt2",
				BT3: false,bt3: "bt3",
				BT4: false,bt4: "bt4",
				BT5: false,bt5: "bt5",
				BT6: false,bt6: "bt6",
				timer: null,
				jinqu: 0,
				audo1: null,
				sp:"../../static/zt.png"
			}
		},
		onLoad() {

		},
		onShow() {
			this.BT1 = true;
			this.timer = setTimeout(()=>{
				this.BT2 = true;
				this.timer = setTimeout(()=>{
					this.BT3 = true;
					this.timer = setTimeout(()=>{
						this.BT4 = true;
						this.timer = setTimeout(()=>{
							this.BT5 = true;
							this.timer = setTimeout(()=>{
								this.BT6 = true;
				},100);
				},100);
				},100);
				},100);
				},100);
		},
		onReady(){
			this.audo1 = uni.createInnerAudioContext();
			this.audo1.autoplay = true;
			this.audo1.src = '../../static/MUSIC/KANONG.mp3';
			this.audo1.loop = true;
			this.audo1.volume = 0.3;
		},
		methods: {
			b1c() {
				this.bt1 = "bt1-1";
				this.timer = setTimeout(()=>{
					this.bt1 = "bt1";
					uni.navigateTo({
						url:"../zhengzhuangzipingliangbiao/zhengzhuangzipingliangbiao"
					});	
					},100);
			},
			b2c() {
				this.bt2 = "bt2-1";
				this.timer = setTimeout(()=>{
					this.bt2 = "bt2";
					uni.navigateTo({
						url:"../xinlizixun/xinlizixun"
					});	
					},100);
			},
			b3c() {
				this.bt3 = "bt3-1";
				this.timer = setTimeout(()=>{
					this.bt3 = "bt3";
					uni.navigateTo({
						url:"../xinlixiaozhishi/xinlixiaozhishi"
					});	
					},100);
			},
			b4c() {
				this.bt4 = "bt4-1";
				this.timer = setTimeout(()=>{
					this.bt4 = "bt4";
					uni.navigateTo({
						url:"../xinlizixun1/xinlizixun1"
					});	
					},100);
			},
			b5c() {
				this.bt5 = "bt5-1";
				this.timer = setTimeout(()=>{
					this.bt5 = "bt5";
					uni.navigateTo({
						url:"../dajiaoshi/dajiaoshi"
					});	
					},100);
			},
			b6c() {
				this.bt6 = "bt6-1";
				this.timer = setTimeout(()=>{
					this.bt6 = "bt6";
					uni.navigateTo({
						url:"../chengweizixunshi/chengweizixunshi"
					});	
					},100);
			},
			stop(){
				if(this.sp == "../../static/bf.png"){
					this.sp = "../../static/zt.png";
					this.audo1.play();
				}
				else{
					this.sp = "../../static/bf.png";
					this.audo1.pause();
				}
			}
		}
	}
</script>

<style>
	.bg-set{
	    position: fixed;
	    width: 100%;
	    height: 100%;
	    top: 0;
	    left: 0;
	    background: url(../../static/23.png);
		background-repeat: no-repeat ;
		background-size: 100% 100%;
		background-attachment:fixed;
	    z-index: -1;
	}
	.stop{
		position: absolute;
		left: 10rpx;
		top: 50rpx;
		width: 50rpx;
		height: 50rpx;
		background: #4CD964;
	}
	.stop image{
		width: 50rpx;
		height: 50rpx;
	}
	.body{
		float: left;
		width: 100%;
		height: 1000rpx;
	}
	.title{
		width: 100%;
		height: 100rpx;
		margin-top: 150rpx;
		
	}
	.title h1{
		text-align: center;
		color: #4CD964;
	}
	.butts{
		width: 450rpx;
		height: 700rpx;
		margin: 0 auto;
		margin-top: 50rpx;
	}
	.bt1{
		float: left;
		width: 400rpx;
		height: 100rpx;
		margin: 0 auto;
		margin-left: 25rpx;
		border-radius: 45rpx;
		background-color: rgba(6,247,9,0.4);
	}
	.bt1-1{
		float: left;
		visibility: hidden;
		width: 400rpx;
		height: 100rpx;
		margin: 0 auto;
		margin-left: 25rpx;
		border-radius: 45rpx;
		background-color: rgba(6,247,9,0.4);
	}
	.bt1 p{
		height: 100rpx;
		margin-top: 16rpx;
		font-weight: 800;
		font-size: 50rpx;
		text-align: center;
		color: rgba(0,0,0,0.7);
	}
	.bt2{
		float: left;
		width: 400rpx;
		height: 100rpx;
		margin: 0 auto;
		margin-left: 25rpx;
		border-radius: 45rpx;
		margin-top: 15rpx;
		background-color: rgba(241,129,14,0.6);
	}
	.bt2-1{
		float: left;
		visibility: hidden;
		width: 400rpx;
		height: 100rpx;
		margin: 0 auto;
		margin-left: 25rpx;
		border-radius: 45rpx;
		margin-top: 15rpx;
		background-color: rgba(241,129,14,0.6);
	}
	.bt2 p{
		height: 100rpx;
		margin-top: 16rpx;
		font-weight: 800;
		font-size: 50rpx;
		text-align: center;
		color: rgba(0,0,0,0.7);
	}
	.bt3{
		float: left;
		width: 400rpx;
		height: 100rpx;
		margin: 0 auto;
		margin-left: 25rpx;
		border-radius: 45rpx;
		margin-top: 15rpx;
		background-color: rgba(255,128,192,0.6);
	}
	.bt3-1{
		float: left;
		visibility: hidden;
		width: 400rpx;
		height: 100rpx;
		margin: 0 auto;
		margin-left: 25rpx;
		border-radius: 45rpx;
		margin-top: 15rpx;
		background-color: rgba(255,128,192,0.6);
	}
	.bt3 p{
		height: 100rpx;
		margin-top: 16rpx;
		font-weight: 800;
		font-size: 50rpx;
		text-align: center;
		color: rgba(0,0,0,0.7);
	}
	.bt4{
		float: left;
		width: 400rpx;
		height: 100rpx;
		margin: 0 auto;
		margin-left: 25rpx;
		border-radius: 45rpx;
		margin-top: 15rpx;
		background-color: rgba(0,224,1284,0.5);
	}
	.bt4-1{
		float: left;
		visibility: hidden;
		width: 400rpx;
		height: 100rpx;
		margin: 0 auto;
		margin-left: 25rpx;
		border-radius: 45rpx;
		margin-top: 15rpx;
		background-color: rgba(0,224,1284,0.5);
	}
	.bt4 p{
		height: 100rpx;
		margin-top: 16rpx;
		font-weight: 800;
		font-size: 50rpx;
		text-align: center;
		color: rgba(0,0,0,0.7);
	}
	.bt5{
		float: left;
		width: 400rpx;
		height: 100rpx;
		margin: 0 auto;
		margin-left: 25rpx;
		border-radius: 45rpx;
		margin-top: 15rpx;
		background-color: rgba(215,214,41,0.5);
	}
	.bt5-1{
		float: left;
		visibility: hidden;
		width: 400rpx;
		height: 100rpx;
		margin: 0 auto;
		margin-left: 25rpx;
		border-radius: 45rpx;
		margin-top: 15rpx;
		background-color: rgba(215,214,41,0.5);
	}
	.bt5 p{
		height: 100rpx;
		margin-top: 16rpx;
		font-weight: 800;
		font-size: 50rpx;
		text-align: center;
		color: rgba(0,0,0,0.7);
	}
	.bt6{
		float: left;
		width: 400rpx;
		height: 100rpx;
		margin: 0 auto;
		margin-left: 25rpx;
		border-radius: 45rpx;
		margin-top: 15rpx;
		background-color: rgba(63,53,202,0.5);
	}
	.bt6-1{
		float: left;
		visibility: hidden;
		width: 400rpx;
		height: 100rpx;
		margin: 0 auto;
		margin-left: 25rpx;
		border-radius: 45rpx;
		margin-top: 15rpx;
		background-color: rgba(63,53,202,0.5);
	}
	.bt6 p{
		height: 100rpx;
		margin-top: 16rpx;
		font-weight: 800;
		font-size: 50rpx;
		text-align: center;
		color: rgba(0,0,0,0.7);
	}
</style>
