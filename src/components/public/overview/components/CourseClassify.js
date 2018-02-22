import React, {Component} from 'react';

import ClassifyItem from './ClassifyItem';

import overviewStyle from '../overview.scss';
import overview_01 from '../images/overview_01.png';
import overview_02 from '../images/overview_02.png';
import overview_03 from '../images/overview_03.png';


class CourseClassify extends Component {
    render(){
        return(
            <div className={overviewStyle.classify_wrap}>
                <div className={overviewStyle.item_container}>
                    {this.props.classify.map((item, index)=>{
                        return <ClassifyItem {...item} key = {index}/>
                    })}
                </div>
            </div>
        )
    }
}
CourseClassify.defaultProps = {
    classify: [
        {
            title: "影视概念精品班",
            text: "课程以电影制作图为主，常用软件包括ps、su、ai场景设计，道具设计等三大板块内容。学习时间为4个月，毕业后推荐" +
            "剧组就业。",
            imgSrc: overview_01
        },
        {
            title: "影视概念长期班",
            text: "此课程针对零基础学员，前期教授美术基础知识。后期学习场景设计，道具设计，制作图美术等三大版块内容。总时长6个月" +
            "毕业后推荐剧组就业。",
            imgSrc: overview_02
        },
        {
            title: "影视概念周六日班",
            text: "此课程针对在校大学生或已工作人员。课程以电影制作图为主。学习场景设计，制作图美术三大版块内容，总时长6个月" +
            "毕业后推荐剧组就业。",
            imgSrc: overview_03
        }
    ]
};
export default CourseClassify;