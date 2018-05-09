<template>
	<div class="tips">
		<el-dialog
		  title="提示"
		  :visible.sync="centerDialogVisible"
		  @close="handleClose"
		  width="80%"
		  center>
		  <span>目前网站没有移动端（ mobile ）做适配，请您用电脑打开此网站，谢谢哦～～</span>
		</el-dialog>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				centerDialogVisible: true
			}
		},
		created(){
			if(!device.mobile()){
				//window.location = “shouji.html”;  //可以换成http地址
				this.$router.push({name: 'homeLink'})
			}
		},
		methods: {
			handleClose(){
				this.centerDialogVisible = false;
				window.location.href = 'http://xzl52199.blog.163.com/';
			}
		}
	}
</script>
<style>
	
</style>