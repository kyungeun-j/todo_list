import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faDotCircle, faCircle } from "@fortawesome/free-regular-svg-icons";

const Container = styled.div`
    display: flex;
    align-items: center;
    height: 2.5em;

    &:hover .removeBtn {
        opacity: 1;
    }
`;

const DoneButton = styled.button`
    padding: 0;
    width: 4em;
    border: none;
    background-color: transparent;
    color: #a7a7a7;

    .toggleBtn {
        transform: scale(2);
    }
`;

const UpdateInput = styled.input`
    // display: none;
`;

const Topic = styled.div`
    flex: 1;
    
`;

// &:active {
//     ${UpdateInput} {
//         display: initial;
//     }
// }

const DeleteButton = styled.button`
    border: none;
    background-color: transparent;
    width: 4em;

    .removeBtn {
        opacity: 0;
        color: gray
    }
`;

function TodoItem({ todo, onRemove, onToggle, onUpdate, onModify }) {

    const { id, text, checked, update } = todo;
    return (
        <Container>
            <DoneButton onClick={() => onToggle(id)} style={{color : checked ? "#fd8c14" : "#a7a7a7"}}>
                { checked ? <FontAwesomeIcon icon={ faDotCircle } className="toggleBtn" /> : <FontAwesomeIcon icon={ faCircle } className="toggleBtn" /> }
            </DoneButton>
            <Topic
                onClick={() => onUpdate(id)}
                style={{ color: checked ? "gray" : "black" }}
            >
            { update ? 
                <form>
                    <UpdateInput
                        type="text"
                        name="text"
                        // placeholder="새로운 일정"
                        // value=""
                        // onChange={ handleChange }
                        autoFocus
                    />
                </form>
            : text }
            </Topic>
            <DeleteButton onClick={() => onRemove(id)}>
                <FontAwesomeIcon icon={ faTimes } className="removeBtn" />
            </DeleteButton>
        </Container>
    );
}

export default TodoItem;