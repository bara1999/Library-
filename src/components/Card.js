import React from 'react';


function Card(props) {
   
 
    return (
        <div className="card" key={props.id}>
        <div className="info">
       
                <div>
                <img className="photo" src={props.image} />
               
                    <h4 className="name1"> {props.title}</h4>
                    <div className="name"> {props.author}</div>
                    <div>{props.description}</div><br />
                  
                </div>
            </div>
  


        </div>
    )
}

export default Card;
