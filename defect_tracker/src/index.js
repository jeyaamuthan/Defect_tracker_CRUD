import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Newpro from './project_components/newpro';
import Defect from './defect_components/defect';
import ProjectList from './prolist';
import Editprolist from './project_components/editprolist';


ReactDOM.render(
    <BrowserRouter>
<Switch>
  <Route exact path='/' component={App}/>
  <Route  path='/addproject' component={Newpro}/>
  <Route  path='/adddefect' component={Defect}/>
  <Route  path='/prolist' component={ProjectList}/>
  <Route  path='/update/:id' component={Editprolist}/>
  

</Switch>
    </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
