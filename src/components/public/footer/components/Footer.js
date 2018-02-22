import React, {Component} from 'react';

import footerStyle from '../footer.scss';
class Footer extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className={footerStyle.footer}>
                <div className={footerStyle.footer_container}>
                    <div className={footerStyle.left}>
                        <ul>
                            <li className={footerStyle.time}>(9:00-21:00)</li>
                            <li className={footerStyle.mobile_number}>18332330837</li>
                            <li className={footerStyle.contact_way}>
                                <div>商务合作电话：</div>
                                <div>
                                    <ul>
                                        <li>19931917330</li>
                                        <li>19931918330</li>
                                        <li>19931919330</li>
                                    </ul>
                                </div>
                            </li>
                            <li>商务合作QQ：995474656</li>
                            <li>地址：邢台市天一城北侧襄湾壹号负327室</li>
                        </ul>
                    </div>
                    <div className={footerStyle.split_line}></div>
                    <div className={footerStyle.right}>
                        <div className={footerStyle.qr_Code}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default  Footer;