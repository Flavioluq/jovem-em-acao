import Link from "next/link";
import { notFound } from "next/navigation";
import { regioes, getRegiaoBySlug } from "@/data/regioes";

export function generateStaticParams() {
  return regioes.map((regiao) => ({ slug: regiao.slug }));
}

export default async function RegiaoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const regiao = getRegiaoBySlug(slug);

  if (!regiao) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-content px-6 py-16 md:py-24">
      <Link
        href="/"
        className="text-sm text-muted transition-colors hover:text-highlight"
      >
        ← Todas as regiões
      </Link>

      <div className="mt-6 flex items-center gap-3">
        <span className="font-display text-sm text-highlight">
          {String(regiao.numero).padStart(2, "0")}
        </span>
        <span className="h-px flex-1 max-w-[40px] bg-border" />
        <span className="text-sm text-muted">região de Goiânia</span>
      </div>

      <h1 className="mt-4 font-display text-4xl font-semibold text-ink md:text-5xl">
        {regiao.nome}
      </h1>

      <p className="mt-4 max-w-lg text-muted">
        Bairros que fazem parte dessa região:
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {regiao.bairros.map((bairro) => (
          <li
            key={bairro}
            className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-ink"
          >
            {bairro}
          </li>
        ))}
      </ul>

      <div className="mt-12 max-w-md rounded-lg border border-primary/40 bg-surface p-8">
        <h2 className="font-display text-xl font-semibold text-ink">
          Entre no grupo do WhatsApp
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          É lá que os mapeamentos, votações e cobranças da região {regiao.nome}{" "}
          acontecem. Entre e apresente o problema do seu bairro.
        </p>
        <a
          href={regiao.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-display text-sm font-semibold text-base transition-opacity hover:opacity-90"
        >
          Entrar no grupo da região {regiao.nome}
        </a>
      </div>
    </main>
  );
}
