import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, logoutUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
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
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <source src="/Services R.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>

        {/* Dynamic Overlay */}
        <motion.div 
          className={`absolute inset-0 ${isDark ? 'bg-black/70' : 'bg-black/60'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6 whitespace-nowrap" style={{ fontFamily: 'serif' }}>
              {t('servicesPage.hero.titleLine1')} {t('servicesPage.hero.titleLine2')}
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto mb-8 whitespace-nowrap">
              {t('servicesPage.hero.description')}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <div className="mt-8 flex gap-6 justify-center items-center flex-wrap">
              <motion.a
                href="#services"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {t('servicesPage.hero.ctaExplore')}
              </motion.a>
              <motion.a
                href="/contact"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 font-bold text-lg rounded-lg transition-all duration-300"
              >
                {t('servicesPage.hero.ctaBook')}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Property Listings */}
<section
      ref={servicesSectionRef}
      id="services"
      className={isDark ? 'py-24 bg-gray-900' : 'py-24 bg-white'}
    >        
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="text-red-500 text-sm font-semibold tracking-wider uppercase"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ scale: 1.1 }}
            >
              {t('servicesPage.properties.badge')}
            </motion.span>
            <motion.h2 
              className={isDark ? 'text-5xl font-bold text-white mt-4 mb-6' : 'text-5xl font-bold text-black mt-4 mb-6'}
              style={{ fontFamily: 'serif' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              {t('servicesPage.properties.title')}
            </motion.h2>
            <motion.p 
              className={isDark ? 'text-xl text-gray-300 max-w-3xl mx-auto' : 'text-xl text-gray-600 max-w-3xl mx-auto'}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              {t('servicesPage.properties.subtitle')}
            </motion.p>
          </motion.div>

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
              <motion.div
                key={property.key}
                className={isDark ? 'break-inside-avoid bg-gray-800 rounded-2xl shadow-lg overflow-hidden group' : 'break-inside-avoid bg-white rounded-2xl shadow-lg overflow-hidden group'}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
                }}
              >
                <motion.div 
                  className="relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={property.image}
                    alt={t(`servicesPage.properties.items.${property.key}.title`)}
                    className="w-full h-48 object-cover"
                  />
                  <motion.div 
                    className="absolute top-4 left-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 + 0.2 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {t(`servicesPage.properties.items.${property.key}.category`)}
                    </span>
                  </motion.div>
                  <motion.div 
                    className="absolute top-4 right-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 + 0.3 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="bg-white/90 text-black px-3 py-1 rounded-full text-sm font-bold">
                      {property.price}
                    </span>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 + 0.4 }}
                >
                  <motion.h3 
                    className={isDark ? 'text-xl font-bold text-white mb-2' : 'text-xl font-bold text-black mb-2'}
                    whileHover={{ color: "#dc2626" }}
                    transition={{ duration: 0.2 }}
                  >
                    {t(`servicesPage.properties.items.${property.key}.title`)}
                  </motion.h3>
                  <motion.p 
                    className={isDark ? 'text-gray-300 mb-4 text-sm' : 'text-gray-600 mb-4 text-sm'}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 + 0.5 }}
                  >
                    📍 {property.location}
                  </motion.p>
                  
                  <motion.div 
                    className="flex justify-between items-center mb-4"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 + 0.6 }}
                  >
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
                  </motion.div>
                  
                  <motion.button
                    onClick={() => {
                      if (property.key === 'luxuryVilla') {
                        navigate('/luxury-villa')
                      } else if (property.key === 'estateHome') {
                        navigate('/estate-home')
                      } else {
                        navigate('/contact')
                      }
                    }}
                    className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 + 0.7 }}
                  >
                    {(property.key === 'luxuryVilla' || property.key === 'estateHome') ? 'View Details' : t('servicesPage.common.viewDetails')}
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className={isDark ? 'py-24 bg-gray-50' : 'py-24 bg-gray-50'}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12 items-start">
            {/* Left Side - Title Section */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                <motion.span 
                  className="text-gray-500 text-sm font-semibold tracking-wider uppercase"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {t('servicesPage.testimonials.badge')}
                </motion.span>
                <motion.h2 
                  className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
                  style={{ fontFamily: 'serif' }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {t('servicesPage.testimonials.title')}
                </motion.h2>
                <motion.p 
                  className="text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ y: -5 }}
                >
                  {t('servicesPage.testimonials.subtitle')}
                </motion.p>
                {/* Red underline decoration */}
                <motion.div 
                  className="w-20 h-1 bg-red-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ width: 100 }}
                ></motion.div>
              </div>
            </motion.div>

            {/* Right Side - Testimonial Cards */}
            <motion.div 
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid md:grid-cols-3 gap-6">
                {(() => {
                  const testimonialImages = [
                    "/images/T1R.jpeg",
                    "/images/T2R.jpeg",
                    "/images/T3R.jpeg"
                  ]
                  const testimonials = t('servicesPage.testimonials.items', { returnObjects: true })
                  return testimonials.map((testimonial, idx) => ({ ...testimonial, image: testimonialImages[idx] }))
                })().map((testimonial, idx) => (
                  <motion.div
                    key={testimonial.name}
                    className="bg-white rounded-xl p-6 shadow-md group"
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                    whileHover={{ 
                      y: -10,
                      scale: 1.02,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
                    }}
                  >
                    {/* Profile Image and Info */}
                    <motion.div 
                      className="flex items-center gap-3 mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                    >
                      <motion.img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      />
                      <div>
                        <motion.h4 
                          className="font-bold text-gray-900"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {testimonial.name}
                        </motion.h4>
                        <motion.p 
                          className="text-gray-500 text-sm"
                          initial={{ opacity: 0.7 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {testimonial.role}
                        </motion.p>
                      </div>
                    </motion.div>
                    
                    {/* Testimonial Text */}
                    <motion.p 
                      className="text-gray-600 leading-relaxed text-sm"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                    >
                      {testimonial.text}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Property Gallery */}
      <section className={isDark ? 'py-24 bg-gray-900' : 'py-24 bg-white'}>
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="text-red-500 text-sm font-semibold tracking-wider uppercase"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ scale: 1.1 }}
            >
              {t('servicesPage.gallery.badge')}
            </motion.span>
            <motion.h2 
              className={isDark ? 'text-5xl font-bold text-white mt-4 mb-6' : 'text-5xl font-bold text-black mt-4 mb-6'}
              style={{ fontFamily: 'serif' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              {t('servicesPage.gallery.title')}
            </motion.h2>
            <motion.p 
              className={isDark ? 'text-xl text-gray-300 max-w-3xl mx-auto' : 'text-xl text-gray-600 max-w-3xl mx-auto'}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              {t('servicesPage.gallery.subtitle')}
            </motion.p>
          </motion.div>

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
              <motion.div 
                key={idx} 
                className="relative group overflow-hidden rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
                }}
              >
                <motion.img
                  src={src}
                  alt={t('servicesPage.gallery.alt')}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-black/0"
                  whileHover={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute bottom-4 left-4 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h3 
                    className="font-bold text-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    {t('servicesPage.gallery.propertyTitle', { number: idx + 1 })}
                  </motion.h3>
                  <motion.p 
                    className="text-sm text-red-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {t('servicesPage.gallery.propertyPrice')}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={isDark ? 'py-24 bg-gray-900' : 'py-24 bg-white'}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Images with Overlap */}
            <motion.div 
              className="relative h-[600px]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Top Large Image */}
              <motion.div 
                className="absolute top-0 left-0 w-[70%] h-[55%] overflow-hidden rounded-2xl shadow-xl z-10"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <img
                  src="/images/Modern Penthouse.jpg"
                  alt="Modern Architecture"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Bottom Right Overlapping Image */}
              <motion.div 
                className="absolute bottom-0 right-0 w-[65%] h-[55%] overflow-hidden rounded-2xl shadow-xl z-20"
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05, rotate: -2 }}
              >
                <img
                  src="/images/Luxury Villa.jpg"
                  alt="Luxury Property"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Header */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.span 
                  className="text-gray-500 text-sm font-semibold tracking-wider uppercase"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {t('servicesPage.whyChooseUs.badge')}
                </motion.span>
                <motion.h2 
                  className={isDark ? 'text-4xl md:text-5xl font-bold text-white leading-tight' : 'text-4xl md:text-5xl font-bold text-gray-900 leading-tight'}
                  style={{ fontFamily: 'serif' }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {t('servicesPage.whyChooseUs.title')}
                </motion.h2>
                <motion.p 
                  className={isDark ? 'text-gray-300 leading-relaxed' : 'text-gray-600 leading-relaxed'}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  whileHover={{ y: -5 }}
                >
                  {t('servicesPage.whyChooseUs.subtitle')}
                </motion.p>
              </motion.div>

              {/* Feature Boxes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Market Expertise Feature */}
                <motion.div 
                  className="space-y-3"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </motion.div>
                    <motion.h3 
                      className={isDark ? 'text-xl font-bold text-white' : 'text-xl font-bold text-gray-900'}
                      whileHover={{ scale: 1.05 }}
                    >
                      {t('servicesPage.features.marketExpertise.title')}
                    </motion.h3>
                  </motion.div>
                  <motion.p 
                    className={isDark ? 'text-gray-400 text-sm' : 'text-gray-600 text-sm'}
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {t('servicesPage.features.marketExpertise.description')}
                  </motion.p>
                </motion.div>

                {/* Professional Network Feature */}
                <motion.div 
                  className="space-y-3"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </motion.div>
                    <motion.h3 
                      className={isDark ? 'text-xl font-bold text-white' : 'text-xl font-bold text-gray-900'}
                      whileHover={{ scale: 1.05 }}
                    >
                      {t('servicesPage.features.professionalNetwork.title')}
                    </motion.h3>
                  </motion.div>
                  <motion.p 
                    className={isDark ? 'text-gray-400 text-sm' : 'text-gray-600 text-sm'}
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {t('servicesPage.features.professionalNetwork.description')}
                  </motion.p>
                </motion.div>

                {/* Personalized Service Feature */}
                <motion.div 
                  className="space-y-3"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </motion.div>
                    <motion.h3 
                      className={isDark ? 'text-xl font-bold text-white' : 'text-xl font-bold text-gray-900'}
                      whileHover={{ scale: 1.05 }}
                    >
                      {t('servicesPage.features.personalizedService.title')}
                    </motion.h3>
                  </motion.div>
                  <motion.p 
                    className={isDark ? 'text-gray-400 text-sm' : 'text-gray-600 text-sm'}
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {t('servicesPage.features.personalizedService.description')}
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      

      {/* Our Office Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/67SCTA.jpg')`
          }}
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        ></motion.div>
        
        {/* Overlay */}
        <motion.div 
          className="absolute inset-0 bg-black/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        ></motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.span 
                  className="text-red-500 text-sm font-semibold tracking-wider uppercase"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {t('servicesPage.office.badge')}
                </motion.span>
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold uppercase text-white"
                  style={{ fontFamily: 'serif' }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                >
                    {t('servicesPage.office.title')}
                </motion.h2>
                <motion.h3 
                  className="text-xl md:text-2xl text-red-400 font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                    {t('servicesPage.office.subtitle')}
                </motion.h3>
              </motion.div>
              
              <motion.p 
                className="text-lg leading-relaxed text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ y: -5 }}
              >
                  {t('servicesPage.office.description')}
              </motion.p>
              
              <motion.a
                  href="/contact"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mt-8 inline-block"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                >
{t('servicesPage.office.ctaReserve')}
              </motion.a>
            </motion.div>

            {/* Right Side - Office Hours */}
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
              }}
            >
              <motion.h3 
                className="text-2xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                {t('servicesPage.office.hoursTitle')}
              </motion.h3>
                <div className="space-y-4">
                  {t('servicesPage.office.hours', { returnObjects: true }).map((schedule, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex justify-between items-center py-3 border-b border-white/20 last:border-b-0"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.span 
                      className="font-medium text-white"
                      whileHover={{ scale: 1.05 }}
                    >
                      {schedule.day}
                    </motion.span>
                    <motion.span 
                      className="text-gray-200"
                      whileHover={{ scale: 1.05 }}
                    >
                      {schedule.hours}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


