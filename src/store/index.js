import Vue from 'vue'
import Vuex from 'vuex'
import JsonViewer from 'vue-json-viewer'

Vue.use(Vuex)
Vue.use(JsonViewer)

export default new Vuex.Store({
  state: {
    component: "Status"

  },
  mutations: {
    change(state, component) {
      state.component = component
    }
  },
  getters: {
    component: state => state.component

  },
  actions: {
  },
  modules: {
  }
})
