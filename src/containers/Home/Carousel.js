import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Carousel from '../../components/Home/Carousel'

import { switchOffCarousel } from '../../store/Carousel/actions'

const putStateToProps = (state) => {
    return {
        allow: state.carousel.allowAnimation
    }
}

const putDispatchToProps = (dispatch) => {
    return {
        onSwitchOffCarousel: bindActionCreators(switchOffCarousel, dispatch)
    }
}

export default connect(
    putStateToProps,
    putDispatchToProps
)(Carousel)