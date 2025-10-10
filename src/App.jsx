import React from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import Home from './pages/Home'
import Home2 from './pages/Home2'
import About from './pages/About'
import Services from './pages/Services'
import LuxuryVilla from './pages/LuxuryVilla'
import WaterfrontMansion from './pages/WaterfrontMansion'
import LuxuryCondo from './pages/LuxuryCondo'
import ContemporaryTownhouse from './pages/ContemporaryTownhouse'
import ModernPenthouse from './pages/ModernPenthouse'
import EstateHome from './pages/EstateHome'
import Blog from './pages/Blog'
import BlogPost1 from './pages/BlogPost1'
import BlogPost2 from './pages/BlogPost2'
import BlogPost3 from './pages/BlogPost3'
import Contact from './pages/Contact'
import AdminDashboard from './pages/admin-dashboard'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import AdminProtectedRoute from './components/AdminProtectedRoute'
import { ThemeProvider } from './components/theme-provider'
import ScrollToTop from './components/ScrollToTop'
import { debugRoute } from './utils/debug'

// Component to handle route debugging
function RouteDebugger() {
  const location = useLocation();
  
  React.useEffect(() => {
    console.log('🛣️ Route changed to:', location.pathname);
    debugRoute(location.pathname);
  }, [location.pathname]);
  
  return null;
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <RouteDebugger />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route 
            path="/admin-dashboard" 
            element={
              <AdminProtectedRoute>
                <AdminDashboard />
              </AdminProtectedRoute>
            } 
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/home2"
            element={
              <ProtectedRoute>
                <Home2 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="/services"
            element={
              <ProtectedRoute>
                <Services />
              </ProtectedRoute>
            }
          />
          <Route
            path="/luxury-villa"
            element={
              <ProtectedRoute>
                <LuxuryVilla />
              </ProtectedRoute>
            }
          />
          <Route
            path="/waterfront-mansion"
            element={
              <ProtectedRoute>
                <WaterfrontMansion />
              </ProtectedRoute>
            }
          />
          <Route
            path="/services/waterfront-mansion"
            element={
              <ProtectedRoute>
                <WaterfrontMansion />
              </ProtectedRoute>
            }
          />
          <Route
            path="/services/luxury-condo"
            element={
              <ProtectedRoute>
                <LuxuryCondo />
              </ProtectedRoute>
            }
          />
          <Route
            path="/services/contemporary-townhouse"
            element={
              <ProtectedRoute>
                <ContemporaryTownhouse />
              </ProtectedRoute>
            }
          />
          <Route
            path="/services/modern-penthouse"
            element={
              <ProtectedRoute>
                <ModernPenthouse />
              </ProtectedRoute>
            }
          />
          <Route
            path="/estate-home"
            element={
              <ProtectedRoute>
                <EstateHome />
              </ProtectedRoute>
            }
          />
          <Route
            path="/services/estate-home"
            element={
              <ProtectedRoute>
                <EstateHome />
              </ProtectedRoute>
            }
          />
          <Route
            path="/blog"
            element={
              <ProtectedRoute>
                <Blog />
              </ProtectedRoute>
            }
          />
          <Route
            path="/blog/1"
            element={
              <ProtectedRoute>
                <BlogPost1 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/blog/2"
            element={
              <ProtectedRoute>
                <BlogPost2 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/blog/3"
            element={
              <ProtectedRoute>
                <BlogPost3 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/blog/italian"
            element={
              <ProtectedRoute>
                <BlogPost1 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/blog/wine"
            element={
              <ProtectedRoute>
                <BlogPost2 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/blog/desserts"
            element={
              <ProtectedRoute>
                <BlogPost3 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
