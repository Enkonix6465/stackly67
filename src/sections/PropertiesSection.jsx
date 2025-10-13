import { useState } from 'react'
import ScrollAnimation from '../components/ScrollAnimation'
import { useTranslation } from 'react-i18next'

export default function PropertiesSection({ data, isDark }) {
  const { t } = useTranslation()
  const { title, subtitle, items, categories, categoryMap, contactText, detailsText } = data
  const [selectedCategory, setSelectedCategory] = useState(t('home1.signatureDishes.all'))

  const allCategories = [t('home1.signatureDishes.all'), ...categories]
  const filteredItems = selectedCategory === t('home1.signatureDishes.all') 
    ? items 
    : items.filter(item => item.category === selectedCategory)

  return (
    <section id="menu" className={`py-20 ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold mb-3 ${isDark ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'serif' }}>
            {title}
          </h2>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{subtitle}</p>
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
          {filteredItems.map((item, index) => (
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
                          <a href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 font-bold text-sm rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">{contactText}</a>
                          <a href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-4 py-2 font-bold text-sm rounded-lg transition-all duration-300">{detailsText}</a>
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
  )
}

