import numeral from 'numeral';
import moment from 'moment'

export const formatAmount = (amount, currency) => {
    const cur = currency === 'USD' ? '$' : '&#8358;';
    return cur + numeral(amount).format('0,0');
}

export const formatDate = (postedAt) => {
    return moment(postedAt).fromNow();
}