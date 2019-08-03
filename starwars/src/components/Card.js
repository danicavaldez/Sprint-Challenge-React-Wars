import React from "react";
import styled from "styled-components"

const StyledCard = styled.div`
  background-color: white;
  width: 400px;
  border-radius: 10px;
  margin-bottom: 20px;
  opacity: 0.8;
  color: black;
  box-shadow: 0 8px 6px -6px black;
`

export default function Card({ name, birthday, mass, height, eyeColor, hairColor }) {
  return (
    <StyledCard>
      <h2>{name}</h2>
      <p>Birth Year: {birthday}</p>
      <p>Mass: {mass}kg</p>
      <p>Height: {height}cm</p>
      <p>Eye Color: {eyeColor}</p>
      <p>Hair Color: {hairColor}</p>
    </StyledCard>
  )
}