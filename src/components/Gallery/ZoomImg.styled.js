import posed from 'react-pose';
import styled from 'styled-components'

const FramePosed = posed.div({
  init: {
    applyAtEnd: { display: 'none' },
    opacity: 0
  },
  zoom: {
    applyAtStart: { display: 'block' },
    opacity: 1
  }
});

export const Frame = styled(FramePosed)`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: none;
    background: white;
    transform: translateZ(0);
    z-index: 10;
`

const transition = {
  duration: 400,
  ease: [0.08, 0.69, 0.2, 0.99]
};

const ImagePosed = posed.img({
  init: {
    position: 'static',
    width: '100%',
    height: 200,
    transition,
    flip: true,
    applyAtStart: {maxWidth: 'none', maxHeight: 'none'}
  },
  zoom: {
    position: 'fixed',
    width: 'auto',
    height: 'auto',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transition,
    flip: true,
    applyAtStart: {maxWidth: '90%', maxHeight: '90%'}
  }
});

export const Image = styled(ImagePosed)`
    display: block;
    width: 100%;
    height: 200px;
    margin: auto;
    z-index: 11;
    object-fit: cover;
    max-width: none; 
    max-height: none;
`