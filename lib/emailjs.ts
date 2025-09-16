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
    console.warn('EmailJS nicht konfiguriert - Demo-Modus aktiviert')
    // Demo-Modus: Simuliere erfolgreiche E-Mail
    await new Promise(resolve => setTimeout(resolve, 1000))
    return { success: true, result: { text: 'Demo-Modus: E-Mail simuliert' } }
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
    // Parameter-Namen entsprechend dem EmailJS-Template
    name: formData.name,
    email: formData.email,
    phone: formData.phone || 'Nicht angegeben',
    subject: formData.subject,
    message: formData.message,
  }

  console.log('=== KONTAKT-E-MAIL DEBUG ===')
  console.log('Service ID:', EMAILJS_SERVICE_ID)
  console.log('Template ID:', CONTACT_TEMPLATE_ID)
  console.log('Public Key:', EMAILJS_PUBLIC_KEY ? `${EMAILJS_PUBLIC_KEY.substring(0, 8)}...` : 'NOT SET')
  console.log('Template Params:', templateParams)
  console.log('Template Params JSON:', JSON.stringify(templateParams, null, 2))
  console.log('Form Data received:', formData)
  console.log('EmailJS init status:', typeof emailjs.init === 'function' ? 'available' : 'not available')
  console.log('EmailJS version:', (emailjs as any).version || 'unknown')
  
  // EmailJS nochmal initialisieren vor dem Senden
  if (EMAILJS_PUBLIC_KEY) {
    try {
      emailjs.init(EMAILJS_PUBLIC_KEY)
      console.log('EmailJS re-initialized successfully')
    } catch (initError) {
      console.error('EmailJS initialization failed:', initError)
      throw new Error('EmailJS konnte nicht initialisiert werden')
    }
  } else {
    throw new Error('EmailJS Public Key ist nicht konfiguriert')
  }
  
  console.log('About to send email...')
  
  try {
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      CONTACT_TEMPLATE_ID,
      templateParams
    )
    console.log('Email sent successfully!')
    console.log('Result:', result)
    
    // Erfolgreiche E-Mail aufzeichnen
    recordEmailSent(formData.email)
    console.log('Kontakt-E-Mail erfolgreich gesendet:', result.text)
    return { success: true, result }
  } catch (error: any) {
    console.error('=== KONTAKT-E-MAIL FEHLER ===')
    console.error('Raw error object:', error)
    console.error('Error type:', typeof error)
    console.error('Error constructor:', error?.constructor?.name)
    
    // Detaillierte Fehleranalyse
    if (error?.status) {
      console.error('HTTP Status:', error.status)
      switch (error.status) {
        case 400:
          console.error('Bad Request - Überprüfen Sie die Template-Parameter')
          break
        case 401:
          console.error('Unauthorized - Überprüfen Sie den Public Key')
          break
        case 403:
          console.error('Forbidden - Service oder Template nicht verfügbar')
          break
        case 404:
          console.error('Not Found - Service ID oder Template ID falsch')
          break
        case 429:
          console.error('Too Many Requests - Rate Limit erreicht')
          break
        default:
          console.error('Unbekannter HTTP Fehler:', error.status)
      }
    }
    
    if (error?.text) {
      console.error('Error text:', error.text)
    }
    
    if (error?.response) {
      console.error('Error response:', error.response)
    }
    
    if (error?.message) {
      console.error('Error message:', error.message)
    }
    
    // Versuche den Fehler zu stringify
    try {
      console.error('Error stringified:', JSON.stringify(error, null, 2))
    } catch (jsonError) {
      console.error('Could not stringify error:', jsonError)
    }
    
    // Benutzerfreundliche Fehlermeldung erstellen
    let userMessage = 'Fehler beim Senden der E-Mail'
    if (error?.status === 400) {
      userMessage = 'Ungültige E-Mail-Parameter. Bitte überprüfen Sie Ihre Eingaben.'
    } else if (error?.status === 401) {
      userMessage = 'E-Mail-Service nicht autorisiert. Bitte kontaktieren Sie den Administrator.'
    } else if (error?.status === 404) {
      userMessage = 'E-Mail-Service nicht gefunden. Bitte kontaktieren Sie den Administrator.'
    } else if (error?.status === 429) {
      userMessage = 'Zu viele E-Mails gesendet. Bitte warten Sie einen Moment.'
    }
    
    const enhancedError = new Error(userMessage)
    enhancedError.name = error?.name || 'EmailJSError'
    ;(enhancedError as any).originalError = error
    ;(enhancedError as any).status = error?.status
    
    throw enhancedError
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
    console.warn('EmailJS nicht konfiguriert - Demo-Modus aktiviert')
    console.warn('Service ID:', EMAILJS_SERVICE_ID)
    console.warn('Template ID:', SELLER_TEMPLATE_ID)
    // Demo-Modus: Simuliere erfolgreiche E-Mail
    await new Promise(resolve => setTimeout(resolve, 1000))
    return { success: true, result: { text: 'Demo-Modus: E-Mail simuliert' } }
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
    console.log('Sende Verkaufs-E-Mail mit folgenden Parametern:', {
      serviceId: EMAILJS_SERVICE_ID,
      templateId: SELLER_TEMPLATE_ID,
      templateParams
    })
    
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      SELLER_TEMPLATE_ID,
      templateParams
    )
    
    // Erfolgreiche E-Mail aufzeichnen
    recordEmailSent(formData.email)
    console.log('Verkaufs-E-Mail erfolgreich gesendet:', result)
    return { success: true, result }
  } catch (error: any) {
    console.error('Fehler beim Senden der Verkaufs-E-Mail:', error)
    console.error('Error type:', typeof error)
    console.error('Error stringified:', JSON.stringify(error, null, 2))
    console.error('Error details:', {
      message: error?.message,
      status: error?.status,
      text: error?.text,
      response: error?.response
    })
    throw error
  }
}

