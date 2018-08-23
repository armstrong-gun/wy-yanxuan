import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

//页面
import Home from './pages/home/root/index'
import Cart from './pages/cart/root/index'
import Item from './pages/item/root/index'
import Mine from './pages/mine/root/index'
import Topic from './pages/topic/root/index'
//tabs
import Tabs from './common/tabs/Tabs'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={ Home }></Route>
          <Route path="/home"  component={ Home }></Route>
          <Route path="/cart" component={ Cart }></Route>
          <Route path="/item" component={ Item }></Route>
          <Route path="/mine" component={ Mine }></Route>
          <Route path="/topic" component={ Topic }></Route>

          <Route children={({history,location})=>{
            return <Tabs history={history} initPath={location.pathname} /> 
          }}></Route>
          
        </div>
      </Router>
    );
  }
}

export default App;
