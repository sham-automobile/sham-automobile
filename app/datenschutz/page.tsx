import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutz',
  description: 'Datenschutzerklärung von Sham-Auto Mobile - Informationen zum Umgang mit Ihren Daten',
  robots: {
    index: false,
    follow: false,
  },
}

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-primary-900 mb-8">Datenschutzerklärung</h1>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-primary-900 mb-4">1. Datenschutz auf einen Blick</h2>
              
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Allgemeine Hinweise</h3>
              <p className="text-primary-700 mb-6">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, 
                mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema 
                Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>

              <h3 className="text-xl font-semibold text-primary-900 mb-3">Datenerfassung auf dieser Website</h3>
              <p className="text-primary-700 mb-4">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
              </p>
              <p className="text-primary-700 mb-6">
                <strong>Wie erfassen wir Ihre Daten?</strong><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich 
                z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch 
                oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst.
              </p>

              <h2 className="text-2xl font-semibold text-primary-900 mb-4">2. Hosting</h2>
              <p className="text-primary-700 mb-6">
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                <br />
                <strong>Vercel Inc.</strong><br />
                340 S Lemon Ave #4133<br />
                Walnut, CA 91789<br />
                USA
                <br /><br />
                Unsere Domain wird über IONOS verwaltet:
                <br />
                <strong>IONOS SE</strong><br />
                Elgendorfer Str. 57<br />
                56410 Montabaur<br />
                Deutschland
                <br /><br />
                Die Erfassung und Verarbeitung Ihrer Daten erfolgt durch Vercel. Weitere Informationen entnehmen Sie der 
                Datenschutzerklärung von Vercel: 
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:text-accent-700">
                  https://vercel.com/legal/privacy-policy
                </a>
              </p>

              <h2 className="text-2xl font-semibold text-primary-900 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Datenschutz</h3>
              <p className="text-primary-700 mb-6">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln 
                Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften 
                sowie dieser Datenschutzerklärung. Wenn Sie diese Website benutzen, werden verschiedene 
                personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich 
                identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir 
                erheben und wofür wir sie nutzen.
              </p>

              <h3 className="text-xl font-semibold text-primary-900 mb-3">Hinweis zur verantwortlichen Stelle</h3>
              <div className="bg-primary-50 p-6 rounded-lg mb-6">
                <p className="text-primary-700 mb-2"><strong>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</strong></p>
                <p className="text-primary-700">
                  Sham-Auto Mobile<br />
                  Noorullah Sham<br />
                  Walsroder Straße 237<br />
                  30855 Langenhagen<br />
                  Deutschland<br /><br />
                  Telefon: <a href="tel:+491725413020" className="hover:text-accent-600">+49 172 541 30 20</a><br />
                  E-Mail: <a href="mailto:info@sham-automobile.de" className="hover:text-accent-600">info@sham-automobile.de</a>
                </p>
              </div>

              <h3 className="text-xl font-semibold text-primary-900 mb-3">Speicherdauer</h3>
              <p className="text-primary-700 mb-6">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, 
                verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung 
                entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur 
                Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich 
                zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben.
              </p>

              <h2 className="text-2xl font-semibold text-primary-900 mb-4">4. Datenerfassung auf dieser Website</h2>
              
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Kontaktformular</h3>
              <p className="text-primary-700 mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben 
                wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="text-primary-700 mb-6">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern 
                Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung 
                vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung 
                auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten 
                Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
              </p>

              <h3 className="text-xl font-semibold text-primary-900 mb-3">Anfrage per E-Mail, Telefon oder Telefax</h3>
              <p className="text-primary-700 mb-6">
                Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller 
                daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres 
                Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>

              <h2 className="text-2xl font-semibold text-primary-900 mb-4">5. Analyse-Tools und Tools von Drittanbietern</h2>
              <p className="text-primary-700 mb-6">
                Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht 
                vor allem mit sogenannten Analyseprogrammen. Detaillierte Informationen zu diesen Analyseprogrammen 
                finden Sie in der folgenden Datenschutzerklärung.
              </p>


              <h3 className="text-xl font-semibold text-primary-900 mb-3">Vercel Analytics</h3>
              <p className="text-primary-700 mb-4">
                Diese Website nutzt Vercel Analytics, einen Webanalysedienst der Vercel Inc. (340 S Lemon Ave #4133, 
                Walnut, CA 91789, USA). Vercel Analytics verwendet Cookies und ähnliche Technologien, um Informationen 
                über Ihr Verhalten auf unserer Website zu sammeln und zu analysieren.
              </p>
              <p className="text-primary-700 mb-4">
                <strong>Verarbeitete Daten:</strong><br />
                • IP-Adresse (anonymisiert)<br />
                • Seitenaufrufe und Verweildauer<br />
                • Verweisende Websites<br />
                • Browser- und Geräteinformationen<br />
                • Geografische Daten (auf Länderebene)
              </p>
              <p className="text-primary-700 mb-4">
                <strong>Zweck der Verarbeitung:</strong><br />
                Die Daten werden verwendet, um die Nutzung unserer Website zu analysieren, die Website-Performance 
                zu verbessern und Einblicke in das Nutzerverhalten zu gewinnen.
              </p>
              <p className="text-primary-700 mb-4">
                <strong>Rechtsgrundlage:</strong><br />
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse 
                an der Analyse und Optimierung unserer Website).
              </p>
              <p className="text-primary-700 mb-6">
                <strong>Speicherdauer:</strong><br />
                Die Daten werden für maximal 24 Monate gespeichert. Weitere Informationen finden Sie in der 
                Datenschutzerklärung von Vercel: 
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:text-accent-700">
                  https://vercel.com/legal/privacy-policy
                </a>
              </p>

              <h3 className="text-xl font-semibold text-primary-900 mb-3">Vercel Speed Insights</h3>
              <p className="text-primary-700 mb-4">
                Diese Website nutzt Vercel Speed Insights, einen Performance-Monitoring-Service der Vercel Inc. 
                Speed Insights sammelt anonymisierte Daten über die Ladezeiten und Performance-Metriken unserer Website.
              </p>
              <p className="text-primary-700 mb-4">
                <strong>Verarbeitete Daten:</strong><br />
                • Ladezeiten von Seiten<br />
                • Core Web Vitals (LCP, FID, CLS)<br />
                • Browser- und Geräteinformationen<br />
                • Netzwerkbedingungen<br />
                • Geografische Daten (auf Länderebene)
              </p>
              <p className="text-primary-700 mb-4">
                <strong>Zweck der Verarbeitung:</strong><br />
                Die Daten werden verwendet, um die Performance unserer Website zu überwachen und zu optimieren, 
                um eine bessere Benutzererfahrung zu gewährleisten.
              </p>
              <p className="text-primary-700 mb-4">
                <strong>Rechtsgrundlage:</strong><br />
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse 
                an der Optimierung der Website-Performance).
              </p>
              <p className="text-primary-700 mb-6">
                <strong>Speicherdauer:</strong><br />
                Die Daten werden für maximal 12 Monate gespeichert. Weitere Informationen finden Sie in der 
                Datenschutzerklärung von Vercel: 
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:text-accent-700">
                  https://vercel.com/legal/privacy-policy
                </a>
              </p>

              <h3 className="text-xl font-semibold text-primary-900 mb-3">Google Search Console</h3>
              <p className="text-primary-700 mb-4">
                Diese Website nutzt Google Search Console, einen Service der Google Ireland Limited ("Google"), 
                Gordon House, Barrow Street, Dublin 4, Irland. Google Search Console hilft uns dabei, die 
                Performance unserer Website in den Google-Suchergebnissen zu überwachen und zu verbessern.
              </p>
              <p className="text-primary-700 mb-4">
                <strong>Verarbeitete Daten:</strong><br />
                • Suchanfragen, die zu unserer Website führen<br />
                • Klickraten und Positionen in den Suchergebnissen<br />
                • Indexierungsstatus unserer Seiten<br />
                • Technische Probleme und Fehler<br />
                • Mobile Usability-Daten
              </p>
              <p className="text-primary-700 mb-4">
                <strong>Zweck der Verarbeitung:</strong><br />
                Die Daten werden verwendet, um die Sichtbarkeit unserer Website in Suchmaschinen zu verbessern, 
                technische Probleme zu identifizieren und die SEO-Performance zu optimieren.
              </p>
              <p className="text-primary-700 mb-4">
                <strong>Rechtsgrundlage:</strong><br />
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse 
                an der Optimierung unserer Website für Suchmaschinen).
              </p>
              <p className="text-primary-700 mb-6">
                <strong>Speicherdauer:</strong><br />
                Die Daten werden für maximal 16 Monate gespeichert. Weitere Informationen finden Sie in der 
                Datenschutzerklärung von Google: 
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:text-accent-700">
                  https://policies.google.com/privacy
                </a>
              </p>

              <h2 className="text-2xl font-semibold text-primary-900 mb-4">6. Newsletter</h2>
              <p className="text-primary-700 mb-6">
                Diese Website bietet keinen Newsletter-Service an. Falls in Zukunft ein Newsletter angeboten 
                wird, werden Sie hierüber informiert und können entsprechend einwilligen oder widersprechen.
              </p>

              <h2 className="text-2xl font-semibold text-primary-900 mb-4">7. Plugins und Tools</h2>
              
              <h3 className="text-xl font-semibold text-primary-900 mb-3">EmailJS</h3>
              <p className="text-primary-700 mb-4">
                Diese Website nutzt EmailJS, einen E-Mail-Service der EmailJS Inc. (EmailJS, Inc., 1234 Main Street, 
                Suite 100, San Francisco, CA 94105, USA). EmailJS ermöglicht es uns, E-Mails direkt über das 
                Kontaktformular zu versenden, ohne dass Ihre Daten auf unseren Servern gespeichert werden.
              </p>
              <p className="text-primary-700 mb-4">
                <strong>Verarbeitete Daten:</strong><br />
                • Name<br />
                • E-Mail-Adresse<br />
                • Telefonnummer (optional)<br />
                • Nachrichteninhalt<br />
                • IP-Adresse (für Spam-Schutz)
              </p>
              <p className="text-primary-700 mb-4">
                <strong>Zweck der Verarbeitung:</strong><br />
                Die Daten werden verwendet, um Ihre Anfragen über das Kontaktformular zu bearbeiten und 
                Ihnen eine Antwort zukommen zu lassen.
              </p>
              <p className="text-primary-700 mb-4">
                <strong>Rechtsgrundlage:</strong><br />
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) 
                oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung von Anfragen).
              </p>
              <p className="text-primary-700 mb-4">
                <strong>Speicherdauer:</strong><br />
                Die Daten werden nur für die Bearbeitung Ihrer Anfrage verwendet und nicht dauerhaft gespeichert. 
                EmailJS speichert die Daten temporär für den E-Mail-Versand.
              </p>
              <p className="text-primary-700 mb-6">
                <strong>Weitere Informationen:</strong><br />
                Weitere Informationen finden Sie in der Datenschutzerklärung von EmailJS: 
                <a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:text-accent-700">
                  https://www.emailjs.com/legal/privacy-policy/
                </a>
              </p>

              <h3 className="text-xl font-semibold text-primary-900 mb-3">Sanity CMS</h3>
              <p className="text-primary-700 mb-4">
                Diese Website nutzt Sanity CMS, einen Content-Management-Service der Sanity.io AS 
                (Sanity.io AS, Møllergata 6, 0179 Oslo, Norwegen). Sanity wird verwendet, um Inhalte 
                wie Fahrzeugdaten und Website-Inhalte zu verwalten.
              </p>
              <p className="text-primary-700 mb-4">
                <strong>Verarbeitete Daten:</strong><br />
                • Fahrzeugdaten (Marke, Modell, Preis, Bilder)<br />
                • Website-Inhalte<br />
                • Technische Daten zur Inhaltsbereitstellung<br />
                • IP-Adressen (für API-Zugriffe)
              </p>
              <p className="text-primary-700 mb-4">
                <strong>Zweck der Verarbeitung:</strong><br />
                Die Daten werden verwendet, um die Inhalte unserer Website zu verwalten und 
                Fahrzeuginformationen bereitzustellen.
              </p>
              <p className="text-primary-700 mb-4">
                <strong>Rechtsgrundlage:</strong><br />
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse 
                an der Bereitstellung von Website-Inhalten).
              </p>
              <p className="text-primary-700 mb-6">
                <strong>Speicherdauer:</strong><br />
                Inhalte werden so lange gespeichert, wie sie für die Website benötigt werden. 
                Weitere Informationen finden Sie in der Datenschutzerklärung von Sanity: 
                <a href="https://www.sanity.io/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:text-accent-700">
                  https://www.sanity.io/legal/privacy
                </a>
              </p>

              <h3 className="text-xl font-semibold text-primary-900 mb-3">Google Maps</h3>
              <p className="text-primary-700 mb-4">
                Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited 
                ("Google"), Gordon House, Barrow Street, Dublin 4, Irland. Zur Nutzung der Funktionen von 
                Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in 
                der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
              </p>
              <p className="text-primary-700 mb-4">
                <strong>Verarbeitete Daten:</strong><br />
                • IP-Adresse<br />
                • Standortdaten (falls aktiviert)<br />
                • Browser-Informationen<br />
                • Nutzungsdaten der Kartenfunktionen
              </p>
              <p className="text-primary-700 mb-4">
                <strong>Zweck der Verarbeitung:</strong><br />
                Die Daten werden verwendet, um Ihnen eine interaktive Karte mit unserem Standort anzuzeigen 
                und Ihnen die Navigation zu unserem Geschäft zu ermöglichen.
              </p>
              <p className="text-primary-700 mb-4">
                <strong>Rechtsgrundlage:</strong><br />
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse 
                an der Bereitstellung von Standortinformationen).
              </p>
              <p className="text-primary-700 mb-6">
                <strong>Weitere Informationen:</strong><br />
                Weitere Informationen finden Sie in der Datenschutzerklärung von Google: 
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:text-accent-700">
                  https://policies.google.com/privacy
                </a>
              </p>

              <h2 className="text-2xl font-semibold text-primary-900 mb-4">8. Cookies und Tracking</h2>
              <p className="text-primary-700 mb-4">
                Diese Website verwendet minimale Cookies und Tracking-Technologien, die für die Funktionalität 
                und Performance-Optimierung erforderlich sind. Alle verwendeten Technologien sind DSGVO-konform 
                und erfordern keine Einwilligung.
              </p>
              
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Verwendete Technologien</h3>
              
              <h4 className="text-lg font-semibold text-primary-900 mb-2">Vercel Analytics</h4>
              <p className="text-primary-700 mb-4">
                <strong>Zweck:</strong> Anonymisierte Website-Analyse<br />
                <strong>Cookies:</strong> ❌ Keine Cookies verwendet<br />
                <strong>Daten:</strong> Nur anonymisierte Metriken (Seitenaufrufe, Verweildauer)<br />
                <strong>DSGVO:</strong> Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO)
              </p>
              
              <h4 className="text-lg font-semibold text-primary-900 mb-2">Vercel Speed Insights</h4>
              <p className="text-primary-700 mb-4">
                <strong>Zweck:</strong> Performance-Monitoring<br />
                <strong>Cookies:</strong> ❌ Keine Cookies verwendet<br />
                <strong>Daten:</strong> Ladezeiten, Core Web Vitals<br />
                <strong>DSGVO:</strong> Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO)
              </p>
              
              <h4 className="text-lg font-semibold text-primary-900 mb-2">Google Maps (falls aktiviert)</h4>
              <p className="text-primary-700 mb-4">
                <strong>Zweck:</strong> Standortanzeige und Navigation<br />
                <strong>Cookies:</strong> ✅ Funktionale Cookies<br />
                <strong>Daten:</strong> IP-Adresse für Kartendarstellung<br />
                <strong>DSGVO:</strong> Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO)
              </p>
              
              <h4 className="text-lg font-semibold text-primary-900 mb-2">EmailJS</h4>
              <p className="text-primary-700 mb-4">
                <strong>Zweck:</strong> E-Mail-Versand über Kontaktformular<br />
                <strong>Cookies:</strong> ❌ Keine Tracking-Cookies<br />
                <strong>Daten:</strong> Nur für E-Mail-Versand verwendet<br />
                <strong>DSGVO:</strong> Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO)
              </p>
              
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Cookie-Verwaltung</h3>
              <p className="text-primary-700 mb-4">
                <strong>Browser-Einstellungen:</strong><br />
                Sie können Cookies in Ihren Browser-Einstellungen verwalten und löschen. Da wir nur 
                technisch notwendige und anonymisierte Technologien verwenden, ist keine spezielle 
                Cookie-Einstellung erforderlich.
              </p>
              <p className="text-primary-700 mb-6">
                <strong>Wichtiger Hinweis:</strong><br />
                Diese Website verwendet KEINE Tracking-Cookies, die eine Einwilligung erfordern würden. 
                Alle verwendeten Technologien sind DSGVO-konform und dienen der Funktionalität oder 
                anonymisierten Analyse.
              </p>

              <h2 className="text-2xl font-semibold text-primary-900 mb-4">9. Ihre Rechte</h2>
              <p className="text-primary-700 mb-4">
                Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
              </p>
              <ul className="list-disc pl-6 text-primary-700 mb-4">
                <li><strong>Recht auf Auskunft (Art. 15 DSGVO):</strong> Sie haben das Recht, Auskunft über die von uns verarbeiteten personenbezogenen Daten zu verlangen.</li>
                <li><strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie haben das Recht auf Berichtigung unrichtiger oder Vervollständigung unvollständiger Daten.</li>
                <li><strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Sie haben das Recht auf Löschung Ihrer personenbezogenen Daten.</li>
                <li><strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie haben das Recht auf Einschränkung der Verarbeitung Ihrer Daten.</li>
                <li><strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</li>
                <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie haben das Recht, der Verarbeitung Ihrer personenbezogenen Daten zu widersprechen.</li>
                <li><strong>Recht auf Widerruf der Einwilligung:</strong> Sie können eine erteilte Einwilligung jederzeit widerrufen.</li>
                <li><strong>Beschwerderecht bei der Aufsichtsbehörde:</strong> Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.</li>
              </ul>
              <p className="text-primary-700 mb-6">
                <strong>Widerruf Ihrer Einwilligung zur Datenverarbeitung:</strong><br />
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. 
                Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine 
                formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten 
                Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>

              <h2 className="text-2xl font-semibold text-primary-900 mb-4">10. Beschwerderecht bei der Aufsichtsbehörde</h2>
              <p className="text-primary-700 mb-6">
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer 
                Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres 
                Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht 
                unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                <br /><br />
                <strong>Zuständige Aufsichtsbehörde:</strong><br />
                Landesbeauftragte für den Datenschutz Niedersachsen<br />
                Prinzenstraße 5<br />
                30159 Hannover<br />
                Telefon: +49 511 120-4500<br />
                E-Mail: poststelle@lfd.niedersachsen.de<br />
                Website: <a href="https://www.lfd.niedersachsen.de" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:text-accent-700">https://www.lfd.niedersachsen.de</a>
              </p>

              <h2 className="text-2xl font-semibold text-primary-900 mb-4">11. SSL- bzw. TLS-Verschlüsselung</h2>
              <p className="text-primary-700 mb-6">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, 
                wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine 
                SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die 
                Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in 
                Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, 
                die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
              </p>

              <h2 className="text-2xl font-semibold text-primary-900 mb-4">12. Änderungen dieser Datenschutzerklärung</h2>
              <p className="text-primary-700 mb-6">
                Wir behalten uns vor, diese Datenschutzerklärung zu aktualisieren, um sie an geänderte 
                Rechtslagen oder bei Änderungen unserer Leistungen sowie der Datenverarbeitung anzupassen. 
                Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
              </p>

              <div className="bg-accent-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-900 mb-3">Kontakt bei Datenschutzfragen</h3>
                <p className="text-primary-700">
                  Bei Fragen zum Datenschutz wenden Sie sich bitte an:<br />
                  <strong>E-Mail:</strong> <a href="mailto:info@sham-automobile.de" className="hover:text-accent-600">info@sham-automobile.de</a><br />
                  <strong>Telefon:</strong> <a href="tel:+491725413020" className="hover:text-accent-600">+49 172 541 30 20</a><br />
                  <strong>Adresse:</strong> Sham-Auto Mobile, Walsroder Straße 237, 30855 Langenhagen
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
