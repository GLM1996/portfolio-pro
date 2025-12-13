import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="min-h-screen flex items-center justify-center px-6 py-24 bg-gradient-to-b from-[#0B0016] to-[#1a0b2e]"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-5xl w-full"
      >
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Perfil <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">Profesional</span>
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 blur-xl rounded-3xl" />
          
          <div className="relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl">
            <p className="text-gray-200 text-xl leading-relaxed md:text-xl/relaxed">
              Desarrollador <span className="font-semibold text-cyan-300">Full Stack</span> con más de 2 años de experiencia en arquitecturas modernas. 
              Especializado en construir aplicaciones escalables con <span className="font-semibold text-purple-300">React</span> y 
              <span className="font-semibold text-purple-300"> Node.js</span>, e implementando sistemas de integración mediante 
              <span className="font-semibold text-cyan-300"> n8n</span> para automatizar flujos de trabajo y conectar ecosistemas SaaS.
            </p>
            
            <p className="text-gray-300 mt-6 text-lg leading-relaxed">
              Mi enfoque se centra en desarrollar soluciones que no solo cumplen con los requisitos técnicos, 
              sino que optimizan procesos operativos, reducen costos y mejoran la experiencia del usuario final 
              a través de integraciones inteligentes y código mantenible.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            { value: "+2", label: "Años de experiencia", sublabel: "Full Stack Development" },
            { value: "+20", label: "Proyectos completados", sublabel: "Clientes satisfechos" },
            { value: "Integraciones", label: "Especialización", sublabel: "APIs & Automatización" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
              
              <div className="relative bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
                <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 mb-2">
                  {item.value}
                </p>
                <p className="text-gray-100 font-medium text-lg mb-1">{item.label}</p>
                <p className="text-gray-400 text-sm">{item.sublabel}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </motion.div>
    </section>
  );
}