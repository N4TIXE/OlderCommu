import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Page404 from './pages/Page404'
import Game1 from './pages/Game1'
import Game2 from './pages/Game2'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Register' element={<Register />}></Route>
        <Route path='/Game1' element={<Game1 />}></Route>
        <Route path='/Game2' element={<Game2 />}></Route>
        <Route path='*' element={<Page404 />}></Route>
      </Routes>
    </>
  );
}

export default App;