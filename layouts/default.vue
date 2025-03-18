/* c8 ignore start */
<template>
    <div id="app">
        <nav>
            <NavBar />
        </nav>
        <main>
            <div id="page-header">
                <h1>U P P E R C A S E</h1>
            </div>
            <div id="page-section">
                <slot />
            </div>
        </main>
    </div>
</template>
/* c8 ignore stop */

<script lang="ts">
/* c8 ignore start */
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
/* c8 ignore stop */
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
}

#page-header {
  border-bottom: 1px;
  border-bottom-color: grey;
  border-bottom-style: solid;
}

#page-section {
  padding-top: 20px;
}

</style>
