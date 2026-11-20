import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiCheckCircle,
  FiClock,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import Reveal from "../common/Reveal";

const socials = [
  { label: "Facebook", href: "#", Icon: FaFacebookF },
  { label: "Instagram", href: "#", Icon: FaInstagram },
  { label: "LinkedIn", href: "#", Icon: FaLinkedinIn },
  { label: "YouTube", href: "#", Icon: FaYoutube },
];

const workshopOptions = [
  "Online Texture Art Workshop",
  "Offline Texture Art Mini-Workshop (Kochi)",
  "Custom Artwork / General Enquiry",
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    workshop: workshopOptions[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white font-sans">
      {/* Banner */}
      <section className="bg-secondary py-14">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal direction="left">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-primary transition-opacity hover:opacity-75"
            >
              <FiArrowLeft />
              Back to Home
            </Link>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-primary/70">
              Get In Touch
            </p>
            <h1 className="mt-2 font-roman text-4xl font-light tracking-tight text-primary md:text-6xl">
              Register &amp; Connect With Us
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-700">
              Ready to reserve your seat in our next texture art workshop or
              have a question about our sessions? Fill out the form below and
              we&apos;ll get back to you shortly.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 md:grid-cols-[1fr_1.35fr]">
          {/* Left: Contact Info Card */}
          <Reveal
            direction="left"
            className="rounded-2xl bg-gradient-to-br from-primary via-primary to-[#4a0b0b] p-8 text-secondary shadow-2xl shadow-primary/25 ring-1 ring-white/10"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-secondary/70">
              Nashys &amp; Co.
            </p>
            <h2 className="mt-2 font-roman text-3xl font-light text-white">
              Let&apos;s Create Something Beautiful Together
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-secondary/85">
              Reach out directly for workshop schedules, private group
              bookings, or custom texture art pieces.
            </p>

            <ul className="mt-8 space-y-5 text-sm">
              <li>
                <a
                  href="tel:+917994519952"
                  className="flex items-start gap-4 transition-opacity hover:opacity-80"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-base text-white">
                    <FiPhone />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-secondary/65">
                      Phone / WhatsApp
                    </p>
                    <p className="mt-0.5 font-medium text-white">
                      +91 7994519952
                    </p>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="mailto:nashysandco@gmail.com"
                  className="flex items-start gap-4 transition-opacity hover:opacity-80"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-base text-white">
                    <FiMail />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-secondary/65">
                      Email
                    </p>
                    <p className="mt-0.5 font-medium text-white">
                      nashysandco@gmail.com
                    </p>
                  </div>
                </a>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-base text-white">
                  <FiMapPin />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-secondary/65">
                    Workshop Location
                  </p>
                  <p className="mt-0.5 font-medium text-white">
                    Kochi, Kerala &amp; Online Worldwide
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-base text-white">
                  <FiClock />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-secondary/65">
                    Response Hours
                  </p>
                  <p className="mt-0.5 font-medium text-white">
                    Mon – Sat, 9:00 AM – 6:00 PM IST
                  </p>
                </div>
              </li>
            </ul>

            <hr className="my-8 border-white/15" />

            <div>
              <p className="text-xs uppercase tracking-wider text-secondary/70">
                Follow Our Journey
              </p>
              <ul className="mt-4 flex gap-3">
                {socials.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-secondary/40 text-sm text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:text-primary"
                    >
                      <Icon />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Right: Registration / Enquiry Form */}
          <div id="register-form" className="scroll-mt-24">
            <Reveal
              direction="right"
              delay={0.15}
              className="rounded-2xl border border-primary/15 bg-secondary/35 p-6 shadow-lg shadow-primary/5 md:p-8"
            >
            {submitted ? (
              <div className="flex flex-col items-center py-12 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-3xl text-primary">
                  <FiCheckCircle />
                </span>
                <h2 className="mt-5 font-roman text-3xl text-primary">
                  Thank You, {form.name}!
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-700">
                  Your registration request for{" "}
                  <span className="font-medium text-primary">
                    {form.workshop}
                  </span>{" "}
                  has been received. We&apos;ll reach out to you soon at{" "}
                  <span className="font-medium">{form.email}</span>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      email: "",
                      phone: "",
                      workshop: workshopOptions[0],
                      message: "",
                    });
                  }}
                  className="mt-7 cursor-pointer rounded-full bg-primary px-6 py-2.5 text-xs font-medium tracking-wide text-white shadow-md shadow-primary/25 transition hover:opacity-90"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-roman text-3xl font-light text-primary">
                  Workshop Registration &amp; Enquiry
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Tell us which workshop you&apos;re interested in and we&apos;ll
                  share the next available batch details.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-medium uppercase tracking-wider text-gray-700"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        placeholder="Your full name"
                        className="mt-2 w-full rounded-xl border border-primary/20 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-medium uppercase tracking-wider text-gray-700"
                      >
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        placeholder="+91 00000 00000"
                        className="mt-2 w-full rounded-xl border border-primary/20 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium uppercase tracking-wider text-gray-700"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-xl border border-primary/20 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="workshop"
                      className="block text-xs font-medium uppercase tracking-wider text-gray-700"
                    >
                      Interested In
                    </label>
                    <select
                      id="workshop"
                      value={form.workshop}
                      onChange={(e) =>
                        setForm({ ...form, workshop: e.target.value })
                      }
                      className="mt-2 w-full rounded-xl border border-primary/20 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                    >
                      {workshopOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium uppercase tracking-wider text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="Share your preferred dates, experience level, or any questions..."
                      className="mt-2 w-full resize-none rounded-xl border border-primary/20 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-primary py-2.5 pl-6 pr-2 text-xs font-medium tracking-wide text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Submit Registration
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/60 bg-white/15 text-sm transition-colors duration-300 group-hover:bg-white group-hover:text-primary">
                      <FiArrowUpRight />
                    </span>
                  </button>
                </form>
              </>
            )}
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
