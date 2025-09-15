import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Allgemeine Geschäftsbedingungen',
  description: 'AGB von Sham Automobile - Allgemeine Geschäftsbedingungen für den Kauf und Verkauf von Gebrauchtwagen',
  robots: {
    index: false,
    follow: false,
  },
}

export default function AGBPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-primary-900 mb-8">Allgemeine Geschäftsbedingungen</h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-primary-50 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-semibold text-primary-900 mb-4">Sham Automobile</h2>
                <div className="space-y-2 text-primary-700">
                  <p><strong>Inhaber:</strong> Herr Sham</p>
                  <p><strong>Adresse:</strong> Walsroder Straße 237<br />30855 Langenhagen</p>
                  <p><strong>Telefon:</strong> <a href="tel:+491725413020" className="hover:text-accent-600">+49 172 541 30 20</a></p>
                  <p><strong>E-Mail:</strong> <a href="mailto:info@sham-automobile.de" className="hover:text-accent-600">info@sham-automobile.de</a></p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-primary-900 mb-4">§ 1 Geltungsbereich</h2>
              <p className="text-primary-700 mb-6">
                Diese Allgemeinen Geschäftsbedingungen gelten für alle Geschäfte zwischen Sham Automobile 
                und seinen Kunden. Abweichende, entgegenstehende oder ergänzende AGB des Kunden werden nicht 
                Vertragsbestandteil, es sei denn, ihrer Geltung wird ausdrücklich schriftlich zugestimmt.
              </p>

              <h2 className="text-2xl font-semibold text-primary-900 mb-4">§ 2 Vertragspartner</h2>
              <p className="text-primary-700 mb-6">
                Vertragspartner ist Sham Automobile, vertreten durch Herrn Sham, Walsroder Straße 237, 
                30855 Langenhagen. Alle Angebote und Verträge richten sich an Verbraucher und Unternehmer.
              </p>

              <h2 className="text-2xl font-semibold text-primary-900 mb-4">§ 3 Angebote und Vertragsschluss</h2>
              <p className="text-primary-700 mb-4">
                <strong>3.1</strong> Alle auf der Website dargestellten Fahrzeuge sind freibleibende Angebote. 
                Sham Automobile behält sich das Recht vor, Fahrzeuge vor Vertragsschluss zu verkaufen.
              </p>
              <p className="text-primary-700 mb-4">
                <strong>3.2</strong> Der Vertrag kommt durch schriftliche Bestätigung oder durch Übergabe des 
                Fahrzeugs zustande. Mündliche Nebenabreden bedürfen der schriftlichen Bestätigung.
              </p>
              <p className="text-primary-700 mb-6">
                <strong>3.3</strong> Alle Angaben zu Fahrzeugen erfolgen nach bestem Wissen und Gewissen. 
                Irrtümer und Druckfehler bleiben vorbehalten.
              </p>

              <h2 className="text-2xl font-semibold text-primary-900 mb-4">§ 4 Preise und Zahlungsbedingungen</h2>
              <p className="text-primary-700 mb-4">
                <strong>4.1</strong> Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer. 
                Zusätzliche Kosten wie Überführungskosten, Zulassungskosten etc. werden gesondert ausgewiesen.
              </p>
              <p className="text-primary-700 mb-4">
                <strong>4.2</strong> Die Zahlung erfolgt bei Übergabe des Fahrzeugs gegen Barzahlung oder 
                durch Überweisung auf das angegebene Bankkonto.
              </p>
              <p className="text-primary-700 mb-6">
                <strong>4.3</strong> Bei Finanzierung über Dritte gelten die Bedingungen des jeweiligen 
                Finanzierungsinstituts.
              </p>

              <h2 className="text-2xl font-semibold text-primary-900 mb-4">§ 5 Lieferung und Übergabe</h2>
              <p className="text-primary-700 mb-4">
                <strong>5.1</strong> Die Übergabe des Fahrzeugs erfolgt nach vollständiger Zahlung des 
                Kaufpreises und Erfüllung aller vertraglichen Verpflichtungen.
              </p>
              <p className="text-primary-700 mb-4">
                <strong>5.2</strong> Bei der Übergabe wird das Fahrzeug in dem Zustand übergeben, in dem es 
                sich zum Zeitpunkt der Besichtigung befand.
              </p>
              <p className="text-primary-700 mb-6">
                <strong>5.3</strong> Der Käufer verpflichtet sich, das Fahrzeug unverzüglich nach Übergabe 
                auf seine Kosten zuzulassen und zu versichern.
              </p>

              <h2 className="text-2xl font-semibold text-primary-900 mb-4">§ 6 Gewährleistung</h2>
              <p className="text-primary-700 mb-4">
                <strong>6.1</strong> Sham Automobile gewährt auf alle verkauften Fahrzeuge eine Gewährleistung 
                nach den gesetzlichen Bestimmungen.
              </p>
              <p className="text-primary-700 mb-4">
                <strong>6.2</strong> Bei gebrauchten Fahrzeugen beträgt die Gewährleistungsfrist 12 Monate 
                ab Übergabe, soweit nicht gesetzlich etwas anderes bestimmt ist.
              </p>
              <p className="text-primary-700 mb-4">
                <strong>6.3</strong> Von der Gewährleistung ausgeschlossen sind:
              </p>
              <ul className="list-disc pl-6 text-primary-700 mb-4">
                <li>Verschleißteile (Bremsbeläge, Reifen, Batterie, etc.)</li>
                <li>Schäden durch unsachgemäße Behandlung oder Wartung</li>
                <li>Schäden durch Unfälle oder höhere Gewalt</li>
                <li>Schäden durch unsachgemäße Reparaturen durch Dritte</li>
              </ul>
              <p className="text-primary-700 mb-6">
                <strong>6.4</strong> Bei Gewährleistungsfällen hat Sham Automobile das Recht zur Nacherfüllung 
                durch Reparatur oder Ersatzlieferung.
              </p>

              <h2 className="text-2xl font-semibold text-primary-900 mb-4">§ 7 Haftung</h2>
              <p className="text-primary-700 mb-4">
                <strong>7.1</strong> Sham Automobile haftet nur für Schäden, die auf Vorsatz oder grober 
                Fahrlässigkeit beruhen, soweit nicht zwingende gesetzliche Haftungsbestimmungen entgegenstehen.
              </p>
              <p className="text-primary-700 mb-6">
                <strong>7.2</strong> Die Haftung für leichte Fahrlässigkeit ist auf den vorhersehbaren, 
                vertragstypischen Schaden begrenzt.
              </p>

              <h2 className="text-2xl font-semibold text-primary-900 mb-4">§ 8 Rücktritt und Widerruf</h2>
              <p className="text-primary-700 mb-4">
                <strong>8.1</strong> Der Käufer kann vom Vertrag zurücktreten, wenn Sham Automobile in 
                Verzug gerät und nach Fristsetzung zur Leistung diese nicht erbringt.
              </p>
              <p className="text-primary-700 mb-4">
                <strong>8.2</strong> Bei Verbrauchern gilt das gesetzliche Widerrufsrecht nach Maßgabe der 
                gesetzlichen Bestimmungen.
              </p>
              <p className="text-primary-700 mb-6">
                <strong>8.3</strong> Bei Rücktritt oder Widerruf hat Sham Automobile das Recht, eine 
                angemessene Nutzungsentschädigung zu verlangen.
              </p>

              <h2 className="text-2xl font-semibold text-primary-900 mb-4">§ 9 Eigentumsvorbehalt</h2>
              <p className="text-primary-700 mb-6">
                Das verkaufte Fahrzeug bleibt bis zur vollständigen Zahlung des Kaufpreises im Eigentum 
                von Sham Automobile. Bei Zahlungsverzug ist Sham Automobile berechtigt, das Fahrzeug 
                zurückzufordern.
              </p>

              <h2 className="text-2xl font-semibold text-primary-900 mb-4">§ 10 Datenschutz</h2>
              <p className="text-primary-700 mb-6">
                Sham Automobile verpflichtet sich, die Bestimmungen des Bundesdatenschutzgesetzes und 
                der DSGVO einzuhalten. Nähere Informationen finden Sie in unserer Datenschutzerklärung.
              </p>

              <h2 className="text-2xl font-semibold text-primary-900 mb-4">§ 11 Schlussbestimmungen</h2>
              <p className="text-primary-700 mb-4">
                <strong>11.1</strong> Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, 
                bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
              </p>
              <p className="text-primary-700 mb-4">
                <strong>11.2</strong> Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.
              </p>
              <p className="text-primary-700 mb-4">
                <strong>11.3</strong> Gerichtsstand ist Langenhagen, soweit der Kunde Kaufmann, juristische 
                Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
              </p>
              <p className="text-primary-700 mb-6">
                <strong>11.4</strong> Sham Automobile behält sich das Recht vor, diese AGB jederzeit zu 
                ändern. Maßgeblich ist die zum Zeitpunkt des Vertragsschlusses gültige Fassung.
              </p>

              <div className="bg-accent-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-900 mb-3">Kontakt</h3>
                <p className="text-primary-700">
                  Bei Fragen zu diesen AGB wenden Sie sich bitte an:<br />
                  <strong>E-Mail:</strong> <a href="mailto:info@sham-automobile.de" className="hover:text-accent-600">info@sham-automobile.de</a><br />
                  <strong>Telefon:</strong> <a href="tel:+491725413020" className="hover:text-accent-600">+49 172 541 30 20</a>
                </p>
              </div>

              <p className="text-sm text-gray-500 mt-8">
                Stand: Januar 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
