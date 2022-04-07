import React from 'react';
import styled from 'styled-components';
import './index.css';
import DetailsHoF from '../../Card/HoF/CardFrameHoFContent';
import NK1 from '../../../assets/img/ProfileImages/kuberka1.jpg';
import NK2 from '../../../assets/img/ProfileImages/kuberka2.PNG';
import NK3 from '../../../assets/img/ProfileImages/kuberka3.jpg';

const Container = styled.div`
  padding: 1rem;
  color: ${({theme}) => theme.palette.text.light};
  
`;

const Headline = styled.h2`

line-height: 1;
margin-bottom: 2rem;
color: white;
`;

const PlayerContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;



const Text = styled.div`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ContentHallOfFame = () => {
  const profilesHoF = [
    {
      name: 'Tobias Haby',
      spitzname: '"Fluppen Curry"',
      position: 'ZOM',
      description: 'Tobias Haby ghdsgf wefgusif wegruwer wegruwe rgu erg wuegw eruwe weuruwer uwegru werg ewurguwegr weurg ewurgger uerguwe rgwe uewgr uwerguwer weiugr wegur uwerg  weugrugwe ruewr.',
      avatar1: <img alt="ch" src="https://scontent-ber1-1.xx.fbcdn.net/v/t1.18169-9/12187903_934790416613617_7923868850221366641_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHC2eB7JHuFq2m3eZVKS_8JlyOYEd2X7USXI5gR3ZftRF_9oLXrZYXckpWD6fhYZ3HMxVv3HiLXuKM_vX5bZdgL&_nc_ohc=pHz0UaKNcSUAX_rMdDt&_nc_ht=scontent-ber1-1.xx&oh=00_AT9bm5yxK5A-HVDIcoTn9PkqM3Z4sF0u2GKgK9g4geeG0w&oe=6272F38D" />,
      avatar2: <img alt="ch" src="https://scontent-ber1-1.xx.fbcdn.net/v/t1.18169-9/14463247_1143698072389516_2252265909483484196_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeHgQTD8RVnbYZeJ_p7KgcYu5wRWDQY3iBrnBFYNBjeIGi_4MHxTBZij5yoHLiornQDe0WtW2Eg89-N3oubjP68m&_nc_ohc=p24eIbOfBZEAX-HBB5t&tn=OzzjMZ1RVxfNrI9M&_nc_ht=scontent-ber1-1.xx&oh=00_AT-ib2tpYhV58xa-UqjHG-vVJ07VxSYhuzUaP0xkTNtnWA&oe=6272AB4E" />,
      avatar3: <img alt="ch" src="https://scontent-ber1-1.xx.fbcdn.net/v/t1.18169-9/10458642_683216201771041_3325853667446338700_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeHpYmctuTElsWu4kCU1qu7n-lLGoYmTlDD6UsahiZOUMBj318Zz_XSkty_x_HIBw_9-mr2GMugJbwSGLJxy-0_u&_nc_ohc=uHgIVAp67-0AX857SNX&_nc_ht=scontent-ber1-1.xx&oh=00_AT_I87j9vU4YScmExGfwPVTsFQb6Oiaw11GzEfPusfBZ8Q&oe=627478E5" />,
    
    },
    { 
      name: 'Robin Kliesch',
      spitzname: '"Kaffa"',
      position: 'ZDM',
      description: 'Tobias Haby ghdsgf wefgusif wegruwer wegruwe rgu erg wuegw eruwe weuruwer uwegru werg ewurguwegr weurg ewurgger uerguwe rgwe uewgr uwerguwer weiugr wegur uwerg  weugrugwe ruewr.',
      avatar1: <img alt="ch" src="https://scontent-ber1-1.xx.fbcdn.net/v/t1.18169-9/12187903_934790416613617_7923868850221366641_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHC2eB7JHuFq2m3eZVKS_8JlyOYEd2X7USXI5gR3ZftRF_9oLXrZYXckpWD6fhYZ3HMxVv3HiLXuKM_vX5bZdgL&_nc_ohc=pHz0UaKNcSUAX_rMdDt&_nc_ht=scontent-ber1-1.xx&oh=00_AT9bm5yxK5A-HVDIcoTn9PkqM3Z4sF0u2GKgK9g4geeG0w&oe=6272F38D" />,
      avatar2: <img alt="ch" src="https://scontent-ber1-1.xx.fbcdn.net/v/t1.18169-9/14463247_1143698072389516_2252265909483484196_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeHgQTD8RVnbYZeJ_p7KgcYu5wRWDQY3iBrnBFYNBjeIGi_4MHxTBZij5yoHLiornQDe0WtW2Eg89-N3oubjP68m&_nc_ohc=p24eIbOfBZEAX-HBB5t&tn=OzzjMZ1RVxfNrI9M&_nc_ht=scontent-ber1-1.xx&oh=00_AT-ib2tpYhV58xa-UqjHG-vVJ07VxSYhuzUaP0xkTNtnWA&oe=6272AB4E" />,
      avatar3: <img alt="ch" src="https://scontent-ber1-1.xx.fbcdn.net/v/t1.18169-9/10458642_683216201771041_3325853667446338700_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeHpYmctuTElsWu4kCU1qu7n-lLGoYmTlDD6UsahiZOUMBj318Zz_XSkty_x_HIBw_9-mr2GMugJbwSGLJxy-0_u&_nc_ohc=uHgIVAp67-0AX857SNX&_nc_ht=scontent-ber1-1.xx&oh=00_AT_I87j9vU4YScmExGfwPVTsFQb6Oiaw11GzEfPusfBZ8Q&oe=627478E5" />,
    
  },
    {
      name: 'Robin Köster',
      spitzname: '"Kobin Röster"',
      position: 'IV',
      description: 'Tobias Haby ghdsgf wefgusif wegruwer wegruwe rgu erg wuegw eruwe weuruwer uwegru werg ewurguwegr weurg ewurgger uerguwe rgwe uewgr uwerguwer weiugr wegur uwerg  weugrugwe ruewr.',
      avatar1: <img alt="ch" src="https://scontent-ber1-1.xx.fbcdn.net/v/t1.18169-9/12187903_934790416613617_7923868850221366641_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHC2eB7JHuFq2m3eZVKS_8JlyOYEd2X7USXI5gR3ZftRF_9oLXrZYXckpWD6fhYZ3HMxVv3HiLXuKM_vX5bZdgL&_nc_ohc=pHz0UaKNcSUAX_rMdDt&_nc_ht=scontent-ber1-1.xx&oh=00_AT9bm5yxK5A-HVDIcoTn9PkqM3Z4sF0u2GKgK9g4geeG0w&oe=6272F38D" />,
      avatar2: <img alt="ch" src="https://scontent-ber1-1.xx.fbcdn.net/v/t1.18169-9/14463247_1143698072389516_2252265909483484196_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeHgQTD8RVnbYZeJ_p7KgcYu5wRWDQY3iBrnBFYNBjeIGi_4MHxTBZij5yoHLiornQDe0WtW2Eg89-N3oubjP68m&_nc_ohc=p24eIbOfBZEAX-HBB5t&tn=OzzjMZ1RVxfNrI9M&_nc_ht=scontent-ber1-1.xx&oh=00_AT-ib2tpYhV58xa-UqjHG-vVJ07VxSYhuzUaP0xkTNtnWA&oe=6272AB4E" />,
      avatar3: <img alt="ch" src="https://scontent-ber1-1.xx.fbcdn.net/v/t1.18169-9/10458642_683216201771041_3325853667446338700_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeHpYmctuTElsWu4kCU1qu7n-lLGoYmTlDD6UsahiZOUMBj318Zz_XSkty_x_HIBw_9-mr2GMugJbwSGLJxy-0_u&_nc_ohc=uHgIVAp67-0AX857SNX&_nc_ht=scontent-ber1-1.xx&oh=00_AT_I87j9vU4YScmExGfwPVTsFQb6Oiaw11GzEfPusfBZ8Q&oe=627478E5" />,
    
    },
    {
      name: 'Nicholas Kuberka',
      spitzname: '"Kuberka"',
      position: 'IV',
      description: 'Bei vielen',
      avatar1: <img alt="ch" src={NK1} />,
      avatar2: <img alt="ch" src={NK3} />,
      avatar3: <img alt="ch" src={NK2} />,
    
    },
    {
      name: 'Felix Treykorn',
      spitzname: '"Trey"',
      position: 'RV',
      description: 'Bei vielen Talenten fragt man sich nach einer verfehlten Karriere: Was wären wenn?',
      avatar1: <img alt="ch" src="https://scontent-ber1-1.xx.fbcdn.net/v/t1.18169-9/12187903_934790416613617_7923868850221366641_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHC2eB7JHuFq2m3eZVKS_8JlyOYEd2X7USXI5gR3ZftRF_9oLXrZYXckpWD6fhYZ3HMxVv3HiLXuKM_vX5bZdgL&_nc_ohc=pHz0UaKNcSUAX_rMdDt&_nc_ht=scontent-ber1-1.xx&oh=00_AT9bm5yxK5A-HVDIcoTn9PkqM3Z4sF0u2GKgK9g4geeG0w&oe=6272F38D" />,
      avatar2: <img alt="ch" src="https://scontent-ber1-1.xx.fbcdn.net/v/t1.18169-9/14463247_1143698072389516_2252265909483484196_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeHgQTD8RVnbYZeJ_p7KgcYu5wRWDQY3iBrnBFYNBjeIGi_4MHxTBZij5yoHLiornQDe0WtW2Eg89-N3oubjP68m&_nc_ohc=p24eIbOfBZEAX-HBB5t&tn=OzzjMZ1RVxfNrI9M&_nc_ht=scontent-ber1-1.xx&oh=00_AT-ib2tpYhV58xa-UqjHG-vVJ07VxSYhuzUaP0xkTNtnWA&oe=6272AB4E" />,
      avatar3: <img alt="ch" src="https://scontent-ber1-1.xx.fbcdn.net/v/t1.18169-9/10458642_683216201771041_3325853667446338700_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeHpYmctuTElsWu4kCU1qu7n-lLGoYmTlDD6UsahiZOUMBj318Zz_XSkty_x_HIBw_9-mr2GMugJbwSGLJxy-0_u&_nc_ohc=uHgIVAp67-0AX857SNX&_nc_ht=scontent-ber1-1.xx&oh=00_AT_I87j9vU4YScmExGfwPVTsFQb6Oiaw11GzEfPusfBZ8Q&oe=627478E5" />,
    
    },
    {
      name: 'Moritz Schlegl',
      spitzname: '"Schlegl"',
      position: 'IV',
      description: 'Bei vielen',
      avatar1: <img alt="ch" src="https://scontent-ber1-1.xx.fbcdn.net/v/t1.18169-9/12187903_934790416613617_7923868850221366641_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHC2eB7JHuFq2m3eZVKS_8JlyOYEd2X7USXI5gR3ZftRF_9oLXrZYXckpWD6fhYZ3HMxVv3HiLXuKM_vX5bZdgL&_nc_ohc=pHz0UaKNcSUAX_rMdDt&_nc_ht=scontent-ber1-1.xx&oh=00_AT9bm5yxK5A-HVDIcoTn9PkqM3Z4sF0u2GKgK9g4geeG0w&oe=6272F38D" />,
      avatar2: <img alt="ch" src="https://scontent-ber1-1.xx.fbcdn.net/v/t1.18169-9/14463247_1143698072389516_2252265909483484196_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeHgQTD8RVnbYZeJ_p7KgcYu5wRWDQY3iBrnBFYNBjeIGi_4MHxTBZij5yoHLiornQDe0WtW2Eg89-N3oubjP68m&_nc_ohc=p24eIbOfBZEAX-HBB5t&tn=OzzjMZ1RVxfNrI9M&_nc_ht=scontent-ber1-1.xx&oh=00_AT-ib2tpYhV58xa-UqjHG-vVJ07VxSYhuzUaP0xkTNtnWA&oe=6272AB4E" />,
      avatar3: <img alt="ch" src="https://scontent-ber1-1.xx.fbcdn.net/v/t1.18169-9/10458642_683216201771041_3325853667446338700_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeHpYmctuTElsWu4kCU1qu7n-lLGoYmTlDD6UsahiZOUMBj318Zz_XSkty_x_HIBw_9-mr2GMugJbwSGLJxy-0_u&_nc_ohc=uHgIVAp67-0AX857SNX&_nc_ht=scontent-ber1-1.xx&oh=00_AT_I87j9vU4YScmExGfwPVTsFQb6Oiaw11GzEfPusfBZ8Q&oe=627478E5" />,
    
    },
  ]

  return (
    <Container>
      <Headline>
        Hall of Fame
      </Headline>
      <Text>
     Blablahfggdfg gf erg zer uzfudfguer ezruerg zeewur werzeuw wuzeg wuegr.

      </Text>
      <br />

<PlayerContainer>
<DetailsHoF hofs={profilesHoF}/> 
</PlayerContainer>




      </Container>





  );
};

export default ContentHallOfFame;
