<template>
	<div class="lyc">
		<div class="songImg">
			<img :src= "this.$store.state.songBackground"/>
		</div>
		<div class="songLyc">
			<ul>
				<li></li>
			</ul>
		</div>
	</div>
</template>

<script>
	import store from '@/vuex/store'
	export default{
		name:'lyc',
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
	.songImg img{
		width: 186px;
		height: 186px;
	}
</style>