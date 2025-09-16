import emailjs from '@emailjs/browser'

// EmailJS Konfiguration
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

// Rate Limiting Konfiguration
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 Stunde in Millisekunden
const MAX_EMAILS_PER_WINDOW = 3

// In-Memory Storage für Rate Limiting (in Production sollte das in einer Datenbank sein)
const emailAttempts = new Map<string, { count: number; firstAttempt: number }>()

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

// Rate Limiting Funktionen
export const checkRateLimit = (email: string): { allowed: boolean; remainingTime?: number } => {
  const now = Date.now()
  const key = email.toLowerCase()
  
  // Alte Einträge bereinigen
  emailAttempts.forEach((v, k) => {
    if (now - v.firstAttempt > RATE_LIMIT_WINDOW) {
      emailAttempts.delete(k)
    }
  })
  
  const attempts = emailAttempts.get(key)
  
  if (!attempts) {
    // Erste E-Mail in diesem Zeitfenster
    emailAttempts.set(key, { count: 1, firstAttempt: now })
    return { allowed: true }
  }
  
  if (now - attempts.firstAttempt > RATE_LIMIT_WINDOW) {
    // Zeitfenster abgelaufen, zurücksetzen
    emailAttempts.set(key, { count: 1, firstAttempt: now })
    return { allowed: true }
  }
  
  if (attempts.count >= MAX_EMAILS_PER_WINDOW) {
    // Rate Limit erreicht
    const remainingTime = Math.ceil((RATE_LIMIT_WINDOW - (now - attempts.firstAttempt)) / (1000 * 60)) // in Minuten
    return { allowed: false, remainingTime }
  }
  
  // E-Mail zählen
  attempts.count++
  return { allowed: true }
}

export const recordEmailSent = (email: string) => {
  const key = email.toLowerCase()
  const attempts = emailAttempts.get(key)
  
  if (attempts) {
    // Zähler wird bereits in checkRateLimit erhöht, hier nur loggen
    console.log(`E-Mail gesendet für ${email}. Anzahl in diesem Zeitfenster: ${attempts.count}`)
  }
}

// Kontaktformular E-Mail senden
export const sendContactEmail = async (formData: {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  website?: string
}) => {
  if (!EMAILJS_SERVICE_ID || !CONTACT_TEMPLATE_ID) {
    throw new Error('EmailJS Service ID oder Template ID ist nicht konfiguriert')
  }

  // Rate Limiting prüfen
  const rateLimitCheck = checkRateLimit(formData.email)
  if (!rateLimitCheck.allowed) {
    const error = new Error(`Rate Limit erreicht. Sie können nur ${MAX_EMAILS_PER_WINDOW} E-Mails pro Stunde senden.`)
    error.name = 'RateLimitError'
    ;(error as any).remainingTime = rateLimitCheck.remainingTime
    throw error
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
    
    // Erfolgreiche E-Mail aufzeichnen
    recordEmailSent(formData.email)
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
  website?: string
}) => {
  if (!EMAILJS_SERVICE_ID || !SELLER_TEMPLATE_ID) {
    throw new Error('EmailJS Service ID oder Template ID ist nicht konfiguriert')
  }

  // Rate Limiting prüfen
  const rateLimitCheck = checkRateLimit(formData.email)
  if (!rateLimitCheck.allowed) {
    const error = new Error(`Rate Limit erreicht. Sie können nur ${MAX_EMAILS_PER_WINDOW} E-Mails pro Stunde senden.`)
    error.name = 'RateLimitError'
    ;(error as any).remainingTime = rateLimitCheck.remainingTime
    throw error
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
    
    // Erfolgreiche E-Mail aufzeichnen
    recordEmailSent(formData.email)
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
