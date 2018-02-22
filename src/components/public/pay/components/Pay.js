import React, {Component} from 'react';

import PayTitle from '../../introduceTitle/Title';
import pay from '../images/pay.png';

class Pay extends Component {
    render(){
        const defaultPayStyle = {
            width:"1000px",
            height:"350px",
            background:`url(${pay}) no-repeat`,
            backgroundPosition:"center",
            backgroundSize: "100% auto",
            margin:"0 auto",
            paddingTop: "40px",
            paddingBottom: "40px"
        };
        const defaultTitleStyle = {
            textAlign: "center",
            fontSize: "26px",
            paddingBottom: "40px",
            fontWeight: "500"
        };
        return(
            <div>
                <PayTitle {...this.props.payTitle}/>
                <div style={defaultPayStyle}></div>
                <p style={defaultTitleStyle}>影视美术各职位薪资情况</p>
            </div>
        )
    }
}
Pay.defaultProps = {
    payTitle: {
        title: "薪资状况",
        text: "随着国内影视行业的快速发展，需求人才的增多，只要你有能力，高工资不再是梦想。",
        titleStyle: {
            color: "#000"
        },
        textStyle: {
            color: "#000"
        }
    }
};
export default Pay;