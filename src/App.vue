<template>
	<div id="app">
		<h2>llMusic在线播放器</h2>

		<div class="section">
			<selectBar></selectBar>
			<keep-alive>

				<transition name="fade" mode='out-in'>
					<router-view></router-view>
				</transition>
			</keep-alive>
			<player></player>
		</div>

	</div>
</template>

<script>
	import selectBar from '@/components/common/selectBar'
	import listening from '@/components/page/listening'
	import rank from '@/components/page/rank'
	import search from '@/components/page/search'
	import listened from '@/components/page/listened'
	import player from '@/components/common/player'
	export default {
		name: 'App',
		components: {
			//	button,
			listening,
			selectBar,
			rank,
			search,
			listened,
			player
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		/*margin-top: 60px;*/
		position: relative;
		height: 100%;
	}
	
	h2 {
		color: #fff;
		font-size: 20px;
	}
	.section{
		max-width: 1920px;
		margin: 0 auto;
	}
	span{
		color: #fff;
	}
	.main {
		/*height: 457px;*/
		height: calc(100% - 300px);
		/*overflow-y: auto;*/
		width: calc(100% - 370px);
	}
	.listSection{
		height: 100%;
		overflow-y: auto;
	}
	.musicList{
		height: 100%;
	}
	.listHeader {
		margin-top: 50px;
	}
	
	.listHeader ul {
		overflow: hidden;
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid hsla(0, 0%, 100%, .06);
	}
	
	.listHeader ul li {
		display: inline-block;
		width: 20%;
		text-align: center;
	}
	
	.listHeader ul li:nth-child(1) {
		text-align: left!important;
		float: left;
		width: 40%;
	}
	
	.listHeader ul li:nth-child(2) {
		text-align: left!important;
		float: left;
		width: 30%;
	}
	
	.listHeader ul li:nth-child(3) {
		text-align: middle!important;
	}
	
	.listSection {
		/*overflow-y: scroll;
		height: 400px;*/
	}
	
	.listSection ul {
		overflow: hidden;
		/*margin-left: -40px;*/
	}
	
	.listSection ul li {
		overflow: hidden;
		height: 60px;
		line-height: 60px;
		border-bottom: 1px solid hsla(0, 0%, 100%, .06);
		transition: 0.3s;
	}
	
	.listSection ul li:hover {
		background-color: rgba(150, 150, 150, 0.5);
		cursor: pointer;
	}
	
	.songName {
		text-align: left!important;
		display: inline-block;
		float: left;
		width: 40%;
	}
	
	.songArtist {
		text-align: left!important;
		display: inline-block;
		float: left;
		width: 30%;
	}
	
	.songDuration {
		text-align: middle!important;
		display: inline-block;
	}
	
	.fade-enter {
		opacity: 0;
	}
	
	.fade-leave {
		opacity: 1;
	}
	
	.fade-enter-active {
		transition: opacity .3s;
	}
	
	.fade-leave-active {
		opacity: 0;
		transition: opacity .3s;
	}
</style>