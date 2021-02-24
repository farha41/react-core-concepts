import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <h1>my heading</h1>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}
function Person(){
  const personStyle={
    border:'5px solid cyan',
    margin:'5px',
    padding:'5px'
  }
  return (
  <div style={personStyle}>
    <h1>name:Sakib</h1>
    <h3>Best Player of the year</h3>
  </div>
  )
}

export default App;
