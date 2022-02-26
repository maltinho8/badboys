import React from 'react';
import styled from 'styled-components';
import {Helmet} from 'react-helmet';
import './Index.css';

const Container = styled.div`
  padding: 1rem;
  color: ${({theme}) => theme.palette.text.light};
`;

const Headline = styled.h2`
font-size: 4rem;
line-height: 1;
margin-bottom: 2rem;
color: white;
  
`;

const Text = styled.div`
  font-size: 1.2rem;
`;


const ContentTabelle = () => {
  return (
    <Container>
      <Headline>
        Tabelle
      </Headline>
      <Text>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </Text>
      <br />
      <br />
      <Text>
        
      </Text>
      
      <div id="widget1"></div>
      <Helmet>

      
	<script type="text/javascript">
		new fussballdeWidgetAPI().showWidget('widget1', '02H25P4LU8000000VUM1DNPIVV2T1IAH');
	</script>

      </Helmet>

     
    </Container>
  );
};

export default ContentTabelle;
