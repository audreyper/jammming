import React from 'react';
import './Track.css';

function Track() {

    function renderAction() {
        return isRemoval 
        ? <button className="Track-action" onClick={removeTrack}>-</button> 
        : <button className="Track-action" onClick={addTrack}>+</button>;
      }


    return(
      <div className="Track">
        <div className="Track-information">
          <h3><!-- track name will go here --></h3>
            <p><!-- track artist will go here--> | <!-- track album will go here --></p>
        </div>
          <button className="Track-action"><!-- + or - will go here --></button>
      </div>
    )
};

export default Track;