import React, {Component} from 'react';
import PropTypes from 'prop-types';

import overviewStyle from '../overview.scss';

class ClassifyItem extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={overviewStyle.item_wrap}>
                <div className={overviewStyle.title_wrap}>
                    <img className={overviewStyle.item_icon} src={this.props.imgSrc} alt="icon"/>
                    <h2 className={overviewStyle.item_title}>{this.props.title}</h2>
                </div>
                <p className={overviewStyle.item_text}>{this.props.text}</p>
            </div>
        )
    }
}
ClassifyItem.propTypes = {
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired
};
export default ClassifyItem;