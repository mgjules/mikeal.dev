export const state = () => ({
  dev: false
})

export const mutations = {
  setDev(state, dev) {
    state.dev = dev
  }
}

export const actions = {
  nuxtServerInit({ commit }, context) {
    commit('setDev', context.isDev)
  }
}
