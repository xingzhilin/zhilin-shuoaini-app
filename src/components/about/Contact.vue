<template>	
	<div class="container">
		<div class="contactMe">
            <p><span>QQ：</span>550449252</p>
            <p><span>Emial：</span>550449252@qq.com</p>
            <p><span>Tel：</span>17701035944</p>
            <p><span>weibo：</span></p>
            <p><span>vChart：</span>xzl52199</p>
        </div>
	</div>
</template>

<script>

	export default {
		name: 'Contact',
		data() {
			return {
				msg: 'Contact',
			}
		},
		methods: {
			
		}
	}

</script>

<style scoped lang="scss">
	.contactMe{
		line-height: 30px;
		background: rgba(255, 255, 255, .5);
		border-radius: 10px;
		margin: 0 auto;
		color: #2c3e50;
	}
	.contactMe p{
		padding-left: 20px;
	    line-height: 36px;
	    font-size: 20px;
	}
	.contactMe p span{
	    font-size: 20px;
	}
</style>