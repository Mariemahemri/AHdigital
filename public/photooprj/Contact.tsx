'use client';
import { useState } from 'react';
import { motion } from "framer-motion";
import Tag from "@/components/tag";
import Button from "@/components/Button";
import cursorYouImage from "@/assets/images/cursor-you.svg";
import { useCallback } from "react";



export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: '',
    company: '',
    website: '',
    companySize: '',
    annualRevenue: '',
    listSelection: '',
    functionSelection: '',
    budget: '',
    services: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
     const response = await fetch('/api/n8n', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

      if (response.ok) {
        setSubmitStatus('success');
        // Réinitialisez le formulaire si besoin
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-20 min-h-screen flex items-center justify-center overflow-hidden text-white">
      <div className="z-10 px-4 max-w-4xl w-full">
        <h2 className="text-6xl font-medium text-center mt-6 mb-10">
          Nous <span className="text-lime-200">Contacter</span>
        </h2>

        <form onSubmit={handleSubmit} className="relative  justify-left z-10 space-y-6 bg-black/50 backdrop-blur-md p-8 rounded-xl  max-w-2xl w-full mx-auto j">
          {/* Nom/Prénom et Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white/80 mb-2">Quel est votre Nom/Prénom ? * </label>
              <input 
                type="text"
                name="fullName"
                placeholder="Nom"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/10  placeholder-neutral-400 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-white/80 mb-2">Quelle est votre adresse e-mail ? *</label>
              <input 
                type="email"
                name="email"
                placeholder="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/10  placeholder-neutral-400 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Rôle dans l'entreprise */}
          <div>
            <label className="block text-white/80 mb-2">Quel est votre rôle dans l'entreprise ? * </label>
            <input 
              type="text"
              name="role"
              placeholder="Saisissez votre rôle "
              value={formData.role}
              onChange={handleChange}
              className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/10  placeholder-neutral-400 focus:outline-none"
            />
          </div>

          {/* Entreprise */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white/80 mb-2">Nom Entreprise *</label>
              <input 
                type="text"
                name="company"
                placeholder="Saisissez le nom de l'entreprise"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/10  placeholder-neutral-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-white/80 mb-2">Site web Entreprise * </label>
              <input 
                type="text"
                name="website"
                placeholder="Saisissez le site web de l'entreprise"
                value={formData.website}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/10  placeholder-neutral-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Taille entreprise et CA */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white/80 mb-2">Taille de l'entreprise *</label>
              <select
                name="companySize"
                value={formData.companySize}
                onChange={handleChange}
                className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/10  placeholder-neutral-400 focus:outline-none"
              >
                <option value="">Sélectionnez</option>
                <option value="<10">Moins de 10</option>
                <option value="10-50">10-50</option>
                <option value="50-100">50-100</option>
                <option value="100-500">100-500</option>
                <option value=">500">Plus de 500</option>
              </select>
            </div>
            <div>
              <label className="block text-white/80 mb-2">Chiffre d'affaires annuel * </label>
              <select
                name="annualRevenue"
                value={formData.annualRevenue}
                onChange={handleChange}
                className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/10  placeholder-neutral-400 focus:outline-none"
              >
                <option value="">Sélectionnez</option>
                <option value="<100k">Moins de 100k€</option>
                <option value="100k-500k">100k€-500k€</option>
                <option value="500k-1M">500k€-1M€</option>
                <option value="1M-2M">1M€-2M€</option>
                <option value=">2M">Plus de 2M€</option>
              </select>
            </div>
          </div>

          {/* Sélections */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white/80 mb-2">Budget du projet * </label>
              <select
                name="listSelection"
                value={formData.listSelection}
                onChange={handleChange}
                className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/10  placeholder-neutral-400 focus:outline-none"
              >
                <option value="">Sélectionnez votre budget</option>
                <option value="<10k">Moins de 10K€</option>
                <option value="10k-50k">10k€-50k€</option>
                <option value="50k-100k">50k€-100k€</option>
                <option value=">100k">plus de 100k€</option>
              </select>
            </div>
            <br/>
            <div>
              <label className="block text-white/80 mb-2">Quels services vous intéressent ?</label>
              <select
                name="functionSelection"
                value={formData.functionSelection}
                onChange={handleChange}
                className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/10  placeholder-neutral-400 focus:outline-none"
              >
                <option value="">Sélectionnez un service</option>
                <option value="opportunites-ia">Identifier les opportunités IA</option>
                <option value="formation-ia">Former votre équipe à l'IA</option>
                <option value="solutions-ia">Développer des solutions IA sur mesure</option>
              </select>
            </div>
          </div>
          {/* Message */}
          <div>
            <label className="block text-white/80 mb-2">Message</label>
            <textarea 
              rows={4}
              name="message"
              placeholder="Décrivez vous besoins"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/10  placeholder-neutral-400 focus:outline-none"
            />
          </div>

          {/* Bouton de soumission */}
          <div>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer border border-[#d2ffd2] rounded-lg px-4 py-2 hover:bg-[#d2ffd2]/10 w-fit"
            >
              <span className="text-white hover:text-[#d2ffd2] text-sm">Envoyer la demande </span>
              <span className="text-[#d2ffd2] text-sm">→</span>
            </motion.div>

            
            {submitStatus === 'success' && (
              <p className="mt-4 text-green-400">Merci ! Votre message a bien été envoyé.</p>
            )}
            {submitStatus === 'error' && (
              <p className="mt-4 text-red-400">Une erreur est survenue. Veuillez réessayer.</p>
            )}
            
          </div>
        </form>
      </div>
    </section>
  );
}