# Projeto Robustec (Frontend)

Frontend desenvolvido em **Vue 3** com **Vite** e **TailwindCSS**.  
Este projeto fornece a interface do sistema Robustec, com autenticação, listagem de usuários e navegação.

---

## 🚀 Tecnologias

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Vue Router](https://router.vuejs.org/)
- [Axios](https://axios-http.com/)
- [TailwindCSS](https://tailwindcss.com/)

---

## 📦 Requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- npm ou yarn

---

## ⚙️ Instalação

Clone o repositório e entre na pasta do projeto:

```bash
git clone https://github.com/eduardorossatto2023/Robustec_FrontEnd.git
cd projeto-robustec
```

Instale as dependências:

```bash
npm install
# ou
yarn install
```

---

## ▶️ Rodando em desenvolvimento

```bash
npm run dev
```

O servidor ficará disponível em:

```
http://localhost:5173
```

---

## 🛠️ Build para produção

```bash
npm run build
```

Para visualizar o build localmente:

```bash
npm run preview
```

---

## 📂 Estrutura do projeto

```
projeto-robustec/
│── src/
│   ├── assets/          # Imagens e arquivos estáticos
│   ├── components/      # Componentes Vue reutilizáveis
│   ├── services/        # Serviços (ex: AuthService)
│   ├── views/           # Páginas da aplicação
│   ├── App.vue          # Componente principal
│   └── main.js          # Ponto de entrada
│
│── index.html           # HTML principal
│── tailwind.config.js   # Configuração TailwindCSS
│── postcss.config.js    # Configuração PostCSS
│── vite.config.js       # Configuração Vite
│── package.json         # Scripts e dependências
```

---

## 🔑 Scripts disponíveis

- `npm run dev` → Inicia o servidor de desenvolvimento
- `npm run build` → Gera build de produção
- `npm run preview` → Servidor local para testar o build

---
