import axios from 'axios';

const URL_BASE = 'https://maps.googleapis.com/maps/api/place'
const URL_PLACE = `${URL_BASE}/textsearch/json`
const KEY_API = 'AIzaSyA8IMSBG-Y9OCHMBYF_B4AsfiUtwq2jwMA'

export function searchPlace(query) {
    return axios({
        method: 'get',
        url: URL_PLACE,
        params: {
            key: KEY_API,
            query
        }
    })
        .then(res => Promise.resolve(res))
        .catch(err => Promise.reject(err));
}

export function getURLPhoto(reference) {
    return `${URL_BASE}/photo?maxwidth=400&photoreference=${reference}&key=${KEY_API}`
}