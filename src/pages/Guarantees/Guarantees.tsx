import React from 'react';
import Container from "../../Components/Container/Container";
import classes from './Guarantees.module.css'
import Title from "../../Components/UI/Title/Title";
import img from './img/img.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'
import {Link} from "react-router-dom";


const Guarantees: React.FC = () => {
    return (
        <div className={classes.guarantees}>
            <Container>
                <div className={classes.link__wrap}>
                    <Link to={'/'} className={classes.guarantees__address}>Главная</Link> <span>&gt;</span> <Link to={'/guarantees'} className={classes.active__address}>Гарантии вкуса и качества</Link>
                </div>
                <Title text={'Гарантии вкуса и качества'}/>
                <p className={classes.guarantees__text}>При изготовлении пирожных мы используем только натуральные
                    ингредиенты, избегая использования
                    консервантов</p>
                <div className={classes.card__wrapper}>
                    <div>
                        <img src={img} alt="img"/>
                        <p className={classes.subTitle}>100% миндальная мука</p>
                    </div>
                    <div>
                        <img src={img2} alt="img"/>
                        <p className={classes.subTitle}>100% безопасные пищевые красители</p>
                    </div>
                    <div>
                        <img src={img3} alt="img"/>
                        <p className={classes.subTitle}>100% фруктовые пюре и натуральные ингредиенты</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Guarantees;