<template>	
	<div class="container">
		<div class="header_wrap">
			<div class="banner_bg"></div>



			<el-row class="row_wrap">
			  <el-col :xs="8" :sm="6" :md="4" :lg="4" >
			  	<div class="logo">
					<span>LOVEYOU</span>
				</div>
			  </el-col>
			  <el-col :xs="8" :sm="4" :md="8" :lg="12">
			  	<el-menu 
			  		:default-active="activeIndex"
					class="el-menu-demo"
					text-color="rgba(255,255,255,.8)"
					mode="horizontal">
				    <el-menu-item index="1"><router-link :to="{name: 'homeLink'}">首页</router-link></el-menu-item>
				    <el-menu-item index="1"><router-link :to="{name: 'articlesLink'}">感文</router-link></el-menu-item>
				    <el-menu-item index="1"><router-link :to="{name: 'questionsLink'}">感问</router-link></el-menu-item>
				    <el-menu-item index="1"><router-link :to="{name: 'emotionsLink'}">感识</router-link></el-menu-item>
				</el-menu>
			  </el-col>
			  <el-col :xs="8" :sm="6" :md="4" :lg="4">
			  	<el-form ref="form" :model="form" label-width="80px">
					<el-form-item>
						<el-input class="search" placeholder="搜索你喜欢的" v-model="form.name"></el-input>
					</el-form-item>
				</el-form>
			  </el-col>
			  <el-col :xs="6" :sm="6" :md="4" :lg="4">
			  	<el-button type="primary">注册</el-button>
				<el-button>登录</el-button>
			  </el-col>
			</el-row>
			<div class="search_main">
				<h3>爱TA，就赶紧向TA告白吧！</h3>
				<el-form ref="form" :model="form" label-width="80px">
					<el-form-item>
						<el-input class="search_input" placeholder="搜索你喜欢的" v-model="form.name"></el-input>
					</el-form-item>
				</el-form>
			</div>
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
		.row_wrap{
			padding-top:15px;
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
		.el-form-item__content{
			margin-left:0;
		}
		.search{
			width: 200px;
			margin-left: -60px;
		}
		.search_main{
			width:800px;
			margin:100px auto;
			h3{
				color: #000;
				text-shadow: 5px 3px 5px #ccc;
				text-align: center;
				font-size: 36px;
			}
		}
		.search_wrap{

			.search_input{
				width:60%;
				margin:10px auto;
				margin-left: -80px;
			}
		}
	}
</style>