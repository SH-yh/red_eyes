import React, {Component} from 'react';
import PropTypes from 'prop-types';

import teamItemStyle from '../teamItem.scss';

class TeamItem extends Component {
    render(){
        const type = this.props.type;
        const style = type === 0 ? teamItemStyle.row: teamItemStyle.column;
        return(
            <div className={style}>
                <div className={teamItemStyle.item_via}>
                    <img src={this.props.imgSrc} alt="via"/>
                </div>
                <div className={type == 0 ? teamItemStyle.item_single_wrap : teamItemStyle.item_introduce_wrap}>
                    <h1 className={`${teamItemStyle.item_name} ${type === 1 && teamItemStyle.textCenter}`}>红瞳—{this.props.name}</h1>
                    <div className={teamItemStyle.item_introduce_content}>
                        <p className={teamItemStyle.item_introduce}>
                            {this.props.introduce}
                        </p>
                        {type == 0 && <p>参与作品：</p>}
                        <p className={teamItemStyle.item_works}>
                            {this.props.worksIntroduce}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
TeamItem.propTypes = {
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    introduce: PropTypes.string.isRequired,
    worksIntroduce: PropTypes.string.isRequired
};

export default TeamItem;