import Header from './header';
import Footer from './footer';
import Banner from './banner';
export default {
    install(Vue){
        Vue.component('mainHeader', Header);
        Vue.component(Footer.name, Footer);
        Vue.component(Banner.name, Banner);
    }
}