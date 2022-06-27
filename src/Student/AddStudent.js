import React from 'react';
import axios from 'axios';
import '../Student/AddStudent.css'
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';

class AddStudent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            Name:'',
            RollNo:'',
            Class:'',
            Address:''
        }
    }
    AddStudent=()=>{
        axios.post('https://localhost:44388/api/Students/AddOrUpdateStudent/', {Name:this.Name, RollNo:this.RollNo,
        Class:this.Class, Address:this.Address})
        .then(json =>{
            if(json.data.Status==='Success'){
                console.log(json.data.Status);
                alert("Data Saved Successfully");
            this.props.history.push('/Studentlist')
            }else{
                alert('Data not Saved');
                debugger;
            this.props.history.push('/Studentlist')
            }
        })
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    render(){
        return (
            <Container className="App">
                <h4 className="PageHeading">Student Details</h4>
                <Form className="form">
                    <Col>
                        <FormGroup row>
                            <Label for="name" sm={2}>Name</Label>
                            <Col sm={10}>
                                <Input type="text" name="Name" onChange={this.handleChange} value={this.state.Name} placeholder="Name"></Input>
                            </Col>

                            <Label for="rollno" sm={2}>RollNo</Label>
                            <Col sm={10}>
                                <Input type="text" name="RollNo" onChange={this.handleChange} value={this.state.RollNo} placeholder="Roll Number"></Input>
                            </Col>

                            <Label for="class" sm={2}>Class</Label>
                            <Col sm={10}>
                                <Input type="text" name="Class" onChange={this.handleChange} value={this.state.Class} placeholder="Enter Class"></Input>
                            </Col>

                            <Label for="address" sm={2}>Address</Label>
                            <Col sm={10}>
                                <Input type="text" name="Address" onChange={this.handleChange} value={this.state.Address} placeholder="Enter Address"></Input>
                            </Col>

                        </FormGroup>
                    </Col>

                    <Col>
                        <FormGroup row>
                            <Col sm={5}></Col>
                            <Col sm={1}>
                                <button type="button" onClick={this.AddStudent} className="btn btn-success">Submit</button>
                            </Col>
                            <Col sm={1}>
                                <Button color="danger">Cancel</Button>{' '}
                            </Col>
                            <Col sm={5}></Col>
                        </FormGroup>
                    </Col>

                </Form>
            </Container>
        );
    }
}
export default AddStudent;