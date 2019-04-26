import { 
    SWITCH_ON_CAROUSEL,
    SWITCH_OFF_CAROUSEL
} from './constants'

export const switchOnCarousel = () => ({
    type: SWITCH_ON_CAROUSEL
})

export const switchOffCarousel = () => ({
    type: SWITCH_OFF_CAROUSEL
})