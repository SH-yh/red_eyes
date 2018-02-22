import React, {Component} from 'react';
import PropsType from 'prop-types';
import titleStyle from './style/title.scss';

class Title extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={titleStyle.title_wrap}>
                <div>
                    <h2 className={titleStyle.title} style={this.props.titleStyle}>{this.props.title}</h2>
                    <div className={titleStyle.split_line}></div>
                    <p className={titleStyle.text} style={this.props.textStyle}>
                        {this.props.text}
                    </p>
                </div>
            </div>
        )
    }
}
Title.propTypes  = {
    title: PropsType.string.isRequired,
    text: PropsType.string.isRequired,
    textStyle: PropsType.object,
    titleStyle: PropsType.object
};
export default Title;