import React from "react";
import ListItem from "./ListItem"
import styled from "styled-components";
import { useListState } from "./Context";

const List = styled.div``;

function Lists() {
    const lists = useListState();
    
    return(
        <List>
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