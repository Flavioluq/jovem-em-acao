import Link from "next/link";
import { regioes } from "@/data/regioes";

// Rotação simples de cor por índice, só pra dar variedade visual sem
// complicar a leitura — todos os cards têm o mesmo tamanho e formato.
const accents = ["border-primary/60", "border-secondary/60", "border-highlight/60"];

export default function RegionGrid() {
  return (
    <section id="regioes" className="mx-auto max-w-content px-6 pb-24">
      <div className="mb-8">
        <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
          Escolha sua região
        </h2>
        <p className="mt-2 text-sm text-muted">
          Toque na sua região e entre direto no grupo do WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {regioes.map((regiao, i) => (
          <Link
            key={regiao.slug}
            href={`/regiao/${regiao.slug}`}
            className={`group flex aspect-square flex-col justify-between rounded-2xl border-2 ${
              accents[i % accents.length]
            } bg-surface p-5 transition-transform hover:-translate-y-1 hover:bg-surfaceAlt`}
          >
            <span className="font-display text-xs text-muted">
              {String(regiao.numero).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold text-ink group-hover:text-highlight">
                {regiao.nome}
              </h3>
              <p className="mt-1 text-xs text-muted">
                {regiao.bairros.length} bairros
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
