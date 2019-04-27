import { GET_IMAGES } from './constants'

export const getImages = (page) => ({
    type: GET_IMAGES,
    payload: page
})