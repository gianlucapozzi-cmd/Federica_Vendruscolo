# LINEE GUIDA LANDING PAGE - TEMPLATE STRUTTURALE

## PANORAMICA GENERALE
Landing page a pagina singola ottimizzata per conversioni, composta da 8 sezioni principali con sistema di animazioni fluide e design responsive. Architettura modulare che permette personalizzazione completa di colori, font e contenuti mantenendo struttura e funzionalità.

---

## 1. SEZIONE HERO

### STRUTTURA LAYOUT
- **Container**: Full viewport height (100vh)
- **Background**: Immagine a schermo intero con overlay scuro (rgba opacity 0.4)
- **Contenuto centralizzato**: Verticalmente e orizzontalmente
- **Gerarchia elementi**:
  1. Logo placeholder (120px × 60px)
  2. Titolo principale 
  3. Sottotitolo descrittivo (max-width: 600px)
  4. Call-to-Action button

### SPECIFICHE TECNICHE CSS
- Background fisso per effetto parallasse
- Font-size titolo grande (responsive: ridotto su mobile)
- Letter-spacing aumentato per eleganza tipografica
- Transizioni fluide e naturali per tutti gli effetti

### ANIMAZIONI E MOVIMENTI
- **Animazioni di ingresso**: Sequenza progressiva con delay crescenti
  - Logo: fade-in dal basso
  - Titolo: fade-in dal basso con delay
  - Sottotitolo: fade-in dal basso con delay maggiore
  - Button: fade-in dal basso con delay massimo
- **Button hover**: Sollevamento verso l'alto + effetto luminoso scorrevole
- **Background**: Effetto parallasse su scroll (opzionale)

---

## 2. SEZIONE CHI SIAMO

### STRUTTURA LAYOUT
- **Grid system**: 2 colonne (2fr + 1fr) - colonna sinistra più larga
- **Colonna sinistra**: Titolo, paragrafi descrittivi, CTA button
- **Colonna destra**: Stack verticale di 3 statistiche/contatori
- **Spaziatura**: Gap 80px tra colonne

### ELEMENTI STATISTICHE
- **Layout**: Flexbox colonna con gap 40px
- **Singola statistica**: 
  - Padding: 20px
  - Border: 1px solid
  - Background: colore contrastante
  - Testo centrato: numero grande + label piccola

### SPECIFICHE TECNICHE CSS
- Altezza minima per statistiche uniformi
- Font-weight leggero per i numeri (eleganza)
- Testo maiuscolo per le etichette

### ANIMAZIONI E MOVIMENTI
- **Scroll animations**: 
  - Colonna sinistra: scorrimento da sinistra
  - Colonna destra: scorrimento da destra
- **Contatori animati**: Incremento numerico graduale da 0 al target
- **Hover statistiche**: Scorrimento laterale + ombra espansa
- **Titolo**: Linea sottostante animata da invisibile a visibile

### LOGICA CONTATORI
**Funzionalità richiesta:**
- Funzione per animare incremento numerico graduale
- Lettura del valore target da attributo data del elemento
- Calcolo dell'incremento per transizione fluida
- Timer per aggiornamento progressivo del numero visualizzato
- Arresto dell'animazione al raggiungimento del target

**Trigger di attivazione:**
- Utilizzo di Intersection Observer per rilevare quando la sezione entra nel viewport
- Attivazione dell'animazione solo alla prima visualizzazione
- Prevenzione di ri-attivazioni multiple

---

## 3. SEZIONE VANTAGGI

### STRUTTURA LAYOUT
- **Header centralizzato**:
  - Titolo con linea sottostante proporzionata al testo
  - Descrizione paragrafo con larghezza massima limitata
- **Grid vantaggi**: 4 colonne responsive (adattamento automatico)
- **CTA finale**: Button centrato sotto i box

### SINGOLO BOX VANTAGGIO
- **Struttura interna**:
  - Icona grande - posizione superiore
  - Titolo dimensione media
  - Descrizione principale
  - Lista benefici (3 elementi con indicatori)
