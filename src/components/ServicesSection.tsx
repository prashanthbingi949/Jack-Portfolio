import FadeIn from './FadeIn';

const services = [
  {
    number: '01',
    name: '3D Modeling',
    description:
      'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
  },
  {
    number: '02',
    name: 'Rendering',
    description:
      'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
  },
  {
    number: '03',
    name: 'Motion Design',
    description:
      'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
  },
  {
    number: '04',
    name: 'Branding',
    description:
      'Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.',
  },
  {
    number: '05',
    name: 'Web Design',
    description:
      'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2 className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28">
        Services
      </h2>

      <div className="max-w-5xl mx-auto">
        {services.map((service, index) => (
          <FadeIn
            key={service.number}
            delay={index * 0.1}
            as="div"
            className="relative flex flex-col md:flex-row items-start md:items-center
              py-8 sm:py-10 md:py-12"
          >
            <span
              className="font-black text-[#0C0C0C]
                text-[clamp(3rem,10vw,140px)] leading-none"
            >
              {service.number}
            </span>
            <div className="pt-4 md:pt-0 md:pl-6 lg:pl-10">
              <h3 className="font-medium uppercase text-[#0C0C0C] text-[clamp(1rem,2.2vw,2.1rem)] mb-2">
                {service.name}
              </h3>
              <p className="font-light text-[#0C0C0C] leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60">
                {service.description}
              </p>
            </div>
            {index < services.length - 1 && (
              <div className="absolute bottom-0 left-0 right-0 h-px bg-[#0C0C0C]/15" />
            )}
          </FadeIn>
        ))}
      </div>

      <style>{`
        section h2 {
          font-size: clamp(3rem, 12vw, 160px);
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
