import React, { useState, memo, Fragment } from "react";
import styled from "styled-components";
import { useListState, useDispatch, useNextTodoId } from "./Context";

const Form = styled.form`
    display: flex;
    padding: 1em 0;
`;
const Input = styled.input`
    width: -webkit-fill-available;
    flex: 1;
    font-size: 1.25rem;
    outline: none;
    border: none;
    border-bottom: 1px solid #a7a7a7;
`;

function TodoCreate() {
    const lists = useListState();

    console.log(lists)
    const list = lists.filter(list => list.select);
    console.log(list)
    console.log(lists.map(list => list.readType))
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const nextId = useNextTodoId();
    const onChange = (e) => setValue(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'TODO_CREATE',
            id: Number(list.map(li => li.id).toString()),
            list: {
                todo: {
                    id: nextId.current,
                    text: value,
                    done: false
                }
            }
        });
        setValue('');
        nextId.current += 1;
    };

    return (
        list.length < 1 ?
        <Fragment /> :
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