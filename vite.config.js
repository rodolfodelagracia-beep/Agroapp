# Ferramentas Agrícolas — React + Vite + Vercel

Projeto convertido de Streamlit para **React + Vite**, com layout mais moderno e pronto para deploy na **Vercel**.

## O que tem no app

- **Calculadora de Calagem** por saturação por bases
- **Calibração de Pulverizador** com cálculo por painel ou cronômetro
- Interface responsiva, com cards, métricas e feedback visual
- Estrutura compatível com Vercel

## Estrutura

```bash
.
├── package.json
├── index.html
├── README.md
├── vercel.json
├── vite.config.js
├── public
│   └── logo.svg
└── src
    ├── App.jsx
    ├── main.jsx
    └── styles.css
```

## Como rodar localmente

```bash
npm install
npm run dev
```

## Como gerar build

```bash
npm run build
```

## Como subir na Vercel

1. Envie esta pasta para um repositório no GitHub.
2. Entre na Vercel.
3. Importe o repositório.
4. A Vercel deve detectar o projeto Vite automaticamente.
5. Faça o deploy.

## Observações

- O campo **Fósforo (P)** foi mantido para ficar próximo da estrutura do app original, mas **não entra no cálculo principal da calagem** nesta versão.
- Se você quiser, a próxima melhoria pode ser:
  - salvar histórico de cálculos,
  - exportar resultados em PDF,
  - colocar login,
  - transformar em PWA para instalar no celular,
  - incluir mais ferramentas agronômicas.


## Ajuste para deploy no Vercel

Se o deploy falhar ao resolver `src/main.jsx`, confira se a pasta `src` foi enviada junto com o projeto e se o diretório raiz do projeto está correto no Vercel. Esta versão já usa caminhos relativos no `index.html`, o que evita esse erro em uploads manuais.
