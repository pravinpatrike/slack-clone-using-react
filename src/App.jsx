
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <h1>Hello Pravin lets buils slack clone</h1>

      <Header/>
      <div className="app__body">
        <Sidebar />
      </div>

      {/* React router -> chat screen*/}

    </div>
  );
}

export default App;
