import React, {Component} from 'react';

import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalBody, ModalFooter, ModalHeader, Row, Label, Col } from 'reactstrap';
import { Link} from 'react-router-dom';
import {LocalForm, Control, Errors} from 'react-redux-form';
    
const minLength = (len)=>(val)=> (val)&&(val.length>=len);
const maxLength = (len)=>(val)=> !(val)||(val.length<=len);
const required = (val)=>(val)&&val.length;

   function RenderDish({dish})
    {
        if(dish!=null)
        {
            return(            
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>                
            );   
        }
        else{
            return(
                <div></div>
            );
        }
    }

class CommentForm extends Component {


    constructor(props)
    {
        super(props);
        this.state={
            isModalOpen: false
        };
        this.toggle=this.toggle.bind(this);
    }

    toggle(){
        this.setState(
            {
                isModalOpen: !this.state.isModalOpen
            });
    }
    handleSubmit(values) {
        this.toggle;
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    }


  
    render(){
        return(
            <div>
                <Button outline="secondary" onClick={this.toggle}><span className="fa fa-pencil"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggle} className="container">
                    <ModalHeader toggle={this.toggle}><h5><strong>Submit Comment</strong></h5></ModalHeader>
                    <ModalBody className="container">
                        <LocalForm onSubmit = {(values)=>this.handleSubmit(values)} >
                            <Row> 
                                <Col>
                                    <Label for="Rating" >Rating</Label>
                                    <Control.select model=".Rating" name="Rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col>
                                <Label for="Name" >Your Name</Label>
                                <Control.text model=".Name" name="Name" className="form-control" 
                                placeholder="Your Name"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}/>
                                <Errors  
                                    className="text-danger"
                                    model=".Name"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}/>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col>
                                <Label for="Comment">Comment</Label>
                                <Control.textarea model=".Comment" name="Comment" className="form-control" rows="6"
                                validators={{required}}
                                />
                                <Errors 
                                className="text-danger"
                                model=".Comment"
                                show="touched"
                                messages={{
                                    required: 'Required'
                                }
                                }
                                />
                                </Col>
                            </Row>
                            <Button className="mt-3" type="submit" color="primary" value="submit">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>                
        );
    }
}
        function RenderComments({comments})
        {
        if(comments!=null)
        {
                const Comments= comments.map((c)=>{
                        return(
                            <li key={c.id}>                                
                                <p>{c.comment}</p>
                                <p>-- {c.author}, 
                                &nbsp;
                                {new Intl.DateTimeFormat('en-US',{
                                    day:'2-digit',
                                    month:'short',
                                    year:'numeric'
                                }).format(new Date(c.date))}
                                </p>                                    
                            </li>
                        );
                    }
                );
                return (  
                <div className="col-12">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                    {Comments}
                    <CommentForm/>             
                    </ul>
                </div>);
                
        }
        else{
            return (<div></div>);
        }
    }


    function Dishdetail (props){
        return(    
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                    <BreadcrumbItem><Link to ="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments}/>
                    </div>
                </div>
            </div>
        );
    }

export default Dishdetail;