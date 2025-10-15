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
                      whileHover={{ scale: 1.1 }}
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
      <section className="relative py-20 text-white overflow-hidden" style={{
        backgroundImage: 'url(/images/67Blog.jpg)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* Dark Overlay */}
        <motion.div 
          className="absolute inset-0 bg-black/60"
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
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 64 64">
                    <path fill="#bbbcbe" d="M6.06 57.511h52.01v4.05H6.06z"></path>
                    <path fill="#633d19" d="M13.495 11.57h6.741v11.669h-6.741z"></path>
                    <path fill="#f0ca93" d="M6.06 55.485h52.01v4.054H6.06z"></path>
                    <path fill="#992c3e" d="m9.561 27.879l-3.146.934l-2.623 2.166l-2.6 3.11h7.3zm44.826 0l3.14.934l2.62 2.166l2.609 3.11h-7.299z"></path>
                    <path fill="#bbbcbe" d="M40.057 56.299c.573 0 1.041.541 1.041 1.206c0 .674-.468 1.21-1.041 1.21H23.75c-.575 0-1.041-.536-1.041-1.21c0-.665.465-1.206 1.041-1.206z"></path>
                    <path fill="#999" d="M41.107 58.717c.655 0 1.19.546 1.19 1.216c0 .665-.535 1.21-1.19 1.21H22.521c-.653 0-1.185-.545-1.185-1.21c0-.67.532-1.216 1.185-1.216z"></path>
                    <path fill="#7c7d7e" d="M42.277 61.139c.731 0 1.323.546 1.323 1.211s-.592 1.211-1.323 1.211H21.556c-.729 0-1.321-.546-1.321-1.211s.592-1.211 1.321-1.211z"></path>
                    <path fill="#e7e5e5" d="m7.465 29.548l24.582-19.512l24.622 19.512v26.611h-49.2z"></path>
                    <path fill="#d1d2d2" d="M16.456 56.159H7.465v-27.24l23.952-18.883l1.167.654l-16.13 18.547z"></path>
                    <g fill="#df394c"><path d="M32.728 9.431c.39.628.177 1.525-.461 2L2.047 33.798c-.64.477-1.477.349-1.864-.28c-.385-.633-.177-1.531.465-2l30.22-22.371c.64-.471 1.477-.343 1.862.288"></path><path d="M31.257 9.431c-.385.628-.174 1.525.466 2l30.22 22.368c.645.477 1.477.349 1.864-.28c.388-.633.179-1.531-.464-2L33.123 9.148c-.645-.472-1.48-.344-1.865.287"></path></g>
                    <path fill="#4e6b78" d="M37.347 56.494v-9.06c0-3.215-2.366-5.811-5.282-5.811c-2.921 0-5.283 2.596-5.283 5.811v9.06z"></path>
                    <path fill="#405967" d="M33.767 41.939a4.8 4.8 0 0 0-1.699-.312c-2.921 0-5.283 2.596-5.283 5.811v9.06h3.396v-9.06c0-2.559 1.499-4.724 3.586-5.499"></path>
                    <path fill="#df394c" d="M21.966 11.121c0 .599-.571 1.084-1.277 1.084h-7.493c-.706 0-1.277-.486-1.277-1.084s.571-1.084 1.277-1.084h7.493c.706 0 1.277.485 1.277 1.084"></path>
                    <path fill="#28a6de" d="M22.057 46.129c0 1.242-1.068 2.251-2.387 2.251h-6.48c-1.318 0-2.389-1.01-2.389-2.251v-9.01c0-1.243 1.071-2.251 2.389-2.251h6.48c1.318 0 2.387 1.01 2.387 2.251zm31.1-.435c0 1.243-1.068 2.252-2.389 2.252h-6.479c-1.321 0-2.388-1.01-2.388-2.252v-9.01c0-1.248 1.066-2.252 2.388-2.252h6.479c1.32 0 2.389 1 2.389 2.252z"></path>
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
                  <svg className="w-16 h-16" viewBox="0 0 16 16">
                    <g fill="none">
                      <path fill="url(#SVGQMsqbeLV)" d="M10.99 7.714a1.5 1.5 0 0 0-1.838 1.061l-.388 1.449a3 3 0 1 0 5.796 1.553l.388-1.45a1.5 1.5 0 0 0-1.06-1.836z"></path>
                      <path fill="url(#SVGswmSBcsj)" d="M5.01 7.714a1.5 1.5 0 0 1 1.837 1.061l.388 1.449a3 3 0 1 1-5.795 1.553l-.389-1.45a1.5 1.5 0 0 1 1.061-1.836z"></path>
                      <path fill="url(#SVG4tHA7cJC)" d="M6.5 7A1.5 1.5 0 0 0 5 8.5V11a3 3 0 1 0 6 0V8.5A1.5 1.5 0 0 0 9.5 7z"></path>
                      <path fill="url(#SVGT456idhF)" d="M8 1a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5"></path>
                      <path fill="url(#SVGK07hbcHv)" d="M3 3a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></path>
                      <path fill="url(#SVGe1BkJcGN)" d="M13 3a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></path>
                      <defs>
                        <radialGradient id="SVGQMsqbeLV" cx={0} cy={0} r={1} gradientTransform="rotate(78.837 -.336 11.297)scale(4.64914)" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#0078d4"></stop>
                          <stop offset={1} stopColor="#004695"></stop>
                        </radialGradient>
                        <radialGradient id="SVGswmSBcsj" cx={0} cy={0} r={1} gradientTransform="matrix(3.34115 6.04144 -4.34865 2.40497 2.553 7.96)" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#008ce2"></stop>
                          <stop offset={1} stopColor="#0068c6"></stop>
                        </radialGradient>
                        <radialGradient id="SVG4tHA7cJC" cx={0} cy={0} r={1} gradientTransform="rotate(63.608 -3.915 10.713)scale(4.22417 3.87907)" gradientUnits="userSpaceOnUse">
                          <stop offset={0.339} stopColor="#3dcbff"></stop>
                          <stop offset={1} stopColor="#14b1ff"></stop>
                        </radialGradient>
                        <radialGradient id="SVGT456idhF" cx={0} cy={0} r={1} gradientTransform="rotate(59.931 1.37 7.898)scale(3.12306)" gradientUnits="userSpaceOnUse">
                          <stop offset={0.339} stopColor="#3dcbff"></stop>
                          <stop offset={1} stopColor="#14b1ff"></stop>
                        </radialGradient>
                        <radialGradient id="SVGK07hbcHv" cx={0} cy={0} r={1} gradientTransform="rotate(47.573 -3.7 4.554)scale(3.27979)" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#008ce2"></stop>
                          <stop offset={1} stopColor="#0068c6"></stop>
                        </radialGradient>
                        <radialGradient id="SVGe1BkJcGN" cx={0} cy={0} r={1} gradientTransform="rotate(78.837 3.672 9.578)scale(2.93403)" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#0078d4"></stop>
                          <stop offset={1} stopColor="#004695"></stop>
                        </radialGradient>
                      </defs>
                    </g>
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
                  <svg className="w-16 h-16" viewBox="0 0 128 128">
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
                  <svg className="w-16 h-16" viewBox="0 0 128 128">
                    <path fill="#fcc21b" d="M68.43 5.38c.89-1.95 2.55-2.5 3.93-2.56c2.1-.1 4.3 1.35 6.37 3.06C80.2 7.54 81.96 8.82 84 9.72c1.41.5 2.81.6 4.23.53c2-.1 4.03-.54 6.04-.64l.11-.01l.91-.08c2.3-.11 4.47.43 6.53 1.62c1.89 1.72 2.72 3.86 2.46 6.44c-.44 2.13-.06 4.08 1.13 5.85c2.05 1.44 4.2 2.7 6.46 3.77c2.34 1.28 3.81 3.21 4.45 5.78c.23 2.72-1.03 4.46-3.75 5.21c-3.54.89-8.3.89-12.31 3.99c-5.86 4.89-7.7 9.82-10.25 10.57c-1.25-1.42-9.05-7.45-22.13-10.34c-2.34-8.07-3.76-27.55.55-37.03"></path>
                    <path fill="#d19b15" d="M81.63 40.69c2.3-4.6 8.85-12.69 10.42-11.09c1.55 1.74-2.02 10.78-4.53 15.21c-.89-.94-3.76-2.91-5.01-3.24"></path>
                    <path fill="#8d6e63" d="M93.2 55.42c-1.35 0-2.67-.69-3.42-1.93c-6.88-11.32-22.46-10.13-22.61-10.11c-2.2.18-4.14-1.44-4.33-3.63a4.006 4.006 0 0 1 3.61-4.34c.84-.08 20.67-1.71 30.17 13.94c1.15 1.89.54 4.35-1.34 5.49c-.66.39-1.37.58-2.08.58"></path>
                    <path fill="#fcc21b" d="M96.06 122.07c-17.13 4.22-40.94 3.92-57.95.56C22.19 119.48 10 110.09 11.4 91.61c1.42-18.7 13.81-36.31 30.85-44.07c16.49-7.51 38.62-11.17 50.28 5.87c2.9 4.24 8.44 13.65 8.7 18.27c.02.37.04.7.12 1.02c.02 1.16.49 2.33 1.63 3.19c7.33 5.55 12.67 12.91 13.65 23c1.16 12.03-10.22 20.63-20.57 23.18"></path>
                    <path fill="#424242" d="M80.87 91.13c-2.08-3.38-5.91-7.05-9.53-10.2l2.81-7.78c2.5 1.95 4.7 3.78 6.42 5.36c.28.27.72.29 1.04.06l6.44-4.79c.18-.14.29-.34.32-.57a.8.8 0 0 0-.21-.62c-1.91-2.13-6.05-5.86-10.58-8.93l1.65-4.56c.19-.52-.07-1.09-.6-1.29l-7.57-2.74c-.52-.19-1.1.08-1.29.6l-1.23 3.41c-7.13-2.21-12.79-1.5-17.23 2.21c-3.48 2.92-4.98 7.09-3.92 10.87c1.08 4.03 4.24 6.79 8.24 10.28l.51.45c.93.8 1.92 1.63 2.89 2.46l-3.42 9.46c-4.49-2.94-8.25-7.01-8.89-7.9a.806.806 0 0 0-1.08-.21l-7.42 4.74c-.18.11-.31.3-.36.52c-.04.21 0 .43.12.61c2.23 3.36 5.88 7.12 9.77 10.06c.93.7 2.33 1.68 4.05 2.71l-1.29 3.55c-.18.52.08 1.09.6 1.28l7.58 2.75c.52.19 1.1-.08 1.29-.6l1.07-2.96c6.92 1.88 13 .79 17.7-3.23c4.54-3.89 5.32-9.35 2.12-15M65.18 68.4l-2.07 5.73c-1.93-1.5-2.96-2.63-2.23-4.25c.76-1.66 2.65-1.77 4.3-1.48m2.05 23.9c1.33 1.29 2.27 2.48 2.36 3.57c.04.62-.19 1.22-.73 1.84c-.94 1.09-2.44 1.3-3.99 1.11z"></path>
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
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="w-8 h-8">
                    <g fill="none">
                      <path fill="#66e1ff" d="M9.136 17.288a8.136 8.136 0 1 0 0-16.272a8.136 8.136 0 0 0 0 16.272"></path>
                      <path fill="#c2f3ff" d="m10.767 6.96l2.477 2.474a.956.956 0 0 0 1.352 0l2.39-2.391a8.128 8.128 0 0 0-15.715.05a8.13 8.13 0 0 0 1.24 6.772L9.42 6.96a.956.956 0 0 1 1.348 0"></path>
                      <path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M1.496 11.94a8.13 8.13 0 0 1 14.368-7.35m-.982 10.313l2.232 2.23" strokeWidth={1}></path>
                      <path fill="#c77f67" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M22.522 20.518a1.435 1.435 0 1 1-2.029 2.028l-3.72-3.72a.957.957 0 0 1 0-1.352l.677-.676a.957.957 0 0 1 1.352 0z" strokeWidth={1}></path>
                      <path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="m1.002 15.371l8.417-8.41a.957.957 0 0 1 1.352 0l2.473 2.474a.956.956 0 0 0 1.353 0L23 1.025" strokeWidth={1}></path>
                      <path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M20.13 1.025H23v2.87m-5.75 5.757a8.13 8.13 0 0 1-13.316 5.755" strokeWidth={1}></path>
                    </g>
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
                  <svg xmlns="http://www.w3.org/2000/svg" width={128} height={128} viewBox="0 0 128 128" className="w-8 h-8">
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
                  <svg xmlns="http://www.w3.org/2000/svg" width={128} height={128} viewBox="0 0 128 128" className="w-8 h-8">
                    <path fill="#ffca28" d="M93.46 39.45c6.71-1.49 15.45-8.15 16.78-11.43c.78-1.92-3.11-4.92-4.15-6.13c-2.38-2.76-1.42-4.12-.5-7.41c1.05-3.74-1.44-7.87-4.97-9.49s-7.75-1.11-11.3.47s-6.58 4.12-9.55 6.62c-2.17-1.37-5.63-7.42-11.23-3.49c-3.87 2.71-4.22 8.61-3.72 13.32c1.17 10.87 3.85 16.51 8.9 18.03c6.38 1.92 13.44.91 19.74-.49"></path>
                    <path fill="#e2a610" d="M104.36 8.18c-.85 14.65-15.14 24.37-21.92 28.65l4.4 3.78s2.79.06 6.61-1.16c6.55-2.08 16.12-7.96 16.78-11.43c.97-5.05-4.21-3.95-5.38-7.94c-.61-2.11 2.97-6.1-.49-11.9m-24.58 3.91s-2.55-2.61-4.44-3.8c-.94 1.77-1.61 3.69-1.94 5.67c-.59 3.48 0 8.42 1.39 12.1c.22.57 1.04.48 1.13-.12c1.2-7.91 3.86-13.85 3.86-13.85"></path>
                    <path fill="#ffca28" d="M61.96 38.16S30.77 41.53 16.7 68.61s-2.11 43.5 10.55 49.48s44.56 8.09 65.31 3.17s25.94-15.12 24.97-24.97c-1.41-14.38-14.77-23.22-14.77-23.22s.53-17.76-13.25-29.29c-12.23-10.24-27.55-5.62-27.55-5.62"></path>
                    <path fill="#6b4b46" d="M74.76 83.73c-6.69-8.44-14.59-9.57-17.12-12.6c-1.38-1.65-2.19-3.32-1.88-5.39c.33-2.2 2.88-3.72 4.86-4.09c2.31-.44 7.82-.21 12.45 4.2c1.1 1.04.7 2.66.67 4.11c-.08 3.11 4.37 6.13 7.97 3.53c3.61-2.61.84-8.42-1.49-11.24c-1.76-2.13-8.14-6.82-16.07-7.56c-2.23-.21-11.2-1.54-16.38 8.31c-1.49 2.83-2.04 9.67 5.76 15.45c1.63 1.21 10.09 5.51 12.44 8.3c4.07 4.83 1.28 9.08-1.9 9.64c-8.67 1.52-13.58-3.17-14.49-5.74c-.65-1.83.03-3.81-.81-5.53c-.86-1.77-2.62-2.47-4.48-1.88c-6.1 1.94-4.16 8.61-1.46 12.28c2.89 3.93 6.44 6.3 10.43 7.6c14.89 4.85 22.05-2.81 23.3-8.42c.92-4.11.82-7.67-1.8-10.97"></path>
                    <path fill="none" stroke="#6b4b46" strokeMiterlimit={10} strokeWidth={5} d="M71.16 48.99c-12.67 27.06-14.85 61.23-14.85 61.23"></path>
                    <path fill="#6d4c41" d="M81.67 31.96c8.44 2.75 10.31 10.38 9.7 12.46c-.73 2.44-10.08-7.06-23.98-6.49c-4.86.2-3.45-2.78-1.2-4.5c2.97-2.27 7.96-3.91 15.48-1.47"></path>
                    <path fill="#6b4b46" d="M81.67 31.96c8.44 2.75 10.31 10.38 9.7 12.46c-.73 2.44-10.08-7.06-23.98-6.49c-4.86.2-3.45-2.78-1.2-4.5c2.97-2.27 7.96-3.91 15.48-1.47"></path>
                    <path fill="#e2a610" d="M96.49 58.86c1.06-.73 4.62.53 5.62 7.5c.49 3.41.64 6.71.64 6.71s-4.2-3.77-5.59-6.42c-1.75-3.35-2.43-6.59-.67-7.79"></path>
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
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" className="w-8 h-8">
                    <g fill="none">
                      <path fill="url(#SVGyN4EIbfn)" d="M13.062 9.49a1.5 1.5 0 0 0-1.837 1.06l-.647 2.415a4 4 0 0 0 7.727 2.07l.647-2.414a1.5 1.5 0 0 0-1.06-1.837z"></path>
                      <path fill="url(#SVGfs3KhehE)" d="M6.942 9.49a1.5 1.5 0 0 1 1.837 1.06l.647 2.415a4 4 0 1 1-7.727 2.07l-.648-2.414a1.5 1.5 0 0 1 1.061-1.837z"></path>
                      <path fill="url(#SVGzLX6iAGm)" d="M10 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6"></path>
                      <path fill="url(#SVGdLJQd93M)" d="M16.5 4a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5"></path>
                      <path fill="url(#SVG8cZYydLq)" d="M3.5 4a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5"></path>
                      <path fill="url(#SVGCZSfdcHh)" d="M7.5 9A1.5 1.5 0 0 0 6 10.5V14a4 4 0 0 0 8 0v-3.5A1.5 1.5 0 0 0 12.5 9z"></path>
                      <defs>
                        <radialGradient id="SVGyN4EIbfn" cx={0} cy={0} r={1} gradientTransform="rotate(78.837 -.528 14.039)scale(6.28119)" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#0078d4"></stop>
                          <stop offset={1} stopColor="#004695"></stop>
                        </radialGradient>
                        <radialGradient id="SVGfs3KhehE" cx={0} cy={0} r={1} gradientTransform="rotate(61.056 -6.793 7.547)scale(9.32732 6.71383)" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#008ce2"></stop>
                          <stop offset={1} stopColor="#0068c6"></stop>
                        </radialGradient>
                        <radialGradient id="SVGzLX6iAGm" cx={0} cy={0} r={1} gradientTransform="rotate(59.931 1.15 10.225)scale(3.74767)" gradientUnits="userSpaceOnUse">
                          <stop offset={0.339} stopColor="#3dcbff"></stop>
                          <stop offset={1} stopColor="#14b1ff"></stop>
                        </radialGradient>
                        <radialGradient id="SVGdLJQd93M" cx={0} cy={0} r={1} gradientTransform="rotate(78.837 4.563 12.25)scale(3.66754)" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#0078d4"></stop>
                          <stop offset={1} stopColor="#004695"></stop>
                        </radialGradient>
                        <radialGradient id="SVG8cZYydLq" cx={0} cy={0} r={1} gradientTransform="rotate(47.573 -5.033 5.534)scale(4.09974)" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#008ce2"></stop>
                          <stop offset={1} stopColor="#0068c6"></stop>
                        </radialGradient>
                        <radialGradient id="SVGCZSfdcHh" cx={0} cy={0} r={1} gradientTransform="matrix(2.50362 4.865 -4.56496 2.34921 9.23 12.16)" gradientUnits="userSpaceOnUse">
                          <stop offset={0.339} stopColor="#3dcbff"></stop>
                          <stop offset={1} stopColor="#14b1ff"></stop>
                        </radialGradient>
                      </defs>
                    </g>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14" className="w-6 h-6">
                      <g fill="none" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}>
                        <path d="M9.5 3.5h4v4"></path>
                        <path d="M13.5 3.5L7.85 9.15a.5.5 0 0 1-.7 0l-2.3-2.3a.5.5 0 0 0-.7 0L.5 10.5"></path>
                      </g>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" className="w-6 h-6">
                      <g fill="none">
                        <path fill="#9b9b9b" d="M2 30h4.032l9.945-2.775L25.922 30H30V9.3A2.3 2.3 0 0 0 27.7 7H4.3A2.3 2.3 0 0 0 2 9.3z"></path>
                        <path fill="#83cbff" d="M27 14h-1c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v1c0 .56-.45 1-1 1m1 4v-1c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1c.55 0 1-.44 1-1m0 5v-1c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1c.55 0 1-.44 1-1M7 22v1c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h1c.55 0 1 .45 1 1M6 11H5c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1m0 5H5c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1"></path>
                        <path fill="#d3d3d3" d="M26 30h-7.013l-3.016-1.73L12.956 30H6V4.46C6 3.1 7.1 2 8.46 2h15.08C24.9 2 26 3.1 26 4.46z"></path>
                        <path fill="#1c1c1c" d="M19 30h-6v-3.75c0-.69.56-1.25 1.25-1.25h3.5c.69 0 1.26.56 1.26 1.26V30z"></path>
                        <path fill="#83cbff" d="M14.5 18h-3c-.27 0-.5-.22-.5-.5v-2.01c0-.27.22-.5.5-.5h3.01c.27 0 .5.22.5.5v2.01a.51.51 0 0 1-.51.5m6.5-.49V15.5c0-.27-.22-.5-.5-.5h-3c-.27 0-.5.22-.5.5v2.01c0 .27.22.5.5.5h3.01c.27-.01.49-.23.49-.5m-6 5V20.5c0-.27-.22-.5-.5-.5h-3c-.27 0-.5.22-.5.5v2.01c0 .27.22.5.5.5h3.01c.27-.01.49-.23.49-.5m6 0V20.5c0-.27-.22-.5-.5-.5h-3c-.27 0-.5.22-.5.5v2.01c0 .27.22.5.5.5h3.01c.27-.01.49-.23.49-.5m-6-15V5.5c0-.27-.22-.5-.5-.5h-3c-.27 0-.5.22-.5.5v2.01c0 .27.22.5.5.5h3.01c.27-.01.49-.23.49-.5m6 0V5.5c0-.27-.22-.5-.5-.5h-3c-.27 0-.5.22-.5.5v2.01c0 .27.22.5.5.5h3.01c.27-.01.49-.23.49-.5m-6 5V10.5c0-.27-.22-.5-.5-.5h-3c-.27 0-.5.22-.5.5v2.01c0 .27.22.5.5.5h3.01c.27-.01.49-.23.49-.5m6 0V10.5c0-.27-.22-.5-.5-.5h-3c-.27 0-.5.22-.5.5v2.01c0 .27.22.5.5.5h3.01c.27-.01.49-.23.49-.5"></path>
                      </g>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" className="w-6 h-6">
                      <g fill="none" stroke="#00034a" strokeMiterlimit={10} strokeWidth={1}>
                        <path fill="#00034a" d="M5.818 20.812c.902 0 1.968 0 2.82.154c.698.125 2.439 1.013 2.743 1.688c.426.483.634 3.05.634 5.182c0 2.131-.208 4.698-.634 5.18c-.427.949-2.633.949-4.292.949c-1.033 0-2.28 0-3.176-.23c-.59-.152-2.144-1.071-2.387-1.611c-.426-.446-.634-3.05-.634-5.183c0-2.13.208-4.698.634-5.18c.427-.948 2.634-.949 4.292-.949ZM35.296 6.219c-.762-.208-1.63-.212-2.386-.212c-1.658 0-3.865 0-4.29 2.14c-.427 1.062-.635 6.717-.635 11.369c0 4.65.208 10.343.634 11.366c.25 1.246 1.899 2.455 3.092 2.804c.783.227 1.688.23 2.47.23c1.658 0 3.867 0 4.293-2.14c.426-1.061.634-6.716.634-11.367s-.208-10.307-.634-11.33c-.255-1.286-1.941-2.523-3.178-2.86Zm-15.931 7.176c.922 0 2.016.003 2.879.274c.858.268 2.44 1.292 2.683 2.173c.445.815.635 4.89.635 8.299c0 3.41-.209 7.521-.635 8.298c-.427 1.554-2.634 1.554-4.292 1.554c-.81 0-1.754-.003-2.554-.186c-.956-.218-2.735-1.273-3.008-2.261c-.426-.777-.635-4.889-.635-8.298c0-3.41.19-7.484.635-8.299c.426-1.554 2.633-1.554 4.291-1.554Z"></path>
                        <path fill="#9bff00" d="M10.109 21.76c-.426-.947-2.633-.947-4.29-.947c-1.66 0-3.867 0-4.293.947c-.426.482-.634 3.05-.634 5.181s.208 4.737.634 5.183c.427.947 2.634.947 4.292.947s3.865 0 4.291-.947c.426-.484.635-3.05.635-5.183c0-2.13-.209-4.698-.635-5.18Zm13.545-6.81c-.426-1.545-2.632-1.555-4.29-1.555s-3.865 0-4.291 1.554c-.446.815-.635 4.888-.635 8.299s.209 7.52.635 8.298c.426 1.544 2.633 1.553 4.291 1.553s3.864 0 4.291-1.554c.426-.777.635-4.888.635-8.297s-.191-7.484-.636-8.299Z"></path>
                        <path fill="#fff" d="M37.202 8.185c-.427-2.16-2.634-2.179-4.292-2.179s-3.865 0-4.29 2.141c-.427 1.062-.635 6.717-.635 11.368s.208 10.344.634 11.367c.426 2.123 2.633 2.141 4.29 2.141c1.66 0 3.867 0 4.293-2.14c.426-1.061.634-6.717.634-11.368s-.208-10.307-.634-11.33Z"></path>
                      </g>
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

      {/* Client Testimonials */}
      <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
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
            <motion.p 
              className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t('realEstateBlog.testimonials.subtitle')}
            </motion.p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                className="relative flex flex-col items-center"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                whileHover={{ y: -10 }}
              >
                {/* Profile Image */}
                <motion.div 
                  className="relative z-20 mb-4"
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                >
                  <motion.img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Testimonial Card */}
                <motion.div 
                  className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-xl p-6 shadow-lg relative z-10 w-full max-w-sm`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
                  }}
                >
                  <motion.h3 
                    className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.7 + (index * 0.1) }}
                  >
                    {testimonial.author}
                  </motion.h3>
                  <motion.p 
                    className={`text-sm italic mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8 + (index * 0.1) }}
                  >
                    {testimonial.title}
                  </motion.p>
                  <motion.p 
                    className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.9 + (index * 0.1) }}
                  >
                    "{testimonial.quote}"
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>

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