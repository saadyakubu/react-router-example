import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import About  from './pages/About'
import Contact from './pages/Contact'
import NotFound  from './pages/NotFound'  
import Menu  from './components/Menu'
import { Posts, PostLists } from './pages/Posts' 
import { Post } from './pages/Post'

// Tutorial Link: https://blog.logrocket.com/react-router-v6-guide/
function App() {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/posts' element={<Posts/>}>
          <Route index element={<PostLists/>}/>
          <Route path=':slug' element={<Post/>}/>
        </Route>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}



export default App
