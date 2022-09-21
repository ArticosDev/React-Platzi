import React from 'react'
import './CreateTodoButton.css';

function CreateTodoButton(props){

    const buttonAction = () => {
        props.setOpenModal(prevState => !prevState);
    }

    return(
        <button
        onClick={buttonAction}
        className="CreateTodoButton">+</button>
    );
}

export {CreateTodoButton};