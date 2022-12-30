<template>
  <div id="yt">
    <div class="video-row">
      <div class="d-flex justify-content-between align-items-center">
        <h6
          class="font-weight-bold py-2 pl-2"
        >{{ getResult.count }} results for: '{{ getResult.searchTitle }}'</h6>
      </div>

      <!-- <div class="owl-carousel">
        <Carousel :settings="settings" :breakpoints="breakpoints">
          <Slide v-for="slide in 10" :key="slide">
            <div class="video-info">
              <video controls data-play="hover" muted="muted">
                <source
                  src="videos/coverr-14-empty-small-street-in-spain-4777.mp4"
                  type="video/mp4"
                />
              </video>
              <div class="d-flex mt-2">
                <div class="author-thumb">
                  <img src="img/1.jpg" />
                </div>
                <div class="author-info">
                  <h6 class="font-weight-bold mb-1">
                    <a href>What is Node js? | Why it is so Famous?</a>
                  </h6>
                  <p class="text-muted">Nick John</p>
                  <span class="text-muted font-weight-bold small">71K views - 2 weeks ago</span>
                </div>
              </div>
            </div>
          </Slide>
        </Carousel>
      </div> -->

    <div class="d-flex flex-wrap">
        <div class="col-3 col-md-3" v-for="(res, index) in searchRes" :key="index">
          <div class="video-info col">
            <img class="card-img-top" style="cursor: pointer" @click="watchVdo(res.videoId)" :src="res.thumbnail[0].url" alt="Image" />
            <!-- <video controls data-play="hover" muted="muted">
                  <source
                    src="videos/coverr-14-empty-small-street-in-spain-4777.mp4"
                    type="video/mp4"
                  />
            </video>-->
            <div class="d-flex mt-2">
              <div class="author-thumb">
                <img :src="res.channelThumbnail[0].url" />
              </div>
              <div class="author-info">
                <div class="font-weight-bold mb-1" style="width: 200px;">
                  <a @click="watchVdo(res.videoId)" class="titleText" style="cursor: pointer">{{ res.title }}</a>
                </div>
                <p class="text-muted">{{ res.channelTitle }}</p>
                <span class="text-muted font-weight-bold small">{{ res.viewCount }} views - {{ res.publishedText }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="video-row">
      <div class="d-flex justify-content-between align-items-center">
        <h6 class="font-weight-bold py-2 pl-2">Video Row Heading</h6>
        <div>
          <a href>
            <i class="far fa-times-circle pr-2"></i>
          </a>
        </div>
      </div>

      <div class="owl-carousel row">
        <div class="video-info col">
          <video controls data-play="hover" muted="muted">
                <source
                  src="videos/coverr-14-empty-small-street-in-spain-4777.mp4"
                  type="video/mp4"
                />
          </video>
          <div class="d-flex mt-2">
            <div class="author-thumb">
              <img src="img/1.jpg" />
            </div>
            <div class="author-info">
              <h6 class="font-weight-bold mb-1">
                <a href>What is Node js? | Why it is so Famous?</a>
              </h6>
              <p class="text-muted">Nick John</p>
              <span class="text-muted font-weight-bold small">71K views - 2 weeks ago</span>
            </div>
          </div>
        </div>

        <div class="video-info col">
          <video controls data-play="hover" muted="muted">
                <source
                  src="videos/coverr-14-empty-small-street-in-spain-4777.mp4"
                  type="video/mp4"
                />
          </video>
          <div class="d-flex mt-2">
            <div class="author-thumb">
              <img src="img/1.jpg" />
            </div>
            <div class="author-info">
              <h6 class="font-weight-bold mb-1">
                <a href>What is Node js? | Why it is so Famous?</a>
              </h6>
              <p class="text-muted">Nick John</p>
              <span class="text-muted font-weight-bold small">71K views - 2 weeks ago</span>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { useYtStore } from "@/store/YtStore";

export default {
  name: "yt-hone",
  data() {
    return {
      searchTitle: "",
      searchRes: {},
      count: 0,
      // carousel settings
      settings: {
        itemsToShow: 1,
        snapAlign: "center"
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 3.5,
          snapAlign: "center"
        },
        // 1024 and up
        1024: {
          itemsToShow: 4,
          snapAlign: "start"
        }
      }
    };
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  setup() {
    const ytStore = useYtStore();

    return { ytStore };
  },
  methods: {
    setToData() {
      const searchRes = this.ytStore.getSearchResults.data.filter(item => item.type === 'video')
      this.searchRes = searchRes.slice(0, 50);
      this.searchTitle = this.ytStore.searchTitle;
      if (this.ytStore.getSearchResults >= 50) {
        this.count = 50;
      } else {
        this.count = this.ytStore.getSearchResults;
      }
    },
    watchVdo(vdoId) {
      this.$router.push({ name: 'yt-stream', params: { id: vdoId } });
      console.log(vdoId);
    }
  },
  watch: {
    "getResult.searchTitle": {
      handler: "setToData"
    }
  },
  computed: {
    getResult() {
      return this.ytStore.getSearchResults;
    }
  }
};
</script>

<style>
.titleText {
  display: block; /* Fallback for non-webkit */
  display: -webkit-box;
  height: 2.6em; /* Fallback for non-webkit, line-height * 2 */
  line-height: 1.3em;
  -webkit-line-clamp: 2; /* if you change this, make sure to change the fallback line-height and height */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
}
</style>