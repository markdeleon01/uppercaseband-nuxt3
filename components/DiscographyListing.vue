<template>
  <p class="release-item">
    <img class="release-thumbnail" :src="release.imageUrl"><br>
    <span class="release-title">{{ release.title }}</span><br>
    <span class="release-date">Released: {{ formatDate(release.releaseDate) }}</span><br>
    <a
      class="release-url"
      :href="release.spotifyUrl"
      target="_blank"
    >Listen on Spotify</a>
  </p>
</template>

<script>
import { dateFormatMixin } from '../mixins/dateFormatMixin'

export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    release: Object
  },
  mixins: [dateFormatMixin]
}
</script>

<style scoped>
.release-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 40px;
  border-style: groove;
  border-width: thin;
}
.release-item:last-of-type {
  padding-bottom: 20px;
}
.release-thumbnail {
  width: 300px;
  height: 300px;
  padding-bottom: 10px;
}
.release-title {
  font-weight: bold;
}
</style>
