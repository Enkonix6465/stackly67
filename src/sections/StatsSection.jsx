import ScrollAnimation from '../components/ScrollAnimation'

/**
 * StatsSection - Example custom section component
 * Displays statistics in a visually appealing grid
 */
export default function StatsSection({ data, isDark }) {
  const { title, subtitle, stats } = data

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}`}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        {title && (
          <div className="text-center mb-16">
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
              <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                {title}
              </h2>
            </ScrollAnimation>
            {subtitle && (
              <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
                <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {subtitle}
                </p>
              </ScrollAnimation>
            )}
          </div>
        )}

        {/* Stats Grid */}
        {stats && stats.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollAnimation key={index} animation="fade-in" stagger={`scroll-stagger-${index + 1}`}>
                <div className={`text-center p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  isDark ? 'bg-gray-800 border-gray-700 hover:border-red-500' : 'bg-white border-gray-200 hover:border-red-500'
                }`}>
                  {/* Icon */}
                  {stat.icon && (
                    <div className="mb-4 text-5xl">
                      {stat.icon}
                    </div>
                  )}
                  
                  {/* Value */}
                  <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <div className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                    {stat.label}
                  </div>
                  
                  {/* Description */}
                  {stat.description && (
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {stat.description}
                    </div>
                  )}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