// EmailJS Konfiguration validieren
export const validateEmailJSConfig = () => {
  const missing = []
  
  console.log('=== EMAILJS KONFIGURATION VALIDIERUNG ===')
  console.log('Überprüfe EmailJS Konfiguration:', {
    serviceId: EMAILJS_SERVICE_ID ? `✓ gesetzt (${EMAILJS_SERVICE_ID})` : '✗ fehlt',
    publicKey: EMAILJS_PUBLIC_KEY ? `✓ gesetzt (${EMAILJS_PUBLIC_KEY.substring(0, 8)}...)` : '✗ fehlt',
    contactTemplate: CONTACT_TEMPLATE_ID ? `✓ gesetzt (${CONTACT_TEMPLATE_ID})` : '✗ fehlt',
    sellerTemplate: SELLER_TEMPLATE_ID ? `✓ gesetzt (${SELLER_TEMPLATE_ID})` : '✗ fehlt'
  })
  
  // Detaillierte Validierung
  if (!EMAILJS_SERVICE_ID) {
    missing.push('NEXT_PUBLIC_EMAILJS_SERVICE_ID')
    console.error('Service ID fehlt!')
  } else if (!EMAILJS_SERVICE_ID.startsWith('service_')) {
    console.warn('Service ID sollte mit "service_" beginnen:', EMAILJS_SERVICE_ID)
  }
  
  if (!EMAILJS_PUBLIC_KEY) {
    missing.push('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY')
    console.error('Public Key fehlt!')
  } else if (EMAILJS_PUBLIC_KEY.length < 10) {
    console.warn('Public Key scheint zu kurz zu sein:', EMAILJS_PUBLIC_KEY)
  }
  
  if (!CONTACT_TEMPLATE_ID) {
    missing.push('NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONTACT')
    console.error('Contact Template ID fehlt!')
  } else if (!CONTACT_TEMPLATE_ID.startsWith('template_')) {
    console.warn('Contact Template ID sollte mit "template_" beginnen:', CONTACT_TEMPLATE_ID)
  }
  
  if (!SELLER_TEMPLATE_ID) {
    missing.push('NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_SELLER')
    console.error('Seller Template ID fehlt!')
  } else if (!SELLER_TEMPLATE_ID.startsWith('template_')) {
    console.warn('Seller Template ID sollte mit "template_" beginnen:', SELLER_TEMPLATE_ID)
  }
  
  if (missing.length > 0) {
    console.error('EmailJS Konfiguration unvollständig. Fehlende Variablen:', missing)
    console.error('Bitte überprüfen Sie Ihre .env.local Datei!')
    return false
  }
  
  console.log('EmailJS Konfiguration ist vollständig ✓')
  console.log('Alle erforderlichen Variablen sind gesetzt und haben das richtige Format.')
  return true
}

