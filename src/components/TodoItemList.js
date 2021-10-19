import React from 'react'
import styled from 'styled-components';

import TodoItem from './TodoItem'

const Container = styled.div`
    width: -webkit-fill-available;
    margin-top: 2em;
`;

function TodoItemList({ todos, onRemove, onToggle }) {
    return (
        <Container>
            { todos.map((todo) => (
                <TodoItem
                    todo={ todo }
                    key={ todo.id }
                    onRemove={ onRemove }
                    onToggle={ onToggle }
                />
            )) }
        </Container>
    );
}

export default TodoItemList;