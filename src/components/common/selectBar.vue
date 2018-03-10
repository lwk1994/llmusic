<template>
		<div class="changeBar">
			<router-link to='/'>
				<el-button :autofocus='true' @click='reset'>我喜欢的音乐</el-button>
			</router-link>
			<router-link to='/page/rank'>
				<el-button>排行榜</el-button>
			</router-link>
			<router-link to='/page/search'>
				<el-button>搜索</el-button>
			</router-link>
			<router-link to='/page/listened'>
				<el-button>我听过的</el-button>
			</router-link>
		</div>
		

</template>

<script>
	import store from '@/vuex/store'
	//	import listening from '@/components/page/listening'
	//	import rank from '@/components/page/rank'
	export default {
		name: 'selectBar',
		data() {
			return {

			}
		},
		components: {
			//			listening,
			//			rank
		},
		methods:{
			reset:function(){
				this.$store.state.listID='331258161'
			}
		}

	}
</script>

<style scoped="scoped">
	.main{
		width: 60%;
		overflow: hidden;
	}
	.changeBar{
		display: inline-block;
		/*text-align: left;*/
	}
	.changeBar button {
		/*background-color: rgb(52,60,76);*/
		background: transparent;
		margin-left: 10px;
	}
	.main{
		display: inline-block;
		float: left;
		height: calc(100% - 200px);
	}
</style>