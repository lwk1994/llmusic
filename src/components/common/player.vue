<template>
	<div class="audioPlay">
		<audio :src=this.$store.state.songURL  autoplay="autoplay" controls="controls"></audio>
		
	</div> 
</template>

<script>
	import store from '@/vuex/store'
	export default{
		name:'player',
		data(){
			return{
				
			}
		},
		components:{
//			player
			
		}
	}
</script>

<style>
	.audioPlay{
		position: absolute;
		bottom: 130px;
		left: 100px;
		width: 100%;
	}
</style>