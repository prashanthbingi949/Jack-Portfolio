import { useRef } from 'react';
import { motion } from 'framer-motion';
import LiveProjectButton from './LiveProjectButton';

const projects = [
  {
    number: '01',
    name: 'Nextlevel Studio',
    category: 'Client',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    number: '02',
    name: 'Aura Brand Identity',
    category: 'Personal',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    number: '03',
    name: 'Solaris Digital',
    category: 'Client',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
  },
];

const ProjectCard = ({
  project,
  index,
  totalCards,
}: {
  project: (typeof projects)[0];
  index: number;
  totalCards: number;
}) => {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;

  return (
    <motion.div
      className="sticky"
      style={{
        top: `${24 + index * 28}px`,
        zIndex: index + 1,
      }}
    >
      <motion.div
        className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px]
          border-2 border-[#D7E2EA] bg-[#0C0C0C]
          p-4 sm:p-6 md:p-8"
        initial={{ scale: 1 }}
        whileInView={{ scale: targetScale }}
        viewport={{ amount: 'all' }}
        style={{ transformOrigin: 'top center' }}
      >
        {/* Top Row */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="font-black text-[#D7E2EA] text-[clamp(3rem,10vw,140px)] leading-none">
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA] font-medium uppercase text-sm tracking-wider opacity-60">
                {project.category}
              </span>
              <h3 className="text-[#D7E2EA] font-medium text-xl sm:text-2xl">
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        {/* Image Grid */}
        <div className="flex gap-4">
          {/* Left Column - 40% */}
          <div className="w-[40%] flex flex-col gap-4">
            <img
              src={project.col1Image1}
              alt={`${project.name} image 1`}
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover
                h-[clamp(130px,16vw,230px)]"
            />
            <img
              src={project.col1Image2}
              alt={`${project.name} image 2`}
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover
                h-[clamp(160px,22vw,340px)]"
            />
          </div>

          {/* Right Column - 60% */}
          <div className="w-[60%]">
            <img
              src={project.col2Image}
              alt={`${project.name} main image`}
              className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover
                min-h-[300px]"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-[#0C0C0C]
        rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        -mt-10 sm:-mt-12 md:-mt-14 z-10 relative
        px-5 sm:px-8 md:px-10 pt-20 pb-32"
    >
      <h2 className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28">
        Project
      </h2>

      <div className="max-w-6xl mx-auto space-y-8">
        {projects.map((project, index) => (
          <div key={project.number} className="relative h-[85vh]">
            <ProjectCard
              project={project}
              index={index}
              totalCards={projects.length}
            />
          </div>
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

export default ProjectsSection;
