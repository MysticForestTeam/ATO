import React from 'react'

import { Image, Frame,  } from './ZoomImg.styled'

class ZoomImg extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isZoomed: false
        }
    }

    zoomIn = () => {
        window.addEventListener('scroll', this.zoomOut);
        this.setState({ isZoomed: true });
      }
    
    zoomOut = () => {
        window.removeEventListener('scroll', this.zoomOut);
        this.setState({ isZoomed: false });
    };

    toggleZoom = () => (this.state.isZoomed ? this.zoomOut() : this.zoomIn())

    render() {
        const { isZoomed } = this.state
        const { src } = this.props
        const pose = isZoomed ? 'zoom' : 'init'

        return(
            <div
                onClick={this.toggleZoom}
                style={{height: '200px'}}
            >
                <Frame 
                    pose={pose}
                />
                <Image 
                    src={src}
                    pose={pose}
                /> 
            </div>
        )
    }
}

export default ZoomImg