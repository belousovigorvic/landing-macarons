import React from 'react'
import Container from '../../../Components/Container/Container'
import CareData from './CareData'
import CareCard from './CareCard/CareCard'
import classes from './Care.module.css'

const Care = () => {
  return (
    <div className={classes.care__wrap}>
      <Container>
        <div className={classes.care}>
          {CareData.map(card => (
            <CareCard
              key={card.id}
              img={card.img}
              text={card.text}
              title={card.title}
            />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Care
