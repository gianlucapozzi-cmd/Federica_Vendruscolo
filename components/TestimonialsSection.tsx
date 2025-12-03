'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  ChevronLeftIcon, 
  ChevronRightIcon,
  ChatBubbleLeftRightIcon,
  StarIcon
} from '@heroicons/react/24/outline'

const testimonials = [
  {
    quote: "Prima di iniziare con Federica mi sentivo debole e completamente insoddisfatta del mio fisico. Dopo soli 3 mesi ho un corpo tonico che non avevo mai avuto, e soprattutto mi sento forte come mai prima. È cambiato il mio rapporto con l'allenamento e con me stessa.",
    name: "Sara M.",
    role: "Manager, 32 anni"
  },
  {
    quote: "Finalmente un approccio che funziona davvero! I risultati si vedono sul corpo ma soprattutto si sentono nella vita quotidiana. Salire le scale, giocare con i bambini, tutto è diventato più facile. E il mio fisico? Mai stato così definito!",
    name: "Laura R.",
    role: "Mamma e Imprenditrice, 38 anni"
  },
  {
    quote: "La personalizzazione fa tutta la differenza. Federica ha capito esattamente cosa volevo ottenere e ha creato un programma perfetto per me. Ogni settimana vedo progressi concreti, e il supporto costante mi tiene motivata al 100%.",
    name: "Giulia T.",
    role: "Avvocato, 29 anni"
  },
  {
    quote: "Avevo provato mille programmi online ma nessuno come questo. La differenza è che Federica c'è davvero, risponde, ti segue, aggiusta il tiro. Non ti senti mai abbandonata. E i risultati arrivano, eccome!",
    name: "Alessia B.",
    role: "Consulente Marketing, 35 anni"
  },
  {
    quote: "Pensavo che per avere un bel fisico dovessi ammazzarmi di palestra per ore. Invece con allenamenti mirati di 45 minuti, 4 volte a settimana, ho ottenuto risultati che mai avrei immaginato. Efficienza e risultati concreti!",
    name: "Martina F.",
    role: "Architetto, 27 anni"
  },
  {
    quote: "La trasparenza di Federica mi ha conquistata da subito. Niente promesse irrealistiche, solo un metodo serio e scientifico. Dopo 6 mesi posso dire che è stato il miglior investimento che abbia fatto su me stessa.",
    name: "Chiara D.",
    role: "Insegnante, 41 anni"
  }
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [currentSlide, setCurrentSlide] = useState(0)
  const slidesPerView = 3
  const maxSlides = Math.ceil(testimonials.length / slidesPerView)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides)
  }

  const getVisibleTestimonials = () => {
    const start = currentSlide * slidesPerView
    return testimonials.slice(start, start + slidesPerView)
  }

  return (
    <section ref={ref} className="section-padding bg-gray-100">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-heading text-secondary mb-6">
            CENTINAIA DI DONNE HANNO GIÀ TRASFORMATO IL LORO CORPO
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {getVisibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={`${currentSlide}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 group relative"
              >
                {/* Quote Icon */}
                <ChatBubbleLeftRightIcon className="w-8 h-8 text-primary absolute top-6 left-6 opacity-20" />
                
                {/* Border Gradient */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-2xl" />
                
                {/* Quote */}
                <p className="text-gray-700 leading-relaxed mb-6 italic text-lg relative z-10">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                
                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-secondary text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                  
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-accent fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`p-3 rounded-full border-2 transition-all duration-300 ${
                currentSlide === 0
                  ? 'border-gray-300 text-gray-300 cursor-not-allowed'
                  : 'border-primary text-primary hover:bg-primary hover:text-white'
              }`}
              aria-label="Testimonial precedente"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {[...Array(maxSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-primary scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Vai alla slide ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              disabled={currentSlide === maxSlides - 1}
              className={`p-3 rounded-full border-2 transition-all duration-300 ${
                currentSlide === maxSlides - 1
                  ? 'border-gray-300 text-gray-300 cursor-not-allowed'
                  : 'border-primary text-primary hover:bg-primary hover:text-white'
              }`}
              aria-label="Testimonial successiva"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

