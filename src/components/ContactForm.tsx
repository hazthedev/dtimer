import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const formspreeId = import.meta.env.PUBLIC_FORMSPREE_ID || 'your_formspree_id';
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert('Something went wrong. Please try again or WhatsApp us directly.');
      }
    } catch {
      alert('Something went wrong. Please try again or WhatsApp us directly.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <CheckCircle size={48} className="mx-auto text-banana-leaf-green" />
        <h3 className="mt-4 font-display text-2xl font-semibold text-warm-black">Message sent!</h3>
        <p className="mt-2 text-tea-brown">We'll get back to you as soon as possible.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sambal-red font-medium hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-warm-black mb-1.5">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-lg border border-coconut-cream bg-bone-white text-warm-black placeholder:text-tea-brown/50 focus:outline-none focus:ring-2 focus:ring-sambal-red/30 focus:border-sambal-red transition-all"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="contact" className="block text-sm font-medium text-warm-black mb-1.5">
            Phone or Email
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            required
            className="w-full px-4 py-3 rounded-lg border border-coconut-cream bg-bone-white text-warm-black placeholder:text-tea-brown/50 focus:outline-none focus:ring-2 focus:ring-sambal-red/30 focus:border-sambal-red transition-all"
            placeholder="018-203 5828 or name@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="date" className="block text-sm font-medium text-warm-black mb-1.5">
          Event Date (optional)
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className="w-full px-4 py-3 rounded-lg border border-coconut-cream bg-bone-white text-warm-black placeholder:text-tea-brown/50 focus:outline-none focus:ring-2 focus:ring-sambal-red/30 focus:border-sambal-red transition-all"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-warm-black mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-coconut-cream bg-bone-white text-warm-black placeholder:text-tea-brown/50 focus:outline-none focus:ring-2 focus:ring-sambal-red/30 focus:border-sambal-red transition-all resize-none"
          placeholder="Table reservation, catering enquiry, or just saying hello..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center gap-2 bg-sambal-red text-bone-white px-8 py-3.5 rounded-lg font-medium hover:bg-charred-brown transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send size={16} />
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
