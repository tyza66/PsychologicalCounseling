<template>
	<view>
		<view class="bg-set"></view> 
		<view class="body">
			<h1 class="title">心理小测试</h1>
			<view class="xuan">
				<view class="btt" v-for="one in ce"><p>{{one}}</p></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ce:["xx程度测试","xx程度测试","xx程度测试"]
			}
		},
		methods: {
			
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
	    z-index: -1;
	}
	.body{
		float: left;
		width: 100%;
		height: 1000rpx;
	}
	.title{
		width: 100%;
		margin-top: 50rpx;
		text-align: center;
	}
	.xuan{
		width: 500rpx;
		height: 700rpx;
		margin: 0 auto;
		margin-top: 100rpx;
	}
	.btt{
		float: left;
		width: 400rpx;
		height: 100rpx;
		margin: 0 auto;
		margin-left: 50rpx;
		margin-top: 10rpx;
		border-radius: 45rpx;
		background-color: rgba(6,247,9,0.5);
	}
	.btt p{
		font-size: 50rpx;
		text-align: center;
		
	}
</style>
