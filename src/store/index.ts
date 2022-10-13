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
  },
  //alteração no estado da aplicação - somente devem ocorrer aletações aqui
  //execução de forma sincrona
  //acionado atraves de um commit
  mutations: {
  },
  //ação realizada atraves de um dispatch
  //pode executar tarefas assincronas
  //encarregado de disparar mutaitions 
  actions: {
  },
  //costruir  divisoes dentro da store
  modules: {
  }
})
