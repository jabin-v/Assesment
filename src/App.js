import { Route, Routes } from 'react-router-dom';
import "./App.css"
import Left from './container/Left/Left';
import Center from './container/Center/Center';
import Right from './container/Right/Right';

function App() {
  return (
    <div className="home">
     <Left/>
     <div className='center'>
      <Routes>
        <Route path="/" element={<Center/>}/>
      </Routes>
     </div>
     <Right/>
    </div>
  );
}

export default App;
