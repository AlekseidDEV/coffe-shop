const indexLink =  {
    state:{
        arrLinks: [
            {
                classLi: 'header__item',
                path: '/',
                img: 'Logo.svg',
            },
            {
                classLi: 'header__item',
                path: {name: 'OurCoffe'},
                text: 'Our coffee'
            },
            {
                classLi: 'header__item',
                path: {name: 'Goods'},
                text: 'For your pleasure',
            },
            {
                classLi: 'header__item',
                path: {name: 'Contact'},
                text: 'Contact us',
            }
        ]
    },

    getters: {
        getHeaderLinks(state){
            return state.arrLinks
        }
    }
}

export default indexLink