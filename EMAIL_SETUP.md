# Email Setup Guide for Dr. Sarra ISMAIL's Dentist Website

This guide explains how to set up email functionality for the appointment booking form using EmailJS.

## 1. EmailJS Account Setup

1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Verify your email address
3. You'll get 200 free emails per month (perfect for a dental practice)

## 2. Email Service Configuration

### Step 1: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. For Gmail:
   - Service ID: `gmail_service` (you can customize this)
   - Connect your Gmail account: `sarraismailabdallah@gmail.com`
   - Follow the OAuth flow to authorize EmailJS

### Step 2: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Template ID: `appointment_template` (you can customize this)
4. Use this professional template:

```html
Subject: 🦷 Nouvelle Demande de Rendez-vous - {{patient_name}}

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background: linear-gradient(135deg, #2563eb, #06b6d4); color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .info-box { background: #f8fafc; border-left: 4px solid #2563eb; padding: 15px; margin: 15px 0; }
        .footer { background: #f1f5f9; padding: 15px; text-align: center; font-size: 12px; color: #64748b; }
    </style>
</head>
<body>
    <div class="header">
        <h1>🦷 Cabinet Dentaire Dr. {{doctor_name}}</h1>
        <p>{{doctor_location}}</p>
    </div>

    <div class="content">
        <h2>Nouvelle Demande de Rendez-vous</h2>
        <p>Bonjour Dr. {{doctor_name}},</p>
        <p>Vous avez reçu une nouvelle demande de rendez-vous via votre site web.</p>

        <div class="info-box">
            <h3>📋 Informations du Patient</h3>
            <p><strong>Nom:</strong> {{patient_name}}</p>
            <p><strong>Email:</strong> {{patient_email}}</p>
            <p><strong>Téléphone:</strong> {{patient_phone}}</p>
            <p><strong>Service demandé:</strong> {{selected_service}}</p>
        </div>

        <div class="info-box">
            <h3>💬 Message du Patient</h3>
            <p>{{patient_message}}</p>
        </div>

        <div class="info-box">
            <h3>📅 Détails de la Demande</h3>
            <p><strong>Date de la demande:</strong> {{appointment_date}}</p>
            <p><strong>Email de réponse:</strong> {{reply_to}}</p>
        </div>

        <p><strong>Action requise:</strong> Veuillez contacter le patient dans les 24h pour confirmer le rendez-vous.</p>
    </div>

    <div class="footer">
        <p>Email automatique généré par le site web du Cabinet Dentaire Dr. {{doctor_name}}</p>
        <p>{{doctor_location}} | Site web: https://dr-sarra-ismail.com</p>
    </div>
</body>
</html>
```

## 3. Environment Variables Setup

Update your `.env.local` file with your EmailJS credentials:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=gmail_service
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=appointment_template
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here

# Doctor's email
NEXT_PUBLIC_DOCTOR_EMAIL=sarraismailabdallah@gmail.com
```

### How to get your Public Key:
1. In EmailJS dashboard, go to "Account" → "General"
2. Copy your "Public Key"
3. Paste it in the `.env.local` file

## 4. Testing the Email Functionality

1. Start your development server: `npm run dev`
2. Go to `http://localhost:3000`
3. Scroll to the contact form
4. Fill out the form with test data
5. Submit the form
6. Check the email inbox: `sarraismailabdallah@gmail.com`

## 5. Email Template Variables

The following variables are automatically populated:

- `{{patient_name}}` - Patient's full name
- `{{patient_email}}` - Patient's email address
- `{{patient_phone}}` - Patient's phone number
- `{{selected_service}}` - Selected dental service
- `{{patient_message}}` - Patient's message
- `{{doctor_name}}` - Dr. Sarra ISMAIL
- `{{doctor_location}}` - Sfax, Tunisie
- `{{appointment_date}}` - Date and time of request
- `{{reply_to}}` - Patient's email for replies

## 6. Security Notes

- EmailJS public key is safe to expose in frontend code
- All sensitive operations happen on EmailJS servers
- Rate limiting is automatically applied
- No backend server required

## 7. Troubleshooting

### Common Issues:
1. **"Configuration email manquante"** - Check your `.env.local` file
2. **Emails not sending** - Verify EmailJS service is connected
3. **Template not found** - Check template ID matches exactly
4. **Gmail blocking** - Ensure OAuth is properly configured

### Support:
- EmailJS Documentation: https://www.emailjs.com/docs/
- Contact: For technical issues, check the browser console for error messages