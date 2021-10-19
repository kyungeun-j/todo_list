import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import TodoTitle from './TodoTitle';
import TodoInsert from './TodoInsert';
import TodoItemList from './TodoItemList';


const Container = styled.div`
    height: -webkit-fill-available;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function TodoTemplate() {

    const [todos, setTodos] = useState([]);
    
    const nextId = useRef(0);

    const handleSubmit = (text) => {
        const todo = {
            id: nextId.current,
            text,
            checked: false
        };
        setTodos(todos.concat(todo));
        nextId.current += 1;
    }

    const onRemove = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const onToggle = (id) => {
        setTodos(
            todos.map((todo) => {
                return todo.id === id ? {...todo, checked: !todo.checked} : todo;
            })
        );
    };


    const today = new Date();
    const title = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate()

    return (
        <Container>
            <TodoTitle date={ title }></TodoTitle>
            <TodoInsert onSubmit={ handleSubmit } />
            <TodoItemList todos={todos} onRemove={ onRemove } onToggle={ onToggle } />
        </Container>
    );
}

export default TodoTemplate;