import { defineStore } from 'pinia'
import Service from '@/services/Service'

const initialState = () => ({
    searchResults: {
        searchTitle: '',
        count: 0,
        data: []
    },
    vdoData: {}
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
            return await Service.get('/search', {query: data}).then((res) => {
                this.searchResults.count = res.estimatedResults
                this.searchResults.data = res.data
                this.searchResults.searchTitle = data
                return res
            })
        },
        async getsingleVdo(data) {
            return await Service.get('/dl', {id: data}).then((res) => {
                this.vdoData = res
                return res
                // console.log(res);
            })
        }
    }
})