# Sham Automobile - Gebrauchtwagenhändler Website

Eine moderne, responsive Next.js-Website für Sham Automobile, einen Gebrauchtwagenhändler in Langenhagen (Hannover).

## 🚀 Features

- **Modernes Design**: Clean, professionell und responsive (mobile-first)
- **SEO-optimiert**: Meta-Tags, Open Graph, strukturierte Daten, Sitemap
- **Performance**: Bild-Optimierung, lazy-loading, Code-Splitting
- **Accessibility**: Kontraste, semantisches HTML, ARIA-Labels
- **CMS Integration**: Sanity für Fahrzeugverwaltung
- **TypeScript**: Vollständig typisiert für bessere Entwicklererfahrung
- **Tailwind CSS**: Utility-first CSS Framework

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Sprache**: TypeScript
- **Styling**: Tailwind CSS v3
- **CMS**: Sanity
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Notifications**: React Hot Toast

## 📁 Projektstruktur

```
sham.automobile/
├── app/                    # Next.js App Router
│   ├── globals.css        # Globale Styles
│   ├── layout.tsx         # Root Layout
│   ├── page.tsx           # Homepage
│   ├── kaufen/            # Fahrzeug-Listing
│   ├── verkaufen/         # Verkaufsformular
│   ├── ueber-uns/         # Über uns Seite
│   ├── kontakt/           # Kontaktseite
│   ├── robots.txt         # SEO
│   ├── sitemap.ts         # Sitemap
│   └── not-found.tsx      # 404 Seite
├── components/            # React Komponenten
│   ├── Header.tsx         # Navigation
│   ├── Footer.tsx         # Footer
│   ├── Hero.tsx           # Hero Section
│   ├── VehicleCard.tsx    # Fahrzeugkarte
│   ├── FilterBar.tsx      # Filter
│   ├── ContactForm.tsx    # Kontaktformular
│   ├── SellerForm.tsx     # Verkaufsformular
│   └── SEO.tsx            # SEO Komponente
├── lib/                   # Utilities
│   └── sanity.ts          # Sanity Client & Queries
├── schemas/               # Sanity Schemas
│   ├── vehicle.ts         # Fahrzeug Schema
│   ├── testimonial.ts     # Kundenstimmen
│   ├── sellerLead.ts      # Verkäufer-Anfragen
│   └── siteSettings.ts    # Website-Einstellungen
├── types/                 # TypeScript Typen
│   ├── vehicle.ts         # Fahrzeug-Typen
│   ├── testimonial.ts     # Testimonial-Typen
│   └── site.ts            # Website-Typen
└── sanity.config.ts       # Sanity Konfiguration
```

## 🚀 Setup & Installation

### 1. Repository klonen

```bash
git clone <repository-url>
cd sham.automobile
```

### 2. Dependencies installieren

```bash
npm install
# oder
pnpm install
# oder
yarn install
```

### 3. Environment Variables

Kopieren Sie die Beispiel-Umgebungsvariablen:

```bash
cp env.example .env.local
```

Bearbeiten Sie `.env.local` mit Ihren Werten:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=your_read_token
SANITY_API_WRITE_TOKEN=your_write_token

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://sham-automobile.de
NEXT_PUBLIC_SITE_NAME=Sham Automobile

# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL=info@sham-automobile.de
NEXT_PUBLIC_CONTACT_PHONE=+491725413020
NEXT_PUBLIC_CONTACT_ADDRESS=Walsroder Straße 237, 30855 Langenhagen

# Google Maps (optional)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

### 4. Sanity CMS einrichten

#### 4.1 Sanity Projekt erstellen

