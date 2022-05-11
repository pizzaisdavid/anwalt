<template>
  <div style="padding-left: 7px;">
    <p>My Dashboard</p>
    <MyTimeline :posts="posts"></MyTimeline>
    <br>
    <NoTodosFound v-if="tasks.length === 0"></NoTodosFound>
    <TodoList v-else :tasks="tasks"></TodoList>
  </div>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'
import MyTimeline from './components/MyTimeline.vue'
import TodoList from './components/TodoList.vue'
import NoTodosFound from './components/NoTodosFound.vue'

import {
  postService,
  taskService
} from './services'

export default defineComponent({

  components: {
    MyTimeline,
    TodoList,
    NoTodosFound
  },

  setup() {
    const posts = ref([])
    const tasks = ref([])

    postService.getRecent()
      .then((p) => posts.value = p)
      .catch((error) => console.log(error))

    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const userId = urlParams.get('user_id')
    taskService.getAll(userId)
      .then((t) => tasks.value = t)
      .catch((error) => console.log(error))

    return {
      posts,
      tasks
    }
  }
})
</script>

<style scoped></style>
