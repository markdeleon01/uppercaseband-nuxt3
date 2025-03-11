<template>
    <div id="nav">
      <NuxtLink to="/">Home</NuxtLink> |
    </div>
  </template>
  
  <script>
  export default {}
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
  