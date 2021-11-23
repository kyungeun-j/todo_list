import React from "react";
import ListItem from "./ListItem"
import styled from "styled-components";
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
    const selectCnt = lists.map(list => list.select).filter(select => select).length;

    return(
        <List>
            {
                lists.map(list => (
                    <ListItem
                        key={ list.id }
                        id={ list.id }
                        title={ list.title }
                        select={ list.select }
                        selectCnt={ selectCnt }
                        color={ list.color }
                        count={ list.todos.filter(todo => !todo.done).length }
                    />
                ))
            }
        </List>
    );
}

export default Lists;