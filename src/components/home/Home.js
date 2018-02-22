import React, {Component} from 'react';

import Header from '../public/header/components/Head';
import Banner from '../public/banner/components/Banner';
import Industry from '../public/industry/Industry';
import Overview from '../public/overview/components/Overview';
import Team from '../public/team/components/Team';
import Works from '../public/works/components/Works';
import Partner from '../public/partner/components/Partner';
import Footer from '../public/footer/components/Footer';

import banner_0 from './images/banner_0.png';
import banner_1 from './images/banner_1.png';
import banner_2 from './images/banner_2.png';
import banner_3 from './images/banner_3.png';

class Home extends Component {
    render(){
        return(
            <React.Fragment>
                <Header />
                <Banner banner={this.props.banner}/>
                <Industry/>
                <Overview/>
                <Team/>
                <Works/>
                <Partner/>
                <Footer/>
            </React.Fragment>
        )
    }
}
Home.defaultProps = {
    banner: [
        {
            img: banner_0
        },
        {
            img: banner_1
        },
        {
            img: banner_2
        },
        {
            img: banner_3
        },
    ]
};
export default Home;