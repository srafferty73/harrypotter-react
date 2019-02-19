import React from 'react';

const CharacterDetails = ({character}) => {
  if (!character) return null;
  return (
    <div>
    <h3> {character.name} </h3>
    <h3> {character.house} </h3>
    <img src = {character.image} /> 
    </div>
  )
}

export  default CharacterDetails;
