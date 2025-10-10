import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, logoutUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollAnimation from '../components/ScrollAnimation'
import { useTranslation } from 'react-i18next'

export default function Services() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login', { replace: true })
    }
    // Theme detection
    const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'))
    checkDark()
    const observer = new MutationObserver(checkDark)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [navigate])

  // Smooth scroll to section if hash is present
  useEffect(() => {
    const { hash } = window.location
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 0)
      }
    }
  }, [])

  const user = getCurrentUser()
  const capabilities = [
    { key: 'marketAnalysis', title: t('servicesPage.capabilities.marketAnalysis.title'), points: t('servicesPage.capabilities.marketAnalysis.points', { returnObjects: true }) },
    { key: 'transactionManagement', title: t('servicesPage.capabilities.transactionManagement.title'), points: t('servicesPage.capabilities.transactionManagement.points', { returnObjects: true }) },
    { key: 'propertyMarketing', title: t('servicesPage.capabilities.propertyMarketing.title'), points: t('servicesPage.capabilities.propertyMarketing.points', { returnObjects: true }) },
    { key: 'clientServices', title: t('servicesPage.capabilities.clientServices.title'), points: t('servicesPage.capabilities.clientServices.points', { returnObjects: true }) },
    { key: 'investmentAdvisory', title: t('servicesPage.capabilities.investmentAdvisory.title'), points: t('servicesPage.capabilities.investmentAdvisory.points', { returnObjects: true }) },
    { key: 'propertyManagement', title: t('servicesPage.capabilities.propertyManagement.title'), points: t('servicesPage.capabilities.propertyManagement.points', { returnObjects: true }) }
  ]
  const [activeCapability, setActiveCapability] = useState(capabilities[0])
  const [activeIndex, setActiveIndex] = useState(0)
  const [isWheelHovered, setIsWheelHovered] = useState(false)
  const servicesSectionRef = useRef(null)

  // Auto-cycle active capability when not hovered
  useEffect(() => {
    if (isWheelHovered) return
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % capabilities.length)
    }, 2200)
    return () => clearInterval(id)
  }, [isWheelHovered, capabilities.length])

  // Sync capability text with active index
  useEffect(() => {
    setActiveCapability(capabilities[activeIndex])
  }, [activeIndex])


  function handleLogout() {
    logoutUser()
    navigate('/login', { replace: true })
  }
  const benefits = t('servicesPage.benefits', { returnObjects: true })

  return (
    <div className={isDark ? 'bg-gray-900 text-white transition-colors' : 'bg-white text-black transition-colors'}>
      <Navbar user={user} />

      {/* Hero Section */}
      <section className="relative overflow-hidden h-screen flex items-center justify-center text-center bg-black">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Services R.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dynamic Overlay */}
        <div className={`absolute inset-0 ${isDark ? 'bg-black/70' : 'bg-black/60'}`}></div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-4xl">
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6 whitespace-nowrap" style={{ fontFamily: 'serif' }}>
              {t('servicesPage.hero.titleLine1')} {t('servicesPage.hero.titleLine2')}
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
            <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto mb-8 whitespace-nowrap">
              {t('servicesPage.hero.description')}
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
            <div className="mt-8 flex gap-6 justify-center items-center flex-wrap">
              <a
                href="#services"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {t('servicesPage.hero.ctaExplore')}
              </a>
              <a
                href="/contact"
                className="bg-transparent text-white px-8 py-4 font-bold text-lg border-2 border-white rounded-lg transition-all duration-300 hover:bg-white hover:text-black"
              >
                {t('servicesPage.hero.ctaBook')}
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Property Listings */}
<section
      ref={servicesSectionRef}
      id="services"
      className={isDark ? 'py-24 bg-gray-900' : 'py-24 bg-white'}
    >        
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-red-500 text-sm font-semibold tracking-wider uppercase">{t('servicesPage.properties.badge')}</span>
            <h2 className={isDark ? 'text-5xl font-bold text-white mt-4 mb-6' : 'text-5xl font-bold text-black mt-4 mb-6'}>
              {t('servicesPage.properties.title')}
            </h2>
            <p className={isDark ? 'text-xl text-gray-300 max-w-3xl mx-auto' : 'text-xl text-gray-600 max-w-3xl mx-auto'}>
              {t('servicesPage.properties.subtitle')}
            </p>
          </div>

          {/* Property Listings Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {[
              { 
                key: 'luxuryVilla',
                image: '/images/Luxury Villa.jpg',
                price: '$2,500,000',
                location: 'Beverly Hills, CA',
                bedrooms: 5,
                bathrooms: 6,
                sqft: '4,200'
              },
              { 
                key: 'penthouse',
                image: '/images/Modern Penthouse.jpg',
                price: '$3,800,000',
                location: 'Manhattan, NY',
                bedrooms: 4,
                bathrooms: 5,
                sqft: '3,500'
              },
              { 
                key: 'modernTownhouse',
                image: '/images/Contemporary Townhouse.jpg',
                price: '$1,200,000',
                location: 'Brooklyn, NY',
                bedrooms: 3,
                bathrooms: 3,
                sqft: '2,800'
              },
              { 
                key: 'waterfrontMansion',
                image: '/images/Waterfront Mansion.jpg',
                price: '$5,500,000',
                location: 'Miami Beach, FL',
                bedrooms: 7,
                bathrooms: 8,
                sqft: '6,500'
              },
              { 
                key: 'luxuryCondo',
                image: '/images/Luxury Condo.jpg',
                price: '$950,000',
                location: 'Downtown LA, CA',
                bedrooms: 2,
                bathrooms: 2,
                sqft: '1,800'
              },
              { 
                key: 'estateHome',
                image: '/images/Estate Home.jpg',
                price: '$4,200,000',
                location: 'Hamptons, NY',
                bedrooms: 6,
                bathrooms: 7,
                sqft: '5,200'
              },
            ].map((property, idx) => (
              <div
                key={property.key}
                className={isDark ? 'break-inside-avoid bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group' : 'break-inside-avoid bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group'}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={property.image}
                    alt={t(`servicesPage.properties.items.${property.key}.title`)}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {t(`servicesPage.properties.items.${property.key}.category`)}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-black px-3 py-1 rounded-full text-sm font-bold">
                      {property.price}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className={isDark ? 'text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300' : 'text-xl font-bold text-black mb-2 group-hover:text-red-600 transition-colors duration-300'}>
                    {t(`servicesPage.properties.items.${property.key}.title`)}
                  </h3>
                  <p className={isDark ? 'text-gray-300 mb-4 text-sm' : 'text-gray-600 mb-4 text-sm'}>
                    📍 {property.location}
                  </p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-4 text-sm">
                      <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                        🛏️ {property.bedrooms} bed
                      </span>
                      <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                        🚿 {property.bathrooms} bath
                      </span>
                      <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                        📐 {property.sqft} sqft
                      </span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => {
                      if (property.key === 'luxuryVilla') {
                        navigate('/luxury-villa')
                      } else if (property.key === 'estateHome') {
                        navigate('/estate-home')
                      } else {
                        navigate('/contact')
                      }
                    }}
                    className={isDark ? 'w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300' : 'w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300'}
                  >
                    {(property.key === 'luxuryVilla' || property.key === 'estateHome') ? 'View Details' : t('servicesPage.common.viewDetails')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className={isDark ? 'py-24 bg-gray-900' : 'py-24 bg-gray-50'}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-red-500 text-sm font-semibold tracking-wider uppercase">{t('servicesPage.testimonials.badge')}</span>
            <h2 className={isDark ? 'text-5xl font-bold text-white mt-4 mb-6' : 'text-5xl font-bold text-black mt-4 mb-6'}>
              {t('servicesPage.testimonials.title')}
            </h2>
            <p className={isDark ? 'text-xl text-gray-300 max-w-3xl mx-auto' : 'text-xl text-gray-600 max-w-3xl mx-auto'}>
              {t('servicesPage.testimonials.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(() => {
              const testimonialImages = [
                "/images/T1R.jpeg",
                "/images/T2R.jpeg",
                "/images/T3R.jpeg"
              ]
              const testimonials = t('servicesPage.testimonials.items', { returnObjects: true })
              return testimonials.map((testimonial, idx) => ({ ...testimonial, image: testimonialImages[idx] }))
            })().map((testimonial, idx) => (
              <div
                key={testimonial.name}
                className={isDark ? 'bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300' : 'bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300'}
                style={{ animationDelay: `${idx * 200}ms` }}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className={isDark ? 'font-bold text-white' : 'font-bold text-black'}>{testimonial.name}</h4>
                    <p className={isDark ? 'text-gray-300 text-sm' : 'text-gray-600 text-sm'}>{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className={isDark ? 'text-gray-300 leading-relaxed italic' : 'text-gray-600 leading-relaxed italic'}>
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Gallery */}
      <section className={isDark ? 'py-24 bg-gray-900' : 'py-24 bg-white'}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-red-500 text-sm font-semibold tracking-wider uppercase">{t('servicesPage.gallery.badge')}</span>
            <h2 className={isDark ? 'text-5xl font-bold text-white mt-4 mb-6' : 'text-5xl font-bold text-black mt-4 mb-6'}>{t('servicesPage.gallery.title')}</h2>
            <p className={isDark ? 'text-xl text-gray-300 max-w-3xl mx-auto' : 'text-xl text-gray-600 max-w-3xl mx-auto'}>
              {t('servicesPage.gallery.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/images/L1.jpg',
              '/images/L2.jpg',
              '/images/L3.jpg',
              '/images/L4.jpg',
              '/images/L5.jpg',
              '/images/L6.jpg',
              '/images/L7.jpg',
              '/images/L8.jpg'
            ].map((src, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={src}
                  alt={t('servicesPage.gallery.alt')}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-bold text-lg">{t('servicesPage.gallery.propertyTitle', { number: idx + 1 })}</h3>
                  <p className="text-sm text-red-300">{t('servicesPage.gallery.propertyPrice')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={isDark ? 'py-24 bg-gray-900' : 'py-24 bg-white'}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-red-500 text-sm font-semibold tracking-wider uppercase">{t('servicesPage.whyChooseUs.badge')}</span>
            <h2 className={isDark ? 'text-5xl font-bold text-white mt-4 mb-6' : 'text-5xl font-bold text-black mt-4 mb-6'}>
              {t('servicesPage.whyChooseUs.title')}
            </h2>
            <p className={isDark ? 'text-xl text-gray-300 max-w-3xl mx-auto' : 'text-xl text-gray-600 max-w-3xl mx-auto'}>
              {t('servicesPage.whyChooseUs.subtitle')}
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <div className={isDark ? 'bg-gray-800 rounded-2xl p-8' : 'bg-gray-50 rounded-2xl p-8'}>
                <div className="text-red-600 text-4xl font-bold mb-2">500+</div>
                <div className={isDark ? 'text-white font-semibold text-lg' : 'text-black font-semibold text-lg'}>{t('servicesPage.stats.propertiesSold')}</div>
                <div className={isDark ? 'text-gray-400 text-sm mt-2' : 'text-gray-600 text-sm mt-2'}>{t('servicesPage.stats.propertiesSoldDesc')}</div>
              </div>
            </div>
            <div className="text-center">
              <div className={isDark ? 'bg-gray-800 rounded-2xl p-8' : 'bg-gray-50 rounded-2xl p-8'}>
                <div className="text-red-600 text-4xl font-bold mb-2">$2.5B+</div>
                <div className={isDark ? 'text-white font-semibold text-lg' : 'text-black font-semibold text-lg'}>{t('servicesPage.stats.totalSales')}</div>
                <div className={isDark ? 'text-gray-400 text-sm mt-2' : 'text-gray-600 text-sm mt-2'}>{t('servicesPage.stats.totalSalesDesc')}</div>
              </div>
            </div>
            <div className="text-center">
              <div className={isDark ? 'bg-gray-800 rounded-2xl p-8' : 'bg-gray-50 rounded-2xl p-8'}>
                <div className="text-red-600 text-4xl font-bold mb-2">15+</div>
                <div className={isDark ? 'text-white font-semibold text-lg' : 'text-black font-semibold text-lg'}>{t('servicesPage.stats.yearsExperience')}</div>
                <div className={isDark ? 'text-gray-400 text-sm mt-2' : 'text-gray-600 text-sm mt-2'}>{t('servicesPage.stats.yearsExperienceDesc')}</div>
              </div>
            </div>
            <div className="text-center">
              <div className={isDark ? 'bg-gray-800 rounded-2xl p-8' : 'bg-gray-50 rounded-2xl p-8'}>
                <div className="text-red-600 text-4xl font-bold mb-2">98%</div>
                <div className={isDark ? 'text-white font-semibold text-lg' : 'text-black font-semibold text-lg'}>{t('servicesPage.stats.clientSatisfaction')}</div>
                <div className={isDark ? 'text-gray-400 text-sm mt-2' : 'text-gray-600 text-sm mt-2'}>{t('servicesPage.stats.clientSatisfactionDesc')}</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Market Expertise */}
            <div className={isDark ? 'bg-gray-800 rounded-2xl p-8 hover:shadow-red-500/20 transition-all duration-300' : 'bg-white rounded-2xl p-8 hover:shadow-red-500/20 transition-all duration-300'}>
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className={isDark ? 'text-xl font-bold text-white mb-4' : 'text-xl font-bold text-black mb-4'}>{t('servicesPage.features.marketExpertise.title')}</h3>
              <p className={isDark ? 'text-gray-300 leading-relaxed' : 'text-gray-600 leading-relaxed'}>
                {t('servicesPage.features.marketExpertise.description')}
              </p>
            </div>

            {/* Professional Network */}
            <div className={isDark ? 'bg-gray-800 rounded-2xl p-8 hover:shadow-red-500/20 transition-all duration-300' : 'bg-white rounded-2xl p-8 hover:shadow-red-500/20 transition-all duration-300'}>
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className={isDark ? 'text-xl font-bold text-white mb-4' : 'text-xl font-bold text-black mb-4'}>{t('servicesPage.features.professionalNetwork.title')}</h3>
              <p className={isDark ? 'text-gray-300 leading-relaxed' : 'text-gray-600 leading-relaxed'}>
                {t('servicesPage.features.professionalNetwork.description')}
              </p>
            </div>

            {/* Personalized Service */}
            <div className={isDark ? 'bg-gray-800 rounded-2xl p-8 hover:shadow-red-500/20 transition-all duration-300' : 'bg-white rounded-2xl p-8 hover:shadow-red-500/20 transition-all duration-300'}>
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className={isDark ? 'text-xl font-bold text-white mb-4' : 'text-xl font-bold text-black mb-4'}>{t('servicesPage.features.personalizedService.title')}</h3>
              <p className={isDark ? 'text-gray-300 leading-relaxed' : 'text-gray-600 leading-relaxed'}>
                {t('servicesPage.features.personalizedService.description')}
              </p>
            </div>

            {/* Technology Advantage */}
            <div className={isDark ? 'bg-gray-800 rounded-2xl p-8 hover:shadow-red-500/20 transition-all duration-300' : 'bg-white rounded-2xl p-8 hover:shadow-red-500/20 transition-all duration-300'}>
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className={isDark ? 'text-xl font-bold text-white mb-4' : 'text-xl font-bold text-black mb-4'}>{t('servicesPage.features.technologyAdvantage.title')}</h3>
              <p className={isDark ? 'text-gray-300 leading-relaxed' : 'text-gray-600 leading-relaxed'}>
                {t('servicesPage.features.technologyAdvantage.description')}
              </p>
            </div>

            {/* Negotiation Skills */}
            <div className={isDark ? 'bg-gray-800 rounded-2xl p-8 hover:shadow-red-500/20 transition-all duration-300' : 'bg-white rounded-2xl p-8 hover:shadow-red-500/20 transition-all duration-300'}>
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className={isDark ? 'text-xl font-bold text-white mb-4' : 'text-xl font-bold text-black mb-4'}>{t('servicesPage.features.expertNegotiation.title')}</h3>
              <p className={isDark ? 'text-gray-300 leading-relaxed' : 'text-gray-600 leading-relaxed'}>
                {t('servicesPage.features.expertNegotiation.description')}
              </p>
            </div>

            {/* 24/7 Support */}
            <div className={isDark ? 'bg-gray-800 rounded-2xl p-8 hover:shadow-red-500/20 transition-all duration-300' : 'bg-white rounded-2xl p-8 hover:shadow-red-500/20 transition-all duration-300'}>
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className={isDark ? 'text-xl font-bold text-white mb-4' : 'text-xl font-bold text-black mb-4'}>{t('servicesPage.features.support24.title')}</h3>
              <p className={isDark ? 'text-gray-300 leading-relaxed' : 'text-gray-600 leading-relaxed'}>
                {t('servicesPage.features.support24.description')}
              </p>
            </div>
          </div>

        </div>
      </section>

      

      {/* Our Office Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <ScrollAnimation animation="slide-in-left" stagger="scroll-stagger-1">
                <div className="space-y-4">
                  <span className="text-red-500 text-sm font-semibold tracking-wider uppercase">{t('servicesPage.office.badge')}</span>
                  <h2 className={`text-3xl md:text-4xl font-bold uppercase ${isDark ? 'text-white' : 'text-black'}`}>
                    {t('servicesPage.office.title')}
                  </h2>
                  <h3 className="text-xl md:text-2xl text-red-600 font-semibold">
                    {t('servicesPage.office.subtitle')}
                  </h3>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="slide-in-left" stagger="scroll-stagger-2">
                <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-black'}`}>
                  {t('servicesPage.office.description')}
                </p>
              </ScrollAnimation>
              
              <ScrollAnimation animation="slide-in-left" stagger="scroll-stagger-3">
                <a
                  href="/contact"
                  className="btn-animate-strong rounded-lg px-8 py-4 font-bold text-lg transition-all duration-300 bg-red-500 text-white hover:bg-red-600 shadow-lg hover:shadow-xl mt-8 inline-block"
                >
{t('servicesPage.office.ctaReserve')}
                </a>
              </ScrollAnimation>
            </div>

            {/* Right Side - Office Hours */}
            <ScrollAnimation animation="slide-in-right" stagger="scroll-stagger-1">
              <div className={`${isDark ? 'bg-gray-800 rounded-2xl p-8' : 'bg-gray-50 rounded-2xl p-8'}`}>
                <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>{t('servicesPage.office.hoursTitle')}</h3>
                <div className="space-y-4">
                  {t('servicesPage.office.hours', { returnObjects: true }).map((schedule, idx) => (
                    <div key={idx} className={`flex justify-between items-center py-3 border-b ${isDark ? 'border-gray-700 last:border-b-0' : 'border-gray-200 last:border-b-0'}`}>
                      <span className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>{schedule.day}</span>
                      <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


