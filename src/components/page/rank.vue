<template>
	<div class="main">
		<div class="rank">
			<ul>
				<router-link to='/page/rankList'>

					<li v-for='(item,index) in rankList' @click='sendRank(index)'>
						<img :src='item.rankImg' alt="" />
						<h3>
						{{item.rankName}}
					</h3>
					</li>
				</router-link>
			</ul>

		</div>
	</div>
</template>

<script>
	import store from '@/vuex/store'
	import axios from 'axios'
	export default {
		name: 'rank',
		data() {
			return {
				rankList: []
			}
		},
		created: function() {
			this.getRank()

		},
		mounted: function() {
			console.log(this.rankList);
		},
		methods: {
			//遍历请求歌曲封面以及姓名
			getRank: function() {
				for(var i = 0; i < 23; i++) {
					axios.get('http://localhost:3000/top/list?idx=' + i)
						.then(response => {
//							console.log(response)
							this.rankList.push(

								{
									//获取排行榜名字
									rankName: response.data.playlist.name,
									//获取排行榜图片
									rankImg: response.data.playlist.creator.avatarUrl,
									//获取排行榜歌单ID
									rankID: response.data.playlist.id,
								}

							);

						})
				}
			},

			//排行榜添加到正在播放中
			sendRank: function(index) {
				//传递
				this.$store.state.listID = this.rankList[index].rankID;
				//				console.log(this.$store.state.rankID)
			}

		}
	}
</script>

<style>
	.rank img {
		width: 120px;
		height: 120px;
	}
	
	.rank h3 {
		color: #fff;
		font-size: 16px;
	}
	
	.rank ul {
		overflow: hidden;
	}
	
	.rank ul li {
		display: inline-block;
		margin: 40px 40px;
		width: 150px;
		height: 150px;
	}
</style>