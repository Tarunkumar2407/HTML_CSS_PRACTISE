import './App.css';
import ConditionalRendering from './components/ConditionalRendering';
import HandleForm from './components/HandleForm';
import HideShow from './components/HideShow';
// import User from './components/Class';
// import ClickEvent from './components/ClickEvent';
// import Functional from './components/Functional';
// import InputBoxValue from './components/InputBoxValue';
import PropsParent from './components/props/PropsParent';
import ToDoList from './components/useStateHook.js/ToDoList';
import WithObject from './components/useStateHook.js/WithObject';
import WtihArray from './components/useStateHook.js/WtihArray';

function App() {
  return (
    <div className="App">
      {/* <Functional />
      {/* <User /> */}
      {/* <ClickEvent /> */}
      {/* <PropsParent /> */}
      {/* <InputBoxValue /> */}
      {/* <HideShow /> */}
      {/* <HandleForm /> */}
      {/* <ConditionalRendering /> */}
      <ToDoList />
      {/* <WithObject /> */}
      {/* <WtihArray /> */}
    </div>
  );
}

export default App;
