<template>
  <form @submit.prevent="pesquisar">
      <label for="">Digite sua pesquisa:</label><br>
      <input type="text" v-model="search"><br>
      <button type="submit">Pesquisar</button>
  </form>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return {
            search: '',
        }
    },
    methods:{
        ...mapActions({
            fetch: 'FETCH_ORG'
        }),
        pesquisar: function(){
            this.fetch(this.search)
            this.search = ''
        }
    }
}
</script>

<style>

</style>
