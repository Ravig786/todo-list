import './App.css';
import 'antd/dist/antd.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import {Toaster} from 'react-hot-toast';
function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
    <Toaster position="bottom-right" />
    </>
  );
}

export default App;

export function ProtectedRoute(props) {

  if (localStorage.getItem('loginDetails')) {
    return props.children;
  } else {
    return <Navigate to='/register' />
  }

}