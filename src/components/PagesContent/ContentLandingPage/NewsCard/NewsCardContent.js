import NewsCard from './NewsCard.js';
import '../../ContentLandingPage/index.js';
import styled from 'styled-components';

const HorizontalContainer = styled.div`
    
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-content: center;
    }
  
  `; 

  const PropsNewsCard = ({ props }) => {
    return (
      <HorizontalContainer>
        
          {props.map((newsContent) => {
            const { title, description} = newsContent;
            
            return (
              
              <NewsCard
                title = {title}
                description = {description}
              />
              
            )
          })}
          </HorizontalContainer>
      
    )
}

export default PropsNewsCard;