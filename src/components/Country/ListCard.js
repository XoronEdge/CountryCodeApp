import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import styled from "styled-components";
const showLanguages = languages => {
  return (
    <>
      <h1>Languages</h1>
      {languages.map(language => {
        return (
          <CardExtra key={language.native + language.name}>
            <CardText>Native: {language.native}</CardText>
            <CardText>English: {language.name}</CardText>
          </CardExtra>
        );
      })}
    </>
  );
};

const ListCard = ({ country, match }) => {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <Card>
      <CardBody>
        <CardTextBox>
          <CardText>Country Name: {country.name}</CardText>
          <CardText>Continent: {country.continent.name}</CardText>
        </CardTextBox>
        <CardButtonBox>
          <Link to={`${match.path}/${country.code}`}>
            <Button>Show Detatil</Button>
          </Link>
          <Button handleClick={() => setIsExpand(isExpand => !isExpand)}>
            {isExpand ? "Hide Languages" : "Show Languages"}
          </Button>
        </CardButtonBox>
      </CardBody>

      {isExpand ? showLanguages(country.languages) : null}
    </Card>
  );
};
export default ListCard;

const Card = styled.div`
  max-width: 400px;
  min-height: 200px;
  background-color: #ffff;
  border: 1px solid rgba(255, 255, 255, 0.233);
  box-shadow: 0px 0px 75px -18px rgba(0, 0, 0, 0.75);
  margin: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  transition: all 0.1s ease-in;
  padding: 10px;

  :hover {
    transform: scale(1.1, 1.1);
  }
`;

const CardBody = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 5px;
`;

const CardTextBox = styled.div`
  flex: 2;
`;
const CardButtonBox = styled.div`
  flex: 1;
  align-items: center;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const CardExtra = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;
const CardText = styled.h1`
  font-family: sans-serif;
  color: black;
  font-size: 1rem;
  margin-top: 0px;
`;
