import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LanguageSelector } from '../components/language-selector'
import { ThemeToggle } from '../components/theme-toggle'
import { useTheme } from '../components/theme-provider'
import { loginUser, getUsers, saveUsers } from '../utils/auth'

export default function Login() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { theme } = useTheme()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  
  // Force re-render when theme changes
  useEffect(() => {
    console.log('🎨 Login Page - Current theme:', theme)
    console.log('🎨 HTML classList:', document.documentElement.classList.toString())
  }, [theme])

  function handleSubmit(e) {
    e.preventDefault()
    setError('')

    console.log('🔍 Login attempt:', { email, password })

    if (!email.trim() || !password) {
      setError(t('login.errorEmailPassword'))
      return
    }

    // Check for admin credentials
    if ((email === "admin@enkonix.in" || email === "admin@enkonix.com") && password === "admin123") {
      console.log('✅ Admin credentials detected')
      
      // Create admin user object (DO NOT add to users list)
      const adminUser = {
        id: 'admin',
        firstName: 'Admin',
        lastName: 'User',
        email: email,
        password: password,
        role: 'admin',
        loginTime: new Date().toISOString(),
        isAdmin: true // Special flag to identify admin
      }
      
      // Store admin user in localStorage for authentication ONLY
      localStorage.setItem('authUser', JSON.stringify(adminUser))
      console.log('💾 Admin user authenticated:', adminUser)
      
      // Verify storage
      const stored = localStorage.getItem('authUser')
      console.log('🔍 Stored auth data:', stored)
      
      console.log('🚀 Navigating to admin dashboard')
      navigate('/admin-dashboard', { replace: true })
      return
    }

    console.log('👤 Regular user login attempt')
    const { success, message } = loginUser(email, password)
    if (!success) {
      setError(message)
      return
    }
    navigate('/home', { replace: true })
  }

  return (
    <div className={`min-h-screen w-full relative transition-colors ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Background Image - visible in both modes */}
      <div className="absolute inset-0">
        <img 
          src="/images/67Bg.jpg" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      {/* Overlay - black in both modes */}
      <div className={`absolute inset-0 transition-colors duration-300 ${theme === 'dark' ? 'bg-black/60' : 'bg-black/50'}`} />
      
      {/* Header with Language Selector */}
      <div className="relative z-20 w-full animate-fade-in">
        <header className={`backdrop-blur-md border-b shadow-lg transition-colors ${theme === 'dark' ? 'bg-black/90 border-white/20' : 'bg-white/90 border-gray-300'}`}>
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <img src="/Logo.jpg" alt="Logo" className="h-8 w-auto" />
              </Link>
            </div>
            
            {/* Language Selector & Theme Toggle */}
            <div className="flex items-center gap-2">
              <ThemeToggle className={`transition-colors ${theme === 'dark' ? 'text-white hover:bg-white/10' : 'text-gray-700 hover:bg-gray-200'}`} />
              <LanguageSelector variant="login" />
            </div>
          </div>
        </header>
      </div>
      
      <div className="relative z-10 flex min-h-screen items-center justify-center p-6">
        <div className="w-full max-w-lg lg:max-w-xl animate-fade-in">
          <div className={`backdrop-blur-xl border rounded-2xl shadow-2xl p-8 lg:p-10 animate-slide-up transition-all duration-300 ${
            theme === 'dark' 
              ? 'bg-gray-800/40 border-white/20 text-white' 
              : 'bg-white/95 border-gray-300 text-gray-900'
          }`}>
            <div className="mb-6 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">{t('login.welcomeBack')}</h2>
              <p className={`mt-1 ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>{t('login.loginToContinue')}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className={`block text-sm font-medium ${theme === 'dark' ? 'text-white/90' : 'text-gray-700'}`}>{t('login.email')}</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('login.emailPlaceholder')}
                  className={`mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-colors ${
                    theme === 'dark'
                      ? 'bg-white/10 border-white/30 text-white placeholder-white/50'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                  }`}
                />
              </div>
              <div>
                <label htmlFor="password" className={`block text-sm font-medium ${theme === 'dark' ? 'text-white/90' : 'text-gray-700'}`}>{t('login.password')}</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t('login.passwordPlaceholder')}
                  className={`mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-colors ${
                    theme === 'dark'
                      ? 'bg-white/10 border-white/30 text-white placeholder-white/50'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                  }`}
                />
              </div>

              {error && (
                <div className={`rounded-md px-3 py-2 text-sm ${
                  theme === 'dark'
                    ? 'text-red-300 bg-red-900/40 border border-red-700/50'
                    : 'text-red-700 bg-red-100 border border-red-300'
                }`}>{error}</div>
              )}

              <button type="submit" className="w-full btn-animate-strong rounded-lg px-8 py-4 font-bold text-lg transition-all duration-300 bg-red-500 text-white hover:bg-red-600 shadow-lg hover:shadow-xl">
                {t('login.signIn')}
              </button>
            </form>

            <div className={`mt-4 text-center text-sm ${theme === 'dark' ? 'text-white/80' : 'text-gray-600'}`}>
              {t('login.forgotPasswordText')} <Link to="/forgot-password" className={`underline ${theme === 'dark' ? 'text-red-300 hover:text-red-200' : 'text-red-600 hover:text-red-700'}`}>{t('login.reset')}</Link>
            </div>

            <p className={`mt-6 text-center text-sm ${theme === 'dark' ? 'text-white/80' : 'text-gray-600'}`}>
              {t('login.noAccount')} <Link to="/register" className={`underline ${theme === 'dark' ? 'text-red-300 hover:text-red-200' : 'text-red-600 hover:text-red-700'}`}>{t('login.register')}</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 