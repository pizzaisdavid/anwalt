<template>
  <div>
    <p>My Dashboard</p>
    <MyTimeline :posts="posts"></MyTimeline>
  </div>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'
import MyTimeline from './components/MyTimeline.vue'
import { postService } from './services'

export default defineComponent({

  components: {
    MyTimeline
  },

  setup() {
    const posts = ref([])

    postService.getRecent()
      .then((p) => {
        posts.value = p
      })
      .catch((error) => {
        console.error('posts could not be loaded.')
        console.log(error)
      })

    return {
      posts
    }
  }
})
</script>

<style scoped></style>
