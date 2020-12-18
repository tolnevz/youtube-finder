<template>
  <div class="videoitem">
    
    <div v-if="videoItem">
      <router-link to="/" tag="a" class="waves-effect waves-light btn back blue">Back</router-link>
      <div class="row">
        <div class="col 12 m8">
          <div class="video-container">
            <iframe width="853" height="480" :src="videoUrl" frameborder="0" allowfullscreen></iframe>
          </div>
          <h4>{{ videoItem.snippet.title }}</h4>
          <p>{{ videoItem.snippet.description }}</p>
          <p class="flex">
            <span><strong>Published at:</strong> {{ goodDate }}</span>
            <span><strong>Channel:</strong> {{videoItem.snippet.channelTitle}}</span>
          </p>
        </div>
        <div class="col 12 m4">
          <div class="overflowed">
            <videolist />
          </div>
        </div>
      </div>
    </div>
    <div v-else class="vh-100 centered">
      <h5>Video not found. <router-link to="/">Try to find something else</router-link></h5>
    </div>
    
  </div>
</template>

<script>
import Videolist from '../components/Videolist.vue'

import { mapGetters } from 'vuex'

export default {
  components: { Videolist },
  computed: {
    ...mapGetters(['getVideoById']),
    videoItem(){
      return this.getVideoById(this.$route.params.id)
    },
    videoUrl(){
      return `https://www.youtube.com/embed/${this.videoItem.id.videoId}`
    },
    goodDate(){
      return (new Date(this.videoItem.snippet.publishedAt)).toLocaleDateString('ru-RU')
    }
  }

}
</script>

<style lang="scss" scope>
  .back {
    margin: 30px 0px;
  }
  .flex {
    display: flex;
    justify-content: space-between;
  }
  .overflowed {
    height: 670px;
    overflow: overlay;
  }
  .vh-100 {
    height: 90vh;
    display: flex;
    align-items: center;

    &.centered {
      justify-content: center;
    }
  }
</style>