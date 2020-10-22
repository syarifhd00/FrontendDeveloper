import React, {Component} from 'react';
import Layout from './../Pages/Layout';
import axios from 'axios';
import {API_URL} from './../Utils/Constant';
import {Nav, Navbar, Form, Button, FormControl} from 'react-bootstrap';
import Fetch from './Fetch';


class checklistGetAll extends Component{
	constructor(props) {
        super(props);
        this.state = {
        	data : []
        }
    }

    componentDidMount(){
    	
    }
	handleSubmit = () => {
		axios
		.get(API_URL+"checklist",{headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    	}})
	    .then(res=>{
	    	alert('BERHASIL MENGAMBIL DATA');
	    	alert(res.data.data);
	    	this.result(res.data.data);
	    })
	    .catch(error => {
	        console.log(error);
	    })
	}

	result = (result) => {
		console.log(result);
		this.setState({
			data : result
		})
	}

	render(){
		const {data} = this.state;
		return (
			<div>
				<Layout />
				<Button variant="primary" type="button" onClick={this.handleSubmit}> GET ALL</Button>
			    <Fetch data = {data} />
			</div>
		);
	}
}

export default checklistGetAll;