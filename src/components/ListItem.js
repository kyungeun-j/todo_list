import React from "react";
import { MdOutlineClear } from 'react-icons/md';
import styled, { css } from "styled-components";
import { useDispatch } from './Context';

const Done = styled.div`
    width: 1.2em;
    padding: 0.5em;
    text-align: center;
    font-size: small;
    border-radius: 2em;
    background-color: ${(props) => props.color};
`;
const Title = styled.div`
    flex: 1;
    padding: 0.4em;
`;
const Remove = styled.div`
    display: none;

    &:hover {
        color: #fd8c14;
    }
`;
const Item = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.3em 0.2em;
    cursor: pointer;
    border-radius: 6px;

    &:hover, &:active {
        ${Remove} {
            display: flex;
        }
    }

    ${(props) =>
        props.select && props.selectCnt < 2 &&
        css`
            border: 2px dashed var(--base-color);
            padding: 0.2em;
            
        `
    }
`;

function ListItem({ id, title, select, selectCnt, color, count }) {
    const dispatch = useDispatch();
    const onRemove = () => dispatch({ type: 'LIST_REMOVE', id })
    const onSelect = () => dispatch({ type: 'LIST_SELECT', id })

    return(
        <>
            <Item onClick={ onSelect } select={ select } selectCnt={ selectCnt }>
                <Done color={ color }>{ count }</Done>
                <Title>{ title }</Title>
                <Remove onClick={ onRemove }>
                    <MdOutlineClear />
                </Remove>
            </Item>
        </>
    );
}

export default ListItem;