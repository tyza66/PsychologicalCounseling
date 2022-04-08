<template>
	<view>
		<web-view :src="web"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				web: ""
			}
		},
		onLoad(thing) {
			console.log(thing.key)
			if(thing.key=="心理小短片")
			{
				this.web = "https://www.bilibili.com/video/BV1dy4y1p7Dw?spm_id_from=333.337.search-card.all.click"
			}
			if(thing.key=="谁扣动了我的情绪扳机")
			{
				this.web = "https://www.bilibili.com/video/BV1Vg411K7gS?spm_id_from=333.337.search-card.all.click"
			}
			if(thing.key=="失眠焦虑")
			{
				this.web = "https://m.bilibili.com/video/BV1YK4y197GF?spm_id_from=333.337.search-card.all.click"
			}
			if(thing.key=="心理微电影")
			{
				this.web = "https://www.bilibili.com/video/BV1dW411t7CE?spm_id_from=333.337.search-card.all.click"
			}
			if(thing.key=="原生家庭")
			{
				this.web = "https://www.bilibili.com/video/BV1wU4y1g7wv?spm_id_from=333.337.search-card.all.click"
			}
		},
		methods: {
			
		}
	}
</script>

<style>
</style>
