import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { registerUser } from '../utils/auth'
import { LanguageSelector } from '../components/language-selector'

function isValidEmail(value) {
  return /.+@.+\..+/.test(String(value).toLowerCase())
}

export default function Register() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')

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
    <div className="min-h-screen w-full bg-white dark:bg-gray-900">
      {/* Header with Logo and Language Switcher */}
      <div className="flex items-center justify-between p-6 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <img 
            src="/Logo.jpg" 
            alt="Logo" 
            className="h-10 w-auto"
          />
        </div>
        <div className="flex items-center">
          <LanguageSelector variant="login" />
        </div>
      </div>

      <div className="flex min-h-screen items-center justify-center p-6 -mt-20">
        <div className="w-full max-w-2xl animate-fade-in">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl p-8 lg:p-10 text-gray-900 dark:text-white animate-slide-up">
            <div className="mb-6 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">{t('register.createAccount')}</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1">{t('register.joinUs')}</p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('register.firstName')}</label>
                <input
                  id="firstName"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder={t('register.firstNamePlaceholder')}
                  className="mt-1 w-full rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('register.lastName')}</label>
                <input
                  id="lastName"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder={t('register.lastNamePlaceholder')}
                  className="mt-1 w-full rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('register.email')}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t('register.emailPlaceholder')}
                  className="mt-1 w-full rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('register.password')}</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder={t('register.passwordPlaceholder')}
                  className="mt-1 w-full rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('register.confirmPassword')}</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder={t('register.confirmPasswordPlaceholder')}
                  className="mt-1 w-full rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              {error && (
                <div className="sm:col-span-2 text-red-300 bg-red-900/40 border border-red-700/50 rounded-md px-3 py-2 text-sm">{error}</div>
              )}

              <div className="sm:col-span-2">
                <button type="submit" className="w-full btn-animate-strong rounded-lg px-8 py-4 font-bold text-lg transition-all duration-300 bg-red-500 text-white hover:bg-red-600 shadow-lg hover:shadow-xl">
                  {t('register.createAccountButton')}
                </button>
              </div>
            </form>

            <div className="mt-4 text-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">{t('register.forgotPassword')} </span>
              <button 
                type="button"
                onClick={() => navigate('/forgot-password')}
                className="text-sm text-red-500 hover:text-red-600 underline cursor-pointer"
              >
                {t('register.reset')}
              </button>
            </div>

            <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
              {t('register.alreadyHaveAccount')} <Link to="/login" className="text-red-500 hover:text-red-600 underline">{t('register.login')}</Link>
            </p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-gray-400 dark:text-gray-500">
            <span className="h-2 w-2 bg-gray-300 dark:bg-gray-600 rounded-full animate-float-slow" />
            <span className="h-2 w-2 bg-gray-300 dark:bg-gray-600 rounded-full animate-float-slow [animation-delay:200ms]" />
            <span className="h-2 w-2 bg-gray-300 dark:bg-gray-600 rounded-full animate-float-slow [animation-delay:400ms]" />
          </div>
        </div>
      </div>
    </div>
  )
} 