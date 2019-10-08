import React, { Component } from 'react';
import Hedder from '../components/hedder';
import Sidebar from '../components/sidebar';
import '../defect_components/defect.css';
import Axios from 'axios'
class Defect extends Component {
  state = {
    // id:'',
    projectName:'',
    projectDescription:'',
  }
  // handleChangeid=(e)=>{
  //  this.setState({id:e.target.value});
  // }
  handleChangepname =(e)=>{
    this.setState({projectName:e.target.value});
   }
   handleChangepdes =(e)=>{
    this.setState({projectDescription:e.target.value});
   }

  componentDidMount() {
  }
  
  handleAdd=(e)=>{ 
    // e.preventDefault();
    Axios.post("http://localhost:8081/test/api/v1/defect",this.state)
    .then(res=>
     {
       console.log(res);
     }
    ) 
    
  }
  render() {
    return (<div>
      <Hedder />
      <Sidebar />
<defect/>
      <div className="container1">
        <form >
          <div className="row">
            <div className="col-25">
              <label for="did">Defect ID</label>
            </div>
            <div className="col-75">
              <input type="text" id="did" name="defectid" placeholder="Enter ID.." />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="dname">Defect Name</label>
            </div>
            <div className="col-75">
              <input type="text" id="dname" name="defectname" placeholder="Defect name.." />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="proid">project ID</label>
            </div>
            <div className="col-75">
              <select id="proid" name="projectid">
                <option value="#"></option>
                <option value="#"></option>
                <option value="#"></option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="description">Defect Description</label>
            </div>
            <div className="col-75">
              <textarea id="description" name="description" placeholder="Write Something.." ></textarea>
            </div>
          </div>
          <div >
            <table className="Cont1">
              <tr>
                <td className="tab1"><p>Severity</p>
                  <input type="radio" name="gender" value="male" /> High <br></br>
                  <input type="radio" name="gender" value="female" /> Medium <br></br>
                  <input type="radio" name="gender" value="other" /> Low <br></br>   </td >

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <td className="tab2"><p>Priority</p>
                  <input type="radio" name="gender1" value="male" /> High <br></br>
                  <input type="radio" name="gender1" value="female" /> Medium <br></br>
                  <input type="radio" name="gender1" value="other" /> Low  <br></br> </td>

              </tr>

            </table>
          </div>

          <div className="row">
            <input className="dbt" type="reset" value="Reset" />

            <input className="dbt" type="submit" value="Create" />
          </div>

        </form>
        </div>

        </div>

      
         
    
    );
  }
}

export default Defect;