import './App.css';
import Increment from './Components/Increment';
import Decrement from './Components/Decrement';
function App() {
  return (
    <div className="App">
      <div className='container'>
        <Increment />
      </div>
      <div className='container'>
        <Decrement />
      </div>
    </div>
  );
}

export default App;
