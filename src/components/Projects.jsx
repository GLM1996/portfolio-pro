import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Zap,
  Palette,
  Brain,
  Database,
  Users,
  Rocket,
  Cpu,
  Code2, CircleDot, Layers, GitBranch, Briefcase, BarChart3, FileSpreadsheet, Brackets, Sparkles
} from "lucide-react";

const projects = [
  {
    title: "Api Rest para CRM Follow Up Boss",
    description: "Sistema de integración y middleware para Follow Up Boss",
    longDescription: "Servidor backend en Node.js/Express.js que actúa como puente entre la API de Follow Up Boss y aplicaciones cliente. Consume datos de la API de Follow Up Boss, los almacena en una base de datos MongoDB para persistencia y optimización, y expone endpoints REST para que aplicaciones embebidas puedan acceder a la información y enviar datos. La solución centraliza y sincroniza la gestión de propiedades y clientes, reduciendo la carga directa sobre la API original y mejorando el rendimiento de las aplicaciones integradas.",
    tech: [
      { name: "Node.js", icon: CircleDot, color: "bg-green-500/20 text-green-300" },
      { name: "Express", icon: Code2, color: "bg-gray-500/20 text-gray-300" },
      { name: "Mongo DB", icon: Database, color: "bg-emerald-500/10 text-emerald-300" },
      { name: "Mongoose", icon: Layers, color: "bg-amber-500/10 text-amber-300" },
    ],
    // demo: "",
    repo: "#",
    status: "Activo",
    metrics: "+85% eficiencia",
    gradient: "from-cyan-500/20 to-blue-500/20",
    icon: Zap
  },
  {
    title: "Dashboard & Citas Inteligentes para FUB",
    description: " Aplicación embebida en Follow Up Boss que amplía el perfil del cliente con datos enriquecidos, automatiza la creación de citas con notas y tareas automáticas, y gestiona el ciclo completo de seguimiento.",
    longDescription: "Esta herramienta embebida convierte Follow Up Boss en un centro de operaciones más inteligente. Proporciona un resumen unificado del cliente, programa citas que generan automáticamente notas y tareas en FUB, y captura información detallada de cada visita (datos que FUB no maneja por defecto). Toda esta información se guarda de forma segura en nuestra base de datos a través del servidor de integración, creando un historial enriquecido que mejora el seguimiento, reduce el trabajo manual y aumenta la productividad del equipo.",
    tech: [
      { name: "React", icon: Cpu, color: "bg-cyan-500/20 text-cyan-300" },
      { name: "JavaScript", icon: Brackets, color: "bg-yellow-500/20 text-yellow-300" },
      { name: "Bootstrap", icon: Layers, color: "bg-indigo-500/20 text-indigo-300" },
    ],
    // demo: "#",
    repo: "#",
    status: "Activo",
    metrics: "99.9% uptime",
    gradient: "from-purple-500/20 to-pink-500/20",
    icon: Users
  },
  {
    title: "Motor de Automatización n8n para CRM",
    description: "Servidor n8n que orquesta la integración entre Follow Up Boss, MongoDB, aplicaciones embebidas, GoHighLevel, Google Sheets y otros sistemas para automatizar flujos de negocio.",
    longDescription: "Servidor de automatización construido con n8n que actúa como núcleo de integración empresarial. Conecta y sincroniza datos entre múltiples plataformas: Follow Up Boss (CRM principal), MongoDB (base de datos de aplicaciones embebidas), GoHighLevel (marketing automation), Google Sheets (reportes) y APIs internas. Automatiza flujos de trabajo complejos como sincronización de contactos, creación de leads, actualización de propiedades, generación de reportes y comunicación entre sistemas, reduciendo intervención manual y asegurando consistencia de datos en toda la infraestructura.",
    tech: [
      { name: "n8n", icon: GitBranch, color: "bg-orange-500/20 text-orange-400" },
      { name: "Follow Up Boss", icon: Briefcase, color: "bg-blue-500/20 text-blue-300" },
      { name: "GoHighLevel", icon: BarChart3, color: "bg-purple-500/20 text-purple-300" },
      { name: "Google Sheets", icon: FileSpreadsheet, color: "bg-green-500/20 text-green-300" }
    ],
    // demo: "#",
    repo: "#",
    status: "Activo",
    metrics: "95% precisión",
    gradient: "from-emerald-500/20 to-teal-500/20",
    icon: Brain
  },
  {
    title: "Landing de Agencia",
    description: "Convierto procesos manuales en soluciones automatizadas. Desarrollo aplicaciones personalizadas e integro sistemas para optimizar tu operación.",
    longDescription: "Especialista en desarrollo de software y automatización de procesos empresariales. Creo aplicaciones a medida e implemento sistemas de integración que conectan tus herramientas existentes, eliminando trabajo repetitivo y optimizando flujos operativos. Mi enfoque: entender tu negocio y desarrollar soluciones técnicas que generen impacto real en productividad y eficiencia.",
    tech: [
      { name: "React", icon: Cpu, color: "bg-cyan-500/20 text-cyan-300" },
      { name: "Tailwind CSS", icon: Sparkles, color: "bg-blue-500/20 text-blue-300" },
      { name: "JavaScript", icon: Brackets, color: "bg-yellow-500/20 text-yellow-300" }
    ],
    demo: "https://developer-gl.vercel.app",
    repo: "#",
    status: "Demo",
    //metrics: "95% precisión",
    gradient: "from-emerald-500/20 to-teal-500/20",
    icon: Palette
  },
  {
    title: "Expediciones Fotográficas: La Cuba Salvaje",
    description: "Recorre los bosques escondidos y las montañas vírgenes de Cuba. Fotografía aves que no encontrarás en ningún otro lugar del planeta.",
    longDescription: "Aventúrate más allá de las playas turísticas y descubre la Cuba auténtica. Nuestras expediciones te llevan a los bosques nublados de la Sierra del Rosario, los mogotes del Valle de Viñales y los humedales de la Ciénaga de Zapata. Con guías naturalistas especializados, aprenderás sobre las 28 especies de aves endémicas de Cuba mientras capturas imágenes increíbles de paisajes y biodiversidad exclusiva.",
    tech: [
      { name: "Next.js", icon: Cpu, color: "bg-gray-800/30 text-gray-300" },
      { name: "TypeScript", icon: Sparkles, color: "bg-blue-600/20 text-blue-400" },
      { name: "Bootstrap", icon: Layers, color: "bg-indigo-500/20 text-indigo-300" },
    ],
    demo: "https://cubaaves.vercel.app/",
    repo: "#",
    status: "Demo",
    //metrics: "95% precisión",
    gradient: "from-emerald-500/20 to-teal-500/20",
    icon: Palette
  },
  {
    title: "Tienda Online - Dalygus",
    description: "E-commerce para venta de equipos electrónicos",
    longDescription: "Sistema de tienda online con integración a WhatsApp para gestión de pedidos y atención al cliente, diseñado para expandir presencia digital y optimizar ventas.",
    tech: [
      {
        name: "React.js",
        icon: Cpu,
        color: "bg-gray-800/30 text-gray-300"
      },
      {
        name: "JavaScript",
        icon: Sparkles,
        color: "bg-yellow-500/20 text-yellow-400"
      },
      {
        name: "Tailwind CSS",
        icon: Layers,
        color: "bg-cyan-500/20 text-cyan-300"
      },
      {
        name: "Supabase",
        icon: Database,
        color: "bg-green-500/20 text-green-300"
      }
    ],
    demo: "https://tiendadalygus.vercel.app/",
    repo: "#",
    status: "Demo",
    gradient: "from-emerald-500/20 to-teal-500/20",
    icon: Palette
  }
];

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="relative py-28 px-6 bg-gradient-to-b from-[#15002A] to-[#0B0016] overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header mejorado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-white/10 mb-4">
            <Rocket className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300 tracking-wider">PORTAFOLIO</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Proyectos <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Destacados</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Soluciones reales implementadas con tecnologías modernas y arquitecturas escalables
          </p>
        </motion.div>

        {/* Grid de proyectos mejorado */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  y: -12,
                  transition: { duration: 0.3 }
                }}
                className="group relative h-full"
              >
                {/* Efecto de borde luminoso */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-3xl blur opacity-0 group-hover:opacity-50 transition duration-500`} />

                <div className="relative h-full bg-gradient-to-br from-white/5 to-black/30 backdrop-blur-sm border border-white/10 rounded-3xl p-6 overflow-hidden">
                  {/* Header del proyecto */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient.split(' ')[0]} ${project.gradient.split(' ')[1]} bg-opacity-20`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`text-xs px-2 py-1 rounded-full ${project.status === 'Producción' ? 'bg-green-500/20 text-green-300' : project.status === 'Activo' ? 'bg-blue-500/20 text-blue-300' : 'bg-yellow-500/20 text-yellow-300'}`}>
                            {project.status}
                          </span>
                          <span className="text-xs text-gray-400">• {project.metrics}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Descripción */}
                  <div className="mb-6">
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                      {project.description}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>

                  {/* Espacio flexible que empuja las tecnologías hacia abajo */}
                  <div className="grow"></div>

                  {/* Tecnologías */}
                  <div className="mb-2">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Tecnologías implementadas</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${tech.color} border border-white/5`}
                        >
                          <tech.icon className="w-3 h-3" />
                          <span className="text-xs font-medium">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer con acciones */}
                  {project.demo && (
                    <div className="pt-6 border-t border-white/10">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <motion.a
                            target="_blank"
                            href={project.demo}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg text-white text-sm font-medium hover:shadow-lg transition-all"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            Ver Demo
                          </motion.a>

                        </div>

                        {/* Indicador de impacto  */}
                        {/* <div className="hidden sm:flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className="w-1 h-4 rounded-full bg-gradient-to-b from-purple-400 to-cyan-400"
                              style={{
                                height: `${(i + 1) * 2}px`,
                                opacity: 0.8 - (i * 0.15)
                              }}
                            />
                          ))}
                        </div>
                      </div>  */}
                      </div>
                    </div>
                  )}

                  {/* Decoración de esquina */}
                  <div className="absolute top-4 right-4 opacity-10">
                    <IconComponent className="w-16 h-16" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action adicional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-6 px-8 py-8 rounded-2xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-white/10 backdrop-blur-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white">¿Interesado en un proyecto similar?</h3>
            <p className="text-gray-400">
              Desarrollamos soluciones personalizadas basadas en tus necesidades específicas
            </p>
            <a
              href="#contacto"
              className="group px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl text-white font-medium hover:shadow-xl transition-all duration-300"
            >
              <span className="flex items-center gap-3">
                <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                Solicitar cotización
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}