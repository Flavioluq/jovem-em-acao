import { contato } from "@/data/contato";

export default function Contact() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-content px-6 py-20 text-center">
        <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
          Quer conversar sobre o projeto?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted">
          Fale direto comigo pelos canais abaixo.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`mailto:${contato.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-display text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
          >
            E-mail
          </a>
          <a
            href={contato.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-secondary px-6 py-3 font-display text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
