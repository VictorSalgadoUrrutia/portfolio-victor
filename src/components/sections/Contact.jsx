import { RevealOnScroll } from "../RevealOnScroll";
import { Mail, Phone } from "react-feather";


export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center text-white p-6"
    >
      <div className="text-center max-w-lg w-full">
        <RevealOnScroll>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Contáctame
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Si tienes alguna pregunta, propuesta o simplemente quieres saludar, no dudes en escribirme.
          </p>
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3 bg-gray-800 p-4 rounded-lg shadow-md">
              <Mail className="text-blue-400" size={24} />
              <a href="mailto:victor.vu583@gmail.com" className="text-lg font-medium hover:text-blue-400 transition">
                victor.vu583@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-gray-800 p-4 rounded-lg shadow-md">
              <Phone className="text-blue-400" size={24} />
              <a href="tel:+529984621153" className="text-lg font-medium hover:text-blue-400 transition">
                +52 998 462 1153
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
