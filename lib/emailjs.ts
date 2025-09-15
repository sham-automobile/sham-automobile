import emailjs from '@emailjs/browser'

// EmailJS Konfiguration
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

// Template IDs
const CONTACT_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONTACT
const SELLER_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_SELLER

// EmailJS initialisieren
export const initEmailJS = () => {
  if (!EMAILJS_PUBLIC_KEY) {
    console.error('EmailJS Public Key ist nicht konfiguriert')
    return false
  }
  
  emailjs.init(EMAILJS_PUBLIC_KEY)
  return true
}

// Kontaktformular E-Mail senden
export const sendContactEmail = async (formData: {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}) => {
  if (!EMAILJS_SERVICE_ID || !CONTACT_TEMPLATE_ID) {
    throw new Error('EmailJS Service ID oder Template ID ist nicht konfiguriert')
  }

  const templateParams = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone || 'Nicht angegeben',
    subject: formData.subject,
    message: formData.message,
    to_email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@sham-automobile.de',
  }

  try {
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      CONTACT_TEMPLATE_ID,
      templateParams
    )
    
    console.log('Kontakt-E-Mail erfolgreich gesendet:', result.text)
    return { success: true, result }
  } catch (error) {
    console.error('Fehler beim Senden der Kontakt-E-Mail:', error)
    throw error
  }
}

// Verkaufsformular E-Mail senden
export const sendSellerEmail = async (formData: {
  name: string
  email: string
  phone: string
  make: string
  model: string
  year: number
  mileage: number
  description?: string
}) => {
  if (!EMAILJS_SERVICE_ID || !SELLER_TEMPLATE_ID) {
    throw new Error('EmailJS Service ID oder Template ID ist nicht konfiguriert')
  }

  const templateParams = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    make: formData.make,
    model: formData.model,
    year: formData.year.toString(),
    mileage: formData.mileage.toString(),
    description: formData.description || 'Keine Beschreibung angegeben',
    to_email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@sham-automobile.de',
  }

  try {
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      SELLER_TEMPLATE_ID,
      templateParams
    )
    
    console.log('Verkaufs-E-Mail erfolgreich gesendet:', result.text)
    return { success: true, result }
  } catch (error) {
    console.error('Fehler beim Senden der Verkaufs-E-Mail:', error)
    throw error
  }
}

// EmailJS Konfiguration validieren
export const validateEmailJSConfig = () => {
  const missing = []
  
  if (!EMAILJS_SERVICE_ID) missing.push('NEXT_PUBLIC_EMAILJS_SERVICE_ID')
  if (!EMAILJS_PUBLIC_KEY) missing.push('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY')
  if (!CONTACT_TEMPLATE_ID) missing.push('NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONTACT')
  if (!SELLER_TEMPLATE_ID) missing.push('NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_SELLER')
  
  if (missing.length > 0) {
    console.warn('EmailJS Konfiguration unvollständig. Fehlende Variablen:', missing)
    return false
  }
  
  return true
}
