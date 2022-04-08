<template>
	<view>
		<!--<view class="bg-set"></view> 
		<view class="body">
			<scroll-view class="mess" duration="true" scroll-y="true" :scroll-top="scrollTop">
				<view class="mess-in">
					<view class="item" v-for="one in list">
						<p>{{one}}</p>
					</view>
				</view>
			</scroll-view>
			<view class="in">
				<textarea class="inp" v-model="info" type="text" placeholder="输入发送内容"/>
				<view class="out" @click="oo"><p>发送</p></view>
			</view>
		</view>
	</view>-->
	<iframe src="http://m.7724.com/"></iframe>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				list: [],
				info: ""
			}
		},
		onReady() {
			this.scrollTop = 0;
			this.timer = setTimeout(()=>{
							this.$nextTick(function() {
							                this.scrollTop = 20000000;
							            });},200);
		},
		methods: {
			oo(){
				if(this.info!=""){
					this.list.push(this.info);
					this.info = "";
					this.scrollTop = 0;
					this.timer = setTimeout(()=>{
									this.$nextTick(function() {
									                this.scrollTop = 20000000;
									            });},200);
				}
			}
		}
	}
</script>

<style>
	iframe{
		width: 100%;
		height: 1500rpx;
	}
</style>
