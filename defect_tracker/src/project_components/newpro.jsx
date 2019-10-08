import React, { Component } from 'react';
import Hedder from '../components/hedder';
import Sidebar from '../components/sidebar';
import './newpro.css';
import '../project_components/newpro.css';
import np from '../components/np.jpg';
import Axios from 'axios';

class Newpro extends Component {
  state = {
   
    projectName:'',
    projectDescription:'',
  }
  
  handleChangepname =(e)=>{
    this.setState({projectName:e.target.value});
   }
   handleChangepdes =(e)=>{
    this.setState({projectDescription:e.target.value});
   }

  componentDidMount() {
  }
  
  handleAdd=(e)=>{ 
    
    Axios.post("http://localhost:8081/test/api/v1/project",this.state)
    .then(res=>
     {
     
     }
    ) 
    
  }
  
  render() {
    console.log(this.state);
    return (

      <div>
        <Hedder />
        <Sidebar />
        <div className="container">
          <form onSubmit={this.handleAdd}>
         
            <div className="row">
              <div className="col-25">
                <label for="pname">Project Name</label>
              </div>
              <div className="col-75">
                <input type="text" id="pname" name="projectName" placeholder="Project name.." value={this.state.projectName}onChange={this.handleChangepname}/>
              </div>
            </div>
            


            <div className="row">
              <div className="col-25">
                <label for="pdiscription">Project Description</label>
              </div>
              <div className="col-75">
                <textarea id="pdescription" name="projectDescription" placeholder="Write something.." value={this.state.projectDescription}onChange={this.handleChangepdes}></textarea>
              </div>
            </div>

            <div>

            </div>

            <  img src={np} id="np" alt="grgr" />



            <div id="ib">
              <input id="ib1"  type="submit" value="Create" />

              <input id="ib2"  type="reset" value="Reset" />
            </div>




          </form>
        </div>


      </div>

    );
  }
}

export default Newpro;