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

const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.3em 0.2em;
    cursor: pointer;
    border-radius: 6px;
    &:hover {
        ${Remove} {
            display: flex
        }
    }
    ${props =>
        props.select &&
        css`
            background-color: gray;
            color: white;
        `
    }
`;

function ListItem({ id, title, select, color, count }) {
    console.log(count)
    const dispatch = useDispatch();
    const onRemove = () => dispatch({ type: 'LIST_REMOVE', id })
    const onSelect = () => dispatch({ type: 'LIST_SELECT', id })

    return(
        <>
            <Item select={ select }>
                <Done color={ color }>{ count }</Done>
                <Title onClick={ onSelect }>{ title }</Title>
                <Remove onClick={ onRemove }>
                    <MdOutlineClear />
                </Remove>
            </Item>
        </>
    );
}

export default ListItem;