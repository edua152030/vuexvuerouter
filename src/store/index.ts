import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //estado da aplicação
  //alterado por mutations
  // alteração de state geram renders
  state: {
    nome: 'eduardo',
    empresa: 'divimed',
    logado: false
  },
  //objeto de leitura da aplicação
  getters: {

    nomeMaiusculo: (state,_getters) => {
      return state.nome.toLocaleUpperCase()
    }

  },
  //alteração no estado da aplicação - somente devem ocorrer aletações aqui
  //execução de forma sincrona
  //acionado atraves de um commit
  mutations: {

    alterarEstadoLogin: (state, payload) =>{
      state.logado = payload
    }

  },
  //ação realizada atraves de um dispatch
  //pode executar tarefas assincronas
  //encarregado de disparar mutaitions 
  actions: {

    login:(context,_payload) => {
      context.commit('alterarEstadoLogin', true)
    },

    logout:(context,_payload) => {
      context.commit('alterarEstadoLogin', false)
    }

  },
  //costruir  divisoes dentro da store
  modules: {
  }
})
