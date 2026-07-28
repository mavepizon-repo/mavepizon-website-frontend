import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Routes, Route } from "react-router-dom";
import FloatingButtons from './components/FloatingButtons';
import './App.css';
import axios from 'axios';
import ChatBot from './components/ChatBot'
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BlogDetails from "./pages/BlogDetails";

// BLOG
import Blog from "./pages/Blog";

// PAGES
import Home from './pages/Home';
import Services from './pages/Services';
import Courses from './pages/Courses';
import Vision from './pages/Vision';
import Placements from './pages/Placements';
import About from './pages/About';
import Contact from './pages/Contact';

// ADMIN
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AddBlog from './pages/AddBlog';
import UpdateBlog from './pages/UpdateBlog';
import DeleteBlog from './pages/DeleteBlog';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
const API = `${BACKEND_URL}/api`;

function App() {
  const [page, setPage] = useState('home');

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split("/")[1]; 
    setPage(path || "home");
  }, [location.pathname]);

  const handleNavigate = (pageId) => {
    setPage(pageId);
    navigate(pageId === 'home' ? "/" : `/${pageId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'IT Services' },
    { id: 'courses', label: 'Courses' },
    { id: 'vision', label: 'Vision & Mission' },
    { id: 'testimonials', label: 'Placements' },
    { id: 'blog', label: 'Blog' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="App">

      <Routes>

        {/* ================= ADMIN ================= */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add-blog" element={<AddBlog />} />
        <Route path="/admin/update-blog" element={<UpdateBlog />} />
        <Route path="/admin/delete-blog" element={<DeleteBlog />} />

        {/* ================= BLOG ================= */}

        {/* Blog List Page */}
        <Route path="/blog" element={
          <>
            <Topbar />
            <Navbar currentPage="blog" onNavigate={handleNavigate} navItems={navItems} />
            <Blog />
            <Footer onNavigate={handleNavigate} />

            {/* ✅ ADD HERE */}
            <FloatingButtons />
            <ChatBot />
          </>
        } />

        {/* Blog Detail Page */}
        <Route path="/blog/:id" element={
          <>
            <Topbar />
            <Navbar currentPage="blog" onNavigate={handleNavigate} navItems={navItems} />
            <BlogDetails />
            <Footer onNavigate={handleNavigate} />

            {/* ✅ ADD HERE */}
            <FloatingButtons />
            <ChatBot />
          </>
        } />

        {/* ================= MAIN WEBSITE ================= */}

        <Route path="*" element={
          <>
            <Topbar />

            <Navbar 
              currentPage={page} 
              onNavigate={handleNavigate} 
              navItems={navItems} 
            />

            {page !== 'home' && (
              <div className="back-bar show">
                <div 
                  className="back-btn" 
                  onClick={() => handleNavigate('home')}
                >
                  ← Back to Home
                </div>
              </div>
            )}

            {page === 'home' && <Home onNavigate={handleNavigate} />}
            {page === 'services' && <Services />}
            {page === 'courses' && <Courses />}
            {page === 'vision' && <Vision />}
            {page === 'testimonials' && <Placements />}
            {page === 'about' && <About />}
            {page === 'contact' && <Contact />}

            <Footer onNavigate={handleNavigate} />
            <FloatingButtons />
            <ChatBot/>
          </>
        } />

      </Routes>

    </div>
  );
}

export default App;