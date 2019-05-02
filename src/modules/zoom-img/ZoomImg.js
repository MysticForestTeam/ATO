import React from 'react'

import { 
    Wrapper,
    Frame,
    Image,
    Scaled,
} from './ZoomImg.styled'

// Available properties: 
// width - set up width
// height - set up height
// zoomDuration - set up duration of zoom in
// unZoomDuration - set up dutaion of zoom out
// useScale - turn on scale when mouse is hover
// scaleDuration - set up duration of scale up
// unScaleDuration - set up duration of scale down
// scaleEase - set up easing of scaling up
// unScaleEase - set up easing of scaling down

class ZoomImg extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isZoomed: false,
        }
    }

    zoomIn = () => {
        const { useScale } = this.props

        window.addEventListener('scroll', this.zoomOut)
        this.setState({
            isZoomed: true,
        })
        this.zoomImage.style.zIndex = '11'
        this.wrapper.style.overflow = 'visible'
        if (useScale) {
            this.scaleImage.style.zIndex = '-1'
            this.scaleImage.style.display = 'none'
        }
    }

    zoomOut = () => {
        const { useScale, zoomDuration, unZoomDuration } = this.props

        window.removeEventListener('scroll', this.zoomOut)
        this.setState({
            isZoomed: false,
        })
        if (useScale) {
            window.setTimeout(() => {
                this.zoomImage.style.zIndex = '0'
                this.scaleImage.style.zIndex = '1'
                this.scaleImage.style.display = 'block'
                this.wrapper.style.overflow = 'hidden'
            }, unZoomDuration || zoomDuration || 400)
        }
    }

    componentDidMount() {
        const { useScale } = this.props

        if (!useScale) {
            this.scaleImage.style.display = 'none'
        }
    }

    toggleZoom = () => {
        this.state.isZoomed ? this.zoomOut() : this.zoomIn()
    }

    render() {
        const { 
            width,
            height,
            src, 
            zoomDuration,
            unZoomDuration,
            zoomEase,
            unZoomEase,
            scaleDuration, 
            unScaleDuration, 
            scaleEase, 
            unScaleEase
        } = this.props
        const { isZoomed } = this.state

        const pose = isZoomed ? 'zoom' : 'init'

        return(
            <div style={{width: width || '100%', height: height || '100%'}}>
                <Wrapper
                    onClick={this.toggleZoom}
                    ref={node => { this.wrapper = node }}
                >
                    <Frame 
                        pose={pose}
                    />
                    <Image 
                        ref={node => { this.zoomImage = node }}
                        src={src}
                        pose={pose}
                        zoomDuration={zoomDuration || 400}
                        unZoomDuration={unZoomDuration || zoomDuration || 400}
                        zoomEase={zoomEase || [0.08, 0.69, 0.2, 0.99]}
                        unZoomEase={unZoomEase || zoomEase || [0.08, 0.69, 0.2, 0.99]}
                    />
                    <Scaled 
                        ref={node => { this.scaleImage = node }}
                        src={src}
                        scaleDuration={scaleDuration || 400}
                        unScaleDuration={unScaleDuration || scaleDuration || 400}
                        scaleEase={scaleEase || 'linear'}
                        unScaleEase={unScaleEase || scaleEase || 'linear'}
                    />
                </Wrapper>
            </div>
        )
    }
}

export default ZoomImg