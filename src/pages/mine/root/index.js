import React, { Component } from 'react'
import { connect } from 'react-redux'
import UI from './indexUI'
import './index.css'

class Index extends Component{
    constructor(){
        super();
        
    }
    render(){
        return <UI />
    }

}

//state -> props
const mapStateToProps = ({ })=>{
    return{
        //
    }
}

//dispatch -> props
const mapDispatchToProps = (dispatch)=>{
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);