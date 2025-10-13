import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
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
          <source src="/BLOG R.mp4" type="video/mp4" />
          {t('common.videoNotSupported')}
        </motion.video>

        {/* Dark Overlay */}
        <motion.div 
          className="absolute inset-0 bg-black/60"
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
            <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-tight text-white" style={{ fontFamily: 'serif' }}>
              {t('realEstateBlog.hero.title')}
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto">
              {t('realEstateBlog.hero.subtitle')}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <div className="mt-8 flex gap-4 justify-center">
              <motion.a
                href="/services"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {t('realEstateBlog.hero.explorePropertiesButton')}
              </motion.a>
              <motion.a
                href="/contact"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 font-bold text-lg rounded-lg transition-all duration-300"
              >
                {t('realEstateBlog.hero.getConsultationButton')}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Blog Posts Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="mx-auto max-w-7xl px-6">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'serif' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {t('realEstateBlog.featuredPosts.title')}
            </motion.h2>
            <motion.p 
              className={`mt-4 text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
                {t('realEstateBlog.featuredPosts.subtitle')}
            </motion.p>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article 
                key={post.id}
                className={`group cursor-pointer ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl overflow-hidden shadow-lg`}
                    onClick={() => handleBlogClick(post.id)}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
                }}
                  >
                    {/* Image */}
                <motion.div 
                  className="relative h-48 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                      <img
                        src={post.image}
                        alt={post.title}
                    className="w-full h-full object-cover"
                      />
                      {post.featured && (
                    <motion.div 
                      className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                      whileHover={{ scale: 1.1 }}
                    >
                          {t('realEstateBlog.featuredPosts.featured')}
                    </motion.div>
                  )}
                  <motion.div 
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                    whileHover={{ scale: 1.1 }}
                  >
                        {post.readTime}
                  </motion.div>
                </motion.div>

                    {/* Content */}
                <motion.div 
                  className="p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
                >
                  <motion.div 
                    className="flex items-center gap-2 mb-3"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.5 }}
                  >
                        <span className="text-red-600 font-medium text-sm">{post.category}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-500 text-sm">{post.date}</span>
                  </motion.div>
                  
                  <motion.h3 
                    className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.6 }}
                    whileHover={{ color: "#dc2626" }}
                  >
                        {post.title}
                  </motion.h3>
                  
                  <motion.p 
                    className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.7 }}
                  >
                        {post.excerpt}
                  </motion.p>

                      {/* Property Details */}
                  <motion.div 
                    className="flex items-center justify-between mb-4"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.8 }}
                  >
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
                      <motion.div 
                        className="text-lg font-bold text-red-600"
                        whileHover={{ scale: 1.1 }}
                      >
                        {post.price}
                      </motion.div>
                          <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{post.location}</div>
                        </div>
                  </motion.div>

                      {/* Author */}
                  <motion.div 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.9 }}
                  >
                    <motion.div 
                      className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                          <span className="text-red-600 font-medium text-sm">{post.author.split(' ').map(n => n[0]).join('')}</span>
                    </motion.div>
                        <div>
                      <motion.div 
                        className={`font-medium text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {post.author}
                      </motion.div>
                          <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{t('realEstateBlog.featuredPosts.expertTitle')}</div>
                        </div>
                  </motion.div>
                </motion.div>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20 text-white overflow-hidden">
        {/* Background Video */}
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <source src="/Rservices.mp4" type="video/mp4" />
          {t('common.videoNotSupported')}
        </motion.video>

        {/* Red Overlay */}
        <motion.div 
          className="absolute inset-0 bg-red-900/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        ></motion.div>

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: 'serif' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
                {t('realEstateBlog.whyChooseUs.mainTitle')}
            </motion.h2>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="mx-auto mb-6 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                  <svg className="w-16 h-16 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
              </motion.div>
              <motion.h3 
                className="text-xl font-bold mb-3 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                  {t('realEstateBlog.whyChooseUs.feature1.title')}
              </motion.h3>
              <motion.p 
                className="text-white/90 text-sm leading-relaxed"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                  {t('realEstateBlog.whyChooseUs.feature1.description')}
              </motion.p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="mx-auto mb-6 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                  <svg className="w-16 h-16 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
              </motion.div>
              <motion.h3 
                className="text-xl font-bold mb-3 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                  {t('realEstateBlog.whyChooseUs.feature2.title')}
              </motion.h3>
              <motion.p 
                className="text-white/90 text-sm leading-relaxed"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                  {t('realEstateBlog.whyChooseUs.feature2.description')}
              </motion.p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="mx-auto mb-6 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                  <svg className="w-16 h-16 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
              </motion.div>
              <motion.h3 
                className="text-xl font-bold mb-3 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                  {t('realEstateBlog.whyChooseUs.feature3.title')}
              </motion.h3>
              <motion.p 
                className="text-white/90 text-sm leading-relaxed"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                  {t('realEstateBlog.whyChooseUs.feature3.description')}
              </motion.p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="mx-auto mb-6 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                  <svg className="w-16 h-16 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
              </motion.div>
              <motion.h3 
                className="text-xl font-bold mb-3 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                  {t('realEstateBlog.whyChooseUs.feature4.title')}
              </motion.h3>
              <motion.p 
                className="text-white/90 text-sm leading-relaxed"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                  {t('realEstateBlog.whyChooseUs.feature4.description')}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Market Insights & Statistics */}
      <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="mx-auto max-w-7xl px-6">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              className="text-red-600 text-sm font-medium tracking-widest uppercase mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ scale: 1.1 }}
            >
                {t('realEstateBlog.marketInsights.tagline')}
            </motion.h3>
            <motion.h2 
              className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'serif' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
                {t('realEstateBlog.marketInsights.title')}
            </motion.h2>
            <motion.p 
              className={`text-lg max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
                {t('realEstateBlog.marketInsights.subtitle')}
            </motion.p>
          </motion.div>

          {/* Statistics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Stat 1 */}
            <motion.div 
              className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-2xl p-8 shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'} text-center`}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
              }}
            >
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
              </motion.div>
              <motion.h3 
                className="text-4xl font-bold text-red-600 mb-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{ scale: 1.1 }}
              >
                  {t('realEstateBlog.marketInsights.stats.stat1.value')}
              </motion.h3>
              <motion.p 
                className={`text-sm font-medium mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                  {t('realEstateBlog.marketInsights.stats.stat1.label')}
              </motion.p>
              <motion.p 
                className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                  {t('realEstateBlog.marketInsights.stats.stat1.description')}
              </motion.p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div 
              className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-2xl p-8 shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'} text-center`}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
              }}
            >
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
              </motion.div>
              <motion.h3 
                className="text-4xl font-bold text-red-600 mb-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                whileHover={{ scale: 1.1 }}
              >
                  {t('realEstateBlog.marketInsights.stats.stat2.value')}
              </motion.h3>
              <motion.p 
                className={`text-sm font-medium mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                  {t('realEstateBlog.marketInsights.stats.stat2.label')}
              </motion.p>
              <motion.p 
                className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                  {t('realEstateBlog.marketInsights.stats.stat2.description')}
              </motion.p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div 
              className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-2xl p-8 shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'} text-center`}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
              }}
            >
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
              </motion.div>
              <motion.h3 
                className="text-4xl font-bold text-red-600 mb-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                  {t('realEstateBlog.marketInsights.stats.stat3.value')}
              </motion.h3>
              <motion.p 
                className={`text-sm font-medium mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                  {t('realEstateBlog.marketInsights.stats.stat3.label')}
              </motion.p>
              <motion.p 
                className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                  {t('realEstateBlog.marketInsights.stats.stat3.description')}
              </motion.p>
            </motion.div>

            {/* Stat 4 */}
            <motion.div 
              className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-2xl p-8 shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'} text-center`}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
              }}
            >
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
              </motion.div>
              <motion.h3 
                className="text-4xl font-bold text-red-600 mb-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
                whileHover={{ scale: 1.1 }}
              >
                  {t('realEstateBlog.marketInsights.stats.stat4.value')}
              </motion.h3>
              <motion.p 
                className={`text-sm font-medium mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                  {t('realEstateBlog.marketInsights.stats.stat4.label')}
              </motion.p>
              <motion.p 
                className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                  {t('realEstateBlog.marketInsights.stats.stat4.description')}
              </motion.p>
            </motion.div>
          </div>

          {/* Market Trends Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Trend 1 */}
            <motion.div 
              className={`${isDark ? 'bg-gradient-to-br from-red-900 to-red-800' : 'bg-gradient-to-br from-red-600 to-red-700'} rounded-2xl p-8 text-white shadow-lg`}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
              }}
            >
              <motion.div 
                className="flex items-center justify-between mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <motion.h3 
                  className="text-2xl font-bold"
                  whileHover={{ scale: 1.05 }}
                >
                    {t('realEstateBlog.marketInsights.trends.trend1.title')}
                </motion.h3>
                <motion.div 
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                </motion.div>
              </motion.div>
              <motion.p 
                className="text-white/90 text-sm leading-relaxed"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                  {t('realEstateBlog.marketInsights.trends.trend1.description')}
              </motion.p>
            </motion.div>

            {/* Trend 2 */}
            <motion.div 
              className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-2xl p-8 shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
              }}
            >
              <motion.div 
                className="flex items-center justify-between mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <motion.h3 
                  className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}
                  whileHover={{ scale: 1.05 }}
                >
                    {t('realEstateBlog.marketInsights.trends.trend2.title')}
                </motion.h3>
                <motion.div 
                  className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                </motion.div>
              </motion.div>
              <motion.p 
                className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.9 }}
              >
                  {t('realEstateBlog.marketInsights.trends.trend2.description')}
              </motion.p>
            </motion.div>

            {/* Trend 3 */}
            <motion.div 
              className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-2xl p-8 shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
              }}
            >
              <motion.div 
                className="flex items-center justify-between mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.9 }}
              >
                <motion.h3 
                  className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}
                  whileHover={{ scale: 1.05 }}
                >
                    {t('realEstateBlog.marketInsights.trends.trend3.title')}
                </motion.h3>
                <motion.div 
                  className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                </motion.div>
              </motion.div>
              <motion.p 
                className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.0 }}
              >
                  {t('realEstateBlog.marketInsights.trends.trend3.description')}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="mx-auto max-w-6xl px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              className={`text-sm font-medium tracking-widest uppercase mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ scale: 1.1 }}
            >
                {t('realEstateBlog.testimonials.tagline')}
            </motion.h3>
            <motion.h2 
              className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'serif' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
                {t('realEstateBlog.testimonials.title')}
            </motion.h2>
          </motion.div>

          <motion.div 
            className={`rounded-2xl p-8 md:p-12 relative overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ 
              scale: 1.01,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
            }}
          >
              {/* Red vertical line */}
            <motion.div 
              className="absolute left-8 top-8 bottom-8 w-1 bg-red-500 rounded-full"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            ></motion.div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
              <motion.div 
                className="relative pl-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                  {/* Opening quote */}
                <motion.div 
                  className="absolute -top-4 -left-2 text-red-300 text-6xl font-bold"
                  initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  ❝
                </motion.div>
                
                <motion.blockquote 
                  className={`italic text-lg leading-relaxed mb-6 relative ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                    "{testimonials[currentTestimonial].quote}"
                    
                    {/* Closing quote */}
                  <motion.span 
                    className="absolute -bottom-2 text-red-300 text-4xl font-bold"
                    initial={{ opacity: 0, scale: 0.5, rotate: 180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    whileHover={{ scale: 1.2, rotate: -10 }}
                  >
                    ❞
                  </motion.span>
                </motion.blockquote>
                
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.0 }}
                >
                  <motion.h4 
                    className={`font-bold text-lg uppercase ${isDark ? 'text-white' : 'text-gray-900'}`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {testimonials[currentTestimonial].author}
                  </motion.h4>
                  <motion.p 
                    className={`text-sm uppercase ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {testimonials[currentTestimonial].title}
                  </motion.p>
                  <motion.div 
                    className="flex space-x-1"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1.1 }}
                  >
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <motion.span 
                        key={i} 
                        className="text-yellow-400 text-lg"
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 1.2 + i * 0.1 }}
                        whileHover={{ scale: 1.3, rotate: 360 }}
                      >
                        ⭐
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>

                {/* Right Content - Image */}
              <motion.div 
                className="flex justify-center md:justify-end"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].author}
                      className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-xl"
                    initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    whileHover={{ rotate: 5 }}
                    />
                </motion.div>
              </motion.div>
                  </div>
          </motion.div>

          {/* Pagination Dots */}
          <motion.div 
            className="flex justify-center mt-8 space-x-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 1.2 }}
          >
              {testimonials.map((_, index) => (
              <motion.button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-red-500' : isDark ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 1.3 + index * 0.1 }}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.8 }}
                />
              ))}
          </motion.div>
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
        <motion.div 
          className={`absolute inset-0 ${isDark ? 'bg-black/70' : 'bg-black/60'}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        ></motion.div>
        <motion.div 
          className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        ></motion.div>

        <div className="relative mx-auto max-w-4xl px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6" style={{ fontFamily: 'serif' }}>
              {t('realEstateBlog.cta.title')}
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <p className="text-lg md:text-xl text-gray-300 mb-10">
              {t('realEstateBlog.cta.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <motion.a
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {t('realEstateBlog.cta.getConsultationButton')}
              </motion.a>
              <motion.a
                href="/services"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 font-bold text-lg rounded-lg transition-all duration-300"
              >
                {t('realEstateBlog.cta.browsePropertiesButton')}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}