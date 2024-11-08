import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { BlogPage } from './pages/BlogPage'
import { Blogs } from "./pages/Blogs"
import { Publish } from "./pages/Publish"

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/signIn" element={<SignIn/>}/>
        <Route path="/blog/:id" element={<BlogPage/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/publish" element={<Publish/>}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App
