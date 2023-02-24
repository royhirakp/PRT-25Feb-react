
import './App.css';
import Test from './components/Test';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Contaxt api
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
