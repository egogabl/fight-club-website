"use client"

import { useState, useEffect } from "react"
import { Plus, Minus } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
}

export default function FAQAccordion({ items, className = "" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => {
        const isOpen = mounted && openIndex === index
        return (
          <div 
            key={index} 
            className="bg-gray-900/90 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden transition-all duration-300 hover:border-red-500/30"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-800/50 transition-colors group"
            >
              <span className="text-white font-semibold text-lg pr-4 group-hover:text-red-400 transition-colors">
                {item.question}
              </span>
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-red-500/20 group-hover:bg-red-500/30 transition-colors">
                {isOpen ? (
                  <Minus className="w-5 h-5 text-red-400" />
                ) : (
                  <Plus className="w-5 h-5 text-red-400" />
                )}
              </div>
            </button>
            {isOpen && (
              <div className="px-6 pb-5 pt-2">
                <p className="text-gray-300 leading-relaxed break-words">{item.answer}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

