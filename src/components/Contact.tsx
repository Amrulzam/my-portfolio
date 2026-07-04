import { useState, type FC, type ChangeEvent, type FormEvent } from 'react';
import styles from './Contact.module.css';
import Toast from './Toast';

// ============================================================
// EmailJS Configuration
// Set these values in your .env.local file:
//   VITE_EMAILJS_SERVICE_ID  = your EmailJS service ID
//   VITE_EMAILJS_TEMPLATE_ID = your EmailJS template ID
//   VITE_EMAILJS_PUBLIC_KEY  = your EmailJS public key
//
// To get these:
//   1. Sign up at https://www.emailjs.com
//   2. Create an Email Service (connect your Gmail)
//   3. Create an Email Template (use {{from_name}}, {{from_email}}, {{message}})
//   4. Copy IDs from your EmailJS dashboard
// ============================================================
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string;

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: FC = () => {
  const [form, setForm]       = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors]   = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast]     = useState<{ message: string; type: 'success' | 'error' | '' }>({
    message: '',
    type: '',
  });

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim())           newErrors.name    = 'Name is required.';
    if (!form.email.trim())          newErrors.email   = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                                     newErrors.email   = 'Please enter a valid email.';
    if (!form.message.trim())        newErrors.message = 'Message is required.';
    else if (form.message.trim().length < 10)
                                     newErrors.message = 'Message must be at least 10 characters.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      // Check if EmailJS env vars are configured
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        // Demo mode — show success toast without actually sending
        await new Promise(resolve => setTimeout(resolve, 1200));
        setForm({ name: '', email: '', message: '' });
        setToast({
          message: `Thanks ${form.name}! (EmailJS not configured yet — add your keys to .env.local to send real emails.)`,
          type: 'success',
        });
        return;
      }

      // Send via EmailJS REST API — no npm package needed
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id:  EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id:     EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name:  form.name,
            from_email: form.email,
            message:    form.message,
            to_email:   'amrulzameer@gmail.com',
          },
        }),
      });

      if (!response.ok) throw new Error(`EmailJS error: ${response.status}`);

      setForm({ name: '', email: '', message: '' });
      setToast({
        message: `Hello ${form.name}, your message has been sent! I'll get back to you soon.`,
        type: 'success',
      });
    } catch (error) {
      console.error('Contact form error:', error);
      setToast({
        message: 'Failed to send your message. Please try again or email me directly at amrulzameer@gmail.com',
        type: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section id="contact" className={`section ${styles.contact}`} aria-labelledby="contact-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="section-tag">Get In Touch</span>
            <h2 id="contact-heading" className="section-title">Contact Me</h2>
            <p className="section-desc">
              I'm currently open to new opportunities and collaborations. Whether you have a project
              in mind, need assistance with web development, or just want to say hello, feel free
              to reach out!
            </p>
          </div>

          <div className={styles.grid}>
            {/* Info panel */}
            <div className={styles.infoPanel}>
              <h3 className={styles.infoTitle}>Let's work together</h3>
              <p className={styles.infoText}>
                I'm available for freelance projects, full-time positions, and internships.
                Drop me a message and I'll respond as soon as possible.
              </p>

              <div className={styles.contactItems}>
                <a
                  href="mailto:amrulzameer@gmail.com"
                  className={styles.contactItem}
                  aria-label="Send email to amrulzameer@gmail.com"
                >
                  <div className={styles.contactIcon}>
                    <i className="fa-regular fa-envelope" aria-hidden="true" />
                  </div>
                  <div>
                    <p className={styles.contactLabel}>Email</p>
                    <p className={styles.contactValue}>amrulzameer@gmail.com</p>
                  </div>
                </a>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <i className="fa-solid fa-location-dot" aria-hidden="true" />
                  </div>
                  <div>
                    <p className={styles.contactLabel}>Location</p>
                    <p className={styles.contactValue}>Sri Lanka</p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <i className="fa-regular fa-circle-check" aria-hidden="true" />
                  </div>
                  <div>
                    <p className={styles.contactLabel}>Status</p>
                    <p className={`${styles.contactValue} ${styles.available}`}>
                      Available for opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className={styles.form}
              noValidate
              aria-label="Contact form"
            >
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="contact-name" className={styles.label}>
                    Your Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-invalid={!!errors.name}
                    autoComplete="name"
                  />
                  {errors.name && (
                    <span id="name-error" className={styles.error} role="alert">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-email" className={styles.label}>
                    Your Email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={!!errors.email}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <span id="email-error" className={styles.error} role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-message" className={styles.label}>
                  Message <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me about your project or just say hello..."
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <span id="message-error" className={styles.error} role="alert">
                    {errors.message}
                  </span>
                )}
              </div>

              <button
                id="contact-submit-btn"
                type="submit"
                className={`btn-primary ${styles.submitBtn}`}
                disabled={loading}
                aria-busy={loading}
              >
                {loading ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin" aria-hidden="true" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <i className="fa-regular fa-paper-plane" aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: '', type: '' })}
      />
    </>
  );
};

export default Contact;
