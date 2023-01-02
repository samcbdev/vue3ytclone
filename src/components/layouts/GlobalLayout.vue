<template>
  <div id="global">
  <div class="row borer-bottom-new">
    <div class="outer-space d-flex justify-content-between align-items-center">
      <div class="logo-space">
        <router-link to="/">
          <img src="img/youtube-logo.jpg" />
        </router-link>
      </div>
      <div class="search-space">
        <div style="position:relative;">
          <input v-model="search" @keyup.enter="searchInput" class="form-control" placeholder="Search" />
          <div class="search-icon">
            <i @click="searchInput" class="fa fa-search"></i>
          </div>
        </div>
      </div>
      <div class="d-flex align-items-center">
        <div class>
          <i class="fas fa-folder-plus mr-2 ml-2 mr-md-4"></i>
        </div>
        <div class>
          <a href>
            <i class="fab fa-google-play mr-2 mr-md-4"></i>
          </a>
        </div>
        <div class>
          <a href>
            <i class="fas fa-bell mr-2 mr-md-4"></i>
          </a>
        </div>
      </div>
    </div>

  </div>
    <SideBar />
  </div>
</template>

<script>
import SideBar from "@/components/layouts/SideBar.vue";
import Service from '@/services/Service'
import { useYtStore } from '@/store/YtStore'

export default {
  name: "global",
  data () {
    return {
      search: ''
    }
  },
  components: {
    SideBar
  },
  setup() {
    const ytStore = useYtStore()

    return { ytStore }
  },
  methods: {
    searchInput() {
      this.ytStore.fetchSearchResults(this.search)
    },
    getTrend() {
      this.ytStore.fetchTrendResults()
    }
  },
  created() {
    this.getTrend()
  },
  mounted() {
    this.getTrend()
  }
};
</script>

<style>
</style>