import './App.css';

import { Provider } from './components/Context';
import ListTemplate from './components/ListTemplate';
import ListHead from './components/ListHead';
import Lists from "./components/Lists"
import TodoTemplate from './components/TodoTemplate';

import styled, { createGlobalStyle } from 'styled-components';
import TodoList from './components/TodoList';
import TodoHead from './components/TodoHead';
import TodoCreate from './components/TodoCreate';

const GrobalStyle = createGlobalStyle`
  :root {
    --base-color: #6c6c6c;
    --back-color: #e1e1e1;
    --font-color: #484848;
    --point-color: #9ed591;
  }

  body {
    height: 100vh;
    width: 100vw;
    background-color: var(--back-color);
    color: var(--font-color);
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    padding: 2em;
    box-sizing: border-box;
  }
`;

function App() {
  return (
    // TodoProvider: 모든 곳에서 Todo Context를 사용할 수 있기위함
    <Provider>
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
    </Provider>
  );
}

export default App;
