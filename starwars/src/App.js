import React, { useState, useEffect} from "react";
import axios from "axios"
import Card from "./components/Card.js"

import styled from "styled-components"
import "./App.css";

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const App = () => {
  const [persons, setPersonState] = useState([])
  
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => setPersonState(response.data.results))
      .catch(err => console.error(err))
  }, [])
  
  console.log(persons)

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <StyledDiv>
        {persons.map((person, index) => {
          return <Card name={person.name} key={index} mass={person.mass} height={person.height} birthday={person.birth_year} eyeColor={person.eye_color} hairColor={person.hair_color}/> 
        })}
      </StyledDiv>
      </div>
  );
}

export default App;
