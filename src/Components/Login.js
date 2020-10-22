import React, {Component} from 'react';
import Layout from './../Pages/Layout';
import axios from 'axios';
import {API_URL} from './../Utils/Constant';
import {Nav, Navbar, Form, Button, FormControl} from 'react-bootstrap';
import { setUserSession } from './../Utils/Common';


class Login extends Component{
	constructor(props) {
        super(props);
        this.state = {
        	password : '',
        	username : '',
        }
    }

    componentDidMount(){
    	
    }
	handleSubmit = (event) => {
		event.preventDefault();
		const data = {
            password : this.state.password,
            username : this.state.username
        }
		axios
	    .post(API_URL+"login",data)
	    .then(res=>{
	    	setUserSession('Bearer '+res.data.data.token);
	        alert('SUKSES LOGIN');
	    })
	    .catch(error => {
	        alert('USERNAME / PASSWORD SALAH');
	    })
	}

	changeValue = (event) => {
		this.setState({
			username : event
		})
	}
	changeValue1 = (event) => {
		this.setState({
			password : event
		})
	}

	render(){
		return (
			<div>
				<Layout />
				<h1>Form Login</h1>
				<Form onSubmit={this.handleSubmit} inline>
				  <FormControl type="text" placeholder="Username" className="mr-sm-2" name="username" onKeyUp={(event) => this.changeValue(event.target.value)}/>
				  <FormControl type="password" placeholder="Password" className="mr-sm-2" name="password" onKeyUp={(event) => this.changeValue1(event.target.value)} />
			      <Button variant="primary" type="submit"> Login</Button>
			    </Form>
			    
			</div>
		);
	}
}

export default Login;