<template>
  <div class="about">
    <h1>ESTA É A TELA DE LOGIN</h1>
    <input type="button" value="logar" @click="login()">
    <input type="button" value="logout" @click="logout()">
  </div>
</template>

<script lang="ts">
  
  import login from './LoginViewCls'
  export default login

</script>