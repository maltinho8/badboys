import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/img/fsc.png';

const Text = styled.p`
  
  color: black;
  margin: 10px;
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    text-align: center;
  }
`;

const VerticalContainer = styled.div`
text-align: center;
@media screen and (max-width: 768px) {
  margin-top: 3rem;
}
`;

const SignatureLogo = () => {
    return (
        <VerticalContainer>
        <img alt="Logo" src={Logo} />
        <Text>BadBoys for life.</Text>
        <br />
      </VerticalContainer>
      
    );
};

export default SignatureLogo;