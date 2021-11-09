import React from 'react';
import {Cards} from 'react-responsive-cards';

const details = [
    {
      title: 'The Card Title',
      description: 'This is a short description',
      
      renderFooter: <div>{'Custom JSX'}</div>,
      handleOnClick: () => alert('Custom Event')
    }
  ]


const Profil = () => {
    return <Cards details={details} />
}

export default Profil;