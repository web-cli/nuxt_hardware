import { layoutMockJson } from '@/assets/js/layoutMockJson'
export const state = () => ({
  tabNative: '1',
})
export const mutations = {
  toggleTab(state, val) {
    state.tabNative = val
    val === 'mcmastercarr' && (state.tabNative = 1)
    if (isNaN(+val)) {
      this.$router.push({ path: `/${val}` })
    } else {
      this.$router.push({ path: `/${layoutMockJson[+val - 1].url}` })
    }
    console.log(val)
  },
}
