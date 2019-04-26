import posed from 'react-pose'
import styled from 'styled-components'

export const Wrapper = styled.div`
    max-width: 550px;
    width: 100%;
    height: 100%;
    background-color: #000;
`

export const ImagesWrapper = styled.div`
    max-width: 484px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    margin-bottom: 15px;
`

export const ImagePosed = posed.div({
    init: {
        x: 0,
    },
    moveLeft: {
        x: -232
    }
})

export const Image = styled.div`
    background: #f4f4f4 url(${props => props.src}) center center;
    min-width: 232px;
    height: 153px;
    margin-right: 20px;
    transform: translateX(${props => props.transX});
    transition: transform .5s ease-in-out;
`

export const DotsWrapper = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    padding-left: 15px;
`

const DotPosed = posed.div({
    init: {
        background: '#ffffff'
    },
    active: {
        background: '#bea160'
    }
})

export const Dot = styled(DotPosed)`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    ${'' /* background-color: ${props => props.active ? '#BEA160' : '#ffffff'}; */}
    margin-right: 15px;
`