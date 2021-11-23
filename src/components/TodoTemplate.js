import React, { useState } from "react";
import styled, { css } from "styled-components";
import { BiChevronLeftCircle } from 'react-icons/bi';
import { useListState, useDispatch } from "./Context";

const Template = styled.div`
    width: 31em;
    height: 36em;
    background-color: #ffffff;
    border-radius: 15px;
    padding: 1.5em;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 800px) {
        display: none;
        height: -webkit-fill-available;
        width: -webkit-fill-available;
        padding: 1em;
        cursor: pointer;
        
        ${props =>
            props.open === true &&
            css`
                display: initial;
            `
        }
    }
`;

const BackImg = styled.div`
    display: none;
    width: fit-content;
    font-size: 2em;
    color: var(--base-color);
    
    @media screen and (max-width: 800px) {
        display: initial;
    }
`;

function TodoTemplate({ children }) {
    const lists = useListState();
    const open = lists.length !== 0 ? lists.map(list => list.select).filter(select => select)[0] : false;

    const dispatch = useDispatch();
    const onSelect = () => dispatch({ type: 'LIST_SELECT', id: 'back' });

    return (
        <Template open={ open }>
            <BackImg onClick={ onSelect }><BiChevronLeftCircle/></BackImg>
            { children }
        </Template>
    );
}

export default TodoTemplate;