import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Proyectos destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Ecommerce website</h3>
              <p className="text-gray-400 mb-4">
              Ecommerce pagina web con diseño moderno, totalmente responsivo. Se desarrollo para una tienda de ropa.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Tailwindcss"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://rusdlezztore.netlify.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Ver proyecto →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Endlez Ecommerce Website</h3>
              <p className="text-gray-400 mb-4">
                Tienda en linea con diseño moderno, totalmente responsivo. Se desarrollo para una tienda de playeras basadas en drops mensuales. Desarrollado para una marca nueva Cancún. 
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Javascript", "Microsoft SQL Server", "Tailwindcss"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="http://endlez.aasoftware.mx/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Ver proyecto →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Wordpress website</h3>
              <p className="text-gray-400 mb-4">
                Sitio web de Wordpress con diseño adaptado a las petisiones del cliente, totalmente responsivo. 
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["PHP", "Wordpress"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://cancunfoodtours.com/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Ver proyecto →
                </a>
              </div>
            </div>

            
            
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};