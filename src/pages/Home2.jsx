import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getCurrentUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import Counter from '../components/Counter'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function Home2() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [isDark, setIsDark] = useState(false)
  const [filters, setFilters] = useState({ location: '', type: 'Any', min: '', max: '' })

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login', { replace: true })
    }
    const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'))
    checkDark()
    const observer = new MutationObserver(checkDark)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [navigate])

  const user = getCurrentUser()

  const featuredProperties = [
    { id: 'prop-1', titleKey: 'home2.featured.properties.modernFamilyHome.title', locationKey: 'home2.featured.properties.modernFamilyHome.location', beds: 4, baths: 3, area: 2400, price: '$850,000', image: '/images/Modern Family Home.jpg' },
    { id: 'prop-2', titleKey: 'home2.featured.properties.luxuryDowntownCondo.title', locationKey: 'home2.featured.properties.luxuryDowntownCondo.location', beds: 2, baths: 2, area: 1200, price: '$1,250,000', image: '/images/Luxury Downtown Condo.jpg' },
    { id: 'prop-3', titleKey: 'home2.featured.properties.cozySuburbanCottage.title', locationKey: 'home2.featured.properties.cozySuburbanCottage.location', beds: 3, baths: 2, area: 1500, price: '$520,000', image: '/images/Cozy Suburban Cottage.jpg' },
    { id: 'prop-4', titleKey: 'home2.featured.properties.beachfrontVilla.title', locationKey: 'home2.featured.properties.beachfrontVilla.location', beds: 5, baths: 4, area: 3800, price: '$2,300,000', image: '/images/Beachfront Villa.jpg' },
    { id: 'prop-5', titleKey: 'home2.featured.properties.smartEcoHouse.title', locationKey: 'home2.featured.properties.smartEcoHouse.location', beds: 4, baths: 3, area: 2100, price: '$940,000', image: '/images/Smart Eco House.jpg' },
    { id: 'prop-6', titleKey: 'home2.featured.properties.penthouseSkylineView.title', locationKey: 'home2.featured.properties.penthouseSkylineView.location', beds: 3, baths: 3, area: 2000, price: '$1,750,000', image: '/images/Penthouse With Skyline View.jpg' }
  ]

  return (
    <div className={`${isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'} transition-colors duration-300`}>
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
          <source src="/HOME2.mp4" type="video/mp4" />
          {t('common.videoNotSupported')}
        </video>

        {/* Dynamic Overlay */}
        <div className={`absolute inset-0 ${isDark ? 'bg-black/70' : 'bg-black/60'}`}></div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6 whitespace-nowrap" style={{ fontFamily: 'serif' }}>
              {t('home2.hero.title')}
            </h1>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto mb-8 whitespace-nowrap">
              {t('home2.hero.subtitle')}
            </p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <div className="mt-8 flex gap-6 justify-center items-center flex-wrap">
              <button
                onClick={() => navigate('/services')}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {t('home2.hero.searchButton')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured listings */}
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className={`text-3xl md:text-4xl font-light ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('home2.featured.title')}</h2>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mt-2`}>{t('home2.featured.subtitle')}</p>
            </div>
            <button onClick={() => navigate('/services')} className="px-5 py-2.5 rounded-lg border border-gray-300 hover:border-gray-400 text-sm">{t('home2.featured.browseAll')}</button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((p, idx) => (
              <motion.div key={p.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition`}>
                <div className="relative aspect-video overflow-hidden">
                  <img src={p.image} alt={t(p.titleKey)} className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3 bg-white/90 text-gray-900 text-xs font-semibold px-2.5 py-1 rounded-full">{t('home2.featured.forSale')}</div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} text-lg font-semibold`}>{t(p.titleKey)}</h3>
                      <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm`}>{t(p.locationKey)}</p>
                    </div>
                    <div className="text-red-500 font-bold">{p.price}</div>
                  </div>
                  <div className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mt-3 text-sm flex gap-4`}>
                    <span>{p.beds} {t('home2.featured.beds')}</span>
                    <span>{p.baths} {t('home2.featured.baths')}</span>
                    <span>{p.area} {t('home2.featured.sqft')}</span>
                  </div>
                  <div className="mt-5 flex gap-3">
                    <button onClick={() => navigate('/contact')} className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm">{t('home2.featured.scheduleTour')}</button>
                    <button onClick={() => navigate('/contact')} className="px-4 py-2 border rounded-lg text-sm">{t('home2.featured.contactAgent')}</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className={`${isDark ? 'bg-gray-800' : 'bg-gray-50'} py-20`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-light ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('home2.neighborhoods.title')}</h2>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mt-3`}>{t('home2.neighborhoods.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: t('home2.neighborhoods.riverside'), image: '/images/River Side.jpg', tags: [t('home2.neighborhoods.tags.parks'), t('home2.neighborhoods.tags.schools'), t('home2.neighborhoods.tags.family')] },
              { name: t('home2.neighborhoods.downtown'), image: '/images/downtown.jpg', tags: [t('home2.neighborhoods.tags.nightlife'), t('home2.neighborhoods.tags.transit'), t('home2.neighborhoods.tags.dining')] },
              { name: t('home2.neighborhoods.hillside'), image: '/images/Hillside.jpg', tags: [t('home2.neighborhoods.tags.views'), t('home2.neighborhoods.tags.trails'), t('home2.neighborhoods.tags.quiet')] }
            ].map((n, i) => (
              <motion.div key={n.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-2xl overflow-hidden shadow-lg group">
                <div className="relative h-56">
                  <img src={n.image} alt={n.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-xl font-semibold">{n.name}</div>
                    <div className="flex gap-2 mt-1 text-xs opacity-90">
                      {n.tags.map((t) => (
                        <span key={t} className="bg-white/20 px-2 py-0.5 rounded-full">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={`py-16 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className={`${isDark ? 'bg-gray-800' : 'bg-gray-100'} rounded-xl p-6 text-center`}>
            <div className="flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 128 128" className="text-purple-600">
                <path fill="#ab5832" d="M19.16 48.94V28.58l-1.64.1V16.14l15.82-.1v12.35H31.7v11.96z"></path>
                <path fill="#fff3e1" d="M64.11 23.33L18.67 68.99l.35 42.21l89.75-.85l.13-45z"></path>
                <path fill="#5f4e47" d="m16.97 103.79l3.14-1.73V67.98l-2.92 1.95c-.01 0 .32 33.86-.22 33.86m90.23-33.97v32.03l3.14 1.73V71.01z"></path>
                <path fill="#bcaa93" d="M64.42 28.21L17.18 72.42V61.27l47.29-44.79l45.87 47.5v9.41z"></path>
                <path fill="#ab5832" d="m12.55 59.36l-2.77 5.11l7.43-.11s46.35-45.08 47.35-45.12c1.21-.05 45.76 45.91 45.76 45.91l6.59-.1l-49.44-53.26l-7.26-.48z"></path>
                <path fill="#ed6c31" d="M4 63.19c-.78.95-.01 1.45.62 1.45s7.89-.21 7.89-.21l50.04-48.69s1.15-1.18 1.97-1.14c.89.04 2.04 1.17 2.04 1.17l50.28 49.29s5.73.02 6.64-.21c.99-.24.49-1.18-.73-2.49c-.9-.97-51.73-51.25-52.57-52.12c-2.5-2.58-3.72-4.08-6.08-3.98c-2.37.1-3.77 1.85-6.14 4.03c-.7.66-53.63 52.5-53.96 52.9"></path>
                <path fill="#a6cfd5" d="M93.5 80.83h10.25V72.3a2.87 2.87 0 0 0-2.87-2.87H93.5zm-3.08 0v-11.4h-8a2.87 2.87 0 0 0-2.87 2.87v8.54h10.87zm0 3.24H79.55v8a2.87 2.87 0 0 0 2.87 2.87h8zm3.08 0v10.87h7.38a2.87 2.87 0 0 0 2.87-2.87v-8zm-56.75-3.24H47V72.3a2.87 2.87 0 0 0-2.87-2.87h-7.38zm-3.09 0v-11.4h-8a2.87 2.87 0 0 0-2.87 2.87v8.54h10.87zm0 3.24H22.8v8a2.87 2.87 0 0 0 2.87 2.87h8V84.07zm3.09 0v10.87h7.38A2.87 2.87 0 0 0 47 92.07v-8z"></path>
                <path fill="#d27857" d="M50.34 106.73s-.15-24.74 0-30.99c.15-6.24 6.01-11.64 12.8-11.41c8.4.29 12.72 5.01 13.03 11.1s.31 31.68.31 31.68z"></path>
                <path fill="#ab5932" d="M53.47 108.07s-.12-26.36 0-31.24c.15-6.05 4.71-9.23 10.01-8.93c6.17.35 9.22 3.63 9.46 8.4c.24 4.76.24 31.79.24 31.79z"></path>
                <path fill="#d27857" d="M69.99 86.58c-.02-4.34-.06-8.17-.12-9.34c-.16-3.15-2.4-5.6-6.75-5.75c-3.51-.12-6.4 2.62-6.48 5.85c-.03 1.19-.02 4.93 0 9.19zm-13.32 4.87c.04 5.81.09 11.16.09 11.16l13.27.04s0-5.33-.02-11.14z"></path>
                <path fill="#ffba02" d="M70.03 88.81c-.05 1.41.52 2.55 2.19 2.55s2.28-.78 2.4-2.29c.1-1.35-.83-2.55-2.4-2.45c-1.56.11-2.15 1.2-2.19 2.19"></path>
                <path fill="#728037" d="M79.61 116.31s10.88.11 18.74-.12s13.55.12 14.72-1.06c1.17-1.17 1.15-11.14-4.3-13.84c-5.01-2.48-8.25.04-9.97.21c-2.27.23-5.08-1.18-7.14-1.22c-8.51-.18-11.49 6.51-11.49 6.51zm-65.08-.82c.91.85 7.86.88 16.25.82s15.14.02 15.14.02l1.4-8.47l-1.7-1.41s.19-4.24-5.16-5.69c-3.7-1-6.92.65-10.03.7c-3.11.06-5.98-1.35-9.44-.53c-3.22.76-5.73 2.86-6.75 7.1c-.71 2.94-.53 6.69.29 7.46"></path>
                <path fill="#b0b0b0" d="m44.92 125.17l.07-8.85h.65l-.01-9.86h34.73l-.12 9.86H81v8.62c-.01-.01-36.08.28-36.08.23"></path>
                <path fill="#9b9b9b" d="M80.99 121.3v3.63l-36.08.24l.03-3.9zm-35.37-8.82l34.65.01v3.82H45.62z"></path>
              </svg>
            </div>
            <div className="text-3xl font-bold text-purple-600"><Counter target={1200} suffix="+" /></div>
            <div className={`${isDark ? 'text-gray-300' : 'text-gray-700'} text-sm mt-1`}>{t('home2.stats.homesListed')}</div>
          </div>
          <div className={`${isDark ? 'bg-gray-800' : 'bg-gray-100'} rounded-xl p-6 text-center`}>
            <div className="flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24">
                <g fill="none">
                  <path fill="#ffef5e" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11"></path>
                  <path fill="#fff9bf" d="M12 4.826a11.8 11.8 0 0 1 10.994 7.517c0-.114.006-.228.006-.343a11 11 0 1 0-21.994.343A11.8 11.8 0 0 1 12 4.826"></path>
                  <path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11" strokeWidth={1}></path>
                  <path stroke="#191919" d="M6.739 10.326a.24.24 0 0 1 0-.478m.001.478a.24.24 0 0 0 0-.478m10.52.478a.24.24 0 0 1 0-.478m0 .478a.24.24 0 0 0 0-.478" strokeWidth={1}></path>
                  <path fill="#ff808c" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M15.705 15.348a.957.957 0 0 1 .927 1.194a4.782 4.782 0 0 1-9.264 0a.956.956 0 0 1 .927-1.194z" strokeWidth={1}></path>
                </g>
              </svg>
            </div>
            <div className="text-3xl font-bold text-purple-600"><Counter target={980} suffix="+" /></div>
            <div className={`${isDark ? 'text-gray-300' : 'text-gray-700'} text-sm mt-1`}>{t('home2.stats.happyBuyers')}</div>
          </div>
          <div className={`${isDark ? 'bg-gray-800' : 'bg-gray-100'} rounded-xl p-6 text-center`}>
            <div className="flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 72 72">
                <path fill="#92d3f5" d="M17 61v-4c0-4.994 5.008-9 10-9q9 7.5 18 0c4.994 0 10 4.006 10 9v4"></path>
                <path fill="#f1b31c" d="M26 39c-4 0-4-6-4-13s4-14 14-14s14 7 14 14s0 13-4 13"></path>
                <path fill="#fcea2b" d="M24.937 31c0 9 4.936 14 11 14C41.872 45 47 40 47 31c0-3-1-5-1-5c-3-3-7-8-7-8c-4 3-7 6-13 7c0 0-1.064 1-1.064 6"></path>
                <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M26 39c-4 0-4-6-4-13s4-14 14-14s14 7 14 14s0 13-4 13M17 60v-3c0-4.994 5.008-9 10-9q9 7.5 18 0c4.994 0 10 4.006 10 9v3"></path>
                <path d="M41.873 30a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-8 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></path>
                <path fill="none" stroke="#000" strokeLinejoin="round" strokeWidth={2} d="M24.937 31c0 9 4.936 14 11 14C41.872 45 47 40 47 31c0-3-1-5-1-5c-3-3-7-8-7-8c-4 3-7 6-13 7c0 0-1.064 1-1.064 6z"></path>
                <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M33 38c1.939.939 4 1 6 0"></path>
              </svg>
            </div>
            <div className="text-3xl font-bold text-purple-600"><Counter target={250} suffix="+" /></div>
            <div className={`${isDark ? 'text-gray-300' : 'text-gray-700'} text-sm mt-1`}>{t('home2.stats.expertAgents')}</div>
          </div>
          <div className={`${isDark ? 'bg-gray-800' : 'bg-gray-100'} rounded-xl p-6 text-center`}>
            <div className="flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 48 48">
                <path fill="#7cb342" d="M24 4C13 4 4 13 4 24s9 20 20 20s20-9 20-20S35 4 24 4"></path>
                <path fill="#0277bd" d="M45 24c0 11.7-9.5 21-21 21S3 35.7 3 24S12.3 3 24 3s21 9.3 21 21m-21.2 9.7c0-.4-.2-.6-.6-.8c-1.3-.4-2.5-.4-3.6-1.5c-.2-.4-.2-.8-.4-1.3c-.4-.4-1.5-.6-2.1-.8h-4.2c-.6-.2-1.1-1.1-1.5-1.7c0-.2 0-.6-.4-.6c-.4-.2-.8.2-1.3 0c-.2-.2-.2-.4-.2-.6c0-.6.4-1.3.8-1.7c.6-.4 1.3.2 1.9.2c.2 0 .2 0 .4.2c.6.2.8 1 .8 1.7v.4c0 .2.2.2.4.2c.2-1.1.2-2.1.4-3.2c0-1.3 1.3-2.5 2.3-2.9c.4-.2.6.2 1.1 0c1.3-.4 4.4-1.7 3.8-3.4c-.4-1.5-1.7-2.9-3.4-2.7c-.4.2-.6.4-1 .6c-.6.4-1.9 1.7-2.5 1.7c-1.1-.2-1.1-1.7-.8-2.3c.2-.8 2.1-3.6 3.4-3.1l.8.8c.4.2 1.1.2 1.7.2c.2 0 .4 0 .6-.2s.2-.2.2-.4c0-.6-.6-1.3-1-1.7s-1.1-.8-1.7-1.1c-2.1-.6-5.5.2-7.1 1.7s-2.9 4-3.8 6.1c-.4 1.3-.8 2.9-1 4.4c-.2 1-.4 1.9.2 2.9c.6 1.3 1.9 2.5 3.2 3.4c.8.6 2.5.6 3.4 1.7c.6.8.4 1.9.4 2.9c0 1.3.8 2.3 1.3 3.4c.2.6.4 1.5.6 2.1c0 .2.2 1.5.2 1.7c1.3.6 2.3 1.3 3.8 1.7c.2 0 1-1.3 1-1.5c.6-.6 1.1-1.5 1.7-1.9c.4-.2.8-.4 1.3-.8c.4-.4.6-1.3.8-1.9c.1-.5.3-1.3.1-1.9m.4-19.4c.2 0 .4-.2.8-.4c.6-.4 1.3-1.1 1.9-1.5s1.3-1.1 1.7-1.5c.6-.4 1.1-1.3 1.3-1.9c.2-.4.8-1.3.6-1.9c-.2-.4-1.3-.6-1.7-.8c-1.7-.4-3.1-.6-4.8-.6c-.6 0-1.5.2-1.7.8c-.2 1.1.6.8 1.5 1.1c0 0 .2 1.7.2 1.9c.2 1-.4 1.7-.4 2.7c0 .6 0 1.7.4 2.1zM41.8 29c.2-.4.2-1.1.4-1.5c.2-1 .2-2.1.2-3.1c0-2.1-.2-4.2-.8-6.1c-.4-.6-.6-1.3-.8-1.9c-.4-1.1-1-2.1-1.9-2.9c-.8-1.1-1.9-4-3.8-3.1c-.6.2-1 1-1.5 1.5c-.4.6-.8 1.3-1.3 1.9c-.2.2-.4.6-.2.8c0 .2.2.2.4.2c.4.2.6.2 1 .4c.2 0 .4.2.2.4c0 0 0 .2-.2.2c-1 1.1-2.1 1.9-3.1 2.9c-.2.2-.4.6-.4.8s.2.2.2.4s-.2.2-.4.4c-.4.2-.8.4-1.1.6c-.2.4 0 1.1-.2 1.5c-.2 1.1-.8 1.9-1.3 2.9c-.4.6-.6 1.3-1 1.9c0 .8-.2 1.5.2 2.1c1 1.5 2.9.6 4.4 1.3c.4.2.8.2 1.1.6c.6.6.6 1.7.8 2.3c.2.8.4 1.7.8 2.5c.2 1 .6 2.1.8 2.9c1.9-1.5 3.6-3.1 4.8-5.2c1.5-1.3 2.1-3 2.7-4.7"></path>
              </svg>
            </div>
            <div className="text-3xl font-bold text-purple-600"><Counter target={48} /></div>
            <div className={`${isDark ? 'text-gray-300' : 'text-gray-700'} text-sm mt-1`}>{t('home2.stats.citiesCovered')}</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`${isDark ? 'bg-gray-800' : 'bg-gray-50'} py-20`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-light ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('home2.testimonials.title')}</h2>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mt-3`}>{t('home2.testimonials.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: t('home2.testimonials.testimonial1.name'), role: t('home2.testimonials.testimonial1.role'), img: '/images/H2t1.jpg', quote: t('home2.testimonials.testimonial1.quote') },
              { name: t('home2.testimonials.testimonial2.name'), role: t('home2.testimonials.testimonial2.role'), img: '/images/H2t2.jpg', quote: t('home2.testimonials.testimonial2.quote') },
              { name: t('home2.testimonials.testimonial3.name'), role: t('home2.testimonials.testimonial3.role'), img: '/images/H2t3.jpg', quote: t('home2.testimonials.testimonial3.quote') }
            ].map((c, i) => (
              <motion.div key={c.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className={`${isDark ? 'bg-gray-900' : 'bg-white'} p-8 rounded-2xl shadow-lg`}>
                <div className="flex items-center mb-5">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, idx) => (
                      <svg key={idx} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-lg`}>“{c.quote}”</p>
                <div className="flex items-center mt-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img src={c.img} alt={c.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className={`${isDark ? 'text-white' : 'text-gray-900'} font-semibold`}>{c.name}</div>
                    <div className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-sm`}>{c.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA: valuation */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full" style={{ backgroundImage: 'url(/images/HOME2CTA.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-5xl font-light">{t('home2.cta.title')}</h2>
            <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">{t('home2.cta.subtitle')}</p>
            <div className="mt-8 flex justify-center">
              <button onClick={() => navigate('/contact')} className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg">{t('home2.cta.button')}</button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}