import { combineReducers } from 'redux'

import { galleryReducer } from './gallery/reducers'

const rootReducer = combineReducers({
    gallery: galleryReducer
})

export default rootReducer