// Test-Funktion für EmailJS
export const testEmailJSConnection = async () => {
  console.log('=== EMAILJS VERBINDUNGSTEST ===')
  
  if (!validateEmailJSConfig()) {
    console.error('EmailJS Konfiguration ist unvollständig. Test abgebrochen.')
    return { success: false, error: 'Konfiguration unvollständig' }
  }
  
  try {
    // EmailJS initialisieren
    if (!initEmailJS()) {
      throw new Error('EmailJS konnte nicht initialisiert werden')
    }
    
    // Test-E-Mail senden
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      phone: 'Test Phone',
      subject: 'EmailJS Test',
      message: 'Dies ist eine Test-E-Mail zur Überprüfung der EmailJS-Konfiguration.',
      website: ''
    }
    
    console.log('Sende Test-E-Mail...')
    const result = await sendContactEmail(testData)
    
    console.log('Test-E-Mail erfolgreich gesendet!', result)
    return { success: true, result }
  } catch (error: any) {
    console.error('EmailJS Test fehlgeschlagen:', error)
    return { success: false, error: error.message || 'Unbekannter Fehler' }
  }
}

// Funktion zum Testen verschiedener Template-Parameter
export const testEmailJSTemplateParams = async () => {
  console.log('=== EMAILJS TEMPLATE PARAMETER TEST ===')
  
  if (!validateEmailJSConfig()) {
    console.error('EmailJS Konfiguration ist unvollständig. Test abgebrochen.')
    return { success: false, error: 'Konfiguration unvollständig' }
  }
  
  try {
    // EmailJS initialisieren
    if (!initEmailJS()) {
      throw new Error('EmailJS konnte nicht initialisiert werden')
    }
    
    // Verschiedene Template-Parameter-Sets testen
    const testParams = [
      {
        name: 'Minimal Test',
        params: {
          name: 'Test User',
          email: 'test@example.com',
          message: 'Test message'
        }
      },
      {
        name: 'Standard Test',
        params: {
          name: 'Test User',
          email: 'test@example.com',
          subject: 'Test Subject',
          message: 'Test message',
          phone: 'Test Phone'
        }
      },
      {
        name: 'Full Test',
        params: {
          name: 'Test User',
          email: 'test@example.com',
          subject: 'Test Subject',
          message: 'Test message',
          phone: 'Test Phone'
        }
      }
    ]
    
    for (const test of testParams) {
      console.log(`\n--- Testing ${test.name} ---`)
      console.log('Parameters:', test.params)
      
      try {
        const result = await emailjs.send(
          EMAILJS_SERVICE_ID!,
          CONTACT_TEMPLATE_ID!,
          test.params
        )
        console.log(`✓ ${test.name} erfolgreich!`, result)
        return { success: true, result, testName: test.name }
      } catch (error: any) {
        console.error(`✗ ${test.name} fehlgeschlagen:`, error.message)
        if (error.status) {
          console.error('HTTP Status:', error.status)
        }
      }
    }
    
    return { success: false, error: 'Alle Template-Parameter-Tests fehlgeschlagen' }
  } catch (error: any) {
    console.error('Template Parameter Test fehlgeschlagen:', error)
    return { success: false, error: error.message || 'Unbekannter Fehler' }
  }
}

// Direkte EmailJS-Test-Funktion (ohne Wrapper)
export const testEmailJSDirect = async () => {
  console.log('=== DIREKTER EMAILJS TEST ===')
  
  if (!validateEmailJSConfig()) {
    console.error('EmailJS Konfiguration ist unvollständig. Test abgebrochen.')
    return { success: false, error: 'Konfiguration unvollständig' }
  }
  
  try {
    // EmailJS initialisieren
    emailjs.init(EMAILJS_PUBLIC_KEY!)
    console.log('EmailJS initialisiert mit Key:', EMAILJS_PUBLIC_KEY?.substring(0, 8) + '...')
    
    // Minimale Test-Parameter
    const testParams = {
      name: 'Test User',
      email: 'test@example.com',
      phone: 'Test Phone',
      subject: 'Test Subject',
      message: 'Test Message'
    }
    
    console.log('Sende direkte EmailJS-Anfrage...')
    console.log('Service ID:', EMAILJS_SERVICE_ID)
    console.log('Template ID:', CONTACT_TEMPLATE_ID)
    console.log('Parameters:', testParams)
    
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID!,
      CONTACT_TEMPLATE_ID!,
      testParams
    )
    
    console.log('Direkter EmailJS-Test erfolgreich!', result)
    return { success: true, result }
  } catch (error: any) {
    console.error('Direkter EmailJS-Test fehlgeschlagen:', error)
    console.error('Error details:', {
      message: error?.message,
      status: error?.status,
      text: error?.text,
      response: error?.response
    })
    return { success: false, error: error.message || 'Unbekannter Fehler' }
  }
}
