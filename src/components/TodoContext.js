import React, { createContext, useContext, useReducer, useRef } from "react";

const todos = [];

function todoReducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            // return action.list ? state.concat(action.list) : state.concat({todos: todo.concat(action.todo)})
            return state.concat(action.todo);
        
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);

        case 'UPDATE':
            return state.map(todo => todo.id === action.id ?
                { ...todo, text: action.text} : todo);
        
        case 'TOGGLE':
            return state.map(todo => todo.id === action.id ?
                { ...todo, done: !todo.done } : todo);

        default:
            throw new Error('Unhandled action type: ${action.type}');
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, todos);
    // const [todo, todoDispatch] = useReducer(todoReducer, todos);
    
    // state: 앞으로 컴포넌트에서 사용할 수 있는 상태
    // dispatch: action을 발생시키는 함수
    const nextId = useRef(0);
    // nextId: todo 아이템의 고유 ID

    return (
        <TodoStateContext.Provider value={ state }>
            <TodoDispatchContext.Provider value={ dispatch }>
                <TodoNextIdContext.Provider value={ nextId }>
                    { children }
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

// custom Hook
// 해당 컴포넌트가 TodoProvider 컴포너느 내부에 렌더링되어야 함
export function useTodoState() {
    const context = useContext(TodoStateContext);
    if (!context) {// TodoProvider로 감싸져있지 않을 경우
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useTodoNextId() {
    const context = useContext(TodoNextIdContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}