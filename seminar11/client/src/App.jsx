import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Homepage from './Homepage';
import Login from './Login';

//aceasta e o componenta React- basically o functie 
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='*' element={<div>Page not found</div>}/>
        </Routes>
      </Router>

    </>
  )
}

export default App
