import "./App.css";
import Parent from "./components/LiftingStateUp/Parent";
import PropsParent from "./components/PropsDrilling.js/PropsParent";
import UseReducer from "./components/useStateHook/useReducerHook.js/UseReducer";
import ParentCallback from "./components/useCallbackHook/ParentCallback";
import Counter1 from "./components/useCustomHook/Counter1";
import UseMemo from "./components/useMemoHook/UseMemo";
import UseRef from "./components/useRefHook.js/UseRef";
import UseReducerHook2 from "./components/useStateHook/useReducerHook.js/UseReducerHook2";
import CakeContainer from "./components/Redux.js/Cake/CakeContainer";
import { Provider } from "react-redux";
import store from "./components/Redux.js/Cake/Store";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import ConditionalRendering from './components/ConditionalRendering';
// import HandleForm from './components/HandleForm';
// import HideShow from './components/HideShow';
// import ChildToParent from './components/LiftingStateUp.js/ChildToParent';
// import RenderingList from './components/RenderingList';
// import User from './components/Class';
// import ClickEvent from './components/ClickEvent';
// import Functional from './components/Functional';
// // import InputBoxValue from './components/InputBoxValue';
// import PropsParent from './components/props/PropsParent';
// import UseEffectt from './components/useEffectHook/UseEffectt';
// import ToDoList from './components/useStateHook/ToDoList';
// import WithObject from './components/useStateHook/WithObject';
// import WtihArray from './components/useStateHook/WtihArray';
import Home from "./components/Router/Home";
import Contact from "./components/Router/Contact";
import About from "./components/Router/About";
import Navbar from "./components/Router/Navbar";
import Page404 from "./components/Router/Page404";
import User from "./components/Router/User";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/user/:name" element={<User />}></Route>
          {/* <Route path="/*" element={<Page404 />}></Route> */}
          <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>
      </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
