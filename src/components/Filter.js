import React from 'react';

const Filter = (props) => {
  return (
    <div id="nav">
      Filter By Name: <input type="text" value={props.searchTerm} onChange={props.handleFilterTerm} />
    </div>
  )
}

export default Filter;
