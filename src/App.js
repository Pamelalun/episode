import './App.css';

function App() {
  return (
<div className="App">Hello
    <User name="Sirena" age={28} email="sirena@sirena.com"/>
    <User name="Clarita" age={19} email="Clarita@sirena.com"/>
    <User name="Santa" age={94} email="Samta@sirena.com"/>
  </div>
  );
}

const User = (props) => {
  return (
    <div>
    <h1>{props.name}</h1>
    <h2>{props.age}</h2>
    <h2>{props.email}</h2>
    </div>
  );
};

export default App;
