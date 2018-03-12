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
					//添加到已播放歌曲中	
				axios.get('http://localhost:3000/song/detail?ids=' + this.$store.state.listened[index].id)
					.then(response => {
						//点击给播放器背景设置歌曲图片
						this.$store.state.songBackground = response.data.songs[0].al.picUrl;
						//						console.log(this.$store.state.songBackground)
						//						document.getElementsByClassName('back')[0].background = this.$store.state.songBackground;
						console.log(this.$store.state.songBackground)
						document.getElementsByTagName('body')[0].background = this.$store.state.songBackground;
						
						var second
						//假如秒少于两位数 在秒数前加零
						if(parseInt((response.data.songs[0].dt % (1000 * 60)) / 1000) < 10) {
							second = '0' + parseInt((response.data.songs[0].dt % (1000 * 60)) / 1000);
						} else {
							second = parseInt((response.data.songs[0].dt % (1000 * 60)) / 1000);
						}

						var songDuration =
							//						拿到分
							parseInt((response.data.songs[0].dt % (1000 * 60 * 60)) / (1000 * 60)) + ':' +
							//						拿到秒
							//						parseInt((response.data.songs[0].dt % (1000 * 60)) / 1000)
							second

						

						console.log(this.$store.state.listened);

					})
					
					//歌词
				axios.get('http://localhost:3000/lyric?id=' + this.$store.state.listened[index].id)
					.then(response => {
						
						this.$store.state.lrcObj=[];
						console.log(response);
						var str = response.data.lrc.lyric;
						//						console.log(arr.split('\n'));
						var lyrics = str.split("\n");
//						var lrcObj = {};
						for(var i = 0; i < lyrics.length; i++) {
							var lyric = decodeURIComponent(lyrics[i]);
							var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
							var timeRegExpArr = lyric.match(timeReg);
							if(!timeRegExpArr) continue;
							var clause = lyric.replace(timeReg, '');
							for(var k = 0, h = timeRegExpArr.length; k < h; k++) {
								var t = timeRegExpArr[k];
								var min = Number(String(t.match(/\[\d*/i)).slice(1)),
									sec = Number(String(t.match(/\:\d*/i)).slice(1));
								var time = min * 60 + sec;
								if(clause !== '') {
									this.$store.state.lrcObj.push({ time: time, text: clause })
								}
							}
						}
						console.log(this.$store.state.lrcObj);

					})
				
			},

		},
	}
	
</script>

<style>

</style>