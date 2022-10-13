import { Mutation, VuexModule, Module, Action} from 'vuex-module-decorators'

export default class LoginModule extends VuexModule{


    public nome: string = 'eduardo'
    public empresa: string = 'divimed'
    public logado: boolean = false


    @Mutation
    public alterarEstadoLogin(logado: boolean): void {
        console.log('dentro do estado', logado)
        this.logado = logado
      }

    @Action({commit: 'AlterarEstadoLogin'})
    public Login(context: any,_payload: any){
        return true
    }

    @Action({commit: 'AlterarEstadoLogin'})
    public Logout(context: any,_payload: any){
        return false
    }
}