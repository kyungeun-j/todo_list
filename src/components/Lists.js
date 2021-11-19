import React from "react";
import ListItem from "./ListItem"
import styled, { css } from "styled-components";
import { useListState } from "./Context";

const List = styled.ul`
    flex: 1;
    overflow: auto;
    list-style: none;
    margin: 0;
    padding: 0;
`;

function Lists() {
    const lists = useListState();
    
    return(
        <List select={lists.map(list => list.select)}>
            {
                lists.map(list => (
                    <ListItem
                        key={ list.id }
                        id={ list.id }
                        title={ list.title }
                        select={ list.select }
                        color={ list.color }
                        count={ list.todos.filter(todo => !todo.done).length }
                    />
                ))
            }
        </List>
    );
}

export default Lists;