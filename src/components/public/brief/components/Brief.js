import React, {Component} from 'react';
import briefStyle from '../brief.scss';
class Brief extends Component {
   
    render(){
        return(
            <div className={briefStyle.brief} style={{background:`url(${this.props.brief_bck}) no-repeat`, backgroundPosition: "center",
                backgroundSize: "100% 100%"}}>
                {
                    this.props.briefMark &&
                    (<div className={this.props.type=="left" ? briefStyle.brief_text_left : briefStyle.brief_text_right}
                          style={{background:this.props.brief_bckColor}}>
                        <div className={briefStyle.brief_text_wrap}>
                            <h1 className={briefStyle.brief_title}>{this.props.title}</h1>
                            {this.props.children}
                        </div>
                    </div>)
                }
            </div>
        )
    }
}

export default Brief;