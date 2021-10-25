import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
    width: -webkit-fill-available;
    
    form {
        display: flex
    }
`;

const TextInput = styled.input`
    flex: 1;
    font-size: 1.25rem;
    outline: none;
    border: none;
    border-bottom: 1px solid #a7a7a7;
`;

const AddButton = styled.button`
    border: none;
    border-radius: 1em;
    color: #a7a7a7;
    background-color: transparent;
    padding: 0 2em;

    .addBtn {
        transform: scale(1.5);
    }
`;

function TodoInsert(props) {

    const [content, setContent] = useState('');
    const ref = useRef();

    const handleChange = (e) => {
        setContent(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!content) return;
        props.onSubmit(content);
        setContent('');
    };

    useEffect(() => {
        ref.current.focus();
    }, []);

    return(
        <Container>
            <form onSubmit={ handleSubmit }>
                <TextInput 
                    ref={ ref }
                    type="text"
                    name="text"
                    placeholder="새로운 일정"
                    value={ content }
                    onChange={ handleChange }
                    autoFocus
                />
                <AddButton 
                    type="submit"
                    onClick={ handleSubmit }
                    onKeyPress={ handleKeyPress }
                >
                    <FontAwesomeIcon icon={ faPlus } className="addBtn" />
                </AddButton>
            </form>
        </Container>
    );
}

export default TodoInsert;