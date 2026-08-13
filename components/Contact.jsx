'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { FaSpinner, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import SectionTitle from './ui/SectionTitle';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [serverError, setServerError] = useState('');

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setServerError('');
    
    if (formStatus === 'error' || formStatus === 'success') {
      setFormStatus('idle');
    }

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setFormStatus('submitting');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      setServerError(error.message);
      setFormStatus('error');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="contact" className="relative w-full max-w-7xl mx-auto py-24 px-6 md:px-12 lg:px-16 overflow-hidden">
      
      {/* Premium ambient lighting */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#ea580c]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px]" />
      </div>

      <SectionTitle title="Contact" subtitle="GET IN TOUCH" />

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
        
        {/* Left Column: Contact Info */}
        <motion.div
          className="lg:col-span-2 flex flex-col justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h3
            className="text-3xl font-bold text-white mb-4 tracking-tight"
            variants={itemVariants}
          >
            Let&apos;s work together
          </motion.h3>

          <motion.p className="text-white/60 mb-8 leading-relaxed text-lg" variants={itemVariants}>
            I am available for full-time roles & freelance projects. My inbox is always open, whether you have a question or just want to say hi!
          </motion.p>

          <motion.div className="flex flex-col gap-4" variants={itemVariants}>
            {/* Email Card */}
            <a
              href="mailto:parvezahmedprottoy.web@gmail.com"
              className="group flex items-start gap-4 p-5 rounded-2xl bg-[#0a0a0a] border border-white/5 transition-all duration-300 hover:border-[#ea580c]/30 hover:bg-[#111] hover:-translate-y-1"
            >
              <div className="flex items-center justify-center size-12 rounded-xl bg-[#050403] border border-white/10 group-hover:border-[#ea580c]/20 text-white/50 group-hover:text-[#ea580c] transition-colors">
                <FiMail className="size-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-white/50 uppercase tracking-widest mb-1">Email</span>
                <span className="text-base text-white/90 font-medium group-hover:text-white transition-colors">parvezahmedprottoy.web<br className="hidden lg:block xl:hidden"/>@gmail.com</span>
              </div>
            </a>

            {/* Location Card */}
            <div
              className="flex items-start gap-4 p-5 rounded-2xl bg-[#0a0a0a] border border-white/5"
            >
              <div className="flex items-center justify-center size-12 rounded-xl bg-[#050403] border border-white/10 text-white/50">
                <FiMapPin className="size-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-white/50 uppercase tracking-widest mb-1">Location</span>
                <span className="text-base text-white/90 font-medium">Dhaka, Bangladesh</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="lg:col-span-3 relative"
        >
          <div className="relative p-6 md:p-10 rounded-[2rem] bg-[#0a0a0a] border border-white/5 shadow-2xl overflow-hidden">
            
            {/* Subtle card glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ea580c]/5 rounded-full blur-3xl" />

            {/* Success State Overlay */}
            {formStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a0a0a]/95 backdrop-blur-md z-20"
              >
                <FaCheckCircle className="size-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-white/60 text-center px-6">
                  Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                </p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-6 px-6 py-2 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            )}

            {/* Error State Overlay */}
            {formStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a0a0a]/95 backdrop-blur-md z-20 p-6 text-center"
              >
                <FaExclamationCircle className="size-16 text-red-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Something went wrong</h3>
                <p className="text-white/60 mb-6">
                  {serverError || 'Failed to send the message. Please try again later.'}
                </p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="px-6 py-2 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 transition-colors"
                >
                  Go Back
                </button>
              </motion.div>
            )}

            {/* The Form */}
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/70 ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full px-5 py-4 bg-[#050403] border ${
                      errors.name ? 'border-red-500/50' : 'border-white/5'
                    } rounded-xl focus:outline-none focus:border-[#ea580c]/50 focus:ring-1 focus:ring-[#ea580c]/50 text-white placeholder-white/20 transition-all duration-300`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1 ml-1 font-medium">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/70 ml-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full px-5 py-4 bg-[#050403] border ${
                      errors.email ? 'border-red-500/50' : 'border-white/5'
                    } rounded-xl focus:outline-none focus:border-[#ea580c]/50 focus:ring-1 focus:ring-[#ea580c]/50 text-white placeholder-white/20 transition-all duration-300`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1 ml-1 font-medium">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-white/70 ml-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className={`w-full px-5 py-4 bg-[#050403] border ${
                    errors.subject ? 'border-red-500/50' : 'border-white/5'
                  } rounded-xl focus:outline-none focus:border-[#ea580c]/50 focus:ring-1 focus:ring-[#ea580c]/50 text-white placeholder-white/20 transition-all duration-300`}
                />
                {errors.subject && (
                  <p className="text-red-400 text-xs mt-1 ml-1 font-medium">{errors.subject}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white/70 ml-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello, I'd like to discuss a project..."
                  rows={5}
                  className={`w-full px-5 py-4 bg-[#050403] border ${
                    errors.message ? 'border-red-500/50' : 'border-white/5'
                  } rounded-xl focus:outline-none focus:border-[#ea580c]/50 focus:ring-1 focus:ring-[#ea580c]/50 text-white placeholder-white/20 transition-all duration-300 resize-none`}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1 ml-1 font-medium">{errors.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full py-4 mt-2 bg-[#ea580c]/10 border border-[#ea580c]/30 text-[#ea580c] font-semibold rounded-xl flex items-center justify-center gap-3 transition-all duration-300 hover:bg-[#ea580c] hover:text-white hover:border-[#ea580c] disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: formStatus === 'submitting' ? 1 : 1.01 }}
                whileTap={{ scale: formStatus === 'submitting' ? 1 : 0.98 }}
              >
                {formStatus === 'submitting' ? (
                  <>
                    <FaSpinner className="size-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend className="size-5" />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
