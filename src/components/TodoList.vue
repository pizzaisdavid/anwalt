<template>
  <div>
    <p>My Todos</p>
    <div
      class="row"
    >
      <TodoItem
        v-for="task in tasks"
        :key="task.id"
        :item="task"
        class="col-xs-6"
      ></TodoItem>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

import TodoItem from './TodoItem.vue'

export default defineComponent({

  props: [
    'tasks'
  ],

  components: {
    TodoItem
  }
})
</script>

<style scoped></style>