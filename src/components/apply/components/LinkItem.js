import React, {Component} from 'react';

import applyStyle from '../style/apply.scss';

class LinkItem extends Component {
    render(){
        return(
            <div className={applyStyle.container}>
                <div className={applyStyle.item_wrap}>
                    {this.props.link_text}
                </div>
                <div className={applyStyle.item_icon}></div>
            </div>
        )
    }
}

export default LinkItem;