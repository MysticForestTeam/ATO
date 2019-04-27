import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 216px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2px;
    background-color: #a4a4a4;
`

export const Info = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2;
    background-color: #30372F;

    &::after {
        content: '';
        background: url(${props => props.src}) center center no-repeat;
        background-size: 200px;
        position: absolute;
        opacity: 0.5;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: -1;
    }
`

export const Text = styled.h1`
    color: ${props => props.header ? '#C5A460' : '#ffffff'};
    font-weight: ${props => props.header ? 4000 : 200};
    font-family: 'Roboto', sans-serif;
    font-size: ${props => props.header ? '1.5em' : '1.2em'};
    margin-top: 5px;
    margin-bottom: 5px;
`