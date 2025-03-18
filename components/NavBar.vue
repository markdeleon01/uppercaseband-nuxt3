  <template>
    <div id="nav">
      <NuxtLink data-testid="home" to="/">Home</NuxtLink> |
      <NuxtLink data-testid="about" :to="{ name: 'About' }">About</NuxtLink> |
      <NuxtLink data-testid="discography" :to="{ name: 'Discography' }">Discography</NuxtLink> |
      <NuxtLink data-testid="events" :to="{ name: 'Events' }">Events</NuxtLink>
    </div>
  </template>
  
  <script lang="ts">
    /* c8 ignore start */
    export default {}
    /* c8 ignore stop */
  </script>
  
  <style scoped>
  #nav {
    padding: 30px;
  }
  
  #nav a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: underline;
  }
  
  #nav a:hover {
    background-color: lightblue;
  }
  
  #nav a.nuxt-link-exact-active {
    color: royalblue;
    text-decoration: none;
    background-color: white;
  }
  
  @media (max-width: 359px) {
    #nav {
      display: grid;
    }
  }
  @media (min-width: 360px) {
    #nav {
      padding-left: 80px;
      padding-right: 80px;
    }
  }
  @media (min-width: 411px) {
    #nav {
      padding-left: 50px;
      padding-right: 50px;
    }
  }
  </style>
  