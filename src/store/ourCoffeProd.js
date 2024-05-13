import {axiosClient} from "@/axiosClient";

const coffeProd = {
    state:{
        arrProd: []
    },

    actions: {
        setCoffeProd({commit}){
            axiosClient.get('/coffee').then(res => {
                commit('setCoffeProd', res.data)
            })
        },

        setSearchCoffe({commit}, text){
            axiosClient.get(`/coffee?name_like=${text}`).then(res => {
                commit('setSearchCoffe', res.data)
            })
        },

        setFilterCoffe({commit}, words){
            axiosClient.get(`/coffee?country=${words}`).then(res => {
                commit('setFilterCoffe', res.data)
            })
        }
    },

    mutations: {
        setCoffeProd(state, arrCard){
            state.arrProd = arrCard
        },

        setSearchCoffe(state, searchProd){
            state.arrProd = searchProd
        },

        setFilterCoffe(state, filterProd){
            state.arrProd = filterProd
        }
    },

    getters: {
        getProdCoffe(state){
            return state.arrProd
        }
    }
}

export default coffeProd