import { Box } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'

function App() {

  return (
    <Box>
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/about' element={<About />}  />
      </Routes>
    </Box>
  )
}

export default App
