import React, {Component} from 'react';

import Header from '../../public/header/components/Head';
import Brief from '../../public/brief/components/Brief';
import Pay from '../../public/pay/components/Pay';
import Footer from '../../public/footer/components/Footer';

import salary_01bck from '../images/salary_01.png';

class Salary extends Component {
    render(){
        const defaultStyle = {
            marginTop: "20px",
            marginBottom: "20px"
        };
        return(
            <React.Fragment>
                <Header mark={this.props.mark} />
                <Brief {...this.props.brief[0].setting} />
                <Pay/>
                <Brief {...this.props.brief[1].setting}>
                    {this.props.brief[1].content.map((item, index)=>{
                        return <p style={defaultStyle} key={index}>{item}</p>
                    })}
                </Brief>
                <Footer/>
            </React.Fragment>
        )
    }
}
Salary.defaultProps = {
    mark: false,
    brief: [
        {
            setting:{
                brief_bck: salary_01bck,
                briefMark: false,
            },
        },
        {
            setting:{
                brief_bck: salary_01bck,
                briefMark: true,
                brief_bckColor: "#c50100",
                type: "right",
                title: "剧组生活",
            },
            content: [
                "一、剧组工资高，例如美术助理最低是8000元每月（这是一些网络剧薪资，但电视剧或电影的工资更高）",
                "二、管吃管住，吃的是饭盒，住宿一般是3到4星级宾馆，当然也可不用吃住剧组，饭补一般为50元左右一天，房补为100元" +
                "左右每天（根据实际剧组而定，或多火烧。）",
                "三、因工作原因出行，剧组会专门安排车辆。一般一个剧组美术人员有20人，会有专门的美术车辆5到8辆。包括进出剧组的" +
                "的来往机票剧组也会报销。",
                "四、进剧组是不看学历的，只看经验多少，跟过什么戏，也不会面试，只要认可你做的图就会马上进组。"
            ]
        },
    ]
};
export default Salary;