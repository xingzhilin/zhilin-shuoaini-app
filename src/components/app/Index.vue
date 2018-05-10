<template>
	<div class="app_wrap">
		<group>
	      <cell title="title" value="value"></cell>
	    </group>
	</div>
</template>
<script>
import { Group, Cell } from 'vux'
	export default {
		name: 'AppIndex',
		data(){
			return {
				msg: 'app'
			}
		},
		components: {
		    Group,
		    Cell
		}
	}
</script>
<style>
	
</style>