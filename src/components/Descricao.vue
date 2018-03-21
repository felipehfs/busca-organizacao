<template>
  <div v-if="org.name !== undefined" class="container">
      <h2>Bio da organização</h2>
        <a :href="org.repos_url" :title="org.name">
          <img :src="org.avatar_url" :alt="org.company" class="avatar">
        </a>
      <ul>
          <li>Nome {{ org.name }}</li>
          <li v-if="org.description !== ''">Descrição: {{ org.description }}</li>
          <li>Repositórios: {{org.public_repos}}</li>
          <li v-if="org.location">{{ org.location }}</li>
      </ul>
  </div>
</template>

<script>
import  {mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters({
            org: 'GET_ORG'
        })
    }
}
</script>

<style>
.avatar {
    width: 200px;
    height: 200px;
}
.container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
</style>
