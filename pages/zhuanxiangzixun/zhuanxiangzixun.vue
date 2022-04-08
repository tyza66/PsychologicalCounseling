<template>
	<view>
		<view class="bg-set"></view>
		<view class="body">
			<view :class="bt1" @click="btt1"><p class="wen">焦虑</p></view>
			<view :class="bt2" @click="btt2"><p class="wen">情感</p></view>
			<view :class="bt3" @click="btt3"><p class="wen">抑郁</p></view>
			<view :class="bt4" @click="btt4"><p class="wen">烦躁</p></view>
			<view :class="bt5" @click="btt5"><p class="wen">易怒</p></view>
			<view :class="bt6" @click="btt6"><p class="wen">紧张</p></view>
		</view>
		<view class="rooms">
			<p>当前在线用户：{{member}}</p>
			<p>当前在线教师：{{teacher}}</p>
			<p>当前咨询房间：{{rn}}</p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bt1: "bt1",bt2: "bt2",bt3: "bt3",bt4: "bt4",bt5: "bt5",bt6: "bt6",
				member: 1345,
				teacher: 85,
				rn: 30
			}
		},
		methods: {
			btt1(){
				this.bt1 = "bt1-1";
				this.timer = setTimeout(()=>{
					this.bt1 = "bt1";
					uni.navigateTo({
						url:"../xinlizixun1/xinlizixun1"
					});	
					},100);
			},
			btt2(){
				this.bt2 = "bt2-1";
				this.timer = setTimeout(()=>{
					this.bt2 = "bt2";
					uni.navigateTo({
						url:"../xinlizixun1/xinlizixun1"
					});	
					},100);
			},
			btt3(){
				this.bt3 = "bt3-1";
				this.timer = setTimeout(()=>{
					this.bt3 = "bt3";
					uni.navigateTo({
						url:"../xinlizixun1/xinlizixun1"
					});	
					},100);
			},
			btt4(){
				this.bt4 = "bt4-1";
				this.timer = setTimeout(()=>{
					this.bt4 = "bt4";
					uni.navigateTo({
						url:"../xinlizixun1/xinlizixun1"
					});	
					},100);
			},
			btt5(){
				this.bt5 = "bt5-1";
				this.timer = setTimeout(()=>{
					this.bt5 = "bt5";
					uni.navigateTo({
						url:"../xinlizixun1/xinlizixun1"
					});	
					},100);
			},
			btt6(){
				this.bt6 = "bt6-1";
				this.timer = setTimeout(()=>{
					this.bt6 = "bt6";
					uni.navigateTo({
						url:"../xinlizixun1/xinlizixun1"
					});	
					},100);
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
		background: url(../../static/ro.jpg);
	    background-repeat: no-repeat ;
	    background-size: cover;
	    z-index: -1;
	}
	.body{
		position: relative;
		float: left;
		width: 500rpx;
		height: 500rpx;
		left: 125rpx;
		margin-top: 300rpx;
		z-index: 1;
	}
	.rooms{
		position: absolute;
		float: left;
		left: 0;
		right: 0;
		z-index: 1;
	}
	.rooms p{
		color: #4CD964;
	}
	.bt1{
		position: absolute;
		width: 230rpx;
		height: 125rpx;
		left: 10rpx;
		border-radius: 75rpx;
		background: rgba(55,82,200,0.6);
	}
	.bt1-1{
		position: absolute;
		visibility: hidden;
		width: 230rpx;
		height: 125rpx;
		left: 10rpx;
		border-radius: 75rpx;
		background: rgba(55,82,200,0.6);
	}
	.bt2{
		position: absolute;
		width: 230rpx;
		height: 125rpx;
		left: 260rpx;
		border-radius: 75rpx;
		background: rgba(255,128,192,0.6);
	}
	.bt2-1{
		position: absolute;
		visibility: hidden;
		width: 230rpx;
		height: 125rpx;
		left: 260rpx;
		border-radius: 75rpx;
		background: rgba(255,128,192,0.6);
	}
	.bt3{
		position: absolute;
		width: 230rpx;
		height: 125rpx;
		top: 135rpx;
		left: 10rpx;
		border-radius: 75rpx;
		background: rgba(144,0,255,0.6);
	}
	.bt3-1{
		position: absolute;
		visibility: hidden;
		width: 230rpx;
		height: 125rpx;
		top: 135rpx;
		left: 10rpx;
		border-radius: 75rpx;
		background: rgba(144,0,255,0.6);
	}
	.bt4{
		position: absolute;
		width: 230rpx;
		height: 125rpx;
		top: 135rpx;
		left: 260rpx;
		border-radius: 75rpx;
		background: rgba(255,128,0,0.6);
	}
	.bt4-2{
		position: absolute;
		visibility: hidden;
		width: 230rpx;
		height: 125rpx;
		top: 135rpx;
		left: 260rpx;
		border-radius: 75rpx;
		background: rgba(255,128,0,0.6);
	}
	.bt5{
		position: absolute;
		width: 230rpx;
		height: 125rpx;
		top: 270rpx;
		left: 10rpx;
		border-radius: 75rpx;
		background: rgba(255,0,0,0.6);
	}
	.bt5-1{
		position: absolute;
		visibility: hidden;
		width: 230rpx;
		height: 125rpx;
		top: 270rpx;
		left: 10rpx;
		border-radius: 75rpx;
		background: rgba(255,0,0,0.6);
	}
	.bt6{
		position: absolute;
		width: 230rpx;
		height: 125rpx;
		top: 270rpx;
		left: 260rpx;
		border-radius: 75rpx;
		background: rgba(217,148,38,0.6);
	}
	.bt6-1{
		position: absolute;
		visibility: hidden;
		width: 230rpx;
		height: 125rpx;
		top: 270rpx;
		left: 260rpx;
		border-radius: 75rpx;
		background: rgba(217,148,38,0.6);
	}
	.wen{
		margin-top: 0rpx;
		margin-left: 29rpx;
		font-size: 85rpx;
	}
</style>
