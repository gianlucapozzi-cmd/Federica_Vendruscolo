'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { SparklesIcon } from '@heroicons/react/24/outline'

export default function CTAFinalSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-secondary via-gray-800 to-secondary" />
        {/* You can add a background image here */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading leading-tight text-shadow-lg">
            PRONTA A TRASFORMARE IL TUO CORPO?
          </h2>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Non aspettare gennaio, non aspettare lunedì prossimo. 
            Il momento giusto per iniziare a prenderti cura di te è{' '}
            <span className="text-accent font-semibold">ADESSO</span>.
            <br />
            Inizia oggi il tuo percorso verso il corpo che hai sempre desiderato.
          </p>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="pt-4"
          >
            <button
              className="btn-outline group flex items-center gap-3 text-xl px-10 py-5 mx-auto"
              onClick={() => {
                const contactSection = document.getElementById('contact')
                contactSection?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              RICHIEDI CONSULENZA GRATUITA ORA
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <SparklesIcon className="w-6 h-6" />
              </motion.div>
            </button>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-300 pt-8"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>Consulenza gratuita</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>Risposta entro 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>100% personalizzato</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <FloatingDots />
    </section>
  )
}

function FloatingDots() {
  const [dots, setDots] = useState<{ left: string; top: string; duration: number; delay: number }[]>([])

  useEffect(() => {
    // Generate on client to avoid SSR/CSR mismatch
    const generated = Array.from({ length: 6 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }))
    setDots(generated)
  }, [])

  if (dots.length === 0) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((d, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-accent/30 rounded-full"
          style={{ left: d.left, top: d.top }}
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: d.duration, repeat: Infinity, delay: d.delay }}
        />
      ))}
    </div>
  )
}

