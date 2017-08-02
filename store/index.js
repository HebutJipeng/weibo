import Vue from 'vue'
import Vuex from 'vuex'
import bar from './modules/bar'
import * as getters from './getters'

Vue.use(Vuex)

const store = () => new Vuex.Store({
	getters,
	modules: {
		bar
	}
})

export default store