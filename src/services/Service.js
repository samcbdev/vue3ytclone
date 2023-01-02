import BaseService, { baseURL } from './BaseService'

class Service {
    get(url, value) {
        return new Promise((res) => {
            BaseService.get(baseURL+url, { params: value })
                .then((response) => {
                    res(response.data)
                    return response.data
                })
                .catch((error) => {
                    // rej(error)
                    return error
                })
        })
    }

    post(url, value) {
        return new Promise((res) => {
            BaseService.post(url, value)
                .then((response) => {
                    res(response.data)
                    return response.data
                })
                .catch((error) => {
                    // rej(error)
                    return error
                })
        })
    }

    put(url, value) {
        return new Promise((res) => {
            BaseService.put(url, value)
                .then((response) => {
                    res(response.data)
                    return response.data
                })
                .catch((error) => {
                    // rej(error)
                    return error
                })
        })
    }

    delete(url, value) {
        return new Promise((res) => {
            BaseService.delete(url, value)
                .then((response) => {
                    res(response.data)
                    return response.data
                })
                .catch((error) => {
                    // rej(error)
                    return error
                })
        })
    }

    patch(url, value) {
        return new Promise((res) => {
            BaseService.patch(url, value)
                .then((response) => {
                    res(response.data)
                    return response.data
                })
                .catch((error) => {
                    // rej(error)
                    return error
                })
        })
    }
}

export default new Service()