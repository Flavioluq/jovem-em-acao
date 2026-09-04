export type Regiao = {
  numero: number;
  slug: string;
  nome: string;
  bairros: string[];
  whatsappLink: string;
};

// Substitua os valores de "whatsappLink" pelos links reais dos grupos
// de cada região assim que forem criados. O formato de convite do
// WhatsApp é sempre: https://chat.whatsapp.com/XXXXXXXXXXXXXXXXXXXXXX
export const regioes: Regiao[] = [
  {
    numero: 1,
    slug: "central",
    nome: "Central",
    bairros: ["Setor Central", "Setor Sul", "Setor Universitário", "Setor Oeste", "Setor Aeroporto", "Setor Coimbra", "Vila Nova", "Setor Norte Ferroviário"],
    whatsappLink: "https://chat.whatsapp.com/SEU-LINK-CENTRAL",
  },
  {
    numero: 2,
    slug: "sul",
    nome: "Sul",
    bairros: ["Setor Bueno", "Setor Marista", "Jardim Goiás", "Jardim América", "Parque Amazônia", "Setor Pedro Ludovico", "Nova Suíça", "Serrinha", "Alto da Glória"],
    whatsappLink: "https://chat.whatsapp.com/SEU-LINK-SUL",
  },
  {
    numero: 3,
    slug: "norte",
    nome: "Norte",
    bairros: ["Jardim Guanabara", "Setor Jaó", "Goiânia 2", "Setor Criméia Leste", "Setor Itatiaia", "Residencial Orlando de Morais", "Vale dos Sonhos"],
    whatsappLink: "https://chat.whatsapp.com/SEU-LINK-NORTE",
  },
  {
    numero: 4,
    slug: "noroeste",
    nome: "Noroeste",
    bairros: ["Jardim Curitiba", "Recanto do Bosque", "Finsocial", "Morada do Sol", "Parque Tremendão", "Vila Mutirão", "Jardim Primavera"],
    whatsappLink: "https://chat.whatsapp.com/SEU-LINK-NOROESTE",
  },
  {
    numero: 5,
    slug: "leste",
    nome: "Leste",
    bairros: ["Jardim Novo Mundo", "Conjunto Riviera", "Parque das Laranjeiras", "Setor Leste Vila Nova", "Senador Canedo", "Água Branca", "Alphaville e Jardins"],
    whatsappLink: "https://chat.whatsapp.com/SEU-LINK-LESTE",
  },
  {
    numero: 6,
    slug: "oeste",
    nome: "Oeste",
    bairros: ["Setor Campinas", "Cidade Jardim", "Conjunto Vera Cruz", "Setor Centro-Oeste", "Setor dos Funcionários", "Bairro Goiá", "Capuava", "Jardim do Cerrado", "Conjunto Vera Cruz"],
    whatsappLink: "https://chat.whatsapp.com/SEU-LINK-OESTE",
  },
  {
    numero: 7,
    slug: "sudoeste",
    nome: "Sudoeste",
    bairros: ["Jardim Atlântico", "Setor Garavelo", "Jardim Europa", "Vila Rosa", "Parque Oeste Industrial", "Residencial Itaipu", "Setor Souto"],
    whatsappLink: "https://chat.whatsapp.com/SEU-LINK-SUDOESTE",
  },
];

export function getRegiaoBySlug(slug: string): Regiao | undefined {
  return regioes.find((r) => r.slug === slug);
}
