import ScrollAnimation from '../components/ScrollAnimation'

export default function HeroSection({ data, isDark }) {
  const { video, title, subtitle, buttons } = data

  return (
    <section className="relative overflow-hidden h-screen flex items-center justify-center text-center bg-black">
      {/* Background Video */}
      {video && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Dynamic Overlay */}
      <div className={`absolute inset-0 ${isDark ? 'bg-black/70' : 'bg-black/60'}`}></div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-4xl">
        <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6 whitespace-nowrap" style={{ fontFamily: 'serif' }}>
            {title}
          </h1>
        </ScrollAnimation>
        
        <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
          <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto mb-8 whitespace-nowrap">
            {subtitle}
          </p>
        </ScrollAnimation>
        
        {buttons && buttons.length > 0 && (
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
            <div className="mt-8 flex gap-6 justify-center items-center flex-wrap">
              {buttons.map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  className={button.className || "bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"}
                >
                  {button.text}
                </a>
              ))}
            </div>
          </ScrollAnimation>
        )}
      </div>
    </section>
  )
}

