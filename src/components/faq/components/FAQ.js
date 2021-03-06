import React, {Component} from 'react';

import Header from '../../public/header/components/Head';
import FaqItem from './FaqItem';
import Footer from '../../public/footer/components/Footer';

import faqStyle from '../style/faq.scss';
import logo from '../images/logo.png';

class FAQ extends  Component {
    render(){
        return(
            <React.Fragment>
                <Header mark={this.props.mark}/>
                <div className={faqStyle.faq_container}>
                    <div className={faqStyle.faq_log}>
                        <img className = {faqStyle.logo} src={logo} alt="logo"/>
                        <span className={faqStyle.faq_statement_Wrap}>(<em className={faqStyle.faq_statement} >工作室学员常见疑难解答</em>)</span>
                    </div>
                    <div className= {faqStyle.faq_wrap}>
                        {
                            this.props.faq.map((item, index)=>{
                                return (
                                    <FaqItem key = {index} question = {item.question}>
                                        {
                                            item.answer.map((answer, id) => {
                                                return <p key = {id}>{answer}</p>
                                            })
                                        }
                                    </FaqItem>
                                )
                            })
                        }
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}
FAQ.defaultProps = {
    mark: false,
    faq: [
        {
            question: "一、红瞳培训班每期开课时间，招生人数、培训的方向？",
            answer: [
                "答：红瞳影视概念班全年1、4、7、10月份如期开班，一般都是开班当月的8号开课，5-7号报道。每期都是提前报名" +
                "预定，为保证教学质量都是限额招生，招满截止。每期的课程都是多位主讲老师全程穿插授课，课程内容结合剧组实际" +
                "工作需求并且多元化，课程主线由闫老师主抓。",
                "红瞳是华北地区一家主打影视概念设计培训的就业班，学员课程结束后都是想进入高薪的剧组工作。"
            ]
        },
        {
            question: "二、红瞳培训班的学费，课程时间怎么安排？",
            answer: [
                "答：红瞳影视概念培训班的学费详情请直接联系咨询老师，有一定的学费优惠；上课时间为周一至周五早9:30-晚上18:00，" +
                "晚上和周六为自修时间，也有老师辅导（可根据自身情况决定是否自修）。"
            ]
        },
        {
            question: "三、我很喜欢插画但是没有接受过正规的美术培训，零基础/基础差而且也没有使用过手绘板，这样可以参加你们的培训" +
            "班吗？4个月和6个月有什么区别？",
            answer: [
                "答：当然可以，我们开设有基础特训课程，会根据每位学员的情况进行针对性的训练，很快就能达到美术基础要求。红瞳的培训" +
                "课程有一套自己独特教学体系，有美术基础的通过四个月课程学习就能达到剧组的工作要求；6个月的培训课程针对基础薄弱或" +
                "零基础的，想扎实绘画功底、影视设计的学院。",
                "（友情提示：本身基础弱的同学们要想在短期内出成绩要做好吃苦的心理准备。）"
            ]
        },
        {
            question: "四、电影美术具体指什么？",
            answer: [
                "答：在一部电视剧或电影上映之前，分为前期制作和后期制作两大部分。后期制作包括特效、演员配音、剪辑、调色等；前期" +
                "制作包括导演拍摄、演员表演、服装制作、道具制作、场景搭建等。其中道具制作和场景搭建就属于电影美术。"
            ]
        },
        {
            question: "五、行业行情如何？",
            answer: [
                "答：1、随着这两年网络平台剧跟院线电影越来越多（看播放平台及院线电影可了解，电影或电视剧爆炸性增长）剧组现在要人" +
                "非常多。",
                " 2、现在国内各大高校当中，也就北京电影学院和四川美术学院有电影美术课程（其中川美前年才开设此课程）按照2017年" +
                "广电总局每月公布的电视剧备案显示，共有1149部电视剧进行拍摄（其中不包含电影），而国内做电影美术的人才还不足1000" +
                "人，按照每部戏需要20个美术人才来计算，远远达不到市场的需求。",
                " 3、剧组相对来说比较封闭，又决定了它的工作性质的不同，不会进行公开招聘和校园招聘（红瞳有独家渠道推荐学员就业），" +
                "再加上前几年跟剧组的老一辈美术师用的全是手绘，也被淘汰了，才导致现在的人才的供不应求。"
            ]
        },
        {
            question: "六、进剧组有哪些有缺点？",
            answer: [
                "优点：1、剧组工资高，像美术助理最低是8000元每月（这是一些网络剧薪资，像上星电视剧或电影会更高）",
                "    2、管吃管住，吃的是饭盒（跟群众演员饭盒不一样），住宿一般是3到4星级宾馆，当然也不用吃住剧组，饭补为50元左" +
                "右一天，住宿为100元左右每天（根据实际剧组而定，或多或少）",
                "    3、因工作原因出行，剧组会专门安排车辆，一般一个剧组有美术人员20人，会有专门美术车辆5到8辆。包括进出剧组的来" +
                "往机票剧组也会报销。",
                "    4、进剧组是不用看学历的，只看经验多少，跟过什么戏，也不会面试，只要认可你做的图会马上进组。",
                "缺点：因剧组工作性质不同，要按照通告来进行拍摄，有时候会加班加点，要做好这个准备。"
            ]
        },
        {
            question: "七、工作室学员报名有哪些优惠？",
            answer: [
                "答：工作室学员报名是有优惠的，2人组团报名每人减免300元，3人组团报名每人减免500元，4人组团报名每人减免800元，5人" +
                "及5人以上报名每人减免1000元。"
            ]
        },
        {
            question: "八、报道需要带什么东西？",
            answer: [
                "需携带物品：",
                "1、报到证件：一寸照片一张、身份证正反面复印件一张",
                "2、学习用品：电脑、手绘板、记写本、硬盘或U盘... ..."
            ]
        },
    ]
};
export default FAQ;