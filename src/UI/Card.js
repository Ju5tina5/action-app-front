import React from 'react';
import classes from './Card.module.css';


const Card = (props) => {

    return <div onClick={props.onClick} className={props.isEnded ? classes.card_disabled : classes.card}>{props.children}</div>
};

export default Card;