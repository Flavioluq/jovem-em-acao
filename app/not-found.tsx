import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-content flex-col items-start px-6 py-24">
      <p className="font-display text-sm text-highlight">404</p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-ink">
        Essa região não existe.
      </h1>
      <p className="mt-3 text-muted">
        Confira a lista completa das 7 regiões de Goiânia.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-md border border-primary bg-primary/10 px-6 py-3 font-display text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-base"
      >
        Voltar para a página inicial
      </Link>
    </main>
  );
}
