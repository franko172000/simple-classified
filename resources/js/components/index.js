import utils from './utilities';
import pagesComponents from './layout';

export default {
    install(Vue){
        Vue.use(utils);
        Vue.use(pagesComponents);
    }
}