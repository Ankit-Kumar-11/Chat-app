
import "./style.scss"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Routes,
  BrowserRouter,
  Navigate
} from 'react-router-dom';
import Register from './components/pages/register';
import Login from "./components/pages/login";
import Home from "./components/pages/Home";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const {currentUser} = useContext(AuthContext)

  const ProtectedRoute =({children}) => {
    if(!currentUser) {
      return <Navigate to='/login' />
    }
  } 
  console.log(currentUser);
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"> 
      <Route index element={
      <ProtectedRoute>
       <Home /> 
      </ProtectedRoute>} />
        <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />      
      </Route>
    </Routes>
    

    </BrowserRouter>

  );
}

export default App;
