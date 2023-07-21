import React from 'react'
import Title from '../../../Components/UI/Title/Title'
import PopularSetsData from './PopularSetsData'
import Set from './Set/Set'
import Container from '../../../Components/Container/Container'
import classes from './PopularSets.module.css'
import Button from '../../../Components/UI/Button/Button'

const PopularSets: React.FC = () => {
  return (
    <div className={classes.popularSets}>
      <Container>
        <Title text="Популярные наборы" />
        <div className={classes.set__wrap}>
          {PopularSetsData.map(set => (
            <Set
              key={set.id}
              img={set.img}
              title={set.title}
              subTitle={set.subTitle}
              price={set.price}
            />
          ))}
        </div>
        <Button>Все праздничные наборы</Button>
      </Container>
    </div>
  )
}

export default PopularSets
