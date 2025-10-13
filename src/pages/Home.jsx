import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, logoutUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import { ThemeDebug } from '../components/theme-debug'
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next'
// Dynamic Section Components
import HeroSection from '../sections/HeroSection'
import WelcomeSection from '../sections/WelcomeSection'
import ProfessionalStatsSection from '../sections/ProfessionalStatsSection'
import FeaturesSection from '../sections/FeaturesSection'
import PropertiesSection from '../sections/PropertiesSection'
import TestimonialsSection from '../sections/TestimonialsSection'
import CTASection from '../sections/CTASection'

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

  useEffect(() => {
    const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'))
    checkDark()
    const observer = new MutationObserver(checkDark)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  // Dynamic Sections Configuration
  const sections = {
    hero: {
      type: 'hero',
      video: '/HOME1.mp4',
      title: t('home1.hero.title'),
      subtitle: t('home1.hero.subtitle'),
      buttons: [
        {
          text: t('home1.hero.reserveTable'),
          href: '/contact',
          className: 'bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
        }
      ]
    },
    welcome: {
      type: 'welcome',
      title: t('home1.welcome.title'),
      subtitle: t('home1.welcome.subtitle'),
      description: t('home1.welcome.description'),
      buttonText: t('home1.welcome.viewButton'),
      buttonLink: '/services',
      image: '/images/Home11.jpg'
    },
    professionalStats: {
      type: 'professionalStats',
      badge: t('home1.professionalStats.badge'),
      title: t('home1.professionalStats.title'),
      description: t('home1.professionalStats.description'),
      backgroundImage: '/images/67Bg.jpg',
      buttons: [
        {
          text: t('home1.professionalStats.buttons.getQuotation'),
          href: '/contact',
          className: 'bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
        },
        {
          text: t('home1.professionalStats.buttons.ourServices'),
          href: '/services',
          className: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 font-bold text-lg rounded-lg transition-all duration-300'
        }
      ],
      stats: [
        {
          value: '500+',
          label: t('home1.professionalStats.stats.luxuryVillas.label'),
          description: t('home1.professionalStats.stats.luxuryVillas.description')
        },
        {
          value: '150+',
          label: t('home1.professionalStats.stats.apartments.label'),
          description: t('home1.professionalStats.stats.apartments.description')
        },
        {
          value: '75+',
          label: t('home1.professionalStats.stats.commercial.label'),
          description: t('home1.professionalStats.stats.commercial.description')
        },
        {
          value: '350+',
          label: t('home1.professionalStats.stats.familyHomes.label'),
          description: t('home1.professionalStats.stats.familyHomes.description')
        }
      ]
    },
    features: {
      type: 'features',
      title: t('home1.whyChooseUs.title'),
      subtitle: t('home1.whyChooseUs.subtitle'),
      items: [
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
    },
    properties: {
      type: 'properties',
      title: t('home1.signatureDishes.title'),
      subtitle: t('home1.signatureDishes.subtitle'),
      contactText: t('home1.signatureDishes.contact'),
      detailsText: t('home1.signatureDishes.details'),
      categories: ['Apartment', 'Villa', 'Penthouse', 'Family Home', 'Commercial', 'Studio'],
      categoryMap: {
        'Apartment': t('home1.signatureDishes.categories.apartment'),
        'Villa': t('home1.signatureDishes.categories.villa'),
        'Penthouse': t('home1.signatureDishes.categories.penthouse'),
        'Family Home': t('home1.signatureDishes.categories.familyHome'),
        'Commercial': t('home1.signatureDishes.categories.commercial'),
        'Studio': t('home1.signatureDishes.categories.studio')
      },
      items: [
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
    },
    testimonials: {
      type: 'testimonials',
      title: t('home1.testimonials.title'),
      subtitle: t('home1.testimonials.subtitle'),
      testimonials: [
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
    },
    cta: {
      type: 'cta',
      title: t('home1.contact.title'),
      subtitle: t('home1.contact.subtitle'),
      backgroundImage: '/images/Home1CTA.jpg',
      buttons: [
        {
          text: t('home1.contact.bookNow'),
          href: '/contact',
          className: 'bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
        },
        {
          text: t('home1.contact.viewMenu'),
          href: '/services',
          className: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 font-bold text-lg rounded-lg transition-all duration-300'
        }
      ]
    }
  }

  return (
    <div className={isDark ? 'bg-gray-900 text-white transition-colors' : 'bg-white text-black transition-colors'}>
      <Navbar user={user} />
      <ThemeDebug />

      {/* Dynamic Sections Rendering */}
      <HeroSection data={sections.hero} isDark={isDark} />
      <WelcomeSection data={sections.welcome} isDark={isDark} />
      <ProfessionalStatsSection data={sections.professionalStats} isDark={isDark} />
      <FeaturesSection data={sections.features} isDark={isDark} />
      <PropertiesSection data={sections.properties} isDark={isDark} />
      <TestimonialsSection data={sections.testimonials} isDark={isDark} />
      <CTASection data={sections.cta} isDark={isDark} />

      <Footer />
    </div>
  )
}
