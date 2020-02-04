import React from "react";

function Coordinates(props){

  const HandleMouseEnter = e => props.handleHoverCoordinates(props.coordinates)
  const HandleMouseLeave = e => props.handleHoverCoordinates(null)
  return(
    <>
    <p 
      onMouseEnter={HandleMouseEnter}
      onMouseLeave={HandleMouseLeave}
    >
      {props.coordinates.x}, {props.coordinates.y}
      <button onClick={() => props.handleDeleteCoordinates(props.coordinates)}>Delete</button>
    </p>
    </>
  )
  }
  
  // onMouseEnter={HandleMouseEnter}
  // onMouseLeave={HandleMouseLeave}

  // onMouseOut={HandleMouseOut}
  // onMouseOver={HandleMouseOver}
  


function Marks(props){
  return(
    <div>
      <ul>
        {props.marks.map(mark =>{
          const coordsTag = mark.coordinates.map(coordinates => {
            return (
              <Coordinates 
                coordinates={coordinates}
                handleHoverCoordinates={props.handleHoverCoordinates}
                handleDeleteCoordinates={props.handleDeleteCoordinates}
              />
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