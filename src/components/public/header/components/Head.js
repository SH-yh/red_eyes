import React, {Component} from 'react';


import headerStyle from '../style/header.scss';
import Logo from './Logo';
import Nav from './Nav';

class Header extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={headerStyle.header}>
                <Logo contactMark={this.props.mark}/>
                <Nav path={this.props.path}/>
            </div>
        );
    }
}
Header.defaultProps = {
  mark: true
};
export  default Header;