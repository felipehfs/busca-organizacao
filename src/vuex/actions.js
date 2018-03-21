import axios from 'axios'

export default {
    'FETCH_ORG' (context, name){
        axios.get(`https://api.github.com/orgs/${name}`)
        .then(response => context.commit('ORG_RECEIVED', response.data))
        .catch(response => alert("Nada encontrado!"))
    }
}