import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home/Home'
import Service from './views/Service/Service'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { MyProvider } from './context/context'
import InfoModal from './components/InfoModal/InfoModal'

function App() {
  const initialProviderValue = null

  return (
    <>
      <MyProvider initialValue={{ key: initialProviderValue }}>
        <div className='app'>
          <Header />

          <InfoModal />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service/:id" element={<Service />} />
          </Routes>

          <Footer />
        </div>
      </MyProvider>
    </>
  )
}

export default App
