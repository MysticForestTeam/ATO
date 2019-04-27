import {
    SWITCH_ON_CAROUSEL,
    SWITCH_OFF_CAROUSEL
} from './constants'

const carouselInitialState = {
    allowAnimation: true
}

export const carousel = (state = carouselInitialState, action) => {
    switch(action.type) {
        case SWITCH_ON_CAROUSEL: 
            console.log(false)
            return { allowAnimation: true}

        case SWITCH_OFF_CAROUSEL: 
            console.log(false)
            return {  allowAnimation: false}

        default: 
            return state
    }
}