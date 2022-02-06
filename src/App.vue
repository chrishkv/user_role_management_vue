<template>
  <v-app>
    <v-main>
      <roles/>
    </v-main>
  </v-app>
</template>

<script>
import roles from './components/roles';

export default {
  name: 'App',

  components: {
    roles,
  },

  data: () => ({
    //
  }),
};
</script>
