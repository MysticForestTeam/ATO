import { connect } from 'react-redux'

import Images from '../../components/Gallery/Images'

const putStateToProps = (state) => {
    return {
        images: state.gallery.images
    }
}

export default connect(
    putStateToProps,
    null
)(Images)