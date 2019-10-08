import React, { Component } from 'react';

import './prolist.css';
import Hedder from './components/hedder';
import Sidebar from './components/sidebar';
import Axios from 'axios';

class ProjectList extends Component {
    state = { data:[] 
      };
 



componentDidMount() {
    Axios.get(`http://localhost:8081/test/api/v1/project`)
      .then(res => {
         this.setState({ data:res.data });
         
      })
      this.refreshProject();
}
refreshProject() {
    Axios.get("http://localhost:8081/test/api/v1/project")
    .then(res => {
   
      this.setState({ data:res.data });
    });
  }
  
  
  handleDelete=(id)=>{
    Axios
    .delete("http://localhost:8081/test/api/v1/project/" + id)
    .then(res => {
   
      this.refreshProject(res);

      // alert(" Project deleted successfully");
    });
    }



    render() { 
        return ( 
            <div>

                <Hedder/>
                <Sidebar/>
<div>
                <div className="form-style-6">
                
<table>
<a href="/prolist"> <th  className="btn1"> < input type="submit"   value="Add"  /></th></a>
  <tr>
  <th>Project ID</th>
  <th>Project Name</th>
  <th>Project Discription</th>
  <th>Action</th>
  </tr>
 { this.state.data.map(d=>{
  return(
  <tr>
  <td>{d.id}</td>
  <td>{d.projectName}</td>
  <td>{d.projectDescription}</td>
 
<td> <a href={`/update/${d.id}`}><input type="button"   value="Edit" /></a>
  </td>
  <td><input type="button" value="Delete" onClick={()=>this.handleDelete(d.id)}/>
  </td>
  </tr>)
  
 }) }

 

</table>

                    </div>
                    
            </div>
            </div>
         );
    }
}
 
export default ProjectList;