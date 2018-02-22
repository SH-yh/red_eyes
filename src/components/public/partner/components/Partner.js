import React, {Component} from 'react';

import PartnerTitle from  '../../introduceTitle/Title';
import partnerStyle from '../partner.scss';

class Partner extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <PartnerTitle {...this.props.PartnerTitle}/>
                <div className={partnerStyle.partner_back_wrap}>
                    <div className={partnerStyle.partner_back}>

                    </div>
                </div>
            </div>
        )
    }
}
Partner.defaultProps = {
    PartnerTitle: {
        title: "合作伙伴",
        text: "",
        titleStyle : {
            color: '#000'
        }
    }
};
export default  Partner;