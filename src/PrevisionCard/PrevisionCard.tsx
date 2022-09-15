import React, { useState } from 'react';

import { Card } from '../components/Card/Card';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';

import './PrevisionCard.css';

export function PrevisionCard() {

    const [isPressed, setIsPressed] = useState(false)

    function addCard() {
        if (isPressed) {
            alert("Número máximo de consultas")
        } else {
            setIsPressed(true)
        }

    }

    return (
    <>
        <button id='add-card' onClick={addCard}><AiOutlineAppstoreAdd size={25}/></button>
        <div className='container-cards'>
            <Card />
            {isPressed && <Card />}
        </div>
    </>
    );
}

