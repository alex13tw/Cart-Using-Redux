import './App.css';
import Cart from './Components/Cart';
import Dashboard from './Components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from './Components/RootLayout';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <RootLayout/>

      <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/cart' element={<Cart/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
