import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const [user, setUser] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    budget: '',
    location: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'))

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'))
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const checkAuth = async () => {
      if (isAuthenticated()) {
        const currentUser = getCurrentUser()
        setUser(currentUser)
      } else {
        navigate('/login')
      }
    }
    checkAuth()
  }, [navigate])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitSuccess(true)
    
    // Reset form after success
    setTimeout(() => {
      setSubmitSuccess(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyType: '',
        budget: '',
        location: '',
        message: ''
      })
    }, 3000)
  }

  if (!user) {
    return null
  }

  return (
    <div className={isDark ? 'bg-gray-900 text-white transition-colors' : 'bg-white text-black transition-colors'}>
      <Navbar user={user} />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <motion.video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <source src="/Contact R.mp4" type="video/mp4" />
        </motion.video>
        
        {/* Dynamic Overlay */}
        <motion.div 
          className={`absolute inset-0 ${isDark ? 'bg-black/70' : 'bg-black/50'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white whitespace-nowrap" style={{ fontFamily: 'serif' }}>
              {t('contact.hero.title')}
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <p className="text-xl mb-8 text-white/90 whitespace-nowrap">
              Get in touch with our professional real estate team for personalized assistance.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <motion.a
              href="#inquiry"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {t('contact.hero.button')}
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Property Inquiry Form Section */}
      <section id="inquiry" className={`py-20 ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        <div className="mx-auto max-w-4xl px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}
              style={{ fontFamily: 'serif' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {t('contact.inquiryForm.title')}
            </motion.h2>
            <motion.p 
              className={`text-lg whitespace-nowrap ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              {t('contact.inquiryForm.subtitle')}
            </motion.p>
          </motion.div>

          <motion.div 
            className={`${isDark ? 'bg-gray-900' : 'bg-gray-50'} rounded-2xl shadow-xl p-8 md:p-12`}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ 
              scale: 1.01,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
            }}
          >
            {submitSuccess && (
              <motion.div 
                className="mb-8 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="flex items-center">
                  <motion.svg 
                    className="w-5 h-5 mr-2" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </motion.svg>
                  {t('contact.inquiryForm.successMessage')}
                </div>
              </motion.div>
            )}

              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.label 
                      htmlFor="name" 
                      className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {t('contact.inquiryForm.fullName')}
                    </motion.label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors ${isDark ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-black placeholder-gray-500'}`}
                      placeholder={t('contact.inquiryForm.fullNamePlaceholder')}
                      whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(239, 68, 68, 0.1)" }}
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.label 
                      htmlFor="email" 
                      className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {t('contact.inquiryForm.emailAddress')}
                    </motion.label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors ${isDark ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-black placeholder-gray-500'}`}
                      placeholder={t('contact.inquiryForm.emailPlaceholder')}
                      whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(239, 68, 68, 0.1)" }}
                    />
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.label 
                      htmlFor="phone" 
                      className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {t('contact.inquiryForm.phoneNumber')}
                    </motion.label>
                    <motion.input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors ${isDark ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-black placeholder-gray-500'}`}
                      placeholder={t('contact.inquiryForm.phonePlaceholder')}
                      whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(239, 68, 68, 0.1)" }}
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.label 
                      htmlFor="propertyType" 
                      className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {t('contact.inquiryForm.propertyType')}
                    </motion.label>
                    <motion.select
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors ${isDark ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-black'}`}
                      whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(239, 68, 68, 0.1)" }}
                    >
                      <option value="">{t('contact.inquiryForm.selectPropertyType')}</option>
                      <option value="apartment">{t('contact.inquiryForm.apartment')}</option>
                      <option value="house">{t('contact.inquiryForm.house')}</option>
                      <option value="villa">{t('contact.inquiryForm.villa')}</option>
                      <option value="commercial">{t('contact.inquiryForm.commercial')}</option>
                      <option value="land">{t('contact.inquiryForm.land')}</option>
                      <option value="other">{t('contact.inquiryForm.other')}</option>
                    </motion.select>
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.label 
                      htmlFor="budget" 
                      className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {t('contact.inquiryForm.budget')}
                    </motion.label>
                    <motion.select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors ${isDark ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-black'}`}
                      whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(239, 68, 68, 0.1)" }}
                    >
                      <option value="">{t('contact.inquiryForm.selectBudget')}</option>
                      <option value="under-100k">{t('contact.inquiryForm.under100k')}</option>
                      <option value="100k-250k">{t('contact.inquiryForm.100k250k')}</option>
                      <option value="250k-500k">{t('contact.inquiryForm.250k500k')}</option>
                      <option value="500k-1m">{t('contact.inquiryForm.500k1m')}</option>
                      <option value="1m-2m">{t('contact.inquiryForm.1m2m')}</option>
                      <option value="over-2m">{t('contact.inquiryForm.over2m')}</option>
                    </motion.select>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.label 
                      htmlFor="location" 
                      className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {t('contact.inquiryForm.preferredLocation')}
                    </motion.label>
                    <motion.input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors ${isDark ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-black placeholder-gray-500'}`}
                      placeholder={t('contact.inquiryForm.locationPlaceholder')}
                      whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(239, 68, 68, 0.1)" }}
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                >
                  <motion.label 
                    htmlFor="message" 
                    className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {t('contact.inquiryForm.message')}
                  </motion.label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors resize-none ${isDark ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-black placeholder-gray-500'}`}
                    placeholder={t('contact.inquiryForm.messagePlaceholder')}
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(239, 68, 68, 0.1)" }}
                  />
                </motion.div>

                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.0 }}
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </motion.svg>
                        {t('contact.inquiryForm.processingInquiry')}
                      </>
                    ) : (
                      t('contact.inquiryForm.submitInquiry')
                    )}
                  </motion.button>
                </motion.div>
              </motion.form>
            </motion.div>
        </div>
      </section>

      {/* Real Estate Office Information Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-900 text-white' : 'bg-black text-white'}`}>
        <div className="mx-auto max-w-7xl px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-4xl font-bold mb-4 text-white"
              style={{ fontFamily: 'serif' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {t('contact.officeInfo.title')}
            </motion.h2>
            <motion.p 
              className="text-lg max-w-2xl mx-auto text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              {t('contact.officeInfo.subtitle')}
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Phone */}
            <motion.div 
              className={`${isDark ? 'bg-gray-800' : 'bg-gray-900'} rounded-xl p-8 text-center shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-800'}`}
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
                className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold text-white mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                {t('contact.officeInfo.callUs')}
              </motion.h3>
              <motion.p 
                className="text-gray-300 mb-2"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                {t('contact.officeInfo.phone')}
              </motion.p>
              <motion.p 
                className="text-sm text-gray-400"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                {t('contact.officeInfo.businessHours')}
              </motion.p>
            </motion.div>

            {/* Email */}
            <motion.div 
              className={`${isDark ? 'bg-gray-800' : 'bg-gray-900'} rounded-xl p-8 text-center shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-800'}`}
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
                className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold text-white mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                {t('contact.officeInfo.emailUs')}
              </motion.h3>
              <motion.p 
                className="text-gray-300 mb-2"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                {t('contact.officeInfo.email')}
              </motion.p>
              <motion.p 
                className="text-sm text-gray-400"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                {t('contact.officeInfo.emailResponse')}
              </motion.p>
            </motion.div>

            {/* Location */}
            <motion.div 
              className={`${isDark ? 'bg-gray-800' : 'bg-gray-900'} rounded-xl p-8 text-center shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-800'}`}
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
                className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold text-white mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                {t('contact.officeInfo.visitUs')}
              </motion.h3>
              <motion.p 
                className="text-gray-300 mb-2"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                {t('contact.officeInfo.address')}
              </motion.p>
              <motion.p 
                className="text-sm text-gray-400"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                {t('contact.officeInfo.city')}
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="mx-auto max-w-7xl px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}
              style={{ fontFamily: 'serif' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {t('contact.map.title')}
            </motion.h2>
            <motion.p 
              className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              {t('contact.map.subtitle')}
            </motion.p>
          </motion.div>

          <motion.div 
            className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-2xl overflow-hidden shadow-xl`}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
            }}
          >
            <motion.div 
              className="aspect-w-16 aspect-h-9 h-96 md:h-[500px]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <iframe
                title={t('contact.map.title')}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2155718126597!2d-74.0059416845937!3d40.75889697932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square%2C%20New%20York%2C%20NY%2010036%2C%20USA!5e0!3m2!1sen!2sus!4v1620211234567!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Fixed Background Image */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: 'url(/images/67CTA.jpg)'
          }}
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        ></motion.div>
        <motion.div 
          className={`absolute inset-0 ${isDark ? 'bg-black/60' : 'bg-black/50'}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        ></motion.div>
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white" style={{ fontFamily: 'serif' }}>
              {t('contact.cta.title')}
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <p className="text-lg md:text-xl mb-10 leading-relaxed text-white/90">
              Our expert real estate team is here to help you every step of the way.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <motion.a
              href="#inquiry"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 font-bold text-lg rounded-lg transition-all duration-300"
            >
              {t('contact.cta.button')}
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
