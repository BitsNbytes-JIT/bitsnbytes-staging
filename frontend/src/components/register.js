import React ,{ Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Col } from 'reactstrap';
import axios from 'axios';


class register extends Component {
    constructor(){
        super();
        this.state = {
            name :'',
            usn :'',
            branch:'',
            sem:'',
            email:'',
            password: '',
            phone:'',
            volunteer:'No',
            interest:''
        }
        this.namechange = this.namechange.bind(this);
        this.usnchange = this.usnchange.bind(this);
        this.branchchange = this.branchchange.bind(this);
        this.semchange = this.semchange.bind(this);
        this.emailchange = this.emailchange.bind(this);
        this.passwordchange = this.passwordchange.bind(this);
        this.phonechange = this.phonechange.bind(this);
        this.volunteerchange = this.volunteerchange.bind(this);
        this.interestchange = this.interestchange.bind(this);

        this.formurl = this.formurl.bind(this);
    }

        

        namechange = (event) => {
            this.setState({name: event.target.value});
        }
        usnchange = (event) => {
            this.setState({usn: event.target.value});
        }
        branchchange = (event) => {
            this.setState({branch: event.target.value});
        }
        semchange = (event) => {
            this.setState({sem: event.target.value});
        }
        emailchange = (event) => {
            this.setState({email : event.target.value});
        }
        passwordchange = (event) => {
            this.setState({password: event.target.value});
        }
        phonechange = (event) => {
            this.setState({phone: event.target.value});
        }
        volunteerchange = (event) => {
            const { volunteer, value } = event.target;

            this.setState({
              [volunteer]: value  });
        }
        interestchange = (event) => {
            this.setState({interest: event.target.value});
        }

        formurl = async() => {

          const newUser = {
            name :this.state.name,
            usn:this.state.usn,
            branch:this.state.branch,
            sem:this.state.sem,
            email:this.state.email,
            password:this.state.password,
            phone:this.state.phone,
            interest:this.state.interest,
            volunteer:this.state.volunteer

          }
            console.log("Password before register"+newUser.password);
            const response = await axios.post(`http://localhost:8080/mem/register`,newUser)
            .then(res => this.props.history.push("/login"))            
            if(response.status === 200){
                console.log("No error");
                alert("DONE!!");
            }else{
                console.log(response.data);
            }

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
                name="name"
                onChange={this.namechange}
                id="name"
                placeholder="Enter name"
                />
            </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="usn">USN: </Label>
                <Input
                  type="String"
                  name="usn"
                  onChange={this.usnchange}
                  id="usn"
                  placeholder="Enter USN"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="branch">Branch: </Label>
                <Input
                  type="String"
                  name="branch"
                  onChange={this.branchchange}
                  id="branch"
                  placeholder="Enter Branch"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="sem">Semester: </Label>
                <Input
                  type="number"
                  name="sem"
                  onChange={this.semchange}
                  id="sem"
                  placeholder="Enter Sem"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Email : </Label>
                <Input
                  type="email"
                  name="email"
                  onChange={this.emailchange}
                  id="exampleEmail"
                  placeholder="myemail@email.com"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
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
                  name="phone"
                  onChange={this.phonechange}
                  id="phone"
                  placeholder= "Enter Phone"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="Interest">Interests : </Label>
                <Input
                  type="String"
                  name="Interest"
                  onChange={this.interestchange}
                  id="interest"
                  placeholder="Enter your Interests"
                />
              </FormGroup>
            </Col>
            <Col>
            <FormGroup>
              Do you wish to volunteer?
              <Label check>
              <Input 
                type="radio" 
                name="radio" 
                value="yes"
                onChange={this.volunteerchange}/>
                {'yes'}
              </Label>
              <Label check>
              <Input 
              type="radio" 
              name="radio" 
              value="No"
              onChange={this.volunteerchange} />{'No'}
              </Label>
            </FormGroup>
            </Col>
            
            
            <Button>Submit</Button>
          </Form>
        </Container>
      );
    }
  }
  
  export default register;
