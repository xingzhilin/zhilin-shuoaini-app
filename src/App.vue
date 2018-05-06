<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
	import './api/device.js'
	export default {
		created(){
			if(device.mobile()){
				//window.location = “shouji.html”;  //可以换成http地址
				this.$router.push({name: 'tipsLink'})
			}
		},
		mounted() {
			if(device.mobile()){
				//window.location = “shouji.html”;  //可以换成http地址
				this.$router.push({name: 'tipsLink'})
			}else{
				this.$router.push({name: 'homeLink'})
			}
		}
	}
</script>
<style>
</style>
