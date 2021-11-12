import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme, { GlobalStyle } from '../../Theme'
import ContentSpielplan from '../ContentSpielplan'

const ContentContainer = styled.div`
  width: 50%;
  margin: 2rem 0 0 4rem;
`

const Spielplan = () => {
  return (
    <div className="Spielplan">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ContentContainer>
          <ContentSpielplan />
        </ContentContainer>
      </ThemeProvider>
    </div>
  )
}

export default Spielplan
