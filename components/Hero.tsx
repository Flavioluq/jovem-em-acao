export default function Hero() {
  return (
    <section className="mx-auto max-w-content px-6 pt-20 pb-16 md:pt-28 md:pb-20">
      <p className="font-display text-sm font-medium text-highlight">
        Jovem em Ação - Plataforma de Liderança Jovem 
      </p>
      <h1 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
        O problema da sua rua começa a ser resolvido no grupo do seu bairro.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
        Escolha sua região, entre no grupo de WhatsApp e comece a protagonizar a transformação do seu bairro.
        Vote e desenvolva soluções junto com quem mora perto de você.
      </p>
      <a
        href="#regioes"
        className="inline-flex mt-3 items-center gap-2 rounded-full bg-primary px-6 py-3 font-display text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
      >
        Encontrar minha região
      </a>
    </section>
  );
}
