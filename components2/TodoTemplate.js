import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import TodoTitle from './TodoTitle';
import TodoInsert from './TodoInsert';
import TodoItemList from './TodoItemList';
import { text } from '@fortawesome/fontawesome-svg-core';


const Container = styled.div`
    height: -webkit-fill-available;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function TodoTemplate() {

    // todo
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: 'velopert',
            checked: true,
            update: false
          },
          {
            id: 2,
            text: 'tester',
            checked: false,
            update: true
          },
          {
            id: 3,
            text: 'liz',
            checked: false,
            update: false
          }
    ]);
    const nextId = useRef(0);
    const handleSubmit = (text) => {
        const todo = {
            id: nextId.current,
            text,
            checked: false,
            update: false
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

    const onUpdate = (id) => {
        setTodos(
            todos.map((todo) => {
                return todo.id === id ? {...todo, update: !todo.update} : todo;
            })
        );
    };

    const onModify = (todo) => {
        setTodos({
            id: todo.id,
            text: todo.text,
            checked: todo.checked,
            update: todo.update
        })
    }

    //title
    const [titles, setTitles] = useState([]);
    const titleId = useRef(0);

    const today = new Date();
    const title = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate()

    return (
        <Container>
            <TodoTitle date={ title }></TodoTitle>
            <TodoInsert onSubmit={ handleSubmit } />
            <TodoItemList todos={todos} onRemove={ onRemove } onToggle={ onToggle } onUpdate={ onUpdate } onModify={ onModify } />
        </Container>
    );
}

export default TodoTemplate;