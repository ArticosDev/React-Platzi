import React from 'react'
import './CreateTodoButton.css';

function CreateTodoButton(){

    const buttonAction = () => {
        alert('Aqui deberia abrir el modal!!!!');
    }

    return(
        <button
        onClick={buttonAction}
        className="CreateTodoButton">+</button>
    );
}

export {CreateTodoButton};