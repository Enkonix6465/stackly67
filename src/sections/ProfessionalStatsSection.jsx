import ScrollAnimation from '../components/ScrollAnimation'

/**
 * ProfessionalStatsSection - Professional building/real estate stats section
 * Displays a two-column layout with content on the left and stats grid on the right
 */
export default function ProfessionalStatsSection({ data, isDark }) {
  const { badge, title, description, buttons, stats, backgroundImage } = data

  return (
    <section 
      className={`relative py-20 ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'} overflow-hidden`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for better text readability */}
      {backgroundImage && (
        <div className={`absolute inset-0 ${isDark ? 'bg-black/70' : 'bg-black/50'}`} />
      )}

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div>
            {badge && (
              <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
                <div className="inline-block mb-4 px-4 py-2 bg-red-600/20 border border-red-600 rounded-full">
                  <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
                    {badge}
                  </span>
                </div>
              </ScrollAnimation>
            )}

            {title && (
              <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${
                  backgroundImage ? 'text-white' : isDark ? 'text-white' : 'text-black'
                }`} style={{ fontFamily: 'serif' }}>
                  {title}
                </h2>
              </ScrollAnimation>
            )}

            {description && (
              <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
                <p className={`text-lg mb-8 leading-relaxed ${
                  backgroundImage ? 'text-gray-200' : isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {description}
                </p>
              </ScrollAnimation>
            )}

            {/* Buttons */}
            {buttons && buttons.length > 0 && (
              <ScrollAnimation animation="fade-in" stagger="scroll-stagger-4">
                <div className="flex flex-wrap gap-4">
                  {buttons.map((button, index) => (
                    <a
                      key={index}
                      href={button.href}
                      className={button.className || `px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
                        index === 0 
                          ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                          : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-black'
                      }`}
                    >
                      {button.text}
                    </a>
                  ))}
                </div>
              </ScrollAnimation>
            )}
          </div>

          {/* Right Column - Stats Grid */}
          <div>
            {stats && stats.length > 0 && (
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <ScrollAnimation 
                    key={index} 
                    animation="fade-in" 
                    stagger={`scroll-stagger-${index + 5}`}
                  >
                    <div className={`p-8 rounded-xl backdrop-blur-md transition-all duration-300 hover:scale-105 ${
                      backgroundImage 
                        ? 'bg-white/10 border border-white/20 hover:bg-white/20' 
                        : isDark 
                          ? 'bg-gray-800 border border-gray-700 hover:border-red-500' 
                          : 'bg-white border border-gray-200 hover:border-red-500 shadow-lg'
                    }`}>
                      {/* Value with gradient */}
                      <div className={`text-5xl md:text-6xl font-bold mb-3 ${
                        backgroundImage ? 'text-red-500' : 'text-red-600'
                      }`}>
                        {stat.value}
                      </div>
                      
                      {/* Label */}
                      <div className={`text-lg md:text-xl font-semibold ${
                        backgroundImage ? 'text-white' : isDark ? 'text-white' : 'text-black'
                      }`}>
                        {stat.label}
                      </div>

                      {/* Description */}
                      {stat.description && (
                        <div className={`text-sm mt-2 ${
                          backgroundImage ? 'text-gray-300' : isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {stat.description}
                        </div>
                      )}
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

