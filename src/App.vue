<template>
  <!-- <nav>
    <router-link class="navbar-brand" to="/">Youtube</router-link>
    <router-link class="nav-link" to="/about">About</router-link>
  </nav> -->
    <component :is="layout" />
</template>

<script>
import GlobalLayout from "@/components/layouts/GlobalLayout.vue";
import StreamLayout from "@/components/layouts/StreamLayout.vue";

export default {
  components: {
    GlobalLayout,
    StreamLayout
  },
  data () {
    return {
      layout: null,
    }
  },
  watch: {
    $route(to) {
      if(to.meta.layout !== undefined) {
        this.layout = to.meta.layout
      } else {
        this.layout = GlobalLayout
      }
    }
  }
}
</script>
<style>

</style>
