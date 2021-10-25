import React from "react";
import styled from "styled-components";
import { useTodoState } from "./TodoContext";
import TodoItem from "./TodoItem";

const List = styled.div`
    flex: 1
`;

function TodoList() {
    const todos = useTodoState();
    console.log(todos)
    return(
        <List>
            {
                todos.map(todo => (
                    <TodoItem
                        key={ todo.id }
                        id={ todo.id }
                        text={ todo.text }
                        done={ todo.done }
                    />
                ))
            }
        </List>
    );
}

export default TodoList;