import axios from 'axios'

export const baseURL = process.env.VUE_APP_RAPID_API_BASEURL

export default axios.create({
    baseURL,
    headers: {
      'X-RapidAPI-Key': process.env.VUE_APP_RAPIDKEY,
      'X-RapidAPI-Host': process.env.VUE_APP_RAPIDHOST
    },
    validateStatus: function (status) {
      return status >= 200 && status <= 300
    },
  })
  