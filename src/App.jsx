import React from 'react'
import styled from 'styled-components'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import GamesList from './Components/GamesList'




const MainSection = styled.div`
  height: 100vh;
  /* scroll-snap-type: y mandatory;*/
  scroll-behavior: smooth;
  /*
  overflow-y: auto; */
  scrollbar-width: none;
  color:white;
  &::-webkit-scrollbar {
    display: none;
  }
`
const SubSection =  styled.div`
  scroll-snap-align: start;
`

const App = () => {
  return (
  
  <MainSection>
    <SubSection id="home">
      <Hero/>
    </SubSection>

    <SubSection>
      <GamesList/>
    </SubSection>

    <SubSection>
      <Footer/>
    </SubSection>
    

  </MainSection> 
    
  )
}

export default App