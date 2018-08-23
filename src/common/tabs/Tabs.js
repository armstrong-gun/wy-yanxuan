import React, { Component } from 'react'
import './Tab.css'
import { TabBar } from 'antd-mobile'

import { NavLink } from 'react-router-dom'

export default class Tabs extends Component {
    constructor(props){
        super();

    }
    render(){
        return (
            <nav className="tabs app-tabs">
                <NavLink className="tab" to="/home">首页</NavLink>
                <NavLink className="tab" to="/topic">识物</NavLink>
                <NavLink className="tab" to="/item">分类</NavLink>
                <NavLink className="tab" to="/cart">购物车</NavLink>
                <NavLink className="tab" to="/mine">我的</NavLink>
            </nav>
        )
    }
}