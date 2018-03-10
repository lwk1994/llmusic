<template>
	<div class="main">

		<div class="musicList">
			<div class="listHeader">
				<ul>
					<li v-for='item in listHeader'>{{item}}</li>

				</ul>
			</div>
			<div class="listSection">

				<ul>

					<li v-for='(item,index) in this.$store.state.listened' @click='playSong(index)'>
						<span class="songName">
						{{item.songName}}
					</span>
						<span class="songArtist"> 
						{{item.artistName}}
					</span>
						<span class="songDuration">
						{{item.duration}}
					</span>

					</li>
				</ul>
			</div>

		</div>
	</div>
</template>

<script>
	import state from '@/vuex/store'
	import axios from 'axios'
	export default {
		name: 'listened',
		data() {
			return {
				listHeader: [
					'歌曲',
					'歌手',
					'时长'
				],
			}
		},
		methods: {
			playSong: function(index) {

				//传值
				axios.get('http://localhost:3000/music/url?id=' + this.$store.state.listened[index].id)
					.then(response => {
						console.log(response);
						//					this.songURL.push(response.data.data[0].url);
						this.songURL = response.data.data[0].url;
						//传入vuex
						this.$store.state.songURL = response.data.data[0].url;
						//获取已播放歌曲，传入vuex，添加到“我听过的”
						console.log(response)

					})
				
			},

		},
	}
	
</script>

<style>

</style>