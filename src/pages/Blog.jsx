import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollAnimation from '../components/ScrollAnimation'
import { useTranslation } from 'react-i18next'

export default function Blog() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState('all')
  const [isDark, setIsDark] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

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

  // Real Estate-themed blog posts
  const blogPosts = [
    {
      id: 1,
      title: t('realEstateBlog.featuredPosts.posts.firstTimeBuyer.title'),
      excerpt: t('realEstateBlog.featuredPosts.posts.firstTimeBuyer.excerpt'),
      image: "/images/LB2.jpg",
      category: t('realEstateBlog.featuredPosts.posts.firstTimeBuyer.category'),
      author: t('realEstateBlog.featuredPosts.posts.firstTimeBuyer.author'),
      date: t('realEstateBlog.featuredPosts.posts.firstTimeBuyer.date'),
      readTime: t('realEstateBlog.featuredPosts.posts.firstTimeBuyer.readTime'),
      featured: true,
      price: t('realEstateBlog.featuredPosts.posts.firstTimeBuyer.price'),
      location: t('realEstateBlog.featuredPosts.posts.firstTimeBuyer.location'),
      bedrooms: t('realEstateBlog.featuredPosts.posts.firstTimeBuyer.bedrooms'),
      bathrooms: t('realEstateBlog.featuredPosts.posts.firstTimeBuyer.bathrooms')
    },
    {
      id: 2,
      title: t('realEstateBlog.featuredPosts.posts.investmentProperties.title'),
      excerpt: t('realEstateBlog.featuredPosts.posts.investmentProperties.excerpt'),
      image: "/images/LB3.jpg",
      category: t('realEstateBlog.featuredPosts.posts.investmentProperties.category'),
      author: t('realEstateBlog.featuredPosts.posts.investmentProperties.author'),
      date: t('realEstateBlog.featuredPosts.posts.investmentProperties.date'),
      readTime: t('realEstateBlog.featuredPosts.posts.investmentProperties.readTime'),
      featured: true,
      price: t('realEstateBlog.featuredPosts.posts.investmentProperties.price'),
      location: t('realEstateBlog.featuredPosts.posts.investmentProperties.location'),
      bedrooms: t('realEstateBlog.featuredPosts.posts.investmentProperties.bedrooms'),
      bathrooms: t('realEstateBlog.featuredPosts.posts.investmentProperties.bathrooms')
    },
    {
      id: 3,
      title: t('realEstateBlog.featuredPosts.posts.marketTrends.title'),
      excerpt: t('realEstateBlog.featuredPosts.posts.marketTrends.excerpt'),
      image: "/images/LB1.jpg",
      category: t('realEstateBlog.featuredPosts.posts.marketTrends.category'),
      author: t('realEstateBlog.featuredPosts.posts.marketTrends.author'),
      date: t('realEstateBlog.featuredPosts.posts.marketTrends.date'),
      readTime: t('realEstateBlog.featuredPosts.posts.marketTrends.readTime'),
      featured: true,
      price: t('realEstateBlog.featuredPosts.posts.marketTrends.price'),
      location: t('realEstateBlog.featuredPosts.posts.marketTrends.location'),
      bedrooms: t('realEstateBlog.featuredPosts.posts.marketTrends.bedrooms'),
      bathrooms: t('realEstateBlog.featuredPosts.posts.marketTrends.bathrooms')
    }
  ]

  const categories = [
    { name: 'all', label: t('realEstateBlog.categories.all'), count: 24 },
    { name: 'home-buying', label: t('realEstateBlog.categories.homeBuying.title'), count: 6 },
    { name: 'investing', label: t('realEstateBlog.categories.investmentProperties.title'), count: 5 },
    { name: 'market-analysis', label: t('realEstateBlog.categories.marketAnalysis.title'), count: 4 },
    { name: 'luxury', label: t('realEstateBlog.categories.luxury'), count: 3 },
    { name: 'commercial', label: t('realEstateBlog.categories.commercial'), count: 3 },
    { name: 'home-selling', label: t('realEstateBlog.categories.homeSelling'), count: 3 }
  ]

  const trendingTopics = [
    t('realEstateBlog.trendingTopics.firstTimeBuyers'),
    t('realEstateBlog.trendingTopics.investmentProperties'), 
    t('realEstateBlog.trendingTopics.marketTrends'),
    t('realEstateBlog.trendingTopics.luxuryHomes'),
    t('realEstateBlog.trendingTopics.commercialSpaces'),
    t('realEstateBlog.trendingTopics.homeStaging'),
    t('realEstateBlog.trendingTopics.mortgageRates'),
    t('realEstateBlog.trendingTopics.propertyManagement')
  ]

  const testimonials = [
    {
      id: 1,
      quote: t('realEstateBlog.testimonials.testimonial1.quote'),
      author: t('realEstateBlog.testimonials.testimonial1.author'),
      title: t('realEstateBlog.testimonials.testimonial1.title'),
      image: "/images/RB1.jpg",
      rating: 5
    },
    {
      id: 2,
      quote: t('realEstateBlog.testimonials.testimonial2.quote'),
      author: t('realEstateBlog.testimonials.testimonial2.author'),
      title: t('realEstateBlog.testimonials.testimonial2.title'),
      image: "/images/RB2C.jpg",
      rating: 5
    },
    {
      id: 3,
      quote: t('realEstateBlog.testimonials.testimonial3.quote'),
      author: t('realEstateBlog.testimonials.testimonial3.author'),
      title: t('realEstateBlog.testimonials.testimonial3.title'),
      image: "/images/RB3C.jpg",
      rating: 5
    }
  ]

  const handleBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`)
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index)
  }

  return (
    <div className={isDark ? 'bg-gray-900 text-white transition-colors' : 'bg-white text-black transition-colors'} style={{ minHeight: '100vh' }}>
      <Navbar user={user} />

      {/* Hero Section */}
      <section className="relative overflow-hidden h-screen flex items-center justify-center text-center">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/BLOG R.mp4" type="video/mp4" />
          {t('common.videoNotSupported')}
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-4xl">
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
            <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-tight text-white">
              {t('realEstateBlog.hero.title')}
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
            <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto">
              {t('realEstateBlog.hero.subtitle')}
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
            <div className="mt-8 flex gap-4 justify-center">
              <a
                href="/services"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold text-lg transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl"
              >
                {t('realEstateBlog.hero.explorePropertiesButton')}
              </a>
              <a
                href="/contact"
                className="bg-white text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white px-8 py-4 font-bold text-lg transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl"
              >
                {t('realEstateBlog.hero.getConsultationButton')}
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Real Estate Categories Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="mx-auto max-w-7xl px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
              <h2 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('realEstateBlog.categories.title')}</h2>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
              <p className={`mt-4 text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {t('realEstateBlog.categories.subtitle')}
              </p>
            </ScrollAnimation>
          </div>
          
          {/* Category Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: t('realEstateBlog.categories.homeBuying.title'),
                description: t('realEstateBlog.categories.homeBuying.description'),
                icon: "🏠",
                count: t('realEstateBlog.categories.homeBuying.count'),
                gradient: "from-red-500 to-red-600",
                bgImage: "/images/B1.jpg",
                link: "/blog/home-buying"
              },
              {
                title: t('realEstateBlog.categories.investmentProperties.title'),
                description: t('realEstateBlog.categories.investmentProperties.description'),
                icon: "💰",
                count: t('realEstateBlog.categories.investmentProperties.count'),
                gradient: "from-gray-700 to-gray-800",
                bgImage: "/images/B2.jpg",
                link: "/blog/investing"
              },
              {
                title: t('realEstateBlog.categories.marketAnalysis.title'),
                description: t('realEstateBlog.categories.marketAnalysis.description'),
                icon: "📊",
                count: t('realEstateBlog.categories.marketAnalysis.count'),
                gradient: "from-red-600 to-red-700",
                bgImage: "/images/B3.jpg",
                link: "/blog/market-analysis"
              }
            ].map((category, index) => {
              const staggerClasses = ['scroll-stagger-3', 'scroll-stagger-4', 'scroll-stagger-5'];
              const staggerClass = staggerClasses[index] || 'scroll-stagger-3';
              
              return (
                <ScrollAnimation key={index} animation="fade-in" stagger={staggerClass}>
                  <div 
                    className={`group cursor-pointer ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border ${isDark ? 'border-gray-700 hover:border-red-500' : 'border-gray-200 hover:border-red-500'}`}
                    onClick={() => navigate(category.link)}
                  >
                    {/* Header with Background Image and Gradient Overlay */}
                    <div className="h-32 relative overflow-hidden">
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <img
                          src={category.bgImage}
                          alt={category.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      
                      {/* Pattern Overlay */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white/30 rounded-full"></div>
                        <div className="absolute bottom-4 left-4 w-8 h-8 border-2 border-white/30 rounded-full"></div>
                      </div>
                      
                      {/* Icon */}
                      <div className="absolute top-6 left-6 text-4xl z-10">{category.icon}</div>
                      
                      {/* Article Count */}
                      <div className="absolute bottom-4 right-6 z-10">
                        <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                          {category.count}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className={`text-xl font-bold mb-3 group-hover:text-red-600 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {category.title}
                      </h3>
                      
                      <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {category.description}
                      </p>

                      {/* Read More Button */}
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-medium group-hover:text-red-600 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                          {t('realEstateBlog.categories.readArticles')}
                        </span>
                        <div className="w-8 h-8 bg-red-100 group-hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300">
                          <svg className="w-4 h-4 text-red-600 group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Blog Posts Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="mx-auto max-w-7xl px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
              <h2 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('realEstateBlog.featuredPosts.title')}</h2>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
              <p className={`mt-4 text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {t('realEstateBlog.featuredPosts.subtitle')}
              </p>
            </ScrollAnimation>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => {
              const staggerClasses = ['scroll-stagger-3', 'scroll-stagger-4', 'scroll-stagger-5', 'scroll-stagger-6', 'scroll-stagger-7', 'scroll-stagger-8'];
              const staggerClass = staggerClasses[index] || 'scroll-stagger-3';
              
              return (
                <ScrollAnimation key={post.id} animation="fade-in" stagger={staggerClass}>
                  <article 
                    className={`group cursor-pointer ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
                    onClick={() => handleBlogClick(post.id)}
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {post.featured && (
                        <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {t('realEstateBlog.featuredPosts.featured')}
                        </div>
                      )}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                        {post.readTime}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-red-600 font-medium text-sm">{post.category}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-500 text-sm">{post.date}</span>
                      </div>
                      
                      <h3 className={`text-xl font-bold mb-3 group-hover:text-red-600 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {post.title}
                      </h3>
                      
                      <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {post.excerpt}
                      </p>

                      {/* Property Details */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4 text-sm">
                          {post.bedrooms > 0 && (
                            <div className="flex items-center gap-1">
                              <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                              </svg>
                              <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>{post.bedrooms} {t('realEstateBlog.featuredPosts.bedrooms')}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-1">
                            <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" clipRule="evenodd"/>
                            </svg>
                            <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>{post.bathrooms} {t('realEstateBlog.featuredPosts.bathrooms')}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-red-600">{post.price}</div>
                          <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{post.location}</div>
                        </div>
                      </div>

                      {/* Author */}
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                          <span className="text-red-600 font-medium text-sm">{post.author.split(' ').map(n => n[0]).join('')}</span>
                        </div>
                        <div>
                          <div className={`font-medium text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>{post.author}</div>
                          <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{t('realEstateBlog.featuredPosts.expertTitle')}</div>
                        </div>
                      </div>
                    </div>
                  </article>
                </ScrollAnimation>
              );
            })}
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`py-20 ${isDark ? 'bg-gradient-to-br from-black via-gray-900 to-black' : 'bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800'} text-white relative overflow-hidden`}>
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border border-red-500 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border border-red-500 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-red-500 rounded-full"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <ScrollAnimation animation="slide-in-left" stagger="scroll-stagger-1">
                <div className="space-y-4">
                  <h3 className="text-red-500 text-lg font-medium tracking-widest uppercase">
                    {t('realEstateBlog.whyChooseUs.tagline')}
                  </h3>
                  <h2 className="text-5xl font-bold text-white leading-tight">
                    {t('realEstateBlog.whyChooseUs.title')}
                  </h2>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slide-in-left" stagger="scroll-stagger-2">
                <p className="text-gray-200 text-lg leading-relaxed">
                  {t('realEstateBlog.whyChooseUs.description1')}
                </p>
              </ScrollAnimation>

              <ScrollAnimation animation="slide-in-left" stagger="scroll-stagger-3">
                <p className="text-gray-300 text-base leading-relaxed">
                  {t('realEstateBlog.whyChooseUs.description2')}
                </p>
              </ScrollAnimation>

              <ScrollAnimation animation="slide-in-left" stagger="scroll-stagger-4">
                <button className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4 font-bold text-lg transition-all duration-300 rounded-lg transform hover:scale-105">
                  {t('realEstateBlog.whyChooseUs.scheduleConsultationButton')}
                </button>
              </ScrollAnimation>

              {/* Small Property Image */}
              <ScrollAnimation animation="slide-in-left" stagger="scroll-stagger-5">
                <div className="relative w-64 h-48 rounded-lg overflow-hidden border-2 border-red-500">
                  <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt={t('realEstateBlog.altTexts.modernHomeExterior')}
                    className="w-full h-full object-cover"
                  />
                  {/* Curved decorative line */}
                  <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-red-500 rounded-tl-lg"></div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Right Content - Main Property Image */}
            <div className="relative">
              <ScrollAnimation animation="slide-in-right" stagger="scroll-stagger-1">
                <div className="relative">
                  {/* Main Property Image */}
                  <div className="relative w-full h-[600px] rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                      alt={t('realEstateBlog.altTexts.luxuryRealEstateProperty')}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Red curved decorative elements */}
                    <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-red-500 rounded-tr-lg"></div>
                    <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-red-500 rounded-bl-lg"></div>
                  </div>

                </div>
              </ScrollAnimation>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
              <h3 className={`text-sm font-medium tracking-widest uppercase mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {t('realEstateBlog.testimonials.tagline')}
              </h3>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
              <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {t('realEstateBlog.testimonials.title')}
              </h2>
            </ScrollAnimation>
          </div>

          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
            <div className={`rounded-2xl p-8 md:p-12 relative overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
              {/* Red vertical line */}
              <div className="absolute left-8 top-8 bottom-8 w-1 bg-red-500 rounded-full"></div>
              
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div className="relative pl-8">
                  {/* Opening quote */}
                  <div className="absolute -top-4 -left-2 text-red-300 text-6xl font-bold">❝</div>
                  
                  <blockquote className={`italic text-lg leading-relaxed mb-6 relative ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    "{testimonials[currentTestimonial].quote}"
                    
                    {/* Closing quote */}
                    <span className="absolute -bottom-2 text-red-300 text-4xl font-bold">❞</span>
                  </blockquote>
                  
                  <div className="space-y-2">
                    <h4 className={`font-bold text-lg uppercase ${isDark ? 'text-white' : 'text-gray-900'}`}>{testimonials[currentTestimonial].author}</h4>
                    <p className={`text-sm uppercase ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{testimonials[currentTestimonial].title}</p>
                    <div className="flex space-x-1">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">⭐</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Content - Image */}
                <div className="flex justify-center md:justify-end">
                  <div className="relative">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].author}
                      className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Pagination Dots */}
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-4">
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-red-500' : isDark ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 text-white overflow-hidden" style={{
        backgroundImage: 'url(/images/BLOG%20CTA.jpg)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* Dynamic overlay for better text readability */}
        <div className={`absolute inset-0 ${isDark ? 'bg-black/70' : 'bg-black/60'}`}></div>
        <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-cover"></div>

        <div className="relative mx-auto max-w-4xl px-6 text-center z-10">
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              {t('realEstateBlog.cta.title')}
            </h2>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
            <p className="text-lg md:text-xl text-gray-300 mb-10">
              {t('realEstateBlog.cta.subtitle')}
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold text-lg transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl"
              >
                {t('realEstateBlog.cta.getConsultationButton')}
              </a>
              <a
                href="/services"
                className="bg-white text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white px-8 py-4 font-bold text-lg transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl"
              >
                {t('realEstateBlog.cta.browsePropertiesButton')}
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  )
}