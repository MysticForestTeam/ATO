import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../../modules/Header/Header'

import { 
    switchOnCarousel,
    switchOffCarousel
} from '../../store/Carousel/actions'

const putDispatchToProps = (dispatch) => {
    return {
        onSwitchOnCarousel: bindActionCreators(switchOnCarousel, dispatch),
        onSwitchOffCarousel: bindActionCreators(switchOffCarousel, dispatch)
    }
}

export default connect(
    null,
    putDispatchToProps
)(Header)