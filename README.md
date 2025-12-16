# Federica Vendruscolo PT - Landing Page

Una landing page moderna e ottimizzata per conversioni per Federica Vendruscolo, Personal Trainer specializzata in allenamenti funzionali per donne.

## 🚀 Caratteristiche

- **Design Moderno**: Interfaccia elegante e professionale con palette colori personalizzata
- **Animazioni Fluide**: Framer Motion per transizioni e micro-interazioni
- **Responsive Design**: Ottimizzato per tutti i dispositivi (mobile-first)
- **Accessibilità**: Conforme alle linee guida WCAG 2.1
- **Performance**: Ottimizzato per velocità e SEO
- **Form Validazione**: React Hook Form con Zod per validazione robusta
- **Carousel Interattivo**: Sezione testimonianze con navigazione fluida
- **FAQ Accordion**: Sezione domande frequenti con animazioni

## 🛠 Stack Tecnologico

- **Next.js 15.4+**: Framework React con App Router
- **Tailwind CSS 4.1+**: Utility-first CSS framework
- **Framer Motion 12+**: Libreria per animazioni
- **Heroicons 2.1+**: Icone SVG ottimizzate
- **React Hook Form**: Gestione form con validazione
- **Zod**: Schema validation
- **TypeScript**: Type safety

## 📦 Installazione

1. **Clona il repository**
   ```bash
   git clone <repository-url>
   cd federica-vendruscolo-landing
   ```

2. **Installa le dipendenze**
   ```bash
   npm install
   ```

3. **Configura le variabili d'ambiente**
   Crea un file `.env.local` nella root del progetto:
   ```env
   N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/your-webhook-id
   ```
   > **Nota**: Vedi `N8N_SETUP.md` per istruzioni dettagliate su come configurare N8n e ottenere l'URL del webhook.

4. **Avvia il server di sviluppo**
   ```bash
   npm run dev
   ```

5. **Apri il browser**
   Naviga su [http://localhost:3000](http://localhost:3000)

## 🎨 Personalizzazione

### Colori
I colori sono definiti in `tailwind.config.ts`:
- **Primary**: `#E91E63` (Rosa energico)
- **Secondary**: `#1A1A1A` (Nero elegante)
- **Accent**: `#FFD700` (Oro/Champagne)
- **Light**: `#FFF0F5` (Rosa tenue)

### Font
- **Headings**: Montserrat (Bold 700-800)
- **Body**: Inter (Regular 400)

### Contenuti
Tutti i testi sono definiti nei componenti individuali e possono essere facilmente modificati.

## 📱 Sezioni della Landing Page

1. **Hero Section**: Video background con CTA principale
2. **Chi Siamo**: Presentazione con statistiche animate
3. **Vantaggi**: 4 box con benefici del servizio
4. **Testimonianze**: Carousel con recensioni clienti
5. **Contatto**: Form con validazione completa
6. **FAQ**: Accordion con domande frequenti
7. **CTA Finale**: Call-to-action conclusiva
8. **Footer**: Links e informazioni di contatto

## 🎯 Funzionalità Avanzate

### Animazioni
- **Scroll Progress Bar**: Barra di progresso durante lo scroll
- **Intersection Observer**: Animazioni triggerate al scroll
- **Micro-interazioni**: Hover effects e transizioni fluide
- **Loading Screen**: Schermata di caricamento animata

### Form di Contatto
- Validazione real-time con Zod
- Stati di caricamento e feedback
- Messaggi di successo/errore
- Campi obbligatori con indicazioni visive
- **Integrazione N8n**: I dati del form vengono inviati automaticamente a N8n tramite webhook
- **Google Sheets**: Configura N8n per salvare i dati su Google Sheets (vedi `N8N_SETUP.md`)

### Carousel Testimonianze
- Navigazione con frecce e dots
- Animazioni fluide tra slide
- Responsive (3 colonne desktop, 1 mobile)
- Auto-pause su hover

## 🔧 Script Disponibili

```bash
npm run dev      # Server di sviluppo
npm run build    # Build di produzione
npm run start    # Server di produzione
npm run lint     # Linting del codice
```

## 📈 Ottimizzazioni SEO

- Meta tags ottimizzati
- Schema.org markup
- Open Graph per social sharing
- Sitemap automatica
- Performance ottimizzate

## ♿ Accessibilità

- Navigazione da tastiera
- Screen reader friendly
- Contrasti conformi WCAG
- Focus states visibili
- ARIA labels appropriati

## 🔗 Integrazione N8n e Google Sheets

Il form di contatto è integrato con N8n per automatizzare il salvataggio dei dati su Google Sheets.

### Setup Rapido

1. **Configura N8n**: Segui la guida completa in `N8N_SETUP.md`
2. **Ottieni l'URL del webhook** dal workflow N8n
3. **Aggiungi la variabile d'ambiente**:
   ```env
   N8N_WEBHOOK_URL=https://tuo-n8n-instance.com/webhook/tuo-webhook-id
   ```
4. **Per produzione**: Aggiungi la variabile anche nelle impostazioni del tuo provider di hosting (es: Vercel)

### Documentazione Completa

Vedi `N8N_SETUP.md` per:
- Configurazione passo-passo di N8n
- Setup Google Sheets
- Troubleshooting
- Esempi di workflow avanzati

## 🚀 Deploy

### Vercel (Raccomandato)
```bash
npm run build
# Deploy automatico con Vercel CLI
```

**Importante**: Ricorda di aggiungere la variabile `N8N_WEBHOOK_URL` nelle impostazioni di Vercel:
1. Vai su Vercel Dashboard → Il tuo progetto → Settings → Environment Variables
2. Aggiungi `N8N_WEBHOOK_URL` con il valore del tuo webhook N8n
3. Riavvia il deployment

### Altri provider
```bash
npm run build
npm run start
```

## 📞 Supporto

Per domande o supporto tecnico, contatta:
- **Email**: info@federicavendruscolo.pt
- **Instagram**: @federicavendruscolo.pt

## 📄 Licenza

© 2024 Federica Vendruscolo - Tutti i diritti riservati
Website by Meraviglia Lab

