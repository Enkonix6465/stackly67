import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { registerUser } from '../utils/auth'
import { LanguageSelector } from '../components/language-selector'
import { ThemeToggle } from '../components/theme-toggle'
import { useTheme } from '../components/theme-provider'

function isValidEmail(value) {
  return /.+@.+\..+/.test(String(value).toLowerCase())
}

export default function Register() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { theme } = useTheme()
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')

  // Force re-render when theme changes
  useEffect(() => {
    console.log('🎨 Register Page - Current theme:', theme)
    console.log('🎨 HTML classList:', document.documentElement.classList.toString())
  }, [theme])

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (!form.firstName.trim() || !form.lastName.trim()) {
      setError(t('register.errorFirstNameRequired'))
      return
    }
    if (!isValidEmail(form.email)) {
      setError(t('register.errorEmailInvalid'))
      return
    }
    if (form.password.length < 6) {
      setError(t('register.errorPasswordLength'))
      return
    }
    if (form.password !== form.confirmPassword) {
      setError(t('register.errorPasswordsMismatch'))
      return
    }

    const { success, message } = registerUser({
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      email: form.email,
      password: form.password
    })

    if (!success) {
      setError(message)
      return
    }

    navigate('/login', { replace: true })
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
        <div className="w-full max-w-2xl animate-fade-in">
          <div className={`backdrop-blur-xl rounded-2xl shadow-2xl p-8 lg:p-10 animate-slide-up transition-all duration-300 ${
            theme === 'dark' 
              ? 'bg-white/10 border border-white/20 text-white' 
              : 'bg-white/90 border border-gray-300 text-gray-900'
          }`}>
            <div className="mb-6 text-center">
              <h2 className={`text-3xl lg:text-4xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{t('register.createAccount')}</h2>
              <p className={`mt-1 ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>{t('register.joinUs')}</p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className={`block text-sm font-medium ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>{t('register.firstName')}</label>
                <input
                  id="firstName"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder={t('register.firstNamePlaceholder')}
                  className={`mt-1 w-full rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all ${
                    theme === 'dark'
                      ? 'bg-white/20 border border-white/30 text-white placeholder-white/60'
                      : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-400'
                  }`}
                />
              </div>
              <div>
                <label htmlFor="lastName" className={`block text-sm font-medium ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>{t('register.lastName')}</label>
                <input
                  id="lastName"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder={t('register.lastNamePlaceholder')}
                  className={`mt-1 w-full rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all ${
                    theme === 'dark'
                      ? 'bg-white/20 border border-white/30 text-white placeholder-white/60'
                      : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-400'
                  }`}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className={`block text-sm font-medium ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>{t('register.email')}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t('register.emailPlaceholder')}
                  className={`mt-1 w-full rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all ${
                    theme === 'dark'
                      ? 'bg-white/20 border border-white/30 text-white placeholder-white/60'
                      : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-400'
                  }`}
                />
              </div>
              <div>
                <label htmlFor="password" className={`block text-sm font-medium ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>{t('register.password')}</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder={t('register.passwordPlaceholder')}
                  className={`mt-1 w-full rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all ${
                    theme === 'dark'
                      ? 'bg-white/20 border border-white/30 text-white placeholder-white/60'
                      : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-400'
                  }`}
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className={`block text-sm font-medium ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>{t('register.confirmPassword')}</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder={t('register.confirmPasswordPlaceholder')}
                  className={`mt-1 w-full rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all ${
                    theme === 'dark'
                      ? 'bg-white/20 border border-white/30 text-white placeholder-white/60'
                      : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-400'
                  }`}
                />
              </div>

              {error && (
                <div className={`sm:col-span-2 rounded-md px-3 py-2 text-sm ${
                  theme === 'dark'
                    ? 'text-red-300 bg-red-900/40 border border-red-700/50'
                    : 'text-red-700 bg-red-100 border border-red-300'
                }`}>{error}</div>
              )}

              <div className="sm:col-span-2">
                <button type="submit" className="w-full btn-animate-strong rounded-lg px-8 py-4 font-bold text-lg transition-all duration-300 bg-red-500 text-white hover:bg-red-600 shadow-lg hover:shadow-xl">
                  {t('register.createAccountButton')}
                </button>
              </div>
            </form>

            <div className="mt-4 text-center">
              <span className={`text-sm ${theme === 'dark' ? 'text-white/80' : 'text-gray-600'}`}>{t('register.forgotPassword')} </span>
              <button 
                type="button"
                onClick={() => navigate('/forgot-password')}
                className={`text-sm underline cursor-pointer ${theme === 'dark' ? 'text-red-300 hover:text-red-200' : 'text-red-600 hover:text-red-700'}`}
              >
                {t('register.reset')}
              </button>
            </div>

            <p className={`mt-6 text-center text-sm ${theme === 'dark' ? 'text-white/80' : 'text-gray-600'}`}>
              {t('register.alreadyHaveAccount')} <Link to="/login" className={`underline ${theme === 'dark' ? 'text-red-300 hover:text-red-200' : 'text-red-600 hover:text-red-700'}`}>{t('register.login')}</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 