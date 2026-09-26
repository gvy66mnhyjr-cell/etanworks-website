"use client";

import { useState } from "react";

export default function Contact() {
  const [emailMenuOpen, setEmailMenuOpen] = useState(false);

  const email = "info@etanworks.co.ke";

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}`;

  const outlookUrl = `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(
    email
  )}`;

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setEmailMenuOpen(false);
  };

  return (
    <section id="contact" className="bg-black py-20 text-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-widest text-yellow-500">
            Contact Etanworks
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Let&apos;s Discuss Your Project.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Get in touch with Etanworks for earthmoving, excavation, civil
            engineering and construction support services.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+254742260652"
              className="rounded-full bg-yellow-500 px-7 py-3 font-semibold text-black transition hover:bg-yellow-400"
            >
              Call Us
            </a>

            <div className="relative">
              <button
                type="button"
                onClick={() => setEmailMenuOpen(!emailMenuOpen)}
                className="rounded-full border border-white/30 px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Email Us
              </button>

              {emailMenuOpen && (
                <div className="absolute bottom-full left-1/2 z-50 mb-3 w-64 -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 text-left shadow-2xl">
                  <div className="border-b border-white/10 px-5 py-3">
                    <p className="text-sm font-semibold text-white">
                      Choose your email service
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                      Send to {email}
                    </p>
                  </div>

                  <a
                    href={gmailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-5 py-3 text-sm text-white transition hover:bg-white/10"
                  >
                    Gmail
                  </a>

                  <a
                    href={outlookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-5 py-3 text-sm text-white transition hover:bg-white/10"
                  >
                    Outlook / Microsoft 365
                  </a>

                  <a
                    href={`mailto:${email}`}
                    className="block px-5 py-3 text-sm text-white transition hover:bg-white/10"
                  >
                    Default Email App
                  </a>

                  <button
                    type="button"
                    onClick={copyEmail}
                    className="block w-full px-5 py-3 text-left text-sm text-gray-300 transition hover:bg-white/10"
                  >
                    Copy Email Address
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}