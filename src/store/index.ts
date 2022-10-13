import Vue from 'vue'
import Vuex from 'vuex'
import LoginModules from './LoginModule'

Vue.use(Vuex)

export default new Vuex.Store({
  //estado da aplicação
  //alterado por mutations
  // alteração de state geram renders
  state: {},
  //objeto de leitura da aplicação
  
  //costruir  divisoes dentro da store
  modules: {
    LoginModules
  }
})
