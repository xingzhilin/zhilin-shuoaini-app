<template>
	<div class="navbar">
		<navbar-item-view></navbar-item-view>
	</div>
</template>
<script>
	import NavbarItemView from './NavbarItemView'
	export default {
		name: 'navbar',
		data(){
			return {
				msg: '导航'
			}
		},
		components: {
			'navbar-item-view': NavbarItemView
		}
	}
</script>
<style>
	
</style>