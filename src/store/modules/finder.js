export default {
  state: {
    videos: []
  },
  mutations: {
    updateVideos(state, videos){
      state.videos = videos
    }
  },
  actions: {
    fetchVideos(ctx, q) {
      fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${q.searchText}&type=video&key=AIzaSyDc0727C3v6r451myJ5C6y8f4jcoG-I4Rs`)
        .then(response => response.json())
        .then(data => {
          ctx.commit('updateVideos', data.items);
          console.log(data.items);
        })
    }
  },
  getters: {
    getAll: state => state.videos,
    getVideoById: state => id => {
      return state.videos.find(video => video.id.videoId === id)
    }
  }
}