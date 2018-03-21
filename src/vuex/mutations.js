export default {
    'ORG_RECEIVED'(state, org){
        delete org.id
        
        state.org = org
    }
}