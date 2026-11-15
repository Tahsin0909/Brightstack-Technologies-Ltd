"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/content";
import { ButtonFaces } from "./ui";

// Payload form input: flat, square, soft shadow, input-tone background.
const field =
  "w-full rounded-none border border-line bg-panel px-5 py-4 text-base text-fg shadow-[0_2px_3px_0_rgba(0,2,4,0.05),0_10px_4px_-8px_rgba(0,2,4,0.02)] placeholder:text-muted transition-colors hover:border-muted focus:border-fg focus:outline-none";
const labelCls = "label mb-2 block text-muted";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    // TODO: deliver the inquiry. Post `data` to an API route, a server action,
    // or your form service, then show a real confirmation once it succeeds.
    console.info("Contact form payload (not sent anywhere yet):", data);
    setStatus("ready");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6 sm:grid-cols-2" noValidate={false}>
      <div>
        <label htmlFor="full-name" className={labelCls}>
          Full name
        </label>
        <input id="full-name" name="fullName" required autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="company-name" className={labelCls}>
          Company name
        </label>
        <input id="company-name" name="company" autoComplete="organization" className={field} />
      </div>
      <div>
        <label htmlFor="work-email" className={labelCls}>
          Work email
        </label>
        <input
          id="work-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={field}
        />
      </div>
      <div>
        <label htmlFor="phone-number" className={labelCls}>
          Phone number (optional)
        </label>
        <input id="phone-number" name="phone" type="tel" autoComplete="tel" className={field} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="interest" className={labelCls}>
          What are you interested in?
        </label>
        <select id="interest" name="interest" required defaultValue="" className={field}>
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Something else">Something else</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="project-details" className={labelCls}>
          Project details
        </label>
        <textarea
          id="project-details"
          name="details"
          required
          rows={6}
          placeholder="What are you trying to build or improve?"
          className={field}
        />
      </div>
      <div>
        <label htmlFor="timeline" className={labelCls}>
          Estimated timeline (optional)
        </label>
        <select id="timeline" name="timeline" defaultValue="" className={field}>
          <option value="">Not sure yet</option>
          <option>Within 1 month</option>
          <option>1 to 3 months</option>
          <option>3 to 6 months</option>
          <option>More than 6 months</option>
        </select>
      </div>
      <div>
        <label htmlFor="budget" className={labelCls}>
          Estimated budget (optional)
        </label>
        <input id="budget" name="budget" placeholder="A rough range is fine" className={field} />
      </div>

      <div className="sm:col-span-2">
        <button type="submit" className="pl-btn pl-btn--solid w-full cursor-pointer text-lg">
          <ButtonFaces>Send Message</ButtonFaces>
        </button>
        <p className="mt-4 text-sm text-muted">
          Your information will only be used to respond to your inquiry.
        </p>
        {status === "ready" ? (
          <p role="status" className="mt-4 border border-signal p-4 text-sm leading-relaxed">
            The form is valid, but it is not connected to a delivery service yet, so nothing was
            sent. Connect it in <code className="font-mono">components/ContactForm.tsx</code>.
          </p>
        ) : null}
      </div>
    </form>
  );
}
