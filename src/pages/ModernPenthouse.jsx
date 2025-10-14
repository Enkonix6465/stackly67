import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollAnimation from '../components/ScrollAnimation'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '../hooks/useLanguage'

export default function ModernPenthouse() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { currentLanguage, changeLanguage } = useLanguage()
  const [isDark, setIsDark] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

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
          <source src="/67S4.mp4" type="video/mp4" />
          {t('common.videoNotSupported')}
        </video>

        {/* Dynamic Overlay */}
        <div className={`absolute inset-0 ${isDark ? 'bg-black/70' : 'bg-black/60'}`}></div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-4xl">
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6" style={{ fontFamily: 'serif' }}>
              {t('nav.modernPenthouse')}
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
            <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto mb-8">
              {t('luxuryCondoPage.hero.description')}
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
            <div className="mt-8 flex gap-6 justify-center items-center flex-wrap">
              <a
                href="#features"
                className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 relative overflow-hidden"
              >
                <span className="relative z-10">{t('luxuryCondoPage.hero.ctaExplore')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#contact"
                className="group bg-transparent text-white px-8 py-4 font-bold text-lg border-2 border-white rounded-lg transition-all duration-300 hover:bg-white hover:text-black relative overflow-hidden"
              >
                <span className="relative z-10">{t('luxuryCondoPage.hero.ctaSchedule')}</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Real Estate Features Section */}
      <section className={isDark ? 'py-20 bg-black' : 'py-20 bg-gray-200'}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Sky High Living */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width={72} height={72} viewBox="0 0 72 72">
                    <circle cx={36.446} cy={28.864} r={7.225} fill="#fff"></circle>
                    <path fill="#d22f27" d="M52.573 29.11c0-9.315-7.133-16.892-15.903-16.892s-15.903 7.577-15.903 16.896c.002.465.223 11.609 12.96 31.245a3.46 3.46 0 0 0 2.818 1.934c1.84 0 3.094-2.026 3.216-2.232C52.58 40.414 52.58 29.553 52.573 29.11M36.67 35.914a7.083 7.083 0 1 1 7.083-7.083a7.09 7.09 0 0 1-7.083 7.083"></path>
                    <path fill="#ea5a47" d="M52.573 29.11c0-9.315-7.133-16.892-15.903-16.892a15 15 0 0 0-3.865.525c8.395.45 15.1 7.823 15.1 16.85c.006.443.006 11.303-12.813 30.95a6 6 0 0 1-.586.797c.52.584 1.257.928 2.04.954c1.839 0 3.093-2.027 3.215-2.233C52.58 40.414 52.58 29.553 52.573 29.11"></path>
                    <g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                      <path d="M36.545 62.294a3.46 3.46 0 0 1-2.817-1.935C20.99 40.723 20.769 29.58 20.766 29.114c0-9.32 7.134-16.896 15.904-16.896s15.903 7.577 15.903 16.892c.007.444.007 11.304-12.812 30.95c-.122.207-1.377 2.234-3.216 2.234"></path>
                      <path d="M36.67 35.914a7.083 7.083 0 1 1 7.083-7.083a7.09 7.09 0 0 1-7.083 7.083"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-black'}`}>
                {t('luxuryCondoPage.features.items.cityViews.title')}
              </h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed px-2`}>
                {t('luxuryCondoPage.features.items.cityViews.description')}
              </p>
            </div>

            {/* Modern Architecture */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width={72} height={72} viewBox="0 0 32 32">
                    <g fill="none">
                      <path fill="#9b9b9b" d="M2 30h4.032l9.945-2.775L25.922 30H30V9.3A2.3 2.3 0 0 0 27.7 7H4.3A2.3 2.3 0 0 0 2 9.3z"></path>
                      <path fill="#83cbff" d="M27 14h-1c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v1c0 .56-.45 1-1 1m1 4v-1c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1c.55 0 1-.44 1-1m0 5v-1c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1c.55 0 1-.44 1-1M7 22v1c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h1c.55 0 1 .45 1 1M6 11H5c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1m0 5H5c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1"></path>
                      <path fill="#d3d3d3" d="M26 30h-7.013l-3.016-1.73L12.956 30H6V4.46C6 3.1 7.1 2 8.46 2h15.08C24.9 2 26 3.1 26 4.46z"></path>
                      <path fill="#1c1c1c" d="M19 30h-6v-3.75c0-.69.56-1.25 1.25-1.25h3.5c.69 0 1.26.56 1.26 1.26V30z"></path>
                      <path fill="#83cbff" d="M14.5 18h-3c-.27 0-.5-.22-.5-.5v-2.01c0-.27.22-.5.5-.5h3.01c.27 0 .5.22.5.5v2.01a.51.51 0 0 1-.51.5m6.5-.49V15.5c0-.27-.22-.5-.5-.5h-3c-.27 0-.5.22-.5.5v2.01c0 .27.22.5.5.5h3.01c.27-.01.49-.23.49-.5m-6 5V20.5c0-.27-.22-.5-.5-.5h-3c-.27 0-.5.22-.5.5v2.01c0 .27.22.5.5.5h3.01c.27-.01.49-.23.49-.5m6 0V20.5c0-.27-.22-.5-.5-.5h-3c-.27 0-.5.22-.5.5v2.01c0 .27.22.5.5.5h3.01c.27-.01.49-.23.49-.5m-6-15V5.5c0-.27-.22-.5-.5-.5h-3c-.27 0-.5.22-.5.5v2.01c0 .27.22.5.5.5h3.01c.27-.01.49-.23.49-.5m6 0V5.5c0-.27-.22-.5-.5-.5h-3c-.27 0-.5.22-.5.5v2.01c0 .27.22.5.5.5h3.01c.27-.01.49-.23.49-.5m-6 5V10.5c0-.27-.22-.5-.5-.5h-3c-.27 0-.5.22-.5.5v2.01c0 .27.22.5.5.5h3.01c.27-.01.49-.23.49-.5m6 0V10.5c0-.27-.22-.5-.5-.5h-3c-.27 0-.5.22-.5.5v2.01c0 .27.22.5.5.5h3.01c.27-.01.49-.23.49-.5"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-black'}`}>
                {t('contemporaryTownhousePage.features.items.modernArchitecture.title')}
              </h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed px-2`}>
                {t('contemporaryTownhousePage.features.items.modernArchitecture.description')}
              </p>
            </div>

            {/* Luxury Amenities */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width={72} height={72} viewBox="0 0 48 48">
                    <g fill="none" strokeLinejoin="round" strokeWidth={4}>
                      <path fill="#2f88ff" stroke="#000" d="M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z"></path>
                      <path stroke="#fff" strokeLinecap="round" d="M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431"></path>
                      <path stroke="#000" strokeLinecap="round" d="M33.2216 33.2217L41.7069 41.707"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-black'}`}>
                {t('luxuryCondoPage.features.badge')}
              </h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed px-2`}>
                {t('luxuryCondoPage.features.subtitle')}
              </p>
            </div>

            {/* Smart Security */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width={72} height={72} viewBox="0 0 128 128">
                    <path fill="#b0bec5" d="M16.77 19.75c-1 0-1.7.8-1.7 1.8v.1c-1.5 25.91 3.03 59.27 24.01 83.52c12.1 14.7 23.91 18.53 24.51 18.73c0 0 .28.09.54.09s.57-.1.57-.1c.5-.2 12.48-4.02 24.49-18.72c19.91-24.21 24.01-58.82 24.01-83.52v-.1c0-1-.8-1.8-1.7-1.8c-.3 0-29.11-1-46.01-15.3c-.7-.6-1.7-.6-2.4 0c-17.11 14.2-46.02 15.2-46.32 15.3"></path>
                    <path fill="#84b0c1" d="M111.49 19.75c-.3 0-29.11-1-46.01-15.3c-.4-.35-.83-.45-1.24-.45h-.11v120c.27-.01.62-.11.62-.12c.6-.25 12.44-4 24.44-18.7c19.91-24.21 24.01-58.82 24.01-83.52v-.1c0-1.01-.8-1.81-1.71-1.81"></path>
                    <path fill="#2f7889" d="M26.33 28.31c-.82 0-1.02 1.02-1.02 1.74v.1c0 19.72 3.06 47.4 19 66.71c9.6 11.75 19 14.81 19.41 14.91l.41.1l.41-.1c.41-.1 9.81-3.17 19.41-14.91c15.94-19.31 19-46.89 19-66.71v-.1c0-.82-.41-1.43-1.23-1.43h.1c-.2 0-23.19-.82-36.67-12.16c-1.19-.98-1.94-.2-1.94-.2C49.63 27.6 26.64 28.31 26.33 28.31"></path>
                    <path fill="#c9e3e6" d="M29.18 30.07c-.76 0-.94.96-.94 1.64v.1c0 18.57 2.83 44.65 17.57 62.84c8.88 11.07 17.57 13.95 17.95 14.05l.38.1l.38-.1c.38-.1 9.07-2.98 17.95-14.05c14.73-18.19 17.57-44.17 17.57-62.84v-.1c0-.77-.38-1.35-1.13-1.35H99c-.19 0-21.44-.77-33.91-11.45c-.94-.95-1.79-.19-1.79-.19C50.72 29.4 29.47 30.07 29.18 30.07"></path>
                    <path fill="#b0bec5" d="M98.89 30.36h.09c-.19 0-21.44-.77-33.91-11.45c-.34-.34-.66-.46-.94-.47v90.35l.38-.1c.38-.1 9.07-2.98 17.95-14.05c14.73-18.19 17.57-44.17 17.57-62.84v-.1c-.01-.76-.38-1.34-1.14-1.34"></path>
                    <circle cx={70.63} cy={14.44} r={1.93} fill="#37474f"></circle>
                    <circle cx={82.21} cy={19.67} r={1.93} fill="#37474f"></circle>
                    <circle cx={95.01} cy={23.21} r={1.93} fill="#37474f"></circle>
                    <circle cx={108.15} cy={25.14} r={1.93} fill="#37474f"></circle>
                    <circle cx={108.57} cy={36.94} r={1.93} fill="#37474f"></circle>
                    <circle cx={107.02} cy={50.76} r={1.93} fill="#37474f"></circle>
                    <circle cx={64.08} cy={118.11} r={1.93} fill="#37474f"></circle>
                    <circle cx={75.4} cy={112.71} r={1.93} fill="#37474f"></circle>
                    <circle cx={85.74} cy={102.71} r={1.93} fill="#37474f"></circle>
                    <circle cx={93.81} cy={91.27} r={1.93} fill="#37474f"></circle>
                    <circle cx={99.67} cy={79} r={1.93} fill="#37474f"></circle>
                    <circle cx={104.27} cy={64.65} r={1.93} fill="#37474f"></circle>
                    <circle cx={70.15} cy={13.8} r={1.93} fill="#b9e4ea"></circle>
                    <circle cx={81.73} cy={19.03} r={1.93} fill="#b9e4ea"></circle>
                    <circle cx={94.53} cy={22.57} r={1.93} fill="#b9e4ea"></circle>
                    <circle cx={107.66} cy={24.5} r={1.93} fill="#b9e4ea"></circle>
                    <circle cx={108.09} cy={36.3} r={1.93} fill="#b9e4ea"></circle>
                    <circle cx={106.53} cy={50.12} r={1.93} fill="#b9e4ea"></circle>
                    <circle cx={63.6} cy={117.47} r={1.93} fill="#eee"></circle>
                    <circle cx={74.92} cy={112.07} r={1.93} fill="#b9e4ea"></circle>
                    <circle cx={85.26} cy={102.07} r={1.93} fill="#b9e4ea"></circle>
                    <circle cx={93.33} cy={90.63} r={1.93} fill="#b9e4ea"></circle>
                    <circle cx={99.19} cy={78.36} r={1.93} fill="#b9e4ea"></circle>
                    <circle cx={103.79} cy={64.01} r={1.93} fill="#b9e4ea"></circle>
                    <circle cx={57.97} cy={14.44} r={1.93} fill="#2f7889"></circle>
                    <circle cx={46.39} cy={19.67} r={1.93} fill="#2f7889"></circle>
                    <circle cx={33.59} cy={23.21} r={1.93} fill="#2f7889"></circle>
                    <circle cx={20.45} cy={25.14} r={1.93} fill="#2f7889"></circle>
                    <circle cx={20.02} cy={36.94} r={1.93} fill="#2f7889"></circle>
                    <circle cx={21.58} cy={50.76} r={1.93} fill="#2f7889"></circle>
                    <circle cx={53.19} cy={112.71} r={1.93} fill="#2f7889"></circle>
                    <circle cx={42.86} cy={102.71} r={1.93} fill="#2f7889"></circle>
                    <circle cx={34.79} cy={91.27} r={1.93} fill="#2f7889"></circle>
                    <circle cx={28.92} cy={79} r={1.93} fill="#2f7889"></circle>
                    <circle cx={24.33} cy={64.65} r={1.93} fill="#2f7889"></circle>
                    <circle cx={57.54} cy={13.8} r={1.93} fill="#eee"></circle>
                    <circle cx={45.95} cy={19.03} r={1.93} fill="#eee"></circle>
                    <circle cx={33.16} cy={22.57} r={1.93} fill="#eee"></circle>
                    <circle cx={20.02} cy={24.5} r={1.93} fill="#eee"></circle>
                    <circle cx={19.59} cy={36.3} r={1.93} fill="#eee"></circle>
                    <circle cx={21.15} cy={50.12} r={1.93} fill="#eee"></circle>
                    <circle cx={52.76} cy={112.07} r={1.93} fill="#eee"></circle>
                    <circle cx={42.42} cy={102.07} r={1.93} fill="#eee"></circle>
                    <circle cx={34.36} cy={90.63} r={1.93} fill="#eee"></circle>
                    <circle cx={28.49} cy={78.36} r={1.93} fill="#eee"></circle>
                    <circle cx={23.89} cy={64.01} r={1.93} fill="#eee"></circle>
                  </svg>
                </div>
              </div>
              <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-black'}`}>
                {t('contemporaryTownhousePage.features.items.smartHomeTechnology.title')}
              </h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed px-2`}>
                {t('contemporaryTownhousePage.features.items.smartHomeTechnology.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plan & Details Section */}
      <section className={isDark ? 'py-20 bg-gray-900' : 'py-20 bg-white'}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Floor Plan Image */}
            <div className="order-2 lg:order-1 flex">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full flex items-center">
                <img 
                  src="/images/FP1.jpg" 
                  alt="Penthouse Floor Plan"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-sm">
                  {t('luxuryVillasPage.floorPlan.badge')}
                </div>
              </div>
            </div>

            {/* Property Details */}
            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                {t('luxuryCondoPage.features.subtitle')}
              </p>

              {/* Property Specifications */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className={`p-4 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'} flex items-center justify-center`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 64 64">
                        <path fill="#bbbcbe" d="M6.06 57.511h52.01v4.05H6.06z"></path>
                        <path fill="#633d19" d="M13.495 11.57h6.741v11.669h-6.741z"></path>
                        <path fill="#f0ca93" d="M6.06 55.485h52.01v4.054H6.06z"></path>
                        <path fill="#992c3e" d="m9.561 27.879l-3.146.934l-2.623 2.166l-2.6 3.11h7.3zm44.826 0l3.14.934l2.62 2.166l2.609 3.11h-7.299z"></path>
                        <path fill="#bbbcbe" d="M40.057 56.299c.573 0 1.041.541 1.041 1.206c0 .674-.468 1.21-1.041 1.21H23.75c-.575 0-1.041-.536-1.041-1.21c0-.665.465-1.206 1.041-1.206z"></path>
                        <path fill="#999" d="M41.107 58.717c.655 0 1.19.546 1.19 1.216c0 .665-.535 1.21-1.19 1.21H22.521c-.653 0-1.185-.545-1.185-1.21c0-.67.532-1.216 1.185-1.216z"></path>
                        <path fill="#7c7d7e" d="M42.277 61.139c.731 0 1.323.546 1.323 1.211s-.592 1.211-1.323 1.211H21.556c-.729 0-1.321-.546-1.321-1.211s.592-1.211 1.321-1.211z"></path>
                        <path fill="#e7e5e5" d="m7.465 29.548l24.582-19.512l24.622 19.512v26.611h-49.2z"></path>
                        <path fill="#d1d2d2" d="M16.456 56.159H7.465v-27.24l23.952-18.883l1.167.654l-16.13 18.547z"></path>
                        <g fill="#df394c">
                          <path d="M32.728 9.431c.39.628.177 1.525-.461 2L2.047 33.798c-.64.477-1.477.349-1.864-.28c-.385-.633-.177-1.531.465-2l30.22-22.371c.64-.471 1.477-.343 1.862.288"></path>
                          <path d="M31.257 9.431c-.385.628-.174 1.525.466 2l30.22 22.368c.645.477 1.477.349 1.864-.28c.388-.633.179-1.531-.464-2L33.123 9.148c-.645-.472-1.48-.344-1.865.287"></path>
                        </g>
                        <path fill="#4e6b78" d="M37.347 56.494v-9.06c0-3.215-2.366-5.811-5.282-5.811c-2.921 0-5.283 2.596-5.283 5.811v9.06z"></path>
                        <path fill="#405967" d="M33.767 41.939a4.8 4.8 0 0 0-1.699-.312c-2.921 0-5.283 2.596-5.283 5.811v9.06h3.396v-9.06c0-2.559 1.499-4.724 3.586-5.499"></path>
                        <path fill="#df394c" d="M21.966 11.121c0 .599-.571 1.084-1.277 1.084h-7.493c-.706 0-1.277-.486-1.277-1.084s.571-1.084 1.277-1.084h7.493c.706 0 1.277.485 1.277 1.084"></path>
                        <path fill="#28a6de" d="M22.057 46.129c0 1.242-1.068 2.251-2.387 2.251h-6.48c-1.318 0-2.389-1.01-2.389-2.251v-9.01c0-1.243 1.071-2.251 2.389-2.251h6.48c1.318 0 2.387 1.01 2.387 2.251zm31.1-.435c0 1.243-1.068 2.252-2.389 2.252h-6.479c-1.321 0-2.388-1.01-2.388-2.252v-9.01c0-1.248 1.066-2.252 2.388-2.252h6.479c1.32 0 2.389 1 2.389 2.252z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>3,200</div>
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {t('luxuryCondoPage.investment.collection.specs.sqft')}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`p-4 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'} flex items-center justify-center`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 128 128">
                        <path fill="#a65f3e" d="M27.85 109.64h-19s-5.08-54.7 0-54.7s14.99 4.12 14.99 4.12c2.41.89 4.01 3.18 4.01 5.75z"></path>
                        <path fill="#c87d5e" d="M121.91 105.43H12.98V58.99c0-2.24-1.82-4.06-4.06-4.06s-4.06 1.82-4.06 4.06v64.9h6l4.8-9.58h96.7l4.8 9.58h6v-17.22c-.01-.68-.56-1.24-1.25-1.24"></path>
                        <path fill="#784d30" d="M13.75 95.99h9.28V83.08c-2.66-.17-5.37.46-7.53 2c-3.39 2.43-2.49 6.78-2.52 10.46c0 0 .3.18.77.45m106.71 12.38l-104.17.1c-1.49 0-2.91-.78-2.91-2.32c0 0 106.53-.77 107.74-.77s2.02.05 2.02 1.17c0 1.1-.16 1.82-2.68 1.82"></path>
                        <path fill="#e0f7fa" d="m110.47 106.94l-95.61.1c-1.49 0-1.88-1.45-1.88-3.11v-7.91c0-1.15.84-2.09 1.87-2.09h94.73c1.98 0 3.59 1.79 3.59 4v6c-.01 1.66-1.21 3.01-2.7 3.01"></path>
                        <path fill="#784d30" d="M112.35 114.31h4.8v9.58zm-96.7 0h-4.8v9.58z"></path>
                        <path fill="#e0f7fa" d="M27.33 93.95c-11.36 0-13.38-5.96-13.38-5.96s3.55-6.57 13.11-6.57s14.52 5.88 14.81 7.84c.62 4.22-3.18 4.69-14.54 4.69"></path>
                        <path fill="#94d1e0" d="M13.95 87.99c.8 1.92 3.81 5.96 13.38 5.96H34l4.35-5.53s-2.91 1.47-11.28 1.71c-5.69.16-10.61-.76-13.12-2.14"></path>
                        <path fill="#3daae0" d="M118.89 107.04c2.9 0 4.56-2.83 3.92-6.02c-2.11-10.55-5.18-16.08-13.26-16.08H53.72c-7.91 0-14.83 4-16.81 12c-.97 3.9-1.27 6.75-1.18 10.1z"></path>
                        <path fill="#188ad6" d="M120.42 107.59c2.65 0 2.72-2.27 2.45-4.65c-.91-8-7.65-9.41-11.24-9.41H44.8s-1.49 2.21-2.18 7.03c-.68 4.82.04 7.03.04 7.03z"></path>
                        <path fill="#b0e0ff" d="M44.78 96.94c2-8 9-12 17-12h-12c-8 0-15 4-17 12c-1.43 5.71 10 8 12 0"></path>
                        <path fill="#7dbbe3" d="M43.77 107.59c-.02-3.77.37-11.85 3.58-16.08c0 0-3.08-.59-6.6-.6c-4.16 0-5.38.38-5.38.38c-1.4 1.78-1.96 3.15-2.58 5.65c-.49 1.94-.82 4.91-.99 8.49c-.05 1.17.89 2.15 2.06 2.15h9.91z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>3</div>
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {t('luxuryCondoPage.investment.collection.specs.bedrooms')}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`p-4 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'} flex items-center justify-center`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 128 128">
                        <defs>
                          <path id="SVGFTo4DbIx" fill="#bdbdbd" d="M96.59 30.45c-14.37-14.37-37.92-14.13-52.07-.18l52.25 52.25c13.95-14.15 14.19-37.7-.18-52.07"></path>
                        </defs>
                        <path fill="#bdbdbd" d="M100.87 15.07L87.94 27.95l10.11 10.11l13.03-13.04c3.64-3.64 7.98-6.12 12.92-7.22V4.67c-8.78.47-16.88 4.16-23.13 10.4"></path>
                        <use href="#SVGFTo4DbIx"></use>
                        <path fill="#78909c" d="M107.74 28.62c-.21-.79-1.84-3.67-4.07-5.83s-4.75-3.72-6.94-4.17c-4.35-.9-6.82 2.28-9.57 5.03c3.41 1.7 6.6 3.96 9.43 6.8c2.45 2.45 4.47 5.18 6.08 8.08c-.13-.23 4.03-4.03 4.03-4.03c1.48-1.5 1.6-3.8 1.04-5.88"></path>
                        <use href="#SVGFTo4DbIx"></use>
                        <path fill="#9e9e9e" d="M83.74 41.83C67.75 27.39 53.9 23.61 53.9 23.61c-1.07.44-1.97.86-2.78 1.31c0 0 11.13 4.66 28.22 20.36s24 28.51 24 28.51c.53-1.08.99-2.28 1.45-3.7c-.01 0-2.1-11.14-21.05-28.26"></path>
                        <path fill="#bdbdbd" d="M81.17 44.73c17.59 16.13 28.11 32.83 24.01 37.75c-2.9 3.48-6.52 3.2-6.52 3.2c-7.77-1.84-20.51-12.25-33.16-23.85c-12.87-11.8-26.09-27.08-26.71-29.7c0 0-.79-2.69-.09-4.63c.88-2.43 2.79-3.42 2.79-3.42c6.74-3.68 22.09 4.52 39.68 20.65"></path>
                        <ellipse cx={69.27} cy={57.34} fill="#757575" rx={7.05} ry={41.25} transform="rotate(-47.48 69.275 57.34)"></ellipse>
                        <path fill="#dfecf5" d="M68.13 22.25c-.97.39-1.85 1.25-1.9 2.29c-.06 1.29 1.98 2.63 4.39 2.21c3.91-.69 7.16-.55 8.21-.37c.56.1 2.62.1 2.62-1.19c0-1.32-2.05-2.19-2.58-2.4c-3-1.19-7.52-1.82-10.74-.54m-19.19 4.31c-.34 1.54 2.71 2.53 3.39 2.73c1.41.43 5.26 1.84 5.9 1.32c.45-.37.53-1.44-3.52-3.7c-3.21-1.8-5.44-1.81-5.77-.35"></path>
                        <radialGradient id="SVG471pUYwp" cx={79.276} cy={48.098} r={123.225} gradientTransform="matrix(-.7157 .6984 -.1115 -.1142 141.374 -1.776)" gradientUnits="userSpaceOnUse">
                          <stop offset={0} stopColor="#4fc3f7"></stop>
                          <stop offset={0.83} stopColor="#4fc3f7" stopOpacity={0}></stop>
                        </radialGradient>
                        <path fill="url(#SVG471pUYwp)" d="M6.71 120.14c-2.09-2.09-1.68-7.4.66-9.49l58.66-52.79a2.71 2.71 0 0 1 3.79 0a2.7 2.7 0 0 1 .04 3.82l-54.26 57.4c-2.47 2.6-6.8 3.16-8.89 1.06"></path>
                        <linearGradient id="SVGwh61XbfY" x1={69.927} x2={22.517} y1={58.047} y2={111.451} gradientUnits="userSpaceOnUse">
                          <stop offset={0} stopColor="#4fc3f7"></stop>
                          <stop offset={0.83} stopColor="#4fc3f7" stopOpacity={0}></stop>
                        </linearGradient>
                        <path fill="url(#SVGwh61XbfY)" d="M70.27 58.5c-31.63 27.37-54.62 58.91-55.28 61.14c0 0 .56-.52.59-.56l54.26-57.4c.86-.87.99-2.16.43-3.18"></path>
                        <radialGradient id="SVGdqBLKbKA" cx={61.263} cy={35.447} r={94.412} gradientTransform="matrix(-.7902 .6129 -.0978 -.1261 118.085 7.166)" gradientUnits="userSpaceOnUse">
                          <stop offset={0} stopColor="#4fc3f7"></stop>
                          <stop offset={0.83} stopColor="#4fc3f7" stopOpacity={0}></stop>
                        </radialGradient>
                        <path fill="url(#SVGdqBLKbKA)" d="m9.41 77.98l44.76-31.47c1.17-.9 2.84-.7 3.76.45c.93 1.16.74 2.86-.42 3.8L13 87.76c-2.9 2.41-6.26 3.28-8.4-.51c-2.19-3.85 2.21-7.44 4.81-9.27"></path>
                        <linearGradient id="SVGcYVTZdbi" x1={53.324} x2={14.231} y1={44.822} y2={87.377} gradientTransform="rotate(6.88 23.825 79.01)" gradientUnits="userSpaceOnUse">
                          <stop offset={0} stopColor="#4fc3f7"></stop>
                          <stop offset={0.83} stopColor="#4fc3f7" stopOpacity={0}></stop>
                        </linearGradient>
                        <path fill="url(#SVGcYVTZdbi)" d="M58.31 47.65c-.19-.04-34.81 23.68-46.16 40.8L57.5 50.76c.96-.76 1.24-2.03.81-3.11"></path>
                        <radialGradient id="SVGaywB3ded" cx={43.953} cy={24.996} r={70.073} gradientTransform="matrix(-.8551 .5185 -.0827 -.1365 93.478 13.157)" gradientUnits="userSpaceOnUse">
                          <stop offset={0} stopColor="#4fc3f7"></stop>
                          <stop offset={0.83} stopColor="#4fc3f7" stopOpacity={0}></stop>
                        </radialGradient>
                        <path fill="url(#SVGaywB3ded)" d="M5.09 62.38C3.09 58 7.7 55.9 7.7 55.9l35.55-19.75c1.25-.77 2.9-.4 3.69.85a2.7 2.7 0 0 1-.82 3.73L12.1 63.39s-4.84 3.75-7.01-1.01"></path>
                        <linearGradient id="SVGKCvXObFc" x1={38.337} x2={9.822} y1={32.629} y2={63.669} gradientTransform="rotate(12.933 15.624 72.315)" gradientUnits="userSpaceOnUse">
                          <stop offset={0} stopColor="#4fc3f7"></stop>
                          <stop offset={0.83} stopColor="#4fc3f7" stopOpacity={0}></stop>
                        </linearGradient>
                        <path fill="url(#SVGKCvXObFc)" d="M47.25 37.72c-.19-.06-18.51 9.7-36.37 26.41l35.23-23.4a2.71 2.71 0 0 0 1.14-3.01"></path>
                        <radialGradient id="SVGsmzkAbvy" cx={100.706} cy={64.392} r={97.119} gradientTransform="matrix(-.6174 .7867 .1255 .0985 141.612 -26.248)" gradientUnits="userSpaceOnUse">
                          <stop offset={0} stopColor="#4fc3f7"></stop>
                          <stop offset={0.83} stopColor="#4fc3f7" stopOpacity={0}></stop>
                        </radialGradient>
                        <path fill="url(#SVGsmzkAbvy)" d="m48.38 117.92l32.7-46.36c.9-1.17.69-2.9-.45-3.76c-1.19-.9-2.86-.74-3.8.42L38.6 114.34c-2.41 2.9-3.28 6.26.51 8.4c3.85 2.18 7.44-2.22 9.27-4.82"></path>
                        <linearGradient id="SVGdqUORbPZ" x1={95.906} x2={56.6} y1={76.972} y2={119.758} gradientTransform="rotate(-3.078 -13.274 321.193)" gradientUnits="userSpaceOnUse">
                          <stop offset={0} stopColor="#4fc3f7"></stop>
                          <stop offset={0.83} stopColor="#4fc3f7" stopOpacity={0}></stop>
                        </linearGradient>
                        <path fill="url(#SVGdqUORbPZ)" d="M81.11 68.3c-.5.51-26.25 33.02-34.47 51.84l34.38-48.5c.8-.98.84-2.51.09-3.34"></path>
                        <radialGradient id="SVG1QOjteVm" cx={87.278} cy={48.666} r={73.408} gradientTransform="matrix(-.5065 .8622 .1376 .0808 133.433 -8.723)" gradientUnits="userSpaceOnUse">
                          <stop offset={0} stopColor="#4fc3f7"></stop>
                          <stop offset={0.83} stopColor="#4fc3f7" stopOpacity={0}></stop>
                        </radialGradient>
                        <path fill="url(#SVG1QOjteVm)" d="M64.89 122.83c4.37 2 6.48-2.61 6.48-2.61L92.3 81.38c.77-1.25-.09-3-.85-3.69c-.82-.75-2.93-.44-3.73.82l-23.85 37.31c.01 0-3.74 4.84 1.02 7.01"></path>
                        <linearGradient id="SVGyRJBOeLq" x1={84.048} x2={53.924} y1={59.372} y2={92.163} gradientTransform="rotate(-16.266 156.843 42.953)" gradientUnits="userSpaceOnUse">
                          <stop offset={0} stopColor="#4fc3f7"></stop>
                          <stop offset={0.83} stopColor="#4fc3f7" stopOpacity={0}></stop>
                        </linearGradient>
                        <path fill="url(#SVGyRJBOeLq)" d="M91.71 77.92c-.19.04-13.16 19.47-20.59 42.77l20.83-38.64c1.13-1.51.57-3.31-.24-4.13"></path>
                      </svg>
                    </div>
                    <div>
                      <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>4</div>
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {t('luxuryCondoPage.investment.collection.specs.bathrooms')}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`p-4 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'} flex items-center justify-center`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24">
                        <g fill="none">
                          <path fill="#ff808c" d="M4.826 9.13h14.348A3.826 3.826 0 0 1 23 12.957v4.782a.957.957 0 0 1-.957.957H1.957A.956.956 0 0 1 1 17.739v-4.783A3.826 3.826 0 0 1 4.826 9.13"></path>
                          <path fill="#ffbfc5" d="M22.88 12a3.826 3.826 0 0 0-3.706-2.87H4.827A3.826 3.826 0 0 0 1.12 12z"></path>
                          <path fill="#ffef5e" d="M2.914 13.913h2.87L5.305 12H1.122a4 4 0 0 0-.117.78a2.15 2.15 0 0 0 1.91 1.133M18.696 12l-.478 1.913h2.87A2.16 2.16 0 0 0 23 12.778a4 4 0 0 0-.12-.778z"></path>
                          <path fill="#66e1ff" d="m4.348 9.13l.69-4.14A1.91 1.91 0 0 1 6.93 3.392h10.146a1.91 1.91 0 0 1 1.886 1.599l.69 4.14z"></path>
                          <path fill="#c2f3ff" d="M15.348 3.391H6.93a1.91 1.91 0 0 0-1.889 1.6l-.693 4.14h5.26z"></path>
                          <path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M4.826 9.13h14.348A3.826 3.826 0 0 1 23 12.957v4.782a.957.957 0 0 1-.957.957H1.957A.956.956 0 0 1 1 17.739v-4.783A3.826 3.826 0 0 1 4.826 9.13m-.478 0l.69-4.14a1.91 1.91 0 0 1 1.886-1.6h10.15a1.91 1.91 0 0 1 1.887 1.599l.69 4.14" strokeWidth={1}></path>
                          <path fill="#ff808c" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="m19.652 9.13l1.435-1.913h1.435a.48.48 0 0 1 .478.479v.956a.48.48 0 0 1-.478.478zm-15.304 0L2.913 7.217H1.478A.48.48 0 0 0 1 7.696v.956a.48.48 0 0 0 .478.478z" strokeWidth={1}></path>
                          <path fill="#808080" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M5.782 18.696v.956a.956.956 0 0 1-.956.957H2.913a.957.957 0 0 1-.957-.957v-.956zm16.262 0v.956a.956.956 0 0 1-.957.957h-1.913a.957.957 0 0 1-.956-.957v-.956z" strokeWidth={1}></path>
                          <path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M22.88 12h-4.184l-.478 1.913h2.87A2.16 2.16 0 0 0 23 12.78M1.12 12h4.184l.479 1.913h-2.87A2.15 2.15 0 0 1 1 12.78" strokeWidth={1}></path>
                          <path fill="#808080" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="m18.218 13.913l-1.953.78a3 3 0 0 1-.923.177H8.174a2.4 2.4 0 0 1-.907-.215l-1.484-.742L5.305 12h13.391z" strokeWidth={1}></path>
                          <path fill="#b2b2b2" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="m5.305 18.696l.956-1.913H17.74l.956 1.913z" strokeWidth={1}></path>
                          <path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M17.74 16.783h3.347m-18.174 0h3.348" strokeWidth={1}></path>
                        </g>
                      </svg>
                    </div>
                    <div>
                      <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>2</div>
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {t('contemporaryTownhousePage.investment.collection.specs.parking')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Features List */}
              <div className="space-y-3 mb-8">
                {[
                  t('luxuryCondoPage.features.items.cityViews.description'),
                  t('luxuryCondoPage.features.items.privateDining.description'),
                  t('luxuryVillasPage.features.items.masterSuite.description'),
                  t('contemporaryTownhousePage.features.items.smartHomeTechnology.description'),
                  t('luxuryCondoPage.features.items.rooftopPool.description')
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="flex flex-wrap gap-4">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  {t('luxuryVillasPage.floorPlan.cta.schedule')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section
        id="features"
        className={isDark ? 'py-24 bg-black relative overflow-hidden' : 'py-24 bg-gray-50 relative overflow-hidden'}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-red-500 text-sm font-semibold tracking-wider uppercase">{t('luxuryVillasPage.features.badge')}</span>
            <h2 className={isDark ? 'text-5xl font-bold text-white mt-4 mb-6' : 'text-5xl font-bold text-black mt-4 mb-6'}>
              {t('luxuryVillasPage.features.title')}
            </h2>
            <p className={isDark ? 'text-xl text-gray-300 max-w-3xl mx-auto' : 'text-xl text-gray-600 max-w-3xl mx-auto'}>
              {t('luxuryVillasPage.features.subtitle')}
            </p>
          </div>

          {/* Horizontal Scrolling Gallery */}
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {[
                { 
                  src: '/images/67S41.jpg', 
                  title: t('luxuryCondoPage.features.items.rooftopPool.title'),
                  subtitle: t('luxuryCondoPage.features.items.rooftopPool.description')
                },
                { 
                  src: '/images/67S42.jpg', 
                  title: t('luxuryCondoPage.features.items.privateDining.title'),
                  subtitle: t('luxuryCondoPage.features.items.privateDining.description')
                },
                { 
                  src: '/images/67S43.jpg', 
                  title: t('luxuryVillasPage.features.items.masterSuite.title'),
                  subtitle: t('luxuryVillasPage.features.items.masterSuite.description')
                },
                { 
                  src: '/images/67S44.jpg', 
                  title: t('contemporaryTownhousePage.gallery.items.privateTerrace.title'),
                  subtitle: t('luxuryCondoPage.features.items.cityViews.description')
                }
              ].map((item, idx) => (
                <div key={idx} className="flex-shrink-0 w-[280px] snap-start group cursor-pointer">
                  <div className="relative h-[380px] rounded-2xl overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105">
                    {/* Background Image */}
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.subtitle}</p>
                      
                      {/* View More Link */}
                      <button className="mt-4 text-white text-sm font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {t('luxuryVillasPage.features.viewMore')}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                    
                    {/* Decorative Border on Hover */}
                    <div className="absolute inset-0 border-2 border-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  </div>
                </div>
              ))}
              </div>
          </div>
        </div>
      </section>

      {/* Visual Tour Gallery Section */}
      <section className={isDark ? 'py-20 bg-gray-900' : 'py-20 bg-white'}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-red-500 text-sm font-semibold tracking-wider uppercase">{t('luxuryCondoPage.gallery.badge')}</span>
            <h2 className={isDark ? 'text-4xl font-bold text-white mt-4 mb-4' : 'text-4xl font-bold text-black mt-4 mb-4'}>
              {t('luxuryCondoPage.gallery.title')}
            </h2>
            <p className={isDark ? 'text-lg text-gray-400 max-w-2xl mx-auto' : 'text-lg text-gray-600 max-w-2xl mx-auto'}>
              {t('luxuryCondoPage.gallery.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: '/images/67S45.jpg', title: t('luxuryCondoPage.gallery.items.modernPenthouse.title') },
              { src: '/images/67S46.jpg', title: t('luxuryCondoPage.gallery.items.executiveSuite.title') },
              { src: '/images/67S47.jpg', title: t('luxuryCondoPage.gallery.items.waterfrontCondo.title') },
              { src: '/images/67S48.jpg', title: t('luxuryCondoPage.gallery.items.skyVilla.title') },
              { src: '/images/67S49.jpg', title: t('luxuryCondoPage.gallery.items.designerLoft.title') },
              { src: '/images/67S410.jpg', title: t('luxuryCondoPage.gallery.items.presidentialSuite.title') }
            ].map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Location & Amenities Section */}
      <section className={isDark ? 'py-24 bg-gray-900 relative overflow-hidden' : 'py-24 bg-white relative overflow-hidden'}>
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-red-500 text-sm font-semibold tracking-wider uppercase">{t('luxuryCondoPage.location.badge')}</span>
            <h2 className={isDark ? 'text-5xl font-bold text-white mt-4 mb-6' : 'text-5xl font-bold text-black mt-4 mb-6'}>
              {t('luxuryCondoPage.location.title')}
            </h2>
            <p className={isDark ? 'text-xl text-gray-300 max-w-3xl mx-auto' : 'text-xl text-gray-600 max-w-3xl mx-auto'}>
              {t('luxuryCondoPage.location.subtitle')}
            </p>
          </div>

          {/* Location Carousel */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="relative">
              {/* Main Carousel Container */}
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {[
                    {
                      image: '/images/Modern Penthouse.jpg',
                      titleKey: 'luxuryCondoPage.location.locations.manhattan.title',
                      subtitleKey: 'luxuryCondoPage.location.locations.manhattan.subtitle',
                      descriptionKey: 'luxuryCondoPage.location.locations.manhattan.description',
                      highlightsKey: 'luxuryCondoPage.location.locations.manhattan.highlights'
                    },
                    {
                      image: '/images/Luxury Villa.jpg',
                      titleKey: 'luxuryCondoPage.location.locations.downtownLA.title',
                      subtitleKey: 'luxuryCondoPage.location.locations.downtownLA.subtitle',
                      descriptionKey: 'luxuryCondoPage.location.locations.downtownLA.description',
                      highlightsKey: 'luxuryCondoPage.location.locations.downtownLA.highlights'
                    },
                    {
                      image: '/images/Waterfront Mansion.jpg',
                      titleKey: 'luxuryCondoPage.location.locations.miamiBeach.title',
                      subtitleKey: 'luxuryCondoPage.location.locations.miamiBeach.subtitle',
                      descriptionKey: 'luxuryCondoPage.location.locations.miamiBeach.description',
                      highlightsKey: 'luxuryCondoPage.location.locations.miamiBeach.highlights'
                    },
                    {
                      image: '/images/Estate Home.jpg',
                      titleKey: 'luxuryCondoPage.location.locations.goldCoast.title',
                      subtitleKey: 'luxuryCondoPage.location.locations.goldCoast.subtitle',
                      descriptionKey: 'luxuryCondoPage.location.locations.goldCoast.description',
                      highlightsKey: 'luxuryCondoPage.location.locations.goldCoast.highlights'
                    }
                  ].map((location, idx) => (
                    <div key={idx} className="w-full flex-shrink-0 relative">
                      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url('${location.image}')` }}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        
                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                          <div className="max-w-2xl">
                            <h3 className="text-4xl font-bold mb-2">{t(location.titleKey)}</h3>
                            <p className="text-xl text-red-300 mb-4">{t(location.subtitleKey)}</p>
                            <p className="text-lg mb-6 opacity-90">{t(location.descriptionKey)}</p>
                            
                            {/* Highlights */}
                            <div className="flex flex-wrap gap-3">
                              {t(location.highlightsKey, { returnObjects: true }).map((highlight, hIdx) => (
                                <span key={hIdx} className="bg-red-600/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                                  {highlight}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={() => setCurrentSlide(prev => prev === 0 ? 3 : prev - 1)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-20"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={() => setCurrentSlide(prev => prev === 3 ? 0 : prev + 1)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-20"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {[0, 1, 2, 3].map((dot, idx) => (
                  <button
                    key={idx}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      currentSlide === idx ? 'bg-white' : 'bg-white/50 hover:bg-white'
                    }`}
                    onClick={() => setCurrentSlide(idx)}
                  ></button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Investment Opportunity Section */}
      <section className={isDark ? 'py-24 bg-gray-900' : 'py-24 bg-gray-50'}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-red-500 text-sm font-semibold tracking-wider uppercase">{t('luxuryCondoPage.investment.badge')}</span>
            <h2 className={isDark ? 'text-5xl font-bold text-white mt-4 mb-6' : 'text-5xl font-bold text-black mt-4 mb-6'}>
              {t('luxuryCondoPage.investment.title')}
            </h2>
            <p className={isDark ? 'text-xl text-gray-300 max-w-3xl mx-auto' : 'text-xl text-gray-600 max-w-3xl mx-auto'}>
              {t('luxuryCondoPage.investment.subtitle')}
            </p>
          </div>

          {/* Hero Pricing Card */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <div className="relative bg-gradient-to-br from-red-600 to-red-800 p-12 text-center text-white">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10">
                  <h3 className="text-4xl font-bold mb-4">{t('luxuryCondoPage.investment.collection.title')}</h3>
                  <div className="text-7xl font-bold mb-4">{t('luxuryCondoPage.investment.collection.price')}</div>
                  <p className="text-xl text-red-100 mb-8">{t('luxuryCondoPage.investment.collection.subtitle')}</p>
                  
                  <div className="grid md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <div className="text-2xl font-bold">3,200</div>
                      <div className="text-sm text-red-100">{t('luxuryCondoPage.investment.collection.specs.sqft')}</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <div className="text-2xl font-bold">3</div>
                      <div className="text-sm text-red-100">{t('luxuryCondoPage.investment.collection.specs.bedrooms')}</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <div className="text-2xl font-bold">4</div>
                      <div className="text-sm text-red-100">{t('luxuryCondoPage.investment.collection.specs.bathrooms')}</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <div className="text-2xl font-bold">2</div>
                      <div className="text-sm text-red-100">{t('contemporaryTownhousePage.investment.collection.specs.parking')}</div>
                    </div>
                  </div>
                  
                  <button className="bg-white text-red-600 px-8 py-4 font-bold text-lg rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                    {t('luxuryCondoPage.investment.collection.cta')}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Investment Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[ 
              {
                icon: "📈",
                titleKey: 'luxuryCondoPage.investment.benefits.strongROI.title',
                valueKey: 'luxuryCondoPage.investment.benefits.strongROI.value',
                descriptionKey: 'luxuryCondoPage.investment.benefits.strongROI.description'
              },
              {
                icon: "🏆",
                titleKey: 'luxuryCondoPage.investment.benefits.primeLocation.title',
                valueKey: 'luxuryCondoPage.investment.benefits.primeLocation.value',
                descriptionKey: 'luxuryCondoPage.investment.benefits.primeLocation.description'
              },
              {
                icon: "💰",
                titleKey: 'luxuryCondoPage.investment.benefits.taxAdvantages.title',
                valueKey: 'luxuryCondoPage.investment.benefits.taxAdvantages.value',
                descriptionKey: 'luxuryCondoPage.investment.benefits.taxAdvantages.description'
              },
              {
                icon: "🌍",
                titleKey: 'luxuryCondoPage.investment.benefits.globalDemand.title',
                valueKey: 'luxuryCondoPage.investment.benefits.globalDemand.value',
                descriptionKey: 'luxuryCondoPage.investment.benefits.globalDemand.description'
              }
            ].map((benefit, idx) => (
              <div key={idx} className={isDark ? 'bg-gray-800 rounded-2xl p-8 text-center hover:shadow-red-500/20 transition-all duration-300' : 'bg-white rounded-2xl p-8 text-center hover:shadow-red-500/20 transition-all duration-300 shadow-lg'}>
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h4 className={isDark ? 'text-xl font-bold text-white mb-2' : 'text-xl font-bold text-black mb-2'}>
                  {t(benefit.titleKey)}
                </h4>
                <div className={isDark ? 'text-3xl font-bold text-red-500 mb-2' : 'text-3xl font-bold text-red-600 mb-2'}>
                  {t(benefit.valueKey)}
                </div>
                <p className={isDark ? 'text-gray-300 text-sm' : 'text-gray-600 text-sm'}>
                  {t(benefit.descriptionKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Inquiry Section */}
      <section
        id="contact"
        className="relative min-h-screen flex items-center justify-center"
      >
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/images/67S20.jpg')" }}>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-24 text-center">
          <span className="text-red-500 text-sm font-semibold tracking-wider uppercase">{t('luxuryCondoPage.contact.badge')}</span>
          <h2 className="text-5xl font-bold text-white mt-4 mb-6">
            {t('luxuryCondoPage.contact.title')}
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
            {t('luxuryCondoPage.contact.subtitle')}
          </p>
          
          <div className="flex justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {t('luxuryCondoPage.contact.cta.contactUs')}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}