import React from "react";

function Coordinates(props){
  return(
    <p>{props.coordinates.x}, {props.coordinates.y}</p>
  )
  }

function Marks(props){
  return(
    <div>
      <ul>
        {props.marks.map(mark =>{
          const coordsTag = mark.coordinates.map(coordinates => {
            return (
              <Coordinates coordinates={coordinates}/>
            );
          });
          return(
            <li key={mark._id}>
              {mark.tag_id.title}{coordsTag}
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default Marks;