import React, {Component} from 'react';

import Header from '../../public/header/components/Head';
import Brief from '../../public/brief/components/Brief';
import TeacherTeam from '../../public/team/components/Team';
import Footer from '../../public/footer/components/Footer';

import team_01bck from '../images/team_01bck.png';

class Team extends Component {
    render(){
        console.log(1111111111);
        return(
            <React.Fragment>
                <Header mark={this.props.mark}/>
                <Brief {...this.props.brief.setting}/>
                <TeacherTeam/>
                <Footer/>
            </React.Fragment>
        )
    }
}
Team.defaultProps = {
    mark: false,
    brief: {
        setting: {
            brief_bck: team_01bck,
            briefMark: false,
        }
    }
};
export default Team;