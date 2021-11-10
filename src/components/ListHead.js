import React, { useState, memo } from "react";
import styled, { css } from "styled-components";
import { MdAddCircle } from 'react-icons/md';
import { useDispatch, useNextId } from "./Context";

const Head = styled.div`
`;

const Form = styled.form`
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
const Input = styled.input``;

const Add = styled.div`
    font-size: 24px;
`;

function ListHead() {

    const [add, setAdd] = useState(false);
    const onAdd = () => setAdd(!add);

    const dispatch = useDispatch();
    const nextId = useNextId();
    const [value, setValue] = useState('');
    const id = nextId.current;
    const onChange = (e) => setValue(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'LIST_CREATE',
            list: {
                id: id,
                title: value,
                select: false,
                todos: []         
            }
        });
        dispatch({type: 'LIST_SELECT', id});
        setValue('');
        setAdd(false)
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

export default memo(ListHead);