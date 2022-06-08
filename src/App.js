import "./App.css";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import Notes from "./components/Notes/Notes";
import { reducer, initialState } from "./reducer";
import { useReducer } from "react";
import ReducerContext from "./context/reducerContext";
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const header = <Header />;
  //const navbar = <Navbar />;
  const content = <Notes />;
  const footer = "";
  return (
    <>
      <ReducerContext.Provider value={{ state, dispatch }}>
        <Layout
          header={header}
          //navbar={navbar}
          content={content}
          footer={footer}
        />
      </ReducerContext.Provider>
    </>
  );
}

export default App;
