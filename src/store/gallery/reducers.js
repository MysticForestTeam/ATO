import { GET_IMAGES } from './constants'

import axios from 'axios'

const getImages = (page) => {
    const sendRequset = async() => {
        try {
            return await axios.get('http://api.ato.com', {
                page: page
            })
        } 
        catch (error) {
            console.log(error)
        }
    }

    const getData = () => {
        const res = sendRequset()
        .then((reponse => {
            console.log(response)
            return reponse.data
        }))
        .catch((error => {
            console.log(error)
        }))
    }

    getData()
}

const imagesInitialState = {
    images: [
        '../../img/ato1.jpg',
        '../../img/ato2.jpg',
        '../../img/ato3.jpg'
    ]
}

export const galleryReducer = (state = imagesInitialState, action) => {
    switch (action.type) {
        case GET_IMAGES: 
            return { ...state, images: images.concat(getImages) }

        default: 
            return state
    }
}