import {BASE_URL} from './baseURL';
import {commonAPI} from './commonAPI';

// uploading images
export const uploadImage = async (image)=> {
    // post to http://localhost:4000/images for adding images in json-server and return response to add component
    return await commonAPI("POST",`${BASE_URL}/images`,image)
}

// get all images from json server
export const getAllImages = async ()=> {
    // get to http://localhost:4000/images for getting images from json-server and return response to view component
    return await commonAPI("GET",`${BASE_URL}/images`,"")
}

// get a single image from json server
export const getAImage = async (id)=> {
    // get to http://localhost:4000/images for getting images from json-server and return response to videocard component
    return await commonAPI("GET",`${BASE_URL}/images/${id}`,"")
}

// delete a single image from json server
export const deleteAImage = async (id)=> {
    // get to http://localhost:4000/images for getting images from json-server and return response to videocard component
    return await commonAPI("DELETE",`${BASE_URL}/images/${id}`,{})
}

// insert video in watch-history
export const addToHistory = async(imageHistory)=> {
//   post to http://localhost:4000/history for add image history to json server and return response to video card
return await commonAPI("POST",`${BASE_URL}/history`,imageHistory)

}

// get video in watch-history from json server
export const getHistory = async()=> {
    //   get to http://localhost:4000/history for add image history to json server and return response to watch hiastory
    return await commonAPI("GET",`${BASE_URL}/history`,"")
}

// add a category fro json server
export const addCategory = async(body)=> {
   // post to http://localhost:4000/categories for adding categories from json-server and return response to category component
   return await commonAPI("POST",`${BASE_URL}/categories`,body)
}

// get all category fro json server
export const getAllCategory = async()=> {
    // get to http://localhost:4000/categories for adding categories from json-server and return response to category component
    return await commonAPI("GET",`${BASE_URL}/categories`,"")
 }

//  remove category
export const deleteCategory = async(id)=> {
     // delete to http://localhost:4000/categories for deleting video from json-server and return response to category component
   return await commonAPI("DELETE",`${BASE_URL}/categories/${id}`,{})
} 