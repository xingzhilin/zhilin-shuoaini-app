<template>
	<el-container>
	  <el-header height="400px">
	  	<HeaderNav></HeaderNav>
	  </el-header>
	  <el-main>
	  		
	  		<div class="block">
			    <span class="demonstration">起始日期时刻为 12:00:00</span>
			    <el-date-picker
			      v-model="first"
			      type="datetimerange"
			      start-placeholder="开始日期"
			      end-placeholder="结束日期"
			      @focus="test"
			      @change="change"
			      :default-time="['12:00:00']">
			    </el-date-picker>
			</div>
			
			<div class="test">
				<el-input
				  placeholder="请输入内容"
				  v-model="input"
				  @blur="blur"
				  v-on:input="blur"
				  clearable>
				</el-input>
			</div>

			<div class="block">
			    <el-date-picker
			      v-model="dateStart"
			      type="date"
			      placeholder="选择日期">
			    </el-date-picker>
			    <el-date-picker
			      v-model="dateEnd"
			      type="date"
			      placeholder="选择日期">
			    </el-date-picker>
			</div>

			<el-upload
				class="avatar-uploader"
				action="https://wd7552920655trwouc.wilddogio.com/upload"
				:show-file-list="false"
				:on-success="handleAvatarSuccess"
				:before-upload="beforeAvatarUpload">
				<img v-if="imageUrl" :src="imageUrl" class="avatar">
				<i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>


	  </el-main>
	  <el-footer>Footer</el-footer>
	</el-container>
</template>
<script>
	import HeaderNav from './HeaderNav'
	export default {
		name: 'Home',
		components:{
			HeaderNav
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
</style>