import { Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

const routeOrder = {
  '/': 0,
  '/projects': 1,
  '/contact': 2
}

function App() {
  const location = useLocation()
  const [animationClass, setAnimationClass] = useState('fade-in')
  const [previousRoute, setPreviousRoute] = useState(location.pathname)

  useEffect(() => {
    const currentIndex = routeOrder[location.pathname] ?? -1
    const previousIndex = routeOrder[previousRoute] ?? -1

    if (currentIndex > previousIndex) {
      setAnimationClass('slide-right')
    } else if (currentIndex < previousIndex) {
      setAnimationClass('slide-left')
    } else {
      setAnimationClass('fade-in')
    }

    setPreviousRoute(location.pathname)
  }, [location.pathname, previousRoute])

  return (
    <>
      <Navbar />
      <div className="container">
        <div className={`page-content ${animationClass}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App