- **Dimensioni**: Altezza minima uniforme per allineamento
- **Layout**: Colonna flessibile con descrizione espandibile

### SPECIFICHE TECNICHE CSS
- Bordi sottili per definizione visiva
- Padding interno generoso per leggibilità
- Lista benefici: dimensione font ridotta, allineamento sinistro
- Indicatori lista: elementi grafici personalizzati

### ANIMAZIONI E MOVIMENTI
- **Hover box**: 
  - Sollevamento verso l'alto + leggero ingrandimento
  - Ombra espansa e profonda
  - Icona: ingrandimento + leggera rotazione
- **Background overlay**: Gradiente diagonale che appare gradualmente
- **Scroll animations**: Apparizione progressiva per ogni box

---

## 4. SEZIONE RECENSIONI

### STRUTTURA LAYOUT
- **Header**: Titolo centralizzato con linea proporzionata
- **Container carousel**: Grid 3 colonne visibili
- **Navigazione**: Frecce centrate sotto le card
- **Sistema**: 6 recensioni totali, 3 visibili, 3 nascoste

### SINGOLA RECENSIONE CARD
- **Struttura interna**:
  - Citazione (stile corsivo)
  - Nome autore (peso medio)
  - Ruolo/azienda (dimensione ridotta, colore secondario)
- **Styling**: Background contrastante, padding generoso, bordo sottile

### SPECIFICHE TECNICHE CSS
- Grid a 3 colonne uguali
- Spaziatura uniforme tra le card
- Bordo sinistro animato con gradiente verticale

### ANIMAZIONI E MOVIMENTI
- **Card hover**: 
  - Sollevamento verso l'alto
  - Bordo sinistro: apparizione graduale dall'alto
  - Ombra espansa
- **Pulsanti navigazione**: 
  - Effetto espansione circolare su hover
  - Ingrandimento + cambio colore
  - Stati disabilitati con trasparenza ridotta

### LOGICA CAROUSEL
**Sistema di paginazione:**
- Variabile per tracciare slide corrente (partenza da 0)
- Costante per numero di recensioni per pagina (3)
- Calcolo automatico del numero massimo di slide

**Funzione di visualizzazione:**
- Nascondere tutte le recensioni inizialmente
- Mostrare solo il subset di recensioni per la slide corrente
- Calcolare indici di inizio e fine basati sulla slide attiva
- Aggiornare stato dei pulsanti di navigazione (abilitato/disabilitato)

**Gestione navigazione:**
- Event listener per pulsante precedente: riduce indice slide corrente
- Event listener per pulsante successivo: aumenta indice slide corrente
- Controllo dei limiti per prevenire navigazione oltre le slide disponibili
- Chiamata alla funzione di visualizzazione dopo ogni cambio

---

## 5. SEZIONE MODULO

### STRUTTURA LAYOUT
- **Grid system**: 2 colonne (1fr + 1fr) - equal width
- **Colonna sinistra**: Info section (titolo, descrizioni)
- **Colonna destra**: Form container con background differenziato

### FORM CONTAINER
- **Struttura campi**:
  - Riga 1: Nome + Cognome (2 colonne)
  - Riga 2: Email + Telefono (2 colonne)  
  - Riga 3: Messaggio (area testo larghezza piena)
  - Checkbox privacy (layout flessibile)
  - Pulsante invio (centrato)

### SPECIFICHE TECNICHE CSS
- Container form: background differenziato, padding generoso
- Styling input: padding interno, bordi sottili, transizioni fluide
- Stile placeholder: corsivo, colore secondario
- Area testo: altezza fissa, ridimensionamento verticale

### ANIMAZIONI E MOVIMENTI
- **Focus campi**: 
  - Sollevamento leggero verso l'alto
  - Cambio colore bordo al colore primario
  - Ombra sottile espansa
  - Placeholder: trasparenza ridotta + movimento
- **Form container**: Bordo gradiente animato su hover
- **Scroll animations**: Info scorrimento sinistra, form scorrimento destra

---

## 6. SEZIONE FAQ

### STRUTTURA LAYOUT
- **Header**: Titolo centralizzato con linea proporzionata
- **Container**: Max-width 800px centrato
- **Lista FAQ**: Stack verticale con margin-bottom tra items

### SINGOLO FAQ ITEM
- **Struttura**:
  - Button question (full-width, flex justify-between)
  - Answer div (hidden di default, padding interno)
- **Stati**: Classe 'active' per item aperto

### SPECIFICHE TECNICHE CSS
- Pulsante domanda: padding generoso, dimensione font media, peso medio
- Risposta: padding interno, interlinea generosa
- Icona toggle: dimensione grande, animazione rotazione

### ANIMAZIONI E MOVIMENTI
- **Item hover**: 
  - Scorrimento laterale leggero
  - Cambio colore bordo
  - Effetto luminoso orizzontale scorrevole
- **Toggle answer**: 
  - Animazione apparizione: scorrimento verso il basso con dissolvenza
  - Icona: rotazione per trasformazione da + a ×
- **Logica accordion**: Un solo elemento aperto alla volta

### LOGICA FAQ ACCORDION
**Gestione eventi:**
- Event listener su ogni pulsante domanda
- Rilevamento dello stato attuale dell'elemento FAQ (aperto/chiuso)
- Identificazione dell'elemento padre contenitore

**Comportamento accordion:**
- Chiusura di tutti gli elementi FAQ prima di ogni azione
- Reset di tutte le icone allo stato iniziale (+)
- Apertura dell'elemento cliccato solo se non era già attivo
- Rotazione dell'icona dell'elemento attivo (da + a ×)

**Stati visivi:**
- Aggiunta/rimozione classe 'active' per controllo CSS
- Gestione dell'animazione di apertura/chiusura della risposta
- Sincronizzazione tra stato dell'icona e visibilità del contenuto

---

## 7. SEZIONE CTA FINAL

### STRUTTURA LAYOUT
- **Background**: Colore scuro/contrastante per massimo impatto
- **Contenuto centralizzato**: Titolo + sottotitolo + button
- **Styling**: Testo chiaro su sfondo scuro

### SPECIFICHE TECNICHE CSS
- Text-align: center per tutti gli elementi
- Color scheme: Invertito rispetto al resto della pagina
- Button: Versione invertita (background chiaro, testo scuro)

### ANIMAZIONI E MOVIMENTI
- **Linea titolo**: Colore adattato al background scuro
- **Button hover**: Inversione colori + sollevamento
- Stesse transizioni delle altre sezioni ma con colori adattati

---

## 8. FOOTER

### STRUTTURA LAYOUT
- **Background**: Colore neutro chiaro
- **Contenuto**: Flex layout centralizzato
- **Elementi**: Links policy + powered by statement

### SPECIFICHE TECNICHE CSS
- Padding: 30px verticale
- Font-size: 0.9rem per discrezione
- Links: Colore secondario con hover transition

---

## SISTEMA RESPONSIVE

### BREAKPOINTS SPECIFICI
**Responsive Design - Punti di Rottura:**

**Desktop Large: oltre 1200px**
- Layout completo con tutte le funzionalità
- Spaziature massime e dimensioni font originali

**Desktop Standard: 992px-1199px** 
- Layout mantenuto con leggere riduzioni di spaziatura
- Dimensioni font leggermente ridotte

**Tablet: 768px-991px**
- Inizio adattamenti per schermi medi
- Possibili riduzioni di colonne in alcune sezioni

**Mobile: sotto 768px**
- Trasformazioni principali per dispositivi mobili:

**Sezione Hero:**
- Riduzione significativa della dimensione del titolo principale
- Riduzione della dimensione del sottotitolo
- Mantenimento della centralizzazione

**Layout a Griglia:**
- Chi Siamo: da 2 colonne a 1 colonna verticale
- Modulo: da 2 colonne a 1 colonna verticale  
- Campi form: da 2 colonne a 1 colonna per riga

**Sezione Vantaggi:**
- Da griglia 4 colonne a colonna singola verticale
- Mantenimento spaziatura tra elementi

**Sezione Recensioni:**
- Da griglia 3 colonne a colonna singola
- Una recensione visibile per volta

**Statistiche:**
- Da layout verticale a layout orizzontale
- Elementi affiancati con dimensioni flessibili
- Riduzione spaziatura tra elementi

**Footer:**
- Da layout orizzontale a layout verticale
- Centratura elementi con spaziatura ridotta

---

## SISTEMA ANIMAZIONI GLOBALE

### SCROLL ANIMATIONS
**Intersection Observer per trigger automatici:**
- Osservatore che monitora quando gli elementi entrano nel viewport
- Soglia di attivazione al 10% di visibilità dell'elemento
- Aggiunta automatica della classe 'visible' agli elementi osservati
- Lista di elementi da osservare: tutti quelli con classi animation

**Elementi da osservare:**
- Tutti gli elementi con classe 'fade-in'
- Tutti gli elementi con classe 'slide-in-left'  
- Tutti gli elementi con classe 'slide-in-right'
- Tutti i titoli H2 per attivazione linea sottostante

**Logica di attivazione:**
- Quando un elemento entra nel viewport, riceve la classe 'visible'
- La classe 'visible' attiva le transizioni CSS definite
- Ogni elemento si anima una sola volta alla prima visualizzazione

### CLASSI ANIMAZIONE BASE
**Fade In (Apparizione graduale):**
- Stato iniziale: elemento invisibile e leggermente spostato verso il basso
- Transizione fluida per opacity e posizione
- Stato finale: elemento completamente visibile e in posizione normale
- Attivato tramite classe 'visible'

**Slide In Left (Scorrimento da sinistra):**
- Stato iniziale: elemento invisibile e spostato verso sinistra
- Transizione fluida per opacity e posizione orizzontale  
- Stato finale: elemento completamente visibile e in posizione normale
- Attivato tramite classe 'visible'

**Slide In Right (Scorrimento da destra):**
- Stato iniziale: elemento invisibile e spostato verso destra
- Transizione fluida per opacity e posizione orizzontale
- Stato finale: elemento completamente visibile e in posizione normale  
- Attivato tramite classe 'visible'

---

## SMOOTH SCROLLING GLOBALE

### NAVIGAZIONE FLUIDA
**Funzionalità smooth scrolling:**
- Event listener su tutti i link che puntano ad ancore interne (href che inizia con #)
- Prevenzione del comportamento di default del browser
- Identificazione dell'elemento target tramite l'attributo href del link
- Scrolling fluido verso l'elemento target con posizionamento all'inizio della sezione

**Comportamento:**
- Click su link ancoraggio → scroll animato invece di salto istantaneo  
- Posizionamento preciso all'inizio della sezione target
- Transizione visiva fluida che migliora l'esperienza utente
- Compatibilità con tutti i link di navigazione interna della pagina

---

## NOTE IMPLEMENTAZIONE

### PERSONALIZZAZIONE COLORI
- Tutti i colori sono centralizzati in variabili CSS per facile customizzazione
- Mantenere sempre contrasto adeguato per accessibilità
- Background sections: alternare chiaro/scuro per ritmo visivo

### PERSONALIZZAZIONE FONT
- Sistema di font di default, facilmente sostituibile
- Mantenere gerarchia: pesi leggero, normale, medio
- Spaziatura tra lettere per titoli per eleganza tipografica

### PERSONALIZZAZIONE CONTENUTI
- Placeholder "Lorem Ipsum" in tutti i testi
- Struttura HTML semantica per SEO
- Attributi data- per configurazioni dinamiche

### PERFORMANCE
- Lazy loading per immagini hero
- CSS transitions hardware-accelerated
- JavaScript event delegation per performance