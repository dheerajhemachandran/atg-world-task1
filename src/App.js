import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Toolbar from './components/Toolbar';
import Posts from './components/Posts';

function App() {
  const [log, setlog] = useState(false)
  const [grouped, setgrouped] = useState(false)
  return (
    <div className="App">
      <Toolbar log={log} setlog={setlog}/>
      <Header grouped={grouped} setgrouped={setgrouped} />
      <Posts grouped={grouped} setgrouped={setgrouped} />
    </div>
  );
}

export default App;
