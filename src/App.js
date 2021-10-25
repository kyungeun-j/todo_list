import './App.css';

import styled, { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';

import { TodoProvider } from './components/TodoContext';
import ListTemplate from './components/ListTemplate';
import ListHead from './components/ListHead';
import Lists from "./components/Lists"

const GrobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    width: 100vw;
    background-color: #e1e1e1;
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    // TodoProvider: 모든 곳에서 Todo Context를 사용할 수 있기위함
    <TodoProvider>
      <GrobalStyle />
      <Container>
        <ListTemplate>
          <ListHead />
          <Lists />
        </ListTemplate>
        <TodoTemplate>
          <TodoHead />
          <TodoCreate />
          <TodoList />
        </TodoTemplate>
      </Container>
    </TodoProvider>
  );
}

export default App;