1. Gehen Sie zu [sanity.io](https://sanity.io)
2. Erstellen Sie ein neues Projekt
3. Wählen Sie "Blog" Template (kann später angepasst werden)
4. Notieren Sie sich die Project ID

#### 4.2 Sanity Studio starten

```bash
npm run sanity:studio
```

Das Sanity Studio öffnet sich unter `http://localhost:3333`

#### 4.3 API Token erstellen

1. Gehen Sie zu [sanity.io/manage](https://sanity.io/manage)
2. Wählen Sie Ihr Projekt
3. Gehen Sie zu "API" → "Tokens"
4. Erstellen Sie einen neuen Token mit "Read" und "Write" Berechtigungen

### 5. Entwicklungsserver starten

```bash
npm run dev
```

Die Website ist jetzt unter `http://localhost:3000` verfügbar.

## 📝 Verfügbare Scripts

```bash
# Entwicklungsserver
npm run dev

# Production Build
npm run build

# Production Server
npm run start

# Linting
npm run lint

# Code Formatting
npm run format

# Type Checking
npm run type-check

# Sanity Studio
npm run sanity:studio

# Sanity Deploy
npm run sanity:deploy
```

## 🚀 Deployment auf Vercel

### 1. GitHub Repository erstellen

1. Erstellen Sie ein neues Repository auf GitHub
2. Pushen Sie Ihren Code:

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. Vercel Projekt erstellen

1. Gehen Sie zu [vercel.com](https://vercel.com)
2. Melden Sie sich mit Ihrem GitHub Account an
3. Klicken Sie auf "New Project"
4. Wählen Sie Ihr Repository aus
5. Klicken Sie auf "Import"

### 3. Environment Variables in Vercel setzen

In den Vercel Project Settings → Environment Variables:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=your_read_token
SANITY_API_WRITE_TOKEN=your_write_token
NEXT_PUBLIC_SITE_URL=https://sham-automobile.de
NEXT_PUBLIC_SITE_NAME=Sham Automobile
NEXT_PUBLIC_CONTACT_EMAIL=info@sham-automobile.de
NEXT_PUBLIC_CONTACT_PHONE=+491725413020
NEXT_PUBLIC_CONTACT_ADDRESS=Walsroder Straße 237, 30855 Langenhagen
```

### 4. Domain konfigurieren

1. In Vercel Project Settings → Domains
2. Fügen Sie Ihre Domain hinzu: `sham-automobile.de`
3. Folgen Sie den DNS-Anweisungen

#### DNS-Einstellungen

Fügen Sie einen CNAME-Record hinzu:
- **Name**: `www`
- **Value**: `cname.vercel-dns.com`

Oder einen A-Record:
- **Name**: `@`
- **Value**: `76.76.19.61`

## 🔍 SEO & Google Setup

### 1. Google Search Console

1. Gehen Sie zu [search.google.com/search-console](https://search.google.com/search-console)
2. Fügen Sie Ihre Domain hinzu
3. Verifizieren Sie die Domain (HTML-Tag oder DNS)
4. Fügen Sie die Sitemap hinzu: `https://sham-automobile.de/sitemap.xml`

### 2. Google Business Profile

1. Gehen Sie zu [business.google.com](https://business.google.com)
2. Erstellen Sie ein Business Profile für Sham Automobile
3. Verwenden Sie die Kontaktdaten:
   - **Name**: Sham Automobile
   - **Adresse**: Walsroder Straße 237, 30855 Langenhagen
   - **Telefon**: +49 172 5413020
   - **E-Mail**: info@sham-automobile.de
   - **Website**: https://sham-automobile.de

### 3. Strukturierte Daten

Die Website enthält bereits strukturierte Daten für:
- LocalBusiness (Footer)
- Car (Fahrzeug-Detailseiten)
- Organization (Header)

## 📱 Content Management

### Fahrzeuge hinzufügen

1. Öffnen Sie das Sanity Studio: `npm run sanity:studio`
2. Gehen Sie zu "Fahrzeuge"
3. Klicken Sie auf "Create"
4. Füllen Sie alle Felder aus:
   - Titel, Marke, Modell, Baujahr
   - Preis, Kilometerstand, Getriebe, Kraftstoff
   - Bilder hochladen
   - Beschreibung
   - Als "Empfohlen" markieren (optional)

### Kundenstimmen hinzufügen

1. Gehen Sie zu "Kundenstimmen"
2. Erstellen Sie neue Testimonials
3. Markieren Sie wichtige als "Auf Startseite anzeigen"

## 🎨 Anpassungen

### Farben ändern

Bearbeiten Sie `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Ihre Farben hier
      }
    }
  }
}
```

### Inhalte anpassen

- **Kontaktdaten**: `env.example` und Environment Variables
- **Texte**: Direkt in den Komponenten oder über Sanity
- **Bilder**: Über Sanity Studio oder `/public` Ordner

## 📋 Checkliste vor Go-Live

- [ ] Alle Environment Variables gesetzt
- [ ] Sanity CMS konfiguriert und getestet
- [ ] Domain in Vercel konfiguriert
- [ ] DNS-Einstellungen korrekt
- [ ] Google Search Console eingerichtet
- [ ] Google Business Profile erstellt
- [ ] Impressum und Datenschutzerklärung erstellt
- [ ] Echte Fahrzeugdaten in Sanity eingepflegt
- [ ] Kontaktformular getestet
- [ ] Mobile Responsiveness getestet
- [ ] Performance optimiert
- [ ] SSL-Zertifikat aktiv (automatisch bei Vercel)

## 🆘 Support & Troubleshooting

### Häufige Probleme

**Sanity Studio öffnet sich nicht:**
```bash
npm install -g @sanity/cli
sanity login
npm run sanity:studio
```

**Build-Fehler:**
```bash
npm run type-check
npm run lint
```

**Environment Variables nicht geladen:**
- Überprüfen Sie `.env.local` Datei
- Starten Sie den Dev-Server neu
- Überprüfen Sie Vercel Environment Variables

### Performance-Optimierung

- Bilder über Sanity optimieren
- Next.js Image-Komponente verwenden
- Lazy Loading aktiviert
- Code-Splitting automatisch

## 📄 Lizenz

Dieses Projekt ist für Sham Automobile entwickelt worden.

## 👥 Kontakt

Bei Fragen oder Problemen wenden Sie sich an:
- **E-Mail**: info@sham-automobile.de
- **Telefon**: +49 172 5413020

---

**Viel Erfolg mit Ihrer neuen Website! 🚗✨**
