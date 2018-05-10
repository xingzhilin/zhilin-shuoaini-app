<template>
	<div class="container">
		<div class="myInfoText">
            <p>邢智琳，坐标北京的一名Web前端开发工程师，大学专业是计算机系经济信息管理专业，大学中学习了网页三剑客、数据库原理 ，C语言等相关计算机的课程。2011年六月毕业之后，一直从事前端的工作，从最开始的网页设计，flash动画，网页切图，2012年之后一直专注于web前端（HTML、CSS和JavaScript）的开发。</p>
            <p>Web前端是一门有容乃大的行业，技术发展迅速，学习的道路还很长，我们要时时关注前端行业的发展，专研新技术知识。</p>
            <p><router-link :to="{name: 'resumeLink'}">个人简历</router-link></p>
        </div>
	</div>
</template>

<script>

	export default {
		name: 'Author',
		data() {
			return {
				msg: 'Author',
			}
		},
		methods: {
			
		}
	}

</script>

<style scoped lang="scss">
.myInfoText{
	padding-top: 20px;
}
.myInfoText p{
	line-height: 26px;
	text-indent: 2em;
}
</style>