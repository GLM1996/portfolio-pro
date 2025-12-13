import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Workflow,
  Zap,
  Shield,
  Rocket,
  Cpu,
  BarChart3,
  Cloud,
  Lock,
  GitBranch,
  Smartphone
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Frontend Avanzado",
    description: "Desarrollo de interfaces modernas con React/Next.js, optimizadas para rendimiento, SEO.",
    features: [
      "Aplicaciones SPA y SSR",
      "Optimización Core Web Vitals",
      "Diseño responsive",
      "Animaciones fluidas"
    ],
    gradient: "from-cyan-500 to-blue-600",
    delay: 0.1
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description: "Arquitectura de servidores escalables con Node.js, bases de datos optimizadas y sistemas de autenticación seguros.",
    features: [
      "APIs REST/GraphQL",
      "Microservicios",
      "Autenticación JWT/OAuth",
      "Caching y Redis"
    ],
    gradient: "from-emerald-500 to-green-600",
    delay: 0.2
  },
  {
    icon: Workflow,
    title: "Automatizaciones SaaS",
    description: "Sistemas de automatización que conectan herramientas, sincronizan datos y eliminan tareas repetitivas.",
    features: [
      "Flujos de trabajo con n8n",
      "Webhooks y triggers",
      "Scraping de datos",
      "Reportes automáticos"
    ],
    gradient: "from-violet-500 to-purple-600",
    delay: 0.3
  },
  {
    icon: Cpu,
    title: "Integraciones IA",
    description: "Implementación de inteligencia artificial para potenciar procesos, análisis predictivo y automatización inteligente.",
    features: [
      "Chatbots con OpenAI",
      "Procesamiento de lenguaje",
      "Análisis predictivo",
      "Automatización con IA"
    ],
    gradient: "from-rose-500 to-pink-600",
    delay: 0.4
  },
  {
    icon: Cloud,
    title: "Infraestructura Cloud",
    description: "Despliegue y gestión de infraestructura en la nube con alta disponibilidad, seguridad y escalabilidad.",
    features: [
      "Deploy en AWS/Vercel",
      "Docker y Kubernetes",
      "CI/CD pipelines",
      "Monitoreo y logs"
    ],
    gradient: "from-amber-500 to-orange-600",
    delay: 0.5
  },
  {
    icon: BarChart3,
    title: "Análisis & BI",
    description: "Sistemas de business intelligence y dashboards para toma de decisiones basada en datos en tiempo real.",
    features: [
      "Dashboards personalizados",
      "ETL de datos",
      "Reportes automáticos",
      "Alertas y KPIs"
    ],
    gradient: "from-indigo-500 to-blue-600",
    delay: 0.6
  }
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative py-28 px-6 bg-gradient-to-b from-[#0B0016] to-[#15002A] overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header mejorado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-white/10 mb-4">
            <Rocket className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300 tracking-wider">SOLUCIONES</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Servicios <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Especializados</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Soluciones tecnológicas completas que transforman procesos y optimizan operaciones empresariales
          </p>
        </motion.div>

        {/* Grid de servicios mejorado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: service.delay,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                {/* Efecto de borde luminoso */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`} />

                <div className="relative h-full bg-gradient-to-br from-white/5 to-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 overflow-hidden">
                  {/* Fondo de icono decorativo */}
                  <div className="absolute -right-4 -top-4 opacity-10">
                    <IconComponent className="w-32 h-32" />
                  </div>

                  {/* Header del servicio */}
                  <div className="relative flex items-start gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${service.gradient} bg-opacity-20`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full" />
                    </div>
                  </div>

                  {/* Descripción */}
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Lista de características */}
                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Características:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer del servicio */}
                  <div className="flex items-center pt-6 border-t border-white/10">
                    <div className="flex w-full items-center justify-between">
                      <span className="text-xs text-gray-400">Implementación personalizada</span>
                      {/* Indicador de popularidad */}
                      <div className="flex items-center gap-1">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.3
                            }}
                            className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400"
                          />
                        ))}
                      </div>
                    </div>
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
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 px-8 py-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-cyan-400" />
              <span className="text-white font-medium">¿Necesitas una solución personalizada?</span>
            </div>
            <a
              href="#contacto"
              className="group px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg text-white font-medium hover:shadow-lg transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Solicitar consulta
                <GitBranch className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}