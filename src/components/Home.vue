<template>
	<el-container>
		<el-header height="500px">
			<HeaderNav></HeaderNav>
		</el-header>
		<el-main>
			<router-view></router-view>
		</el-main>
		<Footer></Footer>
	</el-container>
</template>
<script>
	import HeaderNav from './HeaderNav'
	import Footer from './Footer'
	export default {
		name: 'Home',
		components:{
			HeaderNav,
			Footer
		},
		data(){
			return {
				msg: '首页',
				first: '',
				input:'',
				dateStart:'',
				dateEnd:'',
				imageUrl: ''
			}
		},
		methods:{
			test(){
				//alert($('.available').length);
				console.log(111);

				console.log($('.available').length);
				$('.available').click(function(){
					console.log($(this).html());
				})
			},
			change(){
				console.log(this.first);
				console.log($('.el-range-input').val());
			},
			blur(){
				console.log(this.input);
			},
			handleAvatarSuccess(res, file) {
		        this.imageUrl = URL.createObjectURL(file.raw);
		    },
		     beforeAvatarUpload(file) {
		        const isJPG = file.type === 'image/jpeg';
		        const isLt2M = file.size / 1024 / 1024 < 2;

		        if (!isJPG) {
		          this.$message.error('上传头像图片只能是 JPG 格式!');
		        }
		        if (!isLt2M) {
		          this.$message.error('上传头像图片大小不能超过 2MB!');
		        }
		        return isJPG && isLt2M;
		    }
		},
		mounted(){
			//alert($('.available').length);
		}
	}
</script>
<style scoped lang="scss">
	.el-header{
		height: 500px;
	}
	.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

.el-footer{
	box-sizing: border-box;
	background-color: #31373B;
	min-height: 300px;
}
</style>