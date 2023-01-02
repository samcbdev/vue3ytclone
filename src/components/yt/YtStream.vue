<template>
    <div id="yt-stream">
        <div class="embed-responsive embed-responsive-16by9">
            <!-- <iframe class="embed-responsive-item" src="..."></iframe> -->
            <video class="embed-responsive-item" data-play="hover" ref="videoPlayer" :src="videoUrl" autoplay controls />
        </div>
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
        async playVdo(id) {
            try {
                const searchRes = await this.ytStore.getsingleVdo(id)
                this.videoUrl = searchRes.formats[1].url
            } catch (error) {
                console.log(error);
            }
        },
    },
    mounted() {
        this.playVdo(this.$route.params.id)
    }
}
</script>

<style>

</style>