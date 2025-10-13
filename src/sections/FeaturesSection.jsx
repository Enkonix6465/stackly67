import { useState } from 'react'
import ScrollAnimation from '../components/ScrollAnimation'

export default function FeaturesSection({ data, isDark }) {
  const { title, subtitle, items } = data
  const [activeCard, setActiveCard] = useState(0)

  return (
    <section className="relative py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 items-start">
          <div className="md:col-span-1">
            <ScrollAnimation animation="slide-in-left" stagger="scroll-stagger-1">
              <div className="space-y-5">
                <div className="flex gap-2">
                  {items && items.map((_, index) => (
                    <span 
                      key={index}
                      className={`w-8 h-1 transition-all duration-500 ${activeCard === index ? 'bg-red-500 w-12' : 'bg-white/40'}`}
                    ></span>
                  ))}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ fontFamily: 'serif' }}>{title}</h2>
                <p className="text-white/70 leading-relaxed">{subtitle}</p>
              </div>
            </ScrollAnimation>
          </div>
          {items && items.map((item, index) => (
            <ScrollAnimation key={index} animation="fade-in" stagger={`scroll-stagger-${index + 2}`}>
              <div 
                onClick={() => setActiveCard(index)}
                className={`group rounded-2xl border p-6 md:p-8 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 cursor-pointer ${
                  activeCard === index 
                    ? 'border-red-500 bg-white/10 shadow-lg shadow-red-500/20' 
                    : 'border-white/10 bg-white/5'
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full border flex items-center justify-center font-bold transition-all duration-300 ${
                    activeCard === index 
                      ? 'bg-red-600 border-red-500 text-white scale-110' 
                      : 'bg-red-600/20 border-red-500/40 text-red-400'
                  }`}>
                    {item.number}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">{item.description}</p>
                <div className={`h-px w-16 transition-all duration-300 ${
                  activeCard === index ? 'bg-red-500 w-24' : 'bg-white/30 group-hover:bg-red-500'
                }`}></div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

