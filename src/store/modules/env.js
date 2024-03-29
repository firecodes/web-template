
const state = {
  winPage: {}
}

const mutations = {
  SET_WINPAGE: (state, winPage) => {
    winPage = winPage || {}
    state.winPage = Object.assign({}, state.winPage, winPage)
  }
}

const actions = {
  setWinPage({ commit }, winPage) {
    commit('SET_WINPAGE', winPage)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
