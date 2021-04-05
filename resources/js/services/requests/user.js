import apiService from '../axios'
const resources  = '/user/';

export const uploadPhoto = async (data) =>{
    return apiService.post(resources+'listing/image/upload-image',data);
}

export const deleteTempPhoto = async (id) =>{
    return apiService.delete(resources+'listing/image/delete-temp/'+id);
}

export const saveAdPost = async (data) =>{
    return apiService.post(resources+'listing',data);
}

export const getUserListings = async () =>{
    return apiService.get(resources+'listings');
}

export const updateListingStatus = async (id,status) =>{
    return apiService.patch(resources+'listing/change-status/'+id,{status});
}

export const deleteListing = async (id) =>{
    return apiService.delete(resources+'listing/delete/'+id);
}

