import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';

const HeroSection = () => {
  const navLinks = ['About', 'Services', 'Projects', 'Contact'];

  return (
    <section className="min-h-[100svh] flex flex-col overflow-x-clip relative">
      {/* Navbar */}
      <FadeIn
        delay={0}
        y={-20}
        as="nav"
        className="relative z-30 px-6 md:px-10 pt-6 md:pt-8"
      >
        <div className="flex justify-between">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider
                text-sm md:text-lg lg:text-[1.4rem]
                hover:opacity-70 transition-opacity duration-200"
            >
              {link}
            </a>
          ))}
        </div>
      </FadeIn>

      {/* Hero Heading */}
      <FadeIn
        delay={0.15}
        y={40}
        as="div"
        className="relative z-20 overflow-hidden mt-6 sm:mt-4 md:-mt-5"
      >
        <h1
          className="hero-heading font-black uppercase tracking-tight leading-none
            w-full text-center
            text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]"
        >
          Hi, i&apos;m jack
        </h1>
      </FadeIn>

      {/* Bottom Bar */}
      <div className="hero-bottom-bar relative z-20 flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 mt-auto">
        <FadeIn
          delay={0.35}
          y={20}
          as="p"
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug
            max-w-[160px] sm:max-w-[220px] md:max-w-[260px]
            text-[clamp(0.75rem,1.4vw,1.5rem)]"
        >
          a 3d creator driven by crafting striking and unforgettable projects
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      {/* Hero Portrait — wrapper handles positioning so framer-motion transform doesn't override it */}
      <div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 z-10
          w-[220px] sm:w-[300px] md:w-[400px] lg:w-[480px]
          top-[28%] bottom-auto
          sm:top-auto sm:bottom-[8%] md:bottom-0"
      >
        <FadeIn delay={0.6} y={30} as="div">
          <Magnet padding={150} strength={3}>
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt="Jack portrait"
              className="w-full h-auto max-h-[70svh] object-contain"
            />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
