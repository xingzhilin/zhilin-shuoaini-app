<template>
	<div class="error">
		<h2>温馨提示：<strong>您的浏览器需要更新才能访问哦</strong></h2>
	    <h3>请使用<strong>360浏览器、搜狗浏览器、苹果浏览器、火狐浏览器</strong><strong>或是其他高级浏览器</strong>等浏览器访问~</h3>
	    <p>
	        <a href="http://se.360.cn/" target="_blank"><img src="./../../assets/images/resume/error/360.jpg" alt="360浏览器"></a>
	        <a href="http://ie.sogou.com/" target="_blank"><img src="./../../assets/images/resume/error/sougou.jpg" alt="搜狗浏览器"></a>
	        <a href="http://www.apple.com/safari" target="_blank"><img src="./../../assets/images/resume/error/safari.png" alt="苹果浏览器"></a>
	        <a href="http://www.firefox.com/" target="_blank"><img src="./../../assets/images/resume/error/firefox.png" alt="火狐浏览器"></a>
	    </p>
	</div>
</template>
<script>
	export default {
		name: 'error',
		data(){
			return {
				msg: 'error'
			}
		}
	}
</script>
<style scoped lang="scss">
	body { text-align:center; padding-top:30px; }
    img { border:none; }
    h2,h3,h4 { color:#666; font-family:arial; }
    strong { border-bottom:1px dotted #930; font-weight:normal; padding-bottom:2px; color:#930; }
    p { padding:50px 0; letter-spacing:20px; }
    h4 { font-weight:normal; }
</style>