import React from 'react'
import classes from './Categories.module.css'
import Card from './Card/Card'
import Container from '../../../Components/Container/Container'
import img1 from './img/img1.svg'
import img2 from './img/img2.svg'
import img3 from './img/img3.svg'
import img4 from './img/img4.svg'
import img5 from './img/img5.svg'
import img6 from './img/img6.svg'

const Categories: React.FC = () => {

	interface dataCard {
		img: string
		title: string
		subTitle: string
		class: string
	}

	const dataCard: dataCard[] = [
		{
			img: img1,
			title: 'Готовые наборы',
			subTitle: 'Готовые наборы со скидкой. Вы можете подобрать набор на подходящий случай.',
			class: 'color1'
		},
		{
			img: img2,
			title: 'Собрать свой набор',
			subTitle: 'Выбрать количество макарун, и выбрать вкусы',
			class: 'color2'
		},
		{
			img: img3,
			title: 'Набор с индивидуальной печатью',
			subTitle: 'Собрать набор макарон с уникальным дизайном. ',
			class: 'color3'
		},
		{
			img: img4,
			title: 'Свадебные предложения',
			subTitle: 'Нежные пирожные макаронс с разными вкусами для украшения вашего свадебного торжества',
			class: 'color4'
		},
		{
			img: img5,
			title: 'Корпоративные подарки',
			subTitle: 'От 85 руб за шт. С уникальным дизайном. Приятный комплимент для коллег и партнеров',
			class: 'color5'
		},
		{
			img: img6,
			title: 'Оптовые поставки',
			subTitle: 'Предложение для кофеен, кафе, отелей и т.д. Посмотрите условия сотрудничества и отзывы.',
			class: 'color6'
		},
	]

	return (
		<div className={classes.categories}>
			<Container>
				<div className={classes.card__wrapper}>
					{dataCard.map(card => <Card img={card.img} title={card.title} subTitle={card.subTitle} bg={card.class}/>)}
				</div>
			</Container>
		</div>
	)
}

export default Categories