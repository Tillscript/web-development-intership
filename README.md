# Sistema de Cadastro de Curriculos

Aplicacao web onde candidatos enviam seus curriculos por um formulario e recrutadores acessam um painel para visualizar e filtrar as candidaturas recebidas. Desenvolvida como teste tecnico para estagio.

## Tecnologias utilizadas

- Java 17
- Spring Boot 3.2
- Spring Security com autenticacao JWT
- Spring Data JPA
- H2 (banco em memoria, sem instalacao necessaria)
- HTML, CSS e JavaScript puro (sem framework frontend)

## Como rodar o projeto

Voce precisa ter apenas o **Java 17** e o **Maven** instalados.

Clone o repositorio e execute:

```bash
mvn spring-boot:run
```

A aplicacao vai subir em `http://localhost:8080`. Nenhuma configuracao de banco necessaria.

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

O projeto usa H2, um banco em memoria embutido no Spring Boot. Nao precisa instalar nada.

Os dados sao perdidos ao reiniciar a aplicacao (comportamento normal para banco em memoria).

Para inspecionar os dados enquanto a aplicacao esta rodando, acesse o console H2:

```
URL: http://localhost:8080/h2-console
JDBC URL: jdbc:h2:mem:curriculos
Usuario: sa
Senha: (deixar em branco)
```
