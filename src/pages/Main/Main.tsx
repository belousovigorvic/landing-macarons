import React from 'react'
import IntroScreen from './IntroScreen/IntroScreen'
import Services from './Services/Services'
import Stock from './Stock/Stock'
import Holidays from './Holidays/Holidays'

const Main:React.FC = () => {
  return (
    <div>
      <IntroScreen/>
      <Services/>
      <Stock/>
      <Holidays/>
    </div>
  )
}

export default Main