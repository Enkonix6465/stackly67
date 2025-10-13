import ScrollAnimation from '../components/ScrollAnimation'

export default function WelcomeSection({ data, isDark }) {
  const { title, subtitle, description, buttonText, buttonLink, image } = data

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <ScrollAnimation animation="slide-in-left" stagger="scroll-stagger-1">
              <div className="space-y-4">
                <h2 className={`text-3xl md:text-4xl font-bold uppercase ${isDark ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'serif' }}>
                  {title}
                </h2>
                <h3 className="text-xl md:text-2xl text-red-600 font-semibold">
                  {subtitle}
                </h3>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="slide-in-left" stagger="scroll-stagger-2">
              <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-black'}`}>
                {description}
              </p>
            </ScrollAnimation>
            
            {buttonText && buttonLink && (
              <ScrollAnimation animation="slide-in-left" stagger="scroll-stagger-3">
                <a
                  href={buttonLink}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mt-8 inline-block"
                >
                  {buttonText}
                </a>
              </ScrollAnimation>
            )}
          </div>

          {/* Right Side - Image */}
          {image && (
            <ScrollAnimation animation="slide-in-right" stagger="scroll-stagger-1">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </ScrollAnimation>
          )}
        </div>
      </div>
    </section>
  )
}

