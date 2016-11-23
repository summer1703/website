/**
 * Created by Excalibur on 16/9/26.
 */
import React from 'react'

import '../css/index.scss'
import X from './xxx'
import Image from '../image/33.png'
import Image0 from '../image/22.png'
import Image1 from '../image/12.jpeg'
import Image2 from '../image/1.jpeg'


import reducer from '../reducers/index.js'
import connect from '../store/store'
import actions  from '../actions/index'
class Temp extends React.Component {

    change(){
        var actions = this.props.actions;

        actions.change()
    }

    render() {
        var data = this.props;
        return (
            <div>
                <span className="aaa" onClick={this.change.bind(this)}>{data.todo.text}</span>
                <span className="iconfont icon-del"></span>
                <img src={Image1} alt=""/>
                <img src={Image2} alt=""/>
            </div>

        )
    }
}

connect(Temp, reducer, actions)

