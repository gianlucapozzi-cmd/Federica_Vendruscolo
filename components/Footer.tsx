'use client'

import { motion } from 'framer-motion'
import { ArrowUpIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container-custom py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Main Content */}
          <div className="text-center lg:text-left">
            {/* Logo */}
            <div className="mb-4">
              <img 
                src="/Logo Fede.png" 
                alt="Federica PT Logo" 
                className="w-16 h-16 mx-auto lg:mx-0 rounded-full object-cover border-2 border-gray-300 shadow-md bg-transparent"
                style={{ 
                  backgroundColor: 'transparent',
                  mixBlendMode: 'multiply'
                }}
              />
            </div>
            
            <h3 className="text-xl font-bold font-heading text-secondary mb-4">
              © 2024 Federica Vendruscolo - Personal Trainer
            </h3>
            
            {/* Links */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm">
              <button
                onClick={() => {
                  // Open privacy policy modal or page
                  alert('Privacy Policy - Qui si aprirebbe la policy')
                }}
                className="text-gray-600 hover:text-primary transition-colors duration-200 underline-offset-4 hover:underline"
              >
                Privacy Policy
              </button>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center lg:text-right">
            <p className="text-gray-600 mb-4">
              Seguimi su Instagram:
            </p>
            <a
              href="https://instagram.com/federicavendruscolo.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors duration-200 font-semibold"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @federicavendruscolo.pt
            </a>
          </div>
        </div>

        {/* Powered By */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            Website by{' '}
            <a
              href="https://meraviglialab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors duration-200 font-medium"
            >
              meravigliä lab
            </a>
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        aria-label="Torna in cima"
      >
        <ArrowUpIcon className="w-6 h-6 group-hover:animate-bounce" />
      </motion.button>
    </footer>
  )
}
