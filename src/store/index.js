import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {    
    roles: [],
    role: null,

  },
  mutations: {
    addRole(state) {
      state.roles = [state.role, ...state.roles]
    },
    
    deleteRole(state) {
      state.roles = state.roles.filter(role => role.id != state.role.id)
    }
  },
  actions: {
    addRoleAction(context) {
      context.commit('addRole')
    },

    deleteRoleAction(context) {
      context.commit('deleteRole')
    },
  },
  modules: {    
  },

  getters:{  
    roles(state) {
      return state.roles
    },
  }
})
