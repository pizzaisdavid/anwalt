<template>
  <v-alert
    max-width="400px"
    border="bottom"
    color="red lighten-2"
    dark
  >
  No entries found! Specify a user id as a parameter in the URL.

  Get an id from here: <a href="https://gorest.co.in/public/v2/todos">https://gorest.co.in/public/v2/todos</a>
  For example: <a href="http://localhost:8082?user_id=3860">http://localhost:8082?user_id=3860</a>
  </v-alert>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
})
</script>

<style scoped></style>