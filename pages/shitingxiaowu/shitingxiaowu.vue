<template>
	<view>
		<view class="bg-set"></view>
		<view class="body">
			<scroll-view class="scro" duration="true" scroll-y="true" :scroll-top="scrollTop">
				<view class="music">
					<view class="item" v-for="one in item">
						<p class="cn">{{one[0]}}</p>
						<p class="long">{{one[1]}}</p>
						<p class="leixing">{{one[2]}}</p>
						<image class="playna" src="../../static/PLAY.png" @click="KAISHI(one[3],one[0])"></image>
					</view>
				</view>
			</scroll-view>
			<view class="player">
				<p class="music-title">{{titlemc}}</p>
				<view class="jindu">
					<progress class="jinduya" :percent="baifenbi" stroke-width="3" backgroundColor="#999"/>
					<image class="kuaitui" src="../../static/TUI.png" @click="kuaituilou()"></image>
					<image class="kuaijin" src="../../static/JIN.png" @click="kuaijinlou()"></image>
					<image class="zhanting" src="../../static/ZHANTING.png" v-show="boing" @click="zhantinglou()"></image>
					<image class="jixu" src="../../static/PLAY.png" v-show="!boing" @click="jixulou()"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				item: [["卡农（钢琴小提琴版）","5:20","清新治愈","../../static/MUSIC/KANONG.mp3"],
				["二泉映月","5:12","忧伤抒情","../../static/MUSIC/ERQUAN.mp3"]],
				audo1: null,
				baifenbi: 0,
				timer: null,
				boing: false,
				titlemc:"当前未播放歌曲"
			}
		},
		onReady() {
			this.audo1 = uni.createInnerAudioContext();
			this.audo1.autoplay = false;
		},
		methods: {
			KAISHI(yinyue,name){
				this.audo1.src = yinyue;
				this.audo1.play();
				this.baifenbi = 0;
				this.boing = true;
				this.titlemc = name;
				this.audo1.onTimeUpdate(() => {
							this.baifenbi = (this.audo1.currentTime/this.audo1.duration)*100;
							console.log(this.baifenbi);
							if(this.baifenbi>=100) this.boing = false;
						});
			},
			zhantinglou(){
				if(this.audo1.duration>=1){
					this.audo1.pause();
					this.boing = false;
				}
			},
			jixulou(){
				if(this.audo1.duration>=1){
					this.audo1.play();
					this.boing = true;
				}
			},
			kuaijinlou(){
				if(this.audo1.duration>=1){
					this.audo1.seek(this.audo1.currentTime +10);
				}
			},
			kuaituilou(){
				if(this.audo1.duration>=1){
					this.audo1.seek(this.audo1.currentTime -10);
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
	    background: url(../../static/fa.jpg);
		background-repeat: no-repeat ;
		background-size: cover;
	    z-index: -1;
	}
	.body{
		width: 700rpx;
		height: 1000rpx;
		border-radius: 75rpx;
		margin-left: 25rpx;
		margin-top: 150rpx;
		background: rgba(174,164,81,0.5);
	}
	.scro{
		float: left;
		width: 650rpx;
		height: 800rpx;
		margin-left: 25rpx;
		margin-top: 20rpx;
	}
	.music{
		width: 650rpx;
	}
	.item{
		position: relative;
		width: 648rpx;
		height: 120rpx;
		background: rgba(144,169,85,0.6);
		border: #000000 solid 1rpx;
	}
	.cn{
		position: absolute;
		margin-top: 20rpx;
		margin-left: 20rpx;
		font-size: 45rpx;
	}
	.long{
		position: absolute;
		margin-top: 80rpx;
		margin-left: 25rpx;
		font-size: 25rpx;
	}
	.leixing{
		position: absolute;
		margin-top: 20rpx;
		margin-left: 500rpx;
		color: #333333;
		font-size: 35rpx;
	}
	.playna{
		position: absolute;
		width: 100rpx;
		height: 100rpx;
		top: 10rpx;
		left: 420rpx;
	}
	.player{
		float: left;
		width: 650rpx;
		height: 160rpx;
		margin-left: 25rpx;
	}
	.jindu{
		width: 600rpx;
		height: 10rpx;
		border: #000000 solid 1rpx;
		margin-top: 60rpx;
		margin-left: 25rpx;
	}
	.jinduya{
		height: 10rpx;
		width: 100%;
		background: #007AFF;
	}
	.music-title{
		position: absolute;
		left:75rpx;
		font-size: 55rpx;
	}
	.kuaijin{
		position: absolute;
		width: 100rpx;
		height: 100rpx;
		left: 450rpx;
	}
	.kuaitui{
		position: absolute;
		width: 100rpx;
		height: 100rpx;
		left: 200rpx;
	}
	.zhanting{
		position: absolute;
		width: 100rpx;
		height: 100rpx;
		left: 325rpx;
	}
	.jixu{
		position: absolute;
		width: 100rpx;
		height: 100rpx;
		left: 325rpx;
	}
</style>
