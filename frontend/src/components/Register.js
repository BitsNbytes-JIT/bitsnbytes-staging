import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

class Register extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
          Name : this.Name,
          USN : this.USN,
          Branch : this.Branch,
          Sem : this.Sem,
          Email : this.Email ,
          Phone : this.Phone,
          Volunteer : this.Volunteer,
          Intrests : this.Intrests
        };
        console.log(data);
        axios
        .post("register", data) 
        .then((res) => {
          console.log(res.data)         
        }).catch((err) => {
            console.log(err);
          });
        
      }
  render() {
    return (
        <div>
          <Link to="/" >Back to home </Link>
          <div>
              <h4>
              <b>Register</b> below
              </h4>
              {/* <p>
              Already have an account? <Link to="/login">Log in</Link>
              </p> */}
          </div>
          <form noValidate onSubmit={this.handleSubmit}>
            <div>
              <label>Name</label>
              <input onChange={(e) => (this.Name = e.target.value)}/>
            </div>
            <div >
              <input onChange={(e) => (this.Email = e.target.value)}/>
              <label>Email</label>
            </div>
            <div>
              <input onChange={(e) => (this.USN = e.target.value)}/>
              <label >USN</label>
            </div>
            <div>
              <input onChange={(e) => (this.Branch = e.target.value)}/>
              <label >Branch</label>
            </div>
            <div>
              <input onChange={(e) => (this.Sem = e.target.value)}/>
              <label >Sem</label>
            </div>
            <div>
              <input onChange={(e) => (this.Phone = e.target.value)}/>
              <label >Phone</label>
            </div>
            <div >
              <input onChange={(e) => (this.Volunteer = e.target.value)}/>
              <label>Volunteer</label>
            </div>
            <div>
              <input onChange={(e) => (this.Phone = e.target.value)}/>
              <label >Phone</label>
            </div>
            <div>
              <input type="submit" value="Create User"/>
            </div>
          </form>
        </div>
    );
  }
}



export default Register;
