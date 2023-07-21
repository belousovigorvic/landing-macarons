import img from './img/img.webp'
import img2 from './img/img2.webp'
import img3 from './img/img3.webp'
import img4 from './img/img4.webp'
import img5 from './img/img5.webp'
import img6 from './img/img6.webp'

type PopularSetsDataType = {
    id: number,
    img: string,
    title: string,
    subTitle: string,
    price: number
}

const PopularSetsData:PopularSetsDataType[] = [
   {
    id: 0,
    img: img,
    title: 'Сердце',
    subTitle: '24 штуки в коробке в виде сердца, Ассорти из 6 вкусов',
    price: 2800
   },
   {
    id: 1,
    img: img2,
    title: 'Красота спасёт мир ',
    subTitle: 'Набор 16 шт. Вкусы: клубника - базилик, кокос, голубой сыр, пармезан',
    price: 750
   },
   {
    id: 2,
    img: img3,
    title: 'Круглый набор',
    subTitle: '40 макаронс в круглой коробке с персональной надписью',
    price: 3900
   },
   {
    id: 3,
    img: img4,
    title: 'Набор на 9',
    subTitle: 'Набор из 9 штук в квадратной коробке. Вкусы: шоколад, фисташка, вишня',
    price: 950
   },
   {
    id: 4,
    img: img5,
    title: 'Набор на 16',
    subTitle: 'Набор 16 шт. Вкусы: соленая карамель, голубой сыр, пармезан, шоколад ',
    price: 1500
   },
   {
    id: 5,
    img: img6,
    title: 'Сердце',
    subTitle: '24 штуки в коробке в виде сердца, Ассорти из 6 вкусов',
    price: 2500
   },
]

export default PopularSetsData