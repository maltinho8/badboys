import React , {useState, useEffect} from 'react';
import './App.css';
import theme, { GlobalStyle } from './Theme';
import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer/index';
import Routing from './components/Router/Router';
import SignatureLogo from './components/SignatureLogo/SignatureLogo';
import desktopImage from '../src/assets/img/fsc1.png';
import mobileImage from '../src/assets/img/reeperbahn.jpg';

const App = () => {
  // useState - möchte den State der Komponente updaten mit dem neuen Value von window.innerWidth
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const imageUrl = windowWidth >= 768 ? desktopImage : mobileImage;
  // Wenn der Screen kleiner als 768 Pixel wird, dann wird das mobile Image ausgewählt (größer als 768px - Desktop Image)


  
  useEffect(() => {
      const handleWindowResize = () => {
          setWindowWidth(window.innerWidth); // ruft die Set Function des States auf um den State von window.innerWidth zu updaten

      };
      
      // mit dem Effect Hook muss man den Event Listener nur einmal hinzfügen und dadurch läuft er immer wenn die Komponente gerendert wird 
      window.addEventListener('resize', handleWindowResize);

      return () => {
          window.removeEventListener('resize', handleWindowResize);
      }
  }, []);

  return (
    
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      
      <div className="App" style={{backgroundImage:`url(${imageUrl})` }}></div>
      <div className="content">
      <Routing />
      
      </div>
    </ThemeProvider>
    
    
  );
};

export default App;
