import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home/Home'
import Service from './views/Service/Service'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import AestheticServices from './views/AestheticServices/AestheticServices'

function App() {
  return (
    <>
      <div className='app'>
			<Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/:id" element={<Service />} />
          <Route path="/aesthetic" element={<AestheticServices />} />
        </Routes>

        <Footer />
      </div>
    </>
  )
}

export default App
