import {axiosClient} from "@/axiosClient";

const coffeProd = {
    state:{
        arrProd: [],
        isLoading: false
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
        },

        setIsLoad({commit}, value){
            commit('setIsLoad', value)
        }
    },

    mutations: {
        setCoffeProd(state, arrCard){
            state.arrProd = arrCard
            state.isLoading = true
        },

        setSearchCoffe(state, searchProd){
            state.isLoading = true
            state.arrProd = searchProd
        },

        setFilterCoffe(state, filterProd){
            state.isLoading = true
            state.arrProd = filterProd
        },

        setIsLoad(state, value){
            state.isLoading = value
        }
    },

    getters: {
        getProdCoffe(state){
            return state.arrProd
        },

        getProdById(state){
            return (id) => {
                return state.arrProd.find(item => item.id === +id)
            }
        },

        getStatusLoad(state){
            return state.isLoading
        }
    }
}

export default coffeProd