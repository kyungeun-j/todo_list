import React, { memo, useState } from "react";
import styled, { css } from "styled-components";
import { MdFiberManualRecord, MdOutlineClear } from 'react-icons/md';
import { useDispatch } from "./Context";

const Check = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #a7a7a7;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${props =>
        props.done &&
        css`
            border: 1px solid ${props => props.color};
            color: ${props => props.color};
        `
    }
`;
const Text = styled.input`
    font-size: 1.25rem;
    outline: none;
    border: none;
    color: black;
    width: -webkit-fill-available;
`;
const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: #fd8c14;
    }
    display: none;
`;
const Form = styled.form`
    flex: 1;
`;
const Item = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: .5em 0;
    
    &:hover {
        ${Remove} {
            display: initial;
        }
    }
`;
const Category = styled.div``;

function TodoItem({ listId, color, id, text, done }) {
    const dispatch = useDispatch();
    const onToggle = () => dispatch({ type: 'TODO_TOGGLE', listId, id, done })
    const onRemove = () => dispatch({ type: 'TODO_REMOVE', listId, id })

    const [value, setValue] = useState('');
    const onChange = (e) => setValue(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'TODO_UPDATE',
            listId,
            id,
            text: value
        });
        setValue('');
    }

    return (
        <>
        <Item>
            <Check color={ color } done={ done } onClick={ onToggle }>
                { done && <MdFiberManualRecord /> }
            </Check>
            <Form onSubmit={ onSubmit }>
                <Text
                    placeholder={ text }
                    onChange={ onChange }
                    value={ value }
                />
            </Form>
            <Remove onClick={ onRemove }>
                <MdOutlineClear />
            </Remove>
        </Item>
        </>
    );
}

export default memo(TodoItem);