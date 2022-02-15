import React from "react";
import './Index.css';
import styled from 'styled-components';

const Text = styled.div`
  font-size: 0.7rem;
  color: white;
  text-align:center;
`;

const Footer = () => (
  <div className="footer">
    <Text>@Badboys</Text>
        
  </div>
);

export default Footer;