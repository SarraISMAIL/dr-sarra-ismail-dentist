"use client";

import { motion } from "framer-motion";
import { Smile, Shield, Zap, Sparkles, Heart, Star } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Smile,
      title: "Dentisterie Esthétique",
      description: "Blanchiment, facettes, couronnes esthétiques pour un sourire éclatant",
      features: ["Blanchiment professionnel", "Facettes en céramique", "Couronnes esthétiques"],
      color: "bg-blue-500",
      emoji: "✨"
    },
    {
      icon: Shield,
      title: "Soins Conservateurs",
      description: "Prévention et traitement des caries avec les techniques les plus modernes",
      features: ["Détartrage", "Soins des caries", "Traitements préventifs"],
      color: "bg-green-500",
      emoji: "🛡️"
    },
    {
      icon: Zap,
      title: "Implantologie",
      description: "Remplacement des dents manquantes par des implants de haute qualité",
      features: ["Implants dentaires", "Prothèses sur implants", "Chirurgie guidée"],
      color: "bg-purple-500",
      emoji: "⚡"
    },
    {
      icon: Sparkles,
      title: "Orthodontie",
      description: "Correction de l'alignement dentaire pour un sourire parfait",
      features: ["Appareils traditionnels", "Orthodontie invisible", "Gouttières"],
      color: "bg-pink-500",
      emoji: "🌟"
    },
    {
      icon: Heart,
      title: "Parodontologie",
      description: "Traitement des gencives et prévention des maladies parodontales",
      features: ["Soins des gencives", "Détartrage profond", "Chirurgie parodontale"],
      color: "bg-red-500",
      emoji: "❤️"
    },
    {
      icon: Star,
      title: "Urgences Dentaires",
      description: "Prise en charge rapide des urgences dentaires 24h/24",
      features: ["Urgences 24h/24", "Soulagement immédiat", "Soins d'urgence"],
      color: "bg-orange-500",
      emoji: "🚨"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Nos Services Dentaires
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Une gamme complète de soins dentaires modernes pour répondre à tous vos besoins, 
              de la prévention aux traitements les plus avancés.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-20 h-20 ${service.color} opacity-10 rounded-bl-full`}></div>
                
                {/* Service Icon */}
                <div className="relative mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${service.color} rounded-xl mb-4 text-white`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 text-2xl">
                    {service.emoji}
                  </div>
                </div>

                {/* Service Content */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Technology Section */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 md:p-12 text-white text-center"
          >
            <div className="text-5xl mb-6">🔬</div>
            <h3 className="text-3xl font-bold mb-6">Technologies de Pointe</h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Notre cabinet est équipé des dernières technologies dentaires pour vous offrir 
              des soins précis, confortables et efficaces.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                { icon: "📱", title: "Radiographie Numérique", desc: "Diagnostic précis avec moins de radiation" },
                { icon: "🦷", title: "Scanner 3D", desc: "Planification chirurgicale avancée" },
                { icon: "💎", title: "Laser Dentaire", desc: "Traitements moins invasifs et plus confortables" }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white/10 rounded-xl p-6 backdrop-blur-sm"
                >
                  <div className="text-3xl mb-3">{tech.icon}</div>
                  <h4 className="font-semibold mb-2">{tech.title}</h4>
                  <p className="text-sm opacity-80">{tech.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Prêt à Transformer Votre Sourire ?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour une consultation personnalisée 
              et découvrez comment nous pouvons vous aider.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Prendre Rendez-vous
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
