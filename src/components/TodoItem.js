import React from 'react'
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

const Topic = styled.div`
    flex: 1;
`;

const DeleteButton = styled.button`
    border: none;
    background-color: transparent;
    width: 4em;

    .removeBtn {
        opacity: 0;
        color: gray
    }
`;

function TodoItem({ todo, onRemove, onToggle }) {
    
    const { id, text, checked } = todo;
    return (
        <Container>
            <DoneButton onClick={() => onToggle(id)} style={{color : checked ? "#fd8c14" : "#a7a7a7"}}>
                { checked ? <FontAwesomeIcon icon={ faDotCircle } className="toggleBtn" /> : <FontAwesomeIcon icon={ faCircle } className="toggleBtn" /> }
            </DoneButton>
            <Topic style={{
                color: checked ? "gray" : "black"
            }}>
                { text }
            </Topic>
            <DeleteButton onClick={() => onRemove(id)}>
                <FontAwesomeIcon icon={ faTimes } className="removeBtn" />
            </DeleteButton>
        </Container>
    );
}

export default TodoItem;