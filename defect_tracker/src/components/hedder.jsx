import React  , { Component } from 'react';
import './hedder.css';
import bug3 from'../components/bug3.png';
class Hedder extends Component {
    state = {  }
    render() { 
        return (  <div className="header">
         
        <a   className="logo">DEFECT TRACKER </a>
        < img src ={bug3} id="bug" alt="gfty"/>
        <div className="header-right">
       
         
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
         


<a className="btn"><i className="fa fa-home "></i> home</a>
<a href="/test3" className="btn" ><i  class="fa fa-user"></i> Log in</a>
<a className="btn"><i className="fa fa-phone"></i>Contact</a>
<a className="btn"><i className="fa fa-info"></i> About</a>

          
          
        </div>
      </div>

       
        );
    }
}
 
export default Hedder;