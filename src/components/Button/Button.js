import React from "react";
import styled from "styled-components";
const Button = ({ handleClick, children }) => {
  return (
    <GreenButton className="button" onClick={handleClick}>
      {children}
    </GreenButton>
  );
};

export default Button;

const GreenButton = styled.button`
  padding: 8px;
  border-radius: 20%;
  min-height: 50px;
  border: 1px solid rgb(72, 255, 0);
  background-color: transparent;
  font-size: 1.2rem;
  color: rgb(72, 255, 0);
  transition: all 0.2s ease-in-out;
  margin: 5px;
  :focus,
  :active {
    outline: none;
  }
  :hover {
    background-color: rgb(72, 255, 0);
    color: #fff;
    transform: translateY(-2px);
  }
`;
