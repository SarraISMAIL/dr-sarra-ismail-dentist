import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

export interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface EmailTemplateParams extends Record<string, unknown> {
  to_email: string;
  patient_name: string;
  patient_email: string;
  patient_phone: string;
  selected_service: string;
  patient_message: string;
  doctor_name: string;
  doctor_location: string;
  appointment_date: string;
  reply_to: string;
}

export const sendAppointmentEmail = async (formData: AppointmentFormData): Promise<boolean> => {
  try {
    // Validate EmailJS configuration
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error('EmailJS configuration is missing. Please check your environment variables.');
      throw new Error('Configuration email manquante. Veuillez contacter l\'administrateur.');
    }

    // Prepare email template parameters
    const templateParams: EmailTemplateParams = {
      to_email: process.env.NEXT_PUBLIC_DOCTOR_EMAIL || 'sarraismailabdallah@gmail.com',
      patient_name: formData.name,
      patient_email: formData.email,
      patient_phone: formData.phone,
      selected_service: formData.service || 'Non spécifié',
      patient_message: formData.message || 'Aucun message supplémentaire',
      doctor_name: 'Dr. Sarra ISMAIL',
      doctor_location: 'Sfax, Tunisie',
      appointment_date: new Date().toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      reply_to: formData.email
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    if (response.status === 200) {
      console.log('Email sent successfully:', response);
      return true;
    } else {
      console.error('Failed to send email:', response);
      return false;
    }
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export const validateFormData = (formData: AppointmentFormData): string[] => {
  const errors: string[] = [];

  if (!formData.name.trim()) {
    errors.push('Le nom est requis');
  }

  if (!formData.email.trim()) {
    errors.push('L\'email est requis');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.push('L\'email n\'est pas valide');
  }

  if (!formData.phone.trim()) {
    errors.push('Le téléphone est requis');
  } else if (!/^(\+216\s?)?([0-9]{2}\s?[0-9]{3}\s?[0-9]{3}|[0-9]{8})$/.test(formData.phone.replace(/\s+/g, ' ').trim())) {
    errors.push('Le numéro de téléphone n\'est pas valide (format: +216 XX XXX XXX ou XX XXX XXX)');
  }

  return errors;
};

// Initialize EmailJS (call this once in your app)
export const initEmailJS = () => {
  if (EMAILJS_PUBLIC_KEY) {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }
};
