<template>
    <div class="not-found">
      <h1>Oops!</h1>
      <h3>
        The {{ resource ? resource : "page" }} you're looking for is not available.
      </h3>
      <NuxtLink to="/" class="back">
        Back to the home page
      </NuxtLink>
    </div>
</template>
  
<script lang="ts">
  export default {
    asyncData ({ params }) {
      const resource = params.resource
      return { resource }
    },
    data: function () {
      return {
        resource: 'resource'
      }
    }
  }
</script>  