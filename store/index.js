export const state = () => ({
  authUser: null,
})

export const mutations = {
  SET_USER(state, userData) {
    state.authUser = userData
  },
}
