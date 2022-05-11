<template>
  <v-app>
    <v-main>
      <MyDashboard/>
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

import MyDashboard from './MyDashboard.vue'

export default defineComponent({
  components: {
    MyDashboard
  }
})
</script>
