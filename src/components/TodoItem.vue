<template>
  <v-card
    class="mx-auto"
    max-width="300"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-2">
          post id: {{ data.id }}
        </div>
        <div class="text-overline mb-2">
          user id: {{ data.user_id }}
        </div>
        <v-list-item-title class="text-h8 mb-1">
          {{ data.title }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ data.status }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: ['data']
})
</script>

<style scoped></style>