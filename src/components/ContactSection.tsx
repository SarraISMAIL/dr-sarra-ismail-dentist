"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, Calendar, MessageCircle, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { sendAppointmentEmail, validateFormData, initEmailJS, type AppointmentFormData } from "@/lib/emailService";

export default function ContactSection() {
  const [formData, setFormData] = useState<AppointmentFormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  // Initialize EmailJS on component mount
  useEffect(() => {
    initEmailJS();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    setValidationErrors([]);

    try {
      // Validate form data
      const errors = validateFormData(formData);
      if (errors.length > 0) {
        setValidationErrors(errors);
        setSubmitStatus('error');
        setIsSubmitting(false);
        return;
      }

      // Send email
      const success = await sendAppointmentEmail(formData);

      if (success) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: ""
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage('Erreur lors de l\'envoi de l\'email. Veuillez réessayer.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Une erreur inattendue s\'est produite.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear validation errors when user starts typing
    if (validationErrors.length > 0) {
      setValidationErrors([]);
    }
    if (submitStatus === 'error') {
      setSubmitStatus('idle');
    }
  };

  // Helper function to check if field has error
  const hasFieldError = (fieldName: string) => {
    return validationErrors.some(error =>
      error.toLowerCase().includes(fieldName.toLowerCase())
    );
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      details: ["15 Avenue Habib Bourguiba", "Centre-ville, Sfax 3000", "Tunisie"],
      color: "bg-blue-500"
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: ["Cabinet: +216 74 285 147", "Urgences: +216 92 456 789"],
      color: "bg-green-500"
    },
    {
      icon: Clock,
      title: "Horaires d'Ouverture",
      details: ["Lun - Ven: 8h00 - 18h00", "Samedi: 8h00 - 14h00", "Dimanche: Fermé"],
      color: "bg-purple-500"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["sarraismailabdallah@gmail.com", "Réponse sous 24h"],
      color: "bg-red-500"
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
    <section id="contact" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
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
              Contactez-Nous
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Prenez rendez-vous dès aujourd'hui ou contactez-nous pour toute question. 
              Notre équipe est là pour vous accompagner.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-8">
                Informations de Contact
              </h3>

              {/* Contact Cards */}
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`${info.color} p-3 rounded-lg text-white`}>
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Emergency Contact */}
              <motion.div
                variants={itemVariants}
                className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="w-6 h-6 text-red-500" />
                  <h4 className="font-semibold text-red-800">Urgences Dentaires</h4>
                </div>
                <p className="text-red-700">
                  Pour les urgences dentaires en dehors des heures d'ouverture,
                  appelez le <strong>+216 92 456 789</strong> (disponible 24h/24)
                </p>
              </motion.div>

              {/* Map Placeholder */}
              <motion.div
                variants={itemVariants}
                className="bg-gray-200 rounded-xl h-64 flex items-center justify-center"
              >
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Plan d'Accès</p>
                  <p className="text-sm">15 Avenue Habib Bourguiba</p>
                  <p className="text-sm">Centre-ville, Sfax 3000</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-800 mb-8">
                  Prendre Rendez-vous
                </h3>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <h4 className="font-semibold text-green-800">Demande envoyée avec succès !</h4>
                        <p className="text-green-700 text-sm">
                          Votre demande de rendez-vous a été envoyée au Dr. Sarra ISMAIL.
                          Nous vous contacterons dans les 24h pour confirmer votre rendez-vous.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Error Messages */}
                {(submitStatus === 'error' || validationErrors.length > 0) && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6"
                  >
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-red-800">Erreur lors de l'envoi</h4>
                        {validationErrors.length > 0 ? (
                          <ul className="text-red-700 text-sm mt-1 space-y-1">
                            {validationErrors.map((error, index) => (
                              <li key={index}>• {error}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-red-700 text-sm">{errorMessage}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Nom Complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all ${
                          hasFieldError('nom')
                            ? 'border-red-300 focus:ring-red-500'
                            : 'border-gray-300 focus:ring-blue-500'
                        }`}
                        placeholder="Votre nom complet"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all ${
                          hasFieldError('email')
                            ? 'border-red-300 focus:ring-red-500'
                            : 'border-gray-300 focus:ring-blue-500'
                        }`}
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all ${
                          hasFieldError('téléphone')
                            ? 'border-red-300 focus:ring-red-500'
                            : 'border-gray-300 focus:ring-blue-500'
                        }`}
                        placeholder="+216 74 285 147"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Service Souhaité
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="">Sélectionner un service</option>
                        <option value="consultation">Consultation Générale</option>
                        <option value="esthetique">Dentisterie Esthétique</option>
                        <option value="implants">Implantologie</option>
                        <option value="orthodontie">Orthodontie</option>
                        <option value="urgence">Urgence Dentaire</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Décrivez votre demande ou vos symptômes..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    className={`w-full py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Calendar className="w-5 h-5" />
                        Envoyer la Demande
                      </>
                    )}
                  </motion.button>
                </form>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 text-sm text-center">
                    <strong>Note:</strong> Nous vous contacterons dans les 24h pour confirmer votre rendez-vous.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
