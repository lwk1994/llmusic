<template>
	<div class="main">

		<div class="musicList">
			<div class="listHeader">
				<ul>
					<li v-for='item in listHeader'>{{item}}</li>

				</ul>
			</div>
			<div class="listSection">
				<!--<button @click='sendDis' style="background: white; width: 80px;height: 80px;"></button>-->

				<ul>

					<li v-for='(item,index) in newList' @click='playSong(index)'>
						<span class="songName">
						{{item.songName}}
					</span>
						<span class="songArtist"> 
						{{item.songArtist}}
					</span>
						<span class="songDuration">
						{{item.songDuration}}
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
		name: 'listening',
		data() {
			return {
				listHeader: [
					'歌曲',
					'歌手',
					'时长'
				],
				songArtist: [],
				listSection: [],
				duration: [],
				newList: [],
				songURL: '',
				screenHeight: document.body.clientHeight
			}
		},
		created: function() {
			document.getElementsByTagName('body')[0].background = this.$store.state.songBackground;
			axios.get('http://localhost:3000/playlist/detail?id=' + this.$store.state.listID)
				.then(response => {
					this.mainHeight();
					this.listSection = response.data.result.tracks;
					//					console.log(response);
					this.changeTime();

				})
				.catch(error => {
					alert('网络错误');
					//					console.log(error)
				})

		},
		mounted: function() {
						
//			window.onresize = function() {
//				console.log('22')
//					this.mainHeight();
//				}

		},
		methods: {
			//			main高度
			mainHeight: function() {
				document.getElementsByClassName('section')[0].style.height =
					window.innerHeight + 'px';
			},

			//			遍历取数据
			changeTime: function() {
				var songDuration = [];
				for(var i = 0; i < this.listSection.length; i++) {
					songDuration.push(this.listSection[i].duration);
					//					console.log(this.listSection[i].duration);

					//					假如秒少于两位数 在秒数前加零
					var Second
					if(parseInt((songDuration[i] % (1000 * 60)) / 1000) < 10) {
						Second = '0' + parseInt((songDuration[i] % (1000 * 60)) / 1000);
					} else {
						Second = parseInt((songDuration[i] % (1000 * 60)) / 1000);
					}

					this.duration.push(
						//						拿到分
						parseInt((songDuration[i] % (1000 * 60 * 60)) / (1000 * 60)) + ':' +
						//						拿到秒
						Second
					)
					//合并新数组
					this.newList.push({
						songName: this.listSection[i].name,
						songArtist: this.listSection[i].artists[0].name,
						songDuration: this.duration[i],
						//							songSrc:this.listSection[i]
					})
					//点击取得歌曲ID

				}
			},
			//点击播放音乐
			playSong: function(index) {

				//传值
				axios.get('http://localhost:3000/music/url?id=' + this.listSection[index].id)
					.then(response => {
						//					this.songURL.push(response.data.data[0].url);
						this.songURL = response.data.data[0].url;
						//传入vuex
						this.$store.state.songURL = response.data.data[0].url;
						//获取已播放歌曲，传入vuex，添加到“我听过的”
						console.log(response)

					})
				//添加到已播放歌曲中	
				axios.get('http://localhost:3000/song/detail?ids=' + this.listSection[index].id)
					.then(response => {
						//点击给播放器背景设置歌曲图片
						this.$store.state.songBackground = response.data.songs[0].al.picUrl;
						//						console.log(this.$store.state.songBackground)
						//						document.getElementsByClassName('back')[0].background = this.$store.state.songBackground;
						console.log(this.$store.state.songBackground)
						document.getElementsByTagName('body')[0].background = this.$store.state.songBackground;
						//查找数组做出判断，如果已存在列表中。将就数据从“我听过的”数组中删除
						for(var i = 0; i < this.$store.state.listened.length; i++) {
							if(this.$store.state.listened[i].id == this.listSection[index].id) {
								//console.log(i)
								this.$store.state.listened.splice(i, 1);

							}
						}
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

						this.$store.state.listened.unshift({
							id: this.listSection[index].id,
							songName: response.data.songs[0].name,
							artistName: response.data.songs[0].ar[0].name,
							duration: songDuration
						})

						console.log(this.$store.state.listened);

					})
			}

		},
	}
</script>

<style>
	* {
		color: #fff;
	}

</style>