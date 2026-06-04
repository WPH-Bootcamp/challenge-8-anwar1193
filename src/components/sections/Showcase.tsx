// src/components/sections/Showcase.tsx
import { projectsData} from '../../data/mockData';

export const Showcase: React.FC = () => {

  return (
    <>
      {/* 1. Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            {/* Header Section */}
            <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
                From Vision to Launch! Projects We’re Proud Of
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
                Take a closer look at our recent work powering startups, enterprises, and everything in between.
            </p>
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {projectsData.map((project) => (
                <a 
                key={project.id} 
                href={project.link}
                className="group block space-y-4"
                >
                {/* Bingkai Gambar Pratinjau */}
                {/* aspect-[4/3] menjaga proporsi kotak persegi panjang khas browser mockup */}
                <div className="w-full aspect-4/3 rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm group-hover:shadow-md transition-all duration-300">
                    <img 
                    src={project.image} 
                    alt={`${project.title} Preview`} 
                    // object-cover memastikan gambar memenuhi container, object-top agar mockup terpotong rapi dari atas ke bawah
                    className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500 ease-in-out"
                    />
                </div>

                {/* Detail Teks Proyek */}
                <div className="px-1">
                    <span className="text-[#FF6433] text-sm font-medium block mb-1">
                    {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-black group-hover:text-[#FF6433] transition-colors">
                    {project.title}
                    </h3>
                </div>
                </a>
            ))}
            </div>

        </div>
        </section>
    </>
  );
};