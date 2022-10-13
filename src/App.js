import MainContainer from "./components/MainContainer";
import TasksContextProvider from "./context/TasksContext";
import { GlobalStyle } from "./styles/GlobalStyles";

function App() {
  return (
    <TasksContextProvider>
      <MainContainer />
      <GlobalStyle />
    </TasksContextProvider>
  );
}

export default App;
