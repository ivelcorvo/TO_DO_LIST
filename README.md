# ✅ TO DO LIST

Aplicação desenvolvida em **React**, utilizando
**TailwindCSS** para estilização e **Firebase Authentication** para
login de usuários (Cada usuário possui sua própria lista de tarefas).

## 🚀 Tecnologias Utilizadas

-   **React (Create React App)**\
-   **Firebase Authentication (SDK)**\
-   **Firebase Realtime Database (API REST + fetch)**\
-   **TailwindCSS**

## 🔒 Segurança e Deploy

O deploy é feito com **GitHub Actions**, garantindo integração e entrega
contínua.

-   Por padrão, o `GITHUB_TOKEN` já garante autenticação segura.\
-   No entanto, utilizei um **Personal Access Token (Fine-grained)** com
    permissões restritas (`Contents: Read & Write`) apenas para este
    repositório.

Essa escolha demonstra:\
- ✔️ Princípio de **menor privilégio**\
- ✔️ Conhecimento de **configurações avançadas do GitHub**\
- ✔️ Capacidade de adaptação do fluxo de autenticação

## 💡 Aprendizados e Boas Práticas

-   Integração híbrida com **Firebase** (SDK + API REST)\
-   Autenticação e proteção de rotas com **Firebase Auth + React
    Router**\
-   CRUD completo com **fetch** no **Realtime Database**\
-   Escopo de dados por usuário (segurança e organização)\
-   UI responsiva e componentizada com TailwindCSS