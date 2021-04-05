import carousel from './carousel';
import listingCard from './listing-card';
import categoryCard from './category-card';
import Pagination from './pagination';
import Card from './card';

export default {
    install(Vue){
        Vue.component(listingCard.name, listingCard);
        Vue.component(categoryCard.name, categoryCard);
        Vue.component(Card.name, Card);
        Vue.component(Pagination.name, Pagination);
    }
}