<template>
  <div class="home">
 <HelloWorld :msg="mensagemBoasVindas"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import store from '../store'


@Component({
  components: {
    HelloWorld
  }
})
export default class HomeView extends Vue {


  public get mensagemBoasVindas(): string {
    
    let retorno: string = ''
    if(store.state.logado){
      retorno = 'bem  vindo voce esta logado'
    }else{
      retorno = 'faca seu login'
    }

    return retorno

  }

}
</script>
