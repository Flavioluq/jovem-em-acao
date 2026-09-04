const steps = [
  {
    numero: "01",
    titulo: "Mapeamento coletivo",
    texto:
      "Você reporta um problema do seu bairro no grupo: uma rua sem iluminação, um posto de saúde sem médico, o que for.",
  },
  {
    numero: "02",
    titulo: "Votação de prioridades",
    texto:
      "A comunidade vota no que mais precisa de atenção agora. As prioridades aparecem, o resto espera a vez.",
  },
  {
    numero: "03",
    titulo: "Cobrança em bloco",
    texto:
      "O grupo cobra junto, com mais peso do que uma reclamação isolada. Quanto mais gente, mais difícil ignorar.",
  },
];

export default function MethodologySteps() {
  return (
    <section className="border-y border-border bg-surface/40">
      <div className="mx-auto max-w-content px-6 py-20">
        <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
          Como funciona
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <div key={step.numero}>
              <span className="font-display text-sm text-highlight">
                {step.numero}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                {step.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/80">
                {step.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
