import ScrollAnimation from '../components/ScrollAnimation'

export default function CTASection({ data, isDark }) {
  const { title, subtitle, backgroundImage, buttons } = data

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url('${backgroundImage}')`
          }}
        ></div>
      )}
      
      {/* Dynamic Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <ScrollAnimation animation="slide-in-left" stagger="scroll-stagger-1">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: 'serif' }}>
                  {title}
                </h2>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="slide-in-left" stagger="scroll-stagger-2">
              <p className="text-lg text-gray-300 leading-relaxed">
                {subtitle}
              </p>
            </ScrollAnimation>
            
            {buttons && buttons.length > 0 && (
              <ScrollAnimation animation="slide-in-left" stagger="scroll-stagger-4">
                <div className="flex gap-4 justify-center">
                  {buttons.map((button, index) => (
                    <a
                      key={index}
                      href={button.href}
                      className={button.className || "bg-red-500 hover:bg-red-600 text-white px-8 py-4 font-bold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"}
                    >
                      {button.text}
                    </a>
                  ))}
                </div>
              </ScrollAnimation>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

