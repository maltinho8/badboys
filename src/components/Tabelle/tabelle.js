import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme, { GlobalStyle } from '../../Theme'
import ContentTabelle from '../ContentTabelle'

const ContentContainer = styled.div`
  width: 50%;
  margin: 2rem 0 0 4rem;
`

const Tabelle = () => {
  return (
    <div className="Tabelle">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ContentContainer>
          <ContentTabelle />
        </ContentContainer>
      </ThemeProvider>
    </div>
  )
}

export default Tabelle
