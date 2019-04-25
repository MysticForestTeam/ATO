import React from 'react'

import Carousel from './Carousel'

const Images = [
    '../../img/ato1.jpg',
    '../../img/ato2.jpg',
    '../../img/ato3.jpg',
]

const Gallery = () => (
    <>
        <Carousel images={Images}/>
    </>
)

export default Gallery