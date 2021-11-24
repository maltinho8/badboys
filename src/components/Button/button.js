import React from 'react';
import styled from "styled-components";

const FuPaButton = styled.button`
  padding: 5px 12px;
  background-color: #fbbe01;
  color: #000;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  border: 2px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;
  border-radius: 8px;
  &:hover {
    background-color: transparent;
    color: #fff;
    border: 3px solid #fbbe01;
  }
`;

const Button = () => {
        return (
            <div>
                <FuPaButton />
            </div>
        );
    };

export default Button;

 