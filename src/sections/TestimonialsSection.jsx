import ScrollAnimation from '../components/ScrollAnimation'

export default function TestimonialsSection({ data, isDark }) {
  const { title, subtitle, testimonials } = data

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'serif' }}>
              {title}
            </h2>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
            <p className={`text-lg max-w-2xl mx-auto mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {subtitle}
            </p>
          </ScrollAnimation>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation key={testimonial.id} animation="fade-in" stagger={`scroll-stagger-${index + 1}`}>
              <div className={`rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border hover:border-red-200 ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-100'}`}>
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-black'}`}>{testimonial.name}</h4>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                
                <p className={`leading-relaxed italic ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  "{testimonial.content}"
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

