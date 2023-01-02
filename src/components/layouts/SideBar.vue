<template>
  <div class="container-fluid m-0 p-0">
    <div class="row no-gutters">
      <div class="col-4 col-lg-2 sidebar-outer">
        <div class="menu-block col-4 col-lg-2 fixed">
          <div class="list-group">
            <router-link class="list-group-item list-group-item-action" to="/">
              <i class="fas fa-home mr-3"></i> Home
            </router-link>
            <router-link class="list-group-item list-group-item-action" to="/about">
              <i class="fas fa-fire mr-3"></i> Trending
            </router-link>
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fas fa-envelope mr-3"></i> Subscription
            </a>
          </div>
          <hr />
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fas fa-photo-video mr-3"></i> Library
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fas fa-history mr-3"></i> History
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fas fa-video mr-3"></i> Your videos
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fas fa-clock mr-3"></i> Watch later
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fas fa-thumbs-up mr-3"></i> Liked videos
            </a>
          </div>
          <hr />
          <p class="ml-3 font-weight-bold">SUBSCRIPTIONS</p>
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fas fa-photo-video mr-3"></i> Popular on YouTube
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fas fa-history mr-3"></i> Music
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fas fa-video mr-3"></i> Sports
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fas fa-clock mr-3"></i> Gaming
            </a>
          </div>
          <hr />
          <p class="ml-3 font-weight-bold">MORE FROM YOUTUBE</p>
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fas fa-photo-video mr-3"></i> YouTube Premium
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fas fa-history mr-3"></i> YouTube Movies
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fas fa-video mr-3"></i> Gaming
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fas fa-clock mr-3"></i> Live
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fas fa-clock mr-3"></i> Fahshion & Beauty
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fas fa-clock mr-3"></i> Learning
            </a>
          </div>
          <hr />
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fas fa-photo-video mr-3"></i> Setting
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fas fa-history mr-3"></i> Report history
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fas fa-video mr-3"></i> Help
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fas fa-clock mr-3"></i> Send feedback
            </a>
          </div>
        </div>
      </div>

      <div class="col-8 col-lg-10 col-md-8 pt-5 nn"> 
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar"
};
</script>

<style>
</style>