import React, {Component} from 'react';

import TeamTitle from '../../introduceTitle/Title';
import TeamItem from './TeamItem';
import teamStyle from '../team.scss';

import via_0 from '../images/via_0.png';
import via_1 from '../images/via_1.png';
import via_2 from '../images/via_2.png';
import via_3 from '../images/via_3.png';
import via_4 from '../images/via_4.png';

class Team extends Component {
    constructor(props){
        super(props);
    }
    render(){
        let elementArray = [];
        const teamTeacher = this.props.teamTeacher;
        return(
            <div>
                <TeamTitle {...this.props.teamTitle}/>
                <p className={teamStyle.team_slogan}>{this.props.slogan}</p>
                <div>
                    {
                        teamTeacher.map((item, index)=>{
                            if(index == 0){
                                return <TeamItem {...item} key = {index} />
                            }else{
                                elementArray.push(<TeamItem {...item} key = {index + 9}/>);
                                if(index % 2 == 0){
                                    return <div key = {index}  className={teamStyle.double_item}>{elementArray.slice(index-2)}</div>;
                                }
                            }
                        })
                    }
                </div>
            </div>
        )
    }
}
Team.defaultProps = {
    teamTitle : {
       title: "专业教师团队",
       text: "红瞳影视美术工作室的每一位讲师要求都非常高，不仅需要丰富的剧组实战经验和一套过硬的专业技能，还能拥有良好" +
       "的沟通、表达能力，能够组织课堂教学。",
       titleStyle: {
           color: '#000'
       },
       textStyle: {
           "color": '#000',
           "textIndent": 0
       }
   },
    slogan: "我们的讲师既是行业精英，又是职业讲师",
    teamTeacher: [
        {
            name: "闫世勇",
            imgSrc: via_0,
            introduce: "红瞳影视美术工作室创始人。画家，副美术指导，红瞳影视工作室SU讲师，资深道具设计师、影视概念设计师" +
            "、美术师。",
            worksIntroduce: "《奇门遁甲》、《鬼吹灯之牧野诡事》、《香蜜沉沉烬如霜》、《颤抖吧阿布》、《杀八方》、《无心法师2》等" +
            "知名影视作品概念设计主创。",
            type: 0
        },
        {
            name: "冯波",
            imgSrc: via_1,
            introduce: "红瞳影视美术工作室气氛图讲解师。资深影视概念设计师，道具设计师。",
            worksIntroduce: "参与《战狼2》、《老九门》、《凤凰无双》、《刀塔传奇》等知名影视作品。",
            type: 1
        },
        {
            name: "陈念",
            imgSrc: via_2,
            introduce: "红瞳影视美术工作室气氛图讲解师。资深影视概念设计师，自由插画师角色设计师，美术讲师。",
            worksIntroduce: "参与《封神2》、《蜀山战记》、《卑鄙的铁拳》、《麦乒乓》等知名影视作品",
            type: 1
        },
        {
            name: "钟世超",
            imgSrc: via_3,
            introduce: "红瞳影视美术工作室道具讲解师。资深影视概念设计师，美术讲师。",
            worksIntroduce: "参与《二代妖精之今生有幸》、《上古情歌》等知名影视作品。",
            type: 1
        },
        {
            name: "马珑嘉",
            imgSrc: via_4,
            introduce: "红瞳影视美术工作室美术基础讲师。毕业于南京艺术学院，自由画家",
            worksIntroduce: "曾任南京知名画室艺之行素描主教，绘画作品曾在南京国际美术交流展中展出，现作品在雅昌拍卖网进行拍卖。",
            type: 1
        }
    ]
};

export default Team;