import React, {Component} from 'react';

import Brief from '../../public/brief/components/Brief';
import TeacherItem from './TeacherItem';

class BriefItem extends Component {
    render(){
        return(
            <div>
                <Brief {...this.props.setting}>
                    {
                        <React.Fragment>
                            <div style={{paddingTop: "10px", paddingBottom: "10px"}}>
                                <p>{this.props.content}</p>
                            </div>
                            <div style={{position: "absolute",bottom: "20px",paddingTop: "10px"}}>
                                {
                                    this.props.arrange.map((item, index)=>{
                                        return <p key={index}>{item}</p>
                                    })
                                }
                            </div>
                        </React.Fragment>
                    }
                </Brief>
                <TeacherItem {...this.props.teacher}/>
            </div>

        )
    }
}

export default BriefItem;