import Vue from 'vue'
import Vuex from 'vuex'
import JsonViewer from 'vue-json-viewer'

Vue.use(Vuex)
Vue.use(JsonViewer)

export default new Vuex.Store({
  state: {
    component: "Status",
    data: "",
    sensor: ""

  },
  mutations: {
    change(state, component) {
      state.component = component
    },
    save(state, data) {
      state.data = data
    },
    sensor(state, sensor) {
      state.sensor = sensor
    }
  },
  getters: {
    component: state => state.component,
    data: state => state.data,
    sensor: state => state.sensor
  },
  actions: {
  },
  modules: {
  }
})


