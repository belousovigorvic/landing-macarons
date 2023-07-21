import React from 'react'
import IntroScreen from './IntroScreen/IntroScreen'
import Services from './Services/Services'
import Stock from './Stock/Stock'
import Holidays from './Holidays/Holidays'
import PopularSets from './PopularSets/PopularSets'
import News from './News/News'
import Care from './Care/Care'

const Main: React.FC = () => {
  return (
    <div>
      <IntroScreen />
      <Services />
      <Stock />
      <Holidays />
      <PopularSets />
      <News />
      <Care />
    </div>
  )
}

export default Main
