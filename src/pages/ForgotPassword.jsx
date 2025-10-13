import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LanguageSelector } from '../components/language-selector'
import { ThemeToggle } from '../components/theme-toggle'
import { useTheme } from '../components/theme-provider'
import { resetPassword } from '../utils/auth'

export default function ForgotPassword() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { theme } = useTheme()
  const [email, setEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  // Force re-render when theme changes
  useEffect(() => {
    console.log('🎨 ForgotPassword Page - Current theme:', theme)
    console.log('🎨 HTML classList:', document.documentElement.classList.toString())
  }, [theme])

  function handlePasswordReset(e) {
    e.preventDefault()
    setError('')
    setSuccess('')
    
    if (!email.trim()) {
      setError(t('forgotPassword.errorEmailRequired'))
      return
    }

    // Check if email exists in users
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const userExists = users.some(user => user.email.toLowerCase() === email.toLowerCase())
    
    if (!userExists) {
      setError(t('forgotPassword.errorEmailNotFound'))
      return
    }
    
    if (newPassword.length < 6) {
      setError(t('forgotPassword.errorPasswordLength'))
      return
    }
    
    if (newPassword !== confirmPassword) {
      setError(t('forgotPassword.errorPasswordsMismatch'))
      return
    }

    const result = resetPassword(email, newPassword)
    if (result.success) {
      setSuccess(t('forgotPassword.successPasswordReset'))
      setTimeout(() => {
        navigate('/login', { replace: true })
      }, 2000)
    } else {
      setError(result.message)
    }
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
          <div className={`backdrop-blur-xl rounded-2xl shadow-2xl p-8 lg:p-10 animate-slide-up transition-all duration-300 ${
            theme === 'dark' 
              ? 'bg-white/10 border border-white/20 text-white' 
              : 'bg-white/90 border border-gray-300 text-gray-900'
          }`}>
            <div className="mb-6 text-center">
              <h2 className={`text-3xl lg:text-4xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {t('forgotPassword.resetPassword')}
              </h2>
              <p className={`mt-1 ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                {t('forgotPassword.enterEmailToContinue')}
              </p>
            </div>

            <form onSubmit={handlePasswordReset} className="space-y-4">
              <div>
                <label htmlFor="email" className={`block text-sm font-medium ${theme === 'dark' ? 'text-white/90' : 'text-gray-700'}`}>{t('forgotPassword.email')}</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('forgotPassword.emailPlaceholder')}
                  className={`mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-colors ${
                    theme === 'dark'
                      ? 'bg-white/10 border-white/30 text-white placeholder-white/50'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                  }`}
                />
              </div>

              <div>
                <label htmlFor="newPassword" className={`block text-sm font-medium ${theme === 'dark' ? 'text-white/90' : 'text-gray-700'}`}>{t('forgotPassword.newPassword')}</label>
                <input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder={t('forgotPassword.newPasswordPlaceholder')}
                  className={`mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-colors ${
                    theme === 'dark'
                      ? 'bg-white/10 border-white/30 text-white placeholder-white/50'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                  }`}
                />
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className={`block text-sm font-medium ${theme === 'dark' ? 'text-white/90' : 'text-gray-700'}`}>{t('forgotPassword.confirmPassword')}</label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder={t('forgotPassword.confirmPasswordPlaceholder')}
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

              {success && (
                <div className={`rounded-md px-3 py-2 text-sm ${
                  theme === 'dark'
                    ? 'text-green-300 bg-green-900/40 border border-green-700/50'
                    : 'text-green-700 bg-green-100 border border-green-300'
                }`}>{success}</div>
              )}

              <button type="submit" className="w-full btn-animate-strong rounded-lg px-8 py-4 font-bold text-lg transition-all duration-300 bg-red-500 text-white hover:bg-red-600 shadow-lg hover:shadow-xl">
                {t('forgotPassword.resetPasswordButton')}
              </button>
            </form>

            <p className={`mt-6 text-center text-sm ${theme === 'dark' ? 'text-white/80' : 'text-gray-600'}`}>
              {t('forgotPassword.rememberPassword')} <Link to="/login" className={`underline ${theme === 'dark' ? 'text-red-300 hover:text-red-200' : 'text-red-600 hover:text-red-700'}`}>{t('forgotPassword.signIn')}</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
