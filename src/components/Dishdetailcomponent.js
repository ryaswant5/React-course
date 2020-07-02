import React from 'react';

import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
    
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
                    </ul>
                </div>);
                
        }
        else{
            return (<div></div>);
        }
    }


    function Dishdetail (props){
        if(props.dish!=null){
        return(    
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.dish.comments}/>
                    </div>
                </div>
            </div>
        );
        }
        else{
            return (<div></div>);
        }
    }

export default Dishdetail;