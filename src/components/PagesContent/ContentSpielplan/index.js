import React from 'react';
import styled from 'styled-components';
import {Helmet} from 'react-helmet';
import './Index.css';

const Container = styled.div`
  padding: 1rem;
  color: ${({theme}) => theme.palette.text.light};
`;

const Headline = styled.h2`
  font-size: 5rem;
  line-height: 1;
  margin-bottom: 3rem;
`;

const Text = styled.div`
  font-size: 1.2rem;
`;

const ContentSpielplan = () => {
  return (
    <Container>
      <Headline>
        Spielplan
      </Headline>
      <Text>
       Der Spielplan der Saison 2021/2022 der Kreisliga A Staffel 1.
      </Text>  
      <br />
      <br />
      <Text>
        
      </Text>
      <div id="widget2"></div>
      <Helmet>

      
      <script type="text/javascript">
		new fussballdeWidgetAPI().showWidget('widget2', '02H3FRGU24000000VUM1DNOPVSR4O07R');
	</script>

      </Helmet>

    </Container>
  );
};

export default ContentSpielplan;
