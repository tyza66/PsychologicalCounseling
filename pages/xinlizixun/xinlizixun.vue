<template>
	<view>
		<web-view class="bg-set" src="../../static/html/3d.html"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				timer: null
			}
		},
		onReady() {
			this.timer = setTimeout(()=>{
			const subNVue = uni.getSubNVueById('concat1');
			subNVue.show('slide-in-left', 300, function(){ 
			    console.log('subNVue 原生子窗体显示成功');
			});  
			},350);
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
	
</style>
