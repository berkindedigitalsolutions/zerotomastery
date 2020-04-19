import React from 'react';
import Card  from './Card';
import {robots} from './robots';
const CardList = () => {
    const cardListArray = robots.map((user,i) => {
    return (
    <Card 
        key={i} 
        id ={user.id} 
        name={user.name} 
        email={user.email} 
    />
    );
    })
    return (
        <div>
            {cardListArray}
        </div>
    );
}

export default CardList;