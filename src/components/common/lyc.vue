<template>
	<div class="lyc">
		<div class="songImg">
			<img :src= "this.$store.state.songBackground"/>
		</div>
		<div class="songLyc">
			<ul>
				<li v-for='item in this.$store.state.lrcObj'>
					{{item.text}}
				</li>
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
			
		},
		mounted(){
			//拿到时间
			
		}
	}
</script>

<style >
	.songImg img{
		width: 186px;
		height: 186px;
	}
	.lyc{
		height: 100%;
	}
	
	.songLyc{
		height: 390px;
		overflow: hidden;
	}
	.songLyc ul{
		padding: 0;
		/*height: calc(100% - 300px);*/
	}
	.songLyc ul li{
		height: 50px;
		font-size: 16px;
	}
</style>