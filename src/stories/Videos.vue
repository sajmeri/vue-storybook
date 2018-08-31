<template>
  <div class="hello">
    <h1>{{ heading }}</h1>

    <p>{{videodataArray.videos.length}} videos returned</p>
    <!-- <p>{{videodataArray.videos}} </p> -->

    <ul v-if="videodataArray.videos.length">
        <li v-for="videodata of videodataArray.videos">

        <p><img v-bind:src="videodata.thumbnail" /></p>
        <p><strong>{{videodata.title}}</strong></p>

        </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'videos',
  data () {
    return {
      heading: 'Videos',
      videodataArray: [],
      fluxImages: [] ,
      fluxCaptions: []
    }
  },
 mounted() {
      axios({ method: "GET", "url": "https://www.theweathernetwork.com/ca/api/videodata/getplaylistbyid?playlistID=2312993038001&noofvideosPerPlaylist=20&playlistStartsAt=0&sponsored=0&total=12&placecode=canu0029" }).then(result => {
        this.videodataArray= result.data;
        console.log(this.videodataArray.videos);
        for (var video in result.data.videos) {
         // if (result.data.hasOwnProperty(video) ) {
             this.fluxImages.push(result.data.videos[video].thumbnail);
             this.fluxCaptions.push(result.data.videos[video].title);
             console.log(result.data.videos[video].poster);
         // }
         }
      }, error => {
        console.error(error);
      });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}


</style>
