import React, {Component} from 'react';

import Header from '../../public/header/components/Head';
import Brief from '../../public/brief/components/Brief';
import ContactWay from './ContactWay';
import Footer from '../../public/footer/components/Footer';

import applyStyle from '../style/apply.scss';

import apply_01 from '../images/apply_01.png';
import apply_map from '../images/apply_map.png';

class Apply extends Component {
    render(){
        return(
            <React.Fragment>
                <Header/>
                <Brief {...this.props.brief.setting}>

                        {
                            this.props.brief.content.map((item, index)=>{
                                return <p key = {index} style = {item.style}>{item.text}</p>
                            })
                        }
                </Brief>
                <div className={applyStyle.content_wrap}>
                    <h1 className={applyStyle.title}>{this.props.introduce.title}</h1>
                    <div className={applyStyle.content_text}>
                        {
                            this.props.introduce.content.map((item, index)=>{
                                return <p key = {index}>{item}</p>
                            })
                        }
                    </div>
                </div>
                <ContactWay/>
                <div className={applyStyle.map}>
                    <div className={applyStyle.map_icon}>
                        <p className={applyStyle.map_address}>【红瞳影视美术工作室】邢台市桥东区新华北路【襄湾壹号负327室】</p>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}

Apply.defaultProps = {
    brief: {
        setting: {
            brief_bck: apply_01,
            brief_bckColor: "rgba(0, 0, 0, .3)",
            type: "right",
            briefMark: true,
            title: "",
        },
        content: [
            {
                text:"进剧组  做电影",
                style: {
                    fontSize: "26px",
                    marginTop: "20px"
                }
            },
            {
                text:"梦想仅一步之远",
                style: {
                    position: "absolute",
                    fontSize: "24px",
                    marginTop: "20px"
                }
            },
            {
                text: "现在咨询，即可以向咨询老师领取免费课时，两人以上组团报名享受300-1000元学费优惠",
                style: {
                    fontSize: "18px",
                    position: "absolute",
                    bottom: "120px"
                }
            }
        ]
    },
    introduce: {
        title: "红瞳影视美术",
        content:["红瞳影视美术工作室是华北首家集影视概念培训与影视美术制作为一体的工作室，由业内资深概念设计师闫世勇创立。", "" +
        "我们专注与影视行业概念设计的职业培训，由多位富有实战经验的资深概念设计师提供优质、贴合行业发展的课程，培养中国影视行业概念" +
        "设计人才，助力实现每位学员的梦想。", "红瞳影视美术工作室与花千骨美术指导、西游记伏妖篇美术指导长期合作，建立教学到项目的良" +
        "好人才培养输送体系。"]
    }
};

export default Apply;