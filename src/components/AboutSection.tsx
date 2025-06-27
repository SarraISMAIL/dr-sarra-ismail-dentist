"use client";

import { motion } from "framer-motion";
import { Award, Users, Clock, Heart } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { icon: Users, number: "2000+", label: "Patients Satisfaits" },
    { icon: Award, number: "15+", label: "Années d'Expérience" },
    { icon: Clock, number: "24/7", label: "Urgences Dentaires" },
    { icon: Heart, number: "100%", label: "Soins Personnalisés" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              À Propos du Dr. Sarra ISMAIL
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Passionnée par l'excellence dentaire, le Dr. Sarra ISMAIL vous offre
              des soins de qualité supérieure dans un environnement moderne et accueillant.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Doctor Image Placeholder */}
            <motion.div variants={itemVariants} className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 text-white text-center shadow-2xl">
                <div className="text-8xl mb-6">👩‍⚕️</div>
                <h3 className="text-2xl font-bold mb-4">Dr. Sarra ISMAIL</h3>
                <p className="text-lg opacity-90">
                  Docteur en Chirurgie Dentaire
                </p>
                <p className="text-base opacity-80 mt-2">
                  Diplômé de la Faculté de Médecine Dentaire de Monastir
                </p>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 text-4xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                ⭐
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 text-3xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🦷
              </motion.div>
            </motion.div>

            {/* About Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Une Expertise au Service de Votre Sourire
              </h3>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Avec plus de 15 années d'expérience en dentisterie, le Dr. Sarra ISMAIL
                  s'est spécialisée dans les soins dentaires modernes et l'esthétique dentaire.
                  Sa philosophie repose sur une approche personnalisée et bienveillante.
                </p>
                
                <p>
                  Formée aux dernières techniques de dentisterie conservatrice, d'implantologie
                  et d'orthodontie, elle met un point d'honneur à offrir des traitements de
                  pointe dans un cadre chaleureux et rassurant.
                </p>
                
                <p>
                  Son cabinet, situé au 15 Avenue Habib Bourguiba dans le centre-ville de Sfax,
                  est équipé des technologies les plus avancées pour garantir des soins précis,
                  confortables et durables.
                </p>
              </div>

              {/* Specializations */}
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Spécialisations :</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Dentisterie Esthétique",
                    "Implantologie",
                    "Orthodontie",
                    "Parodontologie",
                    "Endodontie",
                    "Chirurgie Orale"
                  ].map((spec, index) => (
                    <motion.div
                      key={spec}
                      variants={itemVariants}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>{spec}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="text-4xl mb-4">💫</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Notre Mission</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              "Offrir à chaque patient des soins dentaires d'excellence dans un environnement 
              bienveillant, en utilisant les technologies les plus avancées pour préserver 
              et embellir votre sourire naturel."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
