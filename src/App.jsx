import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import CompanyInfo from './pages/CompanyInfo'
import MovieList from './pages/MovieList'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<MovieList />} />
        <Route path="*" element={<CompanyInfo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
