<template>
  <div class="searchbar">
    <div class="row mt-3">
      <form class="col s12 m11 offset-m3" @submit.prevent="submitSearch">
        <div class="row">
          <div class="input-field col m6 s9">
            <input id="q" type="text" class="validate" required v-model="q">
            <label for="q">Search</label>
            <span class="helper-text" data-error="Field is reqired"></span>
          </div>
          <div class="input-field col m6 s3">
            <button class="btn waves-effect waves-light blue" type="submit" name="action">Go!</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'Searchbar',
  data: () => ({
    q: ''
  }),
  methods: {
    ...mapActions(["fetchVideos"]),
    submitSearch(){
      this.fetchVideos({
        searchText: this.q
      })
    }
  }
}
</script>

<style scoped>
  .mt-3 {
    margin-top: 3rem;
  } 
</style>