import './App.css'
import Home from './Layout/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Master from './Layout/Master';
import Contact from './Pages/Contact';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import BlogCardSection from './Pages/BlogPage';
import SingleBlog from './Pages/SingleBlog';
import AboutSection from './Pages/About';
import CategorySection from './Pages/Category';
import AuthorSection from './Pages/AutherSection';
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Master />}>
            <Route index element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/privacy' element={<PrivacyPolicy />} />
            <Route path='/blog' element={<BlogCardSection />} />
            <Route path='/single-blog' element={<SingleBlog />} />
            <Route path='/about' element={<AboutSection />} />
            <Route path='/category' element={<CategorySection />} />
            <Route path='/single-author' element={<AuthorSection />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
