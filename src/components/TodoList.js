import React from "react";
import styled from "styled-components";
import { useListState } from "./Context";
import TodoItem from "./TodoItem";

const List = styled.div`
    flex: 1
`;

function TodoList() {
    const lists = useListState();
    
    return(
        <List>
            {
                lists.map(list => (
                    list.select ? 
                    list.todos.map(ls => (
                        <TodoItem
                            key={ ls.id }
                            listId={ list.id }
                            id={ ls.id }
                            text={ ls.text }
                            done={ ls.done }
                        />
                    )) :
                    console.log("list 없음")
                ))
            }
        </List>
    );
}

export default TodoList;