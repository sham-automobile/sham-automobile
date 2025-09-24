import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum von Sham-Auto Mobile - Angaben gemäß § 5 TMG',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-primary-900 mb-8">Impressum</h1>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-primary-900 mb-4">Angaben gemäß § 5 TMG</h2>
              
              <div className="bg-primary-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Sham-Auto Mobile</h3>
                <div className="space-y-2 text-primary-700">
                  <p><strong>Inhaber:</strong> Noorullah Sham</p>
                  <p><strong>Berufsbezeichnung:</strong> Gebrauchtwagenhändler</p>
                  <p><strong>Adresse:</strong> Walsroder Straße 237<br />30855 Langenhagen</p>
                  <p><strong>Telefon:</strong> <a href="tel:+491725413020" className="hover:text-accent-600">+49 172 541 30 20</a></p>
                  <p><strong>E-Mail:</strong> <a href="mailto:info@sham-automobile.de" className="hover:text-accent-600">info@sham-automobile.de</a></p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-primary-900 mb-4">Umsatzsteuer-ID</h2>
              <p className="text-primary-700 mb-6">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                <strong>DE253537933</strong>
              </p>

              <h2 className="text-2xl font-semibold text-primary-900 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p className="text-primary-700 mb-6">
                Noorullah Sham<br />
                Walsroder Straße 237<br />
                30855 Langenhagen
              </p>

              <h2 className="text-2xl font-semibold text-primary-900 mb-4">EU-Streitschlichtung</h2>
              <p className="text-primary-700 mb-6">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:text-accent-700">
                  https://ec.europa.eu/consumers/odr/
                </a>
                <br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>

              <h2 className="text-2xl font-semibold text-primary-900 mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
              <p className="text-primary-700 mb-6">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>

              <h2 className="text-2xl font-semibold text-primary-900 mb-4">Haftung für Inhalte</h2>
              <p className="text-primary-700 mb-4">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte 
                fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
                rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="text-primary-700 mb-6">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den 
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch 
                erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei 
                Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>

              <h2 className="text-2xl font-semibold text-primary-900 mb-4">Haftung für Links</h2>
              <p className="text-primary-700 mb-4">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf 
                mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der 
                Verlinkung nicht erkennbar.
              </p>
              <p className="text-primary-700 mb-6">
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete 
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen 
                werden wir derartige Links umgehend entfernen.
              </p>

              <h2 className="text-2xl font-semibold text-primary-900 mb-4">Urheberrecht</h2>
              <p className="text-primary-700 mb-6">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der 
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung 
                des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den 
                privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p className="text-primary-700 mb-6">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die 
                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. 
                Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen 
                entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige 
                Inhalte umgehend entfernen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
