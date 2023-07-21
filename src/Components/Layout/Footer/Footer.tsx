import React from 'react'
import classes from './Footer.module.css'
import Container from '../../../Components/Container/Container'
import img from './img/img.svg'
import img2 from './img/img2.svg'
import img3 from './img/img3.svg'

import instIcon from './img/inst.svg'
import fbIcon from './img/fb.svg'
import vkIcon from './img/vk.svg'

const Footer: React.FC = () => {
    return (
        <div className={classes.footer}>
            <Container>
                <div className={classes.footer__wrapper}>
                    <div className={classes.footer__inner}>
                        <div className={classes.footer__icons}>
                            <div className={classes.footer__icons_group}>
                                <img
                                    className={classes.footer__icons_img}
                                    src={img}
                                    alt="img"
                                />
                                <div className={classes.text__wrap}>
                                    <p className={classes.footer__icons_text}>
                                        Готовим вручную и с любовью
                                    </p>
                                </div>
                            </div>
                            <div className={classes.footer__icons_group}>
                                <img
                                    className={classes.footer__icons_img}
                                    src={img2}
                                    alt="img"
                                />
                                <div className={classes.text__wrap}>
                                    <p className={classes.footer__icons_text}>
                                        Доставим в день заказа
                                    </p>
                                </div>
                            </div>
                            <div className={classes.footer__icons_group}>
                                <img
                                    className={classes.footer__icons_img}
                                    src={img3}
                                    alt="img"
                                />
                                <div className={classes.text__wrap}>
                                    <p className={classes.footer__icons_text}>
                                        100% миндальная мука и натуральные
                                        ингредиенты
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.footer__address}>
                            <p className={classes.footer__address_text}>
                                © 2021 МакароншопООО <br /> "Квантум",
                                Санкт-Петербург, улица Маршала Тухачевского,{' '}
                                <br /> дом 22
                            </p>
                        </div>
                    </div>
                    <div className={classes.footer__column}>
                        <h3 className={classes.footer__column_title}>
                            Информация
                        </h3>
                        <p className={classes.footer__column_link}>
                            О компании
                        </p>
                        <p className={classes.footer__column_link}>
                            Гарантии вкуса и свежести
                        </p>
                        <p className={classes.footer__column_link}>
                            Доставка и оплата
                        </p>
                        <p className={classes.footer__column_link}>Контакты</p>
                    </div>
                    <div className={classes.footer__column}>
                        <h3 className={classes.footer__column_title}>
                            Каталог
                        </h3>
                        <p className={classes.footer__column_link}>
                            Каталог десертов
                        </p>
                        <p className={classes.footer__column_link}>
                            Готовые наборы
                        </p>
                        <p className={classes.footer__column_link}>
                            Собрать свой набор
                        </p>
                        <p className={classes.footer__column_link}>Акции</p>
                    </div>
                    <div className={classes.footer__column}>
                        <h3 className={classes.footer__column_title}>
                            ДЛЯ БИЗНЕСА
                        </h3>
                        <p className={classes.footer__column_link}>
                            Корпоративные подарки
                        </p>
                        <p className={classes.footer__column_link}>
                            Для юридических лиц
                        </p>
                        <p className={classes.footer__column_link}>Оптовикам</p>
                    </div>
                    <div className={classes.rightBlock}>
                        <div>
                            <a className={classes.tel} href="#" typeof="tel">
                                +7 (812) 309 82 88
                            </a>
                            <p className={classes.time}>с 9:00 до 21:00</p>
                        </div>
                        <div className={classes.footer__social}>
                            <div className={classes.icon_social}>
                                <img src={instIcon} alt="instIcon" />
                            </div>
                            <div className={classes.icon_social}>
                                <img src={fbIcon} alt="fbIcon" />
                            </div>
                            <div className={classes.icon_social}>
                                <img src={vkIcon} alt="vkIcon" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer
