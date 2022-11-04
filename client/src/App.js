import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import PersonForm from './components/PersonForm';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PersonForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
