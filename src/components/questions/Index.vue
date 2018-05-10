<template>
	<div class="container">
		<h1>{{msg}}</h1>
	</div>
</template>
<script>
	export default {
		name: 'questions',
		data(){
			return {
				msg: '网站相关模块正在开发中~~~敬请期待哦(⊙o⊙)'
			}
		}
	}
</script>
<style scoped lang="scss">
	h1{
		text-align:center;
		padding-top: 40px;
	}
</style>