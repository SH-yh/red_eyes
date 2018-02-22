import React, {Component} from 'react';
import applyStyle from '../style/apply.scss';
class Way extends Component {
    render(){
        return(
            <div className={applyStyle.way_container}>
                <h1 className={applyStyle.way_title}>{this.props.way_title}</h1>
                <div className={applyStyle.way_classify_wrap}>
                    <div className={applyStyle.way_classify}>
                        <div className={applyStyle.way_icon_weChat}></div>
                        <div  className={applyStyle.way_icon_QQ}></div>
                    </div>
                    <div className={applyStyle.way_mobile}>
                        <h1 className={applyStyle.way_mobile_title}> 联系电话</h1>
                        <p>
                            课程咨询老师
                            <span>18332330837</span>
                            <span>19931917330</span>
                        </p>
                    </div>
                    <div className={applyStyle.way_address}>
                        <h1>地址</h1>
                        <p>
                            河北省邢台市天一城北侧襄湾壹号商铺327室
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
Way.defaultProps = {
    way_title: "组团报名有优惠，详情请咨询老师。",
}
export default Way