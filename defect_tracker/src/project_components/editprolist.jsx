import React, { Component } from 'react';
import Hedder from '../components/hedder';
import Sidebar from '../components/sidebar';
import './editprolist.css';
import '../project_components/newpro.css';
import np from '../components/np.jpg';
import Axios from 'axios';

class Editprolist extends Component {
  state = {


    projectName:'',
    projectDescription:'',
  }
  


  componentDidMount() {
    Axios
      .get(
        "http://localhost:8081/test/api/v1/geProjectById/" + this.props.match.params.id
      )
      .then(result => { 

        this.setState({
         
          projectName: result.data.projectName,
          projectDescription: result.data.projectDescription
          
        });
      });
  }
  handleChangepname1 = (event) => {
    this.setState({
        projectName: event.target.value
    });
}

handleChangepdes1 = (event) => {
    this.setState({
        projectDescription: event.target.value
    });
}



getToList = () => {
    this.props.history.push("/prolist")
}

onSubmithanlde = (event) => {
  event.preventDefault();
  const url="http://localhost:8081/test/api/v1/updateproject/"
  Axios.put(url+this.props.match.params.id,{projectName:this.state.projectName,projectDescription:this.state.projectDescription})
  window.location.reload();
  
}

  render() {
    
    

    return (

      <div>
        <Hedder />
        <Sidebar />
        <div className="container">
          <form onSubmit={this.onSubmithanlde}>
          
            <div className="row">
              <div className="col-25">
                <label for="pname">Project Name</label>
              </div>
              <div className="col-75">
                <input type="text" id="pname" name="projectName" placeholder="Project name.." value={this.state.projectName}onChange={this.handleChangepname1}/>
              </div>
            </div>
            


            <div className="row">
              <div className="col-25">
                <label for="pdiscription">Project Description</label>
              </div>
              <div className="col-75">
                <textarea id="pdescription" name="projectDescription" placeholder="Write something.." value={this.state.projectDescription}onChange={this.handleChangepdes1}></textarea>
              </div>
            </div>

            <div>

            </div>

            <  img src={np} id="np" alt="hghfhfh"/>



            <div id="ib">
              <input id="ib1"  type="submit" value="Udate" />

              <input id="ib2" type="button" value="Back" onClick={this.getToList} />
            </div>




          </form>
        </div>


      </div>

    );
  }
}

export default Editprolist;