<template>
  <v-container>
    <v-row justify="start">      
      <v-col class="mb-4">
        <h3 class="display-1 font-weight-bold mb-2 text--secondary">
          User Roles Management

        </h3>
        {{ $store.getters.mensaje}}        
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4">
        <v-text-field
          placeholder="search"
          v-model="search"
          @input="searchName"
        >              
        </v-text-field>
      </v-col>
      <v-col cols="12" sm="4">
        <v-autocomplete
            label="Role Status"
            v-model="active"
            item-value="type"
            item-text="name"
            :items="activeOptions"
            @input="typeSearch"
          ></v-autocomplete>
      </v-col>      
      <v-col cols="12" sm="2">
        <v-btn
          color="primary"
          @click="newRole"
        >
          Create New Role
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="role in rolesCopy" :key="role.id">
        <card-role :rol="role"/>
      </v-col>      
    </v-row>
  </v-container>
</template>

<script>
  import information from '../json/user_roles.json';
  import cardRole from '../components/card_role.vue';

  export default {
    name: 'roles',
    active: '',
    components: {
      cardRole,
    },

    mounted() {
      this.loadInformation()
    },    

    data: () => ({
      rolesCopy: [],
      search: '',
      activeOptions: [
        { name: 'Activo', type: true},
        { name: 'Inactivo', type: false},
        { name: 'All', type: ''}
      ],
    }),

    methods:{
      loadInformation() {
        information.forEach(rol => {
          this.$store.state.role = rol
          this.$store.dispatch('addRoleAction')
        })
        this.rolesCopy = [...this.$store.state.roles]
      },

      newRole() {
        alert('dont work')
      },

      searchName() {
        if (this.search != ''){
          this.rolesCopy = this.rolesCopy.filter(role => 
            role.name.indexOf(this.search) >= 0
          )
        } else {
          this.rolesCopy = [...this.$store.state.roles]
        }
      },      
      
      typeSearch() {
        if (this.active != '') {
          this.rolesCopy = this.rolesCopy.filter(role => 
            role.active == this.active
          )
        } else {
          this.rolesCopy = [...this.$store.state.roles]
        }
      },
    },
  }
</script>
