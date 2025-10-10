import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getCurrentUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollAnimation from '../components/ScrollAnimation'

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
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/ABOUT R.mp4" type="video/mp4" />
          </video>
          <div className='absolute inset-0 bg-black/70'></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-6 max-w-4xl">
            
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6" style={{ fontFamily: 'serif' }}>
                {t('aboutPage.hero.title')}
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
              <p className="mt-2 text-xl text-white/90 max-w-3xl mx-auto mb-8">
                {t('aboutPage.hero.subtitle')}
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-4">
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="group relative px-10 py-5 bg-red-600 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-500 hover:scale-105">
                  <span className="relative z-10">{t('aboutPage.hero.exploreButton')}</span>
                  <div className="absolute inset-0 bg-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </button>
                <button className="px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-full transition-all duration-300 hover:bg-white hover:text-black hover:scale-105">
                  {t('aboutPage.hero.browseButton')}
                </button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        
      </section>


      {/* Our Journey */}
      <section className={`py-24 ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        <div className="mx-auto max-w-7xl px-4">
          {/* Header */}
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
            <div className="text-center mb-20">
              <div className="text-red-600 text-lg font-semibold tracking-wider mb-4">{t('aboutPage.journey.tagline')}</div>
              <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${isDark ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'serif' }}>
                {t('aboutPage.journey.title')}
              </h2>
              <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {t('aboutPage.journey.subtitle')}
              </p>
            </div>
          </ScrollAnimation>
          
          {/* Journey Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full ${isDark ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
            
            {/* Timeline Items */}
            <div className="space-y-16">
              {/* 2006 - Foundation */}
              <ScrollAnimation animation="fade-in-up" stagger="scroll-stagger-2">
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'} shadow-lg`}>
                      <div className="text-red-600 font-bold text-lg mb-2">{t('aboutPage.journey.timeline.foundation.year')}</div>
                      <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'serif' }}>{t('aboutPage.journey.timeline.foundation.title')}</h3>
                      <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {t('aboutPage.journey.timeline.foundation.description')}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="w-1/2 pl-8">
                    <img 
                      src="/images/ABOUTJ1.jpg" 
                      alt="Foundation year" 
                      className="w-full h-48 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </ScrollAnimation>

              {/* 2012 - Expansion */}
              <ScrollAnimation animation="fade-in-up" stagger="scroll-stagger-3">
                <div className="flex items-center">
                  <div className="w-1/2 pr-8">
                    <img 
                      src="/images/property management meetings,.jpg" 
                      alt="Expansion phase" 
                      className="w-full h-48 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="w-1/2 pl-8">
                    <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'} shadow-lg`}>
                      <div className="text-red-600 font-bold text-lg mb-2">{t('aboutPage.journey.timeline.expansion.year')}</div>
                      <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'serif' }}>{t('aboutPage.journey.timeline.expansion.title')}</h3>
                      <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {t('aboutPage.journey.timeline.expansion.description')}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* 2018 - Innovation */}
              <ScrollAnimation animation="fade-in-up" stagger="scroll-stagger-4">
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'} shadow-lg`}>
                      <div className="text-red-600 font-bold text-lg mb-2">{t('aboutPage.journey.timeline.innovation.year')}</div>
                      <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'serif' }}>{t('aboutPage.journey.timeline.innovation.title')}</h3>
                      <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {t('aboutPage.journey.timeline.innovation.description')}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="w-1/2 pl-8">
                    <img 
                      src="/images/futuristic smart homes.jpg" 
                      alt="Innovation era" 
                      className="w-full h-48 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </ScrollAnimation>

              {/* 2024 - Excellence */}
              <ScrollAnimation animation="fade-in-up" stagger="scroll-stagger-5">
                <div className="flex items-center">
                  <div className="w-1/2 pr-8">
                    <img 
                      src="/images/Team.jpg" 
                      alt="Excellence today" 
                      className="w-full h-48 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="w-1/2 pl-8">
                    <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'} shadow-lg`}>
                      <div className="text-red-600 font-bold text-lg mb-2">{t('aboutPage.journey.timeline.excellence.year')}</div>
                      <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'serif' }}>{t('aboutPage.journey.timeline.excellence.title')}</h3>
                      <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {t('aboutPage.journey.timeline.excellence.description')}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>

          {/* Stats Section */}
          <ScrollAnimation animation="fade-in-up" stagger="scroll-stagger-6">
            <div className="mt-20 grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">18+</div>
                <div className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{t('aboutPage.journey.stats.yearsExperience')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">1000+</div>
                <div className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{t('aboutPage.journey.stats.propertiesSold')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
                <div className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{t('aboutPage.journey.stats.happyClients')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">50+</div>
                <div className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{t('aboutPage.journey.stats.teamMembers')}</div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Mission & Vision */}

      <section className={`py-24 ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-50 text-black'}`}>
        <div className="mx-auto max-w-7xl px-4">
          {/* Header */}
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
            <div className="text-center mb-20">
              <div className="text-red-600 text-lg font-semibold tracking-wider mb-4">{t('aboutPage.foundation.tagline')}</div>
              <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${isDark ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'serif' }}>
                {t('aboutPage.foundation.title')}
              </h2>
              <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {t('aboutPage.foundation.subtitle')}
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Mission */}
            <ScrollAnimation animation="slide-in-left" stagger="scroll-stagger-2">
              <div className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-3xl p-10 shadow-2xl border ${isDark ? 'border-gray-700' : 'border-gray-200'} hover:shadow-3xl transition-all duration-500`}>
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mr-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'serif' }}>
                      {t('aboutPage.foundation.mission.title')}
                    </h3>
                    <div className="w-20 h-1 bg-red-500 rounded-full mt-2"></div>
                  </div>
                </div>
                <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('aboutPage.foundation.mission.description')}
                </p>
                <div className="flex items-center text-red-500 font-semibold">
                  <span className="mr-2">{t('aboutPage.foundation.mission.tagline')}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                        </div>
                    </div>
            </ScrollAnimation>

            {/* Vision */}
            <ScrollAnimation animation="slide-in-right" stagger="scroll-stagger-3">
              <div className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-3xl p-10 shadow-2xl border ${isDark ? 'border-gray-700' : 'border-gray-200'} hover:shadow-3xl transition-all duration-500`}>
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'serif' }}>
                      {t('aboutPage.foundation.vision.title')}
                    </h3>
                    <div className="w-20 h-1 bg-blue-500 rounded-full mt-2"></div>
                  </div>
                </div>
                <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('aboutPage.foundation.vision.description')}
                </p>
                <div className="flex items-center text-blue-500 font-semibold">
                  <span className="mr-2">{t('aboutPage.foundation.vision.tagline')}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                          </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Values Section */}
          <ScrollAnimation animation="fade-in-up" stagger="scroll-stagger-4">
            <div className="mt-20">
              <div className="text-center mb-12">
                <h3 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'serif' }}>
                  {t('aboutPage.foundation.values.title')}
                </h3>
                <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('aboutPage.foundation.values.subtitle')}
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* Integrity */}
                <div className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>{t('aboutPage.foundation.values.integrity.title')}</h4>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    {t('aboutPage.foundation.values.integrity.description')}
                  </p>
                        </div>
                        
                {/* Excellence */}
                <div className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                        </div>
                  <h4 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>{t('aboutPage.foundation.values.excellence.title')}</h4>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    {t('aboutPage.foundation.values.excellence.description')}
                  </p>
                    </div>
                    
                {/* Innovation */}
                <div className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                        </div>
                  <h4 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>{t('aboutPage.foundation.values.innovation.title')}</h4>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    {t('aboutPage.foundation.values.innovation.description')}
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Our Agents */}
      <section className={`py-24 ${isDark ? 'bg-gray-800 text-white' : 'bg-black text-white'}`}>
        <div className="mx-auto max-w-7xl px-4">
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
            <div className="text-center mb-20">
              <div className="text-red-500 text-lg font-semibold tracking-wider mb-4">{t('aboutPage.team.tagline')}</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'serif' }}>{t('aboutPage.team.title')}</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t('aboutPage.team.subtitle')}</p>
            </div>
          </ScrollAnimation>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {agents.map((agent, index) => (
              <ScrollAnimation key={index} animation="fade-in-up" stagger={`scroll-stagger-${index + 2}`}>
                <div className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 group`}>
                  {/* Agent Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={agent.image} 
                      alt={agent.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    
                    {/* Experience Badge */}
                    <div className="absolute top-6 right-6">
                      <div className="bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                        {agent.experience}
                      </div>
                    </div>
                    
                    {/* Agent Info Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-white'}`} style={{ fontFamily: 'serif' }}>
                        {agent.name}
                      </h3>
                      <p className="text-red-400 font-semibold text-lg">{agent.title}</p>
                    </div>
                  </div>
                  
                  {/* Agent Details */}
                  <div className={`p-8 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                    <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {agent.description}
                    </p>
                    
                    {/* Specialties */}
                    <div className="mb-6">
                      <h4 className={`text-lg font-bold mb-3 ${isDark ? 'text-white' : 'text-black'}`}>{t('aboutPage.team.specialties')}</h4>
                      <div className="flex flex-wrap gap-2">
                        {agent.specialties.map((specialty, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className={`text-lg font-bold mb-3 ${isDark ? 'text-white' : 'text-black'}`}>{t('aboutPage.team.achievements')}</h4>
                      <ul className="space-y-2">
                        {agent.achievements.map((achievement, idx) => (
                          <li key={idx} className={`flex items-center text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            <svg className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Contact Info */}
                    <div className="border-t pt-6">
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-4">
                          <a 
                            href={`tel:${agent.phone}`}
                            className="flex items-center justify-center w-12 h-12 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-300"
                            title="Call Agent"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </a>
                          <a 
                            href={`mailto:${agent.email}`}
                            className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
                            title="Email Agent"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </a>
                        </div>
                        <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                          {t('aboutPage.team.contactAgent')}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/ABOUT CTA.jpg"
            alt="Real estate background"
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${isDark ? 'bg-black/60' : 'bg-black/40'}`}></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-center">
            {/* Centered Content */}
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
              <div className="text-center space-y-8 max-w-4xl">
                <div className="text-red-400 text-lg font-semibold tracking-wider">{t('aboutPage.cta.tagline')}</div>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: 'serif' }}>
                  {t('aboutPage.cta.title')}
                </h2>
                <p className="text-xl text-white/90 leading-relaxed">{t('aboutPage.cta.subtitle')}</p>
                <button className="px-8 py-4 bg-red-500 text-white font-bold text-lg rounded-lg transition-all duration-300 hover:bg-red-400 hover:scale-105 shadow-lg mx-auto">
                  {t('aboutPage.cta.button')}
              </button>
            </div>
          </ScrollAnimation>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}