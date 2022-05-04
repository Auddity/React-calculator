import './scss/base/App.scss';
import Display from './components/Display';
import Calc from './components/Calc';

function App() {
  return (
    <main className="App">
      <div className="App-container">
        <Display />
        <Calc />
      </div>
    </main>
  );
}

export default App;
