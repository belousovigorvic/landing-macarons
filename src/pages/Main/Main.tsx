import React from 'react'
import IntroScreen from './IntroScreen/IntroScreen'
import Categories from './Categories/Categories'

const Main:React.FC = () => {
  return (
    <div>
      <IntroScreen/>
      <Categories/>
    </div>
  )
}

export default Main