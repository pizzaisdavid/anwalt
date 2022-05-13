<template>
  <v-card
    class="mx-auto"
    max-width="300"
    outlined
  >
    <v-checkbox
      v-model="status"
      :label="item.title"
    ></v-checkbox>
  </v-card>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: ['item'],
  data() {
    return {
      status: this.item.status === 'completed'
    }
  }
})
</script>

<style scoped></style>