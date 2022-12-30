# vue3ytclone

#rapid API
  https://rapidapi.com/ytjar/api/yt-api
  
#html template
  https://bootstraplily.com/download-free-youtube-home-page-ui-design-using-twitter-bootstrap/

#owl carousel
  https://www.npmjs.com/package/vue-owl-carousel

#ref code

async streamVdo(vdoId) {
    const options = {
    method: 'GET',
    url: 'dl',
    params: {id: vdoId},
    headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': ''
    }
    };

    const res = await axios.request(options).then(function (response) {
        return response.data
    })
    this.videoUrl = res.formats[1].url
}

<iframe :src="videoUrl" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        
