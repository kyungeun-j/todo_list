import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAddCircle } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from "./TodoContext";

const Head = styled.div`
`;

const Form = styled.form`
    // display: none;
    ${props =>
        props.add &&
        css`
            display: initial;
        `
    }
`;
const Input = styled.input``;

const Add = styled.div`
    font-size: 24px;
`;

function ListHead() {

    const [add, setAdd] = useState(false);
    const onAdd = () => setAdd(!add);

    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();
    const [value, setValue] = useState('');
    const onChange = (e) => setValue(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'CREATE',
            list: {
                id: nextId.current,
                title: value
            }
        });
        setValue('');
        nextId.current += 1;
    }

    return (
        <Head>
            <Add onClick={ onAdd } add={ add }>
                <MdAddCircle />
            </Add>            
            {(
                add && 
                <Form onSubmit={ onSubmit }>
                    <Input
                        autoFocus
                        placeholder="제목"
                        onChange={onChange}
                        value={value}
                    />
                </Form>
            )}
        </Head>
    );
}

export default ListHead;