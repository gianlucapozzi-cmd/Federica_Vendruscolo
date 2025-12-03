# 🚀 Guida alla Pubblicazione - Landing Page Federica Vendruscolo

## 📋 Checklist Pre-Pubblicazione

Prima di pubblicare, assicurati di aver completato:

- [x] Build del progetto testato localmente
- [ ] Contenuti finali verificati (testi, immagini, video)
- [ ] Form di contatto configurato (se necessario backend)
- [ ] Link e URL verificati
- [ ] Test su dispositivi mobile e desktop

---

## 🎯 Opzione 1: Vercel (RACCOMANDATO - Più Semplice)

Vercel è la piattaforma ideale per Next.js perché:
- ✅ Setup automatico
- ✅ Deploy gratuito
- ✅ HTTPS incluso
- ✅ CDN globale
- ✅ Deploy automatico ad ogni push

### Passi per pubblicare su Vercel:

#### 1. Prepara il progetto Git (se non l'hai già fatto)

```bash
# Inizializza Git (se non già fatto)
git init

# Aggiungi tutti i file
git add .

# Crea il primo commit
git commit -m "Initial commit - Landing page ready for deployment"
```

#### 2. Crea un repository su GitHub

1. Vai su [github.com](https://github.com)
2. Clicca su "New repository"
3. Dai un nome (es: `federica-vendruscolo-landing`)
4. **NON** inizializzare con README (hai già i file)
5. Clicca "Create repository"

#### 3. Collega il repository locale a GitHub

```bash
# Sostituisci USERNAME e REPO_NAME con i tuoi
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

#### 4. Deploy su Vercel

1. Vai su [vercel.com](https://vercel.com)
2. Clicca "Sign Up" (puoi usare GitHub per login rapido)
3. Clicca "Add New Project"
4. Seleziona il repository GitHub che hai appena creato
5. Vercel rileverà automaticamente Next.js
6. **IMPORTANTE**: Verifica queste impostazioni:
   - **Framework Preset**: Next.js (dovrebbe essere automatico)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)
7. Clicca "Deploy"
8. Attendi 2-3 minuti per il deploy
9. ✅ **Fatto!** Riceverai un URL tipo: `https://federica-vendruscolo-landing.vercel.app`

#### 5. Configura un dominio personalizzato (Opzionale)

Se hai un dominio (es: `federicavendruscolo.pt`):

1. Vai su Vercel Dashboard → Il tuo progetto → Settings → Domains
2. Aggiungi il tuo dominio
3. Segui le istruzioni per configurare i DNS del tuo dominio

---

## 🌐 Opzione 2: Netlify

### Passi per pubblicare su Netlify:

1. Vai su [netlify.com](https://netlify.com) e registrati
2. Clicca "Add new site" → "Import an existing project"
3. Connetti il tuo repository GitHub
4. Configura le impostazioni:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
5. Clicca "Deploy site"

**Nota**: Per Netlify, potrebbe essere necessario creare un file `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 🖥️ Opzione 3: Server Proprio (VPS/Hosting)

Se hai un server VPS o hosting tradizionale:

### 1. Build del progetto

```bash
npm run build
```

### 2. Avvia il server di produzione

```bash
npm run start
```

Il sito sarà disponibile su `http://localhost:3000`

### 3. Usa PM2 per gestire il processo (raccomandato)

```bash
# Installa PM2 globalmente
npm install -g pm2

# Avvia l'applicazione
pm2 start npm --name "federica-landing" -- start

# Salva la configurazione
pm2 save

# Configura PM2 per avviarsi al boot
pm2 startup
```

### 4. Configura Nginx come reverse proxy (opzionale)

```nginx
server {
    listen 80;
    server_name federicavendruscolo.pt;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## ⚙️ Configurazioni Opzionali

### Variabili d'Ambiente

Se in futuro avrai bisogno di variabili d'ambiente (es: API keys), crea un file `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://federicavendruscolo.pt
NEXT_PUBLIC_CONTACT_EMAIL=info@federicavendruscolo.pt
```

**Su Vercel**: Vai su Settings → Environment Variables e aggiungi le variabili.

### Ottimizzazioni Post-Deploy

1. **Google Search Console**: Aggiungi il sito per indicizzazione
2. **Google Analytics**: Aggiungi il tracking code (se necessario)
3. **Sitemap**: Next.js genera automaticamente `/sitemap.xml`
4. **Robots.txt**: Verifica che sia accessibile

---

## ✅ Checklist Post-Pubblicazione

Dopo aver pubblicato, verifica:

- [ ] Il sito è accessibile dall'URL pubblico
- [ ] Tutte le immagini si caricano correttamente
- [ ] Il form di contatto funziona (se configurato)
- [ ] Il sito è responsive su mobile
- [ ] Le animazioni funzionano correttamente
- [ ] La velocità di caricamento è accettabile
- [ ] Test su browser diversi (Chrome, Firefox, Safari)
- [ ] Test su dispositivi diversi (mobile, tablet, desktop)

---

## 🆘 Risoluzione Problemi

### Build fallisce su Vercel

1. Verifica che tutte le dipendenze siano in `package.json`
2. Controlla i log di build su Vercel
3. Assicurati che Node.js version sia compatibile (Next.js 15 richiede Node 18+)

### Immagini non si caricano

1. Verifica che le immagini siano nella cartella `public/`
2. Controlla i percorsi delle immagini nei componenti
3. Assicurati che `next.config.js` abbia i domini corretti per immagini esterne

### Errori 404

1. Verifica che il routing di Next.js sia corretto
2. Controlla che non ci siano link rotti

---

## 📞 Supporto

Per problemi tecnici o domande:
- Documentazione Vercel: https://vercel.com/docs
- Documentazione Next.js: https://nextjs.org/docs

---

## 🎉 Pronto per Pubblicare!

Il progetto è già configurato e pronto. Scegli l'opzione che preferisci (consigliamo Vercel) e segui i passi sopra.

**Tempo stimato per deploy su Vercel**: 5-10 minuti

Buona fortuna! 🚀


