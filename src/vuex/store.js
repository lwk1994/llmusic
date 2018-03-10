import Vue from 'vue';
import Vuex from 'vuex';



Vue.use(Vuex);


const state={
	songURL:'',
	rank:'ass',
	rankID:'',
	listID:'331258161',
	listened:[],
	songBackground:'http://p1.music.126.net/GCJy3VguiVQIvzfTwResMg==/2535473813700425.jpg'
}


export default new Vuex.Store({
	state
})
