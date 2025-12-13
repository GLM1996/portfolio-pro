import { motion } from "framer-motion";
import { 
  Cpu, 
  Database, 
  Zap, 
  Brain, 
  Code2, 
  Server, 
  Workflow, 
  Bot,
  ChevronRight
} from "lucide-react";

const skills = [
  {
    title: "Frontend",
    icon: Code2,
    tools: [
      { name: "React", level: 95, color: "from-cyan-400 to-blue-500" },
      // { name: "Next.js", level: 90, color: "from-white to-gray-300" },
      { name: "Tailwind CSS", level: 92, color: "from-teal-400 to-cyan-500" },
      { name: "JavaScript", level: 88, color: "from-blue-500 to-indigo-500" },
      { name: "Framer Motion", level: 85, color: "from-purple-400 to-pink-500" }
    ],
  },
  {
    title: "Backend",
    icon: Server,
    tools: [
      { name: "Node.js", level: 93, color: "from-green-400 to-emerald-500" },
      { name: "Express", level: 90, color: "from-gray-400 to-gray-600" },
      { name: "MongoDB", level: 87, color: "from-green-500 to-emerald-600" },
      // { name: "PostgreSQL", level: 85, color: "from-blue-400 to-indigo-500" },
      { name: "REST API", level: 92, color: "from-amber-400 to-orange-500" }
    ],
  },
  {
    title: "Automatizaciones",
    icon: Workflow,
    tools: [
      { name: "n8n", level: 88, color: "from-violet-400 to-purple-500" },
      // { name: "Zapier", level: 82, color: "from-rose-400 to-pink-500" },
      { name: "Make", level: 80, color: "from-orange-400 to-amber-500" },
      // { name: "Supabase", level: 85, color: "from-emerald-400 to-green-500" },
      // { name: "Stripe API", level: 83, color: "from-indigo-400 to-purple-500" }
    ],
  },
  // {
  //   title: "Integraciones IA",
  //   icon: Brain,
  //   tools: [
  //     { name: "OpenAI API", level: 86, color: "from-emerald-400 to-green-500" },
  //     { name: "LangChain", level: 78, color: "from-red-400 to-rose-500" },
  //     { name: "WhatsApp API", level: 85, color: "from-green-500 to-emerald-600" },
  //     { name: "Gmail API", level: 82, color: "from-red-500 to-rose-600" },
  //     { name: "Chatbots", level: 80, color: "from-cyan-400 to-blue-500" }
  //   ],
  // },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 px-6 bg-gradient-to-b from-[#0B0016] via-[#120021] to-[#0B0016] overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* TÍTULO MEJORADO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-white/10 mb-4">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300 tracking-wider">TECNOLOGÍAS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Tecnológico</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Herramientas y tecnologías que domino para construir soluciones completas y escalables
          </p>
        </motion.div>

        {/* GRID DE SKILLS MEJORADO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                {/* Efecto hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
                
                <div className="relative bg-gradient-to-br from-white/5 to-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full">
                  {/* Encabezado de categoría */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20">
                      <IconComponent className="w-6 h-6 text-cyan-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <ChevronRight className="w-5 h-5 text-gray-500 ml-auto group-hover:text-cyan-400 transition-colors" />
                  </div>

                  {/* Lista de herramientas con barras de progreso */}
                  <div className="space-y-4">
                    {category.tools.map((tool, toolIndex) => (
                      <motion.div
                        key={tool.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + toolIndex * 0.05 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 font-medium">{tool.name}</span>
                          <span className="text-sm text-gray-400">{tool.level}%</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tool.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 + toolIndex * 0.1 }}
                            className={`h-full rounded-full bg-gradient-to-r ${tool.color}`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Footer de categoría */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Experiencia comprobada</span>
                      <span className="text-cyan-300 font-medium">+3 años</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* NOTA ADICIONAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-white/10">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-gray-300">
              Siempre aprendiendo nuevas tecnologías y optimizando flujos de trabajo
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}