import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Brothers from '../features/brothers/store'
//import Brothers from '../features/brothers/store'

const modules = {
  Brothers
}

export default new Vuex.Store({
  modules
})
