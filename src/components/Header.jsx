import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Sparkles, Cpu, Zap } from "lucide-react";

export default function Header() {
  const words = [
    { text: "React", icon: "⚛️" },
    { text: "Node.js", icon: "🟢" },
    { text: "APIs", icon: "🔗" },
    { text: "Automatizaciones SaaS", icon: "🤖" },
    { text: "Integraciones con IA", icon: "🧠" },
    { text: "n8n", icon: "⚡" }
  ];

  const [index, setIndex] = useState(0);
  const [scrollIndicator, setScrollIndicator] = useState(true);
  const headerRef = useRef(null);

  // Rotación automática de palabras cada 2.2s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  // Ocultar indicador de scroll al bajar
  useEffect(() => {
    const handleScroll = () => {
      setScrollIndicator(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
      style={{ paddingTop: '80px' }} // Espacio para el navbar
    >
      {/* Fondo con gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0d001f] to-[#2a0066]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,0,255,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,200,255,0.1)_0%,transparent_50%)]" />
        
        {/* Partículas decorativas */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1],
              x: Math.sin(i * 1.5) * 40,
              y: Math.cos(i * 1.5) * 25
            }}
            transition={{ 
              duration: 3 + i * 0.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute w-1 h-1 bg-purple-400/70 rounded-full"
            style={{
              top: `${30 + i * 15}%`,
              left: `${15 + i * 20}%`,
            }}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-5xl mx-auto mt-8"> {/* mt-8 para separar del navbar */}
        {/* Badge profesional */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8"
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-gray-300">Desarrollador y Automatizador</span>
        </motion.div>

        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
            Hola, soy{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-500 to-cyan-400">
                Gustavo
              </span>
              <motion.div
                animate={{ 
                  background: [
                    "linear-gradient(90deg, rgba(168,85,247,0.3) 0%, rgba(59,130,246,0.3) 100%)",
                    "linear-gradient(90deg, rgba(168,85,247,0.5) 0%, rgba(59,130,246,0.5) 100%)",
                    "linear-gradient(90deg, rgba(168,85,247,0.3) 0%, rgba(59,130,246,0.3) 100%)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-2 left-0 right-0 h-1 rounded-full"
              />
            </span>
          </h1>
        </motion.div>

        {/* Subtítulo dinámico */}
        <div className="h-16 sm:h-20 md:h-24 flex items-center justify-center mb-6 sm:mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3"
            >
              <div className="text-xl sm:text-2xl">{words[index].icon}</div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200">
                Desarrollo soluciones con{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
                  {words[index].text}
                </span>
              </h2>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Descripción */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
            Arquitecto de <span className="text-cyan-300 font-medium">soluciones digitales</span> que transforman 
            procesos de negocio. Especializado en construir ecosistemas tecnológicos escalables, 
            automatizando operaciones e integrando herramientas para maximizar la{" "}
            <span className="text-purple-300 font-medium">eficiencia y el crecimiento</span>.
          </p>
        </motion.div>

        {/* Stats en línea */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12"
        >
          {[
            { value: "100%", label: "Enfoque ROI" },
            { value: "Full Stack", label: "Desarrollo" },
            { value: "Automatización", label: "Procesos" }
          ].map((stat, i) => (
            <div key={i} className="text-center px-2 sm:px-4">
              <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >
          <a
            href="#proyectos"
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl text-white font-medium text-base sm:text-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center justify-center gap-2 sm:gap-3">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Explorar Proyectos</span>
            </div>
          </a>

          <a
            href="#contacto"
            className="group px-6 sm:px-8 py-3 sm:py-4 border border-white/20 hover:border-white/40 rounded-xl text-gray-200 font-medium text-base sm:text-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/5"
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <Cpu className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-cyan-400 transition-colors" />
              <span>Colaborar</span>
            </div>
          </a>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <AnimatePresence>
        {scrollIndicator && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-12 sm:bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-gray-400"
            >
              <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Línea de gradiente decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      
      {/* Espacio en blanco para scroll */}
      <div className="h-8 sm:h-12"></div>
    </header>
  );
}