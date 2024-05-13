const goods = {
    state: {
        goodsArr: []
    },

    actions: {
        setGoods({commit}, arrProd){
            commit('setGoods', arrProd)
        }
    },

    mutations: {
        setGoods(state, arrProd){
            state.goodsArr = arrProd
        }
    },

    getters: {
        getGoods(state){
            return state.goodsArr
        }
    }
}

export default goods