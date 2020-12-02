import logo from './logo.svg';
import './App.css';
import ClockCompont from "./ReactCompont/ClockCompont";
import ButtonComponent from "./ReactCompont/ButtonComponent";
import HookSample from "./ReactCompont/HookExample";


function App() {
  console.log('react 热啊冲突')
  return (
    <div className="App">
      <ClockCompont></ClockCompont>
      <ButtonComponent></ButtonComponent>
      <HookSample></HookSample>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
