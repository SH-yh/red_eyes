import React, {Component} from 'react';

import Header from '../../public/header/components/Head';
import Brief from '../../public/brief/components/Brief';
import Footer from '../../public/footer/components/Footer';
import Industry from '../../public/industry/Industry';
import Pay from '../../public/pay/components/Pay';
import Works from '../../public/works/components/Works';

import marketBack from '../images/market_bck.png';

class Market  extends  Component {
    constructor(props){
        super(props);
    }
    render(){
        const defaultStyle = {
            paddingTop: "10px",
            paddingBottom: "10px"
        };
        return(
            <React.Fragment>
                <Header mark={this.props.mark}/>
                <Brief {...this.props.brief}>
                    {this.props.brief.content.map((item, index)=>{
                        return <p style={defaultStyle} key={index}>{item}</p>
                    })}
                </Brief>
                <Industry/>
                <Pay />
                <Works/>
                <Footer/>
            </React.Fragment>
        )
    }
}
Market.defaultProps = {
    mark: false,
    brief: {
        brief_bck: marketBack,
        brief_bckColor: "rgba(0, 0, 0, .3)",
        type: "left",
        briefMark: true,
        title: "行业行情",
        content: [
            "一、随着这两年现在网络平台剧跟院线电影越来越多（看播放平台及院线电影可了解，电影或电视剧爆炸式增长），"+
            "剧组现在要人非常多。",
            "二、现在国内各大高校当中，也就北京电影学院和四川美术学院有美术电影课程（其中川美前年才开设此课程）"+
            "按照2017部电视剧进行拍摄（其中不包括电影），而国内做电影美术的人才还不足1000人，按照每部戏需要20个美"+
"术人才来计算，远达不到市场需求。",
            "三、剧组相对来说封闭，又决定他工作性质的不同，不会进行公开招聘和校园招聘（红瞳有独家渠道推荐学员就业），"+
            "再加上前几年的跟剧组老一辈美术师用的全是手绘，也被淘汰了，导致现在人才供不应求。"
        ]
    }
};
export default Market;