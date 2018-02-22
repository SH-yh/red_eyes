import React, {Component} from 'react';

import works_01 from '../images/works_01.png';
import works_02 from '../images/works_02.png';
import works_03 from '../images/works_03.png';
import works_04 from '../images/works_04.png';
import works_05 from '../images/works_05.png';
import works_06 from '../images/works_06.png';
import works_07 from '../images/works_07.png';
import works_08 from '../images/works_08.png';
import works_09 from '../images/works_09.png';
import works_10 from '../images/works_10.png';
import works_11 from '../images/works_11.png';
import works_12 from '../images/works_12.png';
import works_13 from '../images/works_13.png';
import works_14 from '../images/works_14.png';
import works_15 from '../images/works_15.png';
import works_16 from '../images/works_16.png';
import works_17 from '../images/works_17.png';

import WorksTitle from '../../introduceTitle/Title';
import worksStyle from '../works.scss';

class Works extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={worksStyle.works_container}>
                <WorksTitle {...this.props.worksTitle}/>
                <ul className={worksStyle.works_show_container}>
                    {
                        this.props.worksShow.map((item, index)=>{
                            let cn = null;
                            switch(item.type){
                                case 1 :
                                    cn = worksStyle.type_1;
                                    break;
                                case 2 :
                                    cn = worksStyle.type_2;
                                    break;
                                case 3 :
                                    cn = worksStyle.type_3;
                                    break;
                            }
                            return <li key = {index} >
                                <img key = {index} src={item.imgSrc} alt="works" className={cn}/>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
Works.defaultProps = {
    worksTitle: {
        title: "红瞳影视美术工作室部分参与作品",
        text: "优秀的影片更需要优秀的你，你准备好了吗？",
        textStyle:{
            textAlign: "center"
        }
    },
    worksShow: [
        {
            imgSrc: works_01,
            type: 1
        },
        {
            imgSrc: works_02,
            type: 1
        },
        {
            imgSrc: works_03,
            type: 1
        },
        {
            imgSrc: works_04,
            type: 1
        },
        {
            imgSrc: works_05,
            type: 1
        },
        {
            imgSrc: works_06,
            type: 1
        },
        {
            imgSrc: works_07,
            type: 1
        },
        {
            imgSrc: works_08,
            type: 2
        },
        {
            imgSrc: works_09,
            type: 1
        },
        {
            imgSrc: works_10,
            type: 1
        },
        {
            imgSrc: works_11,
            type: 3
        },
        {
            imgSrc: works_12,
            type: 1
        },
        {
            imgSrc: works_13,
            type: 3
        },
        {
            imgSrc: works_14,
            type: 1
        },
        {
            imgSrc: works_15,
            type: 1
        },
        {
            imgSrc: works_16,
            type: 2
        },
        {
            imgSrc: works_17,
            type: 1
        },

    ]
};
export default Works;