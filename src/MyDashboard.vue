<template>
  <div>
    <MyTimeline :posts="posts"></MyTimeline>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import MyTimeline from './components/MyTimeline.vue'
import { postService } from './services'

export default defineComponent({

  components: {
    MyTimeline
  },

  data() {
    return {
      posts: []
    }
  },

  setup() {
    postService.getRecent()
      .then((posts) => {
        this.posts = posts
      })
      .catch(() => {
        console.error('posts could not be loaded.')
      })
  }
})
</script>

<style scoped></style>
