'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "Come funziona esattamente il programma online?",
    answer: "Dopo la consulenza iniziale, creo un programma di allenamento completamente personalizzato basato sui tuoi obiettivi estetici e funzionali. Riceverai accesso alla piattaforma online dove troverai:\n\n• Video dimostrativi di ogni esercizio con spiegazioni dettagliate\n• Schede di allenamento settimanali con progressioni calibrate\n• Area messaggistica per supporto diretto\n• Tracking progressi per monitorare i tuoi risultati\n\nTi alleni quando e dove vuoi, seguendo il programma che ho creato specificamente per te. Check-in settimanali per monitorare l'andamento e aggiustare il percorso se necessario."
  },
  {
    question: "Quanto tempo devo dedicare agli allenamenti?",
    answer: "I programmi sono flessibili e si adattano al tuo stile di vita. In generale consiglio:\n\n• 3-4 sessioni settimanali di 40-60 minuti ciascuna\n• Possibilità di dividere gli allenamenti in sessioni più brevi\n• Programmi adattabili se hai poco tempo (anche 30 minuti efficaci)\n\nL'importante è la costanza e la qualità, non la quantità. Meglio 3 allenamenti ben fatti alla settimana che 7 fatti male!"
  },
  {
    question: "Posso allenarmi anche se sono principiante assoluta?",
    answer: "Assolutamente sì! Anzi, è il momento perfetto per iniziare nel modo corretto.\n\nOgni programma è calibrato sul tuo livello di partenza, quindi che tu sia completamente principiante o abbia già esperienza, riceverai un piano perfetto per te.\n\nPer le principianti inizio sempre con:\n• Esercizi base per imparare la tecnica corretta\n• Progressioni graduali e sicure\n• Focus sulla prevenzione infortuni\n• Costruzione delle fondamenta di forza\n\nNon c'è fretta: costruiamo insieme il tuo percorso un passo alla volta!"
  },
  {
    question: "Ho bisogno di attrezzi particolari?",
    answer: "Dipende dalla tua situazione e dagli obiettivi. Lavoro principalmente con:\n\nAllenamenti a corpo libero: Se vuoi allenarti in casa con zero attrezzatura, creo programmi completi ed efficaci solo a corpo libero.\n\nCon attrezzi base: Se hai elastici, manubri o kettlebell (anche leggeri), posso creare programmi ancora più variegati ed efficaci.\n\nIn palestra: Se hai accesso a una palestra, posso sfruttare tutta l'attrezzatura disponibile per risultati ancora più specifici.\n\nIl bello è che possiamo lavorare con quello che hai a disposizione!"
  },
  {
    question: "Quanto tempo ci vuole per vedere i primi risultati?",
    answer: "Dipende da tanti fattori (punto di partenza, obiettivi, costanza), ma in media:\n\n• Prime 2-3 settimane: Senti il corpo più tonico, più energia\n• 4-6 settimane: Inizi a vedere cambiamenti visibili sul corpo\n• 8-12 settimane: Trasformazione evidente, anche per gli altri\n\nRicorda: i risultati veri e duraturi richiedono tempo e costanza. Niente soluzioni miracolose in 7 giorni, ma un percorso sostenibile che ti porta dove vuoi arrivare, in modo sano e definitivo."
  },
  {
    question: "Fornisci anche piani alimentari?",
    answer: "Mi concentro esclusivamente sulla parte di allenamento, che è la mia specializzazione e passione.\n\nPer la nutrizione, lavoro in sinergia con nutrizionisti professionisti di fiducia che possono creare piani alimentari personalizzati.\n\nSe hai bisogno di supporto anche sul fronte alimentazione, posso consigliarti professionisti qualificati con cui collaboro, così avrai un approccio completo e integrato!"
  }
]

export default function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={ref} className="section-padding bg-gray-100">
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-heading text-secondary mb-6">
            DOMANDE FREQUENTI
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-secondary pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <XMarkIcon className="w-6 h-6 text-primary" />
                  ) : (
                    <PlusIcon className="w-6 h-6 text-gray-400" />
                  )}
                </motion.div>
              </motion.button>

              <motion.div
                id={`faq-answer-${index}`}
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6">
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 mb-6">
            Non hai trovato la risposta che cercavi?
          </p>
          <button
            className="btn-primary"
            onClick={() => {
              const contactSection = document.getElementById('contact')
              contactSection?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            CHIEDI DIRETTAMENTE A FEDERICA
          </button>
        </motion.div>
      </div>
    </section>
  )
}
