# API Opening Support Tickets

API REST para **abertura e gerenciamento de tickets de suporte**, desenvolvida em **Node.js puro**, sem uso de frameworks externos (Express, Fastify, etc.), com persistência em arquivo JSON.

Projeto com foco em **boas práticas de backend**, organização de código e entendimento profundo do funcionamento de uma API REST do zero — ideal para avaliação técnica e portfólio profissional.

---

## 🚀 Destaques para Recrutadores

* ✔️ Node.js sem frameworks (domínio do core da plataforma)
* ✔️ Arquitetura organizada (rotas, controllers, utils e database)
* ✔️ Persistência de dados implementada manualmente
* ✔️ Código modular, legível e escalável
* ✔️ Uso de ES Modules
* ✔️ API REST completa com CRUD e regras de negócio

---

## 📌 Funcionalidades

* Criar tickets de suporte
* Listar tickets
* Filtrar tickets por status
* Atualizar informações do ticket
* Encerrar ticket
* Remover ticket
* Persistência automática em arquivo JSON

---

## 🛠️ Tecnologias Utilizadas

* **Node.js**
* **JavaScript (ES Modules)**
* **File System (`fs/promises`)**
* Arquitetura MVC simplificada
* API REST sem frameworks

---

## 📁 Estrutura do Projeto

````bash
src/
├── controllers/
│   └── tickets/
│       ├── create.js
│       ├── index.js
│       ├── update.js
│       ├── updateStatus.js
│       └── remove.js
├── database/
│   ├── database.js
│   └── db.json
├── middlewares/
│   ├── jsonHandler.js
│   └── routeHandler.js
├── routes/
│   ├── index.js
│   └── tickets.js
├── utils/
│   ├── extractQueryParams.js
│   └── parseRoutePath.js
├── server.js
package.json

````

---

## ⚙️ Instalação e Execução

### Pré-requisitos

* Node.js **v18 ou superior**

### Clonar o repositório

```bash
git clone https://github.com/DevFox17/API-opening-support-tickets.git
cd API-opening-support-tickets
```

### Instalar dependências

```bash
npm install
```

### Executar em modo desenvolvimento

```bash
npm run dev
```

---

## 🔌 Endpoints Principais

### Criar Ticket

```http
POST /tickets
```

```json
{
  "title": "Erro no sistema",
  "description": "Não consigo acessar a plataforma",
  "status": "open"
}
```

---

### Listar Tickets

```http
GET /tickets
```

Filtro por status:

```http
GET /tickets?status=open
```

---

### Atualizar Ticket

```http
PUT /tickets/:id
```

---

### Fechar Ticket

```http
PATCH /tickets/:id/close
```

---

### Remover Ticket

```http
DELETE /tickets/:id
```

---

## 💾 Persistência de Dados

Os dados são armazenados no arquivo `db.json`. A classe `Database` é responsável por:

* Leitura inicial dos dados
* Inserção de novos registros
* Filtro dinâmico
* Atualização por ID
* Escrita automática no arquivo

Tudo isso sem dependências externas.

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com foco em:

* Consolidar fundamentos de **backend com Node.js**
* Entender o funcionamento interno de uma API REST
* Aplicar organização de código e separação de responsabilidades
* Criar um projeto realista para portfólio técnico

---

## 🚧 Próximas Melhorias (Roadmap)

* Autenticação e autorização
* Validação de dados
* Testes automatizados
* Migração para banco de dados relacional
* Documentação com Swagger/OpenAPI

---

## 📜 Licença

ISC License

---

## 👨‍💻 Autor

**Jandavi Rodrigues**
GitHub: [https://github.com/DevFox17](https://github.com/DevFox17)
