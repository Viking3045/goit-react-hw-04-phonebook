import React from 'react';
const Filter = ({setFilterToState}) => {

 const filterValue = event => {
    let value =  event.currentTarget.value.toUpperCase();
    setFilterToState(value);
  }
  
    return (
       <div>
        <h2>Find contacts by name</h2>
        <input onChange={filterValue}  />
    </div>
    )
}

export default Filter 
