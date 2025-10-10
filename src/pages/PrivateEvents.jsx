import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollAnimation from '../components/ScrollAnimation'
import { useTranslation } from 'react-i18next'

export default function PrivateEvents() {
  const [user, setUser] = useState(null)
  const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'))
  const navigate = useNavigate()
  const { t } = useTranslation()

  useEffect(() => {
    const checkAuth = async () => {
      if (isAuthenticated()) {
        const currentUser = getCurrentUser()
        setUser(currentUser)
      } else {
        navigate('/login')
      }
    }
    checkAuth()
  }, [navigate])

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'))
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  if (!user) {
    return null
  }

  return (
    <div className={isDark ? 'bg-gray-900 text-white transition-colors' : 'bg-white text-black transition-colors'}>
      <Navbar user={user} />

      {/* Showcase */}
      <section
        id="showcase"
        className={
          'relative overflow-hidden h-screen flex items-center justify-center text-center ' +
          (isDark ? '' : '')
        }
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <ScrollAnimation>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              {t('privateEventsPage.showcase.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              {t('privateEventsPage.showcase.subtitle')}
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              {t('privateEventsPage.showcase.connectButton')}
            </button>
          </ScrollAnimation>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {t('privateEventsPage.hero.tagline')}
              </h2>
              <h3 className="text-3xl md:text-4xl font-semibold mb-6">
                {t('privateEventsPage.hero.title')}
              </h3>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                {t('privateEventsPage.hero.description')}
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                {t('privateEventsPage.services.title')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12">
                {t('privateEventsPage.services.description')}
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation>
              <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">
                  {t('privateEventsPage.services.features.customCatering.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('privateEventsPage.services.features.customCatering.description')}
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation>
              <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">
                  {t('privateEventsPage.services.features.eventPlanning.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('privateEventsPage.services.features.eventPlanning.description')}
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation>
              <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">
                  {t('privateEventsPage.services.features.venueOptions.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('privateEventsPage.services.features.venueOptions.description')}
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold mb-6">
              {t('privateEventsPage.cta.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {t('privateEventsPage.cta.subtitle')}
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              {t('privateEventsPage.cta.planEventButton')}
            </button>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  )
}
