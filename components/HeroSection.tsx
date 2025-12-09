'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Instagram Link - Mobile: sopra logo, Desktop: top right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute top-2 left-1/2 transform -translate-x-1/2 lg:left-auto lg:transform-none lg:top-6 lg:right-6 z-20 w-full lg:w-auto px-4 lg:px-0"
      >
        <a
          href="https://instagram.com/federicavendruscolo.pt"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-1.5 lg:gap-2 bg-white/10 backdrop-blur-sm rounded-full px-2.5 py-1 lg:px-4 lg:py-2 hover:bg-white/20 transition-all duration-300 w-fit mx-auto lg:mx-0"
        >
          <svg
            className="w-4 h-4 lg:w-5 lg:h-5 text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          <span className="text-white text-[10px] sm:text-xs lg:text-sm font-medium group-hover:text-accent transition-colors duration-300 whitespace-nowrap">
            @federicavendruscolo.pt
          </span>
        </a>
      </motion.div>
      {/* Background - Horizontal collage with 3 images */}
      <div className="absolute inset-0 z-0 flex flex-row">
        <div 
          className="flex-1 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/aff.jpg)',
            opacity: 0.6,
          }}
        />
        <div 
          className="flex-1 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/slitta.jpg)',
            opacity: 0.6,
          }}
        />
        <div 
          className="flex-1 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/lat.jpg)',
            opacity: 0.6,
          }}
        />
      </div>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 z-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* Main Brand */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8 mt-20 sm:mt-24 lg:mt-0"
        >
          {/* Logo */}
          <div className="mb-6">
            <img 
              src="/Logo Fede.png" 
              alt="Federica PT Logo" 
              className="w-24 h-24 mx-auto rounded-full object-cover bg-transparent"
              style={{ 
                backgroundColor: 'transparent',
                filter: 'brightness(0) invert(1)'
              }}
            />
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold tracking-wide mb-3">
            <span className="text-gradient">Federica</span> Vendruscolo
          </h1>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent flex-1 max-w-20"></div>
            <p className="text-lg sm:text-xl text-gray-200 font-medium italic">
              La tua guida verso il corpo che hai sempre sognato
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent flex-1 max-w-20"></div>
          </div>
        </motion.div>

        {/* Powerful Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight mb-8 text-shadow-lg"
        >
          <div className="mb-2">
            <span className="text-white">Scopri la</span> <span className="text-gradient">TUA FORZA</span>
          </div>
          <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
            <span className="text-white">interiore</span> <span className="text-gradient">e fisica</span>
          </div>
        </motion.h2>

        {/* Emotional Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-5xl mx-auto mb-12"
        >
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed text-gray-100 mb-6">
            <span className="text-white">Allenamenti funzionali</span> pensati esclusivamente per te, 
            <span className="text-gradient"> per farti stare bene con il tuo corpo</span>
          </p>
          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
            Una vera esperta che mette la faccia in quello che fa. 
            <span className="text-accent font-semibold">Trasformazioni reali</span> per donne che vogliono sentirsi 
            <span className="text-white font-semibold">forti, sicure e bellissime</span>
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inner-content group flex items-center gap-3 text-xl px-12 py-6 relative overflow-hidden"
            onClick={() => {
              const contactSection = document.getElementById('contact')
              contactSection?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <span className="font-semibold relative z-10">INIZIA LA TUA TRASFORMAZIONE</span>
            <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent z-50"
        style={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.1 }}
      />
    </section>
  )
}
