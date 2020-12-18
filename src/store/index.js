import Vue from 'vue'
import Vuex from 'vuex'
import finder from './modules/finder'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    finder
  }
})
