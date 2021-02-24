import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name:"eva rahman",
    job: "singer"
  }
  var style ={
    color:'red',
    backgroundColor:'grey'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <h1>my heading</h1>
        <h3 style={style}>singer:{person.name+" "+person.job}</h3>
        <p style={{color:'orange',backgroundColor:'cyan'}}>my first react app</p>
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
