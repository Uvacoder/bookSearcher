export const state = () => ({
  isAuth: false
})

export const mutations = {
  setAuth(state, payload) {
    state.isAuth = payload
  },
}

export const actions = {
  login({commit},payload){
    commit('setAuth',payload === "asdfghjklasdfghj")
    return payload === "asdfghjklasdfghj"
  }
}

export const getters = {
  getUserAuth(state){
    return state.isAuth
  }
}
