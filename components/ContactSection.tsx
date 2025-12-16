'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { 
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  ChatBubbleBottomCenterTextIcon,
  PaperAirplaneIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

const contactSchema = z.object({
  firstName: z.string().min(2, 'Il nome deve essere di almeno 2 caratteri'),
  lastName: z.string().min(2, 'Il cognome deve essere di almeno 2 caratteri'),
  email: z.string().email('Inserisci un indirizzo email valido'),
  phone: z.string().min(10, 'Inserisci un numero di telefono valido'),
  goals: z.string().min(10, 'Descrivi i tuoi obiettivi in almeno 10 caratteri'),
  privacy: z.boolean().refine(val => val === true, 'Devi accettare la privacy policy')
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      console.log('📤 Invio form con dati:', data)
      
      // Invia i dati all'API route che li passerà a N8n
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      console.log('📥 Risposta API - Status:', response.status)
      
      const result = await response.json()
      console.log('📥 Risposta API - Body:', result)

      if (!response.ok) {
        console.error('❌ Errore API:', result.error, result.details)
        throw new Error(result.error || result.details || 'Errore durante l\'invio')
      }
      
      console.log('✅ Form inviato con successo')
      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('❌ Errore invio form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={ref} id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading text-secondary mb-6">
                INIZIA IL TUO PERCORSO DI TRASFORMAZIONE
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-8" />
            </div>

            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Compila il form e riceverai una consulenza gratuita personalizzata. 
                Analizzeremo insieme i tuoi obiettivi e creerò un piano su misura 
                per te, senza impegno.
              </p>

              <div>
                <h3 className="text-xl font-semibold text-secondary mb-4">
                  Cosa aspettarti dopo l&apos;invio del form:
                </h3>
                
                <ul className="space-y-4">
                  {[
                    { icon: PhoneIcon, text: 'Risposta entro 24 ore (giorni lavorativi)' },
                    { icon: ChatBubbleBottomCenterTextIcon, text: 'Analisi preliminare dei tuoi obiettivi' },
                    { icon: CheckCircleIcon, text: 'Proposta di programma personalizzato' },
                    { icon: UserIcon, text: 'Chiamata conoscitiva di 15 minuti' }
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                      className="flex items-center gap-4"
                    >
                      <item.icon className="w-6 h-6 text-primary flex-shrink-0" />
                      <span>{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-light to-white p-8 rounded-2xl border border-gray-100 shadow-lg"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome *
                  </label>
                  <div className="relative">
                    <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      {...register('firstName')}
                      type="text"
                      id="firstName"
                      placeholder="Inserisci il tuo nome"
                      className="input-field pl-10"
                    />
                  </div>
                  {errors.firstName && (
                    <p className="text-accent text-sm mt-1">{errors.firstName.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Cognome *
                  </label>
                  <div className="relative">
                    <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      {...register('lastName')}
                      type="text"
                      id="lastName"
                      placeholder="Inserisci il tuo cognome"
                      className="input-field pl-10"
                    />
                  </div>
                  {errors.lastName && (
                    <p className="text-accent text-sm mt-1">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      placeholder="tuaemail@esempio.com"
                      className="input-field pl-10"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-accent text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefono *
                  </label>
                  <div className="relative">
                    <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      {...register('phone')}
                      type="tel"
                      id="phone"
                      placeholder="+39 3XX XXX XXXX"
                      className="input-field pl-10"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-accent text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              {/* Goals Field */}
              <div>
                <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                  Raccontami i tuoi obiettivi *
                </label>
                <div className="relative">
                  <ChatBubbleBottomCenterTextIcon className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                  <textarea
                    {...register('goals')}
                    id="goals"
                    rows={5}
                    placeholder="Es: Vorrei tonificare gambe e glutei, migliorare la postura, perdere qualche centimetro sui fianchi..."
                    className="textarea-field pl-10"
                  />
                </div>
                {errors.goals && (
                  <p className="text-accent text-sm mt-1">{errors.goals.message}</p>
                )}
              </div>

              {/* Privacy Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  {...register('privacy')}
                  type="checkbox"
                  id="privacy"
                  className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  Accetto la{' '}
                  <button
                    type="button"
                    className="text-primary hover:underline"
                    onClick={() => {
                      // Open privacy policy modal or page
                      alert('Privacy Policy - Qui si aprirebbe la policy')
                    }}
                  >
                    Privacy Policy
                  </button>
                  {' '}e autorizzo il trattamento dei miei dati personali *
                </label>
              </div>
              {errors.privacy && (
                <p className="text-accent text-sm">{errors.privacy.message}</p>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full btn-primary flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <ArrowPathIcon className="w-5 h-5 animate-spin" />
                    Invio in corso...
                  </>
                ) : (
                  <>
                    RICHIEDI CONSULENZA GRATUITA
                    <PaperAirplaneIcon className="w-5 h-5" />
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
                >
                  <CheckCircleIcon className="w-5 h-5" />
                  <span>Richiesta inviata con successo! Ti contatterò entro 24 ore. Controlla anche lo spam!</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 bg-light border border-accent/30 rounded-lg text-accent"
                >
                  <ExclamationTriangleIcon className="w-5 h-5" />
                  <span>Ops! Qualcosa è andato storto. Riprova o contattami direttamente su Instagram.</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
