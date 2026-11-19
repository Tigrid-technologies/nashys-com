import { FiMail, FiPhone } from "react-icons/fi";
import Reveal from "./Reveal";

export interface PolicySection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

interface PolicyLayoutProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: PolicySection[];
}

const PolicyLayout = ({
  eyebrow,
  title,
  subtitle,
  lastUpdated,
  sections,
}: PolicyLayoutProps) => {
  return (
    <div className="bg-white font-sans">
      {/* Banner */}
      <section className="bg-secondary py-7">
        <div className="mx-auto px-6">
          <Reveal direction="left">
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-primary/70">
              {eyebrow}
            </p>
            <h1 className="mt-2 font-roman text-4xl font-light tracking-tight text-primary md:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-700">
              {subtitle}
            </p>
            <p className="mt-4 text-xs text-gray-500">
              Last updated: {lastUpdated}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="mx-auto space-y-10 px-6">
          {sections.map((section, index) => (
            <Reveal
              key={section.title}
              direction="up"
              delay={Math.min(index * 0.05, 0.2)}
              className="border-b border-gray-200 pb-8 last:border-b-0"
            >
              <h2 className="font-roman text-2xl text-primary">
                {index + 1}. {section.title}
              </h2>

              {section.paragraphs?.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-3 text-[14px] leading-relaxed text-gray-700"
                >
                  {paragraph}
                </p>
              ))}

              {section.bullets && (
                <ul className="mt-3 list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-gray-700">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}

          {/* Contact Box */}
          <Reveal
            direction="up"
            className="rounded-2xl bg-secondary/70 p-6 ring-1 ring-primary/10"
          >
            <h3 className="font-roman text-xl text-primary">
              Questions About This Policy?
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-gray-700">
              If you have any questions or need clarification, feel free to
              reach out to Nashys &amp; Co. directly.
            </p>
            <div className="mt-4 flex flex-wrap gap-6 text-sm text-primary">
              <a
                href="mailto:nashysandco@gmail.com"
                className="inline-flex items-center gap-2 transition-opacity hover:opacity-75"
              >
                <FiMail />
                nashysandco@gmail.com
              </a>
              <a
                href="tel:+917994519952"
                className="inline-flex items-center gap-2 transition-opacity hover:opacity-75"
              >
                <FiPhone />
                +91 7994519952
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default PolicyLayout;
