import React ,{ Component } from 'react';
const  { Button, Form, FormGroup, Label, Input, Container, Col } = require('reactstrap');
const axios = require('axios');

class register extends Component {
    constructor(){
        super();
        this.state = {
            Name :'',
            USN :'',
            Branch:'',
            Sem:'',
            Email:'',
            Password:'',
            Phone:'',
            Role: '',
        }
        this.namechange = this.namechange.bind(this);
        this.usnchange = this.usnchange.bind(this);
        this.branchchange = this.branchchange.bind(this);
        this.semchange = this.semchange.bind(this);
        this.emailchange = this.emailchange.bind(this);
        this.passwordchange = this.passwordchange.bind(this);
        this.phonechange = this.phonechange.bind(this);
        this.rolechange = this.rolechange.bind(this);

        this.formurl = this.formurl.bind(this);
    }

        namechange = (event) => {
            this.setState({Name: event.target.value});
        }
        usnchange = (event) => {
            this.setState({USN: event.target.value});
        }
        branchchange = (event) => {
            this.setState({Branch: event.target.value});
        }
        semchange = (event) => {
          this.setState({Sem: event.target.value});
        }
  
        emailchange = (event) => {
            this.setState({Email : event.target.value});
        }
        passwordchange = (event) => {
          this.setState({Password: event.target.value});
        }
        phonechange = (event) => {
            this.setState({Phone: event.target.value});
        }
        rolechange = (event) => {
          this.setState({Role:event.target.value});
        }


        formurl = async(e) => {
          
          e.preventDefault();
          console.log("Clicked!!");
          console.log(this.state.Name);
          const userData = {
            Name : this.state.Name,
            USN : this.state.USN,
            Branch : this.state.Branch,
            Sem : this.state.Sem,            
            Email: this.state.Email,
            Password: this.state.Password,
            Phone : this.state.Phone,
            Role : this.state.Role

          };
          const response = await axios.post('http://localhost:8080/mem/register',userData);
          console.log(response.data);
          console.log(response.status);

        }

    
    render() {
       // const {classes} = this.props;

      
      return (
        <Container className="App">
          <h2>Register</h2>
          <Form className="form" onSubmit={this.formurl}>
            <Col>
            <FormGroup>
                <Label for="Name">Name :</Label>
                <Input
                type="String"
                onChange={this.namechange}
                id="name"
                placeholder="Enter name"
                />
            </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="USN">USN: </Label>
                <Input
                  type="String"
                  onChange={this.usnchange}
                  id="usn"
                  placeholder="Enter USN"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="Branch">Branch: </Label>
                <Input
                  type="String"
                  onChange={this.branchchange}
                  id="branch"
                  placeholder="Enter Branch"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="Sem">Semester: </Label>
                <Input
                  type="Integer"
                  onChange={this.semchange}
                  id="sem"
                  placeholder="Enter Semester"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Email : </Label>
                <Input
                  type="email"
                  onChange={this.emailchange}
                  id="exampleEmail"
                  placeholder="myemail@email.com"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="password">Password: </Label>
                <Input
                  type="password"
                  onChange={this.passwordchange}
                  id="password"
                  placeholder="Enter password"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="phone">Phone</Label>
                <Input
                  type="Integer"
                  onChange={this.phonechange}
                  id="phone"
                  placeholder= "Enter Phone"
                />
              </FormGroup>
            </Col>
            <Col>
            <FormGroup>
              <Label>Role : </Label>
              <Input
                type="role"
                onChange={this.rolechange}
                id="role"
                placeholder="Enter role"
              />
            </FormGroup>
          </Col>    
            <button type="submit" className="btn btn-primary btn-block btn-lg">Sign Up</button>
          </Form>
        </Container>
      );
    }
  }


export default register;
