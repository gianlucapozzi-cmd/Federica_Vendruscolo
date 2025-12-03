'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

interface StatisticProps {
  number: number
  label: string
  suffix?: string
}

function AnimatedCounter({ number, label, suffix = '' }: StatisticProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000 // 2 seconds
      const steps = 60 // 60 steps for smooth animation
      const increment = number / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= number) {
          setCount(number)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, number])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
    >
      <CheckCircleIcon className="w-12 h-12 text-primary mx-auto mb-4" />
      <div className="text-4xl font-bold text-secondary mb-2">
        {count}{suffix}
      </div>
      <div className="text-lg font-medium text-gray-600 uppercase tracking-wide">
        {label}
      </div>
    </motion.div>
  )
}

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="section-padding bg-gray-100">
      <div className="container-custom">
        {/* Main Content - Text and Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Column - Content */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold font-heading text-secondary mb-8 relative">
                CHI È FEDERICA VENDRUSCOLO
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: 60 } : { width: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute bottom-0 left-0 h-1 bg-accent rounded-full"
                />
              </h2>

              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p>
                  Non sono la solita trainer online che ti vende false promesse.
                  Sono una professionista specializzata in allenamenti funzionali ed estetici per donne, 
                  e la mia missione è semplice: farti ottenere il corpo che desideri mantenendo 
                  forza, salute e benessere reale.
                </p>

                <p>
                  La mia filosofia si basa su un principio fondamentale: l&apos;estetica e la funzionalità 
                  non sono in conflitto, ma si potenziano a vicenda. Ogni programma che creo è studiato 
                  scientificamente per massimizzare i risultati estetici senza mai sacrificare 
                  la tua forza e la tua salute.
                </p>

                <p>
                  Trasparenza assoluta: ti mostro sempre chi sono, come lavoro e cosa faccio. 
                  Non ti lascio mai sola nel tuo percorso. Ogni scheda è personalizzata, 
                  ogni progressione è calibrata su di te, ogni risultato è costruito insieme.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-10"
              >
                <button
                  className="btn-secondary"
                  onClick={() => {
                    const contactSection = document.getElementById('contact')
                    contactSection?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  SCOPRI COME FUNZIONA
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Photo */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-full"
            >
              {/* Federica's Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative flex justify-center items-center h-full"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl w-4/5 h-4/5">
                  <img
                    src="/federica-photo.jpg"
                    alt="Federica Vendruscolo - Personal Trainer"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full opacity-20" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full opacity-30" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Statistics Section - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            <AnimatedCounter number={100} label="DONNE ALLENATE" suffix="+" />
            <AnimatedCounter number={8} label="ANNI DI ESPERIENZA" suffix="+" />
            <AnimatedCounter number={95} label="CLIENTI SODDISFATTE" suffix="%" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
