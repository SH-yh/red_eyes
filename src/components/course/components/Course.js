import React, {Component} from 'react';

import Header from '../../public/header/components/Head';
import BriefItem from './BriefItem';
import Works from '../../public/works/components/Works';
import Footer from '../../public/footer/components/Footer';

import course_01bck from '../images/course_bck1.png';
import course_02bck from '../images/course_bck2.png';
import course_03bck from '../images/course_bck3.png';

import teacherImg_0 from '../images/via_0.png';
import teacherImg_1 from '../images/via_1.png';

class Course extends Component {
    render(){
        return(
            <React.Fragment>
                <Header mark = {this.props.mark}/>
                <div>
                    {this.props.brief.map((item, index)=>{
                        return <BriefItem key = {index} {...item}/>
                    })}
                </div>
                <Works/>
                <Footer/>
            </React.Fragment>
        );
    }
}

Course.defaultProps = {
    mark: false,
    brief: [
        {
            setting: {
                brief_bck: course_01bck,
                brief_bckColor: "rgba(0, 0, 0, .3)",
                type: "left",
                briefMark: true,
                title: "行业行情",
            },
            content: "本课程针对影视公司、剧组、影视传媒公司等前期美术概念设计岗位，道具设计岗位，制作图美术岗位进行基础培训，对零基础" +
                "或者基础薄弱的同学。我们有为期六个月的基础班来教授CG动画、道具设计以及制作图绘图的基础知识。",
            arrange: ["课程学时：6个月", "授课方式：实体班、脱产学习、一对一课后辅导", "课程人数：16人"],
            teacher: {
                courseArrange: "每年1月、4月、7月、10月开班",
                courseWay: ["周一到周五，每天9:30-18:00上课", "周一到周五，晚上19:00-21:30自习", "周六9:30-21:30自习"],
                group: "在校大学生、影视美术爱好者、CG绘画从业者",
                teacherImg: teacherImg_0,
                teacherName: "闫世勇"
            }
        },
        {
            setting: {
                brief_bck: course_02bck,
                brief_bckColor: "rgba(0, 0, 0, .3)",
                type: "right",
                briefMark: true,
                title: "影视概念精品班",
            },
            content: "本课程针对影视公司、剧组、影视传媒公司等前期美术概念设计岗位，道具设计岗位，制作图美术岗位进行基础培训，" +
            "旨在培养电影、电视剧、动画等行业前期美术专业人才",
            arrange: ["课程学时：4个月", "授课方式：实体班、一对一课后辅导", "课程人数：16人"],
            teacher: {
                courseArrange: "每年1月、4月、7月、10月开班",
                courseWay: ["周一到周五，每天9:30-18:00上课", "周一到周五，晚上19:00-21:30自习", "周六9:30-21:30自习"],
                group: "在校大学生、影视美术爱好者、CG绘画从业者",
                teacherImg: teacherImg_0,
                teacherName: "闫世勇"
            }
        },
        {
            setting: {
                brief_bck: course_03bck,
                brief_bckColor: "rgba(0, 0, 0, .3)",
                type: "left",
                briefMark: true,
                title: "影视概念周六周日班",
            },
            content: "如果工作时间不方便来到画室进行学习，我们开设周六日的课程，老师将于每周授课一次，在授课时间对每位同学的作品" +
            "进行针对性修改以及讲解，让每一位学生能够充分接收到一对一指导",
            arrange: ["课程学时：6个月", "授课方式：实体班、一对一课后辅导、课后自主学习", "课程人数：16人"],
            teacher:  {
                courseArrange: "招满即开",
                courseWay: ["每周六，上午9:30-18:00","每周日，下午13:00-18:00"],
                group: "美术相关专业、影视美术爱好者、CG绘画从业者",
                teacherImg: teacherImg_1,
                teacherName: "冯波"
            }
        }
    ],
};

export default Course;