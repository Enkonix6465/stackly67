import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next'

export default function BlogPost2() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'))
    checkDark()
    const observer = new MutationObserver(checkDark)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login', { replace: true })
    }
  }, [navigate])

  const user = getCurrentUser()

  return (
    <div
      className={`transition-colors duration-500 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Navbar user={user} />

      {/* Hero Section */}
      <section 
        className="relative text-white"
        style={{
          backgroundImage: "url('/images/RB3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative mx-auto max-w-6xl px-4 py-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">{t('blogPost2.hero.category')}</span>
              <span className="text-white/80">•</span>
              <span className="text-white/80">{t('blogPost2.hero.readTime')}</span>
              <span className="text-white/80">•</span>
              <span className="text-white/80">{t('blogPost2.hero.date')}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('blogPost2.hero.title')}
            </h1>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-red-600 font-bold">
                MR
              </div>
              <div>
                <p className="font-semibold">{t('blogPost2.hero.author')}</p>
                <p className="text-white/80 text-sm">{t('blogPost2.hero.authorRole')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Navigation Section */}
      <section className={`py-8 ${isDark ? 'bg-gray-800' : 'bg-gray-50'} border-b border-gray-200 dark:border-gray-700`}>
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Explore Real Estate Topics */}
            <div className="flex items-center gap-4">
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Explore Real Estate Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Investment Properties', 'Market Analysis', 'Property Management', 'Commercial Real Estate', 'Luxury Homes'].map((topic, index) => (
                  <button
                    key={index}
                    className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-sm rounded-full hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                    onClick={() => navigate('/blog')}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Investment Quick Links */}
            <div className="flex items-center gap-4">
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Investment Tools
              </h3>
              <div className="flex gap-2">
                <button
                  className="px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors"
                  onClick={() => navigate('/contact')}
                >
                  Get Market Analysis
                </button>
                <button
                  className="px-4 py-2 border border-red-600 text-red-600 dark:text-red-400 text-sm rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                  onClick={() => navigate('/services')}
                >
                  View Properties
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none dark:prose-invert">
                <img
                  src="/images/RB4.jpg"
                  alt="Real Estate Investment Strategy"
                  className="w-full h-64 object-cover rounded-xl mb-8"
                />
                
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  {t('blogPost2.content.intro')}
                </p>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t('blogPost2.content.section1.title')}
                </h2>
                <p className="mb-6">
                  {t('blogPost2.content.section1.description')}
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  {t('blogPost2.content.section1.subtitle')}
                </h3>
                <ul className="mb-6 space-y-2">
                  {t('blogPost2.content.section1.fundamentals', { returnObjects: true }).map((fundamental, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-red-600 text-lg">✓</span>
                      <span><strong>{fundamental.name}:</strong> {fundamental.description}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t('blogPost2.content.section2.title')}
                </h2>
                <p className="mb-6">
                  {t('blogPost2.content.section2.description')}
                </p>

                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl mb-8">
                  <h4 className="font-semibold mb-3 text-red-600 dark:text-red-400">
                    {t('blogPost2.content.section2.subtitle')}
                  </h4>
                  <ul className="space-y-2 text-red-600 dark:text-red-400">
                    {t('blogPost2.content.section2.principles', { returnObjects: true }).map((principle, index) => (
                      <li key={index}>• {principle}</li>
                    ))}
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t('blogPost2.content.section3.title')}
                </h2>
                <p className="mb-6">
                  {t('blogPost2.content.section3.description')}
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  {t('blogPost2.content.section3.subtitle')}
                </h3>
                <ul className="mb-8 space-y-2">
                  {t('blogPost2.content.section3.propertyTypes', { returnObjects: true }).map((property, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-red-600 text-lg">•</span>
                      <span><strong>{property.name}:</strong> {property.description}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t('blogPost2.content.section4.title')}
                </h2>
                <p className="mb-6">
                  {t('blogPost2.content.section4.description')}
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  {t('blogPost2.content.section4.subtitle')}
                </h3>
                <ul className="mb-8 space-y-2">
                  {t('blogPost2.content.section4.markets', { returnObjects: true }).map((market, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-red-600 text-lg">•</span>
                      <span><strong>{market.name}:</strong> {market.description}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t('blogPost2.content.section5.title')}
                </h2>
                <p className="mb-6">
                  {t('blogPost2.content.section5.description')}
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  {t('blogPost2.content.section5.subtitle')}
                </h3>
                <ul className="mb-8 space-y-2">
                  {t('blogPost2.content.section5.financing', { returnObjects: true }).map((option, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-red-600 text-lg">•</span>
                      <span><strong>{option.name}:</strong> {option.description}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t('blogPost2.content.section6.title')}
                </h2>
                <p className="mb-6">
                  {t('blogPost2.content.section6.description')}
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  {t('blogPost2.content.section6.subtitle')}
                </h3>
                <ul className="mb-8 space-y-2">
                  {t('blogPost2.content.section6.management', { returnObjects: true }).map((strategy, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-red-600 text-lg">•</span>
                      <span><strong>{strategy.name}:</strong> {strategy.description}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t('blogPost2.content.conclusion.title')}
                </h2>
                <p className="mb-8">
                  {t('blogPost2.content.conclusion.mainText')}
                </p>
              </article>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    MR
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t('blogPost2.author.name')}</h3>
                    <p className="text-red-600 font-medium mb-3">
                      {t('blogPost2.author.role')}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {t('blogPost2.author.bio')}
                    </p>
                    <div className="flex gap-2">
                      {t('blogPost2.author.expertise', { returnObjects: true }).map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-sm rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Related Posts */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-lg mb-4">{t('blogPost2.sidebar.relatedPosts')}</h3>
                <div className="space-y-4">
                  <div 
                    className="cursor-pointer group"
                    onClick={() => navigate('/blog')}
                  >
                    <h4 className="font-semibold group-hover:text-red-600 transition-colors">
                      {t('blogPost2.sidebar.post1.title')}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t('blogPost2.sidebar.post1.description')}
                    </p>
                  </div>
                  <div 
                    className="cursor-pointer group"
                    onClick={() => navigate('/blog')}
                  >
                    <h4 className="font-semibold group-hover:text-red-600 transition-colors">
                      {t('blogPost2.sidebar.post2.title')}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t('blogPost2.sidebar.post2.description')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Real Estate Expert Tips */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 mt-6">
                <h3 className="font-bold text-lg mb-4">{t('blogPost2.sidebar.expertTips')}</h3>
                <div className="space-y-3">
                  {t('blogPost2.sidebar.tips', { returnObjects: true }).map((tip, index) => (
                    <div key={index} className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <h4 className="font-semibold text-red-600 dark:text-red-400 text-sm mb-1">{tip.title}</h4>
                      <p className="text-xs text-red-600 dark:text-red-400">{tip.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Market Trends Quick Guide */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 mt-6">
                <h3 className="font-bold text-lg mb-4">{t('blogPost2.sidebar.marketTrends')}</h3>
                <div className="space-y-2">
                  {t('blogPost2.sidebar.trends', { returnObjects: true }).map((trend, index) => (
                    <div key={index} className={`flex justify-between items-center py-2 ${index < 4 ? 'border-b border-gray-200 dark:border-gray-600' : ''}`}>
                      <span className="text-sm font-medium">{trend.name}</span>
                      <span className="text-xs text-gray-500">{trend.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
