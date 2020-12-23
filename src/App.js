import './App.css';
import Product1 from './Components/Product1';
import Product2 from './Components/Product2';
import Product3 from './Components/Product3';
import Product4 from './Components/Product4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Product1 />
        <Product2 />
        <Product3 />
        <Product4 />
      </header>
    </div>
  );
}

export default App;
