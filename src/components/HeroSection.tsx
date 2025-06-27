"use client";

import { motion } from "framer-motion";
import { ChevronDown, Calendar, MapPin, Phone } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-500 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main Content */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Tooth Mascot */}
          <motion.div
            className="text-8xl md:text-9xl mb-8 inline-block"
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🦷
          </motion.div>

          {/* Doctor Name */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Dr. Sarra ISMAIL
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl mb-8 opacity-90 font-light"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Dentiste Expert à Sfax, Tunisie
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl mb-12 opacity-80 max-w-2xl mx-auto leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Votre sourire mérite les meilleurs soins. Découvrez notre expertise 
            en dentisterie moderne dans un environnement chaleureux et professionnel.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Calendar className="w-5 h-5" />
              Prendre Rendez-vous
            </button>
            
            <button
              onClick={() => scrollToSection('services')}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center gap-2"
            >
              Nos Services
            </button>
          </motion.div>

          {/* Quick Info */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="flex items-center justify-center gap-3 text-white/90">
              <MapPin className="w-5 h-5" />
              <span>Centre-ville, Sfax</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white/90">
              <Phone className="w-5 h-5" />
              <span>+216 74 285 147</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white/90">
              <Calendar className="w-5 h-5" />
              <span>Lun - Sam: 8h-18h</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <button
            onClick={() => scrollToSection('about')}
            className="text-white/70 hover:text-white transition-colors"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/10 text-4xl"
            style={{
              left: `${15 + i * 20}%`,
              top: `${20 + (i % 2) * 60}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut",
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>
    </section>
  );
}
