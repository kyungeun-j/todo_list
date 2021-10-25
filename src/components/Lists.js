import React from "react";
import ListItem from "./ListItem"
import styled from "styled-components";
import { useTodoState } from "./TodoContext";

const List = styled.div``;

function Lists() {
    const lists = useTodoState();
    return(
        <List>
            {
                lists.map(list => (
                    <ListItem
                        key={ list.id }
                        id={ list.id }
                        title = { list.title}
                        todos = { list.todos }
                    />
                ))
            }
        </List>
    );
}

export default Lists;