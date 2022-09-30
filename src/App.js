import { Route, Routes } from 'react-router-dom';
import "./App.css"
import Questions from './container/Center/Questions';
import Left from './container/Left/Left';

import Right from './container/Right/Right';

function App() {
  return (
    <div className="home">
     <Left/>
     <div className='center'>
      <Routes>
        <Route path="/" element={<Questions/>}/>
      </Routes>
     </div>
     <Right/>
    </div>
  );
}

export default App;
