'use client';

import { useState } from 'react';
import { Button, TextInput, TextArea } from '@carbon/react';

interface FormState {
  name: string;
  organisation: string;
  email: string;
  message: string;
}

const initialState: FormState = {
  name: '',
  organisation: '',
  email: '',
  message: '',
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="dsaas-form-success">
        <p className="cds--productive-heading-03">Thank you.</p>
        <p className="cds--body-long-01" style={{ marginTop: 'var(--cds-spacing-04)', color: 'var(--cds-text-secondary)' }}>
          We have received your message and will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="dsaas-form-field">
        <TextInput
          id="contact-name"
          labelText="Name"
          value={form.name}
          onChange={(e) => handleChange('name', e.target.value)}
          required
        />
      </div>
      <div className="dsaas-form-field">
        <TextInput
          id="contact-organisation"
          labelText="Organisation"
          value={form.organisation}
          onChange={(e) => handleChange('organisation', e.target.value)}
        />
      </div>
      <div className="dsaas-form-field">
        <TextInput
          id="contact-email"
          labelText="Email"
          type="email"
          value={form.email}
          onChange={(e) => handleChange('email', e.target.value)}
          required
        />
      </div>
      <div className="dsaas-form-field">
        <TextArea
          id="contact-message"
          labelText="Message"
          value={form.message}
          onChange={(e) => handleChange('message', e.target.value)}
          rows={6}
          required
        />
      </div>
      <div className="dsaas-form-submit">
        <Button type="submit" kind="primary">
          Send
        </Button>
      </div>
    </form>
  );
}
