<template>	
	<div class="container">
		<div class="header_wrap">
			<div class="banner_bg"></div>
			<el-row :gutter="24">
			  <el-col :span="2">
			  	<div class="logo">
					<span>LOVEYOU</span>
				</div>
			  </el-col>
			  <el-col :span="14">
			  	<el-menu 
			  		:default-active="activeIndex"
					class="el-menu-demo"
					text-color="rgba(255,255,255,.8)"
					mode="horizontal">
				    <el-menu-item index="1">首页</el-menu-item>
				    <el-menu-item index="1">感文</el-menu-item>
				    <el-menu-item index="1">感问</el-menu-item>
				    <el-menu-item index="1">感识</el-menu-item>
				</el-menu>
			  </el-col>
			  <el-col :span="4">
			  	<el-form ref="form" :model="form" label-width="80px">
					<el-form-item placeholder="搜索你喜欢的">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
				</el-form>
			  </el-col>
			  <el-col :span="4">
			  	<el-button type="primary">注册</el-button>
				<el-button>登录</el-button>
			  </el-col>
			</el-row>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'HeaderNav',
		data() {
			return {
				msg: 'Header',
				activeIndex: '1',
				form: {
					name: ''
				}
			}
		},
		created(){
			
		},
		methods: {
			
		}
	}

</script>

<style scoped lang="scss">
	.header_wrap{
		height: 500px;
		position: relative;
		.banner_bg{
			position: absolute;
		    height: 100%;
		    width: 100%;
		    opacity: .8;
		    background-image: url(./../assets/images/banner_bg.jpg);
		    background-position: center 0;
		    background-repeat: no-repeat;
		    background-size: cover;
		    transition: opacity .2s ease-in-out;
		}
		.logo{
			color: #FFF;
			font-size:20px;	
			margin-top:10px;		
		}
		.el-menu-demo{
			background:none;
		}		
		.el-menu--horizontal{
			border-bottom:none;
			margin-top:10px;
		}
		.el-menu--horizontal>.el-menu-item{
			color:rgba(255,255,255,.9);
			height:36px;
			line-height:36px;
		}
		.el-menu--horizontal>.el-menu-item:hover{
			background: rgba(255,255,255,.2);
		}
		.el-menu--horizontal>.el-menu-item.is-active{
			border:none;
			color:#FFF;
		}		
		.el-header{
			height: 500px;
			padding:0;
		}
	}
</style>