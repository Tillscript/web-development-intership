# Sistema de Cadastro de Curriculos

Aplicacao web onde candidatos enviam seus curriculos por um formulario e recrutadores acessam um painel para visualizar e filtrar as candidaturas recebidas. Desenvolvida como teste tecnico para estagio.

## Tecnologias utilizadas

- Java 17
- Spring Boot 3.2
- Spring Security com autenticacao JWT
- Spring Data JPA
- PostgreSQL
- HTML, CSS e JavaScript puro (sem framework frontend)

## Como rodar o projeto

Voce precisa ter o Java 17 e o PostgreSQL instalados na maquina.

Crie o banco de dados antes de subir a aplicacao:

```sql
CREATE DATABASE curriculos;
```

As configuracoes de conexao ficam em `src/main/resources/application.properties`. Por padrao:
- Host: `localhost:5432`
- Banco: `curriculos`
- Usuario: `postgres`
- Senha: `admin123`

Clone o repositorio e execute:

```bash
./mvnw spring-boot:run
```

A aplicacao vai subir em `http://localhost:8080`.

## Paginas disponiveis

| Pagina | URL |
|--------|-----|
| Inicio | http://localhost:8080/index.html |
| Formulario do candidato | http://localhost:8080/candidato.html |
| Login do recrutador | http://localhost:8080/login.html |
| Painel do recrutador | http://localhost:8080/recrutador.html |

O painel do recrutador so pode ser acessado depois de fazer login. Sem o token JWT valido, a requisicao para buscar curriculos e barrada.

## Credenciais de acesso (recrutador)

```
usuario: admin
senha: admin123
```

## Endpoints da API

**Login**
```
POST /auth/login
```
```json
{
  "username": "admin",
  "password": "admin123"
}
```
Retorna um token JWT que deve ser enviado nas proximas requisicoes no header `Authorization: Bearer <token>`.

---

**Cadastrar curriculo** (publico, nao precisa de token)
```
POST /curriculos
```
```json
{
  "nomeCompleto": "Joao Silva",
  "email": "joao@email.com",
  "telefone": "11999999999",
  "area": "Backend",
  "nivel": "Junior",
  "resumo": "Desenvolvedor Java com experiencia em APIs REST."
}
```
Todos os campos sao obrigatorios. Se algum estiver faltando ou invalido, a API retorna `400` com a mensagem de erro.

---

**Listar curriculos** (requer token JWT)
```
GET /curriculos
GET /curriculos?nome=Joao
GET /curriculos?area=Backend
GET /curriculos?nivel=Junior
GET /curriculos?area=Backend&nivel=Junior
```

## Banco de dados

O projeto usa PostgreSQL. Os dados sao persistidos mesmo apos reiniciar a aplicacao.

Para inspecionar os dados, conecte direto no banco via qualquer cliente SQL (psql, DBeaver, etc.):

```
Host: localhost
Porta: 5432
Banco: curriculos
Usuario: postgres
Senha: admin123
```
