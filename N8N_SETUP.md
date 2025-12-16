# Guida alla Configurazione N8n per l'Integrazione con Google Sheets

Questa guida ti aiuterà a configurare N8n per ricevere i dati del form di contatto e salvarli automaticamente su Google Sheets.

## Prerequisiti

1. **Account N8n**: Puoi usare N8n Cloud (consigliato) o installarlo self-hosted
   - N8n Cloud: https://n8n.io/cloud
   - Self-hosted: https://docs.n8n.io/hosting/installation/

2. **Account Google**: Per accedere a Google Sheets API

3. **Google Sheet**: Crea un foglio Google dove vuoi salvare i dati

## Step 1: Creare il Workflow in N8n

### 1.1 Crea un nuovo workflow

1. Accedi al tuo account N8n
2. Clicca su "Workflows" nel menu laterale
3. Clicca su "Add workflow"

### 1.2 Aggiungi il nodo Webhook

1. Clicca sul pulsante "+" per aggiungere un nodo
2. Cerca "Webhook" e seleziona il nodo **"Webhook"**
3. Configura il nodo:
   - **HTTP Method**: `POST`
   - **Path**: `/contact-form` (o qualsiasi path che preferisci)
   - **Response Mode**: `Respond When Last Node Finishes`
   - **Response Code**: `200`
   - **Response Data**: `All Entries`

4. Clicca su **"Listen for Test Event"** per attivare il webhook
5. **COPIA L'URL del webhook** che appare (es: `https://tuo-n8n.com/webhook/abc123`)

### 1.3 Configura la variabile d'ambiente nel progetto

1. Nel tuo progetto Next.js, crea un file `.env.local` (se non esiste già)
2. Aggiungi la variabile con l'URL del webhook:

```env
N8N_WEBHOOK_URL=https://automations.wolfoncloud.com/webhook/4e72f492-8f71-4592-bbc5-a4de612a171c
```

> **Nota**: Il tuo webhook URL è già configurato nel file `.env.local` del progetto.

3. Riavvia il server di sviluppo Next.js (`npm run dev`)

## Step 2: Configurare Google Sheets in N8n

### 2.1 Aggiungi il nodo Google Sheets

1. Nel workflow N8n, aggiungi un nuovo nodo dopo il Webhook
2. Cerca "Google Sheets" e seleziona **"Google Sheets"**
3. Seleziona l'operazione **"Append Row"**

### 2.2 Autenticazione Google Sheets

1. Clicca su **"Connect to Google"** o **"Create New Credential"**
2. Segui il processo di autenticazione OAuth2:
   - Verrai reindirizzato a Google per autorizzare N8n
   - Accetta i permessi richiesti
   - Torna a N8n

### 2.3 Configura il nodo Google Sheets

1. **Spreadsheet**: Seleziona il tuo foglio Google dalla lista (o inserisci l'ID del foglio)
2. **Sheet**: Seleziona il foglio specifico (es: "Sheet1")
3. **Columns**: Configura le colonne che corrispondono ai dati del form:

```
A: firstName
B: lastName
C: email
D: phone
E: goals
F: timestamp
```

4. **Values**: Mappa i valori dal webhook alle colonne:

```json
{
  "values": [
    "={{ $json.firstName }}",
    "={{ $json.lastName }}",
    "={{ $json.email }}",
    "={{ $json.phone }}",
    "={{ $json.goals }}",
    "={{ $json.timestamp }}"
  ]
}
```

### 2.4 Formato alternativo con oggetto

Se preferisci usare il formato oggetto invece di array:

1. Cambia **"Append Row"** in **"Append or Update Row"**
2. Configura così:

**Columns**:
```
firstName | lastName | email | phone | goals | timestamp
```

**Values**:
```json
{
  "firstName": "={{ $json.firstName }}",
  "lastName": "={{ $json.lastName }}",
  "email": "={{ $json.email }}",
  "phone": "={{ $json.phone }}",
  "goals": "={{ $json.goals }}",
  "timestamp": "={{ $json.timestamp }}"
}
```

## Step 3: Preparare il Google Sheet

### 3.1 Crea le intestazioni

Nel tuo Google Sheet, crea la prima riga con le intestazioni:

| A | B | C | D | E | F |
|---|---|---|---|---|---|
| Nome | Cognome | Email | Telefono | Obiettivi | Data/Ora |

### 3.2 Ottieni l'ID del foglio

1. Apri il tuo Google Sheet
2. Guarda l'URL nella barra degli indirizzi
3. L'ID è la parte tra `/d/` e `/edit`
   - Esempio: `https://docs.google.com/spreadsheets/d/ABC123XYZ/edit`
   - L'ID è: `ABC123XYZ`

## Step 4: Testare il Workflow

### 4.1 Attiva il workflow

1. In N8n, clicca sul pulsante **"Active"** in alto a destra per attivare il workflow
2. Assicurati che il webhook sia in ascolto

### 4.2 Testa il form

1. Vai sul tuo sito web
2. Compila il form di contatto
3. Invia il form
4. Controlla in N8n l'esecuzione del workflow (dovresti vedere una nuova esecuzione)
5. Controlla il Google Sheet per verificare che i dati siano stati aggiunti

## Step 5: Aggiungere Gestione Errori (Opzionale)

### 5.1 Aggiungi nodo IF per validazione

Puoi aggiungere un nodo **"IF"** tra Webhook e Google Sheets per validare i dati:

**Condition**:
```
{{ $json.email }} contains "@"
```

### 5.2 Aggiungi notifica email (Opzionale)

Puoi aggiungere un nodo **"Email"** o **"Gmail"** per ricevere una notifica quando viene inviato un nuovo form:

1. Aggiungi un nodo **"Gmail"** dopo Google Sheets
2. Configura:
   - **Operation**: `Send Email`
   - **To**: La tua email
   - **Subject**: `Nuovo contatto dal sito web`
   - **Message**: 
     ```
     Nuovo contatto ricevuto:
     Nome: {{ $json.firstName }} {{ $json.lastName }}
     Email: {{ $json.email }}
     Telefono: {{ $json.phone }}
     ```

## Struttura Finale del Workflow

```
[Webhook] → [Google Sheets Append Row] → [Gmail Send Email (opzionale)]
```

## Troubleshooting

### Il webhook non riceve dati

1. Verifica che l'URL nel `.env.local` sia corretto
2. Verifica che il workflow sia attivo in N8n
3. Controlla i log di N8n per eventuali errori
4. Verifica che il server Next.js sia stato riavviato dopo aver aggiunto la variabile d'ambiente

### I dati non appaiono su Google Sheets

1. Verifica che l'autenticazione Google sia corretta
2. Controlla che l'ID del foglio sia corretto
3. Verifica che il nome del foglio (Sheet) sia corretto
4. Controlla i permessi del foglio Google (deve essere accessibile dall'account Google usato in N8n)

### Errore 401 Unauthorized

1. Riconnetti l'autenticazione Google in N8n
2. Verifica che l'account Google abbia i permessi necessari sul foglio

## Formato Dati Inviati

Il form invia i seguenti dati a N8n:

```json
{
  "firstName": "Mario",
  "lastName": "Rossi",
  "email": "mario.rossi@example.com",
  "phone": "+39 333 123 4567",
  "goals": "Vorrei tonificare gambe e glutei...",
  "privacy": true,
  "timestamp": "2024-01-15T10:30:00.000Z",
  "source": "website-contact-form"
}
```

## Supporto

Per problemi con N8n, consulta la documentazione ufficiale:
- https://docs.n8n.io/
- Community: https://community.n8n.io/

