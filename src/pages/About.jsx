import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getCurrentUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function About() {
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

  const user = getCurrentUser()

  const agents = [
    { 
      name: t('aboutPage.team.agents.sarah.name'), 
      title: t('aboutPage.team.agents.sarah.title'), 
      experience: t('aboutPage.team.agents.sarah.experience'),
      specialties: t('aboutPage.team.agents.sarah.specialties', { returnObjects: true }),
      achievements: t('aboutPage.team.agents.sarah.achievements', { returnObjects: true }),
      image: '/images/RHT1.jpg',
      description: t('aboutPage.team.agents.sarah.description'),
      phone: t('aboutPage.team.agents.sarah.phone'),
      email: t('aboutPage.team.agents.sarah.email')
    },
    { 
      name: t('aboutPage.team.agents.michael.name'), 
      title: t('aboutPage.team.agents.michael.title'), 
      experience: t('aboutPage.team.agents.michael.experience'),
      specialties: t('aboutPage.team.agents.michael.specialties', { returnObjects: true }),
      achievements: t('aboutPage.team.agents.michael.achievements', { returnObjects: true }),
      image: '/images/RHT2.jpg',
      description: t('aboutPage.team.agents.michael.description'),
      phone: t('aboutPage.team.agents.michael.phone'),
      email: t('aboutPage.team.agents.michael.email')
    },
    { 
      name: t('aboutPage.team.agents.emma.name'), 
      title: t('aboutPage.team.agents.emma.title'), 
      experience: t('aboutPage.team.agents.emma.experience'),
      specialties: t('aboutPage.team.agents.emma.specialties', { returnObjects: true }),
      achievements: t('aboutPage.team.agents.emma.achievements', { returnObjects: true }),
      image: '/images/RHT3.jpg',
      description: t('aboutPage.team.agents.emma.description'),
      phone: t('aboutPage.team.agents.emma.phone'),
      email: t('aboutPage.team.agents.emma.email')
    }
  ]

  return (
    <div className={isDark ? 'bg-gray-900 text-white transition-colors' : 'bg-white text-black transition-colors'}>
      <Navbar user={user} />
      
      {/* Hero Section - Real Estate */}
      <section className="relative h-screen overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/ABOUT R.mp4" type="video/mp4" />
          </video>
          <motion.div 
            className='absolute inset-0 bg-black/70'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          ></motion.div>
        </motion.div>
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-6 max-w-4xl">
            
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6" style={{ fontFamily: 'serif' }}>
                {t('aboutPage.hero.title')}
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <p className="mt-2 text-xl text-white/90 max-w-3xl mx-auto mb-8">
                {t('aboutPage.hero.subtitle')}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button 
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {t('aboutPage.hero.exploreButton')}
                </motion.button>
                <motion.button 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 font-bold text-lg rounded-lg transition-all duration-300"
                >
                  {t('aboutPage.hero.browseButton')}
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
        
      </section>


      {/* Our Journey */}
      <section className={`py-24 ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        <div className="mx-auto max-w-7xl px-4">
          {/* Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="text-red-600 text-lg font-semibold tracking-wider mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ scale: 1.1 }}
            >
              {t('aboutPage.journey.tagline')}
            </motion.div>
            <motion.h2 
              className={`text-4xl md:text-5xl font-bold mb-8 ${isDark ? 'text-white' : 'text-black'}`} 
              style={{ fontFamily: 'serif' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
                {t('aboutPage.journey.title')}
            </motion.h2>
            <motion.p 
              className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
                {t('aboutPage.journey.subtitle')}
            </motion.p>
          </motion.div>
          
          {/* Journey Timeline */}
          <div className="relative">
            {/* Animated Timeline Line */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full overflow-hidden"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className={`w-full h-full ${isDark ? 'bg-gray-600' : 'bg-gray-300'} opacity-30`}></div>
              <motion.div 
                className={`absolute top-0 left-0 w-full bg-gradient-to-b from-red-500 to-red-600`}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeOut" }}
                style={{ transformOrigin: "top" }}
              ></motion.div>
            </motion.div>
            
            {/* Timeline Items */}
            <div className="space-y-16">
              {/* 2006 - Foundation */}
              <motion.div 
                className="flex items-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                  <div className="w-1/2 pr-8 text-right">
                  <motion.div 
                    className={`p-6 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'} shadow-lg border-l-4 border-red-500`}
                    whileHover={{ 
                      scale: 1.05,
                      y: -10,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="text-red-600 font-bold text-lg mb-2"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {t('aboutPage.journey.timeline.foundation.year')}
                    </motion.div>
                    <motion.h3 
                      className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-black'}`} 
                      style={{ fontFamily: 'serif' }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      whileHover={{ color: "#dc2626", x: 5 }}
                    >
                      {t('aboutPage.journey.timeline.foundation.title')}
                    </motion.h3>
                    <motion.p 
                      className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      whileHover={{ x: 10 }}
                    >
                        {t('aboutPage.journey.timeline.foundation.description')}
                    </motion.p>
                  </motion.div>
                  </div>
                  
                  {/* Animated Timeline Dot */}
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full border-4 border-white shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  whileHover={{ scale: 1.3 }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-red-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.75, 0, 0.75] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                </motion.div>
                  
                  <div className="w-1/2 pl-8">
                  <motion.img 
                      src="/images/ABOUTJ1.jpg" 
                      alt="Foundation year" 
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    />
                  </div>
              </motion.div>

              {/* 2012 - Expansion */}
              <motion.div 
                className="flex items-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                  <div className="w-1/2 pr-8">
                  <motion.img 
                      src="/images/property management meetings,.jpg" 
                      alt="Expansion phase" 
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{ scale: 1.1, rotate: -2 }}
                    />
                  </div>
                  
                  {/* Animated Timeline Dot */}
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full border-4 border-white shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  whileHover={{ scale: 1.3 }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-red-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.75, 0, 0.75] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                </motion.div>
                  
                  <div className="w-1/2 pl-8">
                  <motion.div 
                    className={`p-6 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'} shadow-lg border-r-4 border-red-500`}
                    whileHover={{ 
                      scale: 1.05,
                      y: -10,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="text-red-600 font-bold text-lg mb-2"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {t('aboutPage.journey.timeline.expansion.year')}
                    </motion.div>
                    <motion.h3 
                      className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-black'}`} 
                      style={{ fontFamily: 'serif' }}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.7 }}
                      whileHover={{ color: "#dc2626", x: -5 }}
                    >
                      {t('aboutPage.journey.timeline.expansion.title')}
                    </motion.h3>
                    <motion.p 
                      className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.8 }}
                      whileHover={{ x: -10 }}
                    >
                        {t('aboutPage.journey.timeline.expansion.description')}
                    </motion.p>
                  </motion.div>
                    </div>
              </motion.div>

              {/* 2018 - Innovation */}
              <motion.div 
                className="flex items-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                  <div className="w-1/2 pr-8 text-right">
                  <motion.div 
                    className={`p-6 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'} shadow-lg border-l-4 border-red-500`}
                    whileHover={{ 
                      scale: 1.05,
                      y: -10,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="text-red-600 font-bold text-lg mb-2"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {t('aboutPage.journey.timeline.innovation.year')}
                    </motion.div>
                    <motion.h3 
                      className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-black'}`} 
                      style={{ fontFamily: 'serif' }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      whileHover={{ color: "#dc2626", x: 5 }}
                    >
                      {t('aboutPage.journey.timeline.innovation.title')}
                    </motion.h3>
                    <motion.p 
                      className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.7 }}
                      whileHover={{ x: 10 }}
                    >
                        {t('aboutPage.journey.timeline.innovation.description')}
                    </motion.p>
                  </motion.div>
                  </div>
                  
                  {/* Animated Timeline Dot */}
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full border-4 border-white shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  whileHover={{ scale: 1.3 }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-red-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.75, 0, 0.75] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                </motion.div>
                  
                  <div className="w-1/2 pl-8">
                  <motion.img 
                      src="/images/futuristic smart homes.jpg" 
                      alt="Innovation era" 
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    />
                  </div>
              </motion.div>

              {/* 2024 - Excellence */}
              <motion.div 
                className="flex items-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                  <div className="w-1/2 pr-8">
                  <motion.img 
                      src="/images/Team.jpg" 
                      alt="Excellence today" 
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    whileHover={{ scale: 1.1, rotate: -2 }}
                    />
                  </div>
                  
                  {/* Animated Timeline Dot */}
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full border-4 border-white shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  whileHover={{ scale: 1.3 }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-red-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.75, 0, 0.75] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                </motion.div>
                  
                  <div className="w-1/2 pl-8">
                  <motion.div 
                    className={`p-6 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'} shadow-lg border-r-4 border-red-500`}
                    whileHover={{ 
                      scale: 1.05,
                      y: -10,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="text-red-600 font-bold text-lg mb-2"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.8 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {t('aboutPage.journey.timeline.excellence.year')}
                    </motion.div>
                    <motion.h3 
                      className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-black'}`} 
                      style={{ fontFamily: 'serif' }}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.9 }}
                      whileHover={{ color: "#dc2626", x: -5 }}
                    >
                      {t('aboutPage.journey.timeline.excellence.title')}
                    </motion.h3>
                    <motion.p 
                      className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 1.0 }}
                      whileHover={{ x: -10 }}
                    >
                        {t('aboutPage.journey.timeline.excellence.description')}
                    </motion.p>
                  </motion.div>
                    </div>
              </motion.div>
            </div>
          </div>

          {/* Enhanced Stats Section */}
          <motion.div 
            className="mt-20 grid md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {[
              { number: "18+", label: t('aboutPage.journey.stats.yearsExperience') },
              { number: "1000+", label: t('aboutPage.journey.stats.propertiesSold') },
              { number: "500+", label: t('aboutPage.journey.stats.happyClients') },
              { number: "50+", label: t('aboutPage.journey.stats.teamMembers') }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                className="text-center group"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 + idx * 0.1 }}
                whileHover={{ 
                  scale: 1.1,
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <motion.div 
                  className="text-4xl font-bold text-red-600 mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 + idx * 0.1 }}
                  whileHover={{ scale: 1.2, color: "#dc2626" }}
                >
                  {stat.number}
                </motion.div>
                <motion.div 
                  className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.9 + idx * 0.1 }}
                  whileHover={{ color: "#f87171" }}
                >
                  {stat.label}
                </motion.div>
                <motion.div 
                  className="w-16 h-1 bg-red-600 mx-auto mt-2"
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.0 + idx * 0.1 }}
                  whileHover={{ width: 96, backgroundColor: "#dc2626" }}
                ></motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision - New Template Layout */}
      <section className={`py-24 ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-50 text-black'}`}>
        <div className="mx-auto max-w-7xl px-4">
          <motion.div 
            className="grid lg:grid-cols-2 gap-0 items-stretch overflow-hidden rounded-2xl shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
              {/* Left Side - Image */}
            <motion.div 
              className="relative h-full min-h-[600px]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.img 
                  src="/images/ABOUTJ1.jpg" 
                  alt="Modern architecture" 
                  className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                />
            </motion.div>

              {/* Right Side - Mission and Vision Content */}
            <motion.div 
              className={`${isDark ? 'bg-gray-900' : 'bg-white'} p-12 lg:p-16 flex flex-col justify-center`}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
                {/* Mission Section */}
              <motion.div 
                className="mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold mb-6 text-red-600" 
                  style={{ fontFamily: 'serif' }}
                  whileHover={{ 
                    scale: 1.05,
                    color: "#dc2626",
                    x: 10
                  }}
                  transition={{ duration: 0.3 }}
                >
                    {t('aboutPage.foundation.mission.title')}
                </motion.h3>
                <motion.p 
                  className={`text-base md:text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                    {t('aboutPage.foundation.mission.description')}
                </motion.p>
              </motion.div>

                {/* Vision Section */}
              <motion.div 
                className="mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold mb-6 text-red-600" 
                  style={{ fontFamily: 'serif' }}
                  whileHover={{ 
                    scale: 1.05,
                    color: "#dc2626",
                    x: 10
                  }}
                  transition={{ duration: 0.3 }}
                >
                    {t('aboutPage.foundation.vision.title')}
                </motion.h3>
                <motion.p 
                  className={`text-base md:text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                    {t('aboutPage.foundation.vision.description')}
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Values Section */}
          <motion.div 
            id="values" 
            className="mt-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.h3 
                className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`} 
                style={{ fontFamily: 'serif' }}
                whileHover={{ scale: 1.05, color: "#dc2626" }}
                transition={{ duration: 0.3 }}
              >
                  {t('aboutPage.foundation.values.title')}
              </motion.h3>
              <motion.p 
                className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                  {t('aboutPage.foundation.values.subtitle')}
              </motion.p>
            </motion.div>
              
              <div className="grid md:grid-cols-3 gap-8">
                 {/* Integrity */}
              <motion.div 
                className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-2xl p-8 text-center shadow-lg group relative overflow-hidden`}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ 
                  y: -15,
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
                }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-600/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                   <div className="relative z-10">
                  <motion.div 
                    className="flex items-center justify-center mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotate: 6 }}
                    transition={{ duration: 0.3 }}
                  >
                       <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 48 48">
                         <g fill="none" strokeLinejoin="round" strokeWidth={4}>
                           <path fill="#2f88ff" stroke="#000" d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z"></path>
                           <path stroke="#fff" strokeLinecap="round" d="M16 24L22 30L34 18"></path>
                         </g>
                       </svg>
                  </motion.div>
                  <motion.h4 
                    className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}
                    whileHover={{ color: "#dc2626", scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {t('aboutPage.foundation.values.integrity.title')}
                  </motion.h4>
                  <motion.p 
                    className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}
                    whileHover={{ color: "#dc2626" }}
                    transition={{ duration: 0.3 }}
                  >
                      {t('aboutPage.foundation.values.integrity.description')}
                  </motion.p>
                  <motion.div 
                    className="h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mt-4"
                    initial={{ width: 0 }}
                    whileInView={{ width: 64 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{ width: 80 }}
                  ></motion.div>
                   </div>
              </motion.div>
                        
                 {/* Excellence */}
              <motion.div 
                className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-2xl p-8 text-center shadow-lg group relative overflow-hidden`}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ 
                  y: -15,
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
                }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-600/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                   <div className="relative z-10">
                  <motion.div 
                    className="flex items-center justify-center mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotate: 12 }}
                    transition={{ duration: 0.3 }}
                  >
                       <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 128 128">
                         <path fill="#fdd835" d="m68.05 7.23l13.46 30.7a7.05 7.05 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.03 7.03 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.05 7.05 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01"></path>
                         <path fill="#ffff8d" d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13"></path>
                         <path fill="#f4b400" d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97"></path>
                       </svg>
                  </motion.div>
                  <motion.h4 
                    className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}
                    whileHover={{ color: "#dc2626", scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {t('aboutPage.foundation.values.excellence.title')}
                  </motion.h4>
                  <motion.p 
                    className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}
                    whileHover={{ color: "#dc2626" }}
                    transition={{ duration: 0.3 }}
                  >
                      {t('aboutPage.foundation.values.excellence.description')}
                  </motion.p>
                  <motion.div 
                    className="h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mt-4"
                    initial={{ width: 0 }}
                    whileInView={{ width: 64 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    whileHover={{ width: 80 }}
                  ></motion.div>
                   </div>
              </motion.div>
                    
                 {/* Innovation */}
              <motion.div 
                className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-2xl p-8 text-center shadow-lg group relative overflow-hidden`}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ 
                  y: -15,
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
                }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-600/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                   <div className="relative z-10">
                  <motion.div 
                    className="flex items-center justify-center mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotate: -6 }}
                    transition={{ duration: 0.3 }}
                  >
                       <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 128 128">
                         <ellipse cx={64} cy={116.87} fill="#424242" rx={12.09} ry={7.13}></ellipse>
                         <path fill="#ffd600" d="M64 4C42.92 4 25.82 19.67 25.82 38.99c0 5.04 1.52 10.43 3.75 15.18c3.13 6.68 6.54 11.62 7.54 13.44c2.78 5.06 2.38 10.39 3.15 13.73c1.45 6.24 5.79 8.5 23.73 8.5s21.8-2.15 23.41-7.9c1.1-3.91.03-8.18 2.8-13.23c1-1.82 5.07-7.85 8.21-14.54c2.23-4.75 3.75-10.14 3.75-15.18C102.18 19.67 85.08 4 64 4"></path>
                         <ellipse cx={64} cy={86.13} fill="#b26500" rx={21.94} ry={4.46}></ellipse>
                         <ellipse cx={64} cy={86.13} fill="#b26500" rx={21.94} ry={4.46}></ellipse>
                         <ellipse cx={64} cy={86.13} fill="#ffa000" rx={15.99} ry={2.06}></ellipse>
                         <g fill="none" strokeMiterlimit={10} strokeWidth={2}>
                           <path stroke="#b26500" d="M53.3 56.77c-.62 1.56-2.23 4.77-1.39 6.21c1.95 3.35 6.6 4.55 6.6 7.63c0 4.7-3.42 19.93-3.42 19.93m18.94-34.33s2.24 4.8 1.29 6.95c-.71 1.6-4.98 4.18-5.53 4.61c-2.55 2 .84 22.78.84 22.78"></path>
                           <path stroke="#fff" d="M53.3 56.77c3.44-6.8 5.21-22.32.84-21.53c-7.37 1.33 1.71 26.83 6.18 23.9s10.01-23.85 3.21-23.93s.46 26.66 5.08 23.69c3.65-2.35 12.56-23.66 5.24-23.66c-6.23 0 .19 20.97.19 20.97"></path>
                         </g>
                         <path fill="#82aec0" d="M85.89 87.06S80.13 89.84 64 89.84s-21.89-2.78-21.89-2.78s-.36 5.14.83 7.47c1.43 2.8 2.53 3.77 2.53 3.77l.6 2.85l-.24.75c-.31.98-.09 2.06.6 2.83l.52.58l.58 2.74l-.2.55c-.38 1.05-.12 2.22.66 3.02l.38.39l.47 2.24s2.38 5.08 15.16 5.08s15.16-5.08 15.16-5.08l.04-.19l.26-.26c.52-.51.69-1.27.44-1.95l-.15-.39l.62-2.96l1.09-1.15c.54-.57.66-1.41.31-2.11l-.5-.99l.63-2.97l.4-.31c.59-.65.6-1.63.34-2.3c-.2-.53-.04-1.13.37-1.52c.63-.6 1.44-1.51 2.04-2.64c1.23-2.29.84-7.45.84-7.45"></path>
                         <path fill="#2f7889" d="m45.47 98.3l.54 2.87c5.82-.03 13.59.26 28.5-2.11c2.69-.61 5.92-1.82 2.35-1.32c0-.01-13.69 1.3-31.39.56m2 9.77c6.44-.11 19.6-.75 33.74-3.82l.63-2.97c-14.79 3.36-28.7 3.96-34.95 4.04zm32.84.42c-13.09 2.84-25.34 3.57-31.97 3.73l.43 2.04s.21 6.33 15.16 6.33s15.16-6.33 15.16-6.33s-6.38 1.82-14.23.93a.63.63 0 0 1-.01-1.26c4.69-.62 10.29-1.54 14.84-2.48z"></path>
                         <path fill="none" stroke="#82aec0" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={3.997} d="M42.18 87.06s6.46 2.78 21.76 2.78s21.88-2.78 21.88-2.78"></path>
                         <path fill="#ffff8d" d="M49.88 10.32c3.91-.96 8-.48 10.8 2.92c.79.96 1.4 2.1 1.54 3.34c.28 2.39-1.2 4.65-2.96 6.31c-5.02 4.74-12.15 7.04-15.39 13.58c-.76 1.53-1.36 3.18-2.52 4.43s-3.09 2.01-4.6 1.21c-.8-.42-1.35-1.21-1.8-2c-2.84-5.06-2.63-11.51-.13-16.75c2.75-5.74 8.78-11.5 15.06-13.04"></path>
                         <path fill="#ffd600" d="M46.45 91.93c-.88-.4-.53-1.72.43-1.65c3.22.25 8.7.56 15.95.56c7.64 0 14.36-.57 18.28-.99c.97-.1 1.34 1.23.45 1.64c-3.02 1.42-8.55 3.04-18.03 3.04c-9.25 0-14.35-1.37-17.08-2.6"></path>
                         <path fill="#94d1e0" d="M51.94 102.03c-.67.24-1.36.57-1.7 1.19c-.12.23-.19.49-.14.75c.08.38.43.65.78.82c.7.34 1.49.43 2.26.44c1.59.02 3.17-.28 4.74-.58c.47-.09.95-.18 1.37-.41s.78-.62.85-1.09c.1-.63-.35-1.24-.9-1.54c-1.9-1.05-5.34-.27-7.26.42m1.49 6.59c-.67.24-1.36.57-1.7 1.19c-.12.23-.19.49-.14.75c.08.38.43.65.78.82c.7.34 1.49.43 2.26.44c1.59.02 3.17-.28 4.74-.58c.47-.09.95-.18 1.37-.41s.78-.62.85-1.09c.1-.63-.35-1.24-.9-1.54c-1.9-1.04-5.35-.26-7.26.42"></path>
                         <path fill="#ffff8d" d="M50.01 84.2c.91.09 1.87.01 2.64-.48s1.26-1.49.95-2.35c-.16-.45-.51-.81-.85-1.15c-.75-.74-1.5-1.48-2.24-2.22c-.83-.83-1.66-1.65-2.56-2.4c-1.39-1.16-3.26-2.25-5.09-1.4c-1.56.72-1.93 2.14-1.24 3.63c1.47 3.13 4.89 6.01 8.39 6.37"></path>
                       </svg>
                  </motion.div>
                  <motion.h4 
                    className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}
                    whileHover={{ color: "#dc2626", scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {t('aboutPage.foundation.values.innovation.title')}
                  </motion.h4>
                  <motion.p 
                    className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}
                    whileHover={{ color: "#dc2626" }}
                    transition={{ duration: 0.3 }}
                  >
                      {t('aboutPage.foundation.values.innovation.description')}
                  </motion.p>
                  <motion.div 
                    className="h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mt-4"
                    initial={{ width: 0 }}
                    whileInView={{ width: 64 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    whileHover={{ width: 80 }}
                  ></motion.div>
                   </div>
              </motion.div>
                </div>
          </motion.div>
        </div>
      </section>

      {/* Our Agents */}
      <section className={`py-24 ${isDark ? 'bg-gray-800 text-white' : 'bg-black text-white'}`}>
        <div className="mx-auto max-w-7xl px-4">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="text-red-500 text-lg font-semibold tracking-wider mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ scale: 1.1 }}
            >
              {t('aboutPage.team.tagline')}
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6" 
              style={{ fontFamily: 'serif' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              {t('aboutPage.team.title')}
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              {t('aboutPage.team.subtitle')}
            </motion.p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {agents.map((agent, index) => (
              <motion.div 
                key={index}
                className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-3xl overflow-hidden shadow-2xl group`}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ 
                  y: -15,
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                }}
              >
                  {/* Agent Image */}
                <motion.div 
                  className="relative h-80 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                    <img 
                      src={agent.image} 
                      alt={agent.name}
                    className="w-full h-full object-cover"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 0.9 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                    
                    {/* Experience Badge */}
                  <motion.div 
                    className="absolute top-6 right-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                      <div className="bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                        {agent.experience}
                      </div>
                  </motion.div>
                    
                    {/* Agent Info Overlay */}
                  <motion.div 
                    className="absolute bottom-6 left-6 right-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <motion.h3 
                      className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-white'}`} 
                      style={{ fontFamily: 'serif' }}
                      whileHover={{ scale: 1.05 }}
                    >
                        {agent.name}
                    </motion.h3>
                    <motion.p 
                      className="text-red-400 font-semibold text-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      {agent.title}
                    </motion.p>
                  </motion.div>
                </motion.div>
                  
                  {/* Agent Details */}
                <motion.div 
                  className={`p-8 ${isDark ? 'bg-gray-900' : 'bg-white'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <motion.p 
                    className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  >
                      {agent.description}
                  </motion.p>
                    
                    {/* Specialties */}
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  >
                      <h4 className={`text-lg font-bold mb-3 ${isDark ? 'text-white' : 'text-black'}`}>{t('aboutPage.team.specialties')}</h4>
                      <div className="flex flex-wrap gap-2">
                        {agent.specialties.map((specialty, idx) => (
                        <motion.span 
                            key={idx}
                            className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.8 + index * 0.1 + idx * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                          >
                            {specialty}
                        </motion.span>
                        ))}
                      </div>
                  </motion.div>
                    
                    {/* Achievements */}
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  >
                      <h4 className={`text-lg font-bold mb-3 ${isDark ? 'text-white' : 'text-black'}`}>{t('aboutPage.team.achievements')}</h4>
                      <ul className="space-y-2">
                        {agent.achievements.map((achievement, idx) => (
                        <motion.li 
                          key={idx} 
                          className={`flex items-center text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.9 + index * 0.1 + idx * 0.05 }}
                        >
                            <svg className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {achievement}
                        </motion.li>
                        ))}
                      </ul>
                  </motion.div>
                    
                    {/* Contact Info */}
                  <motion.div 
                    className="border-t pt-6"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                  >
                      <div className="flex items-center justify-center space-x-4">
                        <motion.a 
                            href="https://linkedin.com/in/agent-profile"
                            target="_blank"
                            rel="noopener noreferrer"
                          className="flex items-center justify-center w-12 h-12 bg-[#0077B5] text-white rounded-full"
                            title="LinkedIn Profile"
                          whileHover={{ scale: 1.1, backgroundColor: "#005885" }}
                          whileTap={{ scale: 0.95 }}
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </motion.a>
                        <motion.a 
                            href="https://twitter.com/agent-profile"
                            target="_blank"
                            rel="noopener noreferrer"
                          className="flex items-center justify-center w-12 h-12 bg-[#1DA1F2] text-white rounded-full"
                            title="Twitter Profile"
                          whileHover={{ scale: 1.1, backgroundColor: "#1a91da" }}
                          whileTap={{ scale: 0.95 }}
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                        </motion.a>
                        <motion.a 
                            href="https://facebook.com/agent-profile"
                            target="_blank"
                            rel="noopener noreferrer"
                          className="flex items-center justify-center w-12 h-12 bg-[#1877F2] text-white rounded-full"
                            title="Facebook Profile"
                          whileHover={{ scale: 1.1, backgroundColor: "#166FE5" }}
                          whileTap={{ scale: 0.95 }}
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </motion.a>
                      </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src="/images/ABOUT CTA.jpg"
            alt="Real estate background"
            className="w-full h-full object-cover"
          />
          <motion.div 
            className={`absolute inset-0 ${isDark ? 'bg-black/60' : 'bg-black/40'}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          ></motion.div>
        </motion.div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-center">
            {/* Centered Content */}
            <motion.div 
              className="text-center space-y-8 max-w-4xl"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                className="text-red-400 text-lg font-semibold tracking-wider"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.1 }}
              >
                {t('aboutPage.cta.tagline')}
              </motion.div>
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-white leading-tight" 
                style={{ fontFamily: 'serif' }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                  {t('aboutPage.cta.title')}
              </motion.h2>
              <motion.p 
                className="text-xl text-white/90 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -5 }}
              >
                {t('aboutPage.cta.subtitle')}
              </motion.p>
              <motion.button 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                  {t('aboutPage.cta.button')}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}