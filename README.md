Aqui está um README.md que resume o projeto front-end que você me enviou:

# Frontend - Robustec

Este é o frontend de um sistema de gestão com autenticação, cadastro de usuários e produtos.  
O projeto foi desenvolvido em **Vue 3** com **Vue Router** e **TailwindCSS**, e se comunica com um backend (API em Go) para autenticação e gerenciamento de dados.

---

## 🚀 Tecnologias Utilizadas
- [Vue 3](https://vuejs.org/) (Composition API + Single File Components)
- [Vue Router](https://router.vuejs.org/)
- [Axios](https://axios-http.com/) (requisições HTTP)
- [TailwindCSS](https://tailwindcss.com/) (estilização)

---

## 📂 Estrutura do Projeto



src/
├─ assets/ # Estilos e imagens
│ └─ tailwind.css
├─ components/ # Componentes reutilizáveis
│ └─ DashboardLayout.vue
├─ pages/ # Páginas principais
│ ├─ Login.vue
│ ├─ Register.vue
│ ├─ Comercial.vue
│ ├─ Engenharia.vue
│ └─ RegisterProduto.vue
├─ router/ # Configuração de rotas
│ └─ index.js
├─ services/ # Serviços de integração com API
│ └─ authService.js
├─ App.vue # Componente raiz
└─ main.js # Ponto de entrada da aplicação


---

## ⚙️ Funcionalidades

- **Autenticação de Usuários**
  - Login, logout, registro e refresh de token
  - Proteção de rotas com `beforeEach`

- **Módulo Comercial**
  - Listagem e gerenciamento de usuários

- **Módulo Engenharia**
  - Listagem e gerenciamento de produtos
  - Cadastro de novos produtos

- **UI/UX**
  - Layout responsivo
  - Estilização com Tailwind
  - Navbar com menu suspenso

---

## 🔑 Rotas Principais

- `/` → **Login**
- `/register` → **Cadastro de Usuário**
- `/comercial` → **Área Comercial** (protegida)
- `/engenharia` → **Área de Engenharia** (protegida)
- `/registerProduto` → **Cadastro de Produto**

---

## 🛠️ Como Executar

### Pré-requisitos
- [Node.js](https://nodejs.org/) (>= 16)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação
```bash
# Instalar dependências
npm install
# ou
yarn install

Rodar o projeto
npm run dev
# ou
yarn dev


O frontend será iniciado em:

http://localhost:5173

🔗 Backend

Este frontend espera um backend rodando em:

http://localhost:8080


As rotas de autenticação estão em /auth.

📌 Melhorias Futuras

Criar serviços separados para usuários e produtos (não apenas AuthService)

Implementar edição de usuários/produtos

Melhorar tratamento de erros e mensagens de feedback

Criar testes automatizados

👨‍💻 Autor

Desenvolvido por Eduardo Rossatto e equipe como alunos da Faculdade Cesurg Marau.