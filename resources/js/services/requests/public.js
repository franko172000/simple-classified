import apiService from '../axios'
const resources  = '/';

const generateParams = (limit,page)=>{
    return limit && page ? '?' + new URLSearchParams({limit,page}) : '';
}

export const getLocations = async () =>{
    return apiService.get(resources+'locations');
}

export const getAllCategories = async () =>{
    return apiService.get(resources+'categories/all');
}

export const getCategories = async (limit,page) =>{
    return apiService.get(resources+'categories'+generateParams(limit,page));
}

export const getListingDetail = async (slug) =>{
    return apiService.get(resources+'listings/'+slug);
}
export const searchListing = async (keyword,category,limit,page) =>{
    category = category ?? 0;
    const params = new URLSearchParams({limit,page,keyword,category})
    return apiService.get(resources+'listings/search?'+params);
}

export const getListings = async (limit,page) =>{
    return apiService.get(resources+'listings'+generateParams(limit,page));
}

export const getCategoryListings = async (id,limit,page) =>{
    return apiService.get(resources+'listings/category/'+id+generateParams(limit,page));
}


