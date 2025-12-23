import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  MessageSquare,
  Send,
  MapPin,
  Phone,
  Clock,
  CheckCircle,
  Zap,
} from "lucide-react";
import { useState } from "react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/",
    label: "GitHub",
    description: "Repositorios y proyectos",
    color: "from-gray-700 to-gray-900",
    hoverColor: "hover:from-gray-600 hover:to-gray-800"
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/",
    label: "LinkedIn",
    description: "Perfil profesional",
    color: "from-blue-700 to-blue-900",
    hoverColor: "hover:from-blue-600 hover:to-blue-800"
  },
  {
    icon: MessageSquare,
    href: "https://wa.me/5363835837",
    label: "WhatsApp",
    description: "Chat directo",
    color: "from-green-700 to-emerald-900",
    hoverColor: "hover:from-green-600 hover:to-emerald-800"
  },
  {
    icon: Mail,
    href: "mailto:contacto@ejemplo.com",
    label: "Email",
    description: "contacto@ejemplo.com",
    color: "from-red-700 to-rose-900",
    hoverColor: "hover:from-red-600 hover:to-rose-800"
  }
];

const contactInfo = [
  {
    icon: Clock,
    title: "Disponibilidad",
    value: "Lunes a Viernes",
    description: "9:00 AM - 6:00 PM"
  },
  {
    icon: MapPin,
    title: "Ubicación",
    value: "Remoto",
    description: "Trabajo desde cualquier lugar"
  },
  {
    icon: CheckCircle,
    title: "Respuesta",
    value: "≤ 24 horas",
    description: "Tiempo máximo de respuesta"
  },
  {
    icon: Phone,
    title: "Teléfono",
    value: "+53 63835837",
    description: "Siempre atento a nuestro clientes"
  },
  {
    icon: Mail,
    title: "Email",
    value: "estrellaglm96@gmail.com",
    description: "Siempre atento a nuestro clientes"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsSubmitted(true)

    try {
      // REEMPLAZA ESTA URL CON TU ENDPOINT DE FORMSPREE
      const response = await fetch('https://formspree.io/f/myzrvpyz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          _subject: `Nuevo mensaje de contacto de ${formData.name}`,
          _replyto: formData.email,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', message: '' })

        // Resetear mensaje de éxito después de 5 segundos
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        throw new Error('Error en la respuesta')
      }
    } catch (error) {
      console.error('Error:', error)
      setIsSubmitted('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      id="contacto"
      className="relative py-28 px-6 bg-gradient-to-b from-[#0B0016] to-[#1a0030] overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header mejorado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-white/10 mb-4">
            <MessageSquare className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300 tracking-wider">CONTACTO</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trabajemos <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Juntos</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte a llevarlo al siguiente nivel
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario mejorado */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur" />

            <div className="h-full bg-gradient-to-br from-white/5 to-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-6">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">¡Mensaje Enviado!</h3>
                  <p className="text-gray-300">
                    Te contactaré en menos de 24 horas. Mientras tanto, puedes revisar mis proyectos.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-white mb-6">Envíame un mensaje</h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Nombre
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                            placeholder="Tu nombre"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                            placeholder="tucorreo@ejemplo.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Mensaje
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                        placeholder="Describe tu proyecto, objetivos o cualquier consulta que tengas..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 rounded-xl font-medium text-lg transition-all ${isSubmitting
                        ? 'bg-gray-700 cursor-not-allowed'
                        : 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:shadow-xl hover:shadow-purple-500/25'
                        }`}
                    >
                      <span className="flex items-center justify-center gap-3 text-white">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Enviando...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Enviar Mensaje
                          </>
                        )}
                      </span>
                    </motion.button>
                  </form>
                </>
              )}
            </div>
          </motion.div>

          {/* Información de contacto y redes */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >

            {/* Información de contacto */}
            <div className="bg-gradient-to-br from-white/5 to-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Información de contacto</h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20">
                      <item.icon className="w-5 h-5 text-cyan-300" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{item.title}</h4>
                      <p className="text-gray-300 text-lg font-semibold mt-1">{item.value}</p>
                      <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Redes sociales mejoradas
            <div className="bg-gradient-to-br from-white/5 to-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Conéctate conmigo</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`group relative p-4 rounded-xl bg-gradient-to-r ${social.color} ${social.hoverColor} border border-white/10 transition-all duration-300`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                        <social.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium">{social.label}</h4>
                        <p className="text-gray-300 text-sm">{social.description}</p>
                      </div>
                      <Zap className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div> */}
          </motion.div>
        </div>
        {/* Nota adicional */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-2 p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-white/10"
        >
          <div className="flex items-start gap-3">
            <Zap className="w-5 h-5 text-yellow-400 mt-0.5" />
            <div>
              <p className="text-gray-300 text-sm">
                <span className="font-semibold">Respuesta rápida garantizada:</span>
                Normalmente respondo dentro de las primeras 2 horas durante días laborables.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}