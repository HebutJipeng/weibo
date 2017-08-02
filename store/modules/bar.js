import {
	BAR
} from '../mutations-type'

const state = {
	bar: 1
}

const mutations = {
	[BAR](state, num) {
		state.bar = num
	}
}

const actions = {
	changeBar: ({ commit }, num) => {
		commit(Bar, 2)
	}
}