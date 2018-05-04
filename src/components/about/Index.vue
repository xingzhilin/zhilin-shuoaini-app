<template>
	<div class="container">
		<el-row class="tac">
		  <el-col :span="4">
		    <el-menu
		      default-active="1"
		      class="el-menu-vertical-demo">
		      <el-menu-item index="1">
		        <i class="el-icon-menu"></i>
		        <span slot="title"><router-link :to="{name: 'aboutUsLink'}">关于我们</router-link></span>
		      </el-menu-item>
		      <el-menu-item index="2">
		        <i class="el-icon-document"></i>
		        <span slot="title"><router-link :to="{name: 'aboutContactLink'}">联系我们</router-link></span>
		      </el-menu-item>
		      <el-menu-item index="3">
		        <i class="el-icon-setting"></i>
		        <span slot="title"><router-link :to="{name: 'aboutAuthorLink'}">联系站长</router-link></span>
		      </el-menu-item>
		    </el-menu>
		  </el-col>
		  <el-col :span="18" class="about_wrap">
		  	<router-view></router-view>
		  </el-col>
		</el-row>
	</div>
</template>

<script>

	export default {
		name: 'Index',
		data() {
			return {
				msg: 'aboutUS',
			}
		},
		methods: {
			
		}
	}

</script>

<style lang="scss">
	
	.el-footer{
		box-sizing: border-box;
		background-color: #31373B;
		min-height: 300px;
	}
	
	.el-menu-item * {
	    vertical-align: middle;
	    text-decoration: none;
	}
	.about_wrap{
		padding-left: 30px;
	}
</style>