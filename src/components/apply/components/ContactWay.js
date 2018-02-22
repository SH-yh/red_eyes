import React, {Component} from 'react';

import LinkItem from './LinkItem'
import applyStyle from '../style/apply.scss';
import Way from './Way';

class ContactWay extends Component {
    render(){
        return(
            <div className= {applyStyle.contact_wrap}>
                <h1 className={applyStyle.contact_title}>{this.props.title}</h1>
                <div className={applyStyle.contact_way_wrap}>
                    {
                        this.props.LinkItem.map((item, index)=>{
                            return <LinkItem key = {index} {...item}/>
                        })
                    }
                </div>
                <Way />
                <p className={applyStyle.way_end}>吃饭及住宿问题请咨询老师</p>

            </div>
        )
    }
}
ContactWay.defaultProps = {
    title: "报名流程与联系方式",
    LinkItem: [
        {link_text: "课程咨询"},
        {link_text: "缴纳定金"},
        {link_text: "课表审核"},
        {link_text: "前期测试"},
        {link_text: "正式入学"}
    ]
};
export default ContactWay;