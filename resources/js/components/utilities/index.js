import carousel from './carousel';
import listingCard from './listing-card';
import categoryCard from './category-card';

export default {
    install(Vue){
        Vue.component(carousel.name, carousel);
        Vue.component(listingCard.name, listingCard);
        Vue.component(categoryCard.name, categoryCard);
    }
}