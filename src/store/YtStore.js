import { defineStore } from 'pinia'
import Service from '@/services/Service'

const initialState = () => ({
    searchResults: {
        searchTitle: '',
        count: 0,
        data: []
    },
    videoData: {}
})

export const useYtStore = defineStore('Yt', {
    state: initialState,
    getters: {
        getSearchResults() {
            return this.searchResults
        }
    },
    actions: {
        async fetchSearchResults(data) {
            try {
                const response = await Service.get('/search', {query: data})
                this.searchResults.count = response.estimatedResults
                this.searchResults.data = response.data
                this.searchResults.searchTitle = data
                return response
            } catch (error) {
                console.log(error);
                throw error;  
            }
            // return await Service.get('/search', {query: data}).then((res) => {
            //     this.searchResults.count = res.estimatedResults
            //     this.searchResults.data = res.data
            //     this.searchResults.searchTitle = data
            //     return res
            // })
        },
        async fetchTrendResults() {
            try {
                const response = await Service.get('/trending', {geo: 'IN'})
                console.log(response);
                this.searchResults.count = "Top"
                this.searchResults.data = response.data
                this.searchResults.searchTitle = "trending"
                return response
            } catch (error) {
                console.log(error);
                throw error;  
            }
            // return await Service.get('/search', {query: data}).then((res) => {
            //     this.searchResults.count = res.estimatedResults
            //     this.searchResults.data = res.data
            //     this.searchResults.searchTitle = data
            //     return res
            // })
        },
        async getsingleVdo(data) {
            try {
                const response = await Service.get('/dl', {id: data})
                this.videoData = response
                return response;
             } catch (error) {
                console.log(error);
                throw error;  
             }
        }
    }
})