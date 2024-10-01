import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar/SearchBar.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammming</h1>
        <SearchBar />
        <button>Save To Spotify</button>
        <button>Search</button>
      </header>
    </div>
  );
}

export default App;
