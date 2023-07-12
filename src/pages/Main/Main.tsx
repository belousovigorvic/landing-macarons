import React from 'react'
import IntroScreen from './IntroScreen/IntroScreen'
import Services from './Services/Services'
import Stock from './Stock/Stock'

const Main:React.FC = () => {
  return (
    <div>
      <IntroScreen/>
      <Services/>
      <Stock/>
    </div>
  )
}

export default Main