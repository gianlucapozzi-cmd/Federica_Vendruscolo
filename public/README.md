# Assets Directory

Questa directory contiene tutti gli asset multimediali necessari per la landing page.

## Struttura Richiesta

```
public/
├── hero-video.mp4          # Video principale per Hero Section (max 5MB)
├── hero-video.webm         # Versione WebM del video (per compatibilità)
├── hero-poster.jpg         # Immagine poster per il video
├── federica-action.jpg     # Immagine per CTA finale
├── favicon.ico             # Favicon del sito
└── og-image.jpg            # Immagine per Open Graph
```

## Specifiche Tecniche

### Video Hero
- **Formato**: MP4 (H.264) + WebM per compatibilità
- **Durata**: 15-20 secondi
- **Risoluzione**: 1920x1080 (Full HD)
- **Bitrate**: Massimo 2Mbps per ottimizzazione
- **Dimensione**: Massimo 5MB per il file MP4
- **Contenuto**: Federica durante allenamento funzionale

### Immagini
- **Formato**: JPG/WebP per ottimizzazione
- **Risoluzione**: 1920x1080 per immagini full-width
- **Compressione**: Ottimizzata per web
- **Alt Text**: Descritto nei componenti per accessibilità

## Note per lo Sviluppatore

1. **Lazy Loading**: Tutte le immagini utilizzano lazy loading automatico
2. **Responsive**: Le immagini si adattano automaticamente ai diversi dispositivi
3. **Fallback**: In caso di mancanza del video, viene mostrata l'immagine poster
4. **Performance**: Tutti gli asset sono ottimizzati per velocità di caricamento

## Placeholder

Se non hai ancora gli asset finali, puoi utilizzare:
- **Video**: Un video placeholder di allenamento funzionale
- **Immagini**: Foto stock di personal trainer femminile
- **Favicon**: Icona generica di fitness

Ricorda di sostituire tutti i placeholder con i contenuti finali prima del deploy in produzione.

