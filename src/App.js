import './App.css';

function App() {

const info={
  name:'Eylül Deniz Can',
  location:"Turkey",
  printInfo:()=>`${info.name} from ${info.location}`
};

const myElement=(
  <h1>
    Hello, {info.printInfo()} :)
    <h2>Have a nice day !</h2>
  </h1>

);
  return (
    <div className="App">
      {myElement}
    </div>
  );
}

export default App;
