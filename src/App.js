
function App() {

  const sayHello = () => {
    console.log('hello!');
  }
  return (
    <div className="App">
      Hello world
      <button onClick={() => sayHello()}>Hello</button>
    </div>
  );
}

export default App;
