const BASE_URL = 'https://pixabay.com/api/'
const API_KEY = '28483362-313f04b4986d5508c9cd93d3a'
const QUANTITY = 12

    
export const getImages = async ( query, page ) => { 
    const resp = await fetch(`${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${QUANTITY}`)
    if (resp.ok) {
        const parsedResp = await resp.json();
        // console.log('parsedResp services ',parsedResp);
        return parsedResp
    }
    return Promise.reject(new Error('Ups! Something went wrong'));
}



