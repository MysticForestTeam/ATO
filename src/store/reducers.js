import { combineReducers } from 'redux'

import { carousel } from './Carousel/reducers'

const rootReducer = combineReducers({
    carousel: carousel
})

export default rootReducer