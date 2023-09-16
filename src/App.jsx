import { Box } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Loyihalar from './pages/loyihalar'
import Aloqa from './pages/aloqa'
import Error404 from './pages/error404'
import Dataspinpanell from './pages/dataspinpanell'

function App() {

  return (
    <Box>
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/about' element={<About />}  />
        <Route path='/loyihalar' element={<Loyihalar />}  />
        <Route path='/aloqa' element={<Aloqa />}  />
        <Route path='*' element={<Error404 />}  />
        <Route path='/dataspinpanell' element={<Dataspinpanell />}></Route>
      </Routes>
    </Box>
  )
}

export default App
