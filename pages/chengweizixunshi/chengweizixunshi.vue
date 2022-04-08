<template>
	<view>
		<view class="bg-set"></view>
		<view class="body">
			<h1 class="title">如何成为心理咨询师</h1>
			<p>1.关注公众号："xxxxxxx"</p>
			<p>2.与人工客服联系提交信息</p>
			<p>3.等待审核</p>
			<p>4.审核通过后获得咨询师账号</p>
			<p>5.使用账号激活教师版App</p>
			<p>6.开始参与匹配或在指定房间等待</p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
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
	    background: url(../../static/zhaomu.png);
		background-repeat: no-repeat ;
		background-size: cover;
	    z-index: -1;
	}
	.title{
		text-align: center;
		margin-top: 100rpx;
	}
	.body p{
		font-size: 45rpx;
		margin-left: 40rpx;
	}
</style>
