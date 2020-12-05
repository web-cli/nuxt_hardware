export const state = () => ({
  tabNative: '1',
})
export const mutations = {
  toggleTab(state, val) {
    state.tabNative = val
  },
}
