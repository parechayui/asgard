import React from 'react';

import './card.component.css';

export const Card = props =>{
    return <div className='card-container' key={props.monster.id}>
        <img src={`https://www.robohash.org/${props.monster.id}?set=set2`} alt="no source found"/>
        <h2>{props.monster.name}</h2>
        <h2>{props.monster.email}</h2>
    </div>;
};