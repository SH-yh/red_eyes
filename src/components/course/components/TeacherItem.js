import React, {Component} from 'react';

import teacherItemStyle from './teacherItem.scss';

class TeacherItem extends Component {
    render(){
        return(
            <div className={teacherItemStyle.container}>
                <div  className={teacherItemStyle.wrap}>
                    <div className={teacherItemStyle.child_item}>
                        <ul className={teacherItemStyle.left_wrap}>
                            <li className={teacherItemStyle.item}>
                                <h1 className={teacherItemStyle.title}>课程安排：</h1>
                                <p className={teacherItemStyle.expound}>{this.props.courseArrange}</p>
                            </li>
                            <li className={teacherItemStyle.item}>
                                <h1 className={teacherItemStyle.title}>上课方式：</h1>
                                <div>
                                    {
                                        this.props.courseWay.map((item, index)=>{
                                            return <p className={teacherItemStyle.expound} key={index}>{item}</p>
                                        })
                                    }
                                </div>
                            </li>
                            <li className={teacherItemStyle.item}>
                                <h1 className={teacherItemStyle.title}>适合人群</h1>
                                <p className={teacherItemStyle.expound}>{this.props.group}</p>
                            </li>
                        </ul>
                    </div>
                    <div className={teacherItemStyle.child_item}>
                        <h1 className={teacherItemStyle.title}>授课老师</h1>
                        <div className={teacherItemStyle.teacher_wrap}>
                            <img className={teacherItemStyle.via} src={this.props.teacherImg} alt="授课老师"/>
                            <p className={teacherItemStyle.teacher_name}>{this.props.teacherName}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default TeacherItem;