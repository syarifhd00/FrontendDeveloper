import React, {Component} from 'react';
import Layout from './../Pages/Layout';
import axios from 'axios';
import {API_URL} from './../Utils/Constant';
import {Nav, Navbar, Form, Button, FormControl} from 'react-bootstrap';


class Data extends Component{
	constructor(props) {
        super(props);
        this.state = {
        	email : '',
        	password : '',
        	username : '',
        }
    }

    componentDidMount(){
    	
    }
	handleSubmit = (event) => {
		event.preventDefault();
		const data = {
            email : this.state.email,
            password : this.state.password,
            username : this.state.username
        }
		axios
	    .post(API_URL+"register",data)
	    .then(res=>{
	    	console.log(res);
	        alert('SUKSES DAFTAR');
	    })
	    .catch(error => {
	        alert('USERNAME/EMAIL SUDAH TERDAFTAR');
	    })
	}

	changeValue = (event) => {
		this.setState({
			email : event
		})
	}
	changeValue1 = (event) => {
		this.setState({
			password : event
		})
	}
	changeValue2 = (event) => {
		this.setState({
			username : event
		})
	}

	render(){
		return (
			<div>
				<Layout />
				<h1>Form Daftar</h1>
				<Form onSubmit={this.handleSubmit} inline>
			      <FormControl type="text" placeholder="Email" className="mr-sm-2" name="email" onKeyUp={(event) => this.changeValue(event.target.value)}/>
			      <FormControl type="password" placeholder="Password" className="mr-sm-2" name="password" onKeyUp={(event) => this.changeValue1(event.target.value)} />
			      <FormControl type="text" placeholder="Username" className="mr-sm-2" name="username" onKeyUp={(event) => this.changeValue2(event.target.value)}/>
			      <Button variant="primary" type="submit"> Daftar</Button>
			    </Form>
			    
			</div>
		);
	}
}

export default Data;