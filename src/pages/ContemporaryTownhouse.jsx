import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollAnimation from '../components/ScrollAnimation'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '../hooks/useLanguage'

export default function ContemporaryTownhouse() {
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

  // Language switching handler
  const handleLanguageChange = (languageCode) => {
    changeLanguage(languageCode)
  }

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
          <source src="/VILLA.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dynamic Overlay */}
        <div className={`absolute inset-0 ${isDark ? 'bg-black/70' : 'bg-black/60'}`}></div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-4xl">
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6" style={{ fontFamily: 'serif' }}>
              {t('contemporaryTownhousePage.hero.title')}
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
            <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto mb-8">
              {t('contemporaryTownhousePage.hero.description')}
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
            <div className="mt-8 flex gap-6 justify-center items-center flex-wrap">
              <a
                href="#features"
                className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 relative overflow-hidden"
              >
                <span className="relative z-10">{t('contemporaryTownhousePage.hero.ctaExplore')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#contact"
                className="group bg-transparent text-white px-8 py-4 font-bold text-lg border-2 border-white rounded-lg transition-all duration-300 hover:bg-white hover:text-black relative overflow-hidden"
              >
                <span className="relative z-10">{t('contemporaryTownhousePage.hero.ctaSchedule')}</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contemporary Features Section */}
      <section
        id="features"
        className={isDark ? 'py-24 bg-gray-900 relative overflow-hidden' : 'py-24 bg-white relative overflow-hidden'}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-red-500 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-red-500 text-sm font-semibold tracking-wider uppercase">{t('contemporaryTownhousePage.features.badge')}</span>
            <h2 className={isDark ? 'text-5xl font-bold text-white mt-4 mb-6' : 'text-5xl font-bold text-black mt-4 mb-6'}>
              {t('contemporaryTownhousePage.features.title')}
            </h2>
            <p className={isDark ? 'text-xl text-gray-300 max-w-3xl mx-auto' : 'text-xl text-gray-600 max-w-3xl mx-auto'}>
              {t('contemporaryTownhousePage.features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🏢",
                titleKey: "contemporaryTownhousePage.features.items.modernArchitecture.title",
                descriptionKey: "contemporaryTownhousePage.features.items.modernArchitecture.description",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: "📱",
                titleKey: "contemporaryTownhousePage.features.items.smartHomeTechnology.title",
                descriptionKey: "contemporaryTownhousePage.features.items.smartHomeTechnology.description",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: "🌆",
                titleKey: "contemporaryTownhousePage.features.items.primeUrbanLocation.title",
                descriptionKey: "contemporaryTownhousePage.features.items.primeUrbanLocation.description",
                gradient: "from-gray-500 to-gray-700"
              },
              {
                icon: "✨",
                titleKey: "contemporaryTownhousePage.features.items.luxuryFinishes.title",
                descriptionKey: "contemporaryTownhousePage.features.items.luxuryFinishes.description",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                icon: "🌱",
                titleKey: "contemporaryTownhousePage.features.items.energyEfficient.title",
                descriptionKey: "contemporaryTownhousePage.features.items.energyEfficient.description",
                gradient: "from-green-400 to-teal-500"
              },
              {
                icon: "🏠",
                titleKey: "contemporaryTownhousePage.features.items.conciergeServices.title",
                descriptionKey: "contemporaryTownhousePage.features.items.conciergeServices.description",
                gradient: "from-slate-500 to-slate-700"
              }
            ].map((feature, idx) => (
              <div
                key={feature.titleKey}
                className={`group relative ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-transparent hover:border-red-500/20`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                {/* Icon with background */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                </div>
                
                <h3 className={`relative z-10 ${isDark ? 'text-xl font-bold text-white mb-4' : 'text-xl font-bold text-black mb-4'} group-hover:text-red-500 transition-colors duration-300`}>
                  {t(feature.titleKey)}
                </h3>
                <p className={`relative z-10 ${isDark ? 'text-gray-300 leading-relaxed' : 'text-gray-600 leading-relaxed'}`}>
                  {t(feature.descriptionKey)}
                </p>
                
                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className={isDark ? 'py-24 bg-gray-900 relative' : 'py-24 bg-gray-50 relative'}>
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-500/5 rounded-full blur-xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-red-500 text-sm font-semibold tracking-wider uppercase">{t('contemporaryTownhousePage.gallery.badge')}</span>
            <h2 className={isDark ? 'text-5xl font-bold text-white mt-4 mb-6' : 'text-5xl font-bold text-black mt-4 mb-6'}>
              {t('contemporaryTownhousePage.gallery.title')}
            </h2>
            <p className={isDark ? 'text-xl text-gray-300 max-w-3xl mx-auto' : 'text-xl text-gray-600 max-w-3xl mx-auto'}>
              {t('contemporaryTownhousePage.gallery.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                src: '/images/Contemporary Townhouse.jpg', 
                titleKey: 'contemporaryTownhousePage.gallery.items.modernExterior.title',
                categoryKey: 'contemporaryTownhousePage.gallery.items.modernExterior.category',
                price: '$1,200,000'
              },
              { 
                src: '/images/Modern Penthouse.jpg', 
                titleKey: 'contemporaryTownhousePage.gallery.items.openLivingSpace.title',
                categoryKey: 'contemporaryTownhousePage.gallery.items.openLivingSpace.category',
                price: '$1,500,000'
              },
              { 
                src: '/images/Luxury Condo.jpg', 
                titleKey: 'contemporaryTownhousePage.gallery.items.gourmetKitchen.title',
                categoryKey: 'contemporaryTownhousePage.gallery.items.gourmetKitchen.category',
                price: '$950,000'
              },
              { 
                src: '/images/Waterfront Mansion.jpg', 
                titleKey: 'contemporaryTownhousePage.gallery.items.masterSuite.title',
                categoryKey: 'contemporaryTownhousePage.gallery.items.masterSuite.category',
                price: '$1,800,000'
              },
              { 
                src: '/images/Estate Home.jpg', 
                titleKey: 'contemporaryTownhousePage.gallery.items.privateTerrace.title',
                categoryKey: 'contemporaryTownhousePage.gallery.items.privateTerrace.category',
                price: '$1,350,000'
              },
              { 
                src: '/images/Luxury Villa.jpg', 
                titleKey: 'contemporaryTownhousePage.gallery.items.spaLikeBathroom.title',
                categoryKey: 'contemporaryTownhousePage.gallery.items.spaLikeBathroom.category',
                price: '$1,100,000'
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.src}
                    alt={t(item.titleKey)}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                      {t(item.categoryKey)}
                    </span>
                  </div>
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-black px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm">
                      {item.price}
                    </span>
                  </div>
                </div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-bold text-xl mb-2">{t(item.titleKey)}</h3>
                  <p className="text-red-300 font-semibold">{item.price}</p>
                  
                  {/* Action Button */}
                  <button className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 opacity-0 group-hover:opacity-100">
                    {t('contemporaryTownhousePage.gallery.viewDetails')}
                  </button>
                </div>
                
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
          
          {/* View All Button */}
          <div className="text-center mt-12">
            <button className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span className="flex items-center gap-2">
                {t('contemporaryTownhousePage.gallery.viewAll')}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
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
            <span className="text-red-500 text-sm font-semibold tracking-wider uppercase">{t('contemporaryTownhousePage.location.badge')}</span>
            <h2 className={isDark ? 'text-5xl font-bold text-white mt-4 mb-6' : 'text-5xl font-bold text-black mt-4 mb-6'}>
              {t('contemporaryTownhousePage.location.title')}
            </h2>
            <p className={isDark ? 'text-xl text-gray-300 max-w-3xl mx-auto' : 'text-xl text-gray-600 max-w-3xl mx-auto'}>
              {t('contemporaryTownhousePage.location.subtitle')}
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
                      image: '/images/Contemporary Townhouse.jpg',
                      titleKey: 'contemporaryTownhousePage.location.locations.brooklynHeights.title',
                      subtitleKey: 'contemporaryTownhousePage.location.locations.brooklynHeights.subtitle',
                      descriptionKey: 'contemporaryTownhousePage.location.locations.brooklynHeights.description',
                      highlightsKey: 'contemporaryTownhousePage.location.locations.brooklynHeights.highlights'
                    },
                    {
                      image: '/images/Modern Penthouse.jpg',
                      titleKey: 'contemporaryTownhousePage.location.locations.silverLake.title',
                      subtitleKey: 'contemporaryTownhousePage.location.locations.silverLake.subtitle',
                      descriptionKey: 'contemporaryTownhousePage.location.locations.silverLake.description',
                      highlightsKey: 'contemporaryTownhousePage.location.locations.silverLake.highlights'
                    },
                    {
                      image: '/images/Luxury Condo.jpg',
                      titleKey: 'contemporaryTownhousePage.location.locations.southLoop.title',
                      subtitleKey: 'contemporaryTownhousePage.location.locations.southLoop.subtitle',
                      descriptionKey: 'contemporaryTownhousePage.location.locations.southLoop.description',
                      highlightsKey: 'contemporaryTownhousePage.location.locations.southLoop.highlights'
                    },
                    {
                      image: '/images/Waterfront Mansion.jpg',
                      titleKey: 'contemporaryTownhousePage.location.locations.missionDistrict.title',
                      subtitleKey: 'contemporaryTownhousePage.location.locations.missionDistrict.subtitle',
                      descriptionKey: 'contemporaryTownhousePage.location.locations.missionDistrict.description',
                      highlightsKey: 'contemporaryTownhousePage.location.locations.missionDistrict.highlights'
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

          {/* Amenities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🚇", titleKey: "contemporaryTownhousePage.location.amenities.publicTransit.title", descKey: "contemporaryTownhousePage.location.amenities.publicTransit.description", color: "from-green-500 to-emerald-500" },
              { icon: "🛍️", titleKey: "contemporaryTownhousePage.location.amenities.shoppingDistricts.title", descKey: "contemporaryTownhousePage.location.amenities.shoppingDistricts.description", color: "from-blue-500 to-cyan-500" },
              { icon: "🍽️", titleKey: "contemporaryTownhousePage.location.amenities.diningScene.title", descKey: "contemporaryTownhousePage.location.amenities.diningScene.description", color: "from-purple-500 to-pink-500" },
              { icon: "🎭", titleKey: "contemporaryTownhousePage.location.amenities.culturalVenues.title", descKey: "contemporaryTownhousePage.location.amenities.culturalVenues.description", color: "from-orange-500 to-red-500" },
              { icon: "🏥", titleKey: "contemporaryTownhousePage.location.amenities.medicalServices.title", descKey: "contemporaryTownhousePage.location.amenities.medicalServices.description", color: "from-teal-500 to-blue-500" },
              { icon: "🎓", titleKey: "contemporaryTownhousePage.location.amenities.topSchools.title", descKey: "contemporaryTownhousePage.location.amenities.topSchools.description", color: "from-indigo-500 to-purple-500" }
            ].map((amenity, idx) => (
              <div key={idx} className={`group relative ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-red-500/20`}>
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${amenity.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 bg-gradient-to-br ${amenity.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-xl">{amenity.icon}</span>
                  </div>
                  <h4 className={`${isDark ? 'font-bold text-white mb-2' : 'font-bold text-black mb-2'} group-hover:text-red-500 transition-colors duration-300`}>
                    {t(amenity.titleKey)}
                  </h4>
                  <p className={`${isDark ? 'text-gray-300 text-sm' : 'text-gray-600 text-sm'}`}>
                    {t(amenity.descKey)}
                  </p>
                </div>
                
                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Opportunity Section */}
      <section className={isDark ? 'py-24 bg-gray-900' : 'py-24 bg-gray-50'}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-red-500 text-sm font-semibold tracking-wider uppercase">{t('contemporaryTownhousePage.investment.badge')}</span>
            <h2 className={isDark ? 'text-5xl font-bold text-white mt-4 mb-6' : 'text-5xl font-bold text-black mt-4 mb-6'}>
              {t('contemporaryTownhousePage.investment.title')}
            </h2>
            <p className={isDark ? 'text-xl text-gray-300 max-w-3xl mx-auto' : 'text-xl text-gray-600 max-w-3xl mx-auto'}>
              {t('contemporaryTownhousePage.investment.subtitle')}
            </p>
          </div>

          {/* Hero Pricing Card */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <div className="relative bg-gradient-to-br from-red-600 to-red-800 p-12 text-center text-white">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10">
                  <h3 className="text-4xl font-bold mb-4">{t('contemporaryTownhousePage.investment.collection.title')}</h3>
                  <div className="text-7xl font-bold mb-4">{t('contemporaryTownhousePage.investment.collection.price')}</div>
                  <p className="text-xl text-red-100 mb-8">{t('contemporaryTownhousePage.investment.collection.subtitle')}</p>
                  
                  <div className="grid md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <div className="text-2xl font-bold">2,800</div>
                      <div className="text-sm text-red-100">{t('contemporaryTownhousePage.investment.collection.specs.sqft')}</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <div className="text-2xl font-bold">3</div>
                      <div className="text-sm text-red-100">{t('contemporaryTownhousePage.investment.collection.specs.bedrooms')}</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <div className="text-2xl font-bold">3</div>
                      <div className="text-sm text-red-100">{t('contemporaryTownhousePage.investment.collection.specs.bathrooms')}</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <div className="text-2xl font-bold">2</div>
                      <div className="text-sm text-red-100">{t('contemporaryTownhousePage.investment.collection.specs.parking')}</div>
                    </div>
                  </div>
                  
                  <button className="bg-white text-red-600 px-8 py-4 font-bold text-lg rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                    {t('contemporaryTownhousePage.investment.collection.cta')}
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
                titleKey: "contemporaryTownhousePage.investment.benefits.strongROI.title",
                valueKey: "contemporaryTownhousePage.investment.benefits.strongROI.value",
                descriptionKey: "contemporaryTownhousePage.investment.benefits.strongROI.description"
              },
              {
                icon: "🏆",
                titleKey: "contemporaryTownhousePage.investment.benefits.primeLocation.title",
                valueKey: "contemporaryTownhousePage.investment.benefits.primeLocation.value",
                descriptionKey: "contemporaryTownhousePage.investment.benefits.primeLocation.description"
              },
              {
                icon: "💰",
                titleKey: "contemporaryTownhousePage.investment.benefits.taxAdvantages.title",
                valueKey: "contemporaryTownhousePage.investment.benefits.taxAdvantages.value",
                descriptionKey: "contemporaryTownhousePage.investment.benefits.taxAdvantages.description"
              },
              {
                icon: "🌍",
                titleKey: "contemporaryTownhousePage.investment.benefits.urbanDemand.title",
                valueKey: "contemporaryTownhousePage.investment.benefits.urbanDemand.value",
                descriptionKey: "contemporaryTownhousePage.investment.benefits.urbanDemand.description"
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

          {/* Market Insights */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className={isDark ? 'bg-gray-800 rounded-2xl p-8' : 'bg-white rounded-2xl p-8 shadow-lg'}>
              <h3 className={isDark ? 'text-2xl font-bold text-white mb-6 text-center' : 'text-2xl font-bold text-black mb-6 text-center'}>
                {t('contemporaryTownhousePage.investment.marketInsights.title')}
              </h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className={isDark ? 'text-3xl font-bold text-red-500 mb-2' : 'text-3xl font-bold text-red-600 mb-2'}>12+</div>
                  <div className={isDark ? 'text-white font-semibold mb-1' : 'text-black font-semibold mb-1'}>{t('contemporaryTownhousePage.investment.marketInsights.yearsExperience')}</div>
                  <div className={isDark ? 'text-gray-300 text-sm' : 'text-gray-600 text-sm'}>{t('contemporaryTownhousePage.investment.marketInsights.experienceDesc')}</div>
                </div>
                <div>
                  <div className={isDark ? 'text-3xl font-bold text-red-500 mb-2' : 'text-3xl font-bold text-red-600 mb-2'}>300+</div>
                  <div className={isDark ? 'text-white font-semibold mb-1' : 'text-black font-semibold mb-1'}>{t('contemporaryTownhousePage.investment.marketInsights.propertiesSold')}</div>
                  <div className={isDark ? 'text-gray-300 text-sm' : 'text-gray-600 text-sm'}>{t('contemporaryTownhousePage.investment.marketInsights.propertiesDesc')}</div>
                </div>
                <div>
                  <div className={isDark ? 'text-3xl font-bold text-red-500 mb-2' : 'text-3xl font-bold text-red-600 mb-2'}>$1.2B+</div>
                  <div className={isDark ? 'text-white font-semibold mb-1' : 'text-black font-semibold mb-1'}>{t('contemporaryTownhousePage.investment.marketInsights.totalSales')}</div>
                  <div className={isDark ? 'text-gray-300 text-sm' : 'text-gray-600 text-sm'}>{t('contemporaryTownhousePage.investment.marketInsights.salesDesc')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Inquiry Section */}
      <section
        id="contact"
        className={isDark ? 'py-24 bg-gray-900' : 'py-24 bg-white'}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-red-500 text-sm font-semibold tracking-wider uppercase">{t('contemporaryTownhousePage.contact.badge')}</span>
            <h2 className={isDark ? 'text-5xl font-bold text-white mt-4 mb-6' : 'text-5xl font-bold text-black mt-4 mb-6'}>
              {t('contemporaryTownhousePage.contact.title')}
            </h2>
            <p className={isDark ? 'text-xl text-gray-300 max-w-3xl mx-auto' : 'text-xl text-gray-600 max-w-3xl mx-auto'}>
              {t('contemporaryTownhousePage.contact.subtitle')}
            </p>
          </div>

          {/* Contact Card with Full Width Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            {/* Background Image */}
            <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/images/Contemporary Townhouse.jpg')" }}>
              <div className="absolute inset-0 bg-black/50"></div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8">
                <h3 className={isDark ? 'text-3xl font-bold text-white mb-4' : 'text-3xl font-bold text-white mb-4'}>
                  {t('contemporaryTownhousePage.contact.cta.ready')}
                </h3>
                <p className={isDark ? 'text-xl text-white/90 mb-8 max-w-2xl' : 'text-xl text-white/90 mb-8 max-w-2xl'}>
                  {t('contemporaryTownhousePage.contact.cta.description')}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => navigate('/contact')}
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    {t('contemporaryTownhousePage.contact.cta.contactUs')}
                  </button>
                  <button
                    onClick={() => window.open('tel:+15551234567', '_self')}
                    className="bg-transparent text-white px-8 py-4 font-bold text-lg border-2 border-white rounded-lg transition-all duration-300 hover:bg-white hover:text-black"
                  >
                    {t('contemporaryTownhousePage.contact.cta.call')}
                  </button>
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