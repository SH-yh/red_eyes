import React, {Component} from 'react';

import IntroduceTitle from '../../introduceTitle/Title';
import CourseClassify from './CourseClassify';



class Overview extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <IntroduceTitle {...this.props.overviewIntroduce} {...this.props.IntroduceTitle}/>
                <CourseClassify />
            </div>
        )
    }
}

Overview.defaultProps = {
    overviewIntroduce: {
        title: "课程简介",
        text: "针对影视行业前期美术概念设计人才需求情况及不同人群的学习需求，我们制定了一系列影视概念培训课程。"
    },
    IntroduceTitle: {
        textStyle: {
            color: "#000",
            "textIndent": 0
        },
        titleStyle: {
            color: "#000"
        }
    }
};
export default Overview;