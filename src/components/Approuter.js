import React from "react";
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage';
import { BrowserRouter as Router , Routes ,Route} from 'react-router-dom';
import Navigation from './Navigation';
const AppRouter = () => { 
    return (
        <Router>
        <div>
        <Navigation/>
        </div>
        <Routes>
          <Route path='/' exact element={<HomePage/>} />
          <Route path='/about' element={<AboutPage/>} />
        </Routes>
      </Router>
    )
}
export default AppRouter