import Header from './header';
import Footer from './footer';
export default {
    install(Vue){
        Vue.component('mainHeader', Header);
        Vue.component(Footer.name, Footer);
    }
}