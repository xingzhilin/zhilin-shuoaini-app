<template>
	<el-container class="login">		
		<el-header>
			<h1>金银岛煤炭网业务管理系统</h1>
		</el-header>
		<el-main>
			<el-form :model="loginForm" :rules="formRules" ref="loginForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
			    <el-form-item prop="account">
			      <el-input type="text" v-model="loginForm.account" auto-complete="off" placeholder="账号"></el-input>
			    </el-form-item>
			    <el-form-item prop="password">
			      <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
			    </el-form-item>
			    <el-form-item style="width:100%;">
			      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit" :loading="logining">登录</el-button>
			      <!--<el-button @click.native.prevent="handleReset">重置</el-button>-->
			    </el-form-item>
			  </el-form>
		</el-main>
	</el-container>
</template>
<script>
	import { requestLogin } from './../api/api'
	export default {
	data() {
	  return {
	    logining: false,
	    loginForm: {
			account: 'admin',
			password: '123456'
	    },
	    formRules: {
	      account: [
	        { required: true, message: '请输入账号', trigger: 'blur' },
	      ],
	      password: [
	        { required: true, message: '请输入密码', trigger: 'blur' },
	      ]
	    }
	  };
	},
	methods: {
		handleReset() {
			this.$refs.loginForm.resetFields();
		},
		handleSubmit(ev) {
			var _this = this;
			this.$refs.loginForm.validate((valid) => {
				console.log(valid);
				if (valid) {
					//_this.$router.replace('/table');
					this.logining = true;
					//NProgress.start();
					var loginParams = { username: this.loginForm.account, password: this.loginForm.password };
					requestLogin(loginParams).then(data => {
						this.logining = false;
						//NProgress.done();
						let { msg, code, user } = data;
						if (code !== 200) {
							this.$message({
							  message: msg,
							  type: 'error'
							});
						} else {
							sessionStorage.setItem('user', JSON.stringify(user));
							this.$router.push({ path: '/table' });
						}
					});
				} else {
					console.log('error submit!!');
					return false;
				}
				});
			}
		}
	}
</script>
<style>	
	body{
		background: #1f2d3d;
	}
</style>
<style lang="scss" scoped>
	/* @import './../assets/css/login_view.css' */
	.el-header{
		height: 100px;
		h1{
			font-size: 26px;
			color: #FFF;
			text-align: center;
			line-height: 100px;
		}
	}
	.login-container {
		/*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
		-webkit-border-radius: 5px;
		border-radius: 5px;
		-moz-border-radius: 5px;
		background-clip: padding-box;
		margin: 100px auto;
		width: 350px;
		padding: 35px 35px 15px 35px;
		background: #fff;
		border: 1px solid #eaeaea;
		box-shadow: 0 0 25px #cac6c6;
		h1{
			font-size: 26px;
			color: #FFF;
		}
		.remember {
			margin: 0px 0px 35px 0px;
		}
	}
</style>