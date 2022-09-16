import React, { useState } from 'react';

import { Card } from '../components/Card/Card';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';

import './PrevisionCard.css';

export function PrevisionCard() {

    const [isPressed, setIsPressed] = useState(false)
    const [text, setText] = useState('')

    function addCard() {
        if (isPressed) {
            if (text == 'É permitido apenas 2 consultas ao mesmo tempo!') {
                setText('')
            } else {
                setText('É permitido apenas 2 consultas ao mesmo tempo!')
                setInterval(() => {setText('')}, 3500)
            }
        } else {
            setIsPressed(true)
        }

    }

    return (
    <>
        <div className="button">
            <button id='add-card' onClick={addCard}><AiOutlineAppstoreAdd size={25}/></button>
            <h3>{text}</h3>
        </div>
        <div className='container-cards'>
            <Card />
            {isPressed && <Card />}
        </div>
    </>
    );
}

