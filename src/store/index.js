import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

import bestCoffe from "@/store/bestCoffe";
import goods from "@/store/goods";
import indexLink from "@/store/indexLink";
import footerLinks from "@/store/footerLinks";
import coffeProd from "@/store/ourCoffeProd";

const store = new Vuex.Store({
    modules: {
        bestCoffe,
        goods,
        indexLink,
        footerLinks,
        coffeProd
    }
})

export default store