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

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
