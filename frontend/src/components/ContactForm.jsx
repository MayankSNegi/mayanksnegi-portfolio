import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { submitContactForm } from "../lib/api";
import "./ContactForm.css";

const INITIAL_FORM = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  subject: "",
  message: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form) {
  const errors = {};

  if (!form.fullName.trim()) {
    errors.fullName = "Full name is required.";
  } else if (form.fullName.trim().length < 2) {
    errors.fullName = "Full name must be at least 2 characters.";
  }

  if (!form.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!EMAIL_REGEX.test(form.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!form.subject.trim()) {
    errors.subject = "Subject is required.";
  } else if (form.subject.trim().length < 3) {
    errors.subject = "Subject must be at least 3 characters.";
  }

  if (!form.message.trim()) {
    errors.message = "Message is required.";
  } else if (form.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    setStatusMessage("");

    try {
      await submitContactForm(form);
      setStatus("success");
      setStatusMessage("Message sent successfully. Thank you for reaching out!");
      setForm(INITIAL_FORM);
    } catch (err) {
      setStatus("error");
      setStatusMessage(err.message || "Something went wrong. Please try again.");
    }
  };

  const isSubmitting = status === "submitting";

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="fullName">Full Name *</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={form.fullName}
            onChange={handleChange}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            disabled={isSubmitting}
          />
          {errors.fullName && (
            <p className="contact-form__error" id="fullName-error">
              {errors.fullName}
            </p>
          )}
        </div>

        <div className="contact-form__field">
          <label htmlFor="email">Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="contact-form__error" id="email-error">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="company">Company / Organization</label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="contact-form__field">
        <label htmlFor="subject">Subject *</label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={form.subject}
          onChange={handleChange}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          disabled={isSubmitting}
        />
        {errors.subject && (
          <p className="contact-form__error" id="subject-error">
            {errors.subject}
          </p>
        )}
      </div>

      <div className="contact-form__field">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="contact-form__error" id="message-error">
            {errors.message}
          </p>
        )}
      </div>

      <button type="submit" className="contact-form__submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="contact-form__spinner" /> Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>

      {status === "success" && (
        <p className="contact-form__status contact-form__status--success" role="status">
          <CheckCircle2 size={16} /> {statusMessage}
        </p>
      )}

      {status === "error" && (
        <p className="contact-form__status contact-form__status--error" role="alert">
          <AlertCircle size={16} /> {statusMessage}
        </p>
      )}
    </form>
  );
}
