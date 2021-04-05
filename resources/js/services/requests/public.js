import apiService from '../axios'
const resources  = '/';

export const getLocations = async () =>{
    return apiService.get(resources+'locations');
}

export const getAllCategories = async () =>{
    return apiService.get(resources+'categories/all');
}

export const getCategories = async () =>{
    return apiService.get(resources+'categories');
}

export const getListingDetail = async (slug) =>{
    return apiService.get(resources+'listings/'+slug);
}

export const getListings = async (limit,page) =>{
    return apiService.get(resources+'listings');
}

