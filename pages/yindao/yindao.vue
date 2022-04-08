<template>
	<view>
		<image class="bg-set" :src="tp"></image>
		<view class="continue" @click="jin"><text>继续</text></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: 0,
				tp: "../../static/C1.png"
			}
		},
		methods: {
			jin(){
				this.index++;
				if(this.index==1){
					this.tp = "../../static/C2.png"
				}
				if(this.index==2){
					this.tp = "../../static/C3.png"
				}
				if(this.index==3){
					uni.navigateBack({
					});
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
		background-repeat: no-repeat ;
		background-size: 100% 100%;
		background-attachment:fixed;
	    z-index: -1;
	}
	.continue{
		position: relative;
		width: 600rpx;
		height: 100rpx;
		left: 75rpx;
		top: 1100rpx;
		border-radius: 75rpx;
		background: rgba(0,255,0,0.9);
		
	}
	.continue text{
		position: absolute;
		text-align: center;
		top: 20rpx;
		left: 250rpx;
		font-size: 60rpx;
	}
</style>
