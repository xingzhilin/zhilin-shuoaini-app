<template>
	<el-footer>
		<div class="footer_nav">
			<ul class="about_wrap">
				<li><router-link :to="{name: 'aboutUsLink'}">关于我们</router-link></li>
				<li><router-link :to="{name: 'aboutContactLink'}">联系我们</router-link></li>
				<li><a href="http://xzl52199.blog.163.com/" target="_blank">网易博客</a></li>
				<li><router-link :to="{name: 'aboutAuthorLink'}">联系站长</router-link></li>
			</ul>
		</div>
		<div class="copyright">			
			<p>© 2017-2020 xingzhilin.com.cn 版权所有  京ICP备12052863号-2</p>
		</div>
	</el-footer>
</template>

<script>

	export default {
		name: 'Footer',
		data() {
			return {
				msg: 'Footer',
			}
		},
		methods: {
			
		}
	}

</script>

<style scoped lang="scss">
	ul,li{
		list-style:none;
	}
	.el-footer{
		box-sizing: border-box;
		background-color: #31373B;
		min-height: 200px;
	}
	.about_wrap{
		text-align: center;
		border-bottom:1px solid #4B5054;
	}
	.about_wrap>li{
		box-sizing: border-box;
		display: inline-block;
		padding: 30px 20px;
	}
	.about_wrap>li>a{
		font-size: 16px;
		color: #9B9EA0;
	    text-decoration: none;
	}
	.about_wrap>li>a:hover{
		color:#28d0e9 !important;
	}
	.copyright{
		text-align: center;
		color: #9B9EA0;
		padding-top: 10px;
		font-size: 12px;
	}
</style>