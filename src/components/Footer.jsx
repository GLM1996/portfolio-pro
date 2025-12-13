import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  MessageSquare,
  Mail,
  Code2,
  Heart,
  Coffee,
  Zap,
  ExternalLink,
  SquareChevronUp
} from "lucide-react";

const footerLinks = [
  {
    title: "Navegación",
    links: [
      { label: "Inicio", href: "#inicio" },
      { label: "Sobre mí", href: "#sobre-mi" },
      { label: "Habilidades", href: "#skills" },
      { label: "Servicios", href: "#servicios" },
      { label: "Proyectos", href: "#proyectos" }
    ]
  },
  {
    title: "Servicios",
    links: [
      { label: "Desarrollo Frontend", href: "#servicios" },
      { label: "Backend & APIs", href: "#servicios" },
      { label: "Automatizaciones", href: "#servicios" },
      { label: "Integraciones IA", href: "#servicios" },
      { label: "Consultoría", href: "#contacto" }
    ]
  },
  {
    title: "Recursos",
    links: [
      { label: "Casos de Estudio", href: "#proyectos" },
      { label: "Política de Privacidad", href: "#" },
      { label: "Términos de Servicio", href: "#" }
    ]
  }
];

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/",
    label: "GitHub",
    description: "Proyectos open source"
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/",
    label: "LinkedIn",
    description: "Red profesional"
  },
  {
    icon: MessageSquare,
    href: "https://wa.me/123123123",
    label: "WhatsApp",
    description: "Chat rápido"
  },
  {
    icon: Mail,
    href: "mailto:contacto@ejemplo.com",
    label: "Email",
    description: "contacto@ejemplo.com"
  }
];

const techStack = [
  { name: "React", color: "text-cyan-400" },
  { name: "Next.js", color: "text-gray-300" },
  { name: "Tailwind CSS", color: "text-teal-400" },
  { name: "Node.js", color: "text-green-400" },
  { name: "JavaScript", color: "text-blue-400" },
  { name: "Framer Motion", color: "text-purple-400" }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-[#0B0016] to-black border-t border-white/10 pt-16 pb-8 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        <div className="absolute -bottom-20 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo y descripción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg blur opacity-70" />
                <div className="relative bg-black/80 p-2 rounded-lg">
                  <Code2 className="w-6 h-6 text-cyan-300" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Gustavo<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Dev</span>
                </h3>
                <p className="text-sm text-gray-400 tracking-wider mt-1">FULL STACK DEVELOPER</p>
              </div>
            </motion.div>

            <p className="text-gray-400 mb-6 max-w-md">
              Especialista en desarrollo web moderno, automatizaciones e integraciones inteligentes.
              Transformo ideas en soluciones tecnológicas escalables.
            </p>

            {/* Tecnologías */}
            <div className="mb-6">
              <p className="text-gray-500 text-sm mb-3">Tecnologías principales:</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={`px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 ${tech.color}`}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Enlaces del footer */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="text-white font-semibold mb-4 text-lg">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (linkIndex * 0.05) }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-300 text-sm transition-colors group flex items-center gap-2"
                    >
                      <Zap className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Copyright y detalles */}
        <div className="text-center pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} GustavoDev. Todos los derechos reservados.
            </p>

            <div className="flex items-center gap-4 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Heart className="w-3 h-3 text-red-400" />
                <span>Hecho con pasión por el código</span>
              </div>
              <div className="hidden md:block">•</div>
              <div className="flex items-center gap-2">
                <Coffee className="w-3 h-3 text-amber-400" />
                <span>Y muchas tazas de café</span>
              </div>
            </div>
          </div>

          {/* Stack técnico footer */}
          <p className="text-gray-600 text-xs">
            • React •  Tailwind CSS • JavaScript • Framer Motion •
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center mt-2"
        >
          <motion.span
            animate={{
              scale: [1, 1.2, 1],
              boxShadow: [
                "0 0 0 0 rgba(248, 113, 113, 0.7)",
                "0 0 0 6px rgba(248, 113, 113, 0)",
                "0 0 0 0 rgba(248, 113, 113, 0)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1
            }}
            className="size-4 bg-red-400 rounded-full"
          />
          <b className="ms-1 text-gray-400">En desarrollo</b>
        </motion.div>

        {/* Volver arriba */}
        <motion.a
          href="#inicio"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="absolute right-6 top-6 hidden lg:block"
        >
          <div className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
            <SquareChevronUp className="w-5 h-5 text-gray-400" />
          </div>
        </motion.a>
      </div>
    </footer>
  );
}