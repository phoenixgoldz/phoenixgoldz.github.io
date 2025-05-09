"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, MapPin, Linkedin } from "lucide-react"

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="contact-grid">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="contact-subtitle font-display">Let's Talk</h3>
        <p className="contact-text">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          Whether you're a game studio, tech company, or fellow developer, I'd love to hear from you!
        </p>

        <div className="contact-methods">
          <div className="contact-method">
            <div className="contact-icon">
              <Mail />
            </div>
            <div>
              <h4 className="contact-method-title">Email</h4>
              <a href="mailto:th1ckssoftwar3@gmail.com" className="contact-method-value">
                th1ckssoftwar3@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-method">
            <div className="contact-icon">
              <MapPin />
            </div>
            <div>
              <h4 className="contact-method-title">Location</h4>
              <p className="contact-method-value">Salt Lake City, Utah</p>
            </div>
          </div>

          <div className="contact-method">
            <div className="contact-icon">
              <Linkedin />
            </div>
            <div>
              <h4 className="contact-method-title">LinkedIn</h4>
              <a
                href="https://www.linkedin.com/in/trevor-hicks2025/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method-value"
              >
                Trevor Hicks
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <form id="contact-form" onSubmit={handleSubmit} className="contact-form">
          {isSubmitted ? (
            <div className="form-success">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22 11.0857V12.0057C21.9988 14.1621 21.3005 16.2604 20.0093 17.9875C18.7182 19.7147 16.9033 20.9782 14.8354 21.5896C12.7674 22.201 10.5573 22.1276 8.53447 21.3803C6.51168 20.633 4.78465 19.2518 3.61096 17.4428C2.43727 15.6338 1.87979 13.4938 2.02168 11.342C2.16356 9.19029 2.99721 7.14205 4.39828 5.5028C5.79935 3.86354 7.69279 2.72111 9.79619 2.24587C11.8996 1.77063 14.1003 1.98806 16.07 2.86572"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 4L12 14.01L9 11.01"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>Thank you! Your message has been sent successfully.</p>
            </div>
          ) : (
            <>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="form-textarea"
                ></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className="btn btn-primary btn-full">
                {isSubmitting ? (
                  <>
                    <svg className="spinner" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle
                        className="spinner-track"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeOpacity="0.3"
                      ></circle>
                      <path
                        className="spinner-head"
                        d="M12 2C6.47715 2 2 6.47715 2 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </>
          )}
        </form>
      </motion.div>
    </div>
  )
}
