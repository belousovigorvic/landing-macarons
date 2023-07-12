import React from 'react'
import classes from './Holidays.module.css';
import mac1 from './img/macaron1.webp';
import mac2 from './img/macaron2.webp';
import mac3 from './img/macaron3.webp';
import mac4 from './img/macaron4.webp';
import mac5 from './img/macaron5.webp';
import mac6 from './img/macaron6.webp';
import cap from './img/cape.webp';
import Title from '../../../Components/UI/Title/Title';
import Container from '../../../Components/Container/Container';

type imagesType = {
  id: number
  img: string
  text: string
}

const images:imagesType[] = [
  {
    id: 0,
    img: mac1,
    text: 'Скоро День рождения близкого человека'
  },
  {
    id: 1,
    img: mac2,
    text: '1 января Новый Год 2021'
  },
  {
    id: 2,
    img: mac3,
    text: '14 февраля День Святого Валентина'
  },
  {
    id: 3,
    img: mac4,
    text: '23 февраля День Защитника Отечества'
  },
  {
    id: 4,
    img: mac5,
    text: '8 марта Международный Женский День'
  },
  {
    id: 5,
    img: mac6,
    text: '9 марта День Сурка'
  },
]

const Holidays: React.FC = () => {
  return (
    <Container>
      <div className={classes.holidays}>
        <Title text='Ближайшие праздники' />
        <div className={classes.imgWrap}>
          {images.map(img => (
            <div className={classes.imgItem} key={img.id}>
              <img src={img.img} alt={img.img} />
              <p className={classes.text}>{img.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Holidays