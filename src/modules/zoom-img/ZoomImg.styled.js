import posed from 'react-pose'
import styled from 'styled-components'

const transition = {
    duration: 400,
    ease: [0.08, 0.69, 0.2, 0.99]
}

export const Wrapper = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
`

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

const ImagePosed = posed.img({
    init: {
        flip: true,
        position: 'static',
        width: '100%',
        height: '100%',
        maxWidth: '100%',
        transition: ({unZoomDuration, unZoomEase}) => ({
            duration: unZoomDuration,
            ease: unZoomEase
        })
    },
    zoom: {
        flip: true,
        position: 'fixed',
        width: 'auto',
        height: 'auto',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        transition: ({zoomDuration, zoomEase}) => ({
            duration: zoomDuration,
            ease: zoomEase
        })
    },
})

export const Image = styled(ImagePosed)`
    object-fit: cover;
    margin: auto;
    cursor: pointer;
    vertical-align: top;
`

export const ScaledPosed = posed.img({
    hoverable: true,
    init: {
        scale: 1,
        transition: ({unScaleDuration, unScaleEase}) => ({
            duration: unScaleDuration,
            ease: unScaleEase
        }),
    },
    hover: {
        scale: 1.06,
        transition: ({scaleDuration, scaleEase}) => ({
            duration: scaleDuration,
            ease: scaleEase
        })
    },
})

export const Scaled = styled(ScaledPosed)`
    object-fit: cover;
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    vertical-align: top;
`