import { Route, Routes } from 'react-router-dom';
import "./App.css"
import Questions from './container/Center/Questions';
import Left from './container/Left/Left';

import Right from './container/Right/Right';
import Search from './container/search/Search';

function App() {
  return (
    <div className="home">
     <Left/>
     <div className='center'>
      <Routes>
        <Route path="/" element={<Questions/>}/>
        <Route path="/search/:searchTerm" element={<Search/>}/>
      </Routes>
     </div>
     <Right/>
    </div>
  );
}

export default App;
