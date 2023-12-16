
import { Switch } from '@mui/material';
import './App.css';
import Header from './Header';
import Sidebar from './components/Sidebar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Chat from './Chat';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello guys lets buils slack clone</h1> */}

      <Router>
      <Header/>
      <div className="app__body">
        <Sidebar />

        <Routes>
          <Route path="room/:roomId" element={<Chat />}>
          </Route>
          <Route path="/" element={<h1>Welcome</h1>}></Route>
        </Routes>
      {/* React router -> chat screen*/}
      </div>
      </Router>


    </div>
  );
}

export default App;
