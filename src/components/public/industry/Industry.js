import React, {Component} from 'react';

import industryStyle from './style/industry.scss';
import Title from '../introduceTitle/Title';

import industry_01 from './images/industry_01.png';
import industry_02 from './images/industry_02.png';
import industry_03 from './images/industry_03.png';
import industry_04 from './images/industry_04.png';
import industry_05 from './images/industry_05.png';
import industry_06 from './images/industry_06.png';
import industry_07 from './images/industry_07.png';
import industry_08 from './images/industry_08.png';
import industry_09 from './images/industry_09.png';
import industry_10 from './images/industry_10.png';


class Industry extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={industryStyle.industry_wrap}>
                <Title {...this.props.introduceTitle}/>
                <div className={industryStyle.introduce}>
                    <div className={industryStyle.salary_container}>
                        <div className={industryStyle.item_container}>
                            <div className={industryStyle.wrap}>
                                <span className={industryStyle.salary_extrudeText}>
                                    {this.props.salaryIntroduce.extrudeText}
                                </span>
                                <span>
                                    {this.props.salaryIntroduce.ordinaryText}
                                </span>
                            </div>
                        </div>
                        <div className={industryStyle.salary_chart}></div>
                    </div>
                    <div className={industryStyle.works_container}>
                        <div className={industryStyle.item_container}>
                            <span className={ `${industryStyle.wrap} ${industryStyle.margin_Auto}`}>
                                红瞳影视美术工作室与<span className={industryStyle.salary_extrudeText}>花千骨美术指导，西游伏妖篇
                                美术指导</span>等国内知名美术指导长期合作，建立了教学到项目的良好人才培养输送体系。
                            </span>
                        </div>
                        <div className={industryStyle.works_show}>
                            <ul className={industryStyle.works_display}>
                                {
                                    this.props.worksShow.map((item, index)=>{
                                        return(
                                            <li key={index}>
                                                <img src={item.imgSrc}  key={index} className={item.type ==1 ? industryStyle.type_1 : industryStyle.type_2} alt="works"/>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
Industry.defaultProps = {
    introduceTitle: {
        title: "影视美术行业",
        text: "近两年国内影视业飞速发展，以好莱坞为代表的国外优秀影视公司与国内影视公司合作日趋密切，在电影艺术发展、电影观念变化" +
        "和科学技术发展中，电影美术也要在造型观念、创作思维和实践方面有新变化和发展，就业前景广阔。在飞速发展的的行业现状下，影视行业" +
        "对美术人才的需求也日趋渐长，市场上对影视美术人才甚至出现供不应求的情况。"
    },
    salaryIntroduce: {
        extrudeText: "红瞳影视美术工作室承诺学员毕业后推荐剧组工作，平均工资在8k以上。",
        ordinaryText: "学员每跟一个剧组就能增幅3-5K，所以相较于游戏美术行业，影视美术行业薪资更高，前景更好。"
    },
    worksShow: [
        {
            imgSrc: industry_01,
            type: 1
        },
        {
            imgSrc: industry_02,
            type: 1
        },
        {
            imgSrc: industry_03,
            type: 1
        },
        {
            imgSrc: industry_04,
            type: 1
        },
        {
            imgSrc: industry_05,
            type: 1
        },
        {
            imgSrc: industry_06,
            type: 1
        },
        {
            imgSrc: industry_07,
            type: 1
        },
        {
            imgSrc: industry_08,
            type: 2
        },
        {
            imgSrc: industry_09,
            type: 1
        },
        {
            imgSrc: industry_10,
            type: 1
        },

    ]
};

export default Industry;
