import React, {Component} from 'react';

import logoPng from '../images/logo.png';
import headerStyle from '../style/header.scss';

class Logo extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const mark = this.props.contactMark;
        return(
            <div className={headerStyle.wrap}>
                <img src={logoPng}  className={headerStyle.logo} alt="logo"/>
                {
                    mark &&
                        <div className={headerStyle.contact}>
                            <p className={headerStyle.contact_way}>咨询热线:19931917330</p>
                            <p className={headerStyle.contact_way}>咨询QQ:995474656</p>
                        </div>

                }
            </div>
        )
    }
}

export default Logo;