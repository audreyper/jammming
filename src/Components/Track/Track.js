import React from 'react';
import './Track.css';

function Track({ track, onAdd, isRemoval, onRemove}) {

    function renderAction() {
        return isRemoval 
        ? <button className="Track-action" onClick={removeTrack}>-</button> 
        : <button className="Track-action" onClick={addTrack}>+</button>;
      }

    function addTrack() {
    onAdd(track)
    }  

    function removeTrack() {
     onRemove(track)
    }


    return(
      <div className="Track">
        <div className="Track-information">
          <h3>{track.name}</h3>
            <p>{track.artist} | {track.album} </p>
        </div>
          {renderAction()}
      </div>
    )
};

export default Track;