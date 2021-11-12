import React, { useState, memo } from "react";
import styled, { css } from "styled-components";
import { MdAddCircle } from 'react-icons/md';
import { useDispatch, useNextId, useListState } from "./Context";

const Head = styled.div``;

const Form = styled.form`
    display: flex;
    margin-bottom: 0.5em;
    ${props =>
        props.add &&
        css`
            display: initial;
        ` 
        ||
        props.add == 'false' && css`
            display: none;
        `
    }
`;

const Color = styled.input`
    flex: 1;
    border: none;
    background: transparent;
    // border: 1px solid gray;
    // border-radius: 1em;
`;
const Input = styled.input`
    outline: none;
    border: none;
    width: 80%;
`;

const Add = styled.div`
    font-size: 24px;
`;

const All = styled.div`
    padding: 1em 0;
`;

function ListHead() {

    const [add, setAdd] = useState(false);
    const onAdd = () => setAdd(!add);

    const dispatch = useDispatch();
    const nextId = useNextId();
    const [value, setValue] = useState('');
    const [color, setColor] = useState('black');
    const id = nextId.current;
    const onChange = (e) => setValue(e.target.value);
    const onColor = (e) => setColor(e.target.value)
    const onSubmit = (e) => {
        console.log(e)
        e.preventDefault();
        dispatch({
            type: 'LIST_CREATE',
            list: {
                id: id,
                title: value,
                select: false,
                color: color,
                todos: []         
            }
        });
        dispatch({type: 'LIST_SELECT', id});
        setValue('');
        setColor('black')
        setAdd(false)
        nextId.current += 1;
    }

    const onSelect = () => dispatch({ type: 'LIST_SELECT', id: 'all'})
    
    return (
        <Head>
            <Add onClick={ onAdd } add={ add }>
                <MdAddCircle className="addImg" />
            </Add>
            <All onClick={ onSelect }>All Todos</All>
            {(
                add && 
                <Form onSubmit={ onSubmit }>
                    <Color
                        type='color'
                        onChange={ onColor }
                        value= { color }
                    />
                    <Input
                        autoFocus
                        placeholder="제목"
                        onChange={ onChange }
                        value={ value }
                    />
                </Form>
            )}
        </Head>
    );
}

export default memo(ListHead);