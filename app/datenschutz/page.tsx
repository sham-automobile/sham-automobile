import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutz',
  description: 'Datenschutzerklärung von Sham Automobile - Informationen zum Umgang mit Ihren Daten',
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
                Die Erfassung und Verarbeitung Ihrer Daten erfolgt ausschließlich in der EU und wird von 
                unserem Hosting-Anbieter durchgeführt. Weitere Informationen entnehmen Sie der 
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
                  Sham Automobile<br />
                  Herr Sham<br />
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

              <h2 className="text-2xl font-semibold text-primary-900 mb-4">6. Newsletter</h2>
              <p className="text-primary-700 mb-6">
                Diese Website bietet keinen Newsletter-Service an. Falls in Zukunft ein Newsletter angeboten 
                wird, werden Sie hierüber informiert und können entsprechend einwilligen oder widersprechen.
              </p>

              <h2 className="text-2xl font-semibold text-primary-900 mb-4">7. Plugins und Tools</h2>
              
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Google Maps</h3>
              <p className="text-primary-700 mb-6">
                Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited 
                ("Google"), Gordon House, Barrow Street, Dublin 4, Irland. Zur Nutzung der Funktionen von 
                Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in 
                der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter 
                dieser Seite hat keinen Einfluss auf diese Datenübertragung.
              </p>

              <h2 className="text-2xl font-semibold text-primary-900 mb-4">8. eRecht24 Safe Sharing</h2>
              <p className="text-primary-700 mb-6">
                Diese Datenschutzerklärung wurde mit dem Datenschutzerklärungs-Generator der eRecht24 erstellt.
              </p>

              <h2 className="text-2xl font-semibold text-primary-900 mb-4">9. Ihre Rechte</h2>
              <p className="text-primary-700 mb-4">
                Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
              </p>
              <ul className="list-disc pl-6 text-primary-700 mb-6">
                <li>Recht auf Auskunft über die verarbeiteten Daten</li>
                <li>Recht auf Berichtigung unrichtiger Daten</li>
                <li>Recht auf Löschung der Daten</li>
                <li>Recht auf Einschränkung der Verarbeitung</li>
                <li>Recht auf Datenübertragbarkeit</li>
                <li>Widerspruchsrecht gegen die Verarbeitung</li>
                <li>Recht auf Widerruf der Einwilligung</li>
                <li>Beschwerderecht bei der Aufsichtsbehörde</li>
              </ul>

              <div className="bg-accent-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-900 mb-3">Kontakt bei Datenschutzfragen</h3>
                <p className="text-primary-700">
                  Bei Fragen zum Datenschutz wenden Sie sich bitte an:<br />
                  <strong>E-Mail:</strong> <a href="mailto:info@sham-automobile.de" className="hover:text-accent-600">info@sham-automobile.de</a><br />
                  <strong>Telefon:</strong> <a href="tel:+491725413020" className="hover:text-accent-600">+49 172 541 30 20</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
