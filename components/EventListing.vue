<!-- eslint-disable vue/no-v-html -->
<template>
  <p class="event-item">
    <span class="event-title">{{ event.title }}</span><br>
    <span class="event-date">{{ formatDate(event.date) }}</span><br>
    <span class="event-location">{{ event.location }}</span><br>
    <span class="event-content" v-html="event.content" />
    <a
      class="event-url"
      :href="event.externalUrl"
      target="_blank"
    >Learn more</a>
  </p>
</template>

<script>
import { dateFormatMixin } from '../mixins/dateFormatMixin'

export default {
  mixins: [dateFormatMixin],
  props: {
    // eslint-disable-next-line vue/require-default-prop
    event: Object
  }
}
</script>

<style scoped>
.event-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 40px;
  border-style: groove;
  border-width: thin;
}

.event-item:last-of-type {
  padding-bottom: 20px;
}

.event-title {
  font-weight: bold;
  text-align: center;
}

.event-content {
  text-align: center;
}
</style>
