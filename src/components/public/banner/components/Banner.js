import React, { Component } from 'react';
import PropTypes from 'prop-types';

import bannerStyle from '../style/banner.scss'

class Banner extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={bannerStyle.banner}>
                <ul className={bannerStyle.banner_wrap} ref={(banner)=>{
                    this.banner = banner;
            }}>
                    {
                        this.props.banner.map((item, index)=>(
                            <li key={index} >
                                <img src={item.img} className= {bannerStyle.banner_img} alt="Banner"/>
                            </li>
                        ))
                    }

                </ul>
            </div>
        )
    }
}

Banner.propTypes = {
    banner: PropTypes.arrayOf(
        PropTypes.shape(
            {
                img: PropTypes.string.isRequired,
            }
        ).isRequired
    ).isRequired
};

export default Banner;