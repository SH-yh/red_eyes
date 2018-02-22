import React, {Component} from 'react';

import Header from '../../public/header/components/Head';
import Works from  '../../public/works/components/Works';
import Partner from '../../public/partner/components/Partner';
import Footer from '../../public/footer/components/Footer';

import project_01bck from '../images/project_02.png';

class Project extends Component {
    render(){
        const defaultContainerStyle = {
            position:"relative",
            background: `url(${project_01bck}) no-repeat`,
            height: "440px",
            backgroundPosition: "center",
            backgroundSize: "100% 100%",
            fontSize: "42px",
        };
        const defaultWarpStyle = {
            position: "absolute",
            width: "50%",
            right: 0,
            top:0,bottom:0,
            height: "175px",
            lineHeight: "1.5",
            margin: "auto",
            padding: "40px 20px",
            fontWeight: 900,
            background: "rgba(0, 0, 0, .3)",
            color: "#fff",
        };

        return(
            <React.Fragment>
                <Header mark = {this.props.mark}/>
                <div style={defaultContainerStyle}>
                    <div style={defaultWarpStyle}>
                        <h1>与国内众多知名企业进行合作</h1>
                        <h1>拥有国内一线就业渠道</h1>
                        <h1>打开你不一样的人生</h1>
                    </div>
                </div>
                <Works/>
                <Partner/>
                <Footer/>
            </React.Fragment>
        )
    }
}
Project.defaultProps = {
    mark: false,
    brief: {
        setting: {
            brief_bck: project_01bck,
            briefMark: false
        }
    }
};
export default Project;