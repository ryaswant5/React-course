import React, { Component } from 'react';

import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
    

class Dishdetail extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            
        };
    }

    renderDish(dish)
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
        renderComments(comments)
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
                    </ul>
                </div>);
                
        }
        else{
            return (<div></div>);
        }
    }


    render(){
        console.log("HI");
        if(this.props.dish!=null){
        return(    
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            </div>
        );
        }
        else{
            return (<div></div>);
        }
    }
}

export default Dishdetail;