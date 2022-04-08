<template>
	<view>
		<view class="bg-set"></view> 
		<view class="body">
			<h1 class="title">心理小知识</h1>
			<view class="xuan">
				<view class="btt" v-for="one in ce" @click="go(one)"><p>{{one}}</p></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ce:["心理小短片","谁扣动了我的情绪扳机","失眠焦虑","心理微电影","原生家庭"]
			}
		},
		methods: {
			go(key){
				uni.navigateTo({
					url:"../zhishi/zhishi?key="+key.toString()
				});
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
	    background: url(../../static/zhishi.png);
		background-repeat: no-repeat ;
		background-size: cover;
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
		margin-top: 15rpx;
	}
</style>
