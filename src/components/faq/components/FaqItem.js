import React, {Component} from 'react';

import faqStyle from '../style/faq.scss';

class FaqItem extends Component {
    render(){
        return(
            <div>
                <h1 className={faqStyle.answer} >{this.props.question}</h1>
                <div className={faqStyle.question} >{this.props.children}</div>
            </div>
        )
    }
}

export default FaqItem;