'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  AdjustmentsHorizontalIcon,
  BoltIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'

const benefits = [
  {
    icon: AdjustmentsHorizontalIcon,
    title: '100% PERSONALIZZATO',
    description: 'Nessun programma standard. Ogni scheda è creata specificamente per te, basata sui tuoi obiettivi estetici, il tuo livello di partenza e le tue esigenze individuali.',
    benefits: [
      'Analisi completa del tuo punto di partenza',
      'Obiettivi estetici chiari e raggiungibili',
      'Progressioni calibrate settimana per settimana'
    ],
    color: 'text-primary'
  },
  {
    icon: BoltIcon,
    title: 'ESTETICA + FUNZIONE',
    description: 'Allenamenti che scolpiscono il tuo corpo mantenendo (e migliorando) la tua forza, mobilità e salute. Il meglio di entrambi i mondi, senza compromessi.',
    benefits: [
      'Tonificazione e definizione muscolare',
      'Forza funzionale per la vita quotidiana',
      'Postura corretta e prevenzione infortuni'
    ],
    color: 'text-accent'
  },
  {
    icon: ClockIcon,
    title: 'DOVE E QUANDO VUOI',
    description: 'Allenati in palestra, in viaggio o a casa tua. Programmi online accessibili 24/7 che si adattano ai tuoi orari e alla tua routine.',
    benefits: [
      'Accesso illimitato alla piattaforma online',
      'Video dimostrativi per ogni esercizio',
      'Nessun vincolo di orario o location'
    ],
    color: 'text-primary'
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'SEMPRE AL TUO FIANCO',
    description: 'Non sei mai sola nel tuo percorso. Monitoraggio costante dei progressi, feedback personalizzati e supporto diretto per ogni dubbio o necessità.',
    benefits: [
      'Check-in settimanali sui tuoi progressi',
      'Aggiustamenti real-time del programma',
      'Risposta rapida a domande e dubbi'
    ],
    color: 'text-accent'
  }
]

export default function BenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-heading text-secondary mb-6">
            PERCHÉ SCEGLIERE I MIEI PROGRAMMI
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full" />
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Un approccio completo che unisce scienza, personalizzazione e risultati concreti. 
            Ogni dettaglio è pensato per portarti al tuo obiettivo nel modo più efficace e sostenibile.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="bg-gray-100 p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 group"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="mb-6"
              >
                <benefit.icon className={`w-12 h-12 ${benefit.color} group-hover:animate-pulse`} />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold font-heading text-secondary mb-4">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {benefit.description}
              </p>

              {/* Benefits List */}
              <ul className="space-y-3">
                {benefit.benefits.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (itemIndex * 0.1) + 0.3 }}
                    className="flex items-start gap-3 text-sm text-gray-600"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0`} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <button
            className="btn-secondary"
            onClick={() => {
              const contactSection = document.getElementById('contact')
              contactSection?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            RICHIEDI LA TUA CONSULENZA GRATUITA
          </button>
        </motion.div>
      </div>
    </section>
  )
}
