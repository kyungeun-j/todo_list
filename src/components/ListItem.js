import React from "react";
import { MdOutlineClear } from 'react-icons/md';
import styled from "styled-components";
import { useDispatch } from './Context';

const Item = styled.div`
    display: flex;
`;
const Title = styled.div``;
const Remove = styled.div``;

function ListItem({ id, title }) {
    const dispatch = useDispatch();
    const onRemove = () => dispatch({ type: 'LIST_REMOVE', id })
    const onSelect = () => dispatch({ type: 'LIST_SELECT', id })
    
    return(
        <>
            <Item>
                <Title onClick = { onSelect }>
                    { title }
                </Title>
                <Remove onClick={ onRemove }>
                    <MdOutlineClear />
                </Remove>
            </Item>
        </>
    );
}

export default ListItem;