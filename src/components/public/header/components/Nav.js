import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import style from '../style/header.scss';

class Nav extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <ul className={style.nav}>
                {
                    this.props.linkItems.map((item)=>{
                        return (
                            <li key = {item.id} className={style.linkItem}>
                                <NavLink  exact to={item.to}  activeStyle={{
                                    "background": "#000",
                                    "color": "#fff"}} className={style.link}> {item.text} </NavLink>
                            </li>
                        )
                })
                }
            </ul>
        )
    }
}
Nav.defaultProps = {
   linkItems : [
       {
           to: '/',
           text: '首页',
           id: '0'
       },
       {
           to: '/market',
           text: '行业行情',
           id: '1'
       },
       {
           to: '/course',
           text: '课程',
           id: '2'
       },
       {
           to: '/salary',
           text: '薪资状况',
           id: '3'
       },
       {
           to: '/team',
           text: '教师团队',
           id: '4'
       },
       {
           to: '/project',
           text: '参与项目',
           id: '5'
       },
       {
           to: '/apply',
           text: '快速报名',
           id: '6'
       },
       {
           to: '/faq',
           text: '疑问解答',
           id: '7'
       }
   ]
};
export default Nav;