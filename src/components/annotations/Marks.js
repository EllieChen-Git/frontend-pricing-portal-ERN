import React, { useState } from "react";
import {Button} from "react-bootstrap";

function Coordinates(props){
  const [isOver, setIsOver] = useState(false);

  const HandleMouseEnter = e => {
    if (!props.isReadOnly) {
      setIsOver(true);
    }
    props.handleHoverCoordinates(props.coordinates);
  };
  const HandleMouseLeave = e => {
    setIsOver(false);
    props.handleHoverCoordinates(null);
  }
  return(
    <>
    <p
      style={{fontSize: "16px"}}
      onMouseEnter={HandleMouseEnter}
      onMouseLeave={HandleMouseLeave}
    >
      {props.coordinates.x.toFixed(3)}, {props.coordinates.y.toFixed(3)}
      {isOver && 
        <Button style={{fontSize: "16px"}} onClick={() => props.handleDeleteCoordinates(props.coordinates)}>Delete</Button>}
    </p>
    </>
  )
}
  

function Marks(props){
  return(
    <div>
      <ul style={{fontSize: "1em"}}>
        {props.marks.map(mark =>{
          const coordsTag = mark.coordinates.map(coordinates => {
            return (
              <Coordinates key={coordinates._id}
                coordinates={coordinates}
                handleHoverCoordinates={props.handleHoverCoordinates}
                handleDeleteCoordinates={props.handleDeleteCoordinates}
                isReadOnly={props.isReadOnly}
              />
            );
          });
          return(
            <li style={{fontSize: "20px"}} key={mark._id}>
              {mark.tag_id.title}{coordsTag}
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default Marks;
