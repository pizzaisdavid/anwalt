<template>
  <div>
    <p>Latest posts</p>
    <div class="row">
      <UserPost
        v-for="post in posts"
        :key="post.id"
        :data="post"
        class="col-xs-6"
      ></UserPost>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

import UserPost from './UserPost.vue'

export default defineComponent({

  props: [
    'posts'
  ],

  components: {
    UserPost
  }
})
</script>

<style scoped></style>