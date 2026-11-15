import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Container, Label, PageHero } from "@/components/ui";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your project, challenge, or idea. We will review your message and help you understand the next steps.",
};

export default function Contact() {
  const details = [
    { label: "Business email", value: contact.email, href: contact.email && `mailto:${contact.email}` },
    { label: "Phone", value: contact.phone, href: contact.phone && `tel:${contact.phone}` },
    { label: "Office", value: contact.address, href: "" },
    { label: "LinkedIn", value: contact.linkedin, href: contact.linkedin },
  ].filter((d) => d.value);

  return (
    <>
      <PageHero label="Contact" title="Start a Conversation With Us">
        <p>
          Tell us about your project, challenge, or idea. We will review your message and help you
          understand the next steps.
        </p>
      </PageHero>

      <section className="border-t border-line">
        <Container className="grid gap-12 py-14 md:grid-cols-4 md:gap-0 md:py-20">
          <aside className="md:pr-10">
            <Label>What happens next</Label>
            <ol className="mt-6 space-y-5 leading-relaxed text-muted">
              <li>
                <span className="label block text-fg">Step 01</span>
                You send us a short description of what you need.
              </li>
              <li>
                <span className="label block text-fg">Step 02</span>
                We review your message and reply with any questions.
              </li>
              <li>
                <span className="label block text-fg">Step 03</span>
                We agree on the next steps together.
              </li>
            </ol>
            {details.length > 0 ? (
              <dl className="mt-10 space-y-5 border-t border-line pt-8">
                {details.map((d) => (
                  <div key={d.label}>
                    <dt className="label text-muted">{d.label}</dt>
                    <dd className="mt-1 break-words text-lg">
                      {d.href ? (
                        <a href={d.href} className="hover:underline">
                          {d.value}
                        </a>
                      ) : (
                        d.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </aside>
          <div className="md:col-span-3 md:pl-8">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
