import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, logoutUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import { ThemeDebug } from '../components/theme-debug'
import Footer from '../components/Footer'
import ScrollAnimation from '../components/ScrollAnimation'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login', { replace: true })
    }
  }, [navigate])

  const user = getCurrentUser()

  function handleLogout() {
    logoutUser()
    navigate('/login', { replace: true })
  }
  const [isDark, setIsDark] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(t('home1.signatureDishes.all'))

  useEffect(() => {
    const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'))
    checkDark()
    const observer = new MutationObserver(checkDark)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  // Real estate featured properties (using translations)
  const featuredProperties = [
    {
      id: 1,
      name: t('home1.signatureDishes.dishes.grilledSalmon.name'),
      description: t('home1.signatureDishes.dishes.grilledSalmon.description'),
      price: "$280,000",
      image: "/images/Modern 2BHK City Apartment.jpg",
      category: "Apartment",
      rating: 4.9,
      isFeatured: true
    },
    {
      id: 2,
      name: t('home1.signatureDishes.dishes.beefTenderloin.name'),
      description: t('home1.signatureDishes.dishes.beefTenderloin.description'),
      price: "$1,250,000",
      image: "/images/Premium Lakeview Villa.jpg",
      category: "Villa",
      rating: 4.8,
      isPopular: true
    },
    {
      id: 3,
      name: t('home1.signatureDishes.dishes.lobsterRisotto.name'),
      description: t('home1.signatureDishes.dishes.lobsterRisotto.description'),
      price: "$2,150,000",
      image: "/images/Luxury Penthouse Suite.jpg",
      category: "Penthouse",
      rating: 4.9,
      isPremium: true
    },
    {
      id: 4,
      name: t('home1.signatureDishes.dishes.gardenBowl.name'),
      description: t('home1.signatureDishes.dishes.gardenBowl.description'),
      price: "$520,000",
      image: "/images/Suburban Family Home.jpg",
      category: "Family Home",
      rating: 4.2,
      isFamilyFriendly: true
    },
    {
      id: 5,
      name: t('home1.signatureDishes.dishes.seafoodPasta.name'),
      description: t('home1.signatureDishes.dishes.seafoodPasta.description'),
      price: "$3,500/mo",
      image: "/images/Downtown Office Space.jpg",
      category: "Commercial",
      rating: 4.7,
      isCommercial: true
    },
    {
      id: 6,
      name: t('home1.signatureDishes.dishes.lavaCake.name'),
      description: t('home1.signatureDishes.dishes.lavaCake.description'),
      price: "$850/mo",
      image: "/images/Cozy Studio Loft.jpg",
      category: "Studio",
      rating: 4.9,
      isCompact: true
    }
  ]

  // Category mapping for translations
  const categoryMap = {
    'Apartment': t('home1.signatureDishes.categories.apartment'),
    'Villa': t('home1.signatureDishes.categories.villa'),
    'Penthouse': t('home1.signatureDishes.categories.penthouse'),
    'Family Home': t('home1.signatureDishes.categories.familyHome'),
    'Commercial': t('home1.signatureDishes.categories.commercial'),
    'Studio': t('home1.signatureDishes.categories.studio')
  }

  const allCategories = [t('home1.signatureDishes.all'), ...Array.from(new Set(featuredProperties.map(f => f.category)))]
  const filteredFeatured = selectedCategory === t('home1.signatureDishes.all') ? featuredProperties : featuredProperties.filter(f => f.category === selectedCategory)

  const testimonials = [
    {
      id: 1,
      name: t('home1.testimonials.guests.sarah.name'),
      role: t('home1.testimonials.guests.sarah.role'),
      content: t('home1.testimonials.guests.sarah.content'),
      rating: 5,
      image: "/images/RHT1.jpg"
    },
    {
      id: 2,
      name: t('home1.testimonials.guests.michael.name'),
      role: t('home1.testimonials.guests.michael.role'),
      content: t('home1.testimonials.guests.michael.content'),
      rating: 5,
      image: "/images/RHT2.jpg"
    },
    {
      id: 3,
      name: t('home1.testimonials.guests.emily.name'),
      role: t('home1.testimonials.guests.emily.role'),
      content: t('home1.testimonials.guests.emily.content'),
      rating: 5,
      image: "/images/RHT3.jpg"
    }
  ]

  const realEstateStats = [
    { number: "5+", label: t('home1.culinaryJourney.stats.yearsExcellence') },
    { number: "10K+", label: t('home1.culinaryJourney.stats.happyCustomers') },
    { number: "50+", label: t('home1.culinaryJourney.stats.signatureDishes') },
    { number: "98%", label: t('home1.culinaryJourney.stats.customerSatisfaction') }
  ]

  // Why choose us - using translations
  const whyChooseUs = [
    {
      number: '01.',
      title: t('home1.whyChooseUs.items.easyStart.title'),
      description: t('home1.whyChooseUs.items.easyStart.description')
    },
    {
      number: '02.',
      title: t('home1.whyChooseUs.items.preBuilt.title'),
      description: t('home1.whyChooseUs.items.preBuilt.description')
    },
    {
      number: '03.',
      title: t('home1.whyChooseUs.items.customizable.title'),
      description: t('home1.whyChooseUs.items.customizable.description')
    }
  ]

  return (
    <div className={isDark ? 'bg-gray-900 text-white transition-colors' : 'bg-white text-black transition-colors'}>
      <Navbar user={user} />
      <ThemeDebug />

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
          <source src="/HOME1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dynamic Overlay */}
        <div className={`absolute inset-0 ${isDark ? 'bg-black/70' : 'bg-black/60'}`}></div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-4xl">
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6 whitespace-nowrap" style={{ fontFamily: 'serif' }}>
              {t('home1.hero.title')}
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
            <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto mb-8 whitespace-nowrap">
              {t('home1.hero.subtitle')}
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
            <div className="mt-8 flex gap-6 justify-center items-center flex-wrap">
              <a
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
{t('home1.hero.reserveTable')}
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Welcome Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <ScrollAnimation animation="slide-in-left" stagger="scroll-stagger-1">
                <div className="space-y-4">
                  <h2 className={`text-3xl md:text-4xl font-bold uppercase ${isDark ? 'text-white' : 'text-black'}`}>
{t('home1.welcome.title')}
                  </h2>
                  <h3 className="text-xl md:text-2xl text-red-600 font-semibold">
{t('home1.welcome.subtitle')}
                  </h3>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="slide-in-left" stagger="scroll-stagger-2">
                <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-black'}`}>
{t('home1.welcome.description')}
                </p>
              </ScrollAnimation>
              
              <ScrollAnimation animation="slide-in-left" stagger="scroll-stagger-3">
                <a
                  href="/services"
                  className="btn-animate-strong rounded-lg px-8 py-4 font-bold text-lg transition-all duration-300 bg-red-500 text-white hover:bg-red-600 shadow-lg hover:shadow-xl mt-8 inline-block"
                >
                  {t('home1.welcome.viewButton')}
                </a>
              </ScrollAnimation>
            </div>

            {/* Right Side - Image */}
            <ScrollAnimation animation="slide-in-right" stagger="scroll-stagger-1">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/images/Home11.jpg"
                    alt="Welcome to our real estate services"
                    className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 md:gap-12 items-start">
            <div className="md:col-span-1">
              <div className="space-y-5">
                <div className="flex gap-2">
                  <span className="w-8 h-1 bg-red-500"></span>
                  <span className="w-8 h-1 bg-white/40"></span>
                  <span className="w-8 h-1 bg-white/20"></span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">{t('home1.whyChooseUs.title')}</h2>
                <p className="text-white/70 leading-relaxed">{t('home1.whyChooseUs.subtitle')}</p>
              </div>
            </div>
            {whyChooseUs.map((item, index) => (
              <div key={index} className="group rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400 font-bold">
                    {item.number}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">{item.description}</p>
                <div className="h-px w-16 bg-white/30 group-hover:bg-red-500 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties Section (Improved UI/UX) */}
      <section id="menu" className={`py-20 ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold mb-3 ${isDark ? 'text-white' : 'text-black'}`}>
{t('home1.signatureDishes.title')}
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{t('home1.signatureDishes.subtitle')}</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`${selectedCategory === cat ? 'bg-red-600 text-white' : (isDark ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-700')} px-4 py-2 rounded-full border ${isDark ? 'border-gray-700' : 'border-gray-200'} shadow-sm hover:shadow transition`}
              >
                {cat === t('home1.signatureDishes.all') ? cat : categoryMap[cat] || cat}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredFeatured.map((item, index) => (
              <ScrollAnimation key={item.id} animation="fade-in" stagger={`scroll-stagger-${(index % 6) + 1}`}>
                <div className={`group rounded-2xl overflow-hidden border ${isDark ? 'bg-gray-900/40 border-gray-700' : 'bg-white border-gray-200'} shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}>
                  <div className="relative h-[420px] [perspective:1000px]">
                    <img src={item.image} alt={item.name} className="w-full h-[420px] object-cover transition-transform duration-300 group-hover:scale-105 flip-on-hover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent"></div>
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                      <div className="flex gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-600 text-white">{categoryMap[item.category] || item.category}</span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur">⭐ {item.rating}</span>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/80 text-red-600">{item.price}</span>
                    </div>

                    {/* Hover overlay with details */}
                    <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <div className="bg-black/70 backdrop-blur-md p-5 text-white">
                          <h3 className="text-xl font-semibold mb-1">{item.name}</h3>
                          <p className="text-gray-200 mb-4 leading-relaxed line-clamp-3">{item.description}</p>
                          <div className="flex items-center justify-between">
                            <a href="/contact" className="px-5 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition">{t('home1.signatureDishes.contact')}</a>
                            <a href="/services" className="px-5 py-2 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition">{t('home1.signatureDishes.details')}</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-900 text-white' : 'bg-black text-white'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Left Side - Content */}
            <div className="flex flex-col justify-center space-y-8 h-[500px]">
              <ScrollAnimation animation="slide-in-left" stagger="scroll-stagger-1">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-bold text-white">
{t('home1.culinaryJourney.title')}
                  </h2>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="slide-in-left" stagger="scroll-stagger-2">
                <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-300'}`}>
{t('home1.culinaryJourney.description')}
                </p>
              </ScrollAnimation>
              
              <ScrollAnimation animation="slide-in-left" stagger="scroll-stagger-3">
                <div className="grid grid-cols-2 gap-6">
                  {realEstateStats.map((stat, index) => (
                    <div key={index} className={`text-center p-6 rounded-xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/5 border-white/10'}`}>
                      <div className="text-3xl font-bold text-red-500 mb-2">{stat.number}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </ScrollAnimation>
              
            </div>

            {/* Right Side - Image */}
            <ScrollAnimation animation="slide-in-right" stagger="scroll-stagger-1">
              <div className="relative h-[500px]">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl h-full">
                  <img
                    src="/images/Our Culinary Journey.jpg"
                    alt="Our Real Estate Journey"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
              <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
{t('home1.testimonials.title')}
              </h2>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
              <p className={`text-lg max-w-2xl mx-auto mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
{t('home1.testimonials.subtitle')}
              </p>
            </ScrollAnimation>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation key={testimonial.id} animation="fade-in" stagger={`scroll-stagger-${index + 1}`}>
                <div className={`rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border hover:border-red-200 ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-100'}`}>
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-black'}`}>{testimonial.name}</h4>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  
                  <p className={`leading-relaxed italic ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    "{testimonial.content}"
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>






      {/* Contact Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url('/images/Home1CTA.jpg')`
          }}
        ></div>
        
        {/* Dynamic Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              <ScrollAnimation animation="slide-in-left" stagger="scroll-stagger-1">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-bold text-white">
{t('home1.contact.title')}
                  </h2>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="slide-in-left" stagger="scroll-stagger-2">
                <p className="text-lg text-gray-300 leading-relaxed">
{t('home1.contact.subtitle')}
                </p>
              </ScrollAnimation>
              
              
              <ScrollAnimation animation="slide-in-left" stagger="scroll-stagger-4">
                <div className="flex gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 font-bold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
{t('home1.contact.bookNow')}
                  </a>
                  <a
                    href="/services"
                    className="bg-transparent border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4 font-bold text-lg rounded-lg transition-all duration-300"
                  >
{t('home1.contact.viewMenu')}
                  </a>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 