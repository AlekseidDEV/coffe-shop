const footerLinks =  {
    state:{
        arrLinks: [
            {
                classLi: 'footer__item',
                path: '/',
                img: 'Logo_black.svg',
            },
            {
                classLi: 'footer__item',
                path: {name: 'OurCoffe'},
                text: 'Our coffee'
            },
            {
                classLi: 'footer__item',
                path: {name: 'Goods'},
                text: 'For your pleasure',
            },
            {
                classLi: 'footer__item',
                path: {name: 'Contact'},
                text: 'Contact us',
            }
        ]
    },

    getters: {
        getFooterLinks(state){
            return state.arrLinks
        }
    }
}

export default footerLinks