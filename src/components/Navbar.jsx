// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Sparkles } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [active, setActive] = useState("#inicio");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Habilidades", href: "#skills" },
    { label: "Servicios", href: "#servicios" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
  ];

  // Efecto de scroll para cambiar apariencia
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 20);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (open && !e.target.closest('nav')) {
        setOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [open]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${scrolled
        ? "w-[90%] max-w-2xl shadow-2xl"
        : "w-[95%] max-w-4xl shadow-lg"
        }`}
    >
      {/* Fondo con gradiente y blur */}
      <div className="relative">
        <div className={`absolute inset-0 bg-gradient-to-r from-purple-900/10 via-black/70 to-cyan-900/10 backdrop-blur-xl rounded-2xl border transition-all duration-300 ${scrolled
          ? "border-white/20"
          : "border-white/15"
          }`} />

        {/* Efecto de borde luminoso */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5" />

        <div className="relative px-6 py-3 flex items-center justify-between">
          {/* LOGO MEJORADO */}
          <motion.a
            href="#inicio"
            onClick={() => {
              setActive("#inicio");
              setOpen(false);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg blur opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-black/80 p-2 rounded-lg">
                <Code2 className="w-5 h-5 text-cyan-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-white">
                Gustavo
              </span>
              <span className="text-xs text-gray-400 tracking-wider">
                FULL STACK DEV
              </span>
            </div>
          </motion.a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center">
            <ul className="flex items-center gap-1">
              {links.map((link, index) => (
                <li key={link.href}>
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.a
                      href={link.href}
                      onClick={() => setActive(link.href)}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="relative block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                    >
                      {/* Fondo animado SOLO para el item activo */}
                      {active === link.href && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-lg border border-white/20 shadow-lg"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}

                      {/* Contenido del enlace */}
                      <span className={`relative z-10 flex items-center gap-1 ${active === link.href
                          ? "text-white font-semibold"
                          : "text-gray-300 hover:text-white"
                        }`}>
                        {link.label}
                        {active === link.href && (
                          <Sparkles className="w-3 h-3 text-cyan-300 ml-1 animate-pulse" />
                        )}
                      </span>
                    </motion.a>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          {/* ACCIONES DERECHA */}
          <div className="flex items-center gap-4">
            {/* BOTÓN HAMBURGUESA MEJORADO */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                setOpen(!open);
              }}
              className="md:hidden relative w-10 h-10 flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-lg" />
              <AnimatePresence mode="wait">
                {open ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    className="absolute"
                  >
                    <X className="w-5 h-5 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    className="absolute"
                  >
                    <Menu className="w-5 h-5 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU MEJORADO - AHORA SEPARADO */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-3 z-50"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-black/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl" />
              <div className="relative px-4 py-6">
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <li key={link.href}>
                      <motion.a
                        href={link.href}
                        onClick={() => {
                          setActive(link.href);
                          setOpen(false);
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ x: 5 }}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all ${active === link.href
                          ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white border-l-4 border-cyan-400"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                          }`}
                      >
                        <div className={`w-2 h-2 rounded-full transition-colors ${active === link.href ? "bg-cyan-400" : "bg-gray-600"
                          }`} />
                        {link.label}
                        {active === link.href && (
                          <Sparkles className="w-4 h-4 text-cyan-300 ml-auto" />
                        )}
                      </motion.a>
                    </li>
                  ))}
                </ul>

                {/* FOOTER MOBILE */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="mt-6 pt-6 border-t border-white/10"
                >
                  <p className="text-center text-xs text-gray-400">
                    Full Stack Developer & Automation Specialist
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}