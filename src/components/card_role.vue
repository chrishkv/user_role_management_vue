<template>
  <v-container>
    <v-card
        class="mx-auto"
        max-width="344"
        shaped
        >
        <v-toolbar flat>
          <v-spacer></v-spacer>
          <v-chip
            v-if="!rol.active"
            class="ma-2"            
            color="red"
            text-color="white"            
          >
            Inactivo
          </v-chip>
        </v-toolbar>
        <v-card-title class="text-h5">
          {{ rol.name }}
        </v-card-title>
        <v-card-subtitle>
          {{ subtitle }}
        </v-card-subtitle>
        <v-card-text>
          {{ rol.description }}
        </v-card-text>
        <v-card-actions>
          <v-list-item class="grow">
            <v-list-item-avatar color="grey darken-3" v-for="user in rol.users" :key="user.id">
              <v-img
                class="elevation-6"
                :alt="userFullName(user)"
                :title="userFullName(user)"
                :src="user.photo_url"
              ></v-img>
            </v-list-item-avatar>
          </v-list-item>        
        </v-card-actions>
        <v-card-actions>
          <div class="text--secondary body-2">Last update: {{ getDateLastUpdate() }}</div>
          <v-spacer></v-spacer>
          <v-btn
              color="grey"
              text              
            >
              Edit
            </v-btn>

            <v-btn
              color="red"
              text
              @click="deleteRole"
            >
              Delete
            </v-btn>
        </v-card-actions>
        <v-row>
        </v-row>
      </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'card_roles',    
    props: ['rol'],

    data: () => ({      
    }),
    computed: {
      subtitle: function () {
        const ROLE_TYPES = {
          'admin': 'Administrator Role',
          'job_admin': 'Job Administrarion Role',
        }
        return ROLE_TYPES[this.rol.type]
      },
    },

    mounted:{
    },

    methods:{
      userFullName(user) {
        return `${user.first_name} ${user.last_name}`
      },

      getDateLastUpdate() {        
        return this.rol.modified_on.substring(0,this.rol.modified_on.indexOf('T'))
      },

      deleteRole() {
        this.$store.state.role = this.rol
        this.$store.dispatch('deleteRoleAction')
      },
    },
  }
</script>
