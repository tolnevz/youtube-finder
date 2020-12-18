<template>
  <div>
    <Searchbar />
    <videolist />
  </div>
</template>

<script>

import Searchbar from '../components/Searchbar'
import Videolist from '../components/Videolist';

export default {
  name: "Home",
  components: {
    Searchbar,
    Videolist,
  },
};
</script>

