import img from './img/img.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'
import img4 from './img/img4.jpg'

type CareDataType = {
  id: number
  img: string
  title: string
  text: string
}

const CareData: CareDataType[] = [
  {
    id: 0,
    img: img,
    title: 'Лучшие ингрединты',
    text: 'Что-то про суперкачество, лучших поваров, свежесть и т.д.'
  },
  {
    id: 1,
    img: img2,
    title: 'Упаковка',
    text: 'Что-то про суперкоробочки и бантики и бла бла бла'
  },
  {
    id: 2,
    img: img3,
    title: 'Получение в день заказа',
    text: 'В день заказа доставка курьером или самовывоз'
  },
  {
    id: 3,
    img: img4,
    title: 'Анонимная доставка',
    text: 'Можем преподнести Ваш заказ как анонимный подарок'
  }
]

export default CareData
