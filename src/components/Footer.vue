<template>
	<el-footer>
		<div class="footer_nav">
			<ul>
				<li><router-link>关于我们</router-link></li>
				<li><router-link>联系我们</router-link></li>
				<li><router-link to="http://xzl52199.blog.163.com/">网易博客</router-link></li>
				<li><router-link>联系站长</router-link></li>
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
	.el-footer{
		box-sizing: border-box;
		background-color: #31373B;
		min-height: 300px;
	}
</style>