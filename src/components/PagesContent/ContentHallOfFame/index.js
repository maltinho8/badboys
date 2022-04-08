import React from 'react';
import styled from 'styled-components';
import DetailsHoF from '../../Card/HoF/CardFrameHoFContent';
import NK1 from '../../../assets/img/ProfileImages/kuberka1.jpg';
import NK2 from '../../../assets/img/ProfileImages/kuberka2.PNG';
import NK3 from '../../../assets/img/ProfileImages/kuberka3.jpg';
import FT1 from '../../../assets/img/ProfileImages/trey1.jpg';
import FT2 from '../../../assets/img/ProfileImages/trey2.jpg';
import FT3 from '../../../assets/img/ProfileImages/trey3.jpg';
import MS1 from '../../../assets/img/ProfileImages/moritz1.jpg';
import MS2 from '../../../assets/img/ProfileImages/moritz2.jpg';
import MS3 from '../../../assets/img/ProfileImages/moritz3.jpg';
import TH1 from '../../../assets/img/ProfileImages/haby1.jpg';
import TH2 from '../../../assets/img/ProfileImages/haby2.jpg';
import TH3 from '../../../assets/img/ProfileImages/haby3.jpg';

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
      position: 'ehem. ZOM',
      erfolg: 'Erfolge: Zweimaliger Aufstieg, Berliner Pokalhalbfinale 2019, Gewinn Bangoura Cup Hamburg',
      description: '"Sharp Shooter", "Walking Bucket", "Point God" - Erfolg hat viele Namen, aber wenn man ihn personifizieren müsste wäre es wohl Tobias Haby! Selten sah man einen Spieler so unbekümmert, leichtfüßig und konditionell am Rande des Zusammenbruchs durch die Abwehrreihen der Berliner Kreisligisten tanzen und die BadBoys zu ihren glorreichen Anfangserfolgen führen. Die Granden der BadBoys schielen bis zum heutigen Tage auf ein Comeback des Zauberfußes von der Glienicker Spitze - sagt niemals nie!',
      avatar1: <img alt="ch" src={TH1} />,
      avatar2: <img alt="ch" src={TH2} />,
      avatar3: <img alt="ch" src={TH3} />,
    },
    { 
      name: 'Robin Kliesch',
      spitzname: '"Kaffa"',
      position: 'ehem. ZDM',
      erfolg: 'Erfolge: Zweimaliger Aufstieg, Berliner Pokalhalbfinale 2019, Gewinn Bangoura Cup Hamburg',
      description: 'Tobias Haby ghdsgf wefgusif wegruwer wegruwe rgu erg wuegw eruwe weuruwer uwegru werg ewurguwegr weurg ewurgger uerguwe rgwe uewgr uwerguwer weiugr wegur uwerg  weugrugwe ruewr.',
      avatar1: <img alt="ch" src="https://scontent-ber1-1.xx.fbcdn.net/v/t1.18169-9/12187903_934790416613617_7923868850221366641_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHC2eB7JHuFq2m3eZVKS_8JlyOYEd2X7USXI5gR3ZftRF_9oLXrZYXckpWD6fhYZ3HMxVv3HiLXuKM_vX5bZdgL&_nc_ohc=pHz0UaKNcSUAX_rMdDt&_nc_ht=scontent-ber1-1.xx&oh=00_AT9bm5yxK5A-HVDIcoTn9PkqM3Z4sF0u2GKgK9g4geeG0w&oe=6272F38D" />,
      avatar2: <img alt="ch" src="https://scontent-ber1-1.xx.fbcdn.net/v/t1.18169-9/14463247_1143698072389516_2252265909483484196_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeHgQTD8RVnbYZeJ_p7KgcYu5wRWDQY3iBrnBFYNBjeIGi_4MHxTBZij5yoHLiornQDe0WtW2Eg89-N3oubjP68m&_nc_ohc=p24eIbOfBZEAX-HBB5t&tn=OzzjMZ1RVxfNrI9M&_nc_ht=scontent-ber1-1.xx&oh=00_AT-ib2tpYhV58xa-UqjHG-vVJ07VxSYhuzUaP0xkTNtnWA&oe=6272AB4E" />,
      avatar3: <img alt="ch" src="https://scontent-ber1-1.xx.fbcdn.net/v/t1.18169-9/10458642_683216201771041_3325853667446338700_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeHpYmctuTElsWu4kCU1qu7n-lLGoYmTlDD6UsahiZOUMBj318Zz_XSkty_x_HIBw_9-mr2GMugJbwSGLJxy-0_u&_nc_ohc=uHgIVAp67-0AX857SNX&_nc_ht=scontent-ber1-1.xx&oh=00_AT_I87j9vU4YScmExGfwPVTsFQb6Oiaw11GzEfPusfBZ8Q&oe=627478E5" />,
    
  },
    {
      name: 'Robin Köster',
      spitzname: '"Kobin Röster"',
      position: 'ehem. IV',
      erfolg: 'Erfolge: Aufstieg 2019, Berliner Pokalhalbfinale 2019, Gewinn Bangoura Cup Hamburg',
      description: 'Einen lauteren, unangenehmeren und physischeren Abwehrspieler werden die harten Kunstrasenplätze in Berlin wohl nie wieder zu Gesicht bekommen. Mit seiner überregionalen Erfahrung führte er die BadBoys zum Aufstieg in die Kreisliga A und ins Berliner Pokalhalbfinale 2019. Unvergessen bleibt aber sein Auftritt auf der Reeperbahn, wo man sich im Nachtclub "Monkeys" bis heute noch gerne an ihn erinnert.',
      avatar1: "RK",
      avatar2: "RK",
      avatar3: "RK",
    },
    {
      name: 'Nicholas Kuberka',
      spitzname: '"Kuberka"',
      position: 'ehem. IV',
      erfolg: 'Erfolge: Zweimaliger Aufstieg, Berliner Pokalhalbfinale 2019, Gewinn Bangoura Cup Hamburg',
      description: 'Schlampiges Genie oder vergeudetes Talent - der Boulevard hätte für die Karriere von Lennart Nicholas Horst Kuberka viele Namen. Was wäre wenn ihn ein komplizierter Knorpelschaden im Jugendalter nicht ausgebremst und einen Wechsel ins deutsche Oberhaus verhindert hätte? Nichtsdestotrotz dominierte der Schlacks vom Poloplatz die generischen Stürmer nach Belieben und war zudem nie um einen stürmischen Lauf nach vorne verlegen. Ob als Spieler oder als Trainer - du bist immer gerne bei uns gesehen. ',
      avatar1: <img alt="ch" src={NK1} />,
      avatar2: <img alt="ch" src={NK3} />,
      avatar3: <img alt="ch" src={NK2} />,
    
    },
    {
      name: 'Felix Treykorn',
      spitzname: '"Trey"',
      position: 'ehem. RV',
      erfolg: 'Erfolge: Aufstieg 2019, Berliner Pokalhalbfinale 2019, Gewinn Bangoura Cup Hamburg',
      description: 'Die schnellste Hüfte Nordberlins hat sich nach erfolgreichen Spielzeiten auf dem Großfeld seit einiger Zeit in den Freizeitbereich und das damit einhergehende Kleinfeld verabschiedet. Während seiner Zeit bei den BadBoys beackerte Trey die rechte Abwehrseite wie einige Teamkameraden attraktive Damen auf der Reeperbahn. Felix Augsut Treykorn: Stark an der Bar und in der Küche - wir werden dich nie vergessen! ',
      avatar1: <img alt="ch" src={FT1} />,
      avatar2: <img alt="ch" src={FT3} />,
      avatar3: <img alt="ch" src={FT2} />,
    },
    {
      name: 'Moritz Schlegl',
      spitzname: '"Schlegl"',
      position: 'ehem. IV',
      erfolg: 'Erfolge: Aufstieg 2019, Berliner Pokalhalbfinale 2019',
      description: 'Dieser charismatische Mann ebnete den BadBoys mit seinem absolut geplanten Schienbeintor im Viertelfinale 2019 den Weg in das Berliner Pokalhalbfinale, worüber wir noch den Enkeln unserer Enkel erzählen werden. Seitdem kennzeichnen kuriose Entscheidungen die Karriere des Moritz Schlegl, so unter anderem ein Wechsel zu den Berliner Amateuren, die seit ihrem Bestehen allerdings noch nie einen Sieg gegen die BadBoys erringen konnten. Wir beobachten dieses Schauspiel weiterhin und sind jederzeit bereit dich wieder bei uns aufzunehmen! ',
      avatar1: <img alt="ch" src={MS1} />,
      avatar2: <img alt="ch" src={MS3} />,
      avatar3: <img alt="ch" src={MS2} />,
    },
  ]

  return (
    <Container>
      <Headline>
        Hall of Fame
      </Headline>
      <Text>
     Die bisherige Geschichte der BadBoys ist nicht nur gespickt mit zahlreichen Erfolgen, sondern auch von herausragenden Persönlichkeiten, die wegen
     unterschiedlicher Gründe nun nicht mehr Teil der Erfolgsgeschichte sind. 
      </Text>
      <br />
        <PlayerContainer>
        <DetailsHoF hofs={profilesHoF}/> 
        </PlayerContainer>
    </Container>





  );
};

export default ContentHallOfFame;
