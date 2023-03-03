const BASE_URL = `https://pixabay.com/api/`;
const API_KEY = '28483362-313f04b4986d5508c9cd93d3a';
const IMG_QTY = 12;

export async function fetchImages(query, page) {
  const response = await fetch(
    `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&per_page=${IMG_QTY}&page=${page}`
  );
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  return Promise.reject(new Error('Ups! Something went wrong'));
}
