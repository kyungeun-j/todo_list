import React, { useState, memo } from "react";
import styled from "styled-components";
import { useTodoDispatch, useTodoNextId } from "./TodoContext";

const Form = styled.form`
    display: flex;
    padding: 1em 0;
`;
const Input = styled.input`
    flex: 1;
    font-size: 1.25rem;
    outline: none;
    border: none;
    border-bottom: 1px solid #a7a7a7;
`;

function TodoCreate() {

    const [value, setValue] = useState('');
    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const onChange = (e) => setValue(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'CREATE',
            todo: {
                id: nextId.current,
                text: value,
                done: false
            }
        });
        setValue('');
        nextId.current += 1;
    }

    return (
        <Form onSubmit={ onSubmit }>
            <Input 
                autoFocus
                placeholder="Todo"
                onChange={ onChange }
                value={ value }
            />
        </Form>
    );
}

export default memo(TodoCreate);