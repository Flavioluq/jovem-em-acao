# Território Jovem Goiânia — Landing Page (Fase 1)

Landing page em Next.js para a plataforma de hiperlocalismo e liderança
jovem. Nesta fase, o site apenas explica o projeto e direciona cada
visitante para o grupo de WhatsApp da sua região — sem banco de dados,
sem login, sem mapa (isso fica pra uma etapa futura).

## Sobre a versão do Next.js

Esse projeto está na versão 16.3.4 do Next.js. Ele começou na linha
14.x, mas o time do Next.js parou de lançar correções de segurança
pra 14.x depois de dezembro de 2025 — então, se um novo aviso de
segurança aparecer no `npm audit`, o caminho certo é atualizar pra
versão mais recente da 16.x (rode `npm outdated next` pra checar), e
não usar `npm audit fix --force` sem revisar antes: esse comando pode
pular versões major e quebrar o projeto sem avisar.

## Como rodar localmente

Pré-requisitos: [Node.js](https://nodejs.org) instalado (versão 18 ou
superior) e o [VS Code](https://code.visualstudio.com) (ou outro editor).

```bash
# instale as dependências
npm install

# rode o servidor de desenvolvimento
npm run dev
```

Abra http://localhost:3000 no navegador. Qualquer alteração nos
arquivos atualiza a página automaticamente.

## O que editar primeiro

**`data/regioes.ts`** — troque cada `whatsappLink` pelo link real do
grupo de WhatsApp daquela região. Os links de convite do WhatsApp têm
o formato `https://chat.whatsapp.com/XXXXXXXXXXXXXXXXXXXXXX` e você
encontra o seu em: grupo → dados do grupo → convidar via link.

Você também pode ajustar a lista de bairros de cada região direto
nesse arquivo, sem tocar em nenhum outro lugar do código.

**`data/contato.ts`** — troque `email` e `linkedin` pelos seus dados
reais. Esses valores alimentam a seção de contato no final da página
inicial.

## Cores

Todas as cores do site estão centralizadas em **`tailwind.config.ts`**,
dentro de `theme.extend.colors`. Pra trocar a paleta inteira, basta
editar os valores hexadecimais ali — não precisa mexer em nenhum
componente:

| Token | Uso | Valor atual |
|---|---|---|
| `base` | fundo da página | `#150E24` |
| `surface` | fundo dos cards | `#1E1533` |
| `surfaceAlt` | fundo dos cards ao passar o mouse | `#271B44` |
| `border` | bordas e divisórias | `#34264F` |
| `primary` | cor principal (botões, links) | `#8B5CF6` (violeta) |
| `secondary` | cor de destaque secundária | `#F472B6` (rosa) |
| `highlight` | cor de destaque terciária | `#CFFF5C` (lima) |
| `ink` | texto principal | `#F6F3FF` |
| `muted` | texto secundário | `#B6ACD9` |

## Estrutura do projeto

```
app/
  page.tsx              → página inicial (hero, metodologia, grid de regiões, contato)
  regiao/[slug]/page.tsx → template único que gera as 7 páginas de região
  layout.tsx             → fontes e metadados globais
  globals.css            → estilos base
data/
  regioes.ts              → nomes, bairros e links de cada uma das 7 regiões
  contato.ts               → e-mail e LinkedIn exibidos na seção de contato
components/
  Hero.tsx
  MethodologySteps.tsx
  RegionGrid.tsx
  Contact.tsx
  Footer.tsx
```

## Deploy (Vercel)

1. Crie um repositório no GitHub e suba este projeto (`git init`,
   `git add .`, `git commit -m "primeira versão"`, depois `git push`).
2. Crie uma conta em [vercel.com](https://vercel.com) com login do GitHub.
3. Clique em "Add New Project", selecione o repositório e clique em
   "Deploy". A Vercel detecta que é Next.js automaticamente — não
   precisa configurar nada.
4. Toda vez que você der `git push`, o site atualiza sozinho.

## Próximos passos (Fase 2)

Quando chegar a hora de migrar para Supabase, mapeamento de demandas,
votação e sistema de pontos, este mesmo projeto Next.js é reaproveitado
— só o arquivo `data/regioes.ts` deixa de ser a fonte dos dados e passa
a ser substituído por consultas ao banco.
