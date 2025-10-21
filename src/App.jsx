import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import './App.css'
import ProtectedRoute from './components/ProtectedRoute'
import AdminProtectedRoute from './components/AdminProtectedRoute'
import { ThemeProvider } from './components/theme-provider'
import ScrollToTop from './components/ScrollToTop'
import { debugRoute } from './utils/debug'

// Lazy load pages for better code-splitting
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))
const Home = lazy(() => import('./pages/Home'))
const Home2 = lazy(() => import('./pages/Home2'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const LuxuryVilla = lazy(() => import('./pages/LuxuryVilla'))
const WaterfrontMansion = lazy(() => import('./pages/WaterfrontMansion'))
const LuxuryCondo = lazy(() => import('./pages/LuxuryCondo'))
const ContemporaryTownhouse = lazy(() => import('./pages/ContemporaryTownhouse'))
const ModernPenthouse = lazy(() => import('./pages/ModernPenthouse'))
const EstateHome = lazy(() => import('./pages/EstateHome'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost1 = lazy(() => import('./pages/BlogPost1'))
const BlogPost2 = lazy(() => import('./pages/BlogPost2'))
const BlogPost3 = lazy(() => import('./pages/BlogPost3'))
const Contact = lazy(() => import('./pages/Contact'))
const AdminDashboard = lazy(() => import('./pages/admin-dashboard'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Component to handle route debugging
function RouteDebugger() {
  const location = useLocation();
  
  React.useEffect(() => {
    console.log('🛣️ Route changed to:', location.pathname);
    debugRoute(location.pathname);
  }, [location.pathname]);
  
  return null;
}

// Loading fallback component
function LoadingFallback() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      background: 'var(--background, #ffffff)'
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ 
          width: '50px', 
          height: '50px', 
          border: '3px solid #f3f3f3',
          borderTop: '3px solid #3498db',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto 16px'
        }}></div>
        <p style={{ color: 'var(--foreground, #000000)' }}>Loading...</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <RouteDebugger />
        <ScrollToTop />
        <Suspense fallback={<LoadingFallback />}>
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
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
