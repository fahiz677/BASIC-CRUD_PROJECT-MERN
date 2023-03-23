import { Fragment, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductList, Header } from "./components";
import Admin from "./pages/Admin/Admin";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Auth from '../src/pages/Auth/Auth'
function App() {
   return (
      <Fragment>
         <Router>
         <Header />
            <Routes>
            <Route path='/'  element={ <ProductList />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='/admin' element={<Admin />} />
            </Routes>  
        </Router>
        <ToastContainer />
      </Fragment>
   );
}

export default App;
