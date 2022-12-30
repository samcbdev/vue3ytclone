<template>
  <div id="yt-stream">
    <video controls data-play="hover" muted="muted">
            <source
            :src="videoUrl"
            type="video/mp4"
            />
    </video>
  </div>
</template>

<script>
import { useYtStore } from "@/store/YtStore";

export default {
    name: 'yt-stream',
    data () {
        return {
            videoUrl: ''
        }
    },
    setup() {
        const ytStore = useYtStore();

        return { ytStore };
    },
    methods: {
        playVdo(id) {
            const searchRes = this.ytStore.getsingleVdo(id)
            this.videoUrl = searchRes
            console.log(searchRes);
        }
    },
    mounted() {
        this.playVdo(this.$route.params.id)
    }
}
</script>

<style>

</style>