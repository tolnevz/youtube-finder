<template>
  <div class="video-list">
    <div v-for="video in getAll" :key="video.id.videoId">

      <ul class="collection">
        <li class="collection-item avatar">
          <router-link tag="a" :to="'/' + video.id.videoId">
            <img :src="video.snippet.thumbnails.default.url">
            <div class="content">
              <span class="title">{{ video.snippet.title }}</span>
            </div>
          </router-link>
          <!-- <pre>{{video}}</pre> -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: "Videolist",
  computed: mapGetters(["getAll"]),
}
</script>

<style scoped lang="scss">
  h4 {
    margin: 0;
    padding: 0;
    padding-bottom: 10px;
  }

  .collection .collection-item.avatar {
    padding: 0;
    
    a {
      display: flex;
      color: inherit;

      img {
        height: 100%;
      }

      .content {
        padding: 20px;

      }
    }

    
  }
</style>