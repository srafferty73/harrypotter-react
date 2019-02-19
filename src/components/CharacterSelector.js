import  React from 'react';

const CharacterSelector = (props) => {

  const options = props.characters.map( (character, index) => {
    return <option value={index} key={index}>{character.name}</option>
  })

  function handleChange(event) {
    props.handleCharacterSelected(event.target.value);
  }

  return (
    <select id="character-selector" defaultValue = "default" onChange={handleChange}>
      <option disable value="default">Choose a character...</option>
      {options}
      </select>
  )

}

export default CharacterSelector;
