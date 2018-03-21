<template>
  <div id="app">
    <Home></Home>
    <hr>
    <Descricao></Descricao>
  </div>
</template>

<script>
import Home from './components/Home'
import Descricao from './components/Descricao'

export default {
  name: 'app',
  components:{
    Home,
    Descricao
  },
}
</script>

<style>

</style>
