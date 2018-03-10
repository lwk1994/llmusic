<template>
	
	<listening></listening>
</template>

<script>
	import axios from 'axios'
	import state from '@/vuex/store'
	import listening from '@/components/page/listening'
	export default {
		name: 'rankList',
		components:{
			listening
		},
		
	}
</script>

<style>

</style>