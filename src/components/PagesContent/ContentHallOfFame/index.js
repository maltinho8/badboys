import React from 'react';
import styled from 'styled-components';
import DetailsHoF from '../../Card/HoF/CardFrameHoFContent';
import NK1 from '../../../assets/img/ProfileImages/kuberka1.jpg';
import NK2 from '../../../assets/img/ProfileImages/kuberka2.jpg';
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
import KK1 from '../../../assets/img/ProfileImages/kaffa1.jpg';
import KK2 from '../../../assets/img/ProfileImages/kaffa2.jpg';
import KK3 from '../../../assets/img/ProfileImages/kaffa3.jpg';
import PC1 from '../../../assets/img/ProfileImages/paul1.jpeg';
import PC2 from '../../../assets/img/ProfileImages/paul2.png';
import PC3 from '../../../assets/img/ProfileImages/paul3.jpeg';

const Container = styled.div`
  padding: 3rem;
  color: ${({theme}) => theme.palette.text.light};
  
`;

const Headline = styled.h2`

line-height: 1;
margin-bottom: 2rem;
text-align: center;
`;

const PlayerContainer = styled.div`
 width: 90%;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const Text = styled.div`
  
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-align: center;
  color: black;
`;

const ContentHallOfFame = () => {
  const profilesHoF = [
    {
      name: 'Tobias Haby',
      spitzname: '"Fluppen Curry"',
      position: 'ehem. ZOM',
      erfolg: 'Erfolge: Zweimaliger Aufstieg, Berliner Pokalhalbfinale 2019, Gewinn Bangoura Cup Hamburg',
      description: '"Sharp Shooter", "Walking Bucket", "Point God" - Erfolg hat viele Namen, aber wenn man ihn personifizieren müsste wäre es wohl Tobias Haby! Selten sah man einen Spieler so unbekümmert, leichtfüßig und konditionell am Rande des Zusammenbruchs durch die Abwehrreihen der Berliner Kreisligisten tanzen und die BadBoys zu ihren glorreichen Anfangserfolgen führen. Die Granden der BadBoys schielen bis zum heutigen Tage auf ein Comeback des Zauberfußes von der Glienicker Spitze - sagt niemals nie!',
      avatar1: <img alt="ch" src={TH1} style={{border: 0, objectFit: 'cover', width: 150, height: 150}} />,
      avatar2: <img alt="ch" src={TH2} style={{border: 0, objectFit: 'cover', width: 190, height: 190}}/>,
      avatar3: <img alt="ch" src={TH3} style={{border: 0, objectFit: 'cover', width: 150, height: 150}}/>,
    },
    { 
      name: 'Paul Conradt',
      spitzname: '"Andi"',
      position: 'ehem. ZOM',
      erfolg: 'Erfolge: Zweimaliger Aufstieg, Berliner Pokalhalbfinale 2019 u. 2021, Gewinn Bangoura Cup Hamburg',
      description: 'Nennt uns einen Spieler, der in diesen maximal niederen Spielklassen solch eine Motivation und Hingabe an den Tag legt - wir tun uns schwer. Paul Andi Conradt hat diese Mannschaft aus den Niederungen der Kreisliga C ins gelobte Land an der Reeperbahn und den Berliner Pokalhimmel geführt! Was er nun bei einem Verein möchte, der als Mitgliedsbeitrag 2 Immobilienanteile fordert, bleibt dahingestellt. Nichtsdestotrotz wünschen wir einem unserer verdientesten Spieler viel Erfolg für die Zukunft und begrüßen ihn gerne zum Winter wieder bei uns!',
      avatar1: <img alt="ch" src={PC1} style={{border: 0, objectFit: 'cover', width: 150, height: 150}} />,
      avatar2: <img alt="ch" src={PC2} style={{border: 0, objectFit: 'cover', width: 190, height: 190}}/>,
      avatar3: <img alt="ch" src={PC3} style={{border: 0, objectFit: 'cover', width: 150, height: 150}}/>,
  },
    { 
      name: 'Robin Kliesch',
      spitzname: '"Kaffa"',
      position: 'ehem. ZDM',
      erfolg: 'Erfolge: Zweimaliger Aufstieg, Berliner Pokalhalbfinale 2019, Gewinn Bangoura Cup Hamburg',
      description: 'Wenn jemand mit so einer hohen Menge an Nikotin und Jäger-E so viel und so lange laufen kann, sollten Sportwissenschaftler*innen ihre Gesundheitskonzepte noch einmal überdenken. Robin "Kaffa" Kliesch hat die BadBoys als Sprungbrett genutzt, um sich danach in der Landesliga als Vollzeitkraft zu etablieren. Vereinstechnisch die richtige Entscheidung? Wir wagen es zu bezweifeln und sehen das ganze Spektakel als neutraler Beobachter nicht ohne den Gedanken im Hinterkopf, den wuseligen 6er doch noch einmal zu einem Comeback überreden zu können. ',
      avatar1: <img alt="ch" src={KK1} style={{border: 0, objectFit: 'cover', width: 150, height: 150}} />,
      avatar2: <img alt="ch" src={KK2} style={{border: 0, objectFit: 'cover', width: 190, height: 190}}/>,
      avatar3: <img alt="ch" src={KK3} style={{border: 0, objectFit: 'cover', width: 150, height: 150}}/>,
  },
    {
      name: 'Nicholas Kuberka',
      spitzname: '"Kuberka"',
      position: 'ehem. IV',
      erfolg: 'Erfolge: Zweimaliger Aufstieg, Berliner Pokalhalbfinale 2019, Gewinn Bangoura Cup Hamburg',
      description: 'Schlampiges Genie oder vergeudetes Talent - der Boulevard hätte für die Karriere von Lennart Nicholas Horst Kuberka viele Namen. Was wäre wenn ihn ein komplizierter Knorpelschaden im Jugendalter nicht ausgebremst und einen Wechsel ins deutsche Oberhaus verhindert hätte? Nichtsdestotrotz dominierte der Schlacks vom Poloplatz die generischen Stürmer nach Belieben und war zudem nie um einen stürmischen Lauf nach vorne verlegen. Ob als Spieler oder als Trainer - du bist immer gerne bei uns gesehen. ',
      avatar1: <img alt="ch" src={NK1} style={{border: 0, objectFit: 'cover', width: 150, height: 150}}/>,
      avatar2: <img alt="ch" src={NK3} style={{border: 0, objectFit: 'cover', width: 190, height: 190}}/>,
      avatar3: <img alt="ch" src={NK2} style={{border: 0, objectFit: 'cover', width: 150, height: 150}}/>,
    
    },
    {
      name: 'Felix Treykorn',
      spitzname: '"Trey"',
      position: 'ehem. RV',
      erfolg: 'Erfolge: Aufstieg 2019, Berliner Pokalhalbfinale 2019, Gewinn Bangoura Cup Hamburg',
      description: 'Die schnellste Hüfte Nordberlins hat sich nach erfolgreichen Spielzeiten auf dem Großfeld seit einiger Zeit in den Freizeitbereich und das damit einhergehende Kleinfeld verabschiedet. Während seiner Zeit bei den BadBoys beackerte Trey die rechte Abwehrseite wie einige Teamkameraden attraktive Damen auf der Reeperbahn. Felix Augsut Treykorn: Stark an der Bar und in der Küche - wir werden dich nie vergessen! ',
      avatar1: <img alt="ch" src={FT1} style={{border: 0, objectFit: 'cover', width: 150, height: 150}}/>,
      avatar2: <img alt="ch" src={FT3} style={{border: 0, objectFit: 'cover', width: 190, height: 190}}/>,
      avatar3: <img alt="ch" src={FT2} style={{border: 0, objectFit: 'cover', width: 150, height: 150}}/>,
    },
    {
      name: 'Moritz Schlegl',
      spitzname: '"Schlegl"',
      position: 'ehem. IV',
      erfolg: 'Erfolge: Aufstieg 2019, Berliner Pokalhalbfinale 2019',
      description: 'Dieser charismatische Mann ebnete den BadBoys mit seinem absolut geplanten Schienbeintor im Viertelfinale 2019 den Weg in das Berliner Pokalhalbfinale, worüber wir noch den Enkeln unserer Enkel erzählen werden. Seitdem kennzeichnen kuriose Entscheidungen die Karriere des Moritz Schlegl, so unter anderem ein Wechsel zu den Berliner Amateuren, die seit ihrem Bestehen allerdings noch nie einen Sieg gegen die BadBoys erringen konnten. Wir beobachten dieses Schauspiel weiterhin und sind jederzeit bereit dich wieder bei uns aufzunehmen! ',
      avatar1: <img alt="ch" src={MS1} style={{border: 0, objectFit: 'cover', width: 150, height: 150}}/>,
      avatar2: <img alt="ch" src={MS3} style={{border: 0, objectFit: 'cover', width: 190, height: 190}}/>,
      avatar3: <img alt="ch" src={MS2} style={{border: 0, objectFit: 'cover', width: 150, height: 150}}/>,
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
      <br />
      <br />
        <PlayerContainer>
        <DetailsHoF hofs={profilesHoF}/> 
        </PlayerContainer>
    </Container>





  );
};

export default ContentHallOfFame;
