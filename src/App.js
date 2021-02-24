import logo from './logo.svg';
import './App.css';

function App() {
  const players=['Sakib','Rakib','Amir']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <h1>my heading</h1>
        <Person name={players[0]} wife="shishir"></Person>
        <Person name="tamim" wife="anonna"></Person>
        <Person name="mushi" wife="runa"></Person>
        <Person name="mash" wife="tina"></Person>
      </header>
    </div>
  );
}
function Person(props){
  const personStyle={
    border:'5px solid cyan',
    margin:'5px',
    padding:'5px',
    width:'400px'
  }
  return (
  <div style={personStyle}>
    <h1>name:{props.name}</h1>
    <h3>wife:{props.wife}</h3>
  </div>
  )
}

export default App;
