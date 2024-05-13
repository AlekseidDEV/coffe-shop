const bestCoffe = {
    state:{
        bestCoffeProd : []
    },

    actions: {
        setCardCoffe({commit}, cardArr){
           commit('setCardCoffe', cardArr)
        }
    },

    mutations: {
        setCardCoffe(state, cardArr){
            state.bestCoffeProd = cardArr
        }
    },

    getters: {
        getProd(state){
            return state.bestCoffeProd
        }
    }
}

export default bestCoffe