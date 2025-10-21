import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ThemeToggle } from './theme-toggle'
import { LanguageSelector } from './language-selector'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu'
import { logoutUser } from '../utils/auth'
import { ChevronDown, LogOut } from 'lucide-react'


export default function Navbar({ user }) {
  const { t } = useTranslation()
  const [isDark, setIsDark] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Check if 'dark' class is present on <html>
    const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'))
    checkDark()
    // Listen for class changes (for live theme switching)
    const observer = new MutationObserver(checkDark)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('nav')) {
        setIsMobileMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMobileMenuOpen])

  const handleLogout = () => {
    // Clear user session from localStorage
    logoutUser()
    // Navigate to login page using React Router
    navigate('/login')
  }

  const navigate = useNavigate()
  const initials = user ? `${user.firstName?.[0] || ''}${user.lastName?.[0] || ''}`.toUpperCase() : 'U'
   

  return (
    <header
      className={`sticky top-0 z-50 border-b border-black/10 dark:border-white/10 transition-colors ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}
    >
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Logo - Fixed Left */}
        <div className="flex-shrink-0">
          <a href="#hero" className="flex items-center gap-3">
            <img src="/Logo.jpg" alt="Logo" className="h-8 w-auto" />
            <span className="sr-only">Home</span>
          </a>
        </div>

        <ul className="hidden md:flex items-center gap-8">
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="inline-flex items-center gap-1 hover:text-red-500 dark:hover:text-red-400 transition-colors">
                  {t('nav.home')}
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-52">
                <DropdownMenuItem onClick={() => navigate('/home')}>
                  {t('nav.home1')}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/home2')}>
                  {t('nav.home2')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          
          <li>
            <button onClick={() => navigate('/about')} className="hover:text-red-500 dark:hover:text-red-400 transition-colors">
              {t('nav.about')}
            </button>
          </li>

          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="inline-flex items-center gap-1 hover:text-red-500 dark:hover:text-red-400 transition-colors">
                  {t('nav.services')}
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {/* All Services Section */}
                <DropdownMenuItem 
                  onClick={() => navigate('/services')}
                  className="font-semibold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
                >
                  {t('nav.allServices')}
                </DropdownMenuItem>
                
                {/* Separator */}
                <div className="h-px bg-gray-200 dark:bg-gray-700 mx-2 my-1" />
                
                {[
                  {label: t('nav.luxuryVillas'), path:'/luxury-villa'},
                  {label: t('nav.contemporaryTownhouse'), path:'/services/contemporary-townhouse'},
                  {label: t('nav.luxuryCondo'), path:'/services/luxury-condo'},
                  {label: t('nav.modernPenthouse'), path:'/services/modern-penthouse'},
                  {label: t('nav.waterfrontMansion'), path:'/services/waterfront-mansion'},
                  {label: t('nav.estateHome'), path:'/services/estate-home'}
                ].map((item) => (
                  <DropdownMenuItem 
                    key={item.label} 
                    onClick={() => navigate(item.path)}
                  >
                    {item.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

          <li>
            <button onClick={() => navigate('/blog')} className="hover:text-red-500 dark:hover:text-red-400 transition-colors">
              {t('nav.blog')}
            </button>
          </li>
          <li>
            <button onClick={() => navigate('/contact')} className="hover:text-red-500 dark:hover:text-red-400 transition-colors">
              {t('nav.contact')}
            </button>
          </li>
        </ul>
        {/* Right Side - Fixed */}
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <div className="order-1 md:order-0">
            <LanguageSelector variant="icon-only" />
          </div>

          {/* Theme Toggle */}
          <div className="order-2 md:order-1">
            <ThemeToggle />
          </div>

          {/* User Avatar */}
          <div className="h-9 w-9 rounded-full bg-red-500 dark:bg-red-600 text-white grid place-items-center font-semibold select-none order-3 md:order-2">
            {initials}
          </div>
          
          {/* Logout Button */}
          <button 
            onClick={handleLogout} 
            className="hover:text-red-500 dark:hover:text-red-400 transition-colors p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5 order-4 md:order-3"
            aria-label="Logout"
          >
            <LogOut className="h-5 w-5" />
          </button>
          
          {/* Mobile Menu Button - Last on Mobile */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden order-5 inline-flex items-center justify-center rounded-md border border-black/10 dark:border-white/10 px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5" 
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b border-black/10 dark:border-white/10 shadow-lg">
            <ul className="flex flex-col p-4 space-y-3">
              {/* Home Dropdown */}
              <li className="border-b border-black/5 dark:border-white/5 pb-2">
                <div className="font-semibold text-sm text-gray-500 dark:text-gray-400 mb-2">{t('nav.home')}</div>
                <button 
                  onClick={() => { navigate('/home'); setIsMobileMenuOpen(false); }}
                  className="block w-full text-left px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-md transition-colors"
                >
                  {t('nav.home1')}
                </button>
                <button 
                  onClick={() => { navigate('/home2'); setIsMobileMenuOpen(false); }}
                  className="block w-full text-left px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-md transition-colors"
                >
                  {t('nav.home2')}
                </button>
              </li>

              {/* About */}
              <li>
                <button 
                  onClick={() => { navigate('/about'); setIsMobileMenuOpen(false); }}
                  className="block w-full text-left px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-md transition-colors font-medium"
                >
                  {t('nav.about')}
                </button>
              </li>

              {/* Services Dropdown */}
              <li className="border-b border-black/5 dark:border-white/5 pb-2">
                <div className="font-semibold text-sm text-gray-500 dark:text-gray-400 mb-2">{t('nav.services')}</div>
                <button 
                  onClick={() => { navigate('/services'); setIsMobileMenuOpen(false); }}
                  className="block w-full text-left px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-md transition-colors text-red-600 dark:text-red-400 font-semibold"
                >
                  {t('nav.allServices')}
                </button>
                <button 
                  onClick={() => { navigate('/luxury-villa'); setIsMobileMenuOpen(false); }}
                  className="block w-full text-left px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-md transition-colors"
                >
                  {t('nav.luxuryVillas')}
                </button>
                <button 
                  onClick={() => { navigate('/services/contemporary-townhouse'); setIsMobileMenuOpen(false); }}
                  className="block w-full text-left px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-md transition-colors"
                >
                  {t('nav.contemporaryTownhouse')}
                </button>
                <button 
                  onClick={() => { navigate('/services/luxury-condo'); setIsMobileMenuOpen(false); }}
                  className="block w-full text-left px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-md transition-colors"
                >
                  {t('nav.luxuryCondo')}
                </button>
                <button 
                  onClick={() => { navigate('/services/modern-penthouse'); setIsMobileMenuOpen(false); }}
                  className="block w-full text-left px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-md transition-colors"
                >
                  {t('nav.modernPenthouse')}
                </button>
                <button 
                  onClick={() => { navigate('/services/waterfront-mansion'); setIsMobileMenuOpen(false); }}
                  className="block w-full text-left px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-md transition-colors"
                >
                  {t('nav.waterfrontMansion')}
                </button>
                <button 
                  onClick={() => { navigate('/services/estate-home'); setIsMobileMenuOpen(false); }}
                  className="block w-full text-left px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-md transition-colors"
                >
                  {t('nav.estateHome')}
                </button>
              </li>

              {/* Blog */}
              <li>
                <button 
                  onClick={() => { navigate('/blog'); setIsMobileMenuOpen(false); }}
                  className="block w-full text-left px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-md transition-colors font-medium"
                >
                  {t('nav.blog')}
                </button>
              </li>

              {/* Contact */}
              <li>
                <button 
                  onClick={() => { navigate('/contact'); setIsMobileMenuOpen(false); }}
                  className="block w-full text-left px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-md transition-colors font-medium"
                >
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}