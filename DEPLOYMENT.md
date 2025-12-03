# Deployment Guide

## Vercel (Raccomandato)

1. **Connetti il repository a Vercel**
   - Vai su [vercel.com](https://vercel.com)
   - Importa il progetto GitHub
   - Configura le variabili d'ambiente se necessario

2. **Configurazione automatica**
   - Vercel rileva automaticamente Next.js
   - Build command: `npm run build`
   - Output directory: `.next`

3. **Deploy**
   - Il deploy avviene automaticamente ad ogni push
   - URL di preview per ogni branch

## Netlify

1. **Build settings**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

2. **Redirects**
   Crea `_redirects` file:
   ```
   /*    /index.html   200
   ```

## Altri Provider

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Server Tradizionale
```bash
npm run build
npm run start
```

## Variabili d'Ambiente

Crea `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://federicavendruscolo.pt
NEXT_PUBLIC_CONTACT_EMAIL=info@federicavendruscolo.pt
```

## Performance Checklist

- [ ] Immagini ottimizzate (WebP/AVIF)
- [ ] Video compressi (< 5MB)
- [ ] Font preload configurati
- [ ] Critical CSS inline
- [ ] Bundle size ottimizzato
- [ ] Lighthouse score > 90

## SEO Checklist

- [ ] Meta tags completi
- [ ] Schema.org markup
- [ ] Sitemap generata
- [ ] Robots.txt configurato
- [ ] Open Graph images
- [ ] Canonical URLs

## Monitoraggio

- Google Analytics 4
- Google Search Console
- Core Web Vitals monitoring
- Error tracking (Sentry